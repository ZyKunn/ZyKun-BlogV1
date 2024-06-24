<template><div><h1 id="_02-servlet-一" tabindex="-1"><a class="header-anchor" href="#_02-servlet-一" aria-hidden="true">#</a> 02 - Servlet（一） 🛩️</h1>
<nav class="table-of-contents"><ul><li><router-link to="#javaweb-基础技术">JavaWeb 基础技术</router-link></li><li><router-link to="#servlet-技术入门">Servlet 技术入门</router-link><ul><li><router-link to="#servlet-概述">Servlet 概述</router-link></li><li><router-link to="#helloservlet">HelloServlet</router-link></li></ul></li><li><router-link to="#servlet-创建方式对比">Servlet 创建方式对比</router-link></li><li><router-link to="#servlet-请求流程-生命周期">Servlet 请求流程(生命周期)</router-link><ul><li><router-link to="#服务器配置热部署">服务器配置热部署</router-link></li></ul></li><li><router-link to="#httpservletrequest-httpservletresponse">HttpServletRequest&amp;HttpServletResponse</router-link><ul><li><router-link to="#httpservletrequest-耳朵">HttpServletRequest(耳朵)</router-link></li><li><router-link to="#httpservletresponse-嘴巴">HttpServletResponse（嘴巴）</router-link></li></ul></li><li><router-link to="#综合案例-登录注册实现">综合案例:登录注册实现</router-link></li></ul></nav>
<h2 id="javaweb-基础技术" tabindex="-1"><a class="header-anchor" href="#javaweb-基础技术" aria-hidden="true">#</a> JavaWeb 基础技术</h2>
<p>javaweb 是一个庞大知识体系，内部综合了各项 web 开发相关技术，常见有以下：</p>
<ul>
<li>Servlet(服务端小程序)</li>
<li>JSP(动态网页)</li>
<li>JSTL/EL 表达式(表达式语言)</li>
<li>Fileter(过滤器)</li>
<li>Listener(监听器)</li>
<li>WebSocket(服务端消息主动推送技术)</li>
<li>MVC（软件架构方式）</li>
</ul>
<h2 id="servlet-技术入门" tabindex="-1"><a class="header-anchor" href="#servlet-技术入门" aria-hidden="true">#</a> Servlet 技术入门</h2>
<p><img src="@source/notes/java/06/02-Servlet(一)/assets/1611105886913.png" alt="1611105886913"></p>
<h3 id="servlet-概述" tabindex="-1"><a class="header-anchor" href="#servlet-概述" aria-hidden="true">#</a> Servlet 概述</h3>
<p>​ Servlet:是一个组合词，由 Server+Applet 组合而成；是一项运行在服务端的 java 小程序；提供了对客户端 http<strong>请求处理</strong>的能力，同时也能够将处理之后的<strong>结果响应</strong>给客户端</p>
<h3 id="helloservlet" tabindex="-1"><a class="header-anchor" href="#helloservlet" aria-hidden="true">#</a> HelloServlet</h3>
<ol>
<li>创建普通 java 类继承 HttpServlet</li>
<li>重写 doGet/doPost 方法（或直接重写 service）</li>
<li>配置 url-pattern（两种）</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">"/hello"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloServlet</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"HelloServlet...Get"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doPost</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"HelloServlet...Post"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="基于注解的配置" tabindex="-1"><a class="header-anchor" href="#基于注解的配置" aria-hidden="true">#</a> 基于注解的配置</h4>
<p>从 web3.0 开始 servlet 支持使用注解的方式配置 servlet,使用方式是直接在 servlet 类上方使用<code v-pre>@WebServlet</code>注解，需要注明 url-pattern 地址，如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">"/hello"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>浏览器访问路径如下：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>http://localhost/javaweb02/hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span>urlPatterns <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"/hello"</span><span class="token punctuation">,</span><span class="token string">"/HelloServlet"</span><span class="token punctuation">,</span><span class="token string">"/hi"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>浏览器访问路径可以从以上三个映射地址中任意选择</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>http://localhost/javaweb02/hi
http://localhost/javaweb02/hello
http://localhost/javaweb02/HelloWorld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="基于-xml-的配置-3-0-以下的配置" tabindex="-1"><a class="header-anchor" href="#基于-xml-的配置-3-0-以下的配置" aria-hidden="true">#</a> 基于 xml 的配置（3.0 以下的配置）</h4>
<p>在 web3.0 以前对于 servlet 的配置只能通过 web.xml 文件(<strong>位于 web 根目录的 WEB-INF 中</strong>)完成</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>web-app</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://xmlns.jcp.org/xml/ns/javaee<span class="token punctuation">"</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">"</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd<span class="token punctuation">"</span></span>
         <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">></span></span>HelloServlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-class</span><span class="token punctuation">></span></span>com.softeem.servlets.HelloServlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-class</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-mapping</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">></span></span>HelloServlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url-pattern</span><span class="token punctuation">></span></span>/hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url-pattern</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-mapping</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>web-app</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="servlet-创建方式对比" tabindex="-1"><a class="header-anchor" href="#servlet-创建方式对比" aria-hidden="true">#</a> Servlet 创建方式对比</h2>
