<template><div><h1 id="day01-微服务保护" tabindex="-1"><a class="header-anchor" href="#day01-微服务保护" aria-hidden="true">#</a> day01-微服务保护</h1>
<nav class="table-of-contents"><ul><li><router-link to="#_1-1-雪崩问题及解决方案">1.1.雪崩问题及解决方案</router-link><ul><li><router-link to="#_1-1-1-雪崩问题">1.1.1.雪崩问题</router-link></li><li><router-link to="#_1-1-2-超时处理">1.1.2.超时处理</router-link></li><li><router-link to="#_1-1-3-仓壁模式">1.1.3.仓壁模式</router-link></li><li><router-link to="#_1-1-4-断路器">1.1.4.断路器</router-link></li><li><router-link to="#_1-1-5-限流">1.1.5.限流</router-link></li><li><router-link to="#_1-1-6-总结">1.1.6.总结</router-link></li></ul></li><li><router-link to="#_1-2-服务保护技术对比">1.2.服务保护技术对比</router-link></li><li><router-link to="#_1-3-sentinel-介绍和安装">1.3.Sentinel 介绍和安装</router-link><ul><li><router-link to="#_1-3-1-初识-sentinel">1.3.1.初识 Sentinel</router-link></li><li><router-link to="#_1-3-2-安装-sentinel">1.3.2.安装 Sentinel</router-link></li></ul></li><li><router-link to="#_1-4-微服务整合-sentinel">1.4.微服务整合 Sentinel</router-link></li><li><router-link to="#理解-qps-和线程数的区别">理解 QPS 和线程数的区别？</router-link></li><li><router-link to="#_2-1-簇点链路">2.1.簇点链路</router-link></li><li><router-link to="#_2-1-快速入门">2.1.快速入门</router-link><ul><li><router-link to="#_2-1-1-示例">2.1.1.示例</router-link></li><li><router-link to="#_2-1-2-练习">2.1.2.练习：</router-link></li></ul></li><li><router-link to="#_2-2-流控模式">2.2.流控模式</router-link><ul><li><router-link to="#_2-2-1-关联模式">2.2.1.关联模式</router-link></li><li><router-link to="#_2-2-2-链路模式">2.2.2.链路模式</router-link></li><li><router-link to="#_2-2-3-总结">2.2.3.总结</router-link></li></ul></li><li><router-link to="#_2-3-流控效果">2.3.流控效果</router-link><ul><li><router-link to="#_2-3-1-warm-up">2.3.1.warm up</router-link></li><li><router-link to="#_2-3-2-排队等待">2.3.2.排队等待</router-link></li><li><router-link to="#_2-3-3-总结">2.3.3.总结</router-link></li></ul></li><li><router-link to="#_2-4-热点参数限流">2.4.热点参数限流</router-link><ul><li><router-link to="#_2-4-1-全局参数限流">2.4.1.全局参数限流</router-link></li><li><router-link to="#_2-4-2-热点参数限流">2.4.2.热点参数限流</router-link></li><li><router-link to="#_2-4-4-案例">2.4.4.案例</router-link></li></ul></li><li><router-link to="#_3-1-feignclient-整合-sentinel">3.1.FeignClient 整合 Sentinel</router-link><ul><li><router-link to="#_3-1-1-修改配置-开启-sentinel-功能">3.1.1.修改配置，开启 sentinel 功能</router-link></li><li><router-link to="#_3-1-2-编写失败降级逻辑">3.1.2.编写失败降级逻辑</router-link></li><li><router-link to="#_3-1-3-总结">3.1.3.总结</router-link></li></ul></li><li><router-link to="#_3-2-线程隔离-舱壁模式">3.2.线程隔离（舱壁模式）</router-link><ul><li><router-link to="#_3-2-1-线程隔离的实现方式">3.2.1.线程隔离的实现方式</router-link></li><li><router-link to="#_3-2-2-sentinel-的线程隔离">3.2.2.sentinel 的线程隔离</router-link></li><li><router-link to="#_3-2-3-总结">3.2.3.总结</router-link></li></ul></li><li><router-link to="#_3-3-熔断降级">3.3.熔断降级</router-link><ul><li><router-link to="#_3-3-1-慢调用">3.3.1.慢调用</router-link></li><li><router-link to="#_3-3-2-异常比例、异常数">3.3.2.异常比例、异常数</router-link></li></ul></li><li><router-link to="#_4-1-授权规则">4.1.授权规则</router-link><ul><li><router-link to="#_4-1-1-基本规则">4.1.1.基本规则</router-link></li><li><router-link to="#_4-1-2-如何获取-origin">4.1.2.如何获取 origin</router-link></li><li><router-link to="#_4-1-3-给网关添加请求头">4.1.3.给网关添加请求头</router-link></li><li><router-link to="#_4-1-4-配置授权规则">4.1.4.配置授权规则</router-link></li></ul></li><li><router-link to="#_4-2-自定义异常结果">4.2.自定义异常结果</router-link><ul><li><router-link to="#_4-2-1-异常类型">4.2.1.异常类型</router-link></li><li><router-link to="#_4-2-2-自定义异常处理">4.2.2.自定义异常处理</router-link></li></ul></li><li><router-link to="#_5-1-规则管理模式">5.1.规则管理模式</router-link><ul><li><router-link to="#_5-1-1-pull-模式">5.1.1.pull 模式</router-link></li><li><router-link to="#_5-1-2-push-模式">5.1.2.push 模式</router-link></li></ul></li><li><router-link to="#_5-2-实现-push-模式">5.2.实现 push 模式</router-link></li></ul></nav>
<h1 id="_1-初识-sentinel" tabindex="-1"><a class="header-anchor" href="#_1-初识-sentinel" aria-hidden="true">#</a> 1.初识 Sentinel</h1>
<h2 id="_1-1-雪崩问题及解决方案" tabindex="-1"><a class="header-anchor" href="#_1-1-雪崩问题及解决方案" aria-hidden="true">#</a> 1.1.雪崩问题及解决方案</h2>
<h3 id="_1-1-1-雪崩问题" tabindex="-1"><a class="header-anchor" href="#_1-1-1-雪崩问题" aria-hidden="true">#</a> 1.1.1.雪崩问题</h3>
<p>微服务中，服务间调用关系错综复杂，一个微服务往往依赖于多个其它微服务。</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/1533829099748.png" alt="1533829099748"></p>
<p>如图，如果服务提供者 I 发生了故障，当前的应用的部分业务因为依赖于服务 I，因此也会被阻塞。此时，其它不依赖于服务 I 的业务似乎不受影响。</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/1533829198240.png" alt="1533829198240"></p>
<p>但是，依赖服务 I 的业务请求被阻塞，用户不会得到响应，则 tomcat 的这个线程不会释放，于是越来越多的用户请求到来，越来越多的线程会阻塞：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/1533829307389.png" alt="1533829307389"></p>
<p>服务器支持的线程和并发数有限，请求一直阻塞，会导致服务器资源耗尽，从而导致所有其它服务都不可用，那么当前服务也就不可用了。</p>
<p>那么，依赖于当前服务的其它服务随着时间的推移，最终也都会变的不可用，形成级联失败，雪崩就发生了：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210715172710340.png" alt="image-20210715172710340"></p>
<h3 id="_1-1-2-超时处理" tabindex="-1"><a class="header-anchor" href="#_1-1-2-超时处理" aria-hidden="true">#</a> 1.1.2.超时处理</h3>
<p>解决雪崩问题的常见方式有四种：</p>
<p>•超时处理：设定超时时间，请求超过一定时间没有响应就返回错误信息，不会无休止等待</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210715172820438.png" alt="image-20210715172820438"></p>
<h3 id="_1-1-3-仓壁模式" tabindex="-1"><a class="header-anchor" href="#_1-1-3-仓壁模式" aria-hidden="true">#</a> 1.1.3.仓壁模式</h3>
<p>方案 2：仓壁模式</p>
<p>仓壁模式来源于船舱的设计：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210715172946352.png" alt="image-20210715172946352"></p>
<p>船舱都会被隔板分离为多个独立空间，当船体破损时，只会导致部分空间进入，将故障控制在一定范围内，避免整个船体都被淹没。</p>
<p>于此类似，我们可以限定每个业务能使用的线程数，避免耗尽整个 tomcat 的资源，因此也叫线程隔离。</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210715173215243.png" alt="image-20210715173215243"></p>
<h3 id="_1-1-4-断路器" tabindex="-1"><a class="header-anchor" href="#_1-1-4-断路器" aria-hidden="true">#</a> 1.1.4.断路器</h3>
<p>断路器模式：由<strong>断路器</strong>统计业务执行的异常比例，如果超出阈值则会<strong>熔断</strong>该业务，拦截访问该业务的一切请求。</p>
<p>断路器会统计访问某个服务的请求数量，异常比例：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210715173327075.png" alt="image-20210715173327075"></p>
<p>当发现访问服务 D 的请求异常比例过高时，认为服务 D 有导致雪崩的风险，会拦截访问服务 D 的一切请求，形成熔断：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210715173428073.png" alt="image-20210715173428073"></p>
<h3 id="_1-1-5-限流" tabindex="-1"><a class="header-anchor" href="#_1-1-5-限流" aria-hidden="true">#</a> 1.1.5.限流</h3>
<p><strong>流量控制</strong>：限制业务访问的 QPS，避免服务因流量的突增而故障。</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210715173555158.png" alt="image-20210715173555158"></p>
<h3 id="_1-1-6-总结" tabindex="-1"><a class="header-anchor" href="#_1-1-6-总结" aria-hidden="true">#</a> 1.1.6.总结</h3>
<p>什么是雪崩问题？</p>
<ul>
<li>微服务之间相互调用，因为调用链中的一个服务故障，引起整个链路都无法访问的情况。</li>
</ul>
<p>可以认为：</p>
<p><strong>限流</strong>是对服务的保护，避免因瞬间高并发流量而导致服务故障，进而避免雪崩。是一种<strong>预防</strong>措施。</p>
<p><strong>超时处理、线程隔离、降级熔断</strong>是在部分服务故障时，将故障控制在一定范围，避免雪崩。是一种<strong>补救</strong>措施。</p>
<h2 id="_1-2-服务保护技术对比" tabindex="-1"><a class="header-anchor" href="#_1-2-服务保护技术对比" aria-hidden="true">#</a> 1.2.服务保护技术对比</h2>
<p>在 SpringCloud 当中支持多种服务保护技术：</p>
<ul>
<li><a href="https://github.com/Netflix/Hystrix" target="_blank" rel="noopener noreferrer">Netfix Hystrix<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/alibaba/Sentinel" target="_blank" rel="noopener noreferrer">Sentinel<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/resilience4j/resilience4j" target="_blank" rel="noopener noreferrer">Resilience4J<ExternalLinkIcon/></a></li>
</ul>
<p>早期比较流行的是 Hystrix 框架，但目前国内实用最广泛的还是阿里巴巴的 Sentinel 框架，这里我们做下对比：</p>
<table>
<thead>
<tr>
<th></th>
<th><strong>Sentinel</strong></th>
<th><strong>Hystrix</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>隔离策略</td>
<td>信号量隔离</td>
<td>线程池隔离/信号量隔离</td>
</tr>
<tr>
<td>熔断降级策略</td>
<td>基于慢调用比例或异常比例</td>
<td>基于失败比率</td>
</tr>
<tr>
<td>实时指标实现</td>
<td>滑动窗口</td>
<td>滑动窗口（基于 RxJava）</td>
</tr>
<tr>
<td>规则配置</td>
<td>支持多种数据源</td>
<td>支持多种数据源</td>
</tr>
<tr>
<td>扩展性</td>
<td>多个扩展点</td>
<td>插件的形式</td>
</tr>
<tr>
<td>基于注解的支持</td>
<td>支持</td>
<td>支持</td>
</tr>
<tr>
<td>限流</td>
<td>基于 QPS，支持基于调用关系的限流</td>
<td>有限的支持</td>
</tr>
<tr>
<td>流量整形</td>
<td>支持慢启动、匀速排队模式</td>
<td>不支持</td>
</tr>
<tr>
<td>系统自适应保护</td>
<td>支持</td>
<td>不支持</td>
</tr>
<tr>
<td>控制台</td>
<td>开箱即用，可配置规则、查看秒级监控、机器发现等</td>
<td>不完善</td>
</tr>
<tr>
<td>常见框架的适配</td>
<td>Servlet、Spring Cloud、Dubbo、gRPC 等</td>
<td>Servlet、Spring Cloud Netflix</td>
</tr>
</tbody>
</table>
<h2 id="_1-3-sentinel-介绍和安装" tabindex="-1"><a class="header-anchor" href="#_1-3-sentinel-介绍和安装" aria-hidden="true">#</a> 1.3.Sentinel 介绍和安装</h2>
<h3 id="_1-3-1-初识-sentinel" tabindex="-1"><a class="header-anchor" href="#_1-3-1-初识-sentinel" aria-hidden="true">#</a> 1.3.1.初识 Sentinel</h3>
<p>Sentinel 是阿里巴巴开源的一款微服务流量控制组件。官网地址：https://sentinelguard.io/zh-cn/index.html</p>
<p>Sentinel 具有以下特征:</p>
<p>•<strong>丰富的应用场景</strong>：Sentinel 承接了阿里巴巴近 10 年的双十一大促流量的核心场景，例如秒杀（即突发流量控制在系统容量可以承受的范围）、消息削峰填谷、集群流量控制、实时熔断下游不可用应用等。</p>
<p>•<strong>完备的实时监控</strong>：Sentinel 同时提供实时的监控功能。您可以在控制台中看到接入应用的单台机器秒级数据，甚至 500 台以下规模的集群的汇总运行情况。</p>
<p>•<strong>广泛的开源生态</strong>：Sentinel 提供开箱即用的与其它开源框架/库的整合模块，例如与 Spring Cloud、Dubbo、gRPC 的整合。您只需要引入相应的依赖并进行简单的配置即可快速地接入 Sentinel。</p>
<p>•<strong>完善的</strong> <strong>SPI</strong> <strong>扩展点</strong>：Sentinel 提供简单易用、完善的 SPI 扩展接口。您可以通过实现扩展接口来快速地定制逻辑。例如定制规则管理、适配动态数据源等。</p>
<h3 id="_1-3-2-安装-sentinel" tabindex="-1"><a class="header-anchor" href="#_1-3-2-安装-sentinel" aria-hidden="true">#</a> 1.3.2.安装 Sentinel</h3>
<p>1）下载</p>
<p>sentinel 官方提供了 UI 控制台，方便我们对系统做限流设置。大家可以在<a href="https://github.com/alibaba/Sentinel/releases" target="_blank" rel="noopener noreferrer">GitHub<ExternalLinkIcon/></a>下载。</p>
<p>课前资料也提供了下载好的 jar 包：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210715174252531.png" alt="image-20210715174252531"></p>
<p>2）运行</p>
<p>将 jar 包放到任意非中文目录，执行命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-jar</span> sentinel-dashboard-1.8.1.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果要修改 Sentinel 的默认端口、账户、密码，可以通过下列配置：</p>
<table>
<thead>
<tr>
<th><strong>配置项</strong></th>
<th><strong>默认值</strong></th>
<th><strong>说明</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>server.port</td>
<td>8080</td>
<td>服务端口</td>
</tr>
<tr>
<td>sentinel.dashboard.auth.username</td>
<td>sentinel</td>
<td>默认用户名</td>
</tr>
<tr>
<td>sentinel.dashboard.auth.password</td>
<td>sentinel</td>
<td>默认密码</td>
</tr>
</tbody>
</table>
<p>例如，修改端口：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">java</span>  <span class="token parameter variable">-jar</span> sentinel-dashboard-1.8.1.jar <span class="token parameter variable">-Dserver.port</span><span class="token operator">=</span><span class="token number">8090</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3）访问</p>
<p>访问 http://localhost:8080 页面，就可以看到 sentinel 的控制台了：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210715190827846.png" alt="image-20210715190827846"></p>
<p>登录后，发现一片空白，什么都没有：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210715191134448.png" alt="image-20210715191134448"></p>
<p>这是因为我们还没有与微服务整合。</p>
<p><code v-pre>如果需要修改Sentinel的默认端口，账户，密码，可以通过以下配置：</code></p>
<h2 id="_1-4-微服务整合-sentinel" tabindex="-1"><a class="header-anchor" href="#_1-4-微服务整合-sentinel" aria-hidden="true">#</a> 1.4.微服务整合 Sentinel</h2>
<p>我们在 order-service 中整合 sentinel，并连接 sentinel 的控制台，步骤如下：</p>
<p>1）引入 sentinel 依赖</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--sentinel--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-cloud-starter-alibaba-sentinel<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）配置控制台</p>
<p>修改 application.yaml 文件，添加下面内容：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8088</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">sentinel</span><span class="token punctuation">:</span>
      <span class="token key atrule">transport</span><span class="token punctuation">:</span>
        <span class="token key atrule">dashboard</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3）访问 order-service 的任意端点</p>
