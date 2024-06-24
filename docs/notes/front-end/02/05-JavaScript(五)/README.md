# 05 - JavaScript（五） :hibiscus:

[[TOC]]

## Bom

### window

- setTimeout()：定时任务，延迟指定时间，执行一次回调函数（一次执行）

  ```javascript
  //延时执行任务(定时任务)
  let flag = window.setTimeout(function () {
    console.log('hello', flag)
    //清除定时任务
    window.clearTimeout(flag)
  }, 3000)
  ```

  注:以上程序为 3 秒之后输出：hello,1

  **案例：定时跳转到指定位置**

  ```html
  <p><span id="time">5</span>秒之后返回主页...</p>
  <script>
    var flag2
    var t = 5
    function backHome() {
      clearTimeout(flag2)
      document.getElementById('time').innerText = t
      t--
      if (t < 0) {
        console.log('回到主页')
        return
      }
      flag2 = setTimeout(backHome, 1000)
    }
    backHome()
  </script>
  ```

- setInterval()：定时任务，每隔指定时间执行一次回调函数（反复执行）

  ```javascript
  var count = 0
  //定时执行任务（反复执行）
  let flag2 = window.setInterval(function () {
    console.log('hello interval-->' + count)
    count++
    //当count值为10时结束定时任务
    if (count == 10) {
      clearInterval(flag2)
    }
  }, 300)
  ```

  注：以上代码每隔 0.3 秒执行一次输出：`'hello interval-->'+count`

  **案例 1：动态电子时钟**

  ```html
  <p id="t">2020年12月28日 10:22:22</p>
  <script>
    //日期格式化函数
    function DateFormater(date) {
      let y = date.getFullYear()
      let m = date.getMonth() + 1
      m = m >= 10 ? m : `0${m}`
      let d = date.getDate()
      d = d >= 10 ? d : `0${d}`
      let h = date.getHours()
      h = h >= 10 ? h : `0${h}`
      let min = date.getMinutes()
      min = min >= 10 ? min : `0${min}`
      let s = date.getSeconds()
      s = s >= 10 ? s : `0${s}`
      return `${y}年${m}月${d}日 ${h}:${min}:${s}`
    }
    //指定定时任务，每隔1秒执行一次时间显示
    setInterval(function () {
      let date = new Date()
      document.getElementById('t').innerHTML = DateFormater(date)
    }, 1000)
  </script>
  ```

### navigator

`navigator`对象表示浏览器的信息，最常用的属性包括：

- navigator.appName：浏览器名称；
- navigator.appVersion：浏览器版本；
- navigator.language：浏览器设置的语言；
- navigator.platform：操作系统类型；
- navigator.userAgent：浏览器设定的`User-Agent`字符串。

```javascript
console.log('appName = ' + navigator.appName)
console.log('appVersion = ' + navigator.appVersion)
console.log('language = ' + navigator.language)
console.log('platform = ' + navigator.platform)
console.log('userAgent = ' + navigator.userAgent)
```

### screen

`screen`对象表示屏幕的信息，常用的属性有：

- screen.width：屏幕宽度，以像素为单位；
- screen.height：屏幕高度，以像素为单位；
- screen.colorDepth：返回颜色位数，如 8、16、24。

```javascript
console.log('Screen size = ' + screen.width + ' x ' + screen.height)

console.log('可用宽度：' + screen.availWidth)
console.log('可用高度：' + screen.availHeight)
```

### location

`location`对象表示当前页面的 URL 信息。例如，一个完整的 URL：

```javascript
http://www.example.com:8080/path/index.html?a=1&b=2#TOP
```

可以用`location.href`获取。要获得 URL 各个部分的值，可以这么写：

```javascript
location.protocol // 'http'
location.host // 'www.example.com'
location.port // '8080'
location.pathname // '/path/index.html'
location.search // '?a=1&b=2'
location.hash // '#TOP'
```

> window.open 和 location.href 的区别
>
> window.open(" ")是用新窗口打开 URL 页面
> location.href=" "是用当前页面显示 URL

要加载一个新页面，可以调用`location.assign()`。如果要重新加载当前页面，调用`location.reload()`方法非常方便。

```javascript
if (confirm('重新加载当前页' + location.href + '?')) {
  location.reload()
} else {
  location.assign('/') // 设置一个新的URL地址
}
```

