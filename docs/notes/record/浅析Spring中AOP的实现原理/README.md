# 🧐 浅析 Spring 中 AOP 的实现原理——动态代理

<hr/>

[[toc]]

## 1.引言

最近在复习`Spring`的相关内容，刚刚大致研究了一下`Spring`中，`AOP`的实现原理。这篇博客就来简单地聊一聊`Spring`的`AOP`是如何实现的，并通过一个简单的测试用例来验证一下。废话不多说，直接开始。

## 2.0 正文

### 2.1 SpringAOP 的实现原理

`Spring`的`AOP`实现原理其实很简单，就是通过**动态代理**实现的。如果我们为`Spring`的某个`bean`配置了切面，那么`Spring`在创建这个`bean`的时候，实际上创建的是这个`bean`的一个代理对象，我们后续对`bean`中方法的调用，实际上调用的是代理类重写的代理方法。而`Spring`的`AOP`使用了两种动态代理，分别是**JDK 的动态代理**，以及**CGLib 的动态代理**。

**（一）JDK 动态代理**

**Spring 默认使用 JDK 的动态代理实现 AOP，类如果实现了接口，Spring 就会使用这种方式实现动态代理**。熟悉`Java`语言的应该会对`JDK`动态代理有所了解。`JDK`实现动态代理需要两个组件，首先第一个就是`InvocationHandler`接口。我们在使用`JDK`的动态代理时，需要编写一个类，去实现这个接口，然后重写`invoke`方法，这个方法其实就是我们提供的代理方法。然后`JDK`动态代理需要使用的第二个组件就是`Proxy`这个类，我们可以通过这个类的`newProxyInstance`方法，返回一个代理对象。生成的代理类实现了原来那个类的所有接口，并对接口的方法进行了代理，我们通过代理对象调用这些方法时，底层将通过反射，调用我们实现的`invoke`方法。

**（二）CGLib 动态代理**

`JDK`的动态代理存在限制，那就是被代理的类必须是一个实现了接口的类，代理类需要实现相同的接口，代理接口中声明的方法。若需要代理的类没有实现接口，此时`JDK`的动态代理将没有办法使用，于是`Spring`会使用`CGLib`的动态代理来生成代理对象。`CGLib`直接操作字节码，生成类的子类，重写类的方法完成代理。

以上就是`Spring`实现动态的两种方式，下面我们具体来谈一谈这两种生成动态代理的方式。

### 2.2 JDK 的动态代理

**（一）实现原理**

`JDK`的动态代理是基于**反射**实现。`JDK`通过反射，生成一个代理类，这个代理类实现了原来那个类的全部接口，并对接口中定义的所有方法进行了代理。当我们通过代理对象执行原来那个类的方法时，代理类底层会通过反射机制，回调我们实现的`InvocationHandler`接口的`invoke`方法。**并且这个代理类是 Proxy 类的子类**（记住这个结论，后面测试要用）。这就是`JDK`动态代理大致的实现方式。

**（二）优点**

1. `JDK`动态代理是`JDK`原生的，不需要任何依赖即可使用；
2. 通过反射机制生成代理类的速度要比`CGLib`操作字节码生成代理类的速度更快；

**（三）缺点**

1. 如果要使用`JDK`动态代理，被代理的类必须实现了接口，否则无法代理；
2. `JDK`动态代理无法为没有在接口中定义的方法实现代理，假设我们有一个实现了接口的类，我们为它的一个不属于接口中的方法配置了切面，`Spring`仍然会使用`JDK`的动态代理，但是由于配置了切面的方法不属于接口，为这个方法配置的切面将不会被织入。
3. `JDK`动态代理执行代理方法时，需要通过反射机制进行回调，此时方法执行的效率比较低；

### 2.3 CGLib 动态代理

**（一）实现原理**

`CGLib`实现动态代理的原理是，底层采用了`ASM`字节码生成框架，直接对需要代理的类的字节码进行操作，**生成这个类的一个子类，并重写了类的所有可以重写的方法**，在重写的过程中，将我们定义的额外的逻辑（简单理解为`Spring`中的切面）织入到方法中，对方法进行了增强。而通过字节码操作生成的代理类，和我们自己编写并编译后的类没有太大区别。

**（二）优点**

