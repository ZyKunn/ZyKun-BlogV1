# 📛Java 自定义注解

<hr/>

[[toc]]

## 一、注解的概念

#### 1.注解的概念

1. 注解是一种元数据形式。即注解是属于 java 的一种数据类型，和类、接口、数组、枚举类似。
2. 注解用来修饰，类、方法、变量、参数、包。
3. 注解不会对所修饰的代码产生直接的影响。

#### 2.注解的使用范围

> 注解又许多用法，其中有：**为编译器提供信息** - 注解能被编译器检测到错误或抑制警告。**编译时和部署时的处理** - 软件工具能处理注解信息从而生成代码，XML 文件等等。**运行时的处理** - 有些注解在运行时能被检测到。

## 二、如何自定义注解

**注解其实就是一种标记，可以在程序代码中的关键节点（类、方法、变量、参数、包）上打上这些标记，然后程序在编译时或运行时可以检测到这些标记从而执行一些特殊操作。因此可以得出自定义注解使用的基本流程：**

第一步，定义注解——相当于定义标记；
第二步，配置注解——把标记打在需要用到的程序代码中；
第三步，解析注解——在编译期或运行时检测到标记，并进行特殊操作。

#### 1.注解的基本语法

**注解类型的声明部分：**

注解在 Java 中，与类、接口、[枚举类](https://so.csdn.net/so/search?q=枚举类&spm=1001.2101.3001.7020)似，因此其声明语法基本一致，只是所使用的关键字有所不同，**注解使用`@interface关键字来声明`**。**在底层实现上，所有定义的注解都会自动继承 java.lang.annotation.Annotation 接口**。

```java
public @interface Information {

}
```

**注解类型的实现部分：**

根据我们日常定义类或接口的经验，在类中无非是要定义构造方法、属性或一般方法。但是，在自定义注解中，其实现部分**只能定义**一个东西：**注解类型元素（annotation type element）**。基本语法如下：

```java
public @interface Information {

    String name();

    int age();

    String[] hobbies();

    String address();
}
```

根据上面定义的属性，我们可以发现这种定义的内容类似抽象方法，实际上这是一种规定的**注解类型元素**。

**注解类型元素允许我们设置默认值，如果不设置则在后续使用注解时候，必须填写对应的属性值。**

```java
public @interface Information {

    String name();

    int age();

    String[] hobbies();

    String address() default "中国";

}
```

> #### 定义注解类型元素时需要注意如下几点：
>
> **1.访问修饰符必须为 public，不写默认为 public；**
>
> **2.该元素的类型只能是基本数据类型、String、Class、枚举类型、注解类型（体现了注解的嵌套效果）以及上述类型的一位数组；**
>
> **3.该元素的名称一般定义为名词，如果注解中只有一个元素，请把名字起为 value（后面使用会带来便利操作）；**
>
> **4.()不是定义方法参数的地方，也不能在括号中定义任何参数，仅仅只是一个特殊的语法；**
>
> **5.default 代表默认值，值必须和第 2 点定义的类型一致；**
>
> **6.如果没有默认值，代表后续使用注解时必须给该类型元素赋值。**

可以看出，注解类型元素的语法非常奇怪，即又有属性的特征（可以赋值）,又有方法的特征（打上了一对括号）。但是这么设计是有道理的，**在后续的代码示例中我们可以看到：注解在定义好了以后，使用的时候操作元素类型像在操作属性，解析的时候操作元素类型像在操作方法。**

#### 2.元注解

一个最基本的注解定义就只包括了上面的两部分内容：1、注解的名字；2、注解包含的类型元素。但是，我们在使用 JDK 自带注解的时候发现，有些注解只能写在方法上面（比如@Override）；有些却可以写在类的上面（比如@Deprecated）。当然除此以外还有很多细节性的定义，那么这些定义该如何做呢？这些限定就是通过元注解来实现的。
**元注解：专门修饰注解的注解。它们都是为了更好的设计自定义注解的细节而专门设计的。**

#### **（1）**@Target

@Target 注解，是专门用来限定某个自定义注解能够被应用在哪些 Java 元素上面的。它使用一个枚举类型定义如下：

```java
public enum ElementType {

    /** Class, interface (including annotation type), or enum declaration */
    TYPE,

    /** Field declaration (includes enum constants) */
    FIELD,

    /** Method declaration */
    METHOD,

    /** Formal parameter declaration */
    PARAMETER,

    /** Constructor declaration */
    CONSTRUCTOR,

    /** Local variable declaration */
    LOCAL_VARIABLE,

    /** Annotation type declaration */
    ANNOTATION_TYPE,

    /** Package declaration */
    PACKAGE,

    /**
     * Type parameter declaration
     *
     * @since 1.8
     */
    TYPE_PARAMETER,

    /**
     * Use of a type
     *
     * @since 1.8
     */
    TYPE_USE
}

```

```java
//限定@Information注解只能使用在类、接口或方法上面。
@Target({ElementType.TYPE,ElementType.METHOD})
public @interface Information {

    String name();

    int age();

    String[] hobbies();

    String address() default "中国";

}
```

#### （2）@Retention

@Retention 注解，翻译为持久力、保持力。即用来修饰自定义注解的生命力。
注解的生命周期有三个阶段：

1. **Java 源文件阶段。**
2. **编译到 class 文件阶段。**
3. **运行期阶段。**

**注：只有注解信息在运行时保留，我们才能在运行时通过反射操作获取到注解信息。**

同样使用了 RetentionPolicy 枚举类型定义了三个阶段：

```java
public enum RetentionPolicy {
    /**
     * Annotations are to be discarded by the compiler.
     * （注解将被编译器忽略掉）
     */
    SOURCE,

    /**
     * Annotations are to be recorded in the class file by the compiler
     * but need not be retained by the VM at run time.  This is the default
     * behavior.
     * （注解将被编译器记录在class文件中，但在运行时不会被虚拟机保留，这是一个默认的行为）
     */
    CLASS,


    /**
     * Annotations are to be recorded in the class file by the compiler and
     * retained by the VM at run time, so they may be read reflectively.
     * （注解将被编译器记录在class文件中，而且在运行时会被虚拟机保留，因此它们能通过反射被读取到）
     * @see java.lang.reflect.AnnotatedElement
     */
    RUNTIME

}
```

> **我们再详解一下四种 Retention 的配置：**
>
> 1.如果一个注解被定义为 RetentionPolicy.SOURCE，则它将被限定在 Java 源文件中，那么这个注解即不会参与编译也不会在运行期起任何作用，这个注解就和一个注释是一样的效果，只能被阅读 Java 文件的人看到；
>
> 2.如果一个注解被定义为 RetentionPolicy.CLASS，则它将被编译到 Class 文件中，那么编译器可以在编译时根据注解做一些处理动作，但是运行时 JVM（Java 虚拟机）会忽略它，我们在运行期也不能读取到；
>
> 3.如果一个注解被定义为 RetentionPolicy.RUNTIME，那么这个注解可以在运行期的加载阶段被加载到 Class 对象中。那么在程序运行阶段，我们可以通过反射得到这个注解，并通过判断是否有这个注解或这个注解中属性的值，从而执行不同的程序代码段。
>
> 我们实际开发中的自定义注解几乎都是使用的 RetentionPolicy.RUNTIME； 4.在默认的情况下，自定义注解是使用的 RetentionPolicy.CLASS。

#### （3）@Documented

@Documented 注解，是被用来指定自定义注解是否能随着被定义的 java 文件生成到 JavaDoc 文档当中。

#### （4）@Inherited

@Inherited 注解，是指定某个自定义注解如果写在了父类的声明部分，那么子类的声明部分也能自动拥有该注解，类似继承。@Inherited 注解只对那些@Target 被定义为 ElementType.TYPE 的自定义注解起作用。

**注：类并不从它所实现的接口继承 annotation，方法并不从它所重载的方法继承 annotation。**

## 三、自定义注解的特殊语法

#### 1.特殊语法一：

**如果注解本身没有注解类型元素，那么在使用注解的时候可以省略()，直接写为：@注解名，它和标准语法@注解名()等效！**

```java
@Retention(RetentionPolicy.RUNTIME)
@Target(value = {ElementType.TYPE})
@Documented
public @interface FirstAnnotation {
}
```

```java
//等效于@FirstAnnotation()
@FirstAnnotation
public class DemoClass{
	//省略实现部分
}
```

#### 2. 特殊语法二：

**如果注解本本身只有一个注解类型元素，而且命名为 value，那么在使用注解的时候可以直接使用：@注解名(注解值)，其等效于：@注解名(value = 注解值)。**

```java
@Retention(RetentionPolicy.RUNTIME)
@Target(value = {ElementType.TYPE})
@Documented
public @interface SecondAnnotation {
	String value();
}
```

```java
//等效于@ SecondAnnotation(value = "this is second annotation")
@SecondAnnotation("this is annotation")
public class DemoClass{
	//省略实现部分
}
```

#### 特殊用法三：

**如果注解中的某个注解类型元素是一个数组类型，在使用时又出现只需要填入一个值的情况，那么在使用注解时可以直接写为：@注解名(类型名 = 类型值)，它和标准写法：@注解名(类型名 = {类型值})等效！**

```java
@Retention(RetentionPolicy.RUNTIME)
@Target(value = {ElementType.TYPE})
@Documented
public @interface ThirdAnnotation {
	String[] name();
}
```

```java
//等效于@ ThirdAnnotation(name = {"this is third annotation"})
@ ThirdAnnotation(name = "this is third annotation")
public class DemoClass{
	//省略实现部分
}
```

#### 特殊用法四：

**如果一个注解的@Target 是定义为 Element.PACKAGE，那么这个注解是配置在 package-info.java 中的，而不能直接在某个类的 package 代码上面配置。**



## 四、使用和操作注解

> **\*\*先说下需求：\*\*定义一个自定义注解，在注解上配置相关信息，用该注解标记一个方法，然后在测试类中，检测当前方法是否标记了我们自定义的注解，如果标记了，打印标记的注解内配置信息，如果没有标记，打印"该方法没有使用 xxx 注解"。**

明确我们的需求后，前面我们说过，只有将注解的生命周期配置成运行时，即在 Runntime 时保留,才能获取注解中的相关信息。

**操作和使用注解 要用到 Java 中的核心技术——反射。**

废话少说，下面直接上代码。

```java
/**
 * @ClassName Information
 * @Description 信息注解
 * @Author EvanWang
 * @Version 1.0.0
 * @Date 2019/11/6 14:49
 */
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface Information {
    String name();

    int age();

    String[] hobbies();

    String address() default "中国";
}
```

```java
/**
 * @ClassName Person
 * @Description Person Pojo
 * @Author EvanWang
 * @Version 1.0.0
 * @Date 2019/11/6 17:06
 */
public class Person {
    String name;

    int age;

    String hobbies;

    String address;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getHobbies() {
        return hobbies;
    }

    public void setHobbies(String hobbies) {
        this.hobbies = hobbies;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
```

```java
/**
 * @ClassName PersonService
 * @Description
 * @Author EvanWang
 * @Version 1.0.0
 * @Date 2019/11/6 16:55
 */
public class PersonService {
    @Information(name = "Evan", age = 18, hobbies = {"编程", "看电影", "踢足球"})
    public void outputPersonInfo(Person person) {
        String outputStr = String.format("我是%s,我来自%s,今年%s岁，我的爱好是%s。",
                person.getName(),
                person.getAddress(),
                person.getAge(),
                person.getHobbies());
        System.out.println(outputStr);
    }
}
```

```java
/**
 * @ClassName AnnotationTest
 * @Description 自定义注解测试类
 * @Author EvanWang
 * @Version 1.0.0
 * @Date 2019/11/6 16:18
 */
public class AnnotationTest {
    public static void main(String[] args) throws Exception {
        Class<?> clazz = PersonService.class;
        Method method = clazz.getMethod("outputPersonInfo", Person.class);
        if (!method.isAnnotationPresent(Information.class)){
            System.out.println(method.getName()+"方法没有标注@Information注解！");
            return;
        }
        Person person = new Person();
        Information information = method.getAnnotation(Information.class);
        person.setName(information.name());
        person.setAddress(information.address());
        person.setAge(information.age());
        person.setHobbies(Arrays.asList(information.hobbies()).toString());
        PersonService personService=new PersonService();
        method.invoke(personService,person);
    }
}
```

#### **运行结果：**

```java
标注注解：
我是Evan,我来自中国,今年18岁，我的爱好是[编程, 看电影, 踢足球]。


未标注注解：
outputPersonInfo方法没有标注@Information注解！
```

## 五、注解结合 SpringBootAOP

参考：`ruoyi-vue-plus`中`@RepeatSubmit() 自定义注解防止表单重复提交`用法

这里贴出部分代码供参考

```java
/**
 * 自定义注解防止表单重复提交
 *
 * @author Lion Li
 */
@Inherited
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface RepeatSubmit {

    /**
     * 间隔时间(ms)，小于此时间视为重复提交
     */
    int interval() default 5000;

    TimeUnit timeUnit() default TimeUnit.MILLISECONDS;

    /**
     * 提示消息 支持国际化 格式为 {code}
     */
    String message() default "{repeat.submit.message}";

}

```

```java
/**
 * 防止重复提交(参考美团GTIS防重系统)
 *
 * @author Lion Li
 */
@Aspect
public class RepeatSubmitAspect {

    private static final ThreadLocal<String> KEY_CACHE = new ThreadLocal<>();

    @Before("@annotation(repeatSubmit)")
    public void doBefore(JoinPoint point, RepeatSubmit repeatSubmit) throws Throwable {
        // 如果注解不为0 则使用注解数值
        long interval = repeatSubmit.timeUnit().toMillis(repeatSubmit.interval());

        if (interval < 1000) {
            throw new ServiceException("重复提交间隔时间不能小于'1'秒");
        }
        HttpServletRequest request = ServletUtils.getRequest();
        String nowParams = argsArrayToString(point.getArgs());

        // 请求地址（作为存放cache的key值）
        String url = request.getRequestURI();

        // 唯一值（没有消息头则使用请求地址）
        String submitKey = StringUtils.trimToEmpty(request.getHeader(SaManager.getConfig().getTokenName()));

        submitKey = SecureUtil.md5(submitKey + ":" + nowParams);
        // 唯一标识（指定key + url + 消息头）
        String cacheRepeatKey = GlobalConstants.REPEAT_SUBMIT_KEY + url + submitKey;
        if (RedisUtils.setObjectIfAbsent(cacheRepeatKey, "", Duration.ofMillis(interval))) {
            KEY_CACHE.set(cacheRepeatKey);
        } else {
            String message = repeatSubmit.message();
            if (StringUtils.startsWith(message, "{") && StringUtils.endsWith(message, "}")) {
                message = MessageUtils.message(StringUtils.substring(message, 1, message.length() - 1));
            }
            throw new ServiceException(message);
        }
    }

    /**
     * 处理完请求后执行
     *
     * @param joinPoint 切点
     */
    @AfterReturning(pointcut = "@annotation(repeatSubmit)", returning = "jsonResult")
    public void doAfterReturning(JoinPoint joinPoint, RepeatSubmit repeatSubmit, Object jsonResult) {
        if (jsonResult instanceof R<?> r) {
            try {
                // 成功则不删除redis数据 保证在有效时间内无法重复提交
                if (r.getCode() == R.SUCCESS) {
                    return;
                }
                RedisUtils.deleteObject(KEY_CACHE.get());
            } finally {
                KEY_CACHE.remove();
            }
        }
    }

    /**
     * 拦截异常操作
     *
     * @param joinPoint 切点
     * @param e         异常
     */
    @AfterThrowing(value = "@annotation(repeatSubmit)", throwing = "e")
    public void doAfterThrowing(JoinPoint joinPoint, RepeatSubmit repeatSubmit, Exception e) {
        RedisUtils.deleteObject(KEY_CACHE.get());
        KEY_CACHE.remove();
    }

    /**
     * 参数拼装
     */
    private String argsArrayToString(Object[] paramsArray) {
        StringJoiner params = new StringJoiner(" ");
        if (ArrayUtil.isEmpty(paramsArray)) {
            return params.toString();
        }
        for (Object o : paramsArray) {
            if (ObjectUtil.isNotNull(o) && !isFilterObject(o)) {
                params.add(JsonUtils.toJsonString(o));
            }
        }
        return params.toString();
    }

    /**
     * 判断是否需要过滤的对象。
     *
     * @param o 对象信息。
     * @return 如果是需要过滤的对象，则返回true；否则返回false。
     */
    @SuppressWarnings("rawtypes")
    public boolean isFilterObject(final Object o) {
        Class<?> clazz = o.getClass();
        if (clazz.isArray()) {
            return clazz.getComponentType().isAssignableFrom(MultipartFile.class);
        } else if (Collection.class.isAssignableFrom(clazz)) {
            Collection collection = (Collection) o;
            for (Object value : collection) {
                return value instanceof MultipartFile;
            }
        } else if (Map.class.isAssignableFrom(clazz)) {
            Map map = (Map) o;
            for (Object value : map.values()) {
                return value instanceof MultipartFile;
            }
        }
        return o instanceof MultipartFile || o instanceof HttpServletRequest || o instanceof HttpServletResponse
               || o instanceof BindingResult;
    }

}

```
