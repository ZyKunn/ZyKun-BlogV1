# 02 - JavaScript（二） :white_flower:

[[TOC]]

## 函数(方法)

javascript 中的函数，类似 java 中的方法，可以通过将一些可能需要反复执行的代码封装到一个代码片段中，该代码片段就称之为函数。javascript 中的函数语法与 java 存在较大的差异，语法结构如下：

```javascript
function 函数名称(参数列表) {
  //执行体
}
```

案例:

```java
/**
         * js的函数无论何时都不需要声明返回值类型
         * 申明参数时无需也不能指定参数类型，只需要设置参数名即可
         * @param msg
         */
function print(msg){
    console.log(msg);
}
```

### 函数定义

javascript 中的函数分类与 java 中基本一致，也包含四种类型函数：

1. 有参数有返回值
2. 有参数无返回值
3. 无参数无返回值
4. 无参数有返回值

```javascript
//有参数无返回值
function print(msg) {
  console.log(msg)
}

//无参有返回值函数
function msg() {
  return 'helloworld'
}

//有参数有返回值函数
function max(a, b) {
  return a > b ? a : b
}

//无参数无返回值函数
function show() {
  console.log('this is function')
}
```

### 函数调用

与 java 不同的是，js 中的函数调用，不需要显式的通过对象调用，只需要在`script`语句块中直接调用即可，或者通过 html 元素中相关事件属性进行调用

1. 调用方式一

```javascript
function show() {
  console.log('this is function')
}
//调用
show()
```

2. 调用方式二

```html
<button onclick="show()">点我试试</button>

<a href="javascript:print('葫芦娃大战奥特曼')">点我看片</a>
```

### 匿名函数&函数自调用

```javascript
//将一个匿名函数存储到一个变量中，（将匿名函数改成有名字的函数）
var add = function (a, b) {
  console.log(a + b)
}
add(1, 2)

//自调用函数
var value = (function (a, b) {
  var r = a > b ? a : b
  console.log('匿名函数被执行')
  return r
})(10, 20)

console.log(value)
```

### let 关键字

```JavaScript
(function a(){
			//全局变量(js中在使用前如未做任何声明，一律称之为全局变量)
			i = 10;
			var n = 20;
		})();

		console.log(i);
		//console.log(n);//局部变量无法调用  Uncaught ReferenceError: j is not defined


		if(i >= 10){
			//非函数的语句块无法形成作用域，因此该区域定义的变量，在外部可以被调用(变量污染)
			var k = 20;
			//es6 新增，用于防止变量污存在的一个关键字(let所声明的任何变量只能在声明区域使用)
			let j = 20;

		}
		console.log(k);
		console.log(j);// Uncaught ReferenceError: j is not defined
```

### 闭包

```javascript
//闭包即在一个函数内部定义的函数
//闭包提供了在函数外部对函数内部局部变量的访问能力
function counter() {
  var count = 0
  //闭包
  return {
    increment: function () {
      count++
    },
    decrement: function () {
      count--
    },
    count: function () {
      return count
    }
  }
}

var c = counter()
c.increment()
c.increment()
console.log(c.count()) // 2
var c = counter()
c.increment()
console.log(c.count()) // 1
```

闭包使用实例：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <ul id="menu">
      <li>菜单项01</li>
      <li>菜单项02</li>
      <li>菜单项03</li>
      <li>菜单项04</li>
      <li>菜单项05</li>
    </ul>

    <script>
      //根据标签名获取所有的标签所表示的元素对象
      var list = document.getElementsByTagName('li')

      //每次点击列表项时输出的都是5（出现变量污染）
      for (var i = 0; i < list.length; i++) {
        list[i].onclick = function () {
          console.log(i)
        }
      }

      //解决方法一：闭包
      //遍历列表项
      // for(var i = 0; i < list.length;i++){
      //     list[i].onclick=(function(value){
      //		   //使用闭包缓存临时变量
      //         return function(){
      //            console.log(`您点击的是第${value}项`);
      //         }
      //     })(i);
      // }

      //解决方法二：let关键字
      //使用let能够有效的防止变量污染
      for (let i = 0; i < list.length; i++) {
        list[i].onclick = function () {
          console.log(i)
        }
      }
    </script>
  </body>