1. 使用`CGLib`代理的类，不需要实现接口，因为`CGLib`生成的代理类是直接继承自需要被代理的类；
2. `CGLib`生成的代理类是原来那个类的子类，这就意味着这个代理类可以为原来那个类中，所有能够被子类重写的方法进行代理；
3. `CGLib`生成的代理类，和我们自己编写并编译的类没有太大区别，对方法的调用和直接调用普通类的方式一致，所以`CGLib`执行代理方法的效率要高于`JDK`的动态代理；

**（三）缺点**

1. 由于`CGLib`的代理类使用的是继承，这也就意味着如果需要被代理的类是一个`final`类，则无法使用`CGLib`代理；
2. 由于`CGLib`实现代理方法的方式是重写父类的方法，所以无法对`final`方法，或者`private`方法进行代理，因为子类无法重写这些方法；
3. `CGLib`生成代理类的方式是通过操作字节码，这种方式生成代理类的速度要比`JDK`通过反射生成代理类的速度更慢；

### 2.4 通过代码进行测试

**（一）测试 JDK 动态代理**

下面我们通过一个简单的例子，来验证上面的说法。首先我们需要一个接口和它的一个实现类，然后再为这个实现类的方法配置切面，看看`Spring`是否真的使用的是`JDK`的动态代理。假设接口的名称为`Human`，而实现类为`Student`：

```java
public interface Human {
    void display();
}

@Component
public class Student implements Human {

    @Override
    public void display() {
        System.out.println("I am a student");
    }
}
```

然后我们定义一个切面，将这个`display`方法作为切入点，为它配置一个前置通知，代码如下：

```java
@Aspect
@Component
public class HumanAspect {
    // 为Student这个类的所有方法，配置这个前置通知
    @Before("execution(* cn.tewuyiang.pojo.Student.*(..))")
    public void before() {
        System.out.println("before student");
    }
}
```

下面可以开始测试了，我们通过`Java`类的方式进行配置，然后编写一个单元测试方法：

```java
// 配置类
@Configuration
@ComponentScan(basePackages = "cn.tewuyiang")
@EnableAspectJAutoProxy
public class AOPConfig {
}

// 测试方法
 @Test
public void testProxy() {
    ApplicationContext context =
        new AnnotationConfigApplicationContext(AOPConfig.class);
	// 注意，这里只能通过Human.class获取，而无法通过Student.class，因为在Spirng容器中，
    // 因为使用JDK动态代理，Ioc容器中，存储的是一个类型为Human的代理对象
    Human human =  context.getBean(Human.class);
    human.display();
    // 输出代理类的父类，以此判断是JDK还是CGLib
    System.out.println(human.getClass().getSuperclass());
}
```

注意看上面代码中，最长的那一句注释。由于我们需要代理的类实现了接口，则`Spring`会使用`JDK`的动态代理，生成的代理类会实现相同的接口，然后创建一个代理对象存储在`Spring`容器中。这也就是说，在`Spring`容器中，这个代理`bean`的类型不是`Student`类型，而是`Human`类型，所以我们不能通过`Student.class`获取，只能通过`Human.class`（或者通过它的名称获取）。这也证明了我们上面说过的另一个问题，`JDK`动态代理无法代理没有定义在接口中的方法。假设`Student`这个类有另外一个方法，它不是`Human`接口定义的方法，此时就算我们为它配置了切面，也无法将切面织入。而且由于在`Spring`容器中保存的代理对象并不是`Student`类型，而是`Human`类型，这就导致我们连那个不属于`Human`的方法都无法调用。这也说明了`JDK`动态代理的局限性。

我们前面说过，`JDK`动态代理生成的代理类继承了`Proxy`这个类，而`CGLib`生成的代理类，则继承了需要进行代理的那个类，于是我们可以通过输出代理对象所属类的父类，来判断`Spring`使用了何种代理。下面是输出结果：

```java
before student
I am a student
class java.lang.reflect.Proxy	// 注意看，父类是Proxy
```

通过上面的输出结果，我们发现，代理类的父类是`Proxy`，也就意味着果然使用的是`JDK`的动态代理。

**（二）测试 CGLib 动态代理**

好，测试完`JDK`动态代理，我们开始测试`CGLib`动态代理。我们前面说过，只有当需要代理的类没有实现接口时，`Spring`才会使用`CGLib`动态代理，于是我们修改`Student`这个类的定义，不让他实现接口：