<kbd>代码:</kbd>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>location</title>
  </head>
  <body>
    <!-- 界面跳转的几种方式 1.a标签跳转 -->
    <a href="https://www.baidu.com" target="_blank">百度官网</a>
    <!-- 2.表单提交 -->
    <form action="https://www.baidu.com">
      <button type="submit">提交表单</button>
    </form>
    <!-- 3.利用location.href进行调转 -->
    <button type="button" onclick="location.href = 'https://www.baidu.com'">页面跳转</button>
    <!--利用location 页面刷新 -->
    <button type="button" onclick="location.reload()">页面刷新</button>
    <!--利用location 页面替换 替换浏览器无法后退(相当于把历史记录清掉了) -->
    <button type="button" onclick="location.replace('http://www.bootcss.com')">页面替换</button> <br />

    <a href="#box">锚链接</a>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <p id="box">Hello?</p>
    <script type="text/javascript">
      //localhost 表示本地域名
      //127.0.0.1	表示本地ip
      //完整的url地址由一下几个部分组成
      //1.协议: http//https
      //2.主机地址(域名//ip地址):计算机在网络中的位置(家庭住址)
      //3.端口号(0-65535):计算机中网络应用程序的对外访问端口(门牌号)
      //4.请求资源
      //5.查询路径
      //6.hash值 (看做锚链接的 锚   以 # 开头)
      let now = window.location.href
      //获取当前页面链接
      console.log('获取当前页面链接:' + now) //http://127.0.0.1:8848/JavaScript/07.Bom/08.location.html
      console.log('协议:' + location.protocol)
      console.log('端口:' + location.port)
      console.log('请求资源:' + location.pathname)
      console.log('查询路径:' + location.search)
      console.log('hash值:' + location.hash)
    </script>
  </body>
</html>
```

### history

`history`对象保存了浏览器的历史记录，JavaScript 可以调用`history`对象的`back()`或`forward ()`，相当于用户点击了浏览器的“后退”或“前进”按钮。

这个对象属于历史遗留对象，对于现代 Web 页面来说，由于大量使用 AJAX 和页面交互，简单粗暴地调用`history.back()`可能会让用户感到非常愤怒。

新手开始设计 Web 页面时喜欢在登录页登录成功时调用`history.back()`，试图回到登录前的页面。这是一种错误的方法。

任何情况，你都不应该使用`history`这个对象了。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <a href="window.html">window</a>
    <br />
    <a href="screen.html">screen</a>
    <button id="backward">后退</button>
    <button id="forward">前进</button>
    <button id="gotoPage">跳转指定位置</button>
    <script>
      console.log(history)
      document.getElementById('backward').addEventListener('click', function () {
        history.back()
      })
      document.getElementById('forward').addEventListener('click', function () {
        history.forward()
      })
      document.getElementById('gotoPage').addEventListener('click', function () {
        history.go(-2)
      })
    </script>
  </body>
</html>
```

### localStorage&sessionStorage

在 html5 中新增两个存储对象，其中一个称之为本地存储（localStorage），另一个称之为 session 存储(sessionStorage)；

1. localStorage
2. sessionStorage

​ 所谓本地存储即可以将数据(服务端数据)缓存到本地浏览器中，无论页面如何刷新，关闭甚至电脑重启等操作都不会影响数据，所存储的数据会一直存储在，除非手动清理。

​ sessionStorage 中存储的数据在一次会话中能一直存在，一旦浏览器关闭或者 session 有效期到达(20min)之后会自动清理。

无论是 localStorage 还是 sessionStorage 两者的操作 API 是一致的，缓存中存储的数据是以键值对为结构。

localStorage 和 sessionStorage 常用函数:

- **setItem(key,value)：向缓存对象中添加一个元素，键和值都是 String 类型**
- **getItem(key)：根据提供的 key 获取对应的值**
- **removeItem(key)：从存储对象中清除指定键对应的元素**
- **clear()：清除缓存中的所有内容**

案例:

**login.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <form action="main.html" onsubmit="return login(this)">
      <input type="text" name="uname" />
      <input type="password" name="pwd" />
      <button>登录</button>
    </form>

    <script>
      function login(f) {
        let name = f.uname.value
        let pwd = f.pwd.value
        if (name.length < 1) {
          alert('请输入用户名')
          return false
        }
        if (pwd.length < 1) {
          alert('请输入密码')
          return false
        }
        //向本地存储中存储数据
        // localStorage.setItem("username",name);
        // localStorage.localStorage.setItem("username",name);
        sessionStorage.setItem('username', name)
        sessionStorage.setItem('password', pwd)
      }
    </script>
  </body>
</html>
```

**main.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <h1>这里是主页</h1>
    <p>欢迎你,<span id="user"></span></p>
    <button id="clearCache">清除缓存</button>
    <script>
      // 从本地存储中获取数据
      // let name = localStorage.getItem("username") || "游客";
      let name = sessionStorage.getItem('username') || '游客'
      document.getElementById('user').innerText = name

      document.getElementById('clearCache').addEventListener('click', function () {
        //清除指定键对应的元素
        // localStorage.removeItem('username');
        //清除所有缓存数据
        // localStorage.clear();
        sessionStorage.clear()
        //页面刷新
        location.reload()
      })
    </script>
  </body>
</html>
```

