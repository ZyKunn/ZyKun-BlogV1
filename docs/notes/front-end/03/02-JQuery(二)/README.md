# 02 - JQuery（二） :2nd_place_medal:

[[TOC]]

## 案例讲解

### 全选反选

```html
<h1>jquery案例-全选反选</h1>
<input type="checkbox" name="girl" value="liuyifei1" />刘亦菲 <input type="checkbox" name="girl" value="liuyifei2" />杨幂 <input type="checkbox" name="girl" value="liuyifei3" />景甜 <input type="checkbox" name="girl" value="liuyifei4" />韩红
<input type="checkbox" name="girl" value="liuyifei5" />冯提莫 <input type="checkbox" name="girl" value="liuyifei6" />芙蓉姐姐
<br />
<input type="checkbox" id="selectAll" />全选
<!--<input type="checkbox"  id="selectReverse">反选-->
<!--<input type="checkbox"  id="selectNone">不选-->

<button id="selectReverse">反选</button>
<button id="selectNone">不选</button>

<script src="jquery-1.11.3.js"></script>
<script>
  $(function () {
    //全选
    $('#selectAll').on('click', function () {
      $('input[name=girl]').prop('checked', $(this).prop('checked'))
    })

    //反选
    $('#selectReverse').on('click', function () {
      // if($(this).prop('checked')){
      $('input[name=girl]').each(function (i, e) {
        $(e).prop('checked', !$(e).prop('checked'))
      })
      // }
    })

    //不选
    $('#selectNone').on('click', function () {
      // if($(this).prop('checked')){
      $('input[name=girl]').prop('checked', false)
      // }
    })
  })
</script>
```

### 列表元素选择切换

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        select,div{
            display: inline-block;
        }
        .btn-group{
            position:relative;
            top:-100px;
            overflow: hidden;
        }
        button{
            display: block;
            margin:10px 0;
            width: 80px;
            height: 40px;
        }
        select{
            height: 400px;
            width: 220px;
        }
        option{
            padding:10px;
            text-align: center;
        }
        ::-webkit-scrollbar{
            width: 5px;
            background: #eee;
        }
        ::-webkit-scrollbar-thumb{
            width: 5px;
            background: #222;
        }
    </style>
</head>
<body>
    <select id="left" multiple>
        <option value="">001</option>
        <option value="">002</option>
        <option value="">003</option>
        <option value="">004</option>
        <option value="">005</option>
        <option value="">001</option>
    </select>
    <div class="btn-group">
        <button class="btn-right">右移</button>
        <button class="btn-left">左移</button>
        <button class="btn-right-all">全部右移</button>
        <button class="btn-left-all">全部左移</button>
    </div>
    <select id="right" multiple></select>

    <script src="jquery-1.11.3.js"></script>
    <script>
        $(function(){
            $('.btn-right').click(function(){
                $('#right').append($('#left option:selected'));
            })
            $('.btn-left').click(function(){
                $('#left').append($('#right option:selected'));
            })
            $('.btn-right-all').click(function(){
                $('#right').append($('#left option'));
            })
            $('.btn-left-all').click(function(){
                $('#left').append($('#right option'));
            })
        })
    </script>
</body>
</html
```

### 回到顶部

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <style>
      body {
        position: relative;
        height: 3000px;
        /*线性渐变/径向渐变*/
        background: linear-gradient(to right, #2ecc71, #3498db, #9b59b6);
      }
      .back-top {
        position: fixed;
        right: 40px;
        bottom: 40px;
        width: 26px;
        height: 62px;
        background: url('img/rocket.png') no-repeat;
        transition: all 0.5s;
        display: none;
      }
      .back-top:hover {
        /*sprite图：精灵图*/
        background-position: 0 -62px;
      }
    </style>
  </head>
  <body>
    <div class="back-top"></div>
    <h1>顶部区域</h1>
    <h2 style="position:absolute;bottom:10px">底部区域</h2>
    <script src="js/jquery-1.11.3.js"></script>
    <script>
      $(function () {
        //窗口滚动事件
        $(window).scroll(function () {
          //获取当前窗口与页面顶端距离
          let top = $(this).scrollTop()
          if (top >= 300) {
            //显示回到顶部的小火箭
            $('.back-top').slideDown(1000)
          } else {
            $('.back-top').fadeOut()
          }
        })

        //点击火箭回到顶部
        $('.back-top').click(function () {
          $('html,body').animate(
            {
              scrollTop: 0
            },
            'slow'
          )
        })

        // let msg = window.prompt('请输入','123');
      })
    </script>
  </body>
</html>
```

## Ajax

### 原生 AJAX 封装

原生 JS 请求的步骤：

1. 获取 XMLHttpRequest 对象
2. 打开一个连接
3. 发送请求
4. 当请求状态发生改变时执行回调
5. 回调函数中完成需要执行的任务

