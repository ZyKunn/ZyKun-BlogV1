# 01 - JavaScript 入门 :cherry_blossom:

[[TOC]]

## JS 概述

​ javaScript 简称 JS，是一门运行在客户端浏览器的脚本语言（无法独立运行的程序设计语言）；是一门直译型语言（不需要编译），是一门客户端语言；

​ Javascript 同时也是一门弱类型的程序语句，以及基于事件驱动的语言。

> 关于强类型和弱类型：
>
> **java：**
>
> ```java
> int i = 10;
> String s = "java"
> User u = new User();
>
> i = true; //编译错误
> ```
>
> 注意:java 中任何变量再使用前需要声明其数据类型，任何的变量一旦确定其类型，则只能赋予对应类型的值，运行期间不能修改为其他类型的数据，因此 Java 是一门强类型语言，即不是一门动态语言
>
> javascript：
>
> ```javascript
> i = 10
>
> i = 'js'
> i = true
> i = new Array()
>
> //variable变量
> var j = 100
> var b = true
> var s = 3.14
> var str = 'javascript'
> ```
>
> javascript 由于没有编译的过程，因此任何变量的数据类型确定是在运行期间动态绑定，并且还能在运行时修改其数据类型，因此，javascript 是一门弱类型语言，即动态语言。与 Python 相同没有都没有编译过程
>
> 通过以上案例不难看出：
>
> java 是一门服务端语言（经过编译后，直接执行）
>
> javascript 是一门客户端语言（不要编译，运行期间动态绑定，效率相对较低，不适合进行服务器开发）

### JS 使用场景

javascript 一般用于对网页特效以及表单验证等涉及到网页动态效果的功能,例如:

- 下拉菜单
- 回到顶部
- 楼层导航
- 轮播图
- 表单验证

## 基础语法

### HelloJS

javascript 一般在 html 页面中进行编写，通常位于一对`<script>`之间

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <script>
      // System.out.println()
      console.log('hello js!')
    </script>
  </body>
</html>
```

> 注意:
>
> `<script>`标签可以在 html 的任意位置进行编写，常见的区域主要出现在以下两个位置
>
> - head 标签对之间
> - **body 标签结尾处（推荐）**

### 常见引入方式

在 html 中使用 javascript 包含以下三种方式：

1. 直接在 html 页面中使用内联`<script>`标签编写

   ```html
   <html>
     <head> </head>
     <body>
       <script>
         .....
       </script>
     </body>
   </html>
   ```

2. 引入外部的脚本文件(js 文件)

   ```html
   <script src="js/js01.js"></script>
   ```

   js 文件(js01.js)

   ```javascript
   // System.out.println()
   console.log('hello js!')
   i = 10
   i = 'helloworld'
   console.log(i)
   //注意：js文件不可出现标签对 <script type="text/javascript"> </script>
   ```

3. 直接在 html 元素中使用内嵌的方式使用

   ```html
   <a href="javascript:alert('想啥呢，老铁！！')">点我看pian</a>
   ```

> #### 关于 href 和 src 区别？
>
> ```html
> <link rel="stylesheet" href="css/index.css" />
> <a href="http://www.baidu.com">百度一下，你就蒙蔽</a>
>
> <img src="img/logo.png" />
> <audio src="mp3/xiaopingguo.mp3"></audio>
> <script src="js/index.js"></script>
> ```
>
> href 和 src 都用于关联外部的资源文件，区别在于 href 所关联的资源一旦执行到此处，则**同步加载**
>
> src 所关联的资源，一旦执行到此处，则**浏览器停止对页面进行渲染**，先读取 src 关联的资源，并将资源**替换**到当前位置

### 数据类型

虽然说 js 是一门弱类型语言，但是不代表不区分数据类型，js 中也支持很多不同类型的数据，js 的主要数据类型包含以下几类:

- 数值型（包含浮点型）
- 字符串型
- 布尔型
- 数组
- 对象
- null
- undefined

#### 数值类型（number）

javascript 中对于任何的数值都是使用的 number 的数据类型表示，没有所谓浮点型和整型之分：

```javascript
var i = 10
console.log(typeof i) //number
var f = 3.14
console.log(typeof f) //number
```

> typeof 是一个 js 中的一个运算符，判断指定变量是什么类型

#### 字符串类型（string）

javascript 中对于所有的字符字符串统一使用 string 来表示，即没有字符和字符串之分，在 js 中可以使用单引号或者双引号表示字符串类型：

```javascript
var s = '中'
s = '中国'
console.log(typeof s) //string
```

#### 布尔类型（boolean）

javascript 中也存在 boolean 类型，取值也只能是 true 和 false,但是 js 中可以将任何的变量转换为 boolean 类型

```javascript
var b = false
console.log(typeof b) //boolean
var a = 0
console.log(new Boolean(a)) //false
```

#### 对象类型（object）

javascript 中的对象有多种存在形式，其中一种比较常见的显示方式为类 Java 中 map 结构（键值对），在 js 中称之为**json 对象**

```javascript
//对象(JSON对象)
//java: People p = new People()
var p = {
  id: 1,
  name: '张麻子',
  sex: '男',
  age: 18,
  marry: false,
  group: {
    gid: 1001,
    name: 'vip1'
  },
  fun: ['java', 'c', 'php', 'python']
}
console.log(typeof p)
console.log(p.name)
```

> 以上 javascript 对象可以使用如下的 Java 类描述:
>
> ```java
> class People{
>    private int id;
>    private String name;
>    private String sex;
>    private int age;
>    private boolean marry;
>    private String[] fun;
>    private Group group;
> }
>
> class Group{
>    private int gid;
>    private String name;
> }
> ```

#### 数组类型（object-引用类型）

javascript 中的数组是以对象的形式存在，是一种引用类型

```javascript
var arr = [1, 2, 3, 4, 5, 6]
arr = new Array(1, 2, 3, 4, 5)
console.log(typeof arr) // object
console.log(arr[0])
//二维数组
arr = [
  [1, 2],
  [3, 4],
  [5, 6, 7, 8]
]
arr = new Array([1, 2], [3, 4], [5, 6, 7, 8])
console.log(arr[0][1])
```

#### null 类型（object）

表示一个空对象，在内存申请了空间，但是没有为该申请的空间赋值，通常这种对象使用 null 表示

```javascript
var n = null
console.log(typeof n) //object
console.log(new Boolean(n)) //false
```

#### undefined

表示未申明的类型，与 null 类似，但是 undefined 并未申请任何空间。

### 运算符

不同的数据类型之间必然会存在运算的操作，javascript 中支持大量的运算符，javascript 中的运算符主要包含以下几类：

- 算术运算符
- 关系运算
- 布尔逻辑运算
- 位运算
- 三目运算

```javascript
/*算术运算*/
var i = 5
var j = 10
console.log(i / j) // 0.5 因为js中没有整型浮点之分，因此算术运算时，直接获取的精确值
console.log(i++) // 5
console.log(i) //6
console.log(++j) //11

