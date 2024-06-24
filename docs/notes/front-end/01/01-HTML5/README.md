# 01 - HTML5 :heart:

[[TOC]]

## 什么是 HTML5?

HTML5 是下一代 HTML 标准。

HTML , HTML 4.01 的上一个版本诞生于 1999 年。自从那以后，Web 世界已经经历了巨变。

HTML5 仍处于完善之中。然而，大部分现代浏览器已经具备了某些 HTML5 支持。

W3C:万维网联盟

```html
<!DOCTYPE html> 声明
<html lang="en">
  <head>
    头部
    <meta charset="UTF-8" />
    页面编码的设置
    <title>Title</title>
    页面的标题标签
  </head>
  <body>
    页面的主体
  </body>
</html>
```

- HTML 指的是超文本标记语言: **H**yper **T**ext **M**arkup **L**anguage
- html：是超文本标记语言，他不是编程语言，他是标记语言

HTML 标签

由< 和>包裹起来的内容，就是 HTML 的标签

<标签>内容</标签>

谷歌浏览器是最标准---遵守 W3C 标准的浏览器

HTML 编辑器：

vsc sublime hbuilder idea webStrome

标题标签：

```html
<h1>我是一个H1</h1>
<h2>我是一个H2</h2>
<h5>我是一个H5</h5>
<h6>我是一个H6</h6>

从h1到h6，字体是依次从大到小的，其中h1的字体最大，h6的字体最小
```

段落标签：

```html
<p>我是一个p标签</p>
```

超链接标签

```html
<a href="https://www.baidu.com">我是一个超链接标签</a>

只有当a标签添加了href属性，才会出现可点击的内容
```

图片标签：

```html
<img src="fenye.png" height="200px" width="200px" />

img标签有宽高属性可以设置，在没有设置宽高的时候，图片将以100%宽，100%的高进行展示
```

## HTML 属性

- HTML 元素可以设置**属性**

- 属性可以在元素中添加**附加信息** about an element

- 属性一般描述于**开始标签**

- 属性总是以名称/值对的形式出现，**比如：name="value"**。

  比如：

  ```html
  <a name="testName" href="https://www.baidu.com">我是一个超链接标签</a>
  <img src="fenye.png" height="200px" width="200px" />

  name就是a标签的名称属性 href就是a标签的请求地址属性 src就是img标签的路径属性 height 高度的属性 width宽度属性
  ```

HTML 中属性：一定要用小写

分割线：

```html
<hr />
他是有 width,宽度属性的，可以设置分割线的长度
```

换行符：

<br>

文本格式：

```html
<b>加粗文字</b>
<i>这是一个斜体文字</i>
<sup>上标</sup>
<sub>下标</sub>
```

表格标签：

```html
<table border="1">
  <tr>
    <th>第一</th>
    <th>第二</th>
    <th>第三</th>
  </tr>
  <tr>
    <td colspan="3">香蕉1</td>
  </tr>
  <tr>
    <td>苹果1</td>
    <td>苹果2</td>
    <td>苹果3</td>
  </tr>
  <tr>
    <td rowspan="2">葡萄1</td>
    <td>葡萄2</td>
    <td>葡萄3</td>
  </tr>
  <tr>
    <td>桃子2</td>
    <td>桃子3</td>
  </tr>
</table>
colspan：当使用合并列的时候，删除的同一个tr下的列，colspan的值等于n，就删n-1个td rowspan：当使用合并行的时候，rowspan等于n，就删除n个tr下的对应td
```

### 无序列表

```html
<ul>
  <li>我是一个无序列表</li>
  <li>我是一个无序列表</li>
  <li>我是一个无序列表</li>
  <li>我是一个无序列表</li>
</ul>
```

### 有序列表

```HTML
<ol>
<li>我是一个有序列表1</li>
<li>我是一个有序列表2</li>
<li>我是一个有序列表3</li>
<li>我是一个有序列表4</li>
</ol>
```

### 自定义列表

```html
<dl>
  <dt>我是标题</dt>
  <dd>我是第一行列表</dd>
  <dd>我是第二行列表</dd>
  <dd>我是第三行列表</dd>
</dl>
```

##### 块状元素：不管内容有多少，该标签默认占一整行

块状元素有：ul, li, ol, dl, dt, dd h1-h6 ,p ,table, tr, hr br

注意：块状元素都有宽高属性

##### 行内元素：元素大小只跟元素内容有关

行内元素有： a b i sub sup img

注意：行内标签是没有宽高属性，除了 img 标签

## HTML `<div>` 元素

HTML `<div>` 元素是块级元素，它是可用于组合其他 HTML 元素的容器。

`<div>` 元素没有特定的含义。

## HTML `<span>` 与元素

HTML `<span>` 元素是行内元素，可用作文本的容器

`<span>` 元素也没有特定的含义

## 表单

表单：一个包含表单元素的区域

表单元素：输入框，文本域，单选，多选，按钮，下拉，滑块

```html
表单form中有两个常见的属性，method:表单提交的方式，分别有get和post，get和post到javaWBE再说 action:表单提交的后台地址
<form method="get" action="">
  <!--text:文本类型-->
  <input type="text" placeholder="请输入你的名字哦" value="我是一个value" name="userName" />
  <br />
  <!--password:密文，比如密码-->
  <input type="password" name="password" />
  <br />
  <!--search:搜索框-->
  <input type="search" name="search" />
  <br />
  <!--number:输入框只能输入数字，并且可以对数字进行上下调动的按钮-->
  <input type="number" name="tel" />
  <br />
  <!--date:日期选择框-->
  <input type="date" name="date" />
  <!--date:月份选择框-->
  <input type="month" name="month" />
  <!--datetime-local:获取日期和时间-->
  <input type="datetime-local" name="datetime" />
  <!--range:滑块-->
  <input type="range" />
  <br />
  <!--file:文件选择窗口-->
  <input type="file" />
  <br />
  <!--radio:单选框，当使用radio属性时，input中一定加上name属性，并且name的值必须相同-->
  <input type="radio" name="sex" value="1" /> 男 <input type="radio" name="sex" value="2" /> 女 <input type="radio" name="sex" value="3" />不详
  <!--checkbox:多选框,每个input都必须加上name属性，且name都必须一致-->
  <input type="checkbox" name="inters" value="1" />唱歌 <input type="checkbox" name="inters" value="2" />劈叉 <input type="checkbox" name="inters" value="3" />篮球 <input type="checkbox" name="inters" value="4" />rap
  <br />
  <!--下拉选择器-->
  <select name="city">
    <option value="1">武汉市</option>
    <option value="2">潜江市</option>
    <option value="3">监利市</option>
    <option value="4">天门市</option>
  </select>
  <!--文本域，rows可以设置行数，也就是文本域的高；cols可以设置宽度-->
  <textarea rows="4" cols="5"></textarea>
  <br />
  <!--button：按钮，value可以设置按钮的显示内容-->
  <input type="button" value="这是一个按钮" />
  <!--reset：重置按钮-->
  <input type="reset" />
  <!--submit：提交按钮-->
  <input type="submit" />
</form>

注意： readonly ： input只能读，不能修改，但是可以被提交给后台 disabled：input只能读，不能修改，但是不可以被提交到后台
```

作业：

​ 使用 table 布局写一个登陆和一个注册页面
