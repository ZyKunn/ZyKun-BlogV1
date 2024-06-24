<template><div><h1 id="🌈day01-初识-vue" tabindex="-1"><a class="header-anchor" href="#🌈day01-初识-vue" aria-hidden="true">#</a> 🌈day01-初识 Vue</h1>
<hr/>
<nav class="table-of-contents"><ul><li><router-link to="#一、为什么要学习-vue">一、为什么要学习 Vue</router-link></li><li><router-link to="#二、什么是-vue">二、什么是 Vue</router-link><ul><li><router-link to="#_1-什么是构建用户界面">1.什么是构建用户界面</router-link></li><li><router-link to="#_2-什么是渐进式">2.什么是渐进式</router-link></li><li><router-link to="#_3-什么是框架">3.什么是框架</router-link></li><li><router-link to="#总结-什么是-vue">总结：什么是 Vue？</router-link></li></ul></li><li><router-link to="#三、创建-vue-实例">三、创建 Vue 实例</router-link></li><li><router-link to="#四、插值表达式">四、插值表达式 {{ }}</router-link><ul><li><router-link to="#_1-作用-利用表达式进行插值-渲染到页面中">1.作用：利用表达式进行插值，渲染到页面中</router-link></li><li><router-link to="#_2-语法">2.语法</router-link></li><li><router-link to="#_3-错误用法">3.错误用法</router-link></li><li><router-link to="#_4-总结">4.总结</router-link></li></ul></li><li><router-link to="#五、响应式特性">五、响应式特性</router-link><ul><li><router-link to="#_1-什么是响应式">1.什么是响应式？</router-link></li><li><router-link to="#_2-如何访问-和-修改-data-中的数据-响应式演示">2.如何访问 和 修改 data 中的数据（响应式演示）</router-link></li><li><router-link to="#_3-总结">3.总结</router-link></li></ul></li><li><router-link to="#六、vue-开发者工具安装">六、Vue 开发者工具安装</router-link></li><li><router-link to="#七、vue-中的常用指令">七、Vue 中的常用指令</router-link></li><li><router-link to="#八、内容渲染指令">八、内容渲染指令</router-link></li><li><router-link to="#九、条件渲染指令">九、条件渲染指令</router-link></li><li><router-link to="#十、事件绑定指令">十、事件绑定指令</router-link></li><li><router-link to="#十一、属性绑定指令">十一、属性绑定指令</router-link></li><li><router-link to="#十二、小案例-波仔的学习之旅">十二、小案例-波仔的学习之旅</router-link></li><li><router-link to="#十三、列表渲染指令">十三、列表渲染指令</router-link></li><li><router-link to="#十四、小案例-小黑的书架">十四、小案例-小黑的书架</router-link></li><li><router-link to="#十五、v-for-中的-key">十五、v-for 中的 key</router-link></li><li><router-link to="#十六、双向绑定指令">十六、双向绑定指令</router-link></li><li><router-link to="#十七、综合案例-小黑记事本">十七、综合案例-小黑记事本</router-link></li></ul></nav>
<h2 id="一、为什么要学习-vue" tabindex="-1"><a class="header-anchor" href="#一、为什么要学习-vue" aria-hidden="true">#</a> 一、为什么要学习 Vue</h2>
<p>1.前端必备技能</p>
<p>2.岗位多，绝大互联网公司都在使用 Vue</p>
<p>3.提高开发效率</p>
<p>4.高薪必备技能（Vue2+Vue3）</p>
<h2 id="二、什么是-vue" tabindex="-1"><a class="header-anchor" href="#二、什么是-vue" aria-hidden="true">#</a> 二、什么是 Vue</h2>
<p>概念：Vue (读音 /vjuː/，类似于 view) 是一套 **构建用户界面 ** 的 <strong>渐进式</strong> <strong>框架</strong></p>
<p>Vue2 官网：<a href="https://v2.cn.vuejs.org/" target="_blank" rel="noopener noreferrer">https://v2.cn.vuejs.org/<ExternalLinkIcon/></a></p>
<h3 id="_1-什么是构建用户界面" tabindex="-1"><a class="header-anchor" href="#_1-什么是构建用户界面" aria-hidden="true">#</a> 1.什么是构建用户界面</h3>
<p><strong>基于数据</strong>渲染出用户可以看到的<strong>界面</strong></p>
<p><img src="@source/notes/front-end/05/day01-初识Vue/assets/1681875887026.png" alt="68187588702"></p>
<h3 id="_2-什么是渐进式" tabindex="-1"><a class="header-anchor" href="#_2-什么是渐进式" aria-hidden="true">#</a> 2.什么是渐进式</h3>
<p>所谓渐进式就是循序渐进，不一定非得把 Vue 中的所有 API 都学完才能开发 Vue，可以学一点开发一点</p>
<h4 id="vue-的两种开发方式" tabindex="-1"><a class="header-anchor" href="#vue-的两种开发方式" aria-hidden="true">#</a> Vue 的两种开发方式：</h4>
<ol>
<li>
<p>Vue 核心包开发</p>
<p>场景：局部模块改造</p>
</li>
<li>
<p>Vue 核心包&amp;Vue 插件&amp;工程化</p>
<p>场景：整站开发</p>
</li>
</ol>
<h3 id="_3-什么是框架" tabindex="-1"><a class="header-anchor" href="#_3-什么是框架" aria-hidden="true">#</a> 3.什么是框架</h3>
<p>所谓框架：就是一套完整的解决方案</p>
<p><strong>举个栗子</strong></p>
<p>如果把一个完整的项目比喻为一个装修好的房子，那么框架就是一个毛坯房。</p>
<p>我们只需要在“毛坯房”的基础上，增加功能代码即可。</p>
<p>提到框架，不得不提一下库。</p>
<ul>
<li>库，类似工具箱，是一堆方法的集合，比如 axios、lodash、echarts 等</li>
<li>框架，是一套完整的解决方案，实现了大部分功能，我们只需要按照一定的规则去编码即可。</li>
</ul>
<p>下图是 库 和 框架的对比。</p>
<p><img src="@source/notes/front-end/05/day01-初识Vue/assets/1681876620277.png" alt="68187662027"></p>
<p>框架的特点：有一套必须让开发者遵守的<strong>规则</strong>或者<strong>约束</strong></p>
<p>咱们学框架就是学习的这些规则 <a href="https://v2.cn.vuejs.org/" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a></p>
<h3 id="总结-什么是-vue" tabindex="-1"><a class="header-anchor" href="#总结-什么是-vue" aria-hidden="true">#</a> 总结：什么是 Vue？</h3>
<p>Vue 是什么：</p>
<p>什么是构建用户界面：</p>
<p>什么是渐进式：</p>
<p>什么是框架：</p>
<h2 id="三、创建-vue-实例" tabindex="-1"><a class="header-anchor" href="#三、创建-vue-实例" aria-hidden="true">#</a> 三、创建 Vue 实例</h2>
<p>我们已经知道了 Vue 框架可以 基于数据帮助我们渲染出用户界面，那应该怎么做呢？</p>
<p><img src="@source/notes/front-end/05/day01-初识Vue/assets/1681877190137.png" alt="68187719013"></p>
<p>比如就上面这个数据，基于提供好的 msg 怎么渲染后右侧可展示的数据呢？</p>
<p><strong>核心步骤（4 步）：</strong></p>
<ol>
<li>准备容器</li>
<li>引包（官网） — <strong>开发版本</strong>/<strong>生产版本</strong></li>
<li>创建 Vue 实例 new Vue()</li>
<li>指定配置项，渲染数据
<ol>
<li>el:指定挂载点</li>
<li>data 提供数据</li>
</ol>
</li>
</ol>
<p><img src="@source/notes/front-end/05/day01-初识Vue/assets/1681877405007.png" alt="68187740500"></p>
<p><strong>总结：创建 Vue 实例需要执行哪 4 步</strong></p>
<h2 id="四、插值表达式" tabindex="-1"><a class="header-anchor" href="#四、插值表达式" aria-hidden="true">#</a> 四、插值表达式 {{ }}</h2>
<p>插值表达式是一种 Vue 的模板语法</p>
<p>我们可以用插值表达式渲染出 Vue 提供的数据</p>
<p><img src="@source/notes/front-end/05/day01-初识Vue/assets/1681886494417.png" alt="68188649441"></p>
<h3 id="_1-作用-利用表达式进行插值-渲染到页面中" tabindex="-1"><a class="header-anchor" href="#_1-作用-利用表达式进行插值-渲染到页面中" aria-hidden="true">#</a> 1.作用：利用表达式进行插值，渲染到页面中</h3>
<p>表达式：是可以被求值的代码，JS 引擎会讲其计算出一个结果</p>
<p>以下的情况都是表达式：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>money <span class="token operator">+</span> <span class="token number">100</span>
money <span class="token operator">-</span> <span class="token number">100</span>
money <span class="token operator">*</span> <span class="token number">10</span>
money <span class="token operator">/</span> <span class="token number">10</span>
price <span class="token operator">>=</span> <span class="token number">100</span> <span class="token operator">?</span> <span class="token string">'真贵'</span> <span class="token operator">:</span> <span class="token string">'还行'</span>
obj<span class="token punctuation">.</span>name
arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
obj<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-语法" tabindex="-1"><a class="header-anchor" href="#_2-语法" aria-hidden="true">#</a> 2.语法</h3>
<p>插值表达式语法：{{ 表达式 }}</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>h3<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span>h3<span class="token operator">></span>

