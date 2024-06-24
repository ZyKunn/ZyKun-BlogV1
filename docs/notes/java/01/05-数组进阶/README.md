# 05 - 数组进阶 :gift:

[[toc]]

## 数组复习

1. 数组是一种只能够存储相同数据类型的数据结构
2. 数组中每一个元素都有一个索引
3. **数组中的索引从 0 开始**
4. 任何数组都存在 length 属性
5. 数组的长度一旦定义则无法改变
6. 数组动态初始化必须要指定长度（对于二维数必须要指定行数）

## 数组常见练习

### 去零问题

1、 有一个数组{19,0,7,5,0,2,0,11,22,32,0}，将数组中非 0 的数存储到一个新数组中

```java
int[] i = {19,0,7,5,0,2,0,11,22,32,0};
//1.统计不为0的数总数
int count = 0;
for(int n:i) {
    if(n != 0) {
        count++;
    }
}

//2.根据不为0的数个数创建对应容量的新数组
int[] j =  new int[count];

//3.将原数组中不为0的数存储到新数组
for(int m = 0,n = 0;m < i.length; m++) {
    if(i[m] != 0) {
        j[n++] = i[m];
    }
}

//输出新数组的元素
for(int n:j) {
    System.out.println(n);
}
```

### 排序

#### 冒泡排序

每两个相邻的数比较

```java
/**
 * 冒泡排序
 * @author mrchai
 *
 */
public class Exp02 {

	public static void main(String[] args) {

		int[] a = {9,5,4,8,7,6,3,18,2,1,11,12};

		for(int i = 0;i < a.length;i++) {
			//初始临时变量
			int t = 0;
			for(int j = 0;j < a.length - 1;j++) {
				//判断左边的数是否大于右边的数
				if(a[j] > a[j + 1]) {
					t = a[j];
					a[j] = a[j + 1];
					a[j + 1] = t;
				}
			}
			//输出第n趟排序
			System.out.print("第"+(i+1)+"趟:");
			for(int n:a) {
				System.out.print(n+" ");
			}
			System.out.println();
		}

	}

}
```

#### 选择排序

从第一个数开始依次跟之后的每一个数比较

```java
public class Exp03 {

	public static void main(String[] args) {


		int[] a = {9,5,4,8,7,6,3,18,2,1,11,12};

		for(int i = 0;i < a.length; i++) {
			//声明临时变量
			int t = 0;
			for(int j = i + 1;j < a.length; j++) {
				if(a[i] > a[j]) {
					t = a[i];
					a[i] = a[j];
					a[j] = t;
				}
			}
			//输出第n趟排序
			System.out.print("第"+(i+1)+"趟:");
			for(int n:a) {
				System.out.print(n+" ");
			}
			System.out.println();
		}



	}

}
```

### 折半查找（二分法）

折半查找也叫二分法，或者二分查找；从一组**已经排好序的数组**中搜索目标数的为止，思路：

1. 先从数组中找到中间数

```java
public class Exp05 {

	public static void main(String[] args) {
		//原数组
		int[] a = {1,2,3,4,5,6,7,8,9,11,12,18,22,30,45};
		//目标数
		int target = 22;

		//初始开始搜索位置
		int start = 0;
		//初始终止搜索位置
		int end = a.length-1;

		//初始目标数位置
		int index = -1;//索引取负数(数组中的索引永远都是从0开始)

		//统计搜索次数
		int count = 0;
		//当起始的搜索位置小于等于结束的搜索位置时执行比较
		while(start <= end) {
			//搜索次数递增
			count++;
			//获取中间数位置
			int mid = (start + end) / 2;
			//判断中间数和目标数的大小
			if(target > a[mid]) {
				//如果目标数大于了中间数，则搜索的起始位置设置到中间数位置+1
				start = mid + 1;
			}else if(target < a[mid]) {
				//如果目标数小于中间数，则搜索的结束位置设置到中间数位置-1
				end = mid - 1;
			}else {
				//找到目标数
				index = mid;
				break;
			}
		}
		System.out.println("搜索次数"+count+"目标数位置:"+index);
	}

}
```

### 约瑟夫环

