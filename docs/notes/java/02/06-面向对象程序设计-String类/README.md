# 05 - 面向对象程序设计 - String 类 :chocolate_bar:

[[toc]]

## String 类(续)

```java
public class TestString {

	public void replace() {
		String commons = "听说单身狗凤姐去了米国，找到了心仪男票，三天两头在微博上抨击单身狗。。。。";
		String[] words = { "凤姐", "米国", "单身狗" };
		for (String k : words) {
			commons = commons.replace(k, placeholder(k));
		}
		System.out.println("替换后：" + commons);
	}

	// 根据字符串的字符个数返回对应长度的“*”
	public String placeholder(String s) {
		String p = "";
		for (int i = 0; i < s.length(); i++) {
			p += "*";
		}
		return p;
	}

	/**
	 * 手机号脱敏 将手机号的前三位后四位显示中间四位使用"*"替换
	 *
	 * @param phoneNum
	 * @return
	 */
	public String handler(String phoneNum) {
		return phoneNum.substring(0,3)+"****"+phoneNum.substring(8);
	}

	public static void main(String[] args) {

		String url = "http://www.softeem.com/query/list.html";
		// 获取指定的子字符串在目标字符串中最后一次出现的索引
		int i = url.lastIndexOf("/");
		System.out.println(i);
		System.out.println(url.substring(i + 1));

		// 匹配给定的字符串是否符合指定的正则表达式规则（匹配，查找，替换）
		System.out.println("13567898765".matches("1[3578]\\d{9}"));

		// 将字符串中指定的字符替换成新的字符
		System.out.println("无极剑圣剑客".replace('剑', '刀'));

		String commons = "听说单身狗凤姐去了米国，找到了心仪男票，三天两头在微博上抨击单身狗。。。。";

		System.out.println(commons.replace("单身狗", "***"));

		new TestString().replace();

		// 脱敏操作 134****7890
		System.out.println("张三13456543212男".replaceAll("1[3578]\\d{9}", "*"));

		String phone = new TestString().handler("13245674321");
		System.out.println(phone);

		String str = "10/张三/男/计算机科学与技术/68.8";
		//使用特定的分隔符对字符串截取，并存储到数组中
		String[] info = str.split("/");
//		for (String s : info) {
//			System.out.print(s + " ");
//		}
		Student stu = new Student();
		stu.setSno(Integer.parseInt(info[0]));
		stu.setSname(info[1]);
		stu.setSex(info[2]);
		stu.setMajor(info[3]);
		stu.setScore(Double.parseDouble(info[4]));

		System.out.println(stu);

		String file = "美女.png";
		System.out.println(file.split("\\.")[0]);

		//将指定的字符串转换为大写字母
		System.out.println("helloworld".toUpperCase());
		//将字符串转换为小写
		System.out.println("HelloWorld".toLowerCase());

		//将字符串前后空格去除
		System.out.println("    hello world   123   ".trim());

		//有以下学生名称   smith scott allen james kobe
		//要求将学生名字首字符大写输出？

		String name = "   smith scott allen james kobe   ";
		String[] names = name.trim().split(" ");
		for (String n : names) {
			n = n.substring(0,1).toUpperCase()+n.substring(1).toLowerCase();
			System.out.println(n);
		}

		//将整数类型值转换为String
		System.out.println(String.valueOf(100));
	}

}
```

## StringBuffer & StringBuilder

​ String 类型由于是一个定长字符串，一旦为 String 赋值，则无法修改，修改只能重新为其指定新的地址；如果需要在原来字符串的基础上增加新的内容，则意味着每次都要重新创建对象，因此在进行大量字符串拼接时，会大量消耗内存空间；如果需要涉及到经常性的字符串拼接 java 中提供了两个类来完成:

- java.lang.StringBuffer
- java.lang.StringBuilder

​ 以上两个类拥有相同的 API(提供的构造器和方法几乎一致)，两个类都是可变长度的字符串实现，区别在于**StringBuffer 是线程安全的**，**StringBuilder 是线程不安全**；StringBuilder 在多线程环境下效率要高于 StringBuffer,因为 StringBuffer 的方法中都有同步锁，因此在多线程并发访问的时候，同一时间只能有一条线程访问方法，因此，效率较低但是数据的安全性一致性能得到保证。**单线程环境下两者的效率一致**