<span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span>nickName<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>

<span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span>age <span class="token operator">>=</span> <span class="token number">18</span> <span class="token operator">?</span> <span class="token string">'成年'</span><span class="token operator">:</span><span class="token string">'未成年'</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>

<span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>

<span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-错误用法" tabindex="-1"><a class="header-anchor" href="#_3-错误用法" aria-hidden="true">#</a> 3.错误用法</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token number">1.</span>在插值表达式中使用的数据 必须在data中进行了提供
<span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span>hobby<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>  <span class="token comment">//如果在data中不存在 则会报错</span>

<span class="token number">2.</span>支持的是表达式，而非语句，比如：<span class="token keyword">if</span>   <span class="token keyword">for</span> <span class="token operator">...</span>
<span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token keyword">if</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>

<span class="token number">3.</span>不能在标签属性中使用 <span class="token punctuation">{</span><span class="token punctuation">{</span>  <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token function">插值</span> <span class="token punctuation">(</span>插值表达式只能标签中间使用<span class="token punctuation">)</span>
<span class="token operator">&lt;</span>p title<span class="token operator">=</span><span class="token string">"{{username}}"</span><span class="token operator">></span>我是<span class="token constant">P</span>标签<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-总结" tabindex="-1"><a class="header-anchor" href="#_4-总结" aria-hidden="true">#</a> 4.总结</h3>
<p>1.插值表达式的作用是什么</p>
<p>2.语法是什么</p>
<p>3.插值表达式的注意事项</p>
<h2 id="五、响应式特性" tabindex="-1"><a class="header-anchor" href="#五、响应式特性" aria-hidden="true">#</a> 五、响应式特性</h2>
<h3 id="_1-什么是响应式" tabindex="-1"><a class="header-anchor" href="#_1-什么是响应式" aria-hidden="true">#</a> 1.什么是响应式？</h3>
<p>​ 简单理解就是数据变，视图对应变。</p>
<h3 id="_2-如何访问-和-修改-data-中的数据-响应式演示" tabindex="-1"><a class="header-anchor" href="#_2-如何访问-和-修改-data-中的数据-响应式演示" aria-hidden="true">#</a> 2.如何访问 和 修改 data 中的数据（响应式演示）</h3>
<p>data 中的数据, 最终会被添加到实例上</p>
<p>① 访问数据： &quot;实例.属性名&quot;</p>
<p>② 修改数据： &quot;实例.属性名&quot;= &quot;值&quot;</p>
<p><img src="@source/notes/front-end/05/day01-初识Vue/assets/1681888539340.png" alt="68188853934"></p>
<h3 id="_3-总结" tabindex="-1"><a class="header-anchor" href="#_3-总结" aria-hidden="true">#</a> 3.总结</h3>
<ol>
<li>什么是响应式</li>
<li>如何访问和修改 data 中的数据呢</li>
</ol>
<h2 id="六、vue-开发者工具安装" tabindex="-1"><a class="header-anchor" href="#六、vue-开发者工具安装" aria-hidden="true">#</a> 六、Vue 开发者工具安装</h2>
<ol>
<li>通过谷歌应用商店安装（国外网站）</li>
<li>极简插件下载（推荐） <a href="https://chrome.zzzmh.cn/index" target="_blank" rel="noopener noreferrer">https://chrome.zzzmh.cn/index<ExternalLinkIcon/></a></li>
</ol>
<p>安装步骤：</p>
<p><img src="@source/notes/front-end/05/day01-初识Vue/assets/1681889390406.png" alt="68188939040"></p>
<p>安装之后可以 F12 后看到多一个 Vue 的调试面板</p>
<p><img src="@source/notes/front-end/05/day01-初识Vue/assets/1681889483446.png" alt="68188948344"></p>
<h2 id="七、vue-中的常用指令" tabindex="-1"><a class="header-anchor" href="#七、vue-中的常用指令" aria-hidden="true">#</a> 七、Vue 中的常用指令</h2>
<p><strong>概念：<strong>指令（Directives）是 Vue 提供的带有 <strong>v- 前缀</strong> 的 特殊 标签</strong>属性</strong>。</p>
<p>为啥要学：提高程序员操作 DOM 的效率。</p>
<p>vue 中的指令按照不同的用途可以分为如下 6 大类：</p>
<ul>
<li>内容渲染指令（v-html、v-text）</li>
<li>条件渲染指令（v-show、v-if、v-else、v-else-if）</li>
<li>事件绑定指令（v-on）</li>
<li>属性绑定指令 （v-bind）</li>
<li>双向绑定指令（v-model）</li>
<li>列表渲染指令（v-for）</li>
</ul>
<p>指令是 vue 开发中最基础、最常用、最简单的知识点。</p>
<h2 id="八、内容渲染指令" tabindex="-1"><a class="header-anchor" href="#八、内容渲染指令" aria-hidden="true">#</a> 八、内容渲染指令</h2>
<p>内容渲染指令用来辅助开发者渲染 DOM 元素的文本内容。常用的内容渲染指令有如下 2 个：</p>
<ul>
<li>
<p>v-text（类似 innerText）</p>
</li>
<li>
<ul>
<li>使用语法：<code v-pre>&lt;p v-text=&quot;uname&quot;&gt;hello&lt;/p&gt;</code>，意思是将 uame 值渲染到 p 标签中</li>
<li>类似 innerText，使用该语法，会覆盖 p 标签原有内容</li>
</ul>
</li>
<li>
<p>v-html（类似 innerHTML）</p>
</li>
<li>
<ul>
<li>使用语法：<code v-pre>&lt;p v-html=&quot;intro&quot;&gt;hello&lt;/p&gt;</code>，意思是将 intro 值渲染到 p 标签中</li>
<li>类似 innerHTML，使用该语法，会覆盖 p 标签原有内容</li>
<li>类似 innerHTML，使用该语法，能够将 HTML 标签的样式呈现出来。</li>
</ul>
</li>
</ul>
<p>代码演示：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>h2<span class="token operator">></span>个人信息<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
	<span class="token comment">// 既然指令是vue提供的特殊的html属性，所以咱们写的时候就当成属性来用即可</span>
    <span class="token operator">&lt;</span>p v<span class="token operator">-</span>text<span class="token operator">=</span><span class="token string">"uname"</span><span class="token operator">></span>姓名：<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span>p v<span class="token operator">-</span>html<span class="token operator">=</span><span class="token string">"intro"</span><span class="token operator">></span>简介：<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

<span class="token operator">&lt;</span>script<span class="token operator">></span>
        <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">'#app'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">uname</span><span class="token operator">:</span><span class="token string">'张三'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">intro</span><span class="token operator">:</span><span class="token string">'&lt;h2>这是一个&lt;strong>非常优秀&lt;/strong>的boy&lt;h2>'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="九、条件渲染指令" tabindex="-1"><a class="header-anchor" href="#九、条件渲染指令" aria-hidden="true">#</a> 九、条件渲染指令</h2>
<p>条件判断指令，用来辅助开发者按需控制 DOM 的显示与隐藏。条件渲染指令有如下两个，分别是：</p>
<ol>
<li>
<p>v-show</p>
<ol>
<li>作用： 控制元素显示隐藏</li>
<li>语法： v-show = &quot;表达式&quot; 表达式值为 true 显示， false 隐藏</li>
<li>原理： 切换 display:none 控制显示隐藏</li>
<li>场景：频繁切换显示隐藏的场景</li>
</ol>
<p><img src="@source/notes/front-end/05/day01-初识Vue/assets/1681891228284.png" alt="68189122828"></p>
</li>
<li>
<p>v-if</p>
<ol>
<li>作用： 控制元素显示隐藏（条件渲染）</li>
<li>语法： v-if= &quot;表达式&quot; 表达式值 true 显示， false 隐藏</li>
<li>原理： 基于条件判断，是否创建 或 移除元素节点</li>
<li>场景： 要么显示，要么隐藏，不频繁切换的场景</li>
</ol>
<p><img src="@source/notes/front-end/05/day01-初识Vue/assets/1681891237750.png" alt="68189123775"></p>
<p>示例代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"box"</span><span class="token operator">></span>我是v<span class="token operator">-</span>show控制的盒子<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"box"</span><span class="token operator">></span>我是v<span class="token operator">-</span><span class="token keyword">if</span>控制的盒子<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

  <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
  <span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">flag</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>v-else 和 v-else-if</p>
<ol>
<li>作用：辅助 v-if 进行判断渲染</li>
<li>语法：v-else v-else-if=&quot;表达式&quot;</li>
<li>需要紧接着 v-if 使用</li>
</ol>
</li>
</ol>
<p>示例代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span>性别：♂ 男<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span>性别：♀ 女<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span>hr<span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span>成绩评定<span class="token constant">A</span>：奖励电脑一台<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span>成绩评定<span class="token constant">B</span>：奖励周末郊游<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span>成绩评定<span class="token constant">C</span>：奖励零食礼包<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span>成绩评定<span class="token constant">D</span>：惩罚一周不能玩手机<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

  <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
  <span class="token operator">&lt;</span>script<span class="token operator">></span>

    <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">95</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十、事件绑定指令" tabindex="-1"><a class="header-anchor" href="#十、事件绑定指令" aria-hidden="true">#</a> 十、事件绑定指令</h2>
<p>使用 Vue 时，如需为 DOM 注册事件，及其的简单，语法如下：</p>
<ul>
<li>&lt;button v-on:事件名=&quot;内联语句&quot;&gt;按钮&lt;/button&gt;</li>
<li>&lt;button v-on:事件名=&quot;处理函数&quot;&gt;按钮&lt;/button&gt;</li>
<li>&lt;button v-on:事件名=&quot;处理函数(实参)&quot;&gt;按钮&lt;/button&gt;</li>
<li><code v-pre>v-on:</code> 可以简写为 <strong>@</strong></li>
</ul>
<ol>
<li>
<p>内联语句</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"count--"</span><span class="token operator">></span><span class="token operator">-</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span> count <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
    <span class="token operator">&lt;</span>button v<span class="token operator">-</span>on<span class="token operator">:</span>click<span class="token operator">=</span><span class="token string">"count++"</span><span class="token operator">></span><span class="token operator">+</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
  <span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">100</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>事件处理函数</p>
<p>注意：</p>
<ul>
<li>事件处理函数应该写到一个跟 data 同级的配置项**（methods）**中</li>
<li>methods 中的函数内部的 this 都指向 Vue 实例</li>
</ul>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>button<span class="token operator">></span>切换显示隐藏<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span>h1 v<span class="token operator">-</span>show<span class="token operator">=</span><span class="token string">"isShow"</span><span class="token operator">></span>黑马程序员<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
  <span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">isShow</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.给事件处理函数传参</p>
<ul>
<li>
<p>如果不传递任何参数，则方法无需加小括号；methods 方法中可以直接使用 e 当做事件对象</p>
</li>
<li>
<p>如果传递了参数，则实参 <code v-pre>$event</code> 表示事件对象，固定用法。</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> <span class="token operator">&lt;</span>style<span class="token operator">></span>
    <span class="token punctuation">.</span>box <span class="token punctuation">{</span>
      <span class="token literal-property property">border</span><span class="token operator">:</span> 3px solid #<span class="token number">000000</span><span class="token punctuation">;</span>
      border<span class="token operator">-</span>radius<span class="token operator">:</span> 10px<span class="token punctuation">;</span>
      <span class="token literal-property property">padding</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
      <span class="token literal-property property">margin</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> 200px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    h3 <span class="token punctuation">{</span>
      <span class="token literal-property property">margin</span><span class="token operator">:</span> 10px <span class="token number">0</span> 20px <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    p <span class="token punctuation">{</span>
      <span class="token literal-property property">margin</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>

 <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"box"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h3<span class="token operator">></span>小黑自动售货机<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
      <span class="token operator">&lt;</span>button<span class="token operator">></span>可乐<span class="token number">5</span>元<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span>button<span class="token operator">></span>咖啡<span class="token number">10</span>元<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span>button<span class="token operator">></span>牛奶<span class="token number">8</span>元<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span>银行卡余额：<span class="token punctuation">{</span><span class="token punctuation">{</span> money <span class="token punctuation">}</span><span class="token punctuation">}</span>元<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

  <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
  <span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">money</span><span class="token operator">:</span> <span class="token number">100</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十一、属性绑定指令" tabindex="-1"><a class="header-anchor" href="#十一、属性绑定指令" aria-hidden="true">#</a> 十一、属性绑定指令</h2>
<ol>
<li>**作用：**动态设置 html 的标签属性 比如：src、url、title</li>
<li><strong>语法</strong>：**v-bind:**属性名=“表达式”</li>
<li>**v-bind:**可以简写成 =&gt; <strong>:</strong></li>
</ol>
<p>比如，有一个图片，它的 <code v-pre>src</code> 属性值，是一个图片地址。这个地址在数据 data 中存储。</p>
<p>则可以这样设置属性值：</p>
<ul>
<li><code v-pre>&lt;img v-bind:src=&quot;url&quot; /&gt;</code></li>
<li><code v-pre>&lt;img :src=&quot;url&quot; /&gt;</code> （v-bind 可以省略）</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>img v<span class="token operator">-</span>bind<span class="token operator">:</span>src<span class="token operator">=</span><span class="token string">"imgUrl"</span> v<span class="token operator">-</span>bind<span class="token operator">:</span>title<span class="token operator">=</span><span class="token string">"msg"</span> alt<span class="token operator">=</span><span class="token string">""</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>img <span class="token operator">:</span>src<span class="token operator">=</span><span class="token string">"imgUrl"</span> <span class="token operator">:</span>title<span class="token operator">=</span><span class="token string">"msg"</span> alt<span class="token operator">=</span><span class="token string">""</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
  <span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">imgUrl</span><span class="token operator">:</span> <span class="token string">'./imgs/10-02.png'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'hello 波仔'</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十二、小案例-波仔的学习之旅" tabindex="-1"><a class="header-anchor" href="#十二、小案例-波仔的学习之旅" aria-hidden="true">#</a> 十二、小案例-波仔的学习之旅</h2>
<p>需求：默认展示数组中的第一张图片，点击上一页下一页来回切换数组中的图片</p>
<p>实现思路：</p>
<p>1.数组存储图片路径 ['url1','url2','url3'，...]</p>
<p>2.可以准备个下标 index 去数组中取图片地址。</p>
<p>3.通过 v-bind 给 src 绑定当前的图片地址</p>
<p>4.点击上一页下一页只需要修改下标的值即可</p>
<p>5.当展示第一张的时候，上一页按钮应该隐藏。展示最后一张的时候，下一页按钮应该隐藏</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>button<span class="token operator">></span>上一页<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>img src alt<span class="token operator">=</span><span class="token string">""</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>button<span class="token operator">></span>下一页<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
  <span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">'./imgs/11-00.gif'</span><span class="token punctuation">,</span>
          <span class="token string">'./imgs/11-01.gif'</span><span class="token punctuation">,</span>
          <span class="token string">'./imgs/11-02.gif'</span><span class="token punctuation">,</span>
          <span class="token string">'./imgs/11-03.gif'</span><span class="token punctuation">,</span>
          <span class="token string">'./imgs/11-04.png'</span><span class="token punctuation">,</span>
          <span class="token string">'./imgs/11-05.png'</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十三、列表渲染指令" tabindex="-1"><a class="header-anchor" href="#十三、列表渲染指令" aria-hidden="true">#</a> 十三、列表渲染指令</h2>
<p>Vue 提供了 v-for 列表渲染指令，用来辅助开发者基于一个数组来循环渲染一个列表结构。</p>
<p>v-for 指令需要使用 <code v-pre>(item, index) in arr</code> 形式的特殊语法，其中：</p>
<ul>
<li>item 是数组中的每一项</li>
<li>index 是每一项的索引，不需要可以省略</li>
<li>arr 是被遍历的数组</li>
</ul>
<p>此语法也可以遍历<strong>对象和数字</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//遍历对象</span>
<span class="token operator">&lt;</span>div v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"(value, key, index) in object"</span><span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token literal-property property">value</span><span class="token operator">:</span>对象中的值
<span class="token literal-property property">key</span><span class="token operator">:</span>对象中的键
<span class="token literal-property property">index</span><span class="token operator">:</span>遍历索引从<span class="token number">0</span>开始

<span class="token comment">//遍历数字</span>
<span class="token operator">&lt;</span>p v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"item in 10"</span><span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
item从<span class="token number">1</span> 开始
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十四、小案例-小黑的书架" tabindex="-1"><a class="header-anchor" href="#十四、小案例-小黑的书架" aria-hidden="true">#</a> 十四、小案例-小黑的书架</h2>
<p>需求：</p>
<p>1.根据左侧数据渲染出右侧列表（v-for）</p>
<p>2.点击删除按钮时，应该把当前行从列表中删除（获取当前行的 id，利用 filter 进行过滤）</p>
<p><img src="@source/notes/front-end/05/day01-初识Vue/assets/1681896632672.png" alt="68189663267"></p>
<p>准备代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>h3<span class="token operator">></span>小黑的书架<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
    <span class="token operator">&lt;</span>ul<span class="token operator">></span>
      <span class="token operator">&lt;</span>li<span class="token operator">></span>
        <span class="token operator">&lt;</span>span<span class="token operator">></span>《红楼梦》<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
        <span class="token operator">&lt;</span>span<span class="token operator">></span>曹雪芹<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
        <span class="token operator">&lt;</span>button<span class="token operator">></span>删除<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
  <span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">booksList</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'《红楼梦》'</span><span class="token punctuation">,</span> <span class="token literal-property property">author</span><span class="token operator">:</span> <span class="token string">'曹雪芹'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'《西游记》'</span><span class="token punctuation">,</span> <span class="token literal-property property">author</span><span class="token operator">:</span> <span class="token string">'吴承恩'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'《水浒传》'</span><span class="token punctuation">,</span> <span class="token literal-property property">author</span><span class="token operator">:</span> <span class="token string">'施耐庵'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'《三国演义》'</span><span class="token punctuation">,</span> <span class="token literal-property property">author</span><span class="token operator">:</span> <span class="token string">'罗贯中'</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十五、v-for-中的-key" tabindex="-1"><a class="header-anchor" href="#十五、v-for-中的-key" aria-hidden="true">#</a> 十五、v-for 中的 key</h2>
<p><strong>语法：</strong> key=&quot;唯一值&quot;</p>
<p><strong>作用：<strong>给列表项添加的</strong>唯一标识</strong>。便于 Vue 进行列表项的<strong>正确排序复用</strong>。</p>
<p>**为什么加 key：**Vue 的默认行为会尝试原地修改元素（<strong>就地复用</strong>）</p>
<p>实例代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>ul<span class="token operator">></span>
  <span class="token operator">&lt;</span>li v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"(item, index) in booksList"</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">"item.id"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span> item<span class="token punctuation">.</span>name <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
    <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span> item<span class="token punctuation">.</span>author <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"del(item.id)"</span><span class="token operator">></span>删除<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p>
<ol>
<li>key 的值只能是字符串 或 数字类型</li>
<li>key 的值必须具有唯一性</li>
<li><strong>推荐使用 id 作为 key（唯一）</strong>，不推荐使用 index 作为 key（会变化，不对应）</li>
</ol>
<h2 id="十六、双向绑定指令" tabindex="-1"><a class="header-anchor" href="#十六、双向绑定指令" aria-hidden="true">#</a> 十六、双向绑定指令</h2>
<p>所谓双向绑定就是：</p>
<ol>
<li>数据改变后，呈现的页面结果会更新</li>
<li>页面结果更新后，数据也会随之而变</li>
</ol>
<p><strong>作用：</strong> 给<strong>表单元素</strong>（input、radio、select）使用，双向绑定数据，可以快速 <strong>获取</strong> 或 <strong>设置</strong> 表单元素内容</p>
<p>**语法：**v-model=&quot;变量&quot;</p>
<p>**需求：**使用双向绑定实现以下需求</p>
<ol>
<li>点击登录按钮获取表单中的内容</li>
<li>点击重置按钮清空表单中的内容</li>
</ol>
<p><img src="@source/notes/front-end/05/day01-初识Vue/assets/1681913125738.png" alt="68191312573"></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span>
    账户：<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span><span class="token operator">></span> <span class="token operator">&lt;</span>br<span class="token operator">></span><span class="token operator">&lt;</span>br<span class="token operator">></span>
    密码：<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"password"</span><span class="token operator">></span> <span class="token operator">&lt;</span>br<span class="token operator">></span><span class="token operator">&lt;</span>br<span class="token operator">></span>
    <span class="token operator">&lt;</span>button<span class="token operator">></span>登录<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span>button<span class="token operator">></span>重置<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
  <span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">''</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十七、综合案例-小黑记事本" tabindex="-1"><a class="header-anchor" href="#十七、综合案例-小黑记事本" aria-hidden="true">#</a> 十七、综合案例-小黑记事本</h2>
<p><img src="@source/notes/front-end/05/day01-初识Vue/assets/1681914565816.png" alt="68191456581"></p>
<p><strong>功能需求：</strong></p>
<ol>
<li>
<p>列表渲染</p>
</li>
<li>
<p>删除功能</p>
</li>
<li>
<p>添加功能</p>
</li>
<li>
<p>底部统计 和 清空</p>
<p>代码如下： css 文件自己找</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./css/index.css<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>TODO LIST<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 主体区域 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- 输入框 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>TODO LIST<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>todoName<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Please enter a task<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>new-todo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>add<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>add()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Add task<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- 列表区域 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>main<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>todo-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>todo<span class="token punctuation">"</span></span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item,index) in list<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>view<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{index + 1}}.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span>{{ item.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>del(item.id)<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>destroy<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- 统计和清空 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>list.length > 0<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- 统计 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>todo-count<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          Count:
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">></span></span>{{ list.length }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- 清空 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clear<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clear-completed<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Clear<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>

    <span class="token comment">&lt;!-- 底部 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../vue.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'跑步一公里'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'游泳八百米'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'炫粉'</span> <span class="token punctuation">}</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">todoName</span><span class="token operator">:</span> <span class="token string">''</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 删除</span>
          <span class="token function">del</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>id <span class="token operator">!=</span> id<span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token comment">// 清除</span>
          <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>todoName <span class="token operator">==</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token operator">+</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>todoName
              <span class="token punctuation">}</span><span class="token punctuation">)</span>
              <span class="token comment">// 清空 内容</span>
              <span class="token keyword">this</span><span class="token punctuation">.</span>todoName <span class="token operator">=</span> <span class="token string">''</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
</div></template>


