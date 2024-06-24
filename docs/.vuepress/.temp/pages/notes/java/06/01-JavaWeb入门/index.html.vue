<template><div><h1 id="_01-javaweb-入门" tabindex="-1"><a class="header-anchor" href="#_01-javaweb-入门" aria-hidden="true">#</a> 01 - JavaWeb 入门 ⛲</h1>
<nav class="table-of-contents"><ul><li><router-link to="#web-应用程序">Web 应用程序</router-link><ul><li><router-link to="#什么是-web-程序">什么是 Web 程序</router-link></li><li><router-link to="#javaweb-概述">JavaWeb 概述</router-link></li><li><router-link to="#javaweb-开发环境介绍">JavaWeb 开发环境介绍</router-link></li></ul></li><li><router-link to="#web-服务器之-tomcat">Web 服务器之 Tomcat</router-link><ul><li><router-link to="#http-服务器和-web-服务器">Http 服务器和 Web 服务器</router-link></li><li><router-link to="#tomcat-概述">Tomcat 概述</router-link></li><li><router-link to="#下载与安装-配置">下载与安装(配置)</router-link></li><li><router-link to="#tomcat-目录结构">Tomcat 目录结构</router-link></li><li><router-link to="#启动与停止">启动与停止</router-link></li><li><router-link to="#项目部署">项目部署</router-link></li><li><router-link to="#虚拟访问路径配置">虚拟访问路径配置</router-link></li><li><router-link to="#端口号修改">端口号修改</router-link></li><li><router-link to="#将-tomcat-服务打入系统服务中-用于生产环境">将 tomcat 服务打入系统服务中（用于生产环境）</router-link></li><li><router-link to="#在-ide-中集成-tomcat">在 IDE 中集成 Tomcat</router-link></li><li><router-link to="#第一个-javaweb-项目">第一个 JavaWeb 项目</router-link></li></ul></li></ul></nav>
<h2 id="web-应用程序" tabindex="-1"><a class="header-anchor" href="#web-应用程序" aria-hidden="true">#</a> Web 应用程序</h2>
<h3 id="什么是-web-程序" tabindex="-1"><a class="header-anchor" href="#什么是-web-程序" aria-hidden="true">#</a> 什么是 Web 程序</h3>
<p>​ 基于浏览器+服务端模式运行的应用程序（即 BS 结构）；客户端只需要存在浏览器，或者支持浏览器的设备，即可在任意地点，任意的时间，由任何人访问服务端，软件的更新升级只需要更新服务端即可；主流的 web 应用程序：淘宝，12306，京东，csdn...</p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611018813158.png" alt="1611018813158"></p>
<h3 id="javaweb-概述" tabindex="-1"><a class="header-anchor" href="#javaweb-概述" aria-hidden="true">#</a> JavaWeb 概述</h3>
<p>​ 以 Java 语言为基础，在 web 服务器中创建的能够进行数据库访问，处理前端（终端）提交的数据能力的应用程序称之为 Javaweb 程序。</p>
<p><strong>javaweb 学习的前置知识：</strong></p>
<ul>
<li>java 基础语法</li>
<li>面向对象</li>
<li>数据库与数据库编程</li>
<li>web 前端</li>
<li>java 高级（IO，线程，网络）</li>
</ul>
<h3 id="javaweb-开发环境介绍" tabindex="-1"><a class="header-anchor" href="#javaweb-开发环境介绍" aria-hidden="true">#</a> JavaWeb 开发环境介绍</h3>
<p>javaweb 应用是一项综合性较强的技术体系，程序的运行需要一系列相关软件的支持，javaweb 开发必备环境:</p>
<ul>
<li>安装 JDK（jdk8）</li>
<li>Eclipse(jee)/Idea(旗舰版)</li>
<li>mysql 数据库</li>
<li><strong>web 容器(web 服务器)</strong></li>
</ul>
<h2 id="web-服务器之-tomcat" tabindex="-1"><a class="header-anchor" href="#web-服务器之-tomcat" aria-hidden="true">#</a> Web 服务器之 Tomcat</h2>
<h3 id="http-服务器和-web-服务器" tabindex="-1"><a class="header-anchor" href="#http-服务器和-web-服务器" aria-hidden="true">#</a> Http 服务器和 Web 服务器</h3>
<h4 id="http-服务器-静态资源" tabindex="-1"><a class="header-anchor" href="#http-服务器-静态资源" aria-hidden="true">#</a> Http 服务器（静态资源）</h4>
<p>http 服务器一般只提供静态资源访问能力（例如 CDN），不提供对于程序的解析，转换等处理能力，典型的 http 服务器：</p>
<ul>
<li>Nginx</li>
<li>Apache</li>
</ul>
<blockquote>
<p><strong>lamp</strong>=linux+apache+mysql+php</p>
</blockquote>
<h4 id="web-服务器-动态资源" tabindex="-1"><a class="header-anchor" href="#web-服务器-动态资源" aria-hidden="true">#</a> Web 服务器（动态资源）</h4>
<p>Web 容器也称之为 web 服务器，提供了对于 web 应用程序(JavaWeb)的运行环境，内部能够对一些特殊的网页模板(JSP)进行解析，编译等等操作;即提供了动态资源的访问能力，典型的 Web 服务器:</p>
<ul>
<li><strong>Apache Tomcat</strong></li>
<li>JBOSS</li>
<li><strong>WebLogic</strong></li>
<li>Jetty</li>
</ul>
<h3 id="tomcat-概述" tabindex="-1"><a class="header-anchor" href="#tomcat-概述" aria-hidden="true">#</a> Tomcat 概述</h3>
<p>​ Apache Tomcat 是阿帕奇软件基金会（开源组织）下的一个子项目，由 java 编写(所以必须要有 Java 环境)，提供了 javaweb 应用程序访问的能力，内部提供了对于 Servlet,JSP，WebSocket 的支持，Tomcat 是一个<strong>开源免费</strong>的 web 容器。</p>
<h3 id="下载与安装-配置" tabindex="-1"><a class="header-anchor" href="#下载与安装-配置" aria-hidden="true">#</a> 下载与安装(配置)</h3>
<ul>
<li>
<p>下载地址（tomcat9）</p>
<p>https://tomcat.apache.org/download-90.cgi</p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611020360931.png" alt="1611020360931"></p>
</li>
<li>
<p>解压缩之后：<img src="@source/notes/java/06/01-JavaWeb入门/assets/1611020496416.png" alt="1611020496416"></p>
</li>
</ul>
<h3 id="tomcat-目录结构" tabindex="-1"><a class="header-anchor" href="#tomcat-目录结构" aria-hidden="true">#</a> Tomcat 目录结构</h3>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611020719228.png" alt="1611020719228"></p>
<ul>
<li><strong>bin</strong>：tomcat 的启动、关闭文件和必须的依赖</li>
<li><strong>conf</strong>：tomcat 的相关配置文件存储
<ul>
<li>配置登录账户</li>
<li>端口号(server.xml)</li>
<li>虚拟路径(server.xml)</li>
</ul>
</li>
<li><strong>lib</strong>：web 程序运行的依赖（jar 包）
<ul>
<li>jsp-api</li>
<li>servlet-api</li>
<li>websocket-api</li>
</ul>
</li>
<li><strong>logs</strong>：存储 tomcat 运行日志</li>
<li><strong>temp</strong>：临时文件存储目录</li>
<li><strong>webapps</strong>：web 项目的主发布目录</li>
<li><strong>work</strong>：tomcat 服务器工作目录，对于 jsp 文件编译之后产生的 java 文件和字节码文件存储目录</li>
</ul>
<h3 id="启动与停止" tabindex="-1"><a class="header-anchor" href="#启动与停止" aria-hidden="true">#</a> 启动与停止</h3>
<ul>
<li>
<p>安装配置 Java 运行环境</p>
<p>因为 Tomcat 是基于 Java 开发的，因此 Tomcat 的运行离不开 java 的环境，必须要在 tomcat 的运行主机中安装 Java 运行环境(JRE)，并且需要配置<code v-pre>JAVA_HOME</code></p>
</li>
</ul>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611022071279.png" alt="1611022071279"></p>
<ul>
<li>
<p>启动 Tomcat</p>
<p>tomcat 的启动非常简单，只需要找到 tomcat 所在目录的 bin 目录，双击启动<code v-pre>startup.bat</code>文件即可</p>
</li>
</ul>
<h3 id="项目部署" tabindex="-1"><a class="header-anchor" href="#项目部署" aria-hidden="true">#</a> 项目部署</h3>
<p>将项目部署到 Tomcat 服务器只需要将项目的归档文件(war 文件)或者直接将项目的目录复制到<code v-pre>webapps</code>下即可启动并访问，例如:</p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611024513956.png" alt="1611024513956"></p>
<p>以上向 webapps 目录下存储了一个静态 web 项目，<strong>首页是</strong><code v-pre>index.html</code></p>
<p>然后只需要在浏览器的地址栏中输入：<code v-pre>http://localhost:8080/easyblog</code> 即可打开首页：</p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611024653952.png" alt="1611024653952"></p>
<h3 id="虚拟访问路径配置" tabindex="-1"><a class="header-anchor" href="#虚拟访问路径配置" aria-hidden="true">#</a> 虚拟访问路径配置</h3>
<p>通常可以将项目直接部署到 webapps 目录下提供远程访问的可能性，同时也可以使用其他方式实现远程访问的能力，例如配置<strong>虚拟路径</strong></p>
<p>虚拟路径配置：即将本地的指定资源(文件，网页，视频，图片等)通过服务器内部转发的形式对外界提供访问</p>
<ol>
<li>
<p>找到 tomcat 服务器的 conf 目录</p>
</li>
<li>
<p>打开<code v-pre>server.xml</code>文件</p>
</li>
<li>
<p>在<code v-pre>&lt;Host&gt;</code>标签结束之前配置如下信息</p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611025176330.png" alt="1611025176330"></p>
<blockquote>
<p><code v-pre>&lt;Context /&gt;</code> 表示配置一个虚拟的访问路径</p>
<p>docBase：设置对外提供访问的资源目录所在的绝对路径(到磁盘根的路径)</p>
<p>path：虚拟的访问路径，路径名可以任意编写，如果配置为&quot;/&quot;则为根目录</p>
<p>debug：调试级别，从 0~9,级别越高，输出信息越详细，缺省 0</p>
<p>注意事项:</p>
<p>docBase 指向的目录路径必须是存在的目录，否则启动报错</p>
<p>path 路径不允许重复，否则报错</p>
</blockquote>
</li>
<li>
<p>配置完成，重启服务器，此时访问<code v-pre>easyblog</code>资源这只需要在浏览器的地址栏中输入:<code v-pre>http://localhost:8080</code>即可访问该项目</p>
</li>
</ol>
<h3 id="端口号修改" tabindex="-1"><a class="header-anchor" href="#端口号修改" aria-hidden="true">#</a> 端口号修改</h3>
<p>tomcat 服务器的端口默认为<code v-pre>8080</code>，但是可能会由于计算机中安装一些应用占据该端口，会导致 tomcat 服务器无法绑定该端口;因此，我们需要了解如何修改 tomcat 的端口号</p>
<ul>
<li>
<p>修改 tomcat 的端口号需要找到<code v-pre>conf/server.xml</code>文件</p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611026253062.png" alt="1611026253062"></p>
</li>
<li>
<p>修改端口号为：80</p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611026313777.png" alt="1611026313777"></p>
</li>
<li>
<p>重启 tomcat</p>
</li>
<li>
<p>访问项目时无需再添加端口号(Http 协议默认端口是 80)</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>http://localhost
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<blockquote>
<p>查看计算机中所有应用程序的端口占用情况:</p>
<p><code v-pre>cmd</code>-&gt;<code v-pre>netstat -ano</code></p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611026032664.png" alt="1611026032664"></p>
</blockquote>
<h3 id="将-tomcat-服务打入系统服务中-用于生产环境" tabindex="-1"><a class="header-anchor" href="#将-tomcat-服务打入系统服务中-用于生产环境" aria-hidden="true">#</a> 将 tomcat 服务打入系统服务中（用于生产环境）</h3>
<p>每一次需要启动 tomcat 服务器都必须找到 bin 目录，然后手动启动<code v-pre>startup.bat</code>；这样十分麻烦，而且对于普通用户来说操作难度较大，因此，可以将 tomcat 服务打入系统服务中，并且可以设置为开机自动启动。</p>
<h4 id="安装为系统服务" tabindex="-1"><a class="header-anchor" href="#安装为系统服务" aria-hidden="true">#</a> 安装为系统服务</h4>
<ul>
<li>
<p>找到 tomcat 的 bin 目录</p>
</li>
<li>
<p>以管理员身份在 bin 目录中打开 cmd（或者 shift+鼠标右键-&gt;在此处打开 PowerShell）</p>
<p>cmd:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>service.bat <span class="token function">install</span> tomcat9.0.37
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>PowerShell（linux）:</p>
<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre v-pre class="language-powershell"><code><span class="token punctuation">.</span><span class="token operator">/</span>service<span class="token punctuation">.</span>bat install tomcat9<span class="token punctuation">.</span>0<span class="token punctuation">.</span>37
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>将服务安装到系统服务中，服务名为:tomcat9（可缺省）</p>
</blockquote>
</li>
<li>
<p>效果</p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611028944749.png" alt="1611028944749"></p>
</li>
<li>
<p>可以右键属性，设置开机自动启动等操作</p>
</li>
</ul>
<h4 id="卸载服务" tabindex="-1"><a class="header-anchor" href="#卸载服务" aria-hidden="true">#</a> 卸载服务</h4>
<ul>
<li>
<p>进入到 tomcat 的 bin 目录</p>
</li>
<li>
<p>以相同的方式打开 cmd 或者 powershell</p>
</li>
<li>
<p>输入指令：</p>
<p>cmd:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>service.bat uninstall tomcat9.0.37
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>powershell:</p>
<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre v-pre class="language-powershell"><code><span class="token punctuation">.</span><span class="token operator">/</span>service<span class="token punctuation">.</span>bat uninstall tomcat9<span class="token punctuation">.</span>0<span class="token punctuation">.</span>37
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h3 id="在-ide-中集成-tomcat" tabindex="-1"><a class="header-anchor" href="#在-ide-中集成-tomcat" aria-hidden="true">#</a> 在 IDE 中集成 Tomcat</h3>
<p>由于我们在开发环境下经常涉及到代码的更改以及调试，不可能每做一点修改都需要将项目拷贝到 tomcat 的 webapps 目录下重启服务器，这样太过于繁琐，因此，对于 tomcat 的使用可以集成到开发工具中，下面提供两个环境的集成方式，分为 Idea 和 Eclipse 中集成：</p>
<h4 id="基于-idea-工具集成" tabindex="-1"><a class="header-anchor" href="#基于-idea-工具集成" aria-hidden="true">#</a> 基于 Idea 工具集成</h4>
<ol>
<li>
<p>配置运行方式</p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611037983183.png" alt="1611037983183"></p>
</li>
<li>
<p>添加 tomcat 服务器</p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611038031542.png" alt="1611038031542"></p>
</li>
<li>
<p>配置服务器基本信息</p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611038145288.png" alt="1611038145288"></p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611038186128.png" alt="1611038186128"></p>
</li>
</ol>
<h4 id="基于-eclipse-集成" tabindex="-1"><a class="header-anchor" href="#基于-eclipse-集成" aria-hidden="true">#</a> 基于 Eclipse 集成</h4>
<ol>
<li>打开服务器配置视图</li>
</ol>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611038257514.png" alt="1611038257514"></p>
<ol start="2">
<li>
<p>配置服务器</p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611038302794.png" alt="1611038302794"></p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611038341737.png" alt="1611038341737"></p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611038395021.png" alt="1611038395021"></p>
</li>
</ol>
<h3 id="第一个-javaweb-项目" tabindex="-1"><a class="header-anchor" href="#第一个-javaweb-项目" aria-hidden="true">#</a> 第一个 JavaWeb 项目</h3>
<h4 id="idea-中-web-项目创建" tabindex="-1"><a class="header-anchor" href="#idea-中-web-项目创建" aria-hidden="true">#</a> Idea 中 Web 项目创建</h4>
<ol>
<li>
<p>创建 project/module</p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611074928272.png" alt="1611074928272"></p>
<blockquote>
<p>实际开发环境下，一个项目即一个 Project，应选择创建 Project；教学环境下默认为一个 project 为工作空间，将 Module 作为项目看待</p>
</blockquote>
</li>
<li>
<p>设置 web application</p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611075147496.png" alt="1611075147496"></p>
<p>对于上述步骤还有一种创建方式：</p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611075268812.png" alt="1611075268812"></p>
<blockquote>
<p>注意：</p>
<p>新版本（idea2020.X）的 idea 中创建 web 项目的选项已经被移除，可以直接选择创建普通 java 项目/模块的方式创建，然后选择模块添加相关的 web 框架支持：</p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611075440787.png" alt="1611075440787"></p>
<p>然后在弹出的对话框中选择 web application 即可</p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611075495596.png" alt="1611075495596"></p>
</blockquote>
</li>
<li>
<p>创建完成后可看到如下目录结构的 web 项目:</p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611075684459.png" alt="1611075684459"></p>
</li>
<li>
<p>部署项目到服务器中</p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611076516701.png" alt="1611076516701"></p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611076577702.png" alt="1611076577702"></p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611076610382.png" alt="1611076610382"></p>
</li>
<li>
<p>启动服务器</p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611076692134.png" alt="1611076692134"></p>
</li>
</ol>
<h4 id="eclipse-web-项目创建" tabindex="-1"><a class="header-anchor" href="#eclipse-web-项目创建" aria-hidden="true">#</a> Eclipse Web 项目创建</h4>
<ol>
<li>
<p>File-&gt;New-&gt;Dynamic Web Project</p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611075894202.png" alt="1611075894202"></p>
</li>
<li>
<p>填写选择项目相关信息</p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611075991047.png" alt="1611075991047"></p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611076056236.png" alt="1611076056236"></p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611076091539.png" alt="1611076091539"></p>
</li>
<li>
<p>目录结构</p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611076230020.png" alt="1611076230020"></p>
</li>
<li>
<p>部署项目到服务器</p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611076283681.png" alt="1611076283681"></p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611076333460.png" alt="1611076333460"></p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611076368351.png" alt="1611076368351"></p>
</li>
<li>
<p>启动服务器</p>
<p><img src="@source/notes/java/06/01-JavaWeb入门/assets/1611076419475.png" alt="1611076419475"></p>
</li>
</ol>
</div></template>


