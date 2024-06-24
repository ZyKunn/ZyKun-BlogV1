# 04 - 面向对象程序设计 - 多态 :custard:

[[TOC]]

## hashCode & equals

​ hashCode 在 Java 中用于表示引用类型对象在堆内存的存储地址，如果是两个相同(比如对象的 equals 为 true)的对象，必须要保证两个对象的 hash 地址是一致的,如果对象的 equals 方法执行为 true 时，hashcode 却不一致，将会导致集合框架中（特别是 Set 集合）出现大量重复元素，从而违反 hash 表(散列表)的存储规则；因此，为了维护这一规则，**必须要确保重写对象的 equals 时必须要同时重写 hashcode**。

```java
public class Student {

	private int sno;
	private String sname;

	// alt+/
	public Student() {
		// TODO Auto-generated constructor stub
	}

	public Student(int sno, String sname) {
		super();
		this.sno = sno;
		this.sname = sname;
	}

	public int getSno() {
		return sno;
	}
	public void setSno(int sno) {
		this.sno = sno;
	}
	public String getSname() {
		return sname;
	}
	public void setSname(String sname) {
		this.sname = sname;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((sname == null) ? 0 : sname.hashCode());
		result = prime * result + sno;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Student other = (Student) obj;
		if (sname == null) {
			if (other.sname != null)
				return false;
		} else if (!sname.equals(other.sname))
			return false;
		if (sno != other.sno)
			return false;
		return true;
	}

}

```

> 注意事项:
>
> - 在比较引用数据类型的时候永远使用 equals
> - 重写 equals 方法时一定要同时重写 hashCode

## 多态入门

多态是面向对象程序设计中最为重要的一种(没有之一)特性，java 中的多态主要包含两种呈现方式：

- 行为的多态(方法多态：一种方法以多种不同的形态呈现)
  - 方法的重写
  - 方法的重载
- 变量的多态
  - 父类的引用指向子类对象
  - 子类引用指向父类对象(强制转换：前提是被转换的引用变量原本指向的就是目标对象)

```java
public class Pet{
    public void eat(){
        System.out.println("宠物吃东西");
    }
}
```

```java
public class Dog extends Pet{

}
```

```java
public class Test{

    public static void main(String[] args){
        //父类引用指向子类对象(p只能调用父类和子类共有的方法)
        Pet p = new Dog();

        //子类引用指向父类对象（实际还是Dog对象）
        Dog d = (Dog) p;
    }

}
```

### 多态的好处

多态性的优势体现在如下：

- 提高程序的**可扩展性**
- 提高代码的**可复用性**
- 提高了程序的**可维护性**

## 封装类型

​ 由于 java 中提供基本数据类型只能用于一些简单运算(算术，关系，布尔逻辑等)，但是无法像引用数据类型一样可以进行对象创建，方法或属性调用；因此对于一些特殊需求(比如：将字符串类型的数字转换整数，将十进制整数转成其他进制：2 进制，8 进制，16 进制)，基本数据类型显得功能不足；所以 JDK 提供了针对以上需求的基本类型封装类，用于进行相关类型的面向对象操作(方法调用)。

针对 java 中的 8 个基本类型数据，JDK 也提供了对应的 8 个封装类型：

| 基本类型 | 封装类型            |
| -------- | ------------------- |
| byte     | java.lang.Byte      |
| short    | java.lang.Short     |
| int      | java.lang.Integer   |
| long     | java.lang.Long      |
| float    | java.lang.Float     |
| double   | java.lang.Double    |
| char     | java.lang.Character |
| boolean  | java.lang.Boolean   |

### 基本使用

```java
int i = 10;
int j = 20;

//需求:
//将十进制整数类型转成二进制字符串 1010
//将字符串转成整数型
// int ---> java.lang.Integer

System.out.println(Integer.MAX_VALUE);
System.out.println(Integer.MIN_VALUE);

Integer inte = new Integer("123");
System.out.println(inte + i);
```

### 装箱拆箱

在 JDK1.5 之后，引入了装箱和拆箱机制，用于实现基本类型数据和对应的封装类型之间的自动转换。

- 装箱(boxing)：将基本类型的数据值包装为对应的引用类型对象
- 拆箱(unboxing)：将封装类型中的基本数据值拆成为基本数据类型

```java
//装箱（boxing）
Integer i = 10;

//拆箱(unboxing)
int j = new Integer(10);
```

> 装箱和拆箱机制的实现：
>
> 1.5 之后编译器对以下代码自动调用`Integer.valueOf()`完成装箱提供能
>
> ```java
> Integer i = 10
> ```
>
> 拆箱的实现使用的是如下方法
>
> ```java
> intValue()
> ```

#### 笔试题

