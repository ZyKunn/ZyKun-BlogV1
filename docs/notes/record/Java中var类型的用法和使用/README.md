# 🏔️Java 中 var 类型的用法和使用

<hr/>

[[toc]]

> 简评：Java var != JavaScript var。

## 什么是类型推断

其实在 Java 中类型推断早就存在了，看下下面的例子：

```java
public void doSomething() {
    final List<String> names = new ArrayList<String>();
}
```

在这个例子中给 ArrayList 定义持有的类型就没必要了，因为 List<\String> 已经定义了我们需要的类型 String ，在 Java 7 中增加了类型推断，这时例子可以直接写成

```java
public void doSomething() {
    final List<String> names = new ArrayList<>();
}
```

这两种写法是完全合法的，而且最终会形成一样的字节码。对经常使用泛型的开发者来说，可能早就对上面的类型推断写法习以为常。

## 那什么是局部变量类型推断？

即能推断出方法中局部变量的类型，这是 Java 10 中新增的特性，对应关键词 var，看个例子 ：

```java
public void doSomething() {
    final ??? name = "Todd";
}
```

name 是什么类型，很明显是 String，而 Java 10 就可以让编译器帮我们判断其类型，我们只要写成下面的形式：

```java
public void doSomething() {
    final var name = "Todd";
}
```

var 的使用不局限于函数内声明的变量，同时也可以用于循环的索引：

```java
final List<String> names = new ArrayList<>();

public void doSomething() {
    for(var name: names) {
        System.out.println("Name: " + name);
    }
    for(var i = 0; i < names.size(); i++) {
        System.out.println("Name: " + names.get(i));
    }
}
```

我必须使用 var 吗？不是的，老方法一样完美支持。

## 这样的做法危险吗？

一个字：不。
简单说它是受限于它们存在的方法（或循环声明）的范围。这意味着除了声明它们的方法的开发之外，人们不编写依赖于这些类型的代码。
还有大家会有一个疑惑，很多语言也是不需要定义类型的，完全由编译器搞定，以 JavaScript 举例：

```javascript
var x = 'Todd';
```

简单吧，x 是 String 类型的，但是在 JS 中能重新定义类型，比如：

```javascript
var x = 'Todd';
x = 42;
```

像这种 Java 以后是不是也不用考虑变量类型了？错，和 JS 不一样，Java 中的 var 只能在局部变量使用外，同时是不能重复赋值的，就拿上面的例子，会导致编译错误：

```java
public void doSomething() {
    var x = "Todd";
    x = 42;
}
```

Java 是强类型语言，每个变量都有固定的变量类型。

所以 var 一点都不危险，Java 也不会因此变成动态类型分配语言，这仅仅是对局部变量多了一种定义方式。

## 总结下

1. Java var != JavaScript var；
2. Var 解决了你显示声明变量的一些麻烦，但他们依然存在；
3. Var 声明的变量和显示声明的变量是一模一样的；
4. Var 类型变量不会影响到你其他的代码；

**用 var 声明变量的注意事项：**

1. var 只能在方法内定义变量，不允许定义类的成员变量。
2. var 定义变量必须赋初始值，------》以后不能在赋初始值。
3. var 每次只能定义一个变量，不能复合声明变量。

**使用 var 定义变量的优缺点：**
优点：使代码简洁和整齐。
缺点：降低了程序的可读性。

**什么时候该用 var 定义变量：**
如果你定义变量时，给变量赋给一个直观的值，这时就可以使用 var 定义变量，

**最不能使用 var 定义变量：**

1. 给 var 定义的变量赋给一个很复杂的表达式时，这样使表达式的返回值不直观，不能用 var 定义变量。
2. var 定义的变量作用域很长时，方法长和 var 变量影响较大时，不用 var 定义变量。
