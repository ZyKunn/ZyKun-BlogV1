<template><div><h1 id="🧩imagecombiner" tabindex="-1"><a class="header-anchor" href="#🧩imagecombiner" aria-hidden="true">#</a> 🧩ImageCombiner</h1>
<hr/>
<nav class="table-of-contents"><ul><li><router-link to="#项目背景">项目背景</router-link></li><li><router-link to="#_1-dromara-社区">1. dromara 社区</router-link></li><li><router-link to="#_2-image-combiner-介绍">2. image-combiner 介绍</router-link><ul><li><router-link to="#_1、能做什么">1、能做什么</router-link></li><li><router-link to="#_2、image-combiner-目录">2、image-combiner 目录</router-link></li></ul></li><li><router-link to="#_3-如何编程化生成">3. 如何编程化生成</router-link><ul><li><router-link to="#_1、跟着官方例子调试">1、跟着官方例子调试</router-link></li><li><router-link to="#_2、海报生成区分解">2、海报生成区分解</router-link></li><li><router-link to="#_4、添加商品图和相关文字介绍">4、添加商品图和相关文字介绍</router-link></li><li><router-link to="#_5、动态位置计算">5、动态位置计算</router-link></li><li><router-link to="#_6、最后">6、最后</router-link></li></ul></li><li><router-link to="#_4-总结和展望">4. 总结和展望</router-link><ul><li><router-link to="#_1、展望">1、展望</router-link></li><li><router-link to="#_2、总结">2、总结</router-link></li></ul></li></ul></nav>
<h1 id="一个专门用于图片合成的工具" tabindex="-1"><a class="header-anchor" href="#一个专门用于图片合成的工具" aria-hidden="true">#</a> 一个专门用于图片合成的工具</h1>
<nav class="table-of-contents"><ul><li><router-link to="#项目背景">项目背景</router-link></li><li><router-link to="#_1-dromara-社区">1. dromara 社区</router-link></li><li><router-link to="#_2-image-combiner-介绍">2. image-combiner 介绍</router-link><ul><li><router-link to="#_1、能做什么">1、能做什么</router-link></li><li><router-link to="#_2、image-combiner-目录">2、image-combiner 目录</router-link></li></ul></li><li><router-link to="#_3-如何编程化生成">3. 如何编程化生成</router-link><ul><li><router-link to="#_1、跟着官方例子调试">1、跟着官方例子调试</router-link></li><li><router-link to="#_2、海报生成区分解">2、海报生成区分解</router-link></li><li><router-link to="#_4、添加商品图和相关文字介绍">4、添加商品图和相关文字介绍</router-link></li><li><router-link to="#_5、动态位置计算">5、动态位置计算</router-link></li><li><router-link to="#_6、最后">6、最后</router-link></li></ul></li><li><router-link to="#_4-总结和展望">4. 总结和展望</router-link><ul><li><router-link to="#_1、展望">1、展望</router-link></li><li><router-link to="#_2、总结">2、总结</router-link></li></ul></li></ul></nav>
<blockquote>
<p>引文：ImageCombiner 是一个专门用于图片合成的工具，没有很复杂的功能，简单实用，却不失强大</p>
</blockquote>
<h2 id="项目背景" tabindex="-1"><a class="header-anchor" href="#项目背景" aria-hidden="true">#</a> 项目背景</h2>
<blockquote>
<p>如果你是 UI 美工大师或者 PS 大牛，那本文一定不适合你；如果当你需要自己做一张海报时，可以立马有小伙伴帮您实现，那本文大概率也不适合你。但是，如果你跟我一样，遇上到以下场景，最近有类似的需求，需要合成各模版图片。人事部和办公室的小伙伴想做一些具有通用场景功能海报，比如宣传报，会议宣传图片，但自己又对于 PS 这类的工具不是很擅长时，那么您不妨看看我推荐的这款开源小工具，看看这篇文章。作为程序猿，可以不会 PS，但一定要有自己解决问题的办法。通过开源程序，站在巨人的肩膀上，让你不用重复从 0 开始造轮子，将时间投入到实际业务维护和开发中。在这里要感谢 <a href="https://dromara/" target="_blank" rel="noopener noreferrer">dromara<ExternalLinkIcon/></a>社区的 <a href="https://image-combiner/" target="_blank" rel="noopener noreferrer">image-combiner<ExternalLinkIcon/></a>。</p>
</blockquote>
<h2 id="_1-dromara-社区" tabindex="-1"><a class="header-anchor" href="#_1-dromara-社区" aria-hidden="true">#</a> 1. dromara 社区</h2>
<p>在正式介绍这款工具时，先介绍一下 dromara 社区，dromara 社区是很多开源工具的集结地，很多开源的 GVP，比如熟知的 MaxKey,<a href="https://so.csdn.net/so/search?q=Hutool&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">Hutool<ExternalLinkIcon/></a>,Sa-Token,Lite_Flow,Lamp-cloud 等等，感兴趣的朋友可以到他们的介绍页<a href="https://dromara/" target="_blank" rel="noopener noreferrer">https://gitee.com/dromara<ExternalLinkIcon/></a>看看介绍和<a href="https://so.csdn.net/so/search?q=%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">开源项目<ExternalLinkIcon/></a>的列表。</p>
<p><img src="@source/notes/record/ImageCombiner/assets/image-20230814164930342.png" alt="image-20230814164930342"></p>
<h2 id="_2-image-combiner-介绍" tabindex="-1"><a class="header-anchor" href="#_2-image-combiner-介绍" aria-hidden="true">#</a> 2. image-combiner 介绍</h2>
<h3 id="_1、能做什么" tabindex="-1"><a class="header-anchor" href="#_1、能做什么" aria-hidden="true">#</a> 1、能做什么</h3>
<p><strong>ImageCombiner</strong>是一个专门用于 Java 服务端图片合成的工具，没有很复杂的功能，简单实用，从实际业务场景出发，提供简单的接口，几行代码即可实现图片拼合（当然用于合成水印也可以），素材上支持图片、文本、矩形三种，支持定位、缩放、旋转、圆角、透明度、颜色、字体、字号、删除线、居中绘制、文本自动换行等特性，足够覆盖图片合成的日常需求。</p>
<p>是不是对文字描述没有直观的感受？那就先来一波成果图让你先直观的感受下他的功能。这是一张使用官网的代码生成出来的宣传海报图。是不是跟一些宣传的海报差不多了。后面会给出生成的具体的代码来详细说明大概的步骤来生成如下的结果。</p>
<p><img src="@source/notes/record/ImageCombiner/assets/image-20230814165154882.png" alt="image-20230814165154882"></p>
<h3 id="_2、image-combiner-目录" tabindex="-1"><a class="header-anchor" href="#_2、image-combiner-目录" aria-hidden="true">#</a> 2、image-combiner 目录</h3>
<p><img src="@source/notes/record/ImageCombiner/assets/image-20230814165422484.png" alt="image-20230814165422484"></p>
<p>将代码使用 git clone 下载下来之后，使用开发 IDE（这里以 IntelliJ IDEA 为例）打开。image-combiner 的源代码还是比较清爽的，从它的 star 数就可以看到，受欢迎的程度还是可以的。</p>
<p><img src="@source/notes/record/ImageCombiner/assets/image-20230814165600179.png" alt="image-20230814165600179"></p>
<h2 id="_3-如何编程化生成" tabindex="-1"><a class="header-anchor" href="#_3-如何编程化生成" aria-hidden="true">#</a> 3. 如何编程化生成</h2>
<h3 id="_1、跟着官方例子调试" tabindex="-1"><a class="header-anchor" href="#_1、跟着官方例子调试" aria-hidden="true">#</a> 1、跟着官方例子调试</h3>
<p>任何一个开源项目拿到手之后，除了先熟悉开源软件的源码结构之外，在找到程序的主入口之后，通过调试运行来预测和跟踪程序的运行方式，从而掌握其源码的执行原理。在和自己的项目进行集成的时候，就可以进行充分的调优，甚至可以可以按照自己的方式进行优化，如果是一些通用场景，可以提交给社区，最终实现来源开源，反哺开源的正向操作。</p>
<p>打开 test 目录下的<strong>AppTest.java</strong>类。这里以一个面比较全的方法类说明 image-combiner 的主要用法。选取的代码如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>
<span class="token doc-comment comment">/**
 * 完整功能测试
 *
 * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
 */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">FullTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> bgImageUrl <span class="token operator">=</span> <span class="token string">"https://img.thebeastshop.com/combine_image/funny_topic/resource/bg_3x4.png"</span><span class="token punctuation">;</span>                       <span class="token comment">//背景图（测试url形式）</span>
    <span class="token class-name">String</span> qrCodeUrl <span class="token operator">=</span> <span class="token string">"http://imgtest.thebeastshop.com/file/combine_image/qrcodef3d132b46b474fe7a9cc6e76a511dfd5.jpg"</span><span class="token punctuation">;</span>     <span class="token comment">//二维码</span>
    <span class="token class-name">String</span> productImageUrl <span class="token operator">=</span> <span class="token string">"https://img.thebeastshop.com/combine_image/funny_topic/resource/product_3x4.png"</span><span class="token punctuation">;</span>             <span class="token comment">//商品图</span>
    <span class="token class-name">BufferedImage</span> waterMark <span class="token operator">=</span> <span class="token class-name">ImageIO</span><span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">"https://img.thebeastshop.com/combine_image/funny_topic/resource/water_mark.png"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//水印图（测试BufferedImage形式）</span>
    <span class="token class-name">BufferedImage</span> avatar <span class="token operator">=</span> <span class="token class-name">ImageIO</span><span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">"https://img.thebeastshop.com/member/privilege/level-icon/level-three.jpg"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">//头像</span>
    <span class="token class-name">String</span> title <span class="token operator">=</span> <span class="token string">"# 最爱的家居"</span><span class="token punctuation">;</span>                                       <span class="token comment">//标题文本</span>
    <span class="token class-name">String</span> content <span class="token operator">=</span> <span class="token string">"苏格拉底说：“如果没有那个桌子，可能就没有那个水壶”"</span><span class="token punctuation">;</span>  <span class="token comment">//内容文本</span>

    <span class="token comment">//合成器和背景图（整个图片的宽高和相关计算依赖于背景图，所以背景图的大小是个基准）</span>
    <span class="token class-name">ImageCombiner</span> combiner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ImageCombiner</span><span class="token punctuation">(</span>bgImageUrl<span class="token punctuation">,</span> <span class="token class-name">OutputFormat</span><span class="token punctuation">.</span><span class="token constant">PNG</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    combiner<span class="token punctuation">.</span><span class="token function">setBackgroundBlur</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//设置背景高斯模糊（毛玻璃效果）</span>
    combiner<span class="token punctuation">.</span><span class="token function">setCanvasRoundCorner</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//设置整图圆角（输出格式必须为PNG）</span>

    <span class="token comment">//商品图（设置坐标、宽高和缩放模式，若按宽度缩放，则高度按比例自动计算）</span>
    combiner<span class="token punctuation">.</span><span class="token function">addImageElement</span><span class="token punctuation">(</span>productImageUrl<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">160</span><span class="token punctuation">,</span> <span class="token number">837</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token class-name">ZoomMode<span class="token punctuation">.</span>Width</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">setRoundCorner</span><span class="token punctuation">(</span><span class="token number">46</span><span class="token punctuation">)</span>     <span class="token comment">//设置圆角</span>
            <span class="token punctuation">.</span><span class="token function">setCenter</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">//居中绘制，会忽略x坐标参数，改为自动计算</span>

    <span class="token comment">//标题（默认字体为“阿里巴巴普惠体”，也可以自己指定字体名称或Font对象）</span>
    combiner<span class="token punctuation">.</span><span class="token function">addTextElement</span><span class="token punctuation">(</span>title<span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">1400</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//内容（设置文本自动换行，需要指定最大宽度（超出则换行）、最大行数（超出则丢弃）、行高）</span>
    combiner<span class="token punctuation">.</span><span class="token function">addTextElement</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token string">"微软雅黑"</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">1480</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">setAutoBreakLine</span><span class="token punctuation">(</span><span class="token number">837</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//头像（圆角设置一定的大小，可以把头像变成圆的）</span>
    combiner<span class="token punctuation">.</span><span class="token function">addImageElement</span><span class="token punctuation">(</span>avatar<span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">1200</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">,</span> <span class="token class-name">ZoomMode<span class="token punctuation">.</span>WidthHeight</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">setRoundCorner</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">setBlur</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">//高斯模糊，毛玻璃效果</span>

    <span class="token comment">//水印（设置透明度，0.0~1.0）</span>
    combiner<span class="token punctuation">.</span><span class="token function">addImageElement</span><span class="token punctuation">(</span>waterMark<span class="token punctuation">,</span> <span class="token number">630</span><span class="token punctuation">,</span> <span class="token number">1200</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">setAlpha</span><span class="token punctuation">(</span><span class="token number">.8f</span><span class="token punctuation">)</span>      <span class="token comment">//透明度，0.0~1.0</span>
            <span class="token punctuation">.</span><span class="token function">setRotate</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//旋转，0~360，按中心点旋转</span>

    <span class="token comment">//二维码（强制按指定宽度、高度缩放）</span>
    combiner<span class="token punctuation">.</span><span class="token function">addImageElement</span><span class="token punctuation">(</span>qrCodeUrl<span class="token punctuation">,</span> <span class="token number">138</span><span class="token punctuation">,</span> <span class="token number">1707</span><span class="token punctuation">,</span> <span class="token number">186</span><span class="token punctuation">,</span> <span class="token number">186</span><span class="token punctuation">,</span> <span class="token class-name">ZoomMode<span class="token punctuation">.</span>WidthHeight</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//元素对象也可以直接new，然后手动加入待绘制列表</span>
    <span class="token class-name">TextElement</span> textPrice <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TextElement</span><span class="token punctuation">(</span><span class="token string">"￥1290"</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">,</span> <span class="token number">1400</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    textPrice<span class="token punctuation">.</span><span class="token function">setStrikeThrough</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">//删除线</span>
    combiner<span class="token punctuation">.</span><span class="token function">addElement</span><span class="token punctuation">(</span>textPrice<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">//加入待绘制集合</span>

    <span class="token comment">//动态计算位置</span>
    <span class="token keyword">int</span> offsetPrice <span class="token operator">=</span> textPrice<span class="token punctuation">.</span><span class="token function">getX</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> textPrice<span class="token punctuation">.</span><span class="token function">getWidth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">;</span>
    combiner<span class="token punctuation">.</span><span class="token function">addTextElement</span><span class="token punctuation">(</span><span class="token string">"￥999"</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> offsetPrice<span class="token punctuation">,</span> <span class="token number">1400</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">setColor</span><span class="token punctuation">(</span><span class="token class-name">Color</span><span class="token punctuation">.</span>red<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//执行图片合并</span>
    combiner<span class="token punctuation">.</span><span class="token function">combine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//保存文件</span>
    combiner<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token string">"d://fullTest.png"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//或者获取流（并上传oss等）</span>
    <span class="token comment">//InputStream is = combiner.getCombinedImageStream();</span>
    <span class="token comment">//String url = ossUtil.upload(is);</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、海报生成区分解" tabindex="-1"><a class="header-anchor" href="#_2、海报生成区分解" aria-hidden="true">#</a> 2、海报生成区分解</h3>
<p><img src="@source/notes/record/ImageCombiner/assets/image-20230814165944575.png" alt="image-20230814165944575"></p>
<p>针对上述的宣传海报进行了分区，并用数字 1-5 号进行标记，</p>
<ul>
<li>
<p>1 号一般用于宣传海报上的主要目标图片</p>
</li>
<li>
<p>2 号一般是商品的名字</p>
</li>
<li>
<p>3 号可以使价格</p>
</li>
<li>
<p>4 号位置通常会对商品或者活动信息进行简单的描述</p>
</li>
<li>
<p>5 号位置可以预留给二维码等信息</p>
</li>
</ul>
<blockquote>
<p>这里我们忽略了一个基本需求，就是海报有一个最基础的背景，所以在制作海报前首先还应该准备一张基本的背景图。针对上面这种需求，结合代码应该怎么进行实现？</p>
</blockquote>
<p><img src="@source/notes/record/ImageCombiner/assets/Snipaste_2023-08-14_16-37-31.png" alt=""></p>
<p>图片合成类<strong>ImageCombiner</strong>是主要的工作类，可以看下这个类的工作方法如下，可以看到这个类的方法非常丰富，包含所有的图片合成与处理的函数。通过构造<strong>ImageElement</strong>对象将背景图片设置到海报中，同时海报的宽度等信息也是在这里进行了初始化。</p>
<p><img src="@source/notes/record/ImageCombiner/assets/image-20230814170444776.png" alt="image-20230814170444776"></p>
<h3 id="_4、添加商品图和相关文字介绍" tabindex="-1"><a class="header-anchor" href="#_4、添加商品图和相关文字介绍" aria-hidden="true">#</a> 4、添加商品图和相关文字介绍</h3>
<p>在背景图的上面，继续添加主要的宣传图片，比如商品图像信息。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>
<span class="token comment">//商品图（设置坐标、宽高和缩放模式，若按宽度缩放，则高度按比例自动计算）</span>
combiner<span class="token punctuation">.</span><span class="token function">addImageElement</span><span class="token punctuation">(</span>productImageUrl<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">160</span><span class="token punctuation">,</span> <span class="token number">837</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token class-name">ZoomMode<span class="token punctuation">.</span>Width</span><span class="token punctuation">)</span>
     <span class="token punctuation">.</span><span class="token function">setRoundCorner</span><span class="token punctuation">(</span><span class="token number">46</span><span class="token punctuation">)</span>     <span class="token comment">//设置圆角</span>
     <span class="token punctuation">.</span><span class="token function">setCenter</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">//居中绘制，会忽略x坐标参数，改为自动计算</span>

<span class="token comment">//标题（默认字体为“阿里巴巴普惠体”，也可以自己指定字体名称或Font对象）</span>
combiner<span class="token punctuation">.</span><span class="token function">addTextElement</span><span class="token punctuation">(</span>title<span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">1400</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//内容（设置文本自动换行，需要指定最大宽度（超出则换行）、最大行数（超出则丢弃）、行高）</span>
combiner<span class="token punctuation">.</span><span class="token function">addTextElement</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token string">"微软雅黑"</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">1480</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">setAutoBreakLine</span><span class="token punctuation">(</span><span class="token number">837</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//头像（圆角设置一定的大小，可以把头像变成圆的）</span>
combiner<span class="token punctuation">.</span><span class="token function">addImageElement</span><span class="token punctuation">(</span>avatar<span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">1200</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">,</span> <span class="token class-name">ZoomMode<span class="token punctuation">.</span>WidthHeight</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setRoundCorner</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setBlur</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">//高斯模糊，毛玻璃效果</span>

<span class="token comment">//水印（设置透明度，0.0~1.0）</span>
combiner<span class="token punctuation">.</span><span class="token function">addImageElement</span><span class="token punctuation">(</span>waterMark<span class="token punctuation">,</span> <span class="token number">630</span><span class="token punctuation">,</span> <span class="token number">1200</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setAlpha</span><span class="token punctuation">(</span><span class="token number">.8f</span><span class="token punctuation">)</span>      <span class="token comment">//透明度，0.0~1.0</span>
    <span class="token punctuation">.</span><span class="token function">setRotate</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//旋转，0~360，按中心点旋转</span>

<span class="token comment">//二维码（强制按指定宽度、高度缩放）</span>
combiner<span class="token punctuation">.</span><span class="token function">addImageElement</span><span class="token punctuation">(</span>qrCodeUrl<span class="token punctuation">,</span> <span class="token number">138</span><span class="token punctuation">,</span> <span class="token number">1707</span><span class="token punctuation">,</span> <span class="token number">186</span><span class="token punctuation">,</span> <span class="token number">186</span><span class="token punctuation">,</span> <span class="token class-name">ZoomMode<span class="token punctuation">.</span>WidthHeight</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、动态位置计算" tabindex="-1"><a class="header-anchor" href="#_5、动态位置计算" aria-hidden="true">#</a> 5、动态位置计算</h3>
<p>在一些场景中，文字的距离不是提前可控的，比如会根据前面文字的距离来设置后面文字的宽度，实现动态的设置。这里来看 image-combiner 应该如何实现？</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//元素对象也可以直接new，然后手动加入待绘制列表</span>
<span class="token class-name">TextElement</span> textPrice <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TextElement</span><span class="token punctuation">(</span><span class="token string">"￥1290"</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">,</span> <span class="token number">1400</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
textPrice<span class="token punctuation">.</span><span class="token function">setStrikeThrough</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">//删除线</span>
combiner<span class="token punctuation">.</span><span class="token function">addElement</span><span class="token punctuation">(</span>textPrice<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">//加入待绘制集合</span>

<span class="token comment">//动态计算位置</span>
<span class="token keyword">int</span> offsetPrice <span class="token operator">=</span> textPrice<span class="token punctuation">.</span><span class="token function">getX</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> textPrice<span class="token punctuation">.</span><span class="token function">getWidth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">;</span>
combiner<span class="token punctuation">.</span><span class="token function">addTextElement</span><span class="token punctuation">(</span><span class="token string">"￥999"</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> offsetPrice<span class="token punctuation">,</span> <span class="token number">1400</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setColor</span><span class="token punctuation">(</span><span class="token class-name">Color</span><span class="token punctuation">.</span>red<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/record/ImageCombiner/assets/image-20230814170846977.png" alt="image-20230814170846977"></p>
<h3 id="_6、最后" tabindex="-1"><a class="header-anchor" href="#_6、最后" aria-hidden="true">#</a> 6、最后</h3>
<p>使用 Graphics2D 对象创建图片并执行相关的写入操作。</p>
<p><img src="@source/notes/record/ImageCombiner/assets/image-20230814171845604.png" alt="image-20230814171845604"></p>
<p>通过以上的步骤，就可以生成我们需要的宣传图，是不是很方便，也很简单。</p>
<h2 id="_4-总结和展望" tabindex="-1"><a class="header-anchor" href="#_4-总结和展望" aria-hidden="true">#</a> 4. 总结和展望</h2>
<h3 id="_1、展望" tabindex="-1"><a class="header-anchor" href="#_1、展望" aria-hidden="true">#</a> 1、展望</h3>
<p>image-combiner 的其它能力你可以下载代码后在自己的 ide 中进行实际跑一下，这样比较有直观的效果。这里只是展示了它的基础能力，具体的使用场景需要你来定义。通过编程化海报处理，在应对批量的动态电子证书，动态的个人信息证明等等是非常具有想象力的，再此基础之上，可以进行 web 化提供云服务接口，或者桌面化，提供给需要的用户进行使用。这些功能的扩展需要大家的聪明才智来头脑风暴，肯定会有很多有意思的 Idea。</p>
<h3 id="_2、总结" tabindex="-1"><a class="header-anchor" href="#_2、总结" aria-hidden="true">#</a> 2、总结</h3>
<p>以上就是本文的主要内容，文章首先简单介绍了 Dromara 开源社区，然后介绍了基于 Java 的海报生成器 image-combiner，通过 debug 调试的方式完整的介绍了如何使用编程模式来完成一份海报的生成。最后对于 image-combiner 的功能扩展进行了展望。如果您有兴趣，可以自己来扩展和完善。</p>
</div></template>