/*关系运算*/
i = 10
j = '10'
//比较两个变量是否是相同，会进行类型转换
console.log(i == j) // true
//比较两个变量是否相等，不会进行类型转换（会判断类型是否相等）
console.log(i === j) // false

var p1 = { id: 1, name: 'jack' }
var p2 = { id: 1, name: 'jack' }
console.log(p1 == p2) //false

/*位运算*/
i = 8
console.log(i << 1) // 16

/*三目运算*/
i = 5
j = 10
console.log(i > j ? i : j) // 10
```

### 流程控制

#### 分支语句

##### if

if 语句的语法与 Java 基本类似，唯一不同的是 Java 中的 if 条件必须是一个布尔类型的表达式，但是 js 中 if 中可以编写任意类型的表达式，甚至是一个任何类型的变量，因为 js 中可以将任何的变量转换为 boolean 类型，例如:

```javascript
var i = 0
if (i) {
  console.log('大爷，来玩啊！')
} else {
  console.log('三年高考，五年模拟来一套！')
}
```

> i 虽然是一个 number 类型，但是 js 引擎会自动将该变量转换为 Boolean;js 中具体会将哪些数值转为 false,哪些数值转换为 true?
>
> 1.  **对于数值类型（number）,任何的非 0 的值都是 true**
> 2.  **null 和 undefined 转换为 false**
> 3.  **只要是存在的对象都是 true**
> 4.  **空字符串转换为 false**

##### swich

```javascript
var y = 2020
var m = 2
switch (m) {
  case 4:
  case 6:
  case 9:
  case 11:
    console.log(30)
    break
  case 2:
    if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) {
      console.log(29)
    } else {
      console.log(28)
    }
    break
  default:
    console.log(31)
    break
}
```

#### 循环语句

javascript 中支持的循环语句主要包含两种

- for
- while

```java
//普通for循环
for (var i = 0; i < 10; i++) {
    document.write(i+"<br>");
}

//while循环
var i = 10;
while(i<20){
    document.write(i+"&nbsp;")
        i++;
}

//do...while循环
do{
    document.write(i+"&nbsp;")
        i++;
}while(i< 30);

//for...in循环
var arr = ['jack','rose','lilei','hanmeimei','lily','lucy'];
for(var n in arr){
    console.log(arr[n]); // 在对数组操作时，n表示的是元素的索引，而非元素本身
}

var user = {
    id:1,
    name:'softeem',
    age:15,
    birth:'2006-03-01'
}
for(var n in user){
    console.log(user[n]); // 在对对象进行操作时，n表示的是对象中的属性，如果需要去除属性值，语法为 引用变量[n]
}
console.log(user.name);     //softeem
console.log(user['name']);  //softeem
```

## 练习

1. 完成一个动态日历的显示，在 html 页面中展示
