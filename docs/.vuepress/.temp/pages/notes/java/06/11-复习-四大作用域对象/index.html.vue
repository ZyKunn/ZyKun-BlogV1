<template><div><h1 id="_11-复习-四大作用域对象" tabindex="-1"><a class="header-anchor" href="#_11-复习-四大作用域对象" aria-hidden="true">#</a> 11-复习-四大作用域对象 🌌</h1>
<nav class="table-of-contents"><ul><li><router-link to="#_1-cookie">1 cookie</router-link></li></ul></nav>
<h2 id="_1-cookie" tabindex="-1"><a class="header-anchor" href="#_1-cookie" aria-hidden="true">#</a> 1 cookie</h2>
<ul>
<li>如何发送 cookie</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">/*cookie其实就是把信息存在客户端
  每次客户访问都会带着cookie进行访问
  默认cookie是一次会话
*/</span>

<span class="token comment">//怎么创建一个cookie</span>
<span class="token class-name">Cookie</span> cookie <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cookie</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span><span class="token string">"zyk"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//设置持久化时间  参数是秒  cookie存在硬盘中</span>
cookie<span class="token punctuation">.</span><span class="token function">setMaxAge</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token operator">*</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//设置携带cookie的访问路径</span>
cookie<span class="token punctuation">.</span><span class="token function">setPath</span><span class="token punctuation">(</span><span class="token string">"/order"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//怎么发送一个cookie</span>
resp<span class="token punctuation">.</span><span class="token function">addCookie</span><span class="token punctuation">(</span>cookie<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>如何接收 cookie</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//如何接收cookie</span>
<span class="token class-name">Cookie</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cookies <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getCookies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//判断cookies是否为空</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>cookies <span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//遍历cookies数组</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Cookie</span> cookie <span class="token operator">:</span> cookies<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//获取每个cookie的键</span>
        <span class="token class-name">String</span> cookieName <span class="token operator">=</span> cookie<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//判断cookie的键是否与我发送时设置的键一致</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>cookieName<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//获取cookie的值</span>
            <span class="token class-name">String</span> cookieValue <span class="token operator">=</span> cookie<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>cookieName<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>cookieValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用 cookie 实现用户上次的访问记录</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//进此方法就先记录当前时间</span>
<span class="token class-name">String</span> <span class="token class-name">LastAccessTime</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">"yyyy-MM-dd|HH:mm:ss"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
resp<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">"text/html;charset=utf-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//创建cookie将时间记录并发送到浏览器</span>
<span class="token class-name">Cookie</span> cookie <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cookie</span><span class="token punctuation">(</span><span class="token string">"currentTime"</span><span class="token punctuation">,</span><span class="token class-name">LastAccessTime</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
cookie<span class="token punctuation">.</span><span class="token function">setMaxAge</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token operator">*</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
resp<span class="token punctuation">.</span><span class="token function">addCookie</span><span class="token punctuation">(</span>cookie<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> cookieValue <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token class-name">Cookie</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cookies <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getCookies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>cookies <span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//遍历cookies数组</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Cookie</span> coo <span class="token operator">:</span> cookies<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//获取每个cookie的键</span>
        <span class="token class-name">String</span> cookieName <span class="token operator">=</span> coo<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//判断cookie的键是否与我发送时设置的键一致</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>cookieName<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">"currentTime"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//获取cookie的值</span>
            cookieValue <span class="token operator">=</span> coo<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>cookieValue<span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    resp<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"亲爱的 您是第一次访问"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    resp<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"您上次的访问时间是："</span><span class="token operator">+</span>cookieValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/java/06/11-复习-四大作用域对象/assets/image-20210227134018573.png" alt="image-20210227134018573"></p>
<h1 id="_2-session" tabindex="-1"><a class="header-anchor" href="#_2-session" aria-hidden="true">#</a> 2 session</h1>
<ul>
<li>创建 session</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//session其实就是把信息存储在服务端</span>
<span class="token comment">//session掌握 如何创建session</span>
<span class="token doc-comment comment">/**
         * 当浏览器访问时，先会判断是否有之前的sessionId
         * 如果有则req.getSession();取之前现有的
         * 没有就创建一个新的session
         */</span>
<span class="token class-name">HttpSession</span> session <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//获取唯一session的一个标志性id</span>
<span class="token class-name">String</span> sessionId <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

session<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span><span class="token string">"zyk"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sessionId<span class="token punctuation">)</span><span class="token punctuation">;</span>
resp<span class="token punctuation">.</span><span class="token function">sendRedirect</span><span class="token punctuation">(</span><span class="token string">"/session2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>session 的持久化----&gt;关闭掉页面仍然能取到 session 中存到的</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token class-name">HttpSession</span> session <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> id <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Cookie</span> cookie <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cookie</span><span class="token punctuation">(</span><span class="token string">"JSESSIONID"</span><span class="token punctuation">,</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>

    cookie<span class="token punctuation">.</span><span class="token function">setMaxAge</span><span class="token punctuation">(</span><span class="token number">600</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    response<span class="token punctuation">.</span><span class="token function">addCookie</span><span class="token punctuation">(</span>cookie<span class="token punctuation">)</span><span class="token punctuation">;</span>

    session<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">"用户名"</span><span class="token punctuation">,</span><span class="token string">"赵元坤"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">String</span> 用户名 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> session<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">"用户名"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>用户名<span class="token punctuation">)</span><span class="token punctuation">;</span>

    response<span class="token punctuation">.</span><span class="token function">sendRedirect</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">getContextPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">"/SessionDemo2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>


<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> 			<span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token class-name">HttpSession</span> session <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">String</span> 用户名 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> session<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">"用户名"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> id <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>用户名<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-四大域对象" tabindex="-1"><a class="header-anchor" href="#_3-四大域对象" aria-hidden="true">#</a> 3 四大域对象</h1>
<p>域对象都有对应的生命周期，生命周期只需要关注何时创建，何时销毁 域的作用都是用来存储数据的</p>
<p>域对象都有对应的 set，get 方法</p>
<ul>
<li>page 域，当前页面</li>
<li>request 域，一次请求</li>
<li>session 域，超时，或者手动注销</li>
<li>context 域，整个项目 （可以写一个统计页面总访问量）</li>
</ul>
<p>该本地的域名映射</p>
<p>C:\Windows\System32\drivers\etc------&gt;hosts</p>
</div></template>