```java
/**
 * 约瑟夫环
 * 有500个人围城一个圈，依次报数，每数到3的倍数的人离开圈，数完一圈后继续从1开始数，
 * 直到圈中剩下最后一个人，求剩下的人原来在圈中的位置(约瑟夫环问题)
 * @author mrchai
 *
 */
public class Exp07 {

    public static void main(String[] args) {
        //初始一个长度未500的布尔数组，表示所有人是否在圈中
        boolean[] b = new boolean[500];
        //初始所有人都在圈中
        for(int i = 0;i < b.length;i++) {
            b[i] = true;
        }

        //当前遍历到的索引
        int index = 0;
        //计数器（统计目前数到几）
        int count = 0;
        //初始总人数
        int len = b.length;

        //只要总人数超过1个就循环报数
        while(len > 1) {
            //判断当前报数的人是否在圈中
            if(b[index]) {
                //计数器递增
                count++;
                //判断是否到达3
                if(count == 3) {
                    //如果到达3则当前位置的人从圈中离开
                    b[index] = false;
                    //人数减少一个
                    len--;
                    //计数器归零
                    count = 0;
                }
            }
            index++;
            //判断是否已经数完一圈
            if(index == b.length) {
                index = 0;
            }
        }

        //对数组遍历
        for(int i = 0;i<b.length;i++) {
            //获取每一个位的结果
            if(b[i]) {
                //如果其中有一个元素为true，则表示剩下的最后一个人
                System.out.println("最后剩下的人原来在圈中的位置:"+i);
                break;
            }
        }

    }

}

```

## 数组补充

数组的长度一旦定义则无法更改，如果数组中的元素存满，还需要向数组中追加元素？

### 数组拷贝

System 类中提供了 arraycopy 方法用于实现数组拷贝功能，该方法包含 5 个参数：

```
/*
* 参数1：需要被拷贝的原始数组
* 参数2：原数组的起始拷贝位置
* 参数3：目标数组
* 参数4：目标数组的存储起始位置
* 参数5：需要从参数1数组中拷贝元素个数
*/
```

```java
int i = 100;
int[] a = {12,22,11,10,10};

int[] b = new int[a.length << 1];

//数组拷贝
/*
* 参数1：需要被拷贝的原始数组
* 参数2：原数组的起始拷贝位置
* 参数3：目标数组
* 参数4：目标数组的存储起始位置
* 参数5：需要从参数1数组中拷贝元素个数
*/
System.arraycopy(a, 0, b, 0, a.length);
b[a.length] = i;

for(int n:b) {
    System.out.println(n);
}
```

### 动态数组

​ 由于 Java 中的数组的长度一旦定义则无法改变，但是可以通过数组拷贝的方式实现数组容量扩充(创建新数组，将原来数组中的内容拷贝到新数组中)；因此，Java 中提供一个集合工具类：`java.util.ArrayList`可以用于存储任意类型的元素，并且，容量可以自动扩充；一旦 ArrayList 的容量超出，在下一次加入元素时会自动创建一个容量为原来数组 1.5 倍的新数组。

ArrayList 基本使用:

```java
public class ArrayListDemo {

    public static void main(String[] args) {
        //动态数组（长度可变（逻辑）的数组） 多态
        //实现原理即：数组  + 数据拷贝
        ArrayList list = new ArrayList();  //创建一个长度为0的空数组

        list.add(10);
        list.add(20);
        list.add(30);
        list.add(40);
        list.add(50);
        list.add(60);
        list.add(70);
        list.add(80);
        list.add(true);
        list.add("hello");
        list.add(3.14);

        System.out.println(list);
        System.out.println(list.size());
        System.out.println(list.get(7));

        //创建一个只能存放整数类型的动态数组
        ArrayList<Integer> list2 = new ArrayList<>();
        list2.add(10);
        list2.add(5);

    }

}

```

## 二维数组

二维数组即数组中的数组，一个数组中的每一个元素还是一个数组

```java
int[][] i = {
    {1,3,5},
    {2,4,6},
    {8,9}
};

//		System.out.println(i[1][1]);
//		System.out.println(i[2][1]);

//二维数组的遍历
//行
for(int m = 0; m < i.length;m++) {
    //列
    for(int n = 0;n < i[m].length; n++) {
        int e = i[m][n];
        System.out.print(e+" ");
    }
    System.out.println();
}
System.out.println("=================");
//1. 使用forEach对以上二维数组遍历
for(int[] m:i) {
    for(int n:m) {
        System.out.print(n+" ");
    }
    System.out.println();
}
```
