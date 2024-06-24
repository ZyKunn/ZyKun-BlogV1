<template><div><h1 id="jmeter-快速入门-🧙" tabindex="-1"><a class="header-anchor" href="#jmeter-快速入门-🧙" aria-hidden="true">#</a> Jmeter 快速入门 🧙</h1>
<nav class="table-of-contents"><ul><li><router-link to="#_1-1-下载">1.1.下载</router-link></li><li><router-link to="#_1-2-解压">1.2.解压</router-link><ul><li><router-link to="#_1-3-运行">1.3.运行</router-link></li></ul></li><li><router-link to="#_2-1-设置中文语言">2.1.设置中文语言</router-link></li><li><router-link to="#_2-2-基本用法">2.2.基本用法</router-link></li></ul></nav>
<h1 id="_1-安装-jmeter" tabindex="-1"><a class="header-anchor" href="#_1-安装-jmeter" aria-hidden="true">#</a> 1.安装 Jmeter</h1>
<p>Jmeter 依赖于 JDK，所以必须确保当前计算机上已经安装了 JDK，并且配置了环境变量。</p>
<h2 id="_1-1-下载" tabindex="-1"><a class="header-anchor" href="#_1-1-下载" aria-hidden="true">#</a> 1.1.下载</h2>
<p>可以 Apache Jmeter 官网下载，地址：http://jmeter.apache.org/download_jmeter.cgi</p>
<p><img src="@source/notes/microservices/02/Jmeter快速入门/assets/image-20210715193149837.png" alt="image-20210715193149837"></p>
<p>当然，我们课前资料也提供了下载好的安装包：</p>
<p><img src="@source/notes/microservices/02/Jmeter快速入门/assets/image-20210715193224094.png" alt="image-20210715193224094"></p>
<h2 id="_1-2-解压" tabindex="-1"><a class="header-anchor" href="#_1-2-解压" aria-hidden="true">#</a> 1.2.解压</h2>
<p>因为下载的是 zip 包，解压缩即可使用，目录结构如下：</p>
<p><img src="@source/notes/microservices/02/Jmeter快速入门/assets/image-20210715193334367.png" alt="image-20210715193334367"></p>
<p>其中的 bin 目录就是执行的脚本，其中包含启动脚本：</p>
<p><img src="@source/notes/microservices/02/Jmeter快速入门/assets/image-20210715193414601.png" alt="image-20210715193414601"></p>
<h3 id="_1-3-运行" tabindex="-1"><a class="header-anchor" href="#_1-3-运行" aria-hidden="true">#</a> 1.3.运行</h3>
<p>双击即可运行，但是有两点注意：</p>
<ul>
<li>启动速度比较慢，要耐心等待</li>
<li>启动后黑窗口不能关闭，否则 Jmeter 也跟着关闭了</li>
</ul>
<p><img src="@source/notes/microservices/02/Jmeter快速入门/assets/image-20210715193730096.png" alt="image-20210715193730096"></p>
<h1 id="_2-快速入门" tabindex="-1"><a class="header-anchor" href="#_2-快速入门" aria-hidden="true">#</a> 2.快速入门</h1>
<h2 id="_2-1-设置中文语言" tabindex="-1"><a class="header-anchor" href="#_2-1-设置中文语言" aria-hidden="true">#</a> 2.1.设置中文语言</h2>
<p>默认 Jmeter 的语言是英文，需要设置：</p>
<p><img src="@source/notes/microservices/02/Jmeter快速入门/assets/image-20210715193838719.png" alt="image-20210715193838719"></p>
<p>效果：</p>
<p><img src="@source/notes/microservices/02/Jmeter快速入门/assets/image-20210715193914039.png" alt="image-20210715193914039"></p>
<blockquote>
<p><strong>注意</strong>：上面的配置只能保证本次运行是中文，如果要永久中文，需要修改 Jmeter 的配置文件</p>
</blockquote>
<p>打开 jmeter 文件夹，在 bin 目录中找到 <strong>jmeter.properties</strong>，添加下面配置：</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">language</span><span class="token punctuation">=</span><span class="token value attr-value">zh_CN</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/notes/microservices/02/Jmeter快速入门/assets/image-20210715194137982.png" alt="image-20210715194137982"></p>
<blockquote>
<p>注意：前面不要出现#，#代表注释，另外这里是下划线，不是中划线</p>
</blockquote>
<h2 id="_2-2-基本用法" tabindex="-1"><a class="header-anchor" href="#_2-2-基本用法" aria-hidden="true">#</a> 2.2.基本用法</h2>
<p>在测试计划上点鼠标右键，选择添加 &gt; 线程（用户） &gt; 线程组：</p>
<p><img src="@source/notes/microservices/02/Jmeter快速入门/assets/image-20210715194413178.png" alt="image-20210715194413178"></p>
<p>在新增的线程组中，填写线程信息：</p>
<p><img src="@source/notes/microservices/02/Jmeter快速入门/assets/image-20210715195053807.png" alt="image-20210715195053807"></p>
<p>给线程组点鼠标右键，添加 http 取样器：</p>
<p><img src="@source/notes/microservices/02/Jmeter快速入门/assets/image-20210715195144130.png" alt="image-20210715195144130"></p>
<p>编写取样器内容：</p>
<p><img src="@source/notes/microservices/02/Jmeter快速入门/assets/image-20210715195410764.png" alt="image-20210715195410764"></p>
<p>添加监听报告：</p>
<p><img src="@source/notes/microservices/02/Jmeter快速入门/assets/image-20210715195844978.png" alt="image-20210715195844978"></p>
<p>添加监听结果树：</p>
<p><img src="@source/notes/microservices/02/Jmeter快速入门/assets/image-20210715200155537.png" alt="image-20210715200155537"></p>
<p>汇总报告结果：</p>
<p><img src="@source/notes/microservices/02/Jmeter快速入门/assets/image-20210715200243194.png" alt="image-20210715200243194"></p>
<p>结果树：</p>
<p><img src="@source/notes/microservices/02/Jmeter快速入门/assets/image-20210715200336526.png" alt="image-20210715200336526"></p>
</div></template>