```javascript
document.getElementById('btnLoad').addEventListener('click', function () {
  let url = 'http://www.softeem.top:8080/myxj/comment?method=writeComment'
  let data = 'fid=4&oid=221630726&sno=3&cont=味道真的不错，特别是腊肉香得不可描述，好评'
  ajax('post', url, data, function (resp) {
    console.log(JSON.parse(resp))
  })
})

function ajax(method, url, data, callback) {
  //获取XMLHttpRequest对象
  let xhr = new XMLHttpRequest()
  //打开请求
  xhr.open(method, url)
  //设置请求头
  xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
  //发送请求
  xhr.send(data)
  //状态改变时执行回调
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let data = xhr.responseText
      callback(data)
    }
  }
}
```

### JQuery-AJAX 详解

- $.ajax()
- $.get()
- $.post()
- $.getJSON()
- serialize()
- serializeArray()

#### get 请求

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <script src="../example/js/jquery-1.11.3.js"></script>
  </head>
  <body>
    <button id="loadData">加载歌曲数据</button>
    <script>
      $(function () {
        $('#loadData').on('click', function () {
          //参数一:请求服务端地址
          //参数二:回调函数
          //回调函数中包含参数，参数为服务端的响应数据（字符串）
          $.get('http://www.softeem.top:8080/music/list', function (data) {
            // alert(data);
            data = JSON.parse(data)
            console.log(data)
          })
        })
      })
    </script>
  </body>
</html>
```

#### Post 请求

```html
<body>
  <h1>密码修改</h1>
  <hr />
  <form id="f1">
    <!--隐藏域传值：servlet中四大会话跟踪技术之一-->
    <input type="hidden" name="method" value="modifyPwd" />
    <input type="text" name="sno" placeholder="请输入账号" required />
    <input type="password" name="oldpwd" placeholder="请输入原密码" />
    <input type="password" name="newpwd" placeholder="请输入新密码" />
    <input type="password" name="repwd" placeholder="请输入重复密码" />
    <button type="button" id="btnModify">修改密码</button>
  </form>
  <script>
    $(function () {
      $('#btnModify').on('click', function () {
        let url = 'http://127.0.0.1/myxj/user'
        //将表单控件的数据序列化为查询路径（method=modifyPwd&username=1&oldpwd=123&newpwd=123456&repwd=123456）
        let data = $('#f1').serialize()
        // let data = $('#f1').serializeArray();

        $.post(url, data, function (resp) {
          console.log(resp)
          if (resp.code) {
            alert('修改成功')
          } else {
            alert(resp.msg)
          }
        })
      })
    })
  </script>
</body>
```

#### getJSON

getJSON 默认使用 get 请求，向服务端发送请求后，自动将服务端响应回来的数据转换为 JSON 对象

```html
<button id="btnLoad">获取数据</button>
<script>
  $(function () {
    $('#btnLoad').click(function () {
      $.getJSON('http://www.softeem.top:8080/music/list', function (data) {
        console.log(data)
      })
    })
  })
</script>
```

另外，getJSON 还可以用于加载`.json`文件

```javascript
$(function () {
  $('button').click(function () {
    $.getJSON('json/herolist.json', function (data) {
      console.log(data)
    })
  })
})
```

#### load()

load 函数可以异步加载指定的页面到目标区域

```javascript
$(function () {
  $('.menu ul a').on('click', function () {
    //获取需要被加载页面
    let url = $(this).data('page')
    //异步加载指定页面资源
    $('.box').load(url)
  })
})
```

## 扩展：axios

Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

### 特性

- 从浏览器中创建 [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- 从 node.js 创建 [http](http://nodejs.org/api/http.html) 请求
- 支持 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
- 拦截请求和响应
- 转换请求数据和响应数据
- 取消请求
- 自动转换 JSON 数据
- 客户端支持防御 [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)

### 安装

使用 cdn:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

### 发送 get 请求

```html
<button id="btnLoad">加载数据</button>

<script src="js/axios.min.js"></script>
<script>
  document.getElementById('btnLoad').addEventListener('click', function () {
    //使用axios发送ajax请求
    axios
      .get('http://www.softeem.top:8080/music/list') //发送请求
      .then(function (resp) {
        //获取服务端响应之后执行
        //获取响应对象中的数据部分(服务端返回的数据)
        console.log(resp.data)
      })
      .catch(function (errorMsg) {
        //出现异常之后执行
        console.log(errorMsg)
      })
  })
</script>
```

### 执行 `POST` 请求

```javascript
axios
  .post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })
```

### 执行多个并发请求

```javascript
function getUserAccount() {
  return axios.get('/user/12345')
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions')
}

axios.all([getUserAccount(), getUserPermissions()]).then(
  axios.spread(function (acct, perms) {
    // 两个请求现在都执行完成
  })
)
```

## 练习

1. 完成王者荣耀资料站部分数据展示功能，要求通过选项卡，显示三个模块的数据：

   1. 英雄列表
   2. 局内道具
   3. 召唤师技能

   > 数据参考：作业目录下相关文件

2. 参考提供的音乐 app 项目，使用 jquery 完成对该项目改造

3. JDBC 练习题，参考作业目录