</html>
```

### let 变量(ES6)

```java
(function a(){
    //全局变量(js中变量在使用前如未做任何声明，一律称之为全局变量)
    i = 10;
    var n = 20;
})();

console.log(i);
// console.log(n);//局部变量无法调用 Uncaught Reference Error: j is not defined at...


if(i >= 10){
    //es6新增，用于防止变量污染存在的一个关键字（let声明任何变量只能在声明区域使用）
    let j = 20;
    //非函数的语句块无法形成作用域，因此该区域定义的变量，在外部可以被调用(变量污染)
    var k = 20;
}
console.log(k);
console.log(j); // Uncaught ReferenceError: j is not defined at...
```

## 事件

​ js 是一门基于事件驱动的语言，多数时候的 js 代码执行不是主动执行，可能是由于 html 页面中某些元素，或者浏览器的某些动作导致 js 的执行，而触发这些动作的操作称之为事件，触发动作执行的目标称之为事件源。

### 事件分类

js 中的事件分为以下几类：

1. 窗口事件

2. 鼠标事件

3. 键盘事件

4. 文档事件

- 窗口事件

* | 事件名         | 描述                     |
  | -------------- | ------------------------ |
  | onload         | 当窗体内容被加载时触发   |
  | onunload       | 当窗体中内容卸载时触发   |
  | onbeforeunload | 当窗体内容被卸载之前触发 |
  | onresize       | 当窗体大小被改变时触发   |
  | onscroll       | 当窗口内部发生滚动时触发 |

* 鼠标事件

  | 事件名       | 描述                     |
  | ------------ | ------------------------ |
  | onclick      | 当鼠标单击时触发         |
  | ondblclick   | 当鼠标双击时触发         |
  | onmouseover  | 当鼠标悬停到元素上时触发 |
  | onmouseout   | 当鼠标从元素中移出时触发 |
  | onmouseenter | 当鼠标进入时触发         |
  | onmouseleave | 当鼠标离开时触发         |
  | onmousedown  | 当鼠标按下时触发         |
  | onmouseup    | 当鼠标抬起时触发         |

* 键盘事件

  | 事件名     | 描述                   |
  | ---------- | ---------------------- |
  | onkeydown  | 当键盘按键被按下时触发 |
  | onkeyup    | 当键盘按键抬起触发     |
  | onkeypress | 当键盘按键被按压时触发 |

* 表单事件

  | 事件名   | 描述                   |
  | -------- | ---------------------- |
  | onchange | 当控件内容改变时触发   |
  | onselect | 当控件内容被选中时触发 |
  | onblur   | 当控件失去焦点时触发   |
  | onfocus  | 当控件获得焦点时触发   |
  | onreset  | 表单重置时触发         |
  | onsubmit | 表单提交时触发         |

### 事件绑定

javascript 事件需要为指定的触发源进行绑定，js 事件绑定的方式有如下几种：

- 直接在 html 元素中通过事件名称绑定

  ```html
  <button onclick="backTop()" onmouseover="enter(this)" onmouseout="out(this)">回到顶部</button>
  ```

- 在 js 中获取元素调用元素的事件名

  ```javascript
  document.getElementById('box').onmousemove = function (e) {
    console.log(e.x + '----' + e.y)
  }

  //窗口滚动事件
  window.onscroll = function (e) {
    //获取与浏览器顶部的距离（px）
    var t = document.body.scrollTop || document.documentElement.scrollTop
    console.log('滚动条滚动' + t)
  }
  ```

- 获取元素对象之后使用`addEventListener()`方法绑定

  ```java
  //为控件添加事件监听(内容选中事件)
  document.getElementById('uname').addEventListener('select',function(e){
      console.log(this.value);
  })

      //为控件绑定change事件
      document.getElementById('city').addEventListener('change',function(e){
      console.log('选择的城市是:' + this.value);
  })

      //为表单控件绑定重置事件
      document.getElementById('form1').addEventListener('reset',function(){
      alert('表单已重置')
  })
  ```

* 获取元素对象之后使用`RemoveEventListener()`方法绑定

  ```javascript
  document.getElementById('msg').addEventListener('blur', value)

  //失去焦点函数
  function value() {
    console.log(this.value)
  }

  document.getElementById('btn').addEventListener('click', function () {
    //移除指定对象的相关事件触发的动作
    document.getElementById('msg').removeEventListener('blur', value)
  })
  ```

### 事件流

由于网页中可触发事件的元素众多，因此可能会存在在一个元素上触发事件时同时也在另一个元素上触发，针对以上事件流有两家浏览器厂商分别制定了两套标准:

1. 以 IE 为标准的事件冒泡（默认）
2. 以网景为标准的事件捕获

#### 事件冒泡&事件捕获

**事件冒泡**是一个由内向外的传播过程，当触发最内层的元素事件时，逐级向外进行传播;

**事件捕获**是一个由外向内的传播过程，当触发内层元素事件时，实际是先执行最外层元素事件，逐级向内传播；

![1608710764145](./assets/1608710764145.png)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <style>
      div {
        box-sizing: border-box;
      }
      .d1 {
        padding: 50px;
        width: 400px;
        height: 400px;
        background: #f00;
      }
      .d2 {
        padding: 50px;
        width: 300px;
        height: 300px;
        background: #0f0;
      }
      .d3 {
        width: 200px;
        height: 200px;
        background: #00f;
      }
    </style>
  </head>
  <body>
    <div class="d1" id="d1">
      <div class="d2" id="d2">
        <div class="d3" id="d3"></div>
      </div>
    </div>

    <script>
      //以下行为默认为事件冒泡机制，
      document.getElementById('d1').addEventListener('click', function () {
        console.log('box1')
      })
      document.getElementById('d2').addEventListener('click', function () {
        console.log('box2')
      })
      document.getElementById('d3').addEventListener('click', function () {
        console.log('box3')
      })
      //当为addEventListener指定第三个参数为true时，此时采用事件捕获机制
      //   document.getElementById("d1").addEventListener('click',function(){
      //    console.log('box1');
      //	},true)
    </script>
  </body>
</html>
```

