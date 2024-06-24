# 06 - 面向对象程序设计(综合练习):lollipop:

[[toc]]

## 练习讲解

1. 分析以下需求，并用代码实现：

   ​ (1)从键盘循环录入录入一个字符串,输入"end"表示结束

   ​ (2)将字符串中大写字母变成小写字母，小写字母变成大写字母，其它字符用"\*"代替,并统计字母的个数

   ​ 举例:

   ​ 键盘录入：Hello12345World

   ​ 输出结果：hELLO\*\*\*\*\*wORLD

   ```java
   public class ConvertChars {


   	public static String convert(String s) {
   		StringBuffer sb = new StringBuffer();
   		for(int i = 0;i<s.length();i++) {
   			//取得每一个字符
   			char c = s.charAt(i);
   			//判断目标字符是否是小写字符
   			if(Character.isLowerCase(c)) {
   				c = Character.toUpperCase(c);
   			}else if(Character.isUpperCase(c)) {
   				c = Character.toLowerCase(c);
   			}else {
   				c = '*';
   			}
   			//将转换后的字符追加到StringBuffer中
   			sb.append(c);
   		}
   		return sb.toString();
   	}

   	public static void main(String[] args) {

   		Scanner sc = new Scanner(System.in);
   		String str = sc.nextLine();
   		//当输入内容不为“end”时执行循环
   		while(!"end".equals(str)) {
   			//执行转换
   			String s = convert(str);
   			System.out.println("转换完成:" + s);
   			str = sc.nextLine(); //i++
   		}
   		System.out.println("结束!");
   	}
   }
   ```