<p>Servlet 的创建方式有三种：</p>
<ol>
<li>实现 Servlet 接口</li>
<li>继承 GenericServlet</li>
<li><strong>继承 HttpServlet（推荐）</strong></li>
</ol>
<h2 id="servlet-请求流程-生命周期" tabindex="-1"><a class="header-anchor" href="#servlet-请求流程-生命周期" aria-hidden="true">#</a> Servlet 请求流程(生命周期)</h2>
<p><img src="@source/notes/java/06/02-Servlet(一)/assets/1611114241832.png" alt="1611114241832"></p>
<p>Servlet 在 web 服务器中是基于多线程的实现，是单例的模式运行（<strong>尽量避免在 servlet 中定义全局变量，存在线程安全问题</strong>），即对于所有客户端的请求是通过同一个实例来实现，通过代码测试可以看出:</p>
<p><img src="@source/notes/java/06/02-Servlet(一)/assets/1611114513198.png" alt="1611114513198"></p>
<p><strong>总结 servlet 生命周期:</strong></p>
<ol>
<li>web 容器（web 服务器)初始化会首先加载并校验所有的 Servlet</li>
<li>当客户端对 servlet 发起第一次请求时，servlet 会自动执行 init 方法完成一些初始化工作（init 方法只会执行一次）</li>
<li>然后根据客户端发送的请求方法由 HttpServlet 中 service 方法决定调用 doXXX 方法处理请求</li>
<li>之后任何客户端请求都会直接执行 doXXX 方法，而不会再次执行 init</li>
<li>当 web 容器停止服务时，所有的 servlet 会执行 destory 完成一些销毁工作</li>
</ol>
<h3 id="服务器配置热部署" tabindex="-1"><a class="header-anchor" href="#服务器配置热部署" aria-hidden="true">#</a> 服务器配置热部署</h3>
<p>每次对 servlet 类（或者 jsp，其他各种资源类）进行修改，都需要重启服务器才能够让最新的配置生效，比较麻烦，tomcat 服务器是支持热更新的，配置如下：</p>
<p><img src="@source/notes/java/06/02-Servlet(一)/assets/1611115080022.png" alt="1611115080022"></p>
<h2 id="httpservletrequest-httpservletresponse" tabindex="-1"><a class="header-anchor" href="#httpservletrequest-httpservletresponse" aria-hidden="true">#</a> HttpServletRequest&amp;HttpServletResponse</h2>
<p>Servlet 中设计了两个接口用于处理客户端请求以及做出相应，分别为:</p>
<ul>
<li>HttpServletRequest</li>
<li>HttpServletResponse</li>
</ul>
<h3 id="httpservletrequest-耳朵" tabindex="-1"><a class="header-anchor" href="#httpservletrequest-耳朵" aria-hidden="true">#</a> HttpServletRequest(耳朵)</h3>
<p>该接口用于接收客户端发送的请求，其中包含一些请求的头信息，<strong>提交的数据</strong>，以及客户端的状态等;Servlet 中多数时候使用 HttpServletRequest 对象都是为了获取客户端提交的数据</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token comment">//        System.out.println("这是第一个Servlet类！！！！");</span>
    <span class="token comment">//获取请求头的所有名称</span>
    <span class="token class-name">Enumeration</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> headers <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getHeaderNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>headers<span class="token punctuation">.</span><span class="token function">hasMoreElements</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> headers<span class="token punctuation">.</span><span class="token function">nextElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> value <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//            System.out.println(name+"==="+value);</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**获取客户端信息*/</span>
    <span class="token comment">//获取客户端ip地址</span>
    <span class="token class-name">String</span> ip <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getRemoteAddr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"客户端ip-->"</span><span class="token operator">+</span>ip<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> user <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getRemoteUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"客户端-->"</span><span class="token operator">+</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> host <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getRemoteHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"客户端主机名--->"</span><span class="token operator">+</span>host<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> port <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getRemotePort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"客户端端口--->"</span><span class="token operator">+</span>port<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"============================="</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**获取请求信息*/</span>
    <span class="token class-name">String</span> serverName <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getServerName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> path <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getRequestURI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> serverPort <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getServerPort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> protocol <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getProtocol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> queryString <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getQueryString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"协议===>"</span><span class="token operator">+</span>protocol<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"serverName===>"</span><span class="token operator">+</span>serverName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"服务端端口===>"</span><span class="token operator">+</span>serverPort<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"请求资源地址===>"</span><span class="token operator">+</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"查询信息===>"</span><span class="token operator">+</span>queryString<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"-----------------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HttpServletRequest 获取客户端提交数据的方式非常多：</p>
