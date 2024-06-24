# 01 - JQuery（一） :medal_sports:

[[TOC]]

## JQuery 入门

### 概述

​ JQuery 是继 Prototype(js 库)一个对 javascript 进行全方位包装的一个 JS 库，内部提供了一系列用于操作文档元素，样式属性操作，事件监听，以及 ajax 请求的便捷功能库，另外 JQuery 提供了不同浏览器的兼容性解决方案；JQuery 核心理念:Write Less,Do More。

### JQuery 主要内容

- 丰富的选择器
- 属性样式处理
- 文档操作(DOM)
- 事件处理
- 特效
- ajax
- 工具函数
- ...

### 使用方式

#### Jquery 各个版本介绍

Jquery 主要包含三个大版本：

- 1.X：主要用于 PC 端（兼容性较好）
  - 1.4
  - 1.6
  - 1.8.X（最后一个兼容 IE6 的版本）
  - 1.9.X
  - 1.11.XX
- 2.X：过渡版本(不推荐)
- 3.X：更加适合移动端开发（或者新型互联网项目）

#### 文件类型

JQuery 官方提供了两种文件类型

- jquery.js

  - 未经压缩的原始 js 文件，内部保留 js 文件编写的一些空格，换行等格式，一般适用于**开发环境**

- jquery.min.js

  - 经过压缩之后的 js 文件，内部会去除多余的空格换行，文件较小，一般适用于**生产环境**

- 对比

  ![1609204861054](./assets/1609204861054.png)

#### 使用方式

在项目中使用 JQuery 的方式非常简单，只需要将 jquery 文件引入到指定页面中即可，使用方式分为两种：

1. 本地引用：从本地项目的指定位置关联 js 文件

   ![1609205211584](./assets/1609205211584.png)

2. 使用在线的 CDN 地址

   ```html
   <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
   ```

### HelloJQuery

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <!--引入JQuery库-->
    <script src="js/jquery-1.11.3.js"></script>
  </head>
  <body>
    <div id="b"></div>
    <script>
      //上述代码简化之后
      $(function () {
        $('#b').html('<p>写得少，做的多</p>').css({
          fontSize: '20px',
          color: '#006755'
        })
      })
    </script>
  </body>
</html>
```

### JS 与 JQuery 对象转换

​ Jquery 选择器获取的所有元素都是一个数组(无论是选中的一个元素还是多个元素)；在前端开发中也经常会涉及到原生 JS 对象和 JQuery 对象之间的转换，原生 JS 中对象所支持的函数和属性与 Jquery 之间存在差异，特别是有些属性或者函数 JQuery 没有，此时就需要将 Jquery 对象转换为 Js 对象，如果需要更加简洁操作 dom 元素，也可以将 js 对象包装为 jquery 对象。

1. JQuery 对象转 JS

   ```javascript
   // let a = $('#app')[0];
   let a = $('#app').get(0)
   ```

2. JS 对象转换为 JQuery 对象

   ```javascript
   var box = document.getElementById('box')
   //包装原始js对象为Jquery对象
   $(box)
   ```

### $和 jQuery

在 jquery 中操作元素的基本句柄一般使用`$`,也可以使用`jQuery`这个对象,比如以下代码，两者含义是一致的：

```javascript
$('#box')

