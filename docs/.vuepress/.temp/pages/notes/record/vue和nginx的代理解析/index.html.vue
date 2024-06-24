<template><div><h1 id="🎬︎-总结-vue-和-nginx-的代理解析" tabindex="-1"><a class="header-anchor" href="#🎬︎-总结-vue-和-nginx-的代理解析" aria-hidden="true">#</a> 🎬︎ 总结 vue 和 nginx 的代理解析</h1>
<hr/>
<nav class="table-of-contents"><ul><li><router-link to="#_1-vue-的-proxy-和-pathrewrite">1. vue 的 proxy 和 pathRewrite</router-link><ul><li><router-link to="#_1-1-vue-的代理">1.1 vue 的代理</router-link></li></ul></li><li><router-link to="#_2-nginx-篇章">2.nginx 篇章</router-link></li></ul></nav>
<blockquote>
<p>vue 编译器和 nginx 都能启动我们前端项目的，二者都能对前端的请求进行转发代理到后端项目中</p>
</blockquote>
<blockquote>
<p>我们本地电脑也可以下载一个 nginx 启动我们的前端项目，而不用通过 vue 编译器启动。</p>
</blockquote>
<h2 id="_1-vue-的-proxy-和-pathrewrite" tabindex="-1"><a class="header-anchor" href="#_1-vue-的-proxy-和-pathrewrite" aria-hidden="true">#</a> 1. vue 的 proxy 和 pathRewrite</h2>
<h3 id="_1-1-vue-的代理" tabindex="-1"><a class="header-anchor" href="#_1-1-vue-的代理" aria-hidden="true">#</a> 1.1 vue 的代理</h3>
<p>比如我现在本地电脑，用 vue 启动一个前端项目，端口是 8080，后端微服务项目的 gateway 模块的端口是 9999，那么此时我的前端项目端口和后端微服务端口是不一样的，虽然彼此都是本地电脑，也就是 127.0.0.1，但是端口不一样，如果前端项目想把请求发送到后端项目，那么此时属于跨域，那应该怎么解决跨域呢，此时就得用到了代理。</p>
<p><img src="@source/notes/record/vue和nginx的代理解析/assets/image-20230521151418079.png" alt="image-20230521151418079"></p>
<p>补充修改下：</p>
<p><img src="@source/notes/record/vue和nginx的代理解析/assets/image-20230521151450937.png" alt="image-20230521151450937"></p>
<p><img src="@source/notes/record/vue和nginx的代理解析/assets/image-20230521151509478.png" alt="image-20230521151509478"></p>
<p><img src="@source/notes/record/vue和nginx的代理解析/assets/image-20230521151655200.png" alt="image-20230521151655200"></p>
<p>上面的图的 main.js 文件修改后前端 vue 编译器可以直接热部署，不需要重启前端 vue 编译器就能看到最新的修改效果；vue.config.js 里面的内容修改后是无法热部署的，我得重启 vue 编译器项目才能看到最新的修改效果</p>
<p><code v-pre>( /auth匹配的是axios的path部分，不是baseUrl如果匹配baseUrl的话，应该是Http开头的才对）</code></p>
<p>附录：</p>
<p><img src="@source/notes/record/vue和nginx的代理解析/assets/image-20230521151724399.png" alt="image-20230521151724399"></p>
<p>用这个方法写上去，打印下 path，看看 path 是什么。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token string-property property">'/gppublish'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">target</span><span class="token operator">:</span> url<span class="token punctuation">,</span>
    <span class="token literal-property property">ws</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function-variable function">pathRewrite</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">path<span class="token punctuation">,</span> req</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'path='</span><span class="token punctuation">,</span> path<span class="token punctuation">)</span>
     <span class="token keyword">return</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">'/sbgl/gppublish'</span><span class="token punctuation">,</span> <span class="token string">'/gppublish'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-nginx-篇章" tabindex="-1"><a class="header-anchor" href="#_2-nginx-篇章" aria-hidden="true">#</a> 2.nginx 篇章</h2>
<p>前端项目要是用 nginx 启动的话，那么在 vue 上面的代理是无法用到 nginx 的，nginx 也得做和 vue 的 vue.config.js 里面一样的代理配置才能请求转发到我的后端项目，不然 nginx 启动的端口和我后端项目启动的端口不一样，如果从 nginx 启动前端项目然后想发送请求到后端项目的话，是存在跨域的，所以 nginx 得配置代理，将请求转发到后端项目。</p>
<p><img src="@source/notes/record/vue和nginx的代理解析/assets/image-20230521151743758.png" alt="image-20230521151743758"></p>
<p><img src="@source/notes/record/vue和nginx的代理解析/assets/image-20230521151800316.png" alt="image-20230521151800316"></p>
<p><img src="@source/notes/record/vue和nginx的代理解析/assets/image-20230521151827680.png" alt="image-20230521151827680"></p>
<p><strong>问：这些|xx|，auth|gppu|，是什么意思？</strong></p>
<blockquote>
<p>/sbgl/auth 或者/sbgl/gppu 这样的路径开头的 就进来这里，路径没变，但是换了 ip，可以重写的，有很多功能，^是表示必须开头的意思。可以搜正则表达式就知道了</p>
</blockquote>
<p><img src="@source/notes/record/vue和nginx的代理解析/assets/image-20230521151848651.png" alt="image-20230521151848651"></p>
</div></template>