> localStorage 和 sessionStorage 的应用场景：
>
> localStorage 适合用于进行网站首页数据的缓存，比如购物网站，门户网站等非安全性要求高的数据。
>
> sessionStorage 适合用于临时存储一次会话的信息，比如用户的登录账号密码等（对安全性要求高的数据）

## JSON 数据格式详解(JSON 字符串)

​ 通过以上对于存储机制的了解，发现 html5 中的 localStorage 和 sessionStorage 中都只能存储 string 类型的键值数据，无法存储较为复杂的对象数据，针对上述问题，如果需要向缓存中存储一些复杂的数据（比如对象，集合等）此时可以考虑使用一种特殊的数据交换格式：JSON。

### JSON 字符串概述

​ JSON（javascript object notation）字符串：javascript 对象通知，是一种基于 json 对象的改变而来的字符串形式的对象，数组表达形式，是一种轻量级（重量级：XML）的数据交换格式，JSON 目前广泛应用于各种语言之间的数据交换，目前各大服务端语言也都提供了相当丰富用于解析和转换 json 字符串的工具。

```JavaScript
//Json对象
var user = {
    id:1,
    name:name,
    pwd:pwd,
    vip:5,
    sex:'男'
}
//---------------------------------------------------
    //Json字符串——注意是双引号!
   {
        "id":1,
        "name":"name",
        "pwd":"pwd",
        "vip":5,
        "sex":'男'
    }
```

JSON 数据格式分为以下几种：

1. 标量(一个值)

2. 序列(数组)

   ```json
   ["admin","softeem","json"]

   [
       {
           "id":1,
           "name":"softeem",
           "age":18
       },{
           "id":1,
           "name":"softeem",
           "age":18
       }
   ]
   ```

3. 映射(对象)

   ```json
   {
     "id": 1,
     "name": "softeem",
     "age": 18,
     "groups": {
       "gid": 1001,
       "gname": "黄金会员"
     }
   }
   ```

### JS 中 JSON 序列化与反序列化

日常开发中经常需要涉及到在 js 中对 json 数据的处理，一般的处理方式分为两种：

1. json 序列化：将一个 JS(json)对象转换为一个 json 字符串的过程称之为序列化
2. json 反序列化：将一个 JSON 字符串解析为 js 对象(json 对象)的过程称之为反序列化

```javascript
//json字符串
let json = '{"id":1,"name":"softeem"}'
console.log(json)

//json对象反序列化(将json字符串解析为js对象)
json = JSON.parse(json)
console.log(json)

//json对象序列化(将js对象转换为json字符串)
json = JSON.stringify(json)
console.log(json)
```

## Ajax 基础

之前所有的页面跳转都是全局的页面刷新技术，比如：

- a 超链接
- form 表单提交
- location.href js 跳转

一旦上述代码执行，都会导致整个页面完全刷新，由于服务端或客户端网络带宽问题，可能会导致页面数据显示缓慢，影响用户体验；但是实际情况是很多的数据请求是不需要全局页面刷新的，比如用户注册时，检测用户的账号是否可用；比如页面数据展示时，只需要更新数据表格即可，无需整个页面的刷新，因此，局部刷新技术(ajax)的出现，解决了这一问题。

异步刷新技术的优势：

1. 客户端请求数据无需整个页面刷新，减少用户的等待时间，**提高了用户的体验度**
2. 页面可以按需获取数据，以减少大量数据的请求
3. 表单验证时无需整个表单提交，节省用户时间

​ AJAX（**A**synchronous **J**avascript **A**nd **X**ML）异步的 Javascript 和 XML(准确的说跟 xml 已经关系不大，目前的互联网开发数据交互更多倾向于 json)，AJAX 技术不算新颖的技术，因为他就是基于 javascript 的一项能够跟服务端交互的对象（XMLHttpRequest）实现；

### ajax 的使用步骤

一个标准的 ajax 请求分为以下几个步骤:

1. 获取 XMLHttpRequest 对象
2. 打开一个到服务端连接
3. 发送请求
4. 当请求状态改变时，接收来自服务端的响应数据

基本的 AJAX 实例:

