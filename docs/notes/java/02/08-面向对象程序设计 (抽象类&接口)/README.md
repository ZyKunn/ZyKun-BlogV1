# 07 - 面向对象程序设计(抽象类&接口):squid:

[[toc]]

## 抽象类（abstract class）

java 中凡是普通类都具备实例化对象的能力，因为一个类具备了实例化对象的一些必要信息，比如属性，比如行为；但是有些时候，当一个类中信息不足以描述一个具体对象时，此时该类就应该考虑定义为抽象类。

java 中的抽象类中所包含的信息，不足以描述一个具体对象，抽象类的内部成分由以下信息构成:

- 属性
- 构造器
- 行为
  - 已实现
  - 未实现（抽象方法）

### 抽象类基本案例

#### 语法

```
public abstract class 类名称{

    //属性定义
    //方法定义

    //抽象方法定义
    public abstract 返回值类型 方法名(参数列表);

}
```

案例:

```java
/**
 * 	抽象类
 * @author mrchai
 */
public abstract class Animal {

	private String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	//抽象方法
	public abstract void eat();
	public abstract void sleep();

}
```

Dog 类:

```java
public class Dog extends Animal{

    //实现方法
	public void eat() {
		System.out.println("吃骨头");
	}
	//实现方法
	public void sleep() {
		System.out.println("睡狗屋");
	}

}
```

#### 特点

1. 抽象类必须使用 abstract 修饰
2. 抽象类存在构造器，但是无法实例化（可以使用匿名内部类创建子类对象）
3. 抽象类中通常会包含抽象方法
4. 抽象类的存在一般是需要由子类继承，子类一旦继承了抽象类，则子类必须实现父类中的抽象方法（除非子类也是抽象类）
5. 抽象类允许继承其他抽象类，但是也只能单继承，可以通过多重继承的方式实现多继承
6. abstract 只能修饰类和方法

### 设计模式之模板方法（Template Method）

模板方法指的是对某些方法实现，另外对于一些方法定义为抽象，在实现方法中调用未实现的方法（定义好算法的骨架，具体实现由子类完成）

例如：银行计算利息，都是利率乘以本金和存款时间，但各种存款方式计算利率的方式不同，所以，在账户这个类的相关方法里，只搭出算法的骨架，但不具体实现。具体实现由各个子类来完成。

**账户类(Account.java):**

```java
public abstract class Account {

    //本金
    private double money;
    //利息
    private double interest;

    public double getMoney() {
        return money;
    }

    public void setMoney(double money) {
        this.money = money;
    }

    //定义好算法的实现骨架
    public double getInterest() {
        return money * getInterestRate();
    }

    public void setInterest(double interest) {
        this.interest = interest;
    }

    /**
	 * 	返回利率
	 * @param time
	 * @return
	 */
    public abstract double getInterestRate() ;
}

```

**活期账户类（ActiveAccount.java）**:

```java
/**
 * 	活期账户
 * @author mrchai
 *
 */
public class ActiveAccount extends Account{

    //总存款月数
    private int month;
    //基础利率
    private double base;

    public ActiveAccount(int month,double base) {
        super();
        this.month = month;
        this.base = base;
    }


    @Override
    public double getInterestRate() {
        return month * base;
    }

}

```

**定期账户类（FixedAccount.java）:**

```java
/**
 * 	定期账户
 * @author mrchai
 */
public class FixedAccount extends Account{

    private int year;
    private double base;

    public FixedAccount(int year, double base) {
        super();
        this.year = year;
        this.base = base;
    }

    @Override
    public double getInterestRate() {
        return year * base * 2;
    }

}

```

**测试类:**

```java
public class TestAccount {

	public static void main(String[] args) {

		ActiveAccount a1 = new ActiveAccount(5, 0.0001);
		a1.setMoney(50000);

		FixedAccount a2 = new FixedAccount(5, 0.03);
		a2.setMoney(50000);

		System.out.println(a1.getInterest());

		System.out.println(a2.getInterest());

	}
}
```

## 接口（interface）

接口是一种比抽象类更纯粹的抽象；因为内部只能够存在**常量**以及**未实现的方法**（JDK8 以前），接口通常用于定义一些**未实现方法的集合**，但是不对法方法具体实现，具体的实现通常是由实现类完成，接口具备以下特征：

- 接口不存在构造器，因此无法实例化
- 接口允许继承接口，可以同时继承多个接口
- 一个类可以实现多个接口，但是必须要同时实现所有接口的方法（除非抽象类）
- 抽象类也实现接口
- **JDK8 中对接口有其他新增特性（默认方法，静态方法，函数式接口）**

### 语法

```
public interface 接口名称{
    //常量定义

    //方法的声明（不含实现）
}
```

```java
/**
 * 	接口即标准
 *  USB接口：只是一种标准的定义，不包含具体实现
 *  	一流的公司定义标准  做架构
 * 		二流的公司卖服务      写框架
 * 		三流的公司卖产品     写CRUD
 *
 * 	定义一个接口
 * @author mrchai
 */
public interface Flyable {

	//默认编译器会将以下代码完善成: public static final String msg = "hello";
	String msg = "hello";

	//编译器会将以下代码自动完善：public abstract void fly()
	void fly();

}
```

### 抽象类和接口区别

- 抽象类是一种类结构，接口是一种行为准则
- 抽象类中包含类的所有特征，同时包含抽象方法；接口只能有常量和未实现的方法
- 抽象类由子类通过 extends 进行扩展；接口由实现类通过 implements 扩展
- 子类只能继承一个抽象类；一个类可以实现多个接口
- 抽象类能且只能继承一个父类；接口可以继承多个接口，接口不能继承任何类
- **抽象类是对类(名词)的一种抽象；接口是对行为(动词，形容词)的抽象，接口是一种特殊的抽象类**

## 多态详解（polymorphism）

多态的体现包含两种层面：

1. 方法层面（重写和重载）
2. 属性层面
   1. 父类引用指向子类对象
   2. 子类引用指向父类对象（原本就是子类）

多态也称之为**动态绑定**：在运行期间动态为引用变量绑定具体的对象数据