```java
Integer i1 = 10;
Integer i2 = 10;
System.out.println(i1 == i2); // true

Integer i3 = 130;
Integer i4 = 130;
System.out.println(i3 == i4); //false

Integer i5 = new Integer(10);
System.out.println(i1 == i5); //false
```

> 在对基本类型数据装箱时，valueOf 方法内部会检测传入的数据值是否在缓存范围之内(-128~127）,如果位于缓存区间，则直接返回缓存的对象（如果两个基本值是相同的，则缓存的对象地址为同一个）；如果基本值超出了缓存范围，则重新创建一个 Integer 对象：
>
> ```java
> //jdk5之后新增（装箱时由编译器自动调用）
> public static Integer valueOf(int i) {
>    if (i >= IntegerCache.low && i <= IntegerCache.high)
>        return IntegerCache.cache[i + (-IntegerCache.low)];
>    return new Integer(i);
> }
> ```
>
> 注: `IntegerCache`是一个内部类，用于缓存位于`-128~127`之间的封装类型对象

## String 类

​ String 是来自 java.lang 包中的一个常见字符串处理类，用于表示一个定长字符串，String 的底层实现原理实际上就是一个字符序列(char 数组)；由于 String 是一个长度不可变的字符数组，因此对 String 进行修改实际就是在创建新的对象，在进行大量字符串拼接操作时内存和时间的开销会比较大，影响程序执行效率，因此 String 不适合做大量的字符串拼接操作。（如果有大量字符串拼接需求，建议使用:**StringBuffer 或 StringBuilder**）。

### 常见构造器

| 构造器                                  | 说明                                               |
| --------------------------------------- | -------------------------------------------------- |
| **String(String s)**                    | 根据提供的字符串直接量创建 String 对象             |
| String(char[] c)                        | 根据提供的字符数组创建 String 对象                 |
| **String(char[] c,int offset,int len)** | 根据提供的字符数组，偏移量以及长度构建 String 对象 |
| String(byte[] b)                        | 根据提供的字节数组，转换为 String 对象             |
| **String(byte[] b,int offset,int len)** | 根据提供的字节数组，偏移量以及长度构建 String 对象 |

```java

String s1 = new String("helloworld");

char[] c = {'s','o','f','t','e','e','m'};

s1 = new String(c);
System.out.println(s1);
//3:表示从数组中开始读取的位置；4:读取长度
s1 = new String(c,3,4);
System.out.println(s1);

byte[] b = {97,98,99,100};
s1 = new String(b);
System.out.println(s1);

s1 = new String(b,2,2);
System.out.println(s1);
```

### String 常用方法使用:

```java
//将ABCDEFGHIJKLMN字符串以16进制的方式显示到控制台中？
String str = "ABCDEFGHIJKLMN";
for(int i = 0;i < str.length();i++) {
    char ch = str.charAt(i);

    String hex = Integer.toHexString(ch);
    System.out.println("0X"+hex);
}

//-15  比较两个字符串在字典的顺序
System.out.println("hello".compareTo("hOrld"));

System.out.println("hello".compareToIgnoreCase("hOrld"));

//字符串拼接
System.out.println("hello".concat("world"));

//判断目标字符串中是否包含指定的子串
System.out.println("helloworld".contains("wor"));

String path = "http://www.softeem.com/index/imgs/logo.png";
//判断目标字符串是否以指定的后缀结尾
System.out.println(path.endsWith(".png"));

//判断目标字符串是否以指定的子字符串开头
System.out.println(path.startsWith("http"));

//判断指定指定的字符串在目标字符串中第一次出现的位置(索引)
System.out.println(path.indexOf("www"));

//判断目标String对象的length()返回值是否为0
System.out.println("".isEmpty());

//jdk8新增用于使用指定的分割符将不同的字符串使用该分隔符连接到一起
System.out.println(String.join("-", "hello","world","softeem"));

```

## 动态数组参数

```java
public class Test {

	/**
	 * 	动态数组参数（语法糖技术）：
	 * 	允许在定义方法的时候将参数定义为动态数组参数，
	 * 	在调用时可以动态传入任意多个符合要求的数据类型值
	 *
	 * 	动态数组参数只能位于方法参数的最后一位
	 * @param names
	 */
	public void showAllNames(String s,String... names) {
		for(String n:names) {
			System.out.println(n);
		}
	}

	public static void main(String[] args) {
		Test t = new Test();
		t.showAllNames("james","rose","kobe","curry","wade");
	}

}

```

## 作业

1. 完成一个验证码生成器，要求能够随机生成 0-9，a-z，A-Z 之间长度为 4 位的验证码，并完成一个验证过程

2. String commons = "听说凤姐去了米国，找到了心仪男票，三天两头在微博上抨击单身狗。。。。";
   ​ //屏蔽:凤姐，男票，单身狗 规则用\*替换

3. //有如下请求路径

   ```
   http://www.softeem.com/query/list.html
   ```

   //请获取请求的资源名称,即`list.html`