jQuery('#box')
```

## 选择器

代码示例：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>JQuery选择器</title>
    <style type="text/css">
      img {
        position: relative;
      }
    </style>
  </head>
  <body>
    <h2>Table2</h2>
    <!-- 	table.tab>tr>th*5^tr*4>td{单元格$$$$}*5   		emmet表达式中 ^表示跳回上一级 -->
    <table class="tab" border="1px">
      <tr>
        <th>ID</th>
        <th>姓名</th>
        <th>性别</th>
        <th>年龄</th>
        <th>婚否</th>
      </tr>
      <tr>
        <td>单元格0001</td>
        <td>单元格0002</td>
        <td>单元格0003</td>
        <td>单元格0004</td>
        <td>单元格0005</td>
      </tr>
      <tr>
        <td>单元格0001</td>
        <td>单元格0002</td>
        <td>单元格0003</td>
        <td>单元格0004</td>
        <td>单元格0005</td>
      </tr>
      <tr>
        <td>单元格0001</td>
        <td>单元格0002</td>
        <td>单元格0003</td>
        <td>单元格0004</td>
        <td>单元格0005</td>
      </tr>
      <tr>
        <td>单元格0001</td>
        <td>单元格0002</td>
        <td>单元格0003</td>
        <td>单元格0004</td>
        <td>单元格0005</td>
      </tr>
    </table>

    <h2>Table2</h2>
    <table border="1px">
      <tr>
        <td>001</td>
        <td>002</td>
        <td>003</td>
      </tr>
      <tr>
        <td>001</td>
        <td>002</td>
        <td>003</td>
      </tr>
      <tr style="display: none;">
        <td>001</td>
        <td>002</td>
        <td>003</td>
      </tr>
    </table>

    <!-- 不可操作 只读 disable -->
    <input type="text" name="" id="name2" disabled="disabled" value="嗨害" />

    <input type="text" name="" id="name" value="ZyKun" />
    <input type="password" name="pwd" id="pwd" value="ZyKun" />
    <br />

    <input type="checkbox" name="lang" id="" value="java" checked="checked" />java
    <input type="checkbox" name="lang" id="" value="c" checked="checked" />
    <input type="checkbox" name="lang" id="" value="c++" />c++ <input type="checkbox" name="lang" id="" value="JavaScript" checked="checked" />JavaScript <input type="checkbox" name="lang" id="" value="PHP" />PHP
    <br />

    <input type="radio" name="type" id="student" />学生 <input type="radio" name="type" id="teacher" checked="checked" />老师 <input type="radio" name="type" id="admin" />admin

    <img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" alt="1" />
    <img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" alt="2" />

    <script src="js/jquery.js"></script>
    <script type="text/javascript">
      //为元素设置焦点 js写法
      //document.getElementById('name').focus();

      $(function () {
        //选择类名为tab元素下所有的tr标签
        console.log($('.tab tr'))
        //选择类名为tab元素下第一个tr标签					fast
        console.log($('.tab tr:first'))
        //选择类名为tab元素下最后一个tr标签				last
        console.log($('.tab tr:last'))
        //选择类名为tab元素下第四个tr标签					eq
        console.log($('.tab tr:eq(3)'))
        //选择类名为tab元素下除了第一个标签的所有标签		gt	匹配所有大于给定索引值的元素
        console.log($('.tab tr:gt(0)'))

        //为元素设置焦点 JQuery写法
        $('#name')[0].focus()
        //打印出当前文档中所有获得焦点的元素
        console.log($(':focus'))

        //匹配包含给定文本的th元素
        console.log($("th:contains('ID')"))
        //匹配所有不可见元素，或者type为hidden的input元素
        console.log($('input:hidden'))
        //匹配所有的可见的table下面tr元素
        console.log($('table tr:visible'))

        /*	取表单元素
						:input
						:text
						:password
						:radio
						:checkbox
						:submit
						:image
						:reset
						:button
						:file
				*/

        console.log($(':password'))
        //根据元素属性取元素
        console.log($('input[type=password]'))

        /*
					表单对象属性
					:enabled
					:disabled
					:checked
					:selected
				*/

        //获取不可操作的元素
        console.log($(':disabled'))
        //获取可以操作的元素
        console.log($(':enabled'))
        //选择被选中的复选框or单选框
        console.log($(':checked'))
        //选择复选框下选中的元素
        console.log($('input:checkbox:checked'))

        console.log($('img:not(:animated)'))
        $('img:not(:animated):eq(0)').animate({ left: '+=50', top: '+=50' }, 1000)
        $('img:not(:animated):eq(0)').animate({ left: '-=50', top: '-=50' }, 1000)
      })
    </script>
  </body>
</html>
```

### 基本选择器

### 层级选择器

### 筛选器

### 可见性选择

### 属性选择

### 子元素选择

### 表单选择

### 表单对象属性选择