<p>打开浏览器，访问 http://localhost:8088/order/101，这样才能触发 sentinel 的监控。</p>
<p>然后再访问 sentinel 的控制台，查看效果：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210715191241799.png" alt="image-20210715191241799"></p>
<h2 id="理解-qps-和线程数的区别" tabindex="-1"><a class="header-anchor" href="#理解-qps-和线程数的区别" aria-hidden="true">#</a> 理解 QPS 和线程数的区别？</h2>
<ol>
<li>
<p>QPS 类似于银行的保安 &gt;</p>
<p>所有的请求到<code v-pre>Sentinel</code>后,他会根据阈值放行,超过报错</p>
</li>
<li>
<p>线程数类似于银行的窗口&gt;</p>
<p>所有的请求会被放进来,但如果阈值设置为 1 那么,其他的请求就会报错</p>
<p>也就是,银行里只有一个窗口,一个人在办理业务中,其他人跑过来则会告诉你,不行,没到你</p>
</li>
</ol>
<p><strong>区别对比图</strong></p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/1682088290338.png" alt="1682088290338"></p>
<h1 id="_2-流量控制" tabindex="-1"><a class="header-anchor" href="#_2-流量控制" aria-hidden="true">#</a> 2.流量控制</h1>
<p>雪崩问题虽然有四种方案，但是限流是避免服务因突发的流量而发生故障，是对微服务雪崩问题的预防。我们先学习这种模式。</p>
<h2 id="_2-1-簇点链路" tabindex="-1"><a class="header-anchor" href="#_2-1-簇点链路" aria-hidden="true">#</a> 2.1.簇点链路</h2>
<p>当请求进入微服务时，首先会访问 DispatcherServlet，然后进入 Controller、Service、Mapper，这样的一个调用链就叫做<strong>簇点链路</strong>。簇点链路中被监控的每一个接口就是一个<strong>资源</strong>。</p>
<p>默认情况下 sentinel 会监控 SpringMVC 的每一个端点（Endpoint，也就是 controller 中的方法），因此 SpringMVC 的每一个端点（Endpoint）就是调用链路中的一个资源。</p>
<p>例如，我们刚才访问的 order-service 中的 OrderController 中的端点：/order/{orderId}</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210715191757319.png" alt="image-20210715191757319"></p>
<p>流控、熔断等都是针对簇点链路中的资源来设置的，因此我们可以点击对应资源后面的按钮来设置规则：</p>
<ul>
<li>流控：流量控制</li>
<li>降级：降级熔断</li>
<li>热点：热点参数限流，是限流的一种</li>
<li>授权：请求的权限控制</li>
</ul>
<h2 id="_2-1-快速入门" tabindex="-1"><a class="header-anchor" href="#_2-1-快速入门" aria-hidden="true">#</a> 2.1.快速入门</h2>
<h3 id="_2-1-1-示例" tabindex="-1"><a class="header-anchor" href="#_2-1-1-示例" aria-hidden="true">#</a> 2.1.1.示例</h3>
<p>点击资源/order/{orderId}后面的流控按钮，就可以弹出表单。</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210715191757319.png" alt="image-20210715191757319"></p>
<p>表单中可以填写限流规则，如下：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210715192010657.png" alt="image-20210715192010657"></p>
<p>其含义是限制 /order/{orderId}这个资源的单机 QPS 为 1，即每秒只允许 1 次请求，超出的请求会被拦截并报错。</p>
<h3 id="_2-1-2-练习" tabindex="-1"><a class="header-anchor" href="#_2-1-2-练习" aria-hidden="true">#</a> 2.1.2.练习：</h3>
<p>需求：给 /order/{orderId}这个资源设置流控规则，QPS 不能超过 5，然后测试。</p>
<p>1）首先在 sentinel 控制台添加限流规则</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210715192455429.png" alt="image-20210715192455429"></p>
<p>2）利用 jmeter 测试</p>
<p>如果没有用过 jmeter，可以参考课前资料提供的文档《Jmeter 快速入门.md》</p>
<p>课前资料提供了编写好的 Jmeter 测试样例：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210715200431615.png" alt="image-20210715200431615"></p>
<p>打开 jmeter，导入课前资料提供的测试样例：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210715200537171.png" alt="image-20210715200537171"></p>
<p>选择：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210715200635414.png" alt="image-20210715200635414"></p>
<p>20 个用户，2 秒内运行完，QPS 是 10，超过了 5.</p>
<p>选中<code v-pre>流控入门，QPS&lt;5</code>右键运行：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210715200804594.png" alt="image-20210715200804594"></p>
<blockquote>
<p>注意，不要点击菜单中的执行按钮来运行。</p>
</blockquote>
<p>结果：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210715200853671.png" alt="image-20210715200853671"></p>
<p>可以看到，成功的请求每次只有 5 个</p>
<h2 id="_2-2-流控模式" tabindex="-1"><a class="header-anchor" href="#_2-2-流控模式" aria-hidden="true">#</a> 2.2.流控模式</h2>
<p>在添加限流规则时，点击高级选项，可以选择三种<strong>流控模式</strong>：</p>
<ul>
<li>直接：<code v-pre>统计当前资源的请求，触发阈值时对当前资源直接限流，也是默认的模式</code></li>
<li>关联：<code v-pre>统计与当前资源相关的另一个资源，触发阈值时，对当前资源限流</code></li>
<li>链路：<code v-pre>统计从指定链路访问到本资源的请求，触发阈值时，对指定链路限流</code></li>
</ul>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210715201827886.png" alt="image-20210715201827886"></p>
<p>快速入门测试的就是直接模式。</p>
<h3 id="_2-2-1-关联模式" tabindex="-1"><a class="header-anchor" href="#_2-2-1-关联模式" aria-hidden="true">#</a> 2.2.1.关联模式</h3>
<p><strong>关联模式</strong>：统计与当前资源相关的另一个资源，触发阈值时，对当前资源限流</p>
<p><strong>配置规则</strong>：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210715202540786.png" alt="image-20210715202540786"></p>
<p><strong>语法说明</strong>：当/write 资源访问量触发阈值时，就会对/read 资源限流，避免影响/write 资源。</p>
<p><strong>使用场景</strong>：比如用户支付时需要修改订单状态，同时用户要查询订单。查询和修改操作会争抢数据库锁，产生竞争。业务需求是优先支付和更新订单的业务，因此当修改订单业务触发阈值时，需要对查询订单业务限流。</p>
<p><strong>需求说明</strong>：</p>
<ul>
<li>
<p>在 OrderController 新建两个端点：/order/query 和/order/update，无需实现业务</p>
</li>
<li>
<p>配置流控规则，当/order/ update 资源被访问的 QPS 超过 5 时，对/order/query 请求限流</p>
</li>
</ul>
<p>1）定义/order/query 端点，模拟订单查询</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/query"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">queryOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"查询订单成功"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）定义/order/update 端点，模拟订单更新</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/update"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">updateOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"更新订单成功"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启服务，查看 sentinel 控制台的簇点链路：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716101805951.png" alt="image-20210716101805951"></p>
<p>3）配置流控规则</p>
<p>对哪个端点限流，就点击哪个端点后面的按钮。我们是对订单查询/order/query 限流，因此点击它后面的按钮：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716101934499.png" alt="image-20210716101934499"></p>
<p>在表单中填写流控规则：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716102103814.png" alt="image-20210716102103814"></p>
<p>4）在 Jmeter 测试</p>
<p>选择《流控模式-关联》：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716102416266.png" alt="image-20210716102416266"></p>
<p>可以看到 1000 个用户，100 秒，因此 QPS 为 10，超过了我们设定的阈值：5</p>
<p>查看 http 请求：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716102532554.png" alt="image-20210716102532554"></p>
<p>请求的目标是/order/update，这样这个断点就会触发阈值。</p>
<p>但限流的目标是/order/query，我们在浏览器访问，可以发现：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716102636030.png" alt="image-20210716102636030"></p>
<p>确实被限流了。</p>
<p>5）总结</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716103143002.png" alt="image-20210716103143002"></p>
<h3 id="_2-2-2-链路模式" tabindex="-1"><a class="header-anchor" href="#_2-2-2-链路模式" aria-hidden="true">#</a> 2.2.2.链路模式</h3>
<p><strong>链路模式</strong>：只针对从指定链路访问到本资源的请求做统计，判断是否超过阈值。</p>
<p><strong>配置示例</strong>：</p>
<p>例如有两条请求链路：</p>
<ul>
<li>
<p>/test1 --&gt; /common</p>
</li>
<li>
<p>/test2 --&gt; /common</p>
</li>
</ul>
<p>如果只希望统计从/test2 进入到/common 的请求，则可以这样配置：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716103536346.png" alt="image-20210716103536346"></p>
<p><strong>实战案例</strong></p>
<p>需求：有查询订单和创建订单业务，两者都需要查询商品。针对从查询订单进入到查询商品的请求统计，并设置限流。</p>
<p>步骤：</p>
<ol>
<li>
<p>在 OrderService 中添加一个 queryGoods 方法，不用实现业务</p>
</li>
<li>
<p>在 OrderController 中，改造/order/query 端点，调用 OrderService 中的 queryGoods 方法</p>
</li>
<li>
<p>在 OrderController 中添加一个/order/save 的端点，调用 OrderService 的 queryGoods 方法</p>
</li>
<li>
<p>给 queryGoods 设置限流规则，从/order/query 进入 queryGoods 的方法限制 QPS 必须小于 2</p>
</li>
</ol>
<p>实现：</p>
<h4 id="_1-添加查询商品方法" tabindex="-1"><a class="header-anchor" href="#_1-添加查询商品方法" aria-hidden="true">#</a> 1）添加查询商品方法</h4>
<p>在 order-service 服务中，给 OrderService 类添加一个 queryGoods 方法：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">queryGoods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"查询商品"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-查询订单时-查询商品" tabindex="-1"><a class="header-anchor" href="#_2-查询订单时-查询商品" aria-hidden="true">#</a> 2）查询订单时，查询商品</h4>
<p>在 order-service 的 OrderController 中，修改/order/query 端点的业务逻辑：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/query"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">queryOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 查询商品</span>
    orderService<span class="token punctuation">.</span><span class="token function">queryGoods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 查询订单</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"查询订单"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"查询订单成功"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-新增订单-查询商品" tabindex="-1"><a class="header-anchor" href="#_3-新增订单-查询商品" aria-hidden="true">#</a> 3）新增订单，查询商品</h4>
