<template><div><h1 id="🤠linux-配置-java-环境" tabindex="-1"><a class="header-anchor" href="#🤠linux-配置-java-环境" aria-hidden="true">#</a> 🤠Linux 配置 Java 环境</h1>
<hr/>
<nav class="table-of-contents"><ul><li><router-link to="#_1-找到具体的-jdk">1 .找到具体的 jdk</router-link></li><li><router-link to="#_2-然后分别一个一个删除">2.然后分别一个一个删除</router-link></li><li><router-link to="#_3-验证是否删除成功">3.验证是否删除成功</router-link></li></ul></nav>
<h1 id="查看系统是否有-java-环境" tabindex="-1"><a class="header-anchor" href="#查看系统是否有-java-环境" aria-hidden="true">#</a> 查看系统是否有 java 环境</h1>
<p>输入指令<code v-pre>java -version</code>回车即可
<img src="@source/notes/record/Linux配置Java环境/assets/1683901583468.png" alt="1683901583468">
如图表示 Linux 系统有自带的 jdk，但是这并不是我们想要的，所以得卸载</p>
<h1 id="卸载系统自带的-jdk" tabindex="-1"><a class="header-anchor" href="#卸载系统自带的-jdk" aria-hidden="true">#</a> 卸载系统自带的 jdk</h1>
<h2 id="_1-找到具体的-jdk" tabindex="-1"><a class="header-anchor" href="#_1-找到具体的-jdk" aria-hidden="true">#</a> 1 .找到具体的 jdk</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> jdk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/notes/record/Linux配置Java环境/assets/1683901599680.png" alt="1683901599680"></p>
<h2 id="_2-然后分别一个一个删除" tabindex="-1"><a class="header-anchor" href="#_2-然后分别一个一个删除" aria-hidden="true">#</a> 2.然后分别一个一个删除</h2>
<p>指令 <code v-pre>rpm -e --nodeps + jdk名字</code>表示强制删除该 jdk，如图
<img src="@source/notes/record/Linux配置Java环境/assets/1683901632085.png" alt="1683901632085"></p>
<h2 id="_3-验证是否删除成功" tabindex="-1"><a class="header-anchor" href="#_3-验证是否删除成功" aria-hidden="true">#</a> 3.验证是否删除成功</h2>
<p>输入指令 <code v-pre>java -version</code>
<img src="@source/notes/record/Linux配置Java环境/assets/1683901661809.png" alt="1683901661809">
表示删除成功</p>
<h1 id="_3、创建一个文件夹用于存放-java-的压缩包" tabindex="-1"><a class="header-anchor" href="#_3、创建一个文件夹用于存放-java-的压缩包" aria-hidden="true">#</a> 3、创建一个文件夹用于存放 java 的压缩包</h1>
<p>一般放在 <code v-pre>/usr/local</code> 下</p>
<p><code v-pre>cd</code> 到该目录
<code v-pre>ls</code> 查看目录下的文件
<code v-pre>mkdir java</code> 创建 java 文件夹
<code v-pre>ls</code> 查看目录下的文件
<img src="@source/notes/record/Linux配置Java环境/assets/1683901680809.png" alt="1683901680809"></p>
<h1 id="_4、包下载好的-jdk-拖到-java-文件夹" tabindex="-1"><a class="header-anchor" href="#_4、包下载好的-jdk-拖到-java-文件夹" aria-hidden="true">#</a> 4、包下载好的 jdk 拖到 java 文件夹</h1>
<p>jdk 下载地址：
链接：https://pan.baidu.com/s/18tMOeOLfP-jSOHOa7ME6xA
提取码：pksq
<img src="@source/notes/record/Linux配置Java环境/assets/1683901706362.png" alt="1683901706362"></p>
<h1 id="_5、安装-jdk" tabindex="-1"><a class="header-anchor" href="#_5、安装-jdk" aria-hidden="true">#</a> 5、安装 jdk</h1>
<p>指令 <code v-pre>tar -zxvf jdk-8u221-linux-x64.tar.gz</code> 表示解压我对应的 jdk 版本
<img src="@source/notes/record/Linux配置Java环境/assets/1683901719576.png" alt="1683901719576">
<img src="@source/notes/record/Linux配置Java环境/assets/1683901737955.png" alt="1683901737955"></p>
<h1 id="_6、配置环境变量" tabindex="-1"><a class="header-anchor" href="#_6、配置环境变量" aria-hidden="true">#</a> 6、配置环境变量</h1>
<p>输入指令 <code v-pre>vi /etc/profile</code> 打开配置文件</p>
<p>点击 i 键 进入编辑模式，如下<img src="@source/notes/record/Linux配置Java环境/assets/1683901760338.png" alt="1683901760338">
在末尾追加</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/local/java/jdk1.8.0_221
<span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>%JAVA_HOME%/lib:%JAVA_HOME%/jre/lib
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token variable">$JAVA_HOME</span>/jre/bin
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span> CLASSPATH JAVA_HOME
<span class="token number">1234</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后 按 Esc 键退出编辑模式</p>
<p>最后<code v-pre>:wq</code> 保存编辑并退出（注意有“:”）</p>
<h1 id="_7、让配置生效" tabindex="-1"><a class="header-anchor" href="#_7、让配置生效" aria-hidden="true">#</a> 7、让配置生效</h1>
<p>输入指令<code v-pre>source /etc/profile</code>即可
<img src="@source/notes/record/Linux配置Java环境/assets/1683901785856.png" alt="1683901785856"></p>
<h1 id="_8、验证是否配置成功" tabindex="-1"><a class="header-anchor" href="#_8、验证是否配置成功" aria-hidden="true">#</a> 8、验证是否配置成功</h1>
<p>输入指令 <code v-pre>java -version</code>，出现如下图表示配置成功
<img src="@source/notes/record/Linux配置Java环境/assets/1683901800921.png" alt="1683901800921"></p>
<h1 id="关闭防火墙命令" tabindex="-1"><a class="header-anchor" href="#关闭防火墙命令" aria-hidden="true">#</a> 关闭防火墙命令</h1>
<p>应用可能需要用到各种端口，逐一去修改防火墙设置。非常麻烦，因此建议大家直接关闭防火墙！</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 关闭</span>
systemctl stop firewalld
<span class="token comment"># 禁止开机启动防火墙</span>
systemctl disable firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