```javascript
document.getElementById('sendRequest').addEventListener('click', function () {
  //1.获取XMLhttpRequest对象
  var xhr = new XMLHttpRequest()
  //2. 打开到服务端的请求
  xhr.open('GET', 'http://www.softeem.top:8080/music/list')
  //3.发送请求
  xhr.send(null)
  //4.当请求状态发生变化时，执行回调函数
  xhr.onreadystatechange = function () {
    //当请求完成之后执行
    if (xhr.readyState === 4) {
      //服务端响应成功
      if (xhr.status === 200) {
        //获取服务端响应的数据
        let data = xhr.responseText
        data = JSON.parse(data)
        var box = document.getElementById('box')
        data.forEach((e, i) => {
          box.innerHTML += `<span>${e.name}-${e.artist}</span><br>`
        })
      }
    }
  }
})
```

### GET 请求和 POST 请求区别

get 和 post 是客户端向服务端发送请求的两种请求方式，区别在于：

**GET**：get 请求一般用户获取服务端数据，并且可以向服务端提交少量（不超过 1024 字节),并且提交的数据直接在请求地址中通过查询路径进行拼接.比如以下地址：

```JavaScript
http://localhost:63342/part4-web%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/javascript05/ajax/login?username=softeem&password=123
```

实际的数据在最后以如下方式提交

```JavaScript
username=softeem&password=123
```

**POST：**post 请求一般用于向服务端提交数据，所提交的数据是封装在请求头中，不会在地址栏显示，因此提交的数据没有大小限制。同样是以上的请求：

```JavaScript
http://localhost:63342/part4-web%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/javascript05/ajax/login
```

提交的数据不再地址栏中显示

### AJAX 发送 Get 请求

```html
<form id="loginForm">
  <!--隐藏域-->
  <!--<input type="hidden" name="method" value="login">-->
  <input type="text" name="sno" />
  <input type="password" name="password" />
  <button type="button" id="loginBtn">登录</button>
</form>

<script>
  //(restful springMVC）
  //   http://www.softeem.top:8080/myxj/user?method=login&sno=123&password=123456
  document.getElementById('loginBtn').addEventListener('click', function () {
    //获取表单对象
    let f = document.getElementById('loginForm')
    //获取表单数据
    // let m = f.method.value;
    let name = f.sno.value
    let pwd = f.password.value

    let url = `http://www.softeem.top:8080/myxj/user?method=login&sno=${name}&password=${pwd}`
    //1.获取XMLHttpRequest对象
    let xhr = new XMLHttpRequest()
    //2.打开链接
    xhr.open('GET', url)
    //3.发送请求
    xhr.send(null)
    //4.当请求状态发生改变时执行回调
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        //获取服务端响应数据
        let data = xhr.responseText
        //将json字符串反序列化
        data = JSON.parse(data)
        if (data.code) {
          //登录成功
          location.href = 'main.html'
        } else {
          //失败
          alert(data.msg)
        }
      }
    }
  })
</script>
```

### AJAX 发送 Post 请求

```html
<form id="loginForm">
  <input type="text" name="sno" />
  <input type="password" name="password" />
  <button type="button" id="loginBtn">登录</button>
</form>

<script>
  document.getElementById('loginBtn').addEventListener('click', function () {
    //获取表单对象
    let f = document.getElementById('loginForm')
    //获取表单数据
    let name = f.sno.value
    let pwd = f.password.value

    let url = 'http://www.softeem.top:8080/myxj/user'
    //获取xmlHttpRequest对象
    let xhr = new XMLHttpRequest()
    //打开链接
    xhr.open('POST', url)
    //设置请求头（对post请求必备）
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    //发送请求
    xhr.send(`method=login&sno=${name}&password=${pwd}`)
    //4.当请求状态发生改变时执行回调
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        //获取服务端响应数据
        let data = xhr.responseText
        //将json字符串反序列化
        data = JSON.parse(data)
        if (data.code) {
          //登录成功
          location.href = 'main.html'
        } else {
          //失败
          alert(data.msg)
        }
      }
    }
  })
</script>
```

## 作业

1. 尝试对 AJAX 操作进行封装，一行语句实现 ajax 请求:

   ```javascript
   //method(必须):请求方法
   //url(必须):请求地址
   //callback(必须):回调函数
   //data(可选):传递数据
   function $ajax(method, url, callback, data) {
     //TODO
   }

   //使用
   $ajax('GET', 'http://www.softeem.top:8080/music/list', function (data) {
     //data即服务端响应的数据
   })
   ```

2. 基于提供的接口:

   ```
   http://www.softeem.top:8080/myxj/user?method=login&sno=123&password=123456
   ```

   注: 登录参数

   | 参数名   | 类型   | 备注     |
   | -------- | ------ | -------- |
   | sno      | int    | 登录账号 |
   | password | String | 登录密码 |

   要求完成一个友好的用户登录功能，登录失败，使用 layerjs 弹出对话框显示错误信息

   页面参考：`作业`文件夹(任选其一)

   ![1609150353170](./assets/1609150353170.png)

   ![1609150380948](./assets/1609150380948.png)