## 属性操作

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>属性和样式</title>
    <style type="text/css">
      #img {
        /* 每隔8秒执行一次动画 动画匀速不间断 */
        animation: circle 8s linear infinite paused;
      }

      .playing {
        /* 每隔8秒执行一次动画 动画匀速不间断 */
        animation: circle 8s linear infinite running !important;
      }

      /*自定义动画*/
      @keyframes circle {
        /* 从 */
        from {
          /*     变形   :    旋转(0度) */
          transform: rotate(0deg);
        }
        /* 到 */
        to {
          /*     变形   :    旋转(360度) */
          transform: rotate(360deg);
        }
      }
    </style>
  </head>
  <body>
    <div id="box1" class="box">
      <h2>送元二使安西</h2>
      <p>渭城朝雨浥轻尘，</p>
      <p>客舍青青柳色新。</p>
      <p>劝君更尽一杯酒，</p>
      <p>西出阳关无故人。</p>
    </div>

    <div id="box2"></div>
    <div id="box3"></div>
    <div id="box4"></div>

    <div class="img" id="img">
      <img src="img/cover.jpg" />
    </div>

    <script src="js/jquery.js"></script>
    <script type="text/javascript">
      $(function () {
        //js写法
        //var id = document.getElementById('box').getAttribute('id');

        // //JQuery写法一		 for循环
        // var len = $("div").length;
        // for (var i = 0; i < len; i++) {
        // 	let d = $("div").get(i);
        // 	console.log(d); //这里取出来的是js对象;
        // 	console.log($(d).attr('id')); //只需要将js对象用$符号包装一下转换为jQuery对象 再去调用jQuery对象中attr方法
        // }

        //Jquery写法二	each	函数中的this关键字都指向一个不同的DOM元素（每次都是一个不同的匹配元素）。
        //i:索引		e:元素

        //attr()函数	参数若只有一个 则是获取属性值			$("img").attr("src");										返回文档中所有图像的src属性值。
        //			参数若有两个	则是设置属性值			$("img").attr("src","test.jpg");							为所有图像设置src属性。
        //			参数若为Map形式	则是设置多个属性值	$("img").attr({ src: "test.jpg", alt: "Test Image" });		为所有图像设置src和alt属性。

        $('div').each(function (i, e) {
          console.log($(this).attr('id'))
          // console.log($(e).attr('id'));

          //操作元素中固有的属性
          $(e).prop('class', 'box') //有效
          $(e).prop('data-id', i) //无效

          //操作元素中所有属性(几遍元素定义不包含该属性)
          $(e).attr('orders', i)
        })

        //移除所有div标签中的class属性
        $('div').removeAttr('class')

        //JQuery特点 允许链式编程	每次调用一个函数返回值还是jQuery对象
        //css()函数	参数若只有一个 则是获取css属性值		$("p").css("color");										取得第一个段落的color样式属性的值。
        //			参数若有两个	则是设置css属性值			$("p").css("color","red");									将所有段落字体设为红色
        //			参数若为Map形式	则是设置多个css属性值	$("p").css({ "color": "#ff0011", "background": "blue" });	将所有段落的字体颜色设为红色并且背景为蓝色。
        $('#img').width(300).height(300).css('background', "url('img/disc.png') no-repeat center").css({
          'background-size': '100%',
          position: 'relative'
        })
        $('#img')
          .find('img')
          // .width(185)
          // .height(185)
          .css({
            position: 'absolute',
            left: '50%',
            top: '50%',
            'z-index': '-1',
            //"margin":"-92px 0 0 -92px"
            transform: 'translate(-50%,-50%)',
            'border-radius': '50%'
          })

        //为指定元素添加点击事件
        $('#img').click(function () {
          //这里的this是js对象
          // console.log(this);

          //方式一
          //判断该元素是否存在class='playing'属性		hasclass()检查当前的元素是否含有某个特定的类，如果有，则返回true。
          // if($(this).hasClass('playing')){

          // 	$(this).removeClass('playing');//为指定元素移除class属性
          // }else{

          // 	$(this).addClass('playing');//为指定元素添加class属性
          // }

          //方式二			toggleClass():如果存在（不存在）就删除（添加）一个类。
          $(this).toggleClass('playing')
        })

        //JQuery 获取指定元素宽高
        console.log($('#img').width(), $('#img').height())
      })
    </script>
  </body>