##### 取消事件传播

若需要取消事件的传播，只需要通过<kbd>调用事件对象的 stopPropagation()</kbd> 即可

```javascript
document.getElementById('d1').addEventListener('click', function (e) {
  console.log('box1')
})
document.getElementById('d2').addEventListener('click', function (e) {
  console.log('box2')
})
document.getElementById('d3').addEventListener('click', function (e) {
  console.log('box3')
  //取消事件的传播
  e.stopPropagation()
})
```

## 面向对象

### 自定义对象

#### JSON 对象

```javascript
//JSON对象
var hero = {
  img: new Image(),
  x: 100,
  y: 200,
  w: 90,
  h: 60,
  speed: 10,
  draw: function () {
    let that = this
    that.img.src = 'hero.png'
    that.img.onload = function () {
      //设置图片样式
      this.style.position = 'absolute'
      this.style.left = `${that.x}px`
      this.style.top = `${that.y}px`
      //设置图片大小
      this.width = that.w
      this.height = that.h
      document.getElementById('box').appendChild(this)
    }
  },
  moveTo: function (x, y) {
    //移动
    this.x = x
    this.y = y
    //重绘
    this.draw()
  }
}
//绘制飞机
hero.draw()
```

#### 构造器创建对象

```javascript
//构造器
function User(id, name, pwd, show) {
  this.id = id
  this.name = name
  this.pwd = pwd
  this.getName = function () {
    return name
  }
  this.setName = function (n) {
    this.name = n
  }
  this.show = show
}

var u1 = new User(1, 'softeem', '123')
console.log(u1.getName())

//参数不仅可以传入基本数据类型，也可以传入函数
var u2 = new User(2, 'admin', '123456', function () {
  console.log('hello')
})
u2.show()
```
