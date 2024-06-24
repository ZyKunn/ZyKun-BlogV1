<template><div><h1 id="spring-security-oauth2-0-认证授权" tabindex="-1"><a class="header-anchor" href="#spring-security-oauth2-0-认证授权" aria-hidden="true">#</a> Spring Security OAuth2.0 认证授权</h1>
<hr/>
<nav class="table-of-contents"><ul><li><router-link to="#_1-基本概念">1.基本概念</router-link><ul><li><router-link to="#_1-1-什么是认证">1.1.什么是认证</router-link></li><li><router-link to="#_1-2-什么是会话">1.2 什么是会话</router-link></li><li><router-link to="#_1-2-什么是授权">1.2 什么是授权</router-link></li><li><router-link to="#_1-3-授权的数据模型">1.3 授权的数据模型</router-link></li><li><router-link to="#_1-4-rbac">1.4 RBAC</router-link></li></ul></li><li><router-link to="#_2-基于-session-的认证方式">2 基于 Session 的认证方式</router-link><ul><li><router-link to="#_2-1-认证流程">2.1 认证流程</router-link></li><li><router-link to="#_2-2-创建工程">2.2.创建工程</router-link></li><li><router-link to="#_2-3-实现认证功能">2.3.实现认证功能</router-link></li><li><router-link to="#_2-4-实现会话功能">2.4.实现会话功能</router-link></li><li><router-link to="#_2-5-实现授权功能">2.5.实现授权功能</router-link></li><li><router-link to="#_2-6-小结">2.6.小结</router-link></li></ul></li></ul></nav>
<h2 id="_1-基本概念" tabindex="-1"><a class="header-anchor" href="#_1-基本概念" aria-hidden="true">#</a> 1.基本概念</h2>
<h3 id="_1-1-什么是认证" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是认证" aria-hidden="true">#</a> 1.1.什么是认证</h3>
<p>​ 进入移动互联网时代，大家每天都在刷手机，常用的软件有微信、支付宝、头条等，下边拿微信来举例子说明认证 相关的基本概念，在初次使用微信前需要注册成为微信用户，然后输入账号和密码即可登录微信，输入账号和密码 登录微信的过程就是认证。</p>
<blockquote>
<p>系统为什么要认证？</p>
</blockquote>
<p>​ 认证是为了保护系统的隐私数据与资源，用户的身份合法方可访问该系统的资源。</p>
<p>**认证 ：**用户认证就是判断一个用户的身份是否合法的过程，用户去访问系统资源时系统要求验证用户的身份信 息，身份合法方可继续访问，不合法则拒绝访问。常见的用户身份认证方式有：用户名密码登录，二维码登录，手 机短信登录，指纹认证等方式。</p>
<h3 id="_1-2-什么是会话" tabindex="-1"><a class="header-anchor" href="#_1-2-什么是会话" aria-hidden="true">#</a> 1.2 什么是会话</h3>
<p>​ 用户认证通过后，为了避免用户的每次操作都进行认证可将用户的信息保证在会话中。会话就是系统为了保持当前 用户的登录状态所提供的机制，常见的有基于 session 方式、基于 token 方式等。</p>
<blockquote>
<p>基于 session 的认证方式如下图：</p>
</blockquote>
<p>​ 它的交互流程是，用户认证成功后，在服务端生成用户相关的数据保存在 session(当前会话)中，发给客户端的 sesssion_id 存放到 cookie 中，这样用户客户端请求时带上 session_id 就可以验证服务器端是否存在 session 数 据，以此完成用户的合法校验，当用户退出系统或 session 过期销毁时,客户端的 session_id 也就无效了。</p>
<p><img src="@source/notes/record/SpringSecurity+OAuth2.0认证授权/assets/image-20230626120153746.png" alt="image-20230626120153746"></p>
<blockquote>
<p>基于 token 方式如下图：</p>
</blockquote>
<p>​ 它的交互流程是，用户认证成功后，服务端生成一个 token 发给客户端，客户端可以放到 cookie 或 localStorage 等存储中，每次请求时带上 token，服务端收到 token 通过验证后即可确认用户身份。</p>
<p><img src="@source/notes/record/SpringSecurity+OAuth2.0认证授权/assets/image-20230626120345666.png" alt="image-20230626120345666"></p>
<p>​ 基于 session 的认证方式由 Servlet 规范定制，服务端要存储 session 信息需要占用内存资源，客户端需要支持 cookie；基于 token 的方式则一般不需要服务端存储 token，并且不限制客户端的存储方式。如今移动互联网时代 更多类型的客户端需要接入系统，系统多是采用前后端分离的架构进行实现，所以基于 token 的方式更适合。</p>
<h3 id="_1-2-什么是授权" tabindex="-1"><a class="header-anchor" href="#_1-2-什么是授权" aria-hidden="true">#</a> 1.2 什么是授权</h3>
<p>​ 还拿微信来举例子，微信登录成功后用户即可使用微信的功能，比如，发红包、发朋友圈、添加好友等，没有绑定 银行卡的用户是无法发送红包的，绑定银行卡的用户才可以发红包，发红包功能、发朋友圈功能都是微信的资源即 功能资源，用户拥有发红包功能的权限才可以正常使用发送红包功能，拥有发朋友圈功能的权限才可以使用发朋友 圈功能，这个根据用户的权限来控制用户使用资源的过程就是授权。</p>
<blockquote>
<p>​ 为什么要授权？</p>
</blockquote>
<p>​ 认证是为了保证用户身份的合法性，授权则是为了更细粒度的对隐私数据进行划分，授权是在认证通过后发生的， 控制不同的用户能够访问不同的资源。</p>
<p>​ <strong>授权：</strong> 授权是用户认证通过根据用户的权限来控制用户访问资源的过程，拥有资源的访问权限则正常访问，没有 权限则拒绝访问。</p>
<h3 id="_1-3-授权的数据模型" tabindex="-1"><a class="header-anchor" href="#_1-3-授权的数据模型" aria-hidden="true">#</a> 1.3 授权的数据模型</h3>
<p>​ 如何进行授权即如何对用户访问资源进行控制，首先需要学习授权相关的数据模型。</p>
<p>​ 授权可简单理解为 Who 对 What(which)进行 How 操作，包括如下：</p>
<p>​ <strong>Who</strong>，即主体（Subject），主体一般是指用户，也可以是程序，需要访问系统中的资源。</p>
<p>​ <strong>What</strong>，即资源 （Resource），如系统菜单、页面、按钮、代码方法、系统商品信息、系统订单信息等。系统菜单、页面、按 钮、代码方法都属于（系统功能资源），对于 web 系统每个功能资源通常对应一个 URL；系统商品信息、系统订单信息 都属于实体资源（数据资源），实体资源由资源类型和资源实例组成，比如商品信息为资源类型，商品编号 为 001 的商品为资源实例。</p>
<p>​ <strong>How</strong>，权限/许可（Permission），规定了用户对资源的操作许可，权限离开资源没有意义， 如用户查询权限、用户添加权限、某个代码方法的调用权限、编号为 001 的用户的修改权限等，通过权限可知用户 对哪些资源都有哪些操作许可。</p>
<blockquote>
<p>主体、资源、权限关系如下图：</p>
</blockquote>
<p><img src="@source/notes/record/SpringSecurity+OAuth2.0认证授权/assets/image-20230626121351820.png" alt="image-20230626121351820"></p>
<p>主体、资源、权限相关的数据模型如下：</p>
<p>主体（用户 id、账号、密码、...）</p>
<p>资源（资源 id、资源名称、访问地址、...）</p>
<p>权限（权限 id、权限标识、权限名称、资源 id、...）</p>
<p>角色（角色 id、角色名称、...）</p>
<p>角色和权限关系（角色 id、权限 id、...）</p>
<p>主体（用户）和角色关系（用户 id、角色 id、...）</p>
<p>主体（用户）、资源、权限关系如下图：</p>
<p><img src="@source/notes/record/SpringSecurity+OAuth2.0认证授权/assets/image-20230626121620465.png" alt="image-20230626121620465"></p>
<p><strong>通常企业开发中将资源和权限表合并为一张权限表，如下：</strong></p>
<p>资源（资源 id、资源名称、访问地址、...）</p>
<p>权限（权限 id、权限标识、权限名称、资源 id、...）</p>
<p><strong>合并为：</strong></p>
<p>权限（权限 id、权限标识、权限名称、资源名称、资源访问地址、...）</p>
<p>修改后数据模型之间的关系如下图：</p>
<p><img src="@source/notes/record/SpringSecurity+OAuth2.0认证授权/assets/image-20230626122012499.png" alt="image-20230626122012499"></p>
<h3 id="_1-4-rbac" tabindex="-1"><a class="header-anchor" href="#_1-4-rbac" aria-hidden="true">#</a> 1.4 RBAC</h3>
<p>​ 如何实现授权？业界通常基于 RBAC 实现授权。</p>
<h4 id="_1-4-1-基于角色的访问控制" tabindex="-1"><a class="header-anchor" href="#_1-4-1-基于角色的访问控制" aria-hidden="true">#</a> 1.4.1 基于角色的访问控制</h4>
<p>​ RBAC 基于角色的访问控制（Role-Based Access Control）是按角色进行授权，比如：主体的角色为总经理可以查 询企业运营报表，查询员工工资信息等，访问控制流程如下：</p>
<p><img src="@source/notes/record/SpringSecurity+OAuth2.0认证授权/assets/image-20230626125500472.png" alt="image-20230626125500472"></p>
<p>根据上图中的判断逻辑，授权代码可表示如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">if</span><span class="token punctuation">(</span>主体<span class="token punctuation">.</span><span class="token function">hasRole</span><span class="token punctuation">(</span><span class="token string">"总经理角色id"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	查询工资
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果上图中查询工资所需要的<strong>角色变化为总经理和部门经理</strong>，此时就需要修改判断逻辑为“判断用户的角色是否是 总经理或部门经理”，修改代码如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">if</span><span class="token punctuation">(</span>主体<span class="token punctuation">.</span><span class="token function">hasRole</span><span class="token punctuation">(</span><span class="token string">"总经理角色id"</span><span class="token punctuation">)</span> <span class="token operator">||</span> 主体<span class="token punctuation">.</span><span class="token function">hasRole</span><span class="token punctuation">(</span><span class="token string">"部门经理角色id"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	查询工资
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据上边的例子发现，当需要修改角色的权限时就需要修改授权的相关代码，系统可扩展性差。</p>
<h4 id="_1-4-2-基于资源的访问控制" tabindex="-1"><a class="header-anchor" href="#_1-4-2-基于资源的访问控制" aria-hidden="true">#</a> 1.4.2 基于资源的访问控制</h4>
<p>​ RBAC 基于资源的访问控制（Resource-Based Access Control）是按资源（或权限）进行授权，比如：用户必须 具有查询工资权限才可以查询员工工资信息等，访问控制流程如下：</p>
<p><img src="@source/notes/record/SpringSecurity+OAuth2.0认证授权/assets/image-20230626125950501.png" alt="image-20230626125950501"></p>
<p>根据上图中的判断，授权代码可以表示为：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">if</span><span class="token punctuation">(</span>主体<span class="token punctuation">.</span><span class="token function">hasPermission</span><span class="token punctuation">(</span><span class="token string">"查询工资权限标识"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	查询工资
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>优点：系统设计时定义好查询工资的权限标识，即使查询工资所需要的角色变化为总经理和部门经理也不需要修改 授权代码，系统可扩展性强。</p>
</blockquote>
<h2 id="_2-基于-session-的认证方式" tabindex="-1"><a class="header-anchor" href="#_2-基于-session-的认证方式" aria-hidden="true">#</a> 2 基于 Session 的认证方式</h2>
<h3 id="_2-1-认证流程" tabindex="-1"><a class="header-anchor" href="#_2-1-认证流程" aria-hidden="true">#</a> 2.1 认证流程</h3>
<p>​ 基于 Session 认证方式的流程是，用户认证成功后，在服务端生成用户相关的数据保存在 session(当前会话)，而发 给客户端的 sesssion_id 存放到 cookie 中，这样用客户端请求时带上 session_id 就可以验证服务器端是否存在 session 数据，以此完成用户的合法校验。当用户退出系统或 session 过期销毁时,客户端的 session_id 也就无效了。 下图是 session 认证方式的流程图：</p>
<p><img src="@source/notes/record/SpringSecurity+OAuth2.0认证授权/assets/image-20230626130325795.png" alt="image-20230626130325795"></p>
<p>​ 基于 Session 的认证机制由 Servlet 规范定制，Servlet 容器已实现，用户通过 HttpSession 的操作方法即可实现，如 下是 HttpSession 相关的操作 API。</p>
<table>
<thead>
<tr>
<th>方法</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>HttpSession getSession(Boolean create)</td>
<td>获取当前 HttpSession 对象</td>
</tr>
<tr>
<td>void setAttribute(String name,Object value)</td>
<td>向 session 中存放对象</td>
</tr>
<tr>
<td>object getAttribute(String name)</td>
<td>从 session 中获取对象</td>
</tr>
<tr>
<td>void removeAttribute(String name);</td>
<td>移除 session 中对象</td>
</tr>
<tr>
<td>void invalidate()</td>
<td>使 HttpSession 失效</td>
</tr>
<tr>
<td>略...</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="_2-2-创建工程" tabindex="-1"><a class="header-anchor" href="#_2-2-创建工程" aria-hidden="true">#</a> 2.2.创建工程</h3>
<p>​ 本案例工程使用 maven 进行构建，使用 SpringMVC、Servlet3.0 实现。</p>
<h4 id="_2-2-1-创建-maven-工程" tabindex="-1"><a class="header-anchor" href="#_2-2-1-创建-maven-工程" aria-hidden="true">#</a> 2.2.1 创建 maven 工程</h4>
<p>创建 maven 工程 security-springmvc，工程结构如下：</p>
<p><img src="@source/notes/record/SpringSecurity+OAuth2.0认证授权/assets/image-20230626130809341.png" alt="image-20230626130809341"></p>
<p>引入如下依赖如下，注意：</p>
<p>1、由于是 web 工程，packaging 设置为 war</p>
<p>2、使用 tomcat7-maven-plugin 插件来运行工程</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">"</span></span>
     <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">"</span></span>
     <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">></span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.itheima.security<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>security-springmvc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>packaging</span><span class="token punctuation">></span></span>war<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>packaging</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project.build.sourceEncoding</span><span class="token punctuation">></span></span>UTF-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project.build.sourceEncoding</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.source</span><span class="token punctuation">></span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.source</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.target</span><span class="token punctuation">></span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.target</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-webmvc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>5.1.5.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>javax.servlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>javax.servlet-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.0.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.projectlombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>lombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.18.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>finalName</span><span class="token punctuation">></span></span>security-springmvc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>finalName</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pluginManagement</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.tomcat.maven<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>tomcat7-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.maven.plugins<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>maven-compiler-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span><span class="token punctuation">></span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>source</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>target</span><span class="token punctuation">></span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>target</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">></span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>maven-resources-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>encoding</span><span class="token punctuation">></span></span>utf-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>encoding</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useDefaultDelimiters</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>useDefaultDelimiters</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span><span class="token punctuation">></span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resource</span><span class="token punctuation">></span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directory</span><span class="token punctuation">></span></span>src/main/resources<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>directory</span><span class="token punctuation">></span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filtering</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filtering</span><span class="token punctuation">></span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">></span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span><span class="token punctuation">></span></span>**/*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">></span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>includes</span><span class="token punctuation">></span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resource</span><span class="token punctuation">></span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resource</span><span class="token punctuation">></span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directory</span><span class="token punctuation">></span></span>src/main/java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>directory</span><span class="token punctuation">></span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">></span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span><span class="token punctuation">></span></span>**/*.xml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">></span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>includes</span><span class="token punctuation">></span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resource</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pluginManagement</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-2-spring-容器配置" tabindex="-1"><a class="header-anchor" href="#_2-2-2-spring-容器配置" aria-hidden="true">#</a> 2.2.2 Spring 容器配置</h4>
