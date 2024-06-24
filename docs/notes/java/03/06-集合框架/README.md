# 06 - 集合框架 :pie:

## 练习讲解

[[TOC]]

## Collections

Collections 是从 jdk1.2 之后新增用于对集合进行操作的工具类，内部的所有方法都是`static`;Collections 中常见的操作有如下：

- 二分查找
- 集合的创建
- 排序
- 顺序的打乱
- ....

## 集合排序

Collections 中用于实现集合排序的方法有如下两个：

- sort(List list)
- sort(List list,Comparator c)

深入研究以上两个方法的实现，不难看出集合中元素的排序主要依靠一下两个接口实现：

- Comparable
- Comparator

### Comparable & Comparator

​ Comparable 接口中提供了一个 compareTo 方法，该方法需要由排序类进行实现，根据方法内部的实现，Collections 中的 sort 方法会依赖该实现对元素进行排序，使用方式:

```java
public class Student implements Comparable<Student> {

	private int sno;
	private String sname;
	private String sex;
	private Date birth;
	private double score;

	//构造器
    //setter/geeter
    //toString

	@Override
	public int compareTo(Student s) {
        //按学号
//		return this.sno - s.sno;
        //按姓名
//		return this.sname.compareTo(s.sname);
        //按生日
		return this.birth.compareTo(s.birth);
	}

}
```

测试类:

```java
List list = new ArrayList();
list.add(new Student(6, "softeem", "男", new Date(100,1,10), 79.5));
list.add(new Student(4, "admin", "女", new Date(96,2,5), 89.5));
list.add(new Student(2, "bob", "男", new Date(98,0,10), 59.5));
list.add(new Student(1, "tom", "男", new Date(98,2,11), 66.0));
list.add(new Student(5, "jerry", "女", new Date(95,3,22), 39.5));

//Arrays
//排序(集合中元素必须类现Comparable接口) Collections一个集合工具类
Collections.sort(list);

for (Object object : list) {
    System.out.println(object);
}
```

运行结果:

```
Student [sno=5, sname=jerry, sex=女, birth=Sat Apr 22 00:00:00 CST 1995, score=39.5]
Student [sno=4, sname=admin, sex=女, birth=Tue Mar 05 00:00:00 CST 1996, score=89.5]
Student [sno=2, sname=bob, sex=男, birth=Sat Jan 10 00:00:00 CST 1998, score=59.5]
Student [sno=1, sname=tom, sex=男, birth=Wed Mar 11 00:00:00 CST 1998, score=66.0]
Student [sno=6, sname=softeem, sex=男, birth=Thu Feb 10 00:00:00 CST 2000, score=79.5]
```

> 对于以上排序的实现关键在于，需要让排序类实现 Comparable 接口，若未对接口实现，则运行 Collections.sort(list)将会导致异常：
>
> ```java
> Exception in thread "main" java.lang.ClassCastException: com.softeem.lesson21.collections.Student cannot be cast to java.lang.Comparable
> 	at java.util.ComparableTimSort.countRunAndMakeAscending(Unknown Source)
> 	at java.util.ComparableTimSort.sort(Unknown Source)
> 	at java.util.Arrays.sort(Unknown Source)
> 	at java.util.Arrays.sort(Unknown Source)
> 	at java.util.ArrayList.sort(Unknown Source)
> 	at java.util.Collections.sort(Unknown Source)
> 	at com.softeem.lesson21.collections.ArrayListTest.main(ArrayListTest.java:53)
> ```

以上排序方式需要由排序类实现 Comparable 接口，在 Collections 类中还提供了另一种排序实现方式，即`Collections.sort(list,comparator)`只需要传入集合与对应的排序比较器对象即可：

```java
public class User {

	private int id;
	private String name;
	private Date regTime;
	private int vipLevel;

	//构造器
    //setter/getter
    //toString
}
```

测试类：

```java
List<User> list= new ArrayList<>();
list.add(new User(1105, "softeem", new Date(), 5));
list.add(new User(1109, "rose", new Date(), 4));
list.add(new User(1106, "jack", new Date(), 5));
list.add(new User(1107, "docker", new Date(), 3));
list.add(new User(1108, "admin", new Date(), 1));
list.add(new User(1102, "bobo", new Date(), 2));

//方式一：
Collections.sort(list,new Comparator<User>() {
    @Override
    public int compare(User u1, User u2) {
        return u1.getName().compareTo(u2.getName());
    }
});
//方式二：观察sort方法的源码即可发现还可以以如下方法进行排序
list.sort(new Comparator<User>() {
    @Override
    public int compare(User u1, User u2) {
        return u2.getVipLevel() - u1.getVipLevel();
    }
});


//方式三：
Collections.sort(list, new MyCompartor());

```

> 方式三的比较器定义：
>
> ```java
> public class MyCompartor implements Comparator<User>{
>
> @Override
> public int compare(User u1, User u2) {
> 	return u1.getId() - u2.getId();
> }
>
> }
> ```

### 扩展：中文排序（Pinyin4j）

通过以上的两个接口实现排序只要选择合适接口实现，并通过调用 Collections 的 sort 方法即可完成排序，但是对于一些特殊的需求：比如中文排序，JDK 提供的解决方案比较受限，因此需要第三方的技术来实现对于中文的排序；这里可以使用开源的对中文字符处理的框架（插件）：Pinyin4j（pinyin for java）;这个插件提供了用于将中文汉字转换为汉语拼音的 API，具体使用方式分为以下步骤：

1. 将插件构建到项目中

   ` pinyin4j-2.5.0.jar`

2. 使用 pinyin4j

   ```java
   //将中文字符转换为拼音
   String[] s = PinyinHelper.toHanyuPinyinStringArray('中');
   for (String string : s) {
       System.out.println(string);
   }

   //执行结果：
   //zhong1
   //zhong4
   ```

   > 使用前需要导入：
   >
   > ```java
   > import net.sourceforge.pinyin4j.PinyinHelper;
   > ```

#### 排序方式

思路：

1. 将中文字符的每一位获取，并转换为拼音拼接陈新的字符串
2. 直接使用 String 类中已实现的`comparaTo`方法进行比较返回整数值即可

```java
List<String> list = new ArrayList<>();
list.add("王老师"); //wang
list.add("阿老师"); //a
list.add("苍老师"); //cang
list.add("波老师"); //bo
list.add("柴老师"); //chai
list.add("窦老师"); //dou
list.add("刘老师"); //liu

Collections.sort(list,new Comparator<String>() {
    @Override
    public int compare(String s1, String s2) {
        String name1 = "";
        String name2 = "";
        for(int i = 0;i<s1.length();i++) {
            char c = s1.charAt(i);
            String s = PinyinHelper.toHanyuPinyinStringArray(c)[0];
            name1 += s;
        }
        for(int i = 0;i<s2.length();i++) {
            char c = s2.charAt(i);
            String s = PinyinHelper.toHanyuPinyinStringArray(c)[0];
            name2 += s;
        }
        //将转换成汉语拼音的字符串进行比较
        return name1.compareTo(name2);
    }
});

System.out.println(list);
```

执行结果：

```
[阿老师, 波老师, 苍老师, 柴老师, 窦老师, 刘老师, 王老师]
```
