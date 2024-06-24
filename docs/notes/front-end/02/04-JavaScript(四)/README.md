# 04 - JavaScript（四） :rose:

[[TOC]]

## DOM 编程

### 插入 DOM

js-dom 中向指定节点插入元素的方法主要包含以下几类：

1. appendChild(node)：向当前节点中插入子元素（子元素必须是一个 dom 对象）
2. insertBefore(newNode,refNode)：向当前节点中的 refNode 之前插入 newNode
3. innerHTML：向当前节点插入 html 代码（覆盖原有的内容）

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <div id="box1">
      <h1>dom插入演示</h1>
    </div>
    <button type="button" id="insert1" data-list="[1,2,3,4,5]">插入元素</button>
    <button type="button" id="insert2">插入输入框</button>

    <script>
      //获取目标节点
      var box1 = document.querySelector('#box1')
      document.getElementById('insert1').addEventListener('click', function () {
        //创建节点
        var hr = document.createElement('hr')
        //将指定节点插入到目标节点
        // let e = box1.appendChild(hr);
        let h1 = document.querySelector('h1')
        //向指定节点中的某一个子节点之前插入元素
        box1.insertBefore(hr, h1)
      })

      document.getElementById('insert2').addEventListener('click', function () {
        //创建节点
        var input = document.createElement('input')
        input.type = 'text'
        input.textContent = '123123123'
        input.value = 'softeem'
        input.className = 'input-box'
        input.id = 'username'
        //setAttribute用于向元素中添加属性和属性值（即便属性不存在该元素上）
        //data-*   data-msg    data-user-name
        input.setAttribute('data-msg', 'helloworld')
        box1.appendChild(input)
      })
    </script>
  </body>
</html>
```

### 修改 DOM

- innerText：将文本内容插入到指定节点（会覆盖原先的内容）
- innerHTML：将 html 代码插入到指定节点（会覆盖原先的内容）

### 删除 DOM

- removeChild(childNode)：删除当前节点下指定的子节点
- remove()：删除当前节点对象

### DOM 补充

- children: dom 元素通过该属性可以获取当前节点下的所有的子节点（集合）
- parentNode：dom 元素通过该属性可以获取当前节点的父节点(唯一)

## BOM

### 概述

BOM:Brower Object Model(浏览器对象模型)；即 js 中将有关浏览器的操作的顶层元素都是来自 window 对象；对外界提供了一个用于操作浏览器的访问接口，通过 bom 可以获取 window 相关信息，比如屏幕的尺寸，浏览器的详细信息（版本，内核，配置等），页面跳转，历史记录，定位，本地存储等，对于移动设备来说还可以获取与本机设备交互的硬件接口(位置信息，蓝牙，摄像头，陀螺仪)

### window

window 对象是 BOM 的顶层对象，bom 中的一些核心对象都是源自于 window，全局函数的 this 指针一般都是指向 window

**window 的常见属性：**

- innerWidth：当前窗口可用区域的宽度
- innerHeight：当前窗口可用区域的高度
- outerWidth：浏览器窗口开启的实际宽度
- outerHeight：浏览器开启的实际高度

![1608884499827](./assets/1608884499827.png)

**基于 window 对象的弹窗组件**

- alert()：警告框
- confirm()：确认框
- prompt()：消息输入框
- open()：自定义窗口

### navigator

### screen

### location

### history

### localStorage&sessionStorage

## 练习

1. 表单验证，有如下表单：

   ![1608881486883](./assets/1608881486883.png)

   要求完成验证功能：

   1. 用户名必须填写
   2. 密码长度 8-16 之间
   3. 邮箱地址，手机号必须符合正确格式
   4. 必须同意（勾选复选框）才能提交

   > 要求所有错误提示同时显示

2. 完成一个选项卡效果

   ![1608883652374](./assets/1608883652374.png)