```java
@Component
public class Student {
    public void display() {
        System.out.println("I am a student");
    }
}
```

由于`Student`没有实现接口，所以我们的测试方法也需要做一些修改。之前我们是通过`Human.class`这个类型从`Spring`容器中获取代理对象，但是现在，由于没有实现接口，所以我们不能再这么写了，而是要写成`Student.class`，如下：

```java
@Test
public void testProxy() {
    ApplicationContext context =
        new AnnotationConfigApplicationContext(AOPConfig.class);
	// 修改为Student.class
    Student student = context.getBean(Student.class);
    student.display();
    // 同样输出父类
    System.out.println(student.getClass().getSuperclass());
}
```

因为`CGLib`动态代理是生成了`Student`的一个子类，所以这个代理对象也是`Student`类型（子类也是父类类型），所以可以通过`Student.class`获取。下面是输出结果：

```java
before student
I am a student
class cn.tewuyiang.pojo.Student		// 此时，父类是Student
```

可以看到，`AOP`成功生效，并且代理对象所属类的父类是`Student`，验证了我们之前的说法。下面我们修改一下`Student`类的定义，将`display`方法加上`final`修饰符，再看看效果：

```java
@Component
public class Student {
    // 加上final修饰符
    public final void display() {
        System.out.println("I am a student");
    }
}

// 输出结果如下：
I am a student
class cn.tewuyiang.pojo.Student
```

可以看到，输出的父类仍然是`Student`，也就是说`Spring`依然使用了`CGLib`生成代理。但是我们发现，我们为`display`方法配置的前置通知并没有执行，也就是代理类并没有为`display`方法进行代理。这也验证了我们之前的说法，`CGLib`无法代理`final`方法，因为子类无法重写父类的`final`方法。下面我们可以试着为`Student`类加上`final`修饰符，让他无法被继承，此时看看结果。运行的结果会抛出异常，因为无法生成代理类，这里就不贴出来了，可以自己去试试。

### 2.5 强制 Spring 使用 CGLib

通过上面的测试我们会发现，`CGLib`的动态代理好像更加强大，而`JDK`的动态代理却限制颇多。而且前面也提过，`CGLib`的代理对象，执行代理方法的速度更快，只是生成代理类的效率较低。但是我们使用到的`bean`大部分都是单例的，并不需要频繁创建代理类，也就是说`CGLib`应该会更合适。但是为什么`Spring`默认使用`JDK`呢？这我也不太清楚，网上也没有找到相关的描述。但是据说`SpringBoot`现在已经默认使用`CGLib`作为`AOP`的实现了。

那我们可以强制`Spring`使用`CGLib`，而不使用`JDK`的动态代理吗？答案当然是可以的。我们知道，如果要使用注解（`@Aspect`）方式配置切面，则需要在`xml`文件中配置下面一行开启`AOP`：

```xml
<aop:aspectj-autoproxy />
```

如果我们希望只使用`CGLib`实现`AOP`，则可以在上面的这一行加点东西：

```xml
<!-- 将proxy-target-class配置设置为true -->
<aop:aspectj-autoproxy proxy-target-class="true"/>
```

当然，如果我们是使用`Java`类进行配置，比如说我们上面用到的`AOPConfig`这个类，如果是通过这种方式配置，则强制使用`CGLib`的方式如下：

```java
@Configuration
@ComponentScan(basePackages = "cn.tewuyiang")
// 如下：@EnableAspectJAutoProxy开启AOP，
// 而proxyTargetClass = true就是强制使用CGLib
@EnableAspectJAutoProxy(proxyTargetClass = true)
public class AOPConfig {

}
```

如果我们是在 xml 文件中配置切面，则可以通过以下方式来强制使用`CGLib`：

```xml
<!-- aop:config用来在xml中配置切面，指定proxy-target-class="true" -->
<aop:config proxy-target-class="true">
	<!-- 在其中配置AOP -->
</aop:config>
```

## 3.0 总结

上面我们就对`Spring`中`AOP`的实现原理做了一个大致的介绍。归根到底，`Spring AOP`的实现是通过动态代理，并且有两种实现方式，分别是`JDK`动态代理和`CGLib`动态代理。`Spring`默认使用`JDK`动态代理，只有在类没有实现接口时，才会使用`CGLib`。

上面的内容若存在错误或者不足，欢迎指正或补充。