2. 完成一个企业人事管理系统，该系统中包含两个实体类:员工(Emp)，部门(Dept)，两个类中分别包含以下属性:

   员工(工号，姓名，性别，职位，年龄，月薪，部门）

   部门(编号，部门名，部门介绍，分机号)

   要求实现以下功能:

   完成部门的创建，添加 3 个部门

   向各个部门中添加若干员工

   查询所有的员工信息和所在的部门信息

   根据员工工号显示员工信息

   修改指定工号员工的薪资

   根据部门号查询出门中的所有员工

**员工类**

```java
public class Emp {

	private int eno;
	private String ename;
	private String sex;
	private int age;
	private String job;
	private double sal;
	private Dept dept;

    //constractor
    //setter/getter..
    //toString
}
```

**部门类**

```java
public class Dept {

	private int dno;
	private String dname;
	private String summary;
	private String tel;

     //constractor
    //setter/getter..
    //toString
}
```

**员工管理类**

```java
public class EmpManagement {
	//声明为static元素 无论创建多少个EmpManagement对象，始终只存在一个ArrayList实例
	static ArrayList<Emp> list = new ArrayList<>();

	/**
	 * 	添加员工
	 * @param e
	 * @return
	 */
	public boolean addEmp(Emp e) {
		return list.add(e);
	}

	/**
	 * 	查询所有员工
	 * @return
	 */
	public ArrayList<Emp> findAllEmp() {
		return list;
	}

	/**
	 * 	根据员工的工号查询员工对象
	 * @param eno
	 * @return
	 */
	public Emp findByEno(int eno) {
		for(Emp e:list) {
			if(e.getEno() == eno) {
				return e;
			}
		}
		return null;
	}

	/**
	 * 	修改员工薪资
	 * @param eno
	 * @param sal
	 * @return
	 */
	public boolean updateSal(int eno,double sal) {
		Emp e = findByEno(eno);
		if(e == null) {
			return false;
		}
		e.setSal(sal);
		return true;
	}

	/**
	 * 	根据部门号查询部门中的员工
	 * @param dno
	 * @return
	 */
	public ArrayList<Emp> findByDno(int dno){
		ArrayList<Emp> emps = new ArrayList<Emp>();
		for(Emp e:list) {
			//判断员工是否存在部门，以及其部门号是否等于参数提供的部门号
			if(e.getDept() != null && e.getDept().getDno() == dno) {
				emps.add(e);
			}
		}
		return emps;
	}
}

```

**测试类：**

```java
public class Client {

	public static void main(String[] args) {

		Dept d1 = new Dept(10,"研发部","软件开发方向","996996");
		Dept d2 = new Dept(20,"行政部","公司内务管理","123123");
		Dept d3 = new Dept(30,"市场部","对外招投标","333333");

		Emp e1 = new Emp(1001, "张三丰", "男", 110, "技术总监", 50000, d1);
		Emp e2 = new Emp(1002, "张翠山", "男", 110, "部门经理", 20000, d1);
		Emp e3 = new Emp(1003, "张无忌", "男", 110, "程序员", 17000, d1);
		Emp e4 = new Emp(1004, "张远桥", "男", 110, "程序员", 15000, d1);
		Emp e5 = new Emp(1005, "刘德华", "男", 110, "行政主管", 8000, d2);
		Emp e6 = new Emp(1006, "马德华", "女", 110, "前台", 5000, d2);
		Emp e7 = new Emp(1007, "王德华", "男", 110, "市场经理", 25000, d3);
		Emp e8 = new Emp(1008, "李德华", "女", 110, "市场专员", 5000, d3);

		EmpManagement em = new EmpManagement();
		em.addEmp(e1);
		em.addEmp(e2);
		em.addEmp(e3);
		em.addEmp(e4);
		em.addEmp(e5);
		em.addEmp(e6);
		em.addEmp(e7);
		em.addEmp(e8);

		System.out.println("------所有员工信息和部门信息-------");

		ArrayList<Emp> list = em.findAllEmp();
		for (Emp emp : list) {
			System.out.println(emp);
		}

		System.out.println("------显示指定员工信息-------");
		Emp e = em.findByEno(1009);
		if(e != null) {
			System.out.println(e);
		}else {
			System.out.println("员工不存在");
		}

		System.out.println("-------根据工号修改工资-------");
		boolean b = em.updateSal(1009, 15200);
		if(b) {
			System.out.println("修改成功");
			System.out.println(em.findByEno(1004));
		}else {
			System.out.println("修改失败，员工不存在!");
		}

		System.out.println("-------根据部门号查询部门中所有员工------");
		list = em.findByDno(40);
		if(list.size() > 0) {
			for (Emp emp : list) {
				System.out.println(emp);
			}
		}else {
			System.out.println("该部门中不存在员工！");
		}
	}

}

```

## Math 类&Array 类

### Math 类

```java
System.out.println(Math.E);
//获取圆周率
System.out.println(Math.PI);

System.out.println(Math.abs(-10));

System.out.println(5.0/2);

//分页技术   101  10
//向上取整 不论小数点之后是什么值始终向整数位舍入
System.out.println(Math.ceil(10.0001));
//向下取整
System.out.println(Math.floor(10.9999));
//四舍五入
System.out.println(Math.round(10.49));
//随机数（抽奖系统）
System.out.println(Math.random());
//取最大值
System.out.println(Math.max(15, 10));
//取最小值
System.out.println(Math.min(15, 10));
//BigDecimal
System.out.println(Math.nextUp(3.4));
//求一个数的n次幂
System.out.println(Math.pow(2, 4));
```

### Arrays 类

```java
/**
 * 	使用Math和ArrayList完成一个摇奖机的功能
 * 1. 将一些学生对象加入到ArrayList中（从控制台输入学生信息）
 * 2. 输入2抽象
 *
 * =======双11大抽奖======
 * ===1.添加抽奖学生======
 * ===2.开始抽奖==========
 *
 *  	输入1：
 *  	输入学生信息，添加学生
 *  	输入" end" 完成添加
 *  	输入2：
 *  	开始抽奖，对于被抽取到的学生提示：恭喜中奖，作业题10道！
 *  	已经中过奖的学生从集合中移除 remove
 *  	输入“back”可以返回上一级菜单
 *
 *  	学生信息：学号，姓名，性别，年龄，专业
 *
 * @author mrchai
 */
public class ArraysDemo {

	public static void main(String[] args) {
		//将一个数组转换为List（集合）
		List list = Arrays.asList("hello","word","softeem",100);

		int[] arr = {10,20,30,40,50,60,70,90};
		//二分查找（有序数组）
		int i = Arrays.binarySearch(arr, 70);
		System.out.println(i);
	}

}
```

## 设计模式之-单例模式（Singleton）

​ 设计模式即在软件开发历史中,经过不断迭代和演变形成的一套针对于某些特定问题，所提供的的专门的解决方案;在 java 中常见的设计模式包含 23 种，比如：

- 单例模式
- 模板方法
- 简单工厂
- 适配器模式
- 观察者模式
- 代理模式
- 装饰模式
- ....

### 单例模式概述

单例模式也称之为单态模式，单子模式等；**指的是在程序运行的过程中始终只存在一个对象(实例)**。单例模式的表现形式又分为两种：

1. 懒汉式（需要的时候才创建：以时间换空间的概念）
2. 饿汉式（类加载即创建：以空间换时间的概念）

### 懒汉式

懒汉式即需要实例对象时才创建：

```java
/**
 * 	单例模式 - 懒汉式（需要时才创建）
 * @author mrchai
 */
public class Singleton {

	private static Singleton instance; //15db9742

	//构造器私有化，不允许外界随意访问（不允许随便创建对象）
	private Singleton() {}

	public static Singleton newInstance() {
		if(instance == null) {
			instance = new Singleton();
		}
		return instance;
	}

}

```

### 饿汉式

饿汉式即类加载时就创建实例对象

```java
/**
 * 	单例模式-饿汉式(类加载即创建对象)
 * @author mrchai
 *
 */
public class Singleton2 {

	private static Singleton2 instance = new Singleton2();

	private Singleton2() {

	public static Singleton2 newInstance() {
		return instance;
	}
}

```

### 应用场景

​ 单例模式的使用场景十分广泛，比如：数据库连接池，字符串常量池，线程池等资源池，比如日历类，Runtime 类等常见与系统环境交互相关的类。

#### Runtime 类

Runtime 类是 java 中提供的与本机系统交互的类，该类的实现使用了单例模式(饿汉式)；

```java
public class Runtime {
    private static Runtime currentRuntime = new Runtime();

    /**
     * Returns the runtime object associated with the current Java application.
     * Most of the methods of class <code>Runtime</code> are instance
     * methods and must be invoked with respect to the current runtime object.
     *
     * @return  the <code>Runtime</code> object associated with the current
     *          Java application.
     */
    public static Runtime getRuntime() {
        return currentRuntime;
    }

    /** Don't let anyone else instantiate this class */
    private Runtime() {}

    //...
}
```

通过 Runtime 类可以获取系统运行环境信息，以及操作系统命令和系统中的应用程序:

```java
public class TestRuntime {

	public static void main(String[] args) throws IOException {
		//获取与当前系统环境交互的运行时对象
		Runtime rt = Runtime.getRuntime();

		//返回JVM可用内存空间
		long t = rt.freeMemory();
		//1024字节=1kb  1024kb=1mb 1024=1gb
		System.out.println(t/(1024*1024));

		//运行垃圾回收器，清理内存空间（标记清除，标记压缩，分代收集...）
		rt.gc();

		//系统退出（终止JVM）
//		rt.exit(0);
//		System.out.println("hello");
		//定时关机 （300秒之后关机）shutdown -a
//		rt.exec("shutdown -s -t 300");
		//打开控制面板
//		rt.exec("control");
		//打开计算器
//		rt.exec("calc");
		//打开画图板
//		rt.exec("mspaint");
		for (int i = 0; i < 10; i++) {
			//启动应用程序
			rt.exec("C:\\Program Files (x86)\\Tencent\\QQ\\Bin\\QQScLauncher.exe");
		}
	}

}
```

## final 关键字

final 表示最终的，final 是一个关键字，可以用于修饰类，属性和方法，被 final 修饰的元素有以下特征:

- final 修饰的类无法被继承（断子绝孙类）
- final 修饰属性一旦赋值则无法修改（常量）
- final 修饰的方法无法被重写

final 在修饰类时一般表示该类就已经是最终的实现了，不能再进行扩展；final 在修饰属性时一般会结合 static 共同使用，用于声明常量（constant）

## 常量使用

java 中的常量分为两种：

1. 直接量
2. **自定义常量**

自定义常量一般使用 final 和 static 结合使用，通常用于对某些固定不变的值进行声明，

语法：

[<访问修饰符>] static final 数据类型 类型名称 = 值;

例如:

```java
public static final double E = 2.7182818284590452354;

public static final double PI = 3.14159265358979323846;

public static final int EXIT_ON_CLOSE = 3;

/**游戏窗体标题*/
public static final String TITLE = "CXK 打篮球？or 打飞机？";
/** 窗体宽度*/
public static final int WIDTH = 450;
/** 窗体高度*/
public static final int HEIGHT = 700;
/** 隐藏窗口*/
public static final boolean HIDDEN = false;
/** 显示窗口*/
public static final boolean SHOW = true;
```

关于常量的命名规范:

1. **名称全部使用大写的英文单词**
2. **如果由多个单词组合而成，每个单词之间使用下划线隔开**

## 扩展：GUI 编程

GUI（Graphic User Interface）：图形用户接口，Java 中提供的图形界面编程技术，内部主要有两个部分构成：

- java.awt.\*
- **javax.swing.\***
- javaFx

### Swing

- JFrame 窗体：界面的骨架
- JPanel 面板：容器，内部可以摆放各种控件
- 布局(layout)：设置窗口中控件的摆放方式
- 控件：按钮，文本，输入框，文本域，下拉列表，单选按钮，表格，列表组件等 w