### String、StringBuffer、StringBuilder 字符串拼接效率对比

```java
public class Test {

	//17s
	public void testString() {
		String s = "";
		for (int i = 0; i < 100000; i++) {
			s += "hello";
		}
	}

	//0.005s
	public void testStringBuffer() {
		StringBuffer sb = new StringBuffer();
		for (int i = 0; i < 100000; i++) {
			sb.append("hello");
		}
	}

    //0.005s
	public void testStringBuilder() {
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < 100000; i++) {
			sb.append("hello");
		}
	}

	public static void main(String[] args) {

		// 记录开始时间毫秒数
		long start = System.currentTimeMillis();
		new Test().testString();
		long end = System.currentTimeMillis();
		System.out.println("耗时:" + (end - start) + "毫秒");

	}

}
```

### StringBuffer 常用方法

```java
StringBuffer sb = new StringBuffer();
//链式编程(函数式编程)
sb = sb.append("hello")  // 追加内容
    .append(true)
    .append(100)
    .append(3.14);

//.insert(5, "你好世界"); // 插入 366712642

//无论StringBuffer如何追加内容，hashCode始终不变
System.out.println(sb.hashCode());

String s = "123";
System.out.println(s.hashCode());
s = "123"+"456";
//一旦String类型变量重新值则hashCode将会改变
System.out.println(s.hashCode());

System.out.println(sb);
//删除指定索引区间的子字符串
sb = sb.delete(0, 5);
//字符串反转
System.out.println(sb.reverse());

System.out.println(sb.hashCode());
```

> String、StringBuffer 和 StringBuilder 的区别？

## static

### static

​ static 是一个 java 中的关键字，同时也是一个修饰符；static 主要用于修饰属性，方法，内部类；被 static 修饰的元素与对象无关（不需要通过对象访问），称之为类成员。

- 被 static 修饰的属性称之为类属性（静态属性）
- 被 static 修饰的方法称之为类方法（静态方法）
- 被 static 修饰的初始化块称之为静态块（静态游离块）

```java
public class StaticDemo {

	static String s = "hello";

	//静态方法
	public static void m() {
		System.out.println("do something.....");
	}

	public static void main(String[] args) {
//		StaticDemo sd = new StaticDemo();
//		sd.m();
		//静态方法无需创建对象调用
		m();
		//静态属性也无需使用对象调用
		System.out.println(s);
	}

}

```

#### 注意事项

1. **被 static 修饰的元素不再与对象相关**，即 jvm 的 gc(垃圾回收)机制回收对象时与类成员无关，即不会回收 static 元素，static 元素会常驻内存直到 JVM 结束
2. **static 一般用于工具类的方法**，比如：java.util.Arrays、java.lang.Math 等
3. 类加载时会对所有的静态成员进行验证，但是此时对象还未产生，因此**不能在静态方法中调用非静态成员**
4. 针对以上的问题即：**不允许在 static 方法中使用 this 关键字**
5. **static 元素只在类加载实行一次**

#### 初始化块与 static 块

java 的类结构中还存在一个特殊的语句块：初始化块，又称之为游离块；游离块作用于构造器执行前，执行一些初始化操作；一般用于将多个不同构造器中要执行的重复代码进行统一编写。如：

```java
public class Player {

	private String name;
	private int level;

	//初始化块（游离块）
	{
		this.name = "德玛西亚";
		System.out.println("加载画布。。。。");
	}

	public Player() {
	}

	public Player(String name) {
		super();
		this.name = name;
	}

	public Player(String name, int level) {
		super();
		this.name = name;
		this.level = level;
		System.out.println("构造器执行");
	}

}
```

```java
public class Mianshi {

	String msg = "hello";

	static {
		Mianshi ms = new Mianshi();
		ms.msg = "world";
		System.out.println(ms.msg);
	}

	{
		msg="softeem";
	}

	public Mianshi() {
		msg = "你好世界";
	}

	public static void main(String[] args) {
		//类加载时会自动执行静态初始化块中的内容，即便main方法中没有编写任何内容
	}

}

```

##### static 块，游离块，构造器的执行顺序

1. 首先执行 static 块，并且只执行一次
2. 其次对象创建时先执行游离块然后才执行构造器
3. 游离块的执行次数取决于构造器的调用次数