<table>
<thead>
<tr>
<th>方法名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>getParameter(String name)</strong></td>
<td>从客户端的请求参数中通过 key 获取传递值（例如 username=softeem）</td>
</tr>
<tr>
<td><strong>getParameterValues(String name)</strong></td>
<td>从客户端的请求参数中获取数据(字符串数组)</td>
</tr>
<tr>
<td>getParameterMap()</td>
<td>将客户端提交的所有数据存储到 Map 中（Map&lt;String,String[]&gt;）</td>
</tr>
<tr>
<td>getParameterNames()</td>
<td>获取客户端提交的所有数据对应的 name 值</td>
</tr>
</tbody>
</table>
<p>页面端：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  用户名：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入用户名<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
  密码：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入密码<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
  爱好： <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fun<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>女 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fun<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>学习 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fun<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>愉快的学习 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fun<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>疯狂学习 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>提交<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后端 servlet 类:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">"/user"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServlet</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">//设置请求编码</span>
        req<span class="token punctuation">.</span><span class="token function">setCharacterEncoding</span><span class="token punctuation">(</span><span class="token string">"utf-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//http://127.0.0.1/javaweb02/user?username=admin&amp;password=123456</span>
        <span class="token comment">//数据段：username=admin&amp;password=123456</span>
        <span class="token comment">//获取客户端提交的数据</span>
        <span class="token class-name">String</span> username <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> password <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">"password"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>username<span class="token operator">+</span><span class="token string">"/"</span><span class="token operator">+</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//获取表单提交的数据（数组）</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> funs <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getParameterValues</span><span class="token punctuation">(</span><span class="token string">"fun"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token operator">:</span>funs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"================"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//将所有的请求参数存储一个Map集合中</span>
        <span class="token class-name">Map</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span> maps <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getParameterMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        maps<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span>v<span class="token punctuation">)</span><span class="token operator">-></span><span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> item<span class="token operator">:</span>v<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>k<span class="token operator">+</span><span class="token string">"===="</span><span class="token operator">+</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Enumeration</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> pnames <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getParameterNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>pnames<span class="token punctuation">.</span><span class="token function">hasMoreElements</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">String</span> name <span class="token operator">=</span> pnames<span class="token punctuation">.</span><span class="token function">nextElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token operator">+</span><span class="token string">"#####"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="关于-405-问题" tabindex="-1"><a class="header-anchor" href="#关于-405-问题" aria-hidden="true">#</a> 关于 405 问题</h4>
<p>当客户端的请求方法（比如客户端发送是 GET 请求）与服务端处理的方法(服务端只重写了 doPost 方法)不一致时会出现 405 状态码</p>
<p><img src="@source/notes/java/06/02-Servlet(一)/assets/1611123675494.png" alt="1611123675494"></p>
<p>解决方案有如下两种：</p>
<ol>
<li>
<p>在 doGet 里面调用 doPost（反之亦可）</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">"/user"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServlet</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doPost</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token function">doGet</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>直接在 servlet 类中重写 service 方法</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span><span class="token string">"/user"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServlet</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>

    <span class="token comment">//    @Override</span>
    <span class="token comment">//    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {</span>
    <span class="token comment">//       doGet(request, response);</span>
    <span class="token comment">//    }</span>
    <span class="token comment">//</span>
    <span class="token comment">//    @Override</span>
    <span class="token comment">//    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {</span>
    <span class="token comment">//</span>
    <span class="token comment">//    }</span>


    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"执行service"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h4 id="表单提交" tabindex="-1"><a class="header-anchor" href="#表单提交" aria-hidden="true">#</a> 表单提交</h4>
<p><img src="@source/notes/java/06/02-Servlet(一)/assets/1611125210463.png" alt="1611125210463"></p>
<h3 id="httpservletresponse-嘴巴" tabindex="-1"><a class="header-anchor" href="#httpservletresponse-嘴巴" aria-hidden="true">#</a> HttpServletResponse（嘴巴）</h3>
<p>Servlet 除了能获取客户端请求之外，还可以对客户端的请求做出响应</p>
<p>常见方法：</p>
<table>
<thead>
<tr>
<th>方法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>getWriter()</td>
<td>从 response 对象中获取输出流</td>
</tr>
<tr>
<td>sendRedirect()</td>
<td>重定向请求到目标资源(页面，或其他 servlet)</td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//        resp.setCharacterEncoding("utf-8");</span>
<span class="token comment">//        resp.setContentType("text/html;charset=utf-8");</span>
<span class="token comment">//        PrintWriter out = resp.getWriter();</span>
<span class="token comment">//        out.println("服务端收到信息了!!!等7个工作日之后处理");</span>
<span class="token comment">//        out.flush();</span>

<span class="token comment">//重定向（客户端跳转）</span>
<span class="token comment">//        resp.sendRedirect("main.html");</span>

<span class="token comment">//请求转发（服务端跳转）</span>
req<span class="token punctuation">.</span><span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span><span class="token string">"main.html"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span>resp<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="综合案例-登录注册实现" tabindex="-1"><a class="header-anchor" href="#综合案例-登录注册实现" aria-hidden="true">#</a> 综合案例:登录注册实现</h2>
<p><img src="@source/notes/java/06/02-Servlet(一)/assets/1611129401534.png" alt="1611129401534"></p>
<p><img src="@source/notes/java/06/02-Servlet(一)/assets/1611129418684.png" alt="1611129418684"></p>
</div></template>


