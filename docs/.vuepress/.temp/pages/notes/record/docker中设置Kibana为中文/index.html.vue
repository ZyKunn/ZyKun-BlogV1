<template><div><h1 id="docker-中设置-kibana-为中文" tabindex="-1"><a class="header-anchor" href="#docker-中设置-kibana-为中文" aria-hidden="true">#</a> docker 中设置 Kibana 为中文</h1>
<hr/>
<nav class="table-of-contents"><ul><li><router-link to="#_1-1-查看-kibana-容器-id">1.1 查看 Kibana 容器 id</router-link></li><li><router-link to="#_1-2-进入容器">1.2 进入容器</router-link></li><li><router-link to="#_1-3-进入-config-目录下">1.3 进入 config 目录下</router-link></li><li><router-link to="#_1-4-编辑-kibana-yml-文件">1.4 编辑 kibana.yml 文件</router-link></li><li><router-link to="#_1-5-添加一行配置即可">1.5 添加一行配置即可</router-link></li><li><router-link to="#_1-6-退出容器">1.6 退出容器</router-link></li><li><router-link to="#_1-7-重启-kibana-需要-1-分钟-别着急">1.7 重启 Kibana（需要 1 分钟 别着急）</router-link></li></ul></nav>
<blockquote>
<p>Kibana 默认安装的是英文版的，6.7 以后系统开始支持中文了，修改语言只需要添加一行配置即可.</p>
</blockquote>
<h2 id="_1-1-查看-kibana-容器-id" tabindex="-1"><a class="header-anchor" href="#_1-1-查看-kibana-容器-id" aria-hidden="true">#</a> 1.1 查看 Kibana 容器 id</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>docker ps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_1-2-进入容器" tabindex="-1"><a class="header-anchor" href="#_1-2-进入容器" aria-hidden="true">#</a> 1.2 进入容器</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>docker exec <span class="token operator">-</span>it <span class="token class-name">Kibana</span>容器id bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_1-3-进入-config-目录下" tabindex="-1"><a class="header-anchor" href="#_1-3-进入-config-目录下" aria-hidden="true">#</a> 1.3 进入 config 目录下</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>cd config<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_1-4-编辑-kibana-yml-文件" tabindex="-1"><a class="header-anchor" href="#_1-4-编辑-kibana-yml-文件" aria-hidden="true">#</a> 1.4 编辑 kibana.yml 文件</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>vi kibana<span class="token punctuation">.</span>yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_1-5-添加一行配置即可" tabindex="-1"><a class="header-anchor" href="#_1-5-添加一行配置即可" aria-hidden="true">#</a> 1.5 添加一行配置即可</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>i18n<span class="token punctuation">.</span>locale<span class="token operator">:</span> <span class="token string">"zh-CN"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/notes/record/docker中设置Kibana为中文/assets/image-20230604155415826.png" alt="image-20230604155415826"></p>
<h2 id="_1-6-退出容器" tabindex="-1"><a class="header-anchor" href="#_1-6-退出容器" aria-hidden="true">#</a> 1.6 退出容器</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_1-7-重启-kibana-需要-1-分钟-别着急" tabindex="-1"><a class="header-anchor" href="#_1-7-重启-kibana-需要-1-分钟-别着急" aria-hidden="true">#</a> 1.7 重启 Kibana（需要 1 分钟 别着急）</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>docker restart <span class="token class-name">Kibana</span>容器id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/notes/record/docker中设置Kibana为中文/assets/image-20230604155444370.png" alt="image-20230604155444370">
ok</p>
</div></template>


