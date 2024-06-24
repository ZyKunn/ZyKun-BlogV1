# 04 - CSS :blue_heart:

使用 css 的方式

第一种：在标签内部写 style 的方式叫内嵌 css 的引用

```html
<div style="width: 10px;width: 10px"></div>
```

第二种：在`<head>`标签的后面，使用`<style>`标签引用 css 的用法叫内部 css

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title></head
  ><link rel="stylesheet" href="index.css" />第三种：使用link标签引入外部的css文件来使用
  <style>
    div{        第二种
        width: 10px;
        height: 10px;
        }
  </style>
  <body>
    <div style="width: 10px;width: 10px"></div>
    第一种
  </body>
</html>
```

第三种：引入外部的 css 文件

最常用的是引入外部的 css 文件，也就是 link

### css 的选择器：

要给某一个标签添加 css，要先选择到这个标签，就使用到 css 的选择器

selector{

​ css:内容

}

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <style>
     div{
         标签选择器：直接以标签名称为选择器进行选择，标签选择器，选择的是这个页面中所有的该标签
         width: 100px;
         height: 100px;
     }
     .test .right .one{
         类选择器，其中一定要注意“.”,点后面是类名，可以通过长辈元素的class，一层一层的往下找，直到找到该元素
         width: 100px;
         height: 100px;
     }
     #test1{
         id选择器：使用"#"后面加id名称，id选择器可以最简单精确的选择到一个标签，但是id不能重复使用        width: 100px;
    height: 100px;
     }
     .test .right .one a{
         选择器的组合使用：标签选择器和类选择器的组合使用，其中注意空格
         color:red;
     }
     .test .right .add{
         一个标签添加多个类的时候
         分别给这个标签的每一个class添加了css
     }
     .test .right .dasdsa{
     }
  </style>
  <body>
    <div class="test">
      <div class="right">
        <div class="one add dasdsa">
          <a>新闻</a>
        </div>
      </div>
    </div>
    <div class="one" id="test1">八卦</div>
    <div class="two" id="test2"></div>
    <div class="two"></div>
    <div></div>
    <div></div>
  </body>
</html>
```

## 浮动：

当需要让两个元素排成一行的时候，就可以使用浮动 float，让两个元素排列成一整行

但是，如果是块状元素使用了浮动，那么块状元素将不会遵循独自占一整行的规定了

#### 标准文档流：

在页面中，每一个标签都按照他固有的规定排列展开，其中块状元素不管内容多少，都独自占一整行，行内元素不会主动换行

#### 脱离标准文档流：

块状元素将不遵循独自占一整行的规定，并且他原来该有的位置，浏览器将不会给他保留，这样就导致了，标准文档流的标签会被脱离标准文档流的标签覆盖

清除浮动：

```
clear: both;/*清楚浮动*/
清除浮动的意思：不是将别个标签的float的css删除，而是以直接为中心，直接的四周所有的float属性对自己的影响，清楚掉
```

```css


float:left;    让块状元素向左浮动，添加了float属性后，块状元素将脱离标准文档流
clear:both;    清除浮动，清除的是该元素的四周的浮动属性与该元素的影响

dispaly 属性
/*将块状元素转换为行内元素*/
display: inline-block;/*行内块状元素：有行内元素的特性：不主动换行；又有块状元素的特性：可以设置宽高*/

display: block;/*block：将一个行内元素转换为块状元素*/

display: none;/*当使用display为none时，该标签不会被显示在页面中*/


overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
/*超出部分自动隐藏，这里超出的部分不一定是文本，也可能是图片*/


box-shadow: -6px -1px 23.4px green;
        /*-6px是阴影的x轴方向     -1p是阴影y轴方向    23.4px表示阴影的模糊度   green阴影的颜色*/


background-color: rgb(79,79,117,0.95);
        /*rgb就是三原色，其中r是red，g是green，b就是blue；最后0.95就是透明度的数值*/
        /*透明度，其中值是从0-1之间的小数，0.1-0.9,0.1最淡，越来越深，透明度越来越小*/



/*当让两个相同的class遵循同一个css的时候,可以使用"，"隔开，注意"，"和"."之间是没有空格的*/
    .box .bottom .right .login .userName,.password{
}


 text-align: center; /*文本左右居中，文字左右居中*/

font-size: 20px; /*文字大小*/
font-weight: 900; /*字重，文字的粗细调整，最小100，最高900*/
line-height: 50px; /*调整文字的上下居中，可以使用行高*/

text-align: center; /*文本内容左右居中*/
list-style: none; /*去除li前面的黑点*/

border: 1px solid white; /*1px 表示  边框的粗细   solid表示边框为实线  边框的颜色*/

```