</html>
```

### attr

### prop

# Html&Text

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Html/Text/Val</title>
  </head>
  <style type="text/css">
    .box {
      width: 300px;
      height: 200px;
      background: rgba(0, 0, 0, 0.5);
    }
  </style>
  <body>
    <div id="head">
      <h1>文档内容操作</h1>
      <span>这是<i>副标题</i></span>
    </div>
    <input type="text" name="msg" id="" value="ZyKun" />
    <input type="text" name="msg" id="" value="老八" />
    <input type="text" name="msg" id="" value="小明" />
    <div class="box"></div>

    <script src="js/jquery.js"></script>
    <script type="text/javascript">
      /*
				html():	等同于Js-Dom中的innerHTML
				text():	等同于Js-Dom中的innertext
				val():	等同于Js表单控件中的value
			*/

      $(function () {
        //获取指定元素中的HTML代码
        let html = $('#head').html()
        console.log(html)
        //为获取指定元素设置HTML代码
        $('.box').html(html) //					是替换哦!!!
        // $('.box').html('<b>这是b标签<b>');

        //获取选择元素中(第一个)的文本内容(不包含标签)
        let txt = $('#head').text()
        console.log(txt)
        //设置的文本内容
        $('#head').text('嗨害!!') //				是替换哦!!!

        //获取选中元素(表单元素)的第一个value
        let value = $('input:text').val()
        console.log(value)
        //为选中元素(表单)设置value(可以设置多个)
        $('input:text').val('来了嗷')
      })
    </script>
  </body>
</html>
```

## 事件监听

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>JQuery事件(纵向菜单栏)</title>
  </head>
  <style type="text/css">
    * {
      margin: 0;
      padding: 0;
    }

    ul {
      list-style: none;
      width: 280px;
      text-align: center;
      background: #ecf0f1;
    }

    a {
      display: block;
      /*将所有a标签变成块元素 */
      height: 50px;
      line-height: 50px;
      text-decoration: none;
      color: #fff;
      background: #34495e;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.6s;
    }

    /* 选择一级菜单 */
    .menu > li > a {
      height: 60px;
      background: #2c3e50;
      font-size: 1.1em;
    }
    /* 隐藏二级菜单 */
    .submenu {
      display: none;
    }
    /* 为二级菜单加入悬停特效 */
    .submenu a:hover {
      background: #bdc3c7;
      color: #34495e;
    }
  </style>
  <body>
    <h1>JQuery 事件绑定</h1>

    <ul class="menu">
      <li>
        <a href="">商品管理</a>
        <ul class="submenu">
          <li><a href="1">1菜单项001</a></li>
          <li><a href="2">1菜单项002</a></li>
        </ul>
      </li>
      <li>
        <a href="">订单管理</a>
        <ul class="submenu">
          <li><a href="3">2菜单项001</a></li>
          <li><a href="4">2菜单项002</a></li>
        </ul>
      </li>
      <li>
        <a href="">会员管理</a>
        <ul class="submenu">
          <li><a href="5">3菜单项001</a></li>
          <li><a href="6">3菜单项002</a></li>
        </ul>
      </li>
    </ul>

    <input type="text" id="username" />
    <button class="btnAdd" data-op="add">添加</button>
    <button class="btnDel" data-op="del">删除</button>
    <button class="btnUpd" data-op="modify">修改</button>
    <div id="b" data-list-l1="[rose,jack,bitch,Gucci]"></div>

    <script src="js/jquery.js"></script>
    <script type="text/javascript">
      $(function () {
        //为menu中所有的a标签设置href属性  不允许跳转
        $('.menu a').attr('href', 'JavaScript:;')

        // document.getElementById().onclick=function(){};
        // document.getElementById().addEventListener(function(){});

        //JQuery写法	 事件绑定方式一
        $('.submenu a').click(function () {
          let i = $('.submenu a').index(this)
          console.log(`当前元素索引为: ${i}`)
        })

        //当元素获取焦点时触发 focus 事件。
        $('#username').focus(function () {
          $(this).css('box-shadow', '0 0 10px #eccc68')
        })
        //当元素失去焦点时触发 blur 事件。
        $('#username').blur(function (e) {
          $(this).css('box-shadow', '')
        })
        // 事件绑定方式二
        $('button').on('click', function () {
          // let cname = $(this).attr('class');
          // if (cname === 'btnAdd') {
          // 	console.log('添加');
          // } else if (cname === 'btnDel') {
          // 	console.log('删除');
          // } else if (cname === 'btnUpd') {
          // 	console.log('修改');
          // }

          // 利用数据标签 data
          let op = $(this).data('op')
          switch (op) {
            case 'add':
              console.log('添加')
              break
            case 'del':
              console.log('删除')
              break
            case 'modify':
              console.log('修改')
              break
          }
        })
        //利用data属性取数据
        let list = $('#b').data('list-l1')
        console.log(list)

        //菜单滑动显示隐藏效果	hover事件中有两个回调 第一个function是鼠标移入后触发的	第二个function是鼠标移出后触发的
        // $('.menu>li').hover(function(){
        // 	//移入后触发的函数
        // 	//$(this).find('.submenu').show('normal'); 	//show() 显示第一个参数表示动画时常("slow","normal", or "fast")参数 第二个参数为function回调
        // 			//find()搜索所有与指定表达式匹配的元素。这个函数是找出正在处理的元素的后代元素的好方法。
        // 	$(this).find('.submenu').stop().slideToggle('normal',function(){	//滑动效果用法一致 只是效果不同		toggle()开关	stop()先停掉上一次动画再执行
        // 		alert('这是回调后执行的语句');
        // 	});
        // },function(){
        // 	//$(this).find('.submenu').hide('1500');				//hide() 隐藏
        // 	$(this).find('.submenu').stop().slideToggle('normal');
        // });

        //点击效果
        $('.menu>li').click(function () {
          $(this).find('.submenu').slideToggle('normal')
        })
      })
    </script>
  </body>
