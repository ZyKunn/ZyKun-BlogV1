# 02 - H5 和 CSS3 :orange_heart:

## H5 的新元素

什么是 Canvas?

`<canvas>` 元素用于图形的绘制，通过脚本 (通常是 JavaScript)来完成.

`<canvas>` 标签只是图形容器，您必须使用脚本来绘制图形。

# Video

HTML5 `<video>` 标签定义了一个视频或者影片.

以下 HTML 片段会显示一段嵌入网页的 ogg、mp4 或 webm 格式的视频

不支持 HTML4 或者以上版本

```html
<!--controls：HTML5自带的播放器控制台-->
<video width="500px" height="500px" controls>
  <source src="H5-01.mp4" />
</video>
```

# Audio

```html
<audio controls>
  <source src="horse.ogg" type="audio/ogg" />

  <source src="horse.mp3" type="audio/mpeg" />
</audio>
```

## 什么是 CSS?

- CSS 指层叠样式表 (**C**ascading **S**tyle **S**heets)
- 样式定义**如何显示** HTML 元素
- 样式通常存储在**样式表**中
- 把样式添加到 HTML 4.0 中，是为了**解决内容与表现分离的问题**
- **外部样式表**可以极大提高工作效率
- 外部样式表通常存储在 **CSS 文件**中
- 多个样式定义可**层叠**为一

浏览器将 HTML5 和 CSS3 进行加载，并渲染出来，在页面展示

语法：

selecter{

​ css 的名称: css 的值；

}

### 选择器的使用：

```css
/*标签选择器：页面中所有的该标签都遵循这个css*/
p {
  color: #4a74d8f0;
  /*color：字体颜色*/
  font-size: 20px;
}
/*id选择器：根据id选择到对应的元素*/
#xiaoP {
  color: green;
  font-size: 50px;
}
/*class选择器：根据元素的class找到对应的元素*/
.secondP {
  color: blueviolet;
  font-size: 30px;
}
```

###### 其中：标签选择的范围最广，精确度最低

​ class 选择器的范围第二广，原因是标签中的 class 是可以重复的，精确度也低

​ id 选择器，范围最窄，但是精确度最高，因为 id 是唯一的

# 一边加载，一边执行

比如：一个标签中有两个 class 那么给这两个 class 同时设置 css，最终谁最后被加载，就使用谁的 css

```css
/*class选择器：根据元素的class找到对应的元素*/
.secondP{
    color: blueviolet;
    font-size: 30px;
}
.testP{
    color: red;
    font-size: 60px;
}
 <p class="secondP testP">我是第二个</p>

最终使用的.testP的css，而.secondP的css会被覆盖掉
```

### CSS 的引用：

##### 内嵌 css

第一种方式：在标签内部使用：`<p class="secondP" style="color: red;font-size: 60px">我是第二个</p>`

##### 内部 css

第二种方式：

使用 style 标签，引用 css，在 head 的后面使用`<style>css</style>`

##### 外部 css：

第三种方式：

使用`<link rel="stylesheet" href="index.css">`标签，引入外部的 css

rel="stylesheet" 规范引入的 css 的文件格式 href 引入的 css 的文件路径

###### img 标签比较特殊

img 标签的属性 width 和 height，和他的 css：width，height 属性和 css 名称一样

当属性宽高和 css 的宽高同时存在是，css 将约束标签的宽高，而属性不起作用

##### 内嵌的 css 的优先级最高

内部和外部引用的 css，谁**后**加载，就用谁

背景：

```html
background:url("timg.jpg") white no-repeat 1px 2px; 背景图片 背景颜色 平铺 1px代表x轴 2px代表y轴
```

选择器：

```css
*{
	font-size: 20px;   全局选择器，整个页面所有标签都遵循这个css
}
p,div{    所有的p标签和所有的div
            color: #4a74d8f0;/*color：字体颜色*/
            font-size: 20px;
        }
        div p{   选择到所有的div标签包含的p标签
            color: black;
        }
		div>p{  选择父元素为div的所有的p标签
            color: blue;
        }
		div+p{   选择所有div之后的p标签
            color: palevioletred;
        }
		p[class]{   选择所有有class属性的p标签
            color: violet;
        }
		p[class=firstP]{   选择所有class等于firstP属性的p标签
            color: violet;
        }
伪类选择器
    p:hover{   当鼠标悬停到标签上时触发的选择器，鼠标移开恢复原样

    }
	input:focus{   当input标签被选择，出现可以输入的光标时触发的选择器，失去焦点时，恢复原样
            height: 100px;
        }
```

### 浮动 float 和 display：

标准文档流：页面中元素按照其原有的特性进行排列

脱离标准文档流：给块状元素添加了浮动之后，块状将不会按照标准文档的排列顺序进行排列，而会进行位置移动

当需要让块状元素排成一行时，可以给块状元素添加 float 的 css，这样这些块状元素将脱离标准文档流，并且排成一行，同时他也会覆盖掉标准文档的标签

```css
float:left;    让块状元素向左浮动，添加了float属性后，块状元素将脱离标准文档流
clear:both;    清除浮动，清除的是该元素的四周的浮动属性与该元素的影响

dispaly 属性
/*将块状元素转换为行内元素*/
display: inline-block;/*行内块状元素：有行内元素的特性：不主动换行；又有块状元素的特性：可以设置宽高*/

display: block;/*block：将一个行内元素转换为块状元素*/

display: none;/*当使用display为none时，该标签不会被显示在页面中*/

```