<p>在 order-service 的 OrderController 中，修改/order/save 端点，模拟新增订单：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/save"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">saveOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 查询商品</span>
    orderService<span class="token punctuation">.</span><span class="token function">queryGoods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 查询订单</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"新增订单"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"新增订单成功"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-给查询商品添加资源标记" tabindex="-1"><a class="header-anchor" href="#_4-给查询商品添加资源标记" aria-hidden="true">#</a> 4）给查询商品添加资源标记</h4>
<p>默认情况下，OrderService 中的方法是不被 Sentinel 监控的，需要我们自己通过注解来标记要监控的方法。</p>
<p>给 OrderService 的 queryGoods 方法添加@SentinelResource 注解：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@SentinelResource</span><span class="token punctuation">(</span><span class="token string">"goods"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">queryGoods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"查询商品"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>链路模式中，是对不同来源的两个链路做监控。但是 sentinel 默认会给进入 SpringMVC 的所有请求设置同一个 root 资源，会导致链路模式失效。</p>
<p>我们需要关闭这种对 SpringMVC 的资源聚合，修改 order-service 服务的 application.yml 文件：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">sentinel</span><span class="token punctuation">:</span>
      <span class="token key atrule">web-context-unify</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># 关闭context整合</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启服务，访问/order/query 和/order/save，可以查看到 sentinel 的簇点链路规则中，出现了新的资源：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716105227163.png" alt="image-20210716105227163"></p>
<h4 id="_5-添加流控规则" tabindex="-1"><a class="header-anchor" href="#_5-添加流控规则" aria-hidden="true">#</a> 5）添加流控规则</h4>
<p>点击 goods 资源后面的流控按钮，在弹出的表单中填写下面信息：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716105408723.png" alt="image-20210716105408723"></p>
<p>只统计从/order/query 进入/goods 的资源，QPS 阈值为 2，超出则被限流。</p>
<h4 id="_6-jmeter-测试" tabindex="-1"><a class="header-anchor" href="#_6-jmeter-测试" aria-hidden="true">#</a> 6）Jmeter 测试</h4>
<p>选择《流控模式-链路》：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716105612312.png" alt="image-20210716105612312"></p>
<p>可以看到这里 200 个用户，50 秒内发完，QPS 为 4，超过了我们设定的阈值 2</p>
<p>一个 http 请求是访问/order/save：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716105812789.png" alt="image-20210716105812789"></p>
<p>运行的结果：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716110027064.png" alt="image-20210716110027064"></p>
<p>完全不受影响。</p>
<p>另一个是访问/order/query：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716105855951.png" alt="image-20210716105855951"></p>
<p>运行结果：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716105956401.png" alt="image-20210716105956401"></p>
<p>每次只有 2 个通过。</p>
<h3 id="_2-2-3-总结" tabindex="-1"><a class="header-anchor" href="#_2-2-3-总结" aria-hidden="true">#</a> 2.2.3.总结</h3>
<p>流控模式有哪些？</p>
<p>•直接：对当前资源限流</p>
<p>•关联：高优先级资源触发阈值，对低优先级资源限流。</p>
<p>•链路：阈值统计时，只统计从指定资源进入当前资源的请求，是对请求来源的限流</p>
<h2 id="_2-3-流控效果" tabindex="-1"><a class="header-anchor" href="#_2-3-流控效果" aria-hidden="true">#</a> 2.3.流控效果</h2>
<p>在流控的高级选项中，还有一个流控效果选项：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716110225104.png" alt="image-20210716110225104"></p>
<p>流控效果是指请求达到流控阈值时应该采取的措施，包括三种：</p>
<ul>
<li>
<p>快速失败：达到阈值后，新的请求会被立即拒绝并抛出 FlowException 异常。是默认的处理方式。</p>
</li>
<li>
<p>warm up：预热模式，对超出阈值的请求同样是拒绝并抛出异常。但这种模式阈值会动态变化，从一个较小值逐渐增加到最大阈值。</p>
</li>
<li>
<p>排队等待：让所有的请求按照先后次序排队执行，两个请求的间隔不能小于指定时长</p>
</li>
</ul>
<h3 id="_2-3-1-warm-up" tabindex="-1"><a class="header-anchor" href="#_2-3-1-warm-up" aria-hidden="true">#</a> 2.3.1.warm up</h3>
<p>阈值一般是一个微服务能承担的最大 QPS，但是一个服务刚刚启动时，一切资源尚未初始化（<strong>冷启动</strong>），如果直接将 QPS 跑到最大值，可能导致服务瞬间宕机。</p>
<p>warm up 也叫<strong>预热模式</strong>，是应对服务冷启动的一种方案。请求阈值初始值是 maxThreshold / coldFactor，持续指定时长后，逐渐提高到 maxThreshold 值。而 coldFactor 的默认值是 3.</p>
<p>例如，我设置 QPS 的 maxThreshold 为 10，预热时间为 5 秒，那么初始阈值就是 10 / 3 ，也就是 3，然后在 5 秒后逐渐增长到 10.</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716110629796.png" alt="image-20210716110629796"></p>
<p><strong>案例</strong></p>
<p>需求：给/order/{orderId}这个资源设置限流，最大 QPS 为 10，利用 warm up 效果，预热时长为 5 秒</p>
<h4 id="_1-配置流控规则" tabindex="-1"><a class="header-anchor" href="#_1-配置流控规则" aria-hidden="true">#</a> 1）配置流控规则：</h4>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716111012387.png" alt="image-20210716111012387"></p>
<h4 id="_2-jmeter-测试" tabindex="-1"><a class="header-anchor" href="#_2-jmeter-测试" aria-hidden="true">#</a> 2）Jmeter 测试</h4>
<p>选择《流控效果，warm up》：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716111136699.png" alt="image-20210716111136699"></p>
<p>QPS 为 10.</p>
<p>刚刚启动时，大部分请求失败，成功的只有 3 个，说明 QPS 被限定在 3：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716111303701.png" alt="image-20210716111303701"></p>
<p>随着时间推移，成功比例越来越高：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716111404717.png" alt="image-20210716111404717"></p>
<p>到 Sentinel 控制台查看实时监控：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716111526480.png" alt="image-20210716111526480"></p>
<p>一段时间后：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716111658541.png" alt="image-20210716111658541"></p>
<h3 id="_2-3-2-排队等待" tabindex="-1"><a class="header-anchor" href="#_2-3-2-排队等待" aria-hidden="true">#</a> 2.3.2.排队等待</h3>
<p>当请求超过 QPS 阈值时，快速失败和 warm up 会拒绝新的请求并抛出异常。</p>
<p>而排队等待则是让所有请求进入一个队列中，然后按照阈值允许的时间间隔依次执行。后来的请求必须等待前面执行完成，如果请求预期的等待时间超出最大时长，则会被拒绝。</p>
<p>工作原理</p>
<p>例如：QPS = 5，意味着每 200ms 处理一个队列中的请求；timeout = 2000，意味着<strong>预期等待时长</strong>超过 2000ms 的请求会被拒绝并抛出异常。</p>
<p>那什么叫做预期等待时长呢？</p>
<p>比如现在一下子来了 12 个请求，因为每 200ms 执行一个请求，那么：</p>
<ul>
<li>第 6 个请求的<strong>预期等待时长</strong> = 200 * （6 - 1） = 1000ms</li>
<li>第 12 个请求的预期等待时长 = 200 * （12-1） = 2200ms</li>
</ul>
<p>现在，第 1 秒同时接收到 10 个请求，但第 2 秒只有 1 个请求，此时 QPS 的曲线这样的：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716113147176.png" alt="image-20210716113147176"></p>
<p>如果使用队列模式做流控，所有进入的请求都要排队，以固定的 200ms 的间隔执行，QPS 会变的很平滑：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716113426524.png" alt="image-20210716113426524"></p>
<p>平滑的 QPS 曲线，对于服务器来说是更友好的。</p>
<p><strong>案例</strong></p>
<p>需求：给/order/{orderId}这个资源设置限流，最大 QPS 为 10，利用排队的流控效果，超时时长设置为 5s</p>
<h4 id="_1-添加流控规则" tabindex="-1"><a class="header-anchor" href="#_1-添加流控规则" aria-hidden="true">#</a> 1）添加流控规则</h4>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716114048918.png" alt="image-20210716114048918"></p>
<h4 id="_2-jmeter-测试-1" tabindex="-1"><a class="header-anchor" href="#_2-jmeter-测试-1" aria-hidden="true">#</a> 2）Jmeter 测试</h4>
<p>选择《流控效果，队列》：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716114243558.png" alt="image-20210716114243558"></p>
<p>QPS 为 15，已经超过了我们设定的 10。</p>
<p>如果是之前的 快速失败、warmup 模式，超出的请求应该会直接报错。</p>
<p>但是我们看看队列模式的运行结果：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716114429361.png" alt="image-20210716114429361"></p>
<p>全部都通过了。</p>
<p>再去 sentinel 查看实时监控的 QPS 曲线：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716114522935.png" alt="image-20210716114522935"></p>
<p>QPS 非常平滑，一致保持在 10，但是超出的请求没有被拒绝，而是放入队列。因此<strong>响应时间</strong>（等待时间）会越来越长。</p>
<p>当队列满了以后，才会有部分请求失败：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716114651137.png" alt="image-20210716114651137"></p>
<h3 id="_2-3-3-总结" tabindex="-1"><a class="header-anchor" href="#_2-3-3-总结" aria-hidden="true">#</a> 2.3.3.总结</h3>
<p>流控效果有哪些？</p>
<ul>
<li>
<p>快速失败：QPS 超过阈值时，拒绝新的请求</p>
</li>
<li>
<p>warm up： QPS 超过阈值时，拒绝新的请求；QPS 阈值是逐渐提升的，可以避免冷启动时高并发导致服务宕机。</p>
</li>
<li>
<p>排队等待：请求会进入队列，按照阈值允许的时间间隔依次执行请求；如果请求预期等待时长大于超时时间，直接拒绝</p>
</li>
</ul>
<h2 id="_2-4-热点参数限流" tabindex="-1"><a class="header-anchor" href="#_2-4-热点参数限流" aria-hidden="true">#</a> 2.4.热点参数限流</h2>
<p>之前的限流是统计访问某个资源的所有请求，判断是否超过 QPS 阈值。而热点参数限流是<strong>分别统计参数值相同的请求</strong>，判断是否超过 QPS 阈值。</p>
<h3 id="_2-4-1-全局参数限流" tabindex="-1"><a class="header-anchor" href="#_2-4-1-全局参数限流" aria-hidden="true">#</a> 2.4.1.全局参数限流</h3>
<p>例如，一个根据 id 查询商品的接口：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716115014663.png" alt="image-20210716115014663"></p>
<p>访问/goods/{id}的请求中，id 参数值会有变化，热点参数限流会根据参数值分别统计 QPS，统计结果：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716115131463.png" alt="image-20210716115131463"></p>
<p>当 id=1 的请求触发阈值被限流时，id 值不为 1 的请求不受影响。</p>
<p>配置示例：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716115232426.png" alt="image-20210716115232426"></p>
<p>代表的含义是：对 hot 这个资源的 0 号参数（第一个参数）做统计，每 1 秒<strong>相同参数值</strong>的请求数不能超过 5</p>
<h3 id="_2-4-2-热点参数限流" tabindex="-1"><a class="header-anchor" href="#_2-4-2-热点参数限流" aria-hidden="true">#</a> 2.4.2.热点参数限流</h3>
<p>刚才的配置中，对查询商品这个接口的所有商品一视同仁，QPS 都限定为 5.</p>
<p>而在实际开发中，可能部分商品是热点商品，例如秒杀商品，我们希望这部分商品的 QPS 限制与其它商品不一样，高一些。那就需要配置热点参数限流的高级选项了：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716115717523.png" alt="image-20210716115717523"></p>
<p>结合上一个配置，这里的含义是对 0 号的 long 类型参数限流，每 1 秒相同参数的 QPS 不能超过 5，有两个例外：</p>
<p>•如果参数值是 100，则每 1 秒允许的 QPS 为 10</p>
<p>•如果参数值是 101，则每 1 秒允许的 QPS 为 15</p>
<h3 id="_2-4-4-案例" tabindex="-1"><a class="header-anchor" href="#_2-4-4-案例" aria-hidden="true">#</a> 2.4.4.案例</h3>
<p><strong>案例需求</strong>：给/order/{orderId}这个资源添加热点参数限流，规则如下：</p>
<p>•默认的热点参数规则是每 1 秒请求量不超过 2</p>
<p>•给 102 这个参数设置例外：每 1 秒请求量不超过 4</p>
<p>•给 103 这个参数设置例外：每 1 秒请求量不超过 10</p>
<p><strong>注意事项</strong>：热点参数限流对默认的 SpringMVC 资源无效，需要利用@SentinelResource 注解标记资源</p>
<h4 id="_1-标记资源" tabindex="-1"><a class="header-anchor" href="#_1-标记资源" aria-hidden="true">#</a> 1）标记资源</h4>
<p>给 order-service 中的 OrderController 中的/order/{orderId}资源添加注解：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716120033572.png" alt="image-20210716120033572"></p>
<h4 id="_2-热点参数限流规则" tabindex="-1"><a class="header-anchor" href="#_2-热点参数限流规则" aria-hidden="true">#</a> 2）热点参数限流规则</h4>
<p>访问该接口，可以看到我们标记的 hot 资源出现了：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716120208509.png" alt="image-20210716120208509"></p>
<p>这里不要点击 hot 后面的按钮，页面有 BUG</p>
<p>点击左侧菜单中<strong>热点规则</strong>菜单：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716120319009.png" alt="image-20210716120319009"></p>
<p>点击新增，填写表单：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716120536714.png" alt="image-20210716120536714"></p>
<h4 id="_3-jmeter-测试" tabindex="-1"><a class="header-anchor" href="#_3-jmeter-测试" aria-hidden="true">#</a> 3）Jmeter 测试</h4>
<p>选择《热点参数限流 QPS1》：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716120754527.png" alt="image-20210716120754527"></p>
<p>这里发起请求的 QPS 为 5.</p>
<p>包含 3 个 http 请求：</p>
<p>普通参数，QPS 阈值为 2</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716120840501.png" alt="image-20210716120840501"></p>
<p>运行结果：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716121105567.png" alt="image-20210716121105567"></p>
<p>例外项，QPS 阈值为 4</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716120900365.png" alt="image-20210716120900365"></p>
<p>运行结果：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716121201630.png" alt="image-20210716121201630"></p>
<p>例外项，QPS 阈值为 10</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716120919131.png" alt="image-20210716120919131"></p>
<p>运行结果：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716121220305.png" alt="image-20210716121220305"></p>
<h1 id="_3-隔离和降级" tabindex="-1"><a class="header-anchor" href="#_3-隔离和降级" aria-hidden="true">#</a> 3.隔离和降级</h1>
<p>限流是一种预防措施，虽然限流可以尽量避免因高并发而引起的服务故障，但服务还会因为其它原因而故障。</p>
<p>而要将这些故障控制在一定范围，避免雪崩，就要靠<strong>线程隔离</strong>（舱壁模式）和<strong>熔断降级</strong>手段了。</p>
<p><strong>线程隔离</strong>之前讲到过：调用者在调用服务提供者时，给每个调用的请求分配独立线程池，出现故障时，最多消耗这个线程池内资源，避免把调用者的所有资源耗尽。</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210715173215243.png" alt="image-20210715173215243"></p>
<p><strong>熔断降级</strong>：是在调用方这边加入断路器，统计对服务提供者的调用，如果调用的失败比例过高，则熔断该业务，不允许访问该服务的提供者了。</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210715173428073.png" alt="image-20210715173428073"></p>
<p>可以看到，不管是线程隔离还是熔断降级，都是对<strong>客户端</strong>（调用方）的保护。需要在<strong>调用方</strong> 发起远程调用时做线程隔离、或者服务熔断。</p>
<p>而我们的微服务远程调用都是基于 Feign 来完成的，因此我们需要将 Feign 与 Sentinel 整合，在 Feign 里面实现线程隔离和服务熔断。</p>
<h2 id="_3-1-feignclient-整合-sentinel" tabindex="-1"><a class="header-anchor" href="#_3-1-feignclient-整合-sentinel" aria-hidden="true">#</a> 3.1.FeignClient 整合 Sentinel</h2>
<p>SpringCloud 中，微服务调用都是通过 Feign 来实现的，因此做客户端保护必须整合 Feign 和 Sentinel。</p>
<h3 id="_3-1-1-修改配置-开启-sentinel-功能" tabindex="-1"><a class="header-anchor" href="#_3-1-1-修改配置-开启-sentinel-功能" aria-hidden="true">#</a> 3.1.1.修改配置，开启 sentinel 功能</h3>
<p>修改 OrderService 的 application.yml 文件，开启 Feign 的 Sentinel 功能：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">feign</span><span class="token punctuation">:</span>
  <span class="token key atrule">sentinel</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 开启feign对sentinel的支持</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-2-编写失败降级逻辑" tabindex="-1"><a class="header-anchor" href="#_3-1-2-编写失败降级逻辑" aria-hidden="true">#</a> 3.1.2.编写失败降级逻辑</h3>
<p>业务失败后，不能直接报错，而应该返回用户一个友好提示或者默认结果，这个就是失败降级逻辑。</p>
<p>给 FeignClient 编写失败后的降级逻辑</p>
<p>① 方式一：FallbackClass，无法对远程调用的异常做处理</p>
<p>② 方式二：FallbackFactory，可以对远程调用的异常做处理，我们选择这种</p>
<p>这里我们演示方式二的失败降级处理。</p>
<p><strong>步骤一</strong>：在 feing-api 项目中定义类，实现 FallbackFactory：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716122403502.png" alt="image-20210716122403502"></p>
<p>代码：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">cn<span class="token punctuation">.</span>itcast<span class="token punctuation">.</span>feign<span class="token punctuation">.</span>clients<span class="token punctuation">.</span>fallback</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>itcast<span class="token punctuation">.</span>feign<span class="token punctuation">.</span>clients<span class="token punctuation">.</span></span><span class="token class-name">UserClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>itcast<span class="token punctuation">.</span>feign<span class="token punctuation">.</span>pojo<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">feign<span class="token punctuation">.</span>hystrix<span class="token punctuation">.</span></span><span class="token class-name">FallbackFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Slf4j</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserClientFallbackFactory</span> <span class="token keyword">implements</span> <span class="token class-name">FallbackFactory</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserClient</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">UserClient</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Throwable</span> throwable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">UserClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">findById</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"查询用户异常"</span><span class="token punctuation">,</span> throwable<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>步骤二</strong>：在 feing-api 项目中的 DefaultFeignConfiguration 类中将 UserClientFallbackFactory 注册为一个 Bean：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">UserClientFallbackFactory</span> <span class="token function">userClientFallbackFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">UserClientFallbackFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>步骤三</strong>：在 feing-api 项目中的 UserClient 接口中使用 UserClientFallbackFactory：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>itcast<span class="token punctuation">.</span>feign<span class="token punctuation">.</span>clients<span class="token punctuation">.</span>fallback<span class="token punctuation">.</span></span><span class="token class-name">UserClientFallbackFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>itcast<span class="token punctuation">.</span>feign<span class="token punctuation">.</span>pojo<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>openfeign<span class="token punctuation">.</span></span><span class="token class-name">FeignClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">PathVariable</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@FeignClient</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"userservice"</span><span class="token punctuation">,</span> fallbackFactory <span class="token operator">=</span> <span class="token class-name">UserClientFallbackFactory</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserClient</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/user/{id}"</span><span class="token punctuation">)</span>
    <span class="token class-name">User</span> <span class="token function">findById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启后，访问一次订单查询业务，然后查看 sentinel 控制台，可以看到新的簇点链路：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716123705780.png" alt="image-20210716123705780"></p>
<h3 id="_3-1-3-总结" tabindex="-1"><a class="header-anchor" href="#_3-1-3-总结" aria-hidden="true">#</a> 3.1.3.总结</h3>
<p>Sentinel 支持的雪崩解决方案：</p>
<ul>
<li>线程隔离（仓壁模式）</li>
<li>降级熔断</li>
</ul>
<p>Feign 整合 Sentinel 的步骤：</p>
<ul>
<li>在 application.yml 中配置：feign.sentienl.enable=true</li>
<li>给 FeignClient 编写 FallbackFactory 并注册为 Bean</li>
<li>将 FallbackFactory 配置到 FeignClient</li>
</ul>
<h2 id="_3-2-线程隔离-舱壁模式" tabindex="-1"><a class="header-anchor" href="#_3-2-线程隔离-舱壁模式" aria-hidden="true">#</a> 3.2.线程隔离（舱壁模式）</h2>
<h3 id="_3-2-1-线程隔离的实现方式" tabindex="-1"><a class="header-anchor" href="#_3-2-1-线程隔离的实现方式" aria-hidden="true">#</a> 3.2.1.线程隔离的实现方式</h3>
<p>线程隔离有两种方式实现：</p>
<ul>
<li>
<p>线程池隔离</p>
</li>
<li>
<p>信号量隔离（Sentinel 默认采用）</p>
</li>
</ul>
<p>如图：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716123036937.png" alt="image-20210716123036937"></p>
<p><strong>线程池隔离</strong>：给每个服务调用业务分配一个线程池，利用线程池本身实现隔离效果</p>
<p><strong>信号量隔离</strong>：不创建线程池，而是计数器模式，记录业务使用的线程数量，达到信号量上限时，禁止新的请求。</p>
<p>两者的优缺点：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716123240518.png" alt="image-20210716123240518"></p>
<h3 id="_3-2-2-sentinel-的线程隔离" tabindex="-1"><a class="header-anchor" href="#_3-2-2-sentinel-的线程隔离" aria-hidden="true">#</a> 3.2.2.sentinel 的线程隔离</h3>
<p><strong>用法说明</strong>：</p>
<p>在添加限流规则时，可以选择两种阈值类型：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716123411217.png" alt="image-20210716123411217"></p>
<ul>
<li>
<p>QPS：就是每秒的请求数，在快速入门中已经演示过</p>
</li>
<li>
<p>线程数：是该资源能使用用的 tomcat 线程数的最大值。也就是通过限制线程数量，实现<strong>线程隔离</strong>（舱壁模式）。</p>
</li>
</ul>
<p><strong>案例需求</strong>：给 order-service 服务中的 UserClient 的查询用户接口设置流控规则，线程数不能超过 2。然后利用 jemeter 测试。</p>
<h4 id="_1-配置隔离规则" tabindex="-1"><a class="header-anchor" href="#_1-配置隔离规则" aria-hidden="true">#</a> 1）配置隔离规则</h4>
<p>选择 feign 接口后面的流控按钮：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716123831992.png" alt="image-20210716123831992"></p>
<p>填写表单：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716123936844.png" alt="image-20210716123936844"></p>
<h4 id="_2-jmeter-测试-2" tabindex="-1"><a class="header-anchor" href="#_2-jmeter-测试-2" aria-hidden="true">#</a> 2）Jmeter 测试</h4>
<p>选择《阈值类型-线程数&lt;2》：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716124229894.png" alt="image-20210716124229894"></p>
<p>一次发生 10 个请求，有较大概率并发线程数超过 2，而超出的请求会走之前定义的失败降级逻辑。</p>
<p>查看运行结果：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716124147820.png" alt="image-20210716124147820"></p>
<p>发现虽然结果都是通过了，不过部分请求得到的响应是降级返回的 null 信息。</p>
<h3 id="_3-2-3-总结" tabindex="-1"><a class="header-anchor" href="#_3-2-3-总结" aria-hidden="true">#</a> 3.2.3.总结</h3>
<p>线程隔离的两种手段是？</p>
<ul>
<li>
<p>信号量隔离</p>
</li>
<li>
<p>线程池隔离</p>
</li>
</ul>
<p>信号量隔离的特点是？</p>
<ul>
<li>基于计数器模式，简单，开销小</li>
</ul>
<p>线程池隔离的特点是？</p>
<ul>
<li>基于线程池模式，有额外开销，但隔离控制更强</li>
</ul>
<h2 id="_3-3-熔断降级" tabindex="-1"><a class="header-anchor" href="#_3-3-熔断降级" aria-hidden="true">#</a> 3.3.熔断降级</h2>
<p>熔断降级是解决雪崩问题的重要手段。其思路是由<strong>断路器</strong>统计服务调用的异常比例、慢请求比例，如果超出阈值则会<strong>熔断</strong>该服务。即拦截访问该服务的一切请求；而当服务恢复时，断路器会放行访问该服务的请求。</p>
<p>断路器控制熔断和放行是通过状态机来完成的：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716130958518.png" alt="image-20210716130958518"></p>
<p>状态机包括三个状态：</p>
<ul>
<li>closed：关闭状态，断路器放行所有请求，并开始统计异常比例、慢请求比例。超过阈值则切换到 open 状态</li>
<li>open：打开状态，服务调用被<strong>熔断</strong>，访问被熔断服务的请求会被拒绝，快速失败，直接走降级逻辑。Open 状态 5 秒后会进入 half-open 状态</li>
<li>half-open：半开状态，放行一次请求，根据执行结果来判断接下来的操作。
<ul>
<li>请求成功：则切换到 closed 状态</li>
<li>请求失败：则切换到 open 状态</li>
</ul>
</li>
</ul>
<p>断路器熔断策略有三种：慢调用、异常比例、异常数</p>
<h3 id="_3-3-1-慢调用" tabindex="-1"><a class="header-anchor" href="#_3-3-1-慢调用" aria-hidden="true">#</a> 3.3.1.慢调用</h3>
<p><strong>慢调用</strong>：业务的响应时长（RT）大于指定时长的请求认定为慢调用请求。在指定时间内，如果请求数量超过设定的最小数量，慢调用比例大于设定的阈值，则触发熔断。</p>
<p>例如：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716145934347.png" alt="image-20210716145934347"></p>
<p>解读：RT 超过 500ms 的调用是慢调用，统计最近 10000ms 内的请求，如果请求量超过 10 次，并且慢调用比例不低于 0.5，则触发熔断，熔断时长为 5 秒。然后进入 half-open 状态，放行一次请求做测试。</p>
<p><strong>案例</strong></p>
<p>需求：给 UserClient 的查询用户接口设置降级规则，慢调用的 RT 阈值为 50ms，统计时间为 1 秒，最小请求数量为 5，失败阈值比例为 0.4，熔断时长为 5</p>
<h4 id="_1-设置慢调用" tabindex="-1"><a class="header-anchor" href="#_1-设置慢调用" aria-hidden="true">#</a> 1）设置慢调用</h4>
<p>修改 user-service 中的/user/{id}这个接口的业务。通过休眠模拟一个延迟时间：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716150234787.png" alt="image-20210716150234787"></p>
<p>此时，orderId=101 的订单，关联的是 id 为 1 的用户，调用时长为 60ms：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716150510956.png" alt="image-20210716150510956"></p>
<p>orderId=102 的订单，关联的是 id 为 2 的用户，调用时长为非常短；</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716150605208.png" alt="image-20210716150605208"></p>
<h4 id="_2-设置熔断规则" tabindex="-1"><a class="header-anchor" href="#_2-设置熔断规则" aria-hidden="true">#</a> 2）设置熔断规则</h4>
<p>下面，给 feign 接口设置降级规则：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716150654094.png" alt="image-20210716150654094"></p>
<p>规则：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716150740434.png" alt="image-20210716150740434"></p>
<p>超过 50ms 的请求都会被认为是慢请求</p>
<h4 id="_3-测试" tabindex="-1"><a class="header-anchor" href="#_3-测试" aria-hidden="true">#</a> 3）测试</h4>
<p>在浏览器访问：http://localhost:8088/order/101，快速刷新 5 次，可以发现：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716150911004.png" alt="image-20210716150911004"></p>
<p>触发了熔断，请求时长缩短至 5ms，快速失败了，并且走降级逻辑，返回的 null</p>
<p>在浏览器访问：http://localhost:8088/order/102，竟然也被熔断了：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716151107785.png" alt="image-20210716151107785"></p>
<h3 id="_3-3-2-异常比例、异常数" tabindex="-1"><a class="header-anchor" href="#_3-3-2-异常比例、异常数" aria-hidden="true">#</a> 3.3.2.异常比例、异常数</h3>
<p><strong>异常比例或异常数</strong>：统计指定时间内的调用，如果调用次数超过指定请求数，并且出现异常的比例达到设定的比例阈值（或超过指定异常数），则触发熔断。</p>
<p>例如，一个异常比例设置：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716131430682.png" alt="image-20210716131430682"></p>
<p>解读：统计最近 1000ms 内的请求，如果请求量超过 10 次，并且异常比例不低于 0.4，则触发熔断。</p>
<p>一个异常数设置：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716131522912.png" alt="image-20210716131522912"></p>
<p>解读：统计最近 1000ms 内的请求，如果请求量超过 10 次，并且异常比例不低于 2 次，则触发熔断。</p>
<p><strong>案例</strong></p>
<p>需求：给 UserClient 的查询用户接口设置降级规则，统计时间为 1 秒，最小请求数量为 5，失败阈值比例为 0.4，熔断时长为 5s</p>
<h4 id="_1-设置异常请求" tabindex="-1"><a class="header-anchor" href="#_1-设置异常请求" aria-hidden="true">#</a> 1）设置异常请求</h4>
<p>首先，修改 user-service 中的/user/{id}这个接口的业务。手动抛出异常，以触发异常比例的熔断：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716151348183.png" alt="image-20210716151348183"></p>
<p>也就是说，id 为 2 时，就会触发异常</p>
<h4 id="_2-设置熔断规则-1" tabindex="-1"><a class="header-anchor" href="#_2-设置熔断规则-1" aria-hidden="true">#</a> 2）设置熔断规则</h4>
<p>下面，给 feign 接口设置降级规则：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716150654094.png" alt="image-20210716150654094"></p>
<p>规则：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716151538785.png" alt="image-20210716151538785"></p>
<p>在 5 次请求中，只要异常比例超过 0.4，也就是有 2 次以上的异常，就会触发熔断。</p>
<h4 id="_3-测试-1" tabindex="-1"><a class="header-anchor" href="#_3-测试-1" aria-hidden="true">#</a> 3）测试</h4>
<p>在浏览器快速访问：http://localhost:8088/order/102，快速刷新 5 次，触发熔断：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716151722916.png" alt="image-20210716151722916"></p>
<p>此时，我们去访问本来应该正常的 103：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716151844817.png" alt="image-20210716151844817"></p>
<h1 id="_4-授权规则" tabindex="-1"><a class="header-anchor" href="#_4-授权规则" aria-hidden="true">#</a> 4.授权规则</h1>
<p>授权规则可以对请求方来源做判断和控制。</p>
<p>前言：我们以前学过 SpringCloud Gateway 作为把门的（看门大爷） 所有请求进入网关由网关验证权限规则，再路由到各个微服务，怎么到这又要整一个权限呢?</p>
<p>试想一下，万一公司出现了内鬼，把微服务地址泄露出去给了些不怀好意的人，那这些哥们就可以绕过网关直接访问微服务了，那么任凭你网关配置的再强大，也是隔靴搔痒，无济于事了，所以 sentinel 的授权规则就是结果这一系列问题的。(如果是从网关过来的就放行，如果是从别的地方过来的就拦截)</p>
<h2 id="_4-1-授权规则" tabindex="-1"><a class="header-anchor" href="#_4-1-授权规则" aria-hidden="true">#</a> 4.1.授权规则</h2>
<h3 id="_4-1-1-基本规则" tabindex="-1"><a class="header-anchor" href="#_4-1-1-基本规则" aria-hidden="true">#</a> 4.1.1.基本规则</h3>
<p>授权规则可以对调用方的来源做控制，有白名单和黑名单两种方式。</p>
<ul>
<li>
<p>白名单：来源（origin）在白名单内的调用者允许访问</p>
</li>
<li>
<p>黑名单：来源（origin）在黑名单内的调用者不允许访问</p>
</li>
</ul>
<p>点击左侧菜单的授权，可以看到授权规则：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716152010750.png" alt="image-20210716152010750"></p>
<ul>
<li>
<p>资源名：就是受保护的资源，例如/order/{orderId}</p>
</li>
<li>
<p>流控应用：是来源者的名单，</p>
<ul>
<li>如果是勾选白名单，则名单中的来源被许可访问。</li>
<li>如果是勾选黑名单，则名单中的来源被禁止访问。</li>
</ul>
</li>
</ul>
<p>比如：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716152349191.png" alt="image-20210716152349191"></p>
<p>我们允许请求从 gateway 到 order-service，不允许浏览器访问 order-service，那么白名单中就要填写<strong>网关的来源名称（origin）</strong>。</p>
<h3 id="_4-1-2-如何获取-origin" tabindex="-1"><a class="header-anchor" href="#_4-1-2-如何获取-origin" aria-hidden="true">#</a> 4.1.2.如何获取 origin</h3>
<p>Sentinel 是通过 RequestOriginParser 这个接口的 parseOrigin 来获取请求的来源的。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">RequestOriginParser</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 从请求request对象中获取origin，获取方式自定义
     */</span>
    <span class="token class-name">String</span> <span class="token function">parseOrigin</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个方法的作用就是从 request 对象中，获取请求者的 origin 值并返回。</p>
<p>默认情况下，sentinel 不管请求者从哪里来，返回值永远是 default，也就是说一切请求的来源都被认为是一样的值 default。</p>
<p>因此，我们需要自定义这个接口的实现，让<strong>不同的请求，返回不同的 origin</strong>。</p>
<p>例如 order-service 服务中，我们定义一个 RequestOriginParser 的实现类：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">cn<span class="token punctuation">.</span>itcast<span class="token punctuation">.</span>order<span class="token punctuation">.</span>sentinel</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>csp<span class="token punctuation">.</span>sentinel<span class="token punctuation">.</span>adapter<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>webmvc<span class="token punctuation">.</span>callback<span class="token punctuation">.</span></span><span class="token class-name">RequestOriginParser</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletRequest</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HeaderOriginParser</span> <span class="token keyword">implements</span> <span class="token class-name">RequestOriginParser</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">parseOrigin</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1.获取请求头</span>
        <span class="token class-name">String</span> origin <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">"origin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 2.非空判断</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>origin<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            origin <span class="token operator">=</span> <span class="token string">"blank"</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> origin<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们会尝试从 request-header 中获取 origin 值。</p>
<h3 id="_4-1-3-给网关添加请求头" tabindex="-1"><a class="header-anchor" href="#_4-1-3-给网关添加请求头" aria-hidden="true">#</a> 4.1.3.给网关添加请求头</h3>
<p>既然获取请求 origin 的方式是从 reques-header 中获取 origin 值，我们必须让<strong>所有从 gateway 路由到微服务的请求都带上 origin 头</strong>。</p>
<p>这个需要利用之前学习的一个 GatewayFilter 来实现，AddRequestHeaderGatewayFilter。</p>
<p>修改 gateway 服务中的 application.yml，添加一个 defaultFilter：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">gateway</span><span class="token punctuation">:</span>
      <span class="token key atrule">default-filters</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> AddRequestHeader=origin<span class="token punctuation">,</span>gateway
      <span class="token key atrule">routes</span><span class="token punctuation">:</span>
        <span class="token comment"># ...略</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，从 gateway 路由的所有请求都会带上 origin 头，值为 gateway。而从其它地方到达微服务的请求则没有这个头。</p>
<h3 id="_4-1-4-配置授权规则" tabindex="-1"><a class="header-anchor" href="#_4-1-4-配置授权规则" aria-hidden="true">#</a> 4.1.4.配置授权规则</h3>
<p>接下来，我们添加一个授权规则，放行 origin 值为 gateway 的请求。</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716153250134.png" alt="image-20210716153250134"></p>
<p>配置如下：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716153301069.png" alt="image-20210716153301069"></p>
<p>现在，我们直接跳过网关，访问 order-service 服务：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716153348396.png" alt="image-20210716153348396"></p>
<p>通过网关访问：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716153434095.png" alt="image-20210716153434095"></p>
<h2 id="_4-2-自定义异常结果" tabindex="-1"><a class="header-anchor" href="#_4-2-自定义异常结果" aria-hidden="true">#</a> 4.2.自定义异常结果</h2>
<p>默认情况下，发生限流、降级、授权拦截时，都会抛出异常到调用方。异常结果都是 flow limmiting（限流）。这样不够友好，无法得知是限流还是降级还是授权拦截。</p>
<h3 id="_4-2-1-异常类型" tabindex="-1"><a class="header-anchor" href="#_4-2-1-异常类型" aria-hidden="true">#</a> 4.2.1.异常类型</h3>
<p>而如果要自定义异常时的返回结果，需要实现 BlockExceptionHandler 接口：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">BlockExceptionHandler</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 处理请求被限流、降级、授权拦截时抛出的异常：BlockException
     */</span>
    <span class="token keyword">void</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">BlockException</span> e<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个方法有三个参数：</p>
<ul>
<li>HttpServletRequest request：request 对象</li>
<li>HttpServletResponse response：response 对象</li>
<li>BlockException e：被 sentinel 拦截时抛出的异常</li>
</ul>
<p>这里的 BlockException 包含多个不同的子类：</p>
<table>
<thead>
<tr>
<th><strong>异常</strong></th>
<th><strong>说明</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>FlowException</td>
<td>限流异常</td>
</tr>
<tr>
<td>ParamFlowException</td>
<td>热点参数限流的异常</td>
</tr>
<tr>
<td>DegradeException</td>
<td>降级异常</td>
</tr>
<tr>
<td>AuthorityException</td>
<td>授权规则异常</td>
</tr>
<tr>
<td>SystemBlockException</td>
<td>系统规则异常</td>
</tr>
</tbody>
</table>
<h3 id="_4-2-2-自定义异常处理" tabindex="-1"><a class="header-anchor" href="#_4-2-2-自定义异常处理" aria-hidden="true">#</a> 4.2.2.自定义异常处理</h3>
<p>下面，我们就在 order-service 定义一个自定义异常处理类：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">cn<span class="token punctuation">.</span>itcast<span class="token punctuation">.</span>order<span class="token punctuation">.</span>sentinel</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>csp<span class="token punctuation">.</span>sentinel<span class="token punctuation">.</span>adapter<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>webmvc<span class="token punctuation">.</span>callback<span class="token punctuation">.</span></span><span class="token class-name">BlockExceptionHandler</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>csp<span class="token punctuation">.</span>sentinel<span class="token punctuation">.</span>slots<span class="token punctuation">.</span>block<span class="token punctuation">.</span></span><span class="token class-name">BlockException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>csp<span class="token punctuation">.</span>sentinel<span class="token punctuation">.</span>slots<span class="token punctuation">.</span>block<span class="token punctuation">.</span>authority<span class="token punctuation">.</span></span><span class="token class-name">AuthorityException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>csp<span class="token punctuation">.</span>sentinel<span class="token punctuation">.</span>slots<span class="token punctuation">.</span>block<span class="token punctuation">.</span>degrade<span class="token punctuation">.</span></span><span class="token class-name">DegradeException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>csp<span class="token punctuation">.</span>sentinel<span class="token punctuation">.</span>slots<span class="token punctuation">.</span>block<span class="token punctuation">.</span>flow<span class="token punctuation">.</span></span><span class="token class-name">FlowException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>csp<span class="token punctuation">.</span>sentinel<span class="token punctuation">.</span>slots<span class="token punctuation">.</span>block<span class="token punctuation">.</span>flow<span class="token punctuation">.</span>param<span class="token punctuation">.</span></span><span class="token class-name">ParamFlowException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletRequest</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletResponse</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SentinelExceptionHandler</span> <span class="token keyword">implements</span> <span class="token class-name">BlockExceptionHandler</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">BlockException</span> e<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> msg <span class="token operator">=</span> <span class="token string">"未知异常"</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> status <span class="token operator">=</span> <span class="token number">429</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token keyword">instanceof</span> <span class="token class-name">FlowException</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            msg <span class="token operator">=</span> <span class="token string">"请求被限流了"</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token keyword">instanceof</span> <span class="token class-name">ParamFlowException</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            msg <span class="token operator">=</span> <span class="token string">"请求被热点参数限流"</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token keyword">instanceof</span> <span class="token class-name">DegradeException</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            msg <span class="token operator">=</span> <span class="token string">"请求被降级了"</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token keyword">instanceof</span> <span class="token class-name">AuthorityException</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            msg <span class="token operator">=</span> <span class="token string">"没有权限访问"</span><span class="token punctuation">;</span>
            status <span class="token operator">=</span> <span class="token number">401</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        response<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">"application/json;charset=utf-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        response<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
        response<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"{\"msg\": "</span> <span class="token operator">+</span> msg <span class="token operator">+</span> <span class="token string">", \"status\": "</span> <span class="token operator">+</span> status <span class="token operator">+</span> <span class="token string">"}"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启测试，在不同场景下，会返回不同的异常消息.</p>
<p>限流：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716153938887.png" alt="image-20210716153938887"></p>
<p>授权拦截时：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716154012736.png" alt="image-20210716154012736"></p>
<h1 id="_5-规则持久化" tabindex="-1"><a class="header-anchor" href="#_5-规则持久化" aria-hidden="true">#</a> 5.规则持久化</h1>
<p>现在，sentinel 的所有规则都是内存存储，重启后所有规则都会丢失。在生产环境下，我们必须确保这些规则的持久化，避免丢失。</p>
<h2 id="_5-1-规则管理模式" tabindex="-1"><a class="header-anchor" href="#_5-1-规则管理模式" aria-hidden="true">#</a> 5.1.规则管理模式</h2>
<p>规则是否能持久化，取决于规则管理模式，sentinel 支持三种规则管理模式：</p>
<ul>
<li>原始模式：Sentinel 的默认模式，将规则保存在内存，重启服务会丢失。</li>
<li>pull 模式</li>
<li>push 模式</li>
</ul>
<h3 id="_5-1-1-pull-模式" tabindex="-1"><a class="header-anchor" href="#_5-1-1-pull-模式" aria-hidden="true">#</a> 5.1.1.pull 模式</h3>
<p>pull 模式：控制台将配置的规则推送到 Sentinel 客户端，而客户端会将配置规则保存在本地文件或数据库中。以后会定时去本地文件或数据库中查询，更新本地规则。</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716154155238.png" alt="image-20210716154155238"></p>
<h3 id="_5-1-2-push-模式" tabindex="-1"><a class="header-anchor" href="#_5-1-2-push-模式" aria-hidden="true">#</a> 5.1.2.push 模式</h3>
<p>push 模式：控制台将配置规则推送到远程配置中心，例如 Nacos。Sentinel 客户端监听 Nacos，获取配置变更的推送消息，完成本地配置更新。</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716154215456.png" alt="image-20210716154215456"></p>
<h2 id="_5-2-实现-push-模式" tabindex="-1"><a class="header-anchor" href="#_5-2-实现-push-模式" aria-hidden="true">#</a> 5.2.实现 push 模式</h2>
<p>详细步骤可以参考课前资料的《sentinel 规则持久化》：</p>
<p><img src="@source/notes/microservices/02/day01-微服务保护/assets/image-20210716154255466.png" alt="image-20210716154255466"></p>
</div></template>