</html>
```

## 文档处理

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>文档处理</title>
  </head>
  <body>
    <div class="container">
      <div id="head" class="head">
        <h1>文档处理</h1>
      </div>
      <div class="body">
        <h2>清平调</h2>
        <p class="one">云想衣裳花想容，</p>
        <p>春风拂槛露华浓。</p>
        <p>若非群玉山头见，</p>
        <p>会向瑶台月下逢。</p>
      </div>
      <div class="footer">
        <span>&copy; By ZyKun</span>
      </div>
    </div>

    <script src="js/jquery.js" type="text/javascript" charset="utf-8"></script>
    <script type="text/javascript">
      $(function () {
        // //js写法
        // let head = document.getElementById('head');
        // //创建节点
        // var hr = document.createElement('hr');
        // //将指定节点插入到目标节点
        // let e = head.appendChild(hr);

        let h3 = $('<h3>ZyKun</h3>') //创建元素 	等同于document.createElement()
        //$('h2').append(h3);		//append() 		向选中的元素中追加子元素	<h2>清平调<h3>ZyKun</h3></h2>

        // $('h2').appendTo(h3);	//appendTo() 	将选中的元素追加到参数对象中
        // $('h1').append(h3);

        $('h2').after(h3) //after()		向选中元素之后插入元素

        $('h2').before('<span>唐诗三百首</span>') //	before()	向选中元素之前插入元素

        $('h2').replaceWith(h3) //replaceWith()	将h2替换成h3元素

        $('p').remove('.one') //remove()		从DOM中删除所有匹配的元素。	移除类名为one的p标签

        // $('.container').empty();	//.enmpty()		删除匹配的元素集合中所有的子节点。
      })
    </script>
  </body>
</html>
```

## 遍历操作

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>jQuery遍历</title>
  </head>
  <body>
    <script src="js/jquery.js"></script>
    <script type="text/javascript">
      $(function () {
        let arrys = [10, 20, 30, 40, 50, 60]

        //遍历方式一:
        $(arrys).each(function (i, e) {
          //i:索引 e:元素
          console.log(e)
          //console.log(arrys[i]);
        })

        //遍历方式二:
        $.each(arrys, function (i, e) {
          console.log(e)
        })
      })
    </script>
  </body>
</html>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>jQuery遍历</title>
  </head>
  <body>
    <script src="js/jquery.js"></script>
    <script type="text/javascript">
      $(function () {
        let arrys = [10, 20, 30, 40, 50, 60]

        //遍历方式一:
        $(arrys).each(function (i, e) {
          //i:索引 e:元素
          console.log(e)
          //console.log(arrys[i]);
        })

        //遍历方式二:
        $.each(arrys, function (i, e) {
          console.log(e)
        })
      })
    </script>
  </body>
</html>
```

## 练习

1. 使用 Jquery 实现全选，反选，不选的功能

2. 完成列表选择功能，效果如下：

   ![1609229507403](./assets/1609229507403.png)

3. 完成一个回到顶部的功能

4. 实现首页顶部搜索栏固定效果

5. 完成一个可编辑的表格

6. 如何使用 jquer 实现选项卡效果