<p>在 config 包下定义 ApplicationConfig.java，它对应 web.xml 中 ContextLoaderListener 的配置</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span>basePackages <span class="token operator">=</span> <span class="token string">"com.itheima.security.springmvc"</span>
        <span class="token punctuation">,</span> excludeFilters <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token annotation punctuation">@ComponentScan.Filter</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">FilterType</span><span class="token punctuation">.</span><span class="token constant">ANNOTATION</span><span class="token punctuation">,</span> value <span class="token operator">=</span>
        <span class="token class-name">Controller</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ApplicationConfig</span> <span class="token punctuation">{</span>
    <span class="token comment">//在此配置除了Controller的其它bean，比如：数据库链接池、事务管理器、业务bean等。</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-3-servletcontext-配置" tabindex="-1"><a class="header-anchor" href="#_2-2-3-servletcontext-配置" aria-hidden="true">#</a> 2.2.3 servletContext 配置</h4>
<p>​ 本案例采用 Servlet3.0 无 web.xml 方式，的 config 包下定义 WebConfig.java，它对应 s 对应于 DispatcherServlet 配 置。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableWebMvc</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span>basePackages <span class="token operator">=</span> <span class="token string">"com.itheima.security.springmvc"</span>
        <span class="token punctuation">,</span>includeFilters <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token annotation punctuation">@ComponentScan.Filter</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">FilterType</span><span class="token punctuation">.</span><span class="token constant">ANNOTATION</span><span class="token punctuation">,</span>value <span class="token operator">=</span>
        <span class="token class-name">Controller</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebConfig</span> <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span>
    <span class="token comment">// 视图解析器</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">InternalResourceViewResolver</span> <span class="token function">viewResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">InternalResourceViewResolver</span> viewResolver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InternalResourceViewResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        viewResolver<span class="token punctuation">.</span><span class="token function">setPrefix</span><span class="token punctuation">(</span><span class="token string">"/WEB‐INF/views/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        viewResolver<span class="token punctuation">.</span><span class="token function">setSuffix</span><span class="token punctuation">(</span><span class="token string">".jsp"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> viewResolver<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-4-加载-spring-容器" tabindex="-1"><a class="header-anchor" href="#_2-2-4-加载-spring-容器" aria-hidden="true">#</a> 2.2.4 加载 Spring 容器</h4>
<p>在 init 包下定义 Spring 容器初始化类 SpringApplicationInitializer，此类实现 WebApplicationInitializer 接口， Spring 容器启动时加载 WebApplicationInitializer 接口的所有实现类。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringApplicationInitializer</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractAnnotationConfigDispatcherServletInitializer</span> <span class="token punctuation">{</span>

    <span class="token comment">// spring容器 相当于加载applicationContext.xml</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getRootConfigClasses</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token class-name">ApplicationConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token comment">//指定rootContext的配置类</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// servletContext，相当于加载SpringMVC.xml</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getServletConfigClasses</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token class-name">WebConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">//指定servletContext的配置类</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// url-mapping</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getServletMappings</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">"/"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SpringApplicationInitializer 相当于 web.xml，使用了 servlet3.0 开发则不需要再定义 web.xml， ApplicationConfig.class 对应以下配置的 application-context.xml，WebConfig.class 对应以下配置的 springmvc.xml，web.xml 的内容参考：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>web‐app</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>listener</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>listener‐class</span><span class="token punctuation">></span></span>org.springframework.web.context.ContextLoaderListener<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>listener‐class</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>listener</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>context‐param</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param‐name</span><span class="token punctuation">></span></span>contextConfigLocation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param‐name</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param‐value</span><span class="token punctuation">></span></span>/WEB‐INF/application‐context.xml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param‐value</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>context‐param</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet‐name</span><span class="token punctuation">></span></span>springmvc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet‐name</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet‐class</span><span class="token punctuation">></span></span>org.springframework.web.servlet.DispatcherServlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet‐class</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>init‐param</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param‐name</span><span class="token punctuation">></span></span>contextConfigLocation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param‐name</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param‐value</span><span class="token punctuation">></span></span>/WEB‐INF/spring‐mvc.xml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param‐value</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>init‐param</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>load‐on‐startup</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>load‐on‐startup</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet‐mapping</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet‐name</span><span class="token punctuation">></span></span>springmvc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet‐name</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url‐pattern</span><span class="token punctuation">></span></span>/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url‐pattern</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet‐mapping</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>web‐app</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-实现认证功能" tabindex="-1"><a class="header-anchor" href="#_2-3-实现认证功能" aria-hidden="true">#</a> 2.3.实现认证功能</h3>
<p>​ 在 webapp/WEB-INF/views 下定义认证页面 login.jsp，本案例只是测试认证流程，页面没有添加 css 样式，页面实 现可填入用户名，密码，触发登录将提交表单信息至/login，内容如下：</p>
<div class="language-jsp line-numbers-mode" data-ext="jsp"><pre v-pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; pageEncoding=&quot;UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;title&gt;用户登录&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;form action=&quot;login&quot; method=&quot;post&quot;&gt;
            用户名：&lt;input type=&quot;text&quot; name=&quot;username&quot;&gt;&lt;br&gt;
            密&amp;nbsp;&amp;nbsp;&amp;nbsp;码:
            &lt;input type=&quot;password&quot; name=&quot;password&quot;&gt;&lt;br&gt;
            &lt;input type=&quot;submit&quot; value=&quot;登录&quot;&gt;
        &lt;/form&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 WebConfig 中新增如下配置，将/直接导向 login.jsp 页面：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 将/直接导向login.jsp页面：</span>
<span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addViewControllers</span><span class="token punctuation">(</span><span class="token class-name">ViewControllerRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    registry<span class="token punctuation">.</span><span class="token function">addViewController</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setViewName</span><span class="token punctuation">(</span><span class="token string">"login"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>启动项目，访问/路径地址，进行测试</strong></p>
<p><img src="@source/notes/record/SpringSecurity+OAuth2.0认证授权/assets/image-20230626134828525.png" alt="image-20230626134828525"></p>
<h4 id="_2-3-2-认证接口" tabindex="-1"><a class="header-anchor" href="#_2-3-2-认证接口" aria-hidden="true">#</a> 2.3.2 认证接口</h4>
<p>用户进入认证页面，输入账号和密码，点击登录，请求/login 进行身份认证。</p>
<p>（1）定义认证接口，此接口用于对传来的用户名、密码校验，若成功则返回该用户的详细信息，否则抛出错误异常：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 认证服务
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">AuthenticationService</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 用户认证
     *
     * <span class="token keyword">@param</span> <span class="token parameter">authenticationRequest</span> 用户认证请求，账号和密码
     * <span class="token keyword">@return</span> 认证成功的用户信息
     */</span>
    <span class="token class-name">UserDto</span> <span class="token function">authentication</span><span class="token punctuation">(</span><span class="token class-name">AuthenticationRequest</span> authenticationRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>认证请求结构：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AuthenticationRequest</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 用户名
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 密码
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>认证成功后返回的用户详细信息，也就是当前登录用户的信息：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 当前登录用户信息
 */</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserDto</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> fullname<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> mobile<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）认证实现类，根据用户名查找用户信息，并校验密码，这里模拟了两个用户：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AuthenticationServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">AuthenticationService</span> <span class="token punctuation">{</span>
<span class="token doc-comment comment">/**
 * 校验用户的身份信息是否合法
 *
 * <span class="token keyword">@param</span> <span class="token parameter">authenticationRequest</span> 用户认证请求，账号和密码
 * <span class="token keyword">@return</span>
 */</span>
<span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token class-name">UserDto</span> <span class="token function">authentication</span><span class="token punctuation">(</span><span class="token class-name">AuthenticationRequest</span> authenticationRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 校验参数是否为空</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>authenticationRequest <span class="token operator">==</span> <span class="token keyword">null</span>
            <span class="token operator">||</span> <span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>authenticationRequest<span class="token punctuation">.</span><span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token operator">||</span> <span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>authenticationRequest<span class="token punctuation">.</span><span class="token function">getPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">"账号或密码为空"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 根据账号去查询数据库.这里测试程序采用模拟数据</span>
    <span class="token class-name">UserDto</span> userDto <span class="token operator">=</span> <span class="token function">getUserDto</span><span class="token punctuation">(</span>authenticationRequest<span class="token punctuation">.</span><span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 判断用户是否为空</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>userDto <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">"查询不到该用户"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 校验密码</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>authenticationRequest<span class="token punctuation">.</span><span class="token function">getPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>userDto<span class="token punctuation">.</span><span class="token function">getPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">"账号或密码错误"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 认证通过 返回用户的身份信息</span>
    <span class="token keyword">return</span> userDto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 根据账号查询用户信息</span>
<span class="token keyword">private</span> <span class="token class-name">UserDto</span> <span class="token function">getUserDto</span><span class="token punctuation">(</span><span class="token class-name">String</span> username<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> userMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//用户信息</span>
<span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">UserDto</span><span class="token punctuation">></span></span> userMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">{</span>
    userMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"zhangsan"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">UserDto</span><span class="token punctuation">(</span><span class="token string">"1010"</span><span class="token punctuation">,</span> <span class="token string">"zhangsan"</span><span class="token punctuation">,</span> <span class="token string">"123"</span><span class="token punctuation">,</span> <span class="token string">"张三"</span><span class="token punctuation">,</span> <span class="token string">"133443"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    userMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"lisi"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">UserDto</span><span class="token punctuation">(</span><span class="token string">"1011"</span><span class="token punctuation">,</span> <span class="token string">"lisi"</span><span class="token punctuation">,</span> <span class="token string">"456"</span><span class="token punctuation">,</span> <span class="token string">"李四"</span><span class="token punctuation">,</span> <span class="token string">"144553"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）登录 Controller，对/login 请求处理，它调用 AuthenticationService 完成认证并返回登录结果提示信息：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LoginController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">AuthenticationService</span> authenticationService<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 用户登录
     * <span class="token keyword">@param</span> <span class="token parameter">authenticationRequest</span> 登录请求
     * <span class="token keyword">@return</span>
     */</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"/login"</span><span class="token punctuation">,</span>produces <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"text/plain;charset=UTF‐8"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token comment">// produces：指定响应体返回类型和编码</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token class-name">AuthenticationRequest</span> authenticationRequest<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">UserDto</span> authentication <span class="token operator">=</span> authenticationService<span class="token punctuation">.</span><span class="token function">authentication</span><span class="token punctuation">(</span>authenticationRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> authentication<span class="token punctuation">.</span><span class="token function">getFullname</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" 登录成功"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（4）测试</p>
<p>启动项目，访问/路径地址，进行测试</p>
<p><img src="@source/notes/record/SpringSecurity+OAuth2.0认证授权/assets/image-20230626142432503.png" alt="image-20230626142432503"></p>
<p><strong>填入错误的用户信息，页面返回错误信息：</strong></p>
<p><img src="@source/notes/record/SpringSecurity+OAuth2.0认证授权/assets/image-20230626142454601.png" alt="image-20230626142454601"></p>
<p><strong>填入正确的用户信息，页面提示登录成功：</strong></p>
<p><img src="@source/notes/record/SpringSecurity+OAuth2.0认证授权/assets/image-20230626142517248.png" alt="image-20230626142517248"></p>
<p>​ 以上的测试全部符合预期，到目前为止最基础的认证功能已经完成，它仅仅实现了对用户身份凭证的校验，若某用 户认证成功，只能说明他是该系统的一个合法用户，仅此而已。</p>
<h3 id="_2-4-实现会话功能" tabindex="-1"><a class="header-anchor" href="#_2-4-实现会话功能" aria-hidden="true">#</a> 2.4.实现会话功能</h3>
<p>​ 会话是指用户登入系统后，系统会记住该用户的登录状态，他可以在系统连续操作直到退出系统的过程。</p>
<p>​ 认证的目的是对系统资源的保护，每次对资源的访问，系统必须得知道是谁在访问资源，才能对该请求进行合法性 拦截。因此，在认证成功后，一般会把认证成功的用户信息放入 Session 中，在后续的请求中，系统能够从 Session 中获取到当前用户，用这样的方式来实现会话机制。</p>
<p>（1）增加会话控制</p>
<p>​ 首先在 UserDto 中定义一个 SESSION_USER_KEY，作为 Session 中存放登录用户信息的 key。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">SESSION_USER_KEY</span> <span class="token operator">=</span> <span class="token string">"_user"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 然后修改 LoginController，认证成功后，将用户信息放入当前会话。并增加用户登出方法，登出时将 session 置为 失效。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 用户登录
 *
 * <span class="token keyword">@param</span> <span class="token parameter">authenticationRequest</span> 登录请求
 * <span class="token keyword">@return</span>
 */</span>

<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"/login"</span><span class="token punctuation">,</span> produces <span class="token operator">=</span> <span class="token string">"text/plain;charset=utf-8"</span><span class="token punctuation">)</span><span class="token comment">// produces：指定响应体返回类型和编码</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token class-name">AuthenticationRequest</span> authenticationRequest<span class="token punctuation">,</span> <span class="token class-name">HttpSession</span> session<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">UserDto</span> authentication <span class="token operator">=</span> authenticationService<span class="token punctuation">.</span><span class="token function">authentication</span><span class="token punctuation">(</span>authenticationRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 将用户信息存入session</span>
    session<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token class-name">UserDto</span><span class="token punctuation">.</span><span class="token constant">SESSION_USER_KEY</span><span class="token punctuation">,</span> authentication<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> authentication<span class="token punctuation">.</span><span class="token function">getFullname</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" 登录成功"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 退出
 *
 * <span class="token keyword">@param</span> <span class="token parameter">session</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"/logout"</span><span class="token punctuation">,</span> produces <span class="token operator">=</span> <span class="token string">"text/plain;charset=utf‐8"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">logout</span><span class="token punctuation">(</span><span class="token class-name">HttpSession</span> session<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// session 失效</span>
    session<span class="token punctuation">.</span><span class="token function">invalidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"退出成功"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）增加测试资源</p>
<p>修改 LoginController，增加测试资源 1，它从当前会话 session 中获取当前登录用户，并返回提示信息给前台</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 测试资源1
 * <span class="token keyword">@param</span> <span class="token parameter">session</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"/r/r1"</span><span class="token punctuation">,</span>produces <span class="token operator">=</span> <span class="token string">"text/plain;charset=UTF‐8"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">r1</span><span class="token punctuation">(</span><span class="token class-name">HttpSession</span> session<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">String</span> fullname <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name">Object</span> object <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token class-name">UserDto</span><span class="token punctuation">.</span><span class="token constant">SESSION_USER_KEY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>object <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        fullname <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">UserDto</span><span class="token punctuation">)</span>object<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFullname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        fullname <span class="token operator">=</span> <span class="token string">"匿名"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> fullname <span class="token operator">+</span> <span class="token string">" 访问资源1"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）测试</p>
<p>未登录情况下直接访问测试资源/r/r1：</p>
<p><img src="@source/notes/record/SpringSecurity+OAuth2.0认证授权/assets/image-20230626153953958.png" alt="image-20230626153953958"></p>
<p>成功登录的情况下访问测试资源/r/r1：</p>
<p><img src="@source/notes/record/SpringSecurity+OAuth2.0认证授权/assets/image-20230626154021880.png" alt="image-20230626154021880"></p>
<blockquote>
<p>测试结果说明，在用户登录成功时，该用户信息已被成功放入 session，并且后续请求可以正常从 session 中获取当 前登录用户信息，符合预期结果。</p>
</blockquote>
<h3 id="_2-5-实现授权功能" tabindex="-1"><a class="header-anchor" href="#_2-5-实现授权功能" aria-hidden="true">#</a> 2.5.实现授权功能</h3>
<p>​ 现在我们已经完成了用户身份凭证的校验以及登录的状态保持，并且我们也知道了如何获取当前登录用户(从 Session 中获取)的信息，接下来，用户访问系统需要经过授权，即需要完成如下功能：</p>
<ul>
<li>匿名用户（未登录用户）访问拦截：禁止匿名用户访问某些资源。</li>
<li>登录用户访问拦截：根据用户的权限决定是否能访问某些资源。</li>
</ul>
<p>（1）增加权限数据</p>
<p>​ 为了实现这样的功能，我们需要在 UserDto 里增加权限属性，用于表示该登录用户所拥有的权限，同时修改 UserDto 的构造方法。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserDto</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">SESSION_USER_KEY</span> <span class="token operator">=</span> <span class="token string">"_user"</span><span class="token punctuation">;</span>
    <span class="token comment">//用户身份信息</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> fullname<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> mobile<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 用户权限
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> authorities<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 并在 AuthenticationServiceImpl 中为模拟用户初始化权限，其中张三给了 p1 权限，李四给了 p2 权限。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//根据账号查询用户信息</span>
<span class="token keyword">private</span> <span class="token class-name">UserDto</span> <span class="token function">getUserDto</span><span class="token punctuation">(</span><span class="token class-name">String</span> userName<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> userMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>userName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//用户信息</span>
<span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">UserDto</span><span class="token punctuation">></span></span> userMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">{</span>
    <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> authorities1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    authorities1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"p1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//这个p1我们人为让它和/r/r1对应</span>
    <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> authorities2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    authorities2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"p2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//这个p2我们人为让它和/r/r2对应</span>
    userMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"zhangsan"</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">UserDto</span><span class="token punctuation">(</span><span class="token string">"1010"</span><span class="token punctuation">,</span><span class="token string">"zhangsan"</span><span class="token punctuation">,</span><span class="token string">"123"</span><span class="token punctuation">,</span><span class="token string">"张三"</span><span class="token punctuation">,</span><span class="token string">"133443"</span><span class="token punctuation">,</span>authorities1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    userMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"lisi"</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">UserDto</span><span class="token punctuation">(</span><span class="token string">"1011"</span><span class="token punctuation">,</span><span class="token string">"lisi"</span><span class="token punctuation">,</span><span class="token string">"456"</span><span class="token punctuation">,</span><span class="token string">"李四"</span><span class="token punctuation">,</span><span class="token string">"144553"</span><span class="token punctuation">,</span>authorities2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）增加测试资源</p>
<p>​ 我们想实现针对不同的用户能访问不同的资源，前提是得有多个资源，因此在 LoginController 中增加测试资源 2。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"/r/r2"</span><span class="token punctuation">,</span>produces <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"text/plain;charset=UTF-8"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">r2</span><span class="token punctuation">(</span><span class="token class-name">HttpSession</span> session<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">String</span> fullname <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name">Object</span> userObj <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token class-name">UserDto</span><span class="token punctuation">.</span><span class="token constant">SESSION_USER_KEY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>userObj <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        fullname <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">UserDto</span><span class="token punctuation">)</span>userObj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFullname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        fullname <span class="token operator">=</span> <span class="token string">"匿名"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> fullname <span class="token operator">+</span> <span class="token string">" 访问资源2"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）实现授权拦截器</p>
<p>​ 在 interceptor 包下定义 SimpleAuthenticationInterceptor 拦截器，实现授权拦截：</p>
<p>​ 1、校验用户是否登录</p>
<p>​ 2、校验用户是否拥有操作权限</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SimpleAuthenticationInterceptor</span> <span class="token keyword">implements</span> <span class="token class-name">HandlerInterceptor</span> <span class="token punctuation">{</span>

<span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">preHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">//在这个方法中校验用户请求的url是否在用户的权限范围内</span>
    <span class="token comment">//取出用户身份信息</span>
    <span class="token class-name">Object</span> object <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token class-name">UserDto</span><span class="token punctuation">.</span><span class="token constant">SESSION_USER_KEY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>object <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//没有认证，提示登录</span>
        <span class="token function">writeContent</span><span class="token punctuation">(</span>response<span class="token punctuation">,</span><span class="token string">"请登录"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">UserDto</span> userDto <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">UserDto</span><span class="token punctuation">)</span> object<span class="token punctuation">;</span>
    <span class="token comment">//请求的url</span>
    <span class="token class-name">String</span> requestURI <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getRequestURI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> userDto<span class="token punctuation">.</span><span class="token function">getAuthorities</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">"p1"</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> requestURI<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">"/r/r1"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> userDto<span class="token punctuation">.</span><span class="token function">getAuthorities</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">"p2"</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> requestURI<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">"/r/r2"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">writeContent</span><span class="token punctuation">(</span>response<span class="token punctuation">,</span><span class="token string">"没有权限，拒绝访问"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//响应信息给客户端</span>
<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">writeContent</span><span class="token punctuation">(</span><span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    response<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">"text/html;charset=utf-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">PrintWriter</span> writer <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    writer<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    writer<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p>
<p>​ 在 WebConfig 中配置拦截器，匹配/r/**的资源为受保护的系统资源，访问该资源的请求进入 SimpleAuthenticationInterceptor 拦截器。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>
<span class="token class-name">SimpleAuthenticationInterceptor</span> simpleAuthenticationInterceptor<span class="token punctuation">;</span>

<span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addInterceptors</span><span class="token punctuation">(</span><span class="token class-name">InterceptorRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    registry<span class="token punctuation">.</span><span class="token function">addInterceptor</span><span class="token punctuation">(</span>simpleAuthenticationInterceptor<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addPathPatterns</span><span class="token punctuation">(</span><span class="token string">"/r/**"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（4）测试</p>
<p>未登录情况下，/r/r1 与/r/r2 均提示 “请先登录”。</p>
<p>张三登录情况下，由于张三有 p1 权限，因此可以访问/r/r1，张三没有 p2 权限，访问/r/r2 时提示 “权限不足 “。</p>
<p>李四登录情况下，由于李四有 p2 权限，因此可以访问/r/r2，李四没有 p1 权限，访问/r/r1 时提示 “权限不足 “。 测试结果全部符合预期结果。</p>
<h3 id="_2-6-小结" tabindex="-1"><a class="header-anchor" href="#_2-6-小结" aria-hidden="true">#</a> 2.6.小结</h3>
<p>基于 Session 的认证方式是一种常见的认证方式，至今还有非常多的系统在使用。我们在此小节使用 Spring mvc 技 术对它进行简单实现，旨在让大家更清晰实在的了解用户认证、授权以及会话的功能意义及实现套路，也就是它们 分别干了哪些事儿？大概需要怎么做？</p>
<p>而在正式生产项目中，我们往往会考虑使用第三方安全框架（如 spring security，shiro 等安全框架）来实现认证 授权功能，因为这样做能一定程度提高生产力，提高软件标准化程度，另外往往这些框架的可扩展性考虑的非常全 面。但是缺点也非常明显，这些通用化组件为了提高支持范围会增加很多可能我们不需要的功能，结构上也会比较 抽象，如果我们不够了解它，一旦出现问题，将会很难定位。</p>
</div></template>


