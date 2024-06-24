<template><div><img src="@source/notes/record/Git/assets/gitlogo.png"/>
<hr/>
<nav class="table-of-contents"><ul><li><router-link to="#_2-1-版本管理发展简史-维基百科">2.1 版本管理发展简史(维基百科)</router-link><ul><li><router-link to="#_2-1-1-svn-subversion">2.1.1 SVN(SubVersion)</router-link></li><li><router-link to="#_2-1-2-git">2.1.2 Git</router-link></li></ul></li><li><router-link to="#_4-1-git-的下载">4.1 git 的下载</router-link></li><li><router-link to="#_5-1-git-初始化">5.1 Git 初始化</router-link></li><li><router-link to="#_5-2-git-流程">5.2 git 流程</router-link><ul><li><router-link to="#_5-2-1-流程图">5.2.1 流程图</router-link></li><li><router-link to="#_5-2-2-概念即详解">5.2.2 概念即详解</router-link></li></ul></li><li><router-link to="#_6-1-初始化仓库">6.1 初始化仓库</router-link></li><li><router-link to="#_6-2-添加文件">6.2 添加文件</router-link></li><li><router-link to="#_6-3-提交文件至本地仓库">6.3 提交文件至本地仓库</router-link></li><li><router-link to="#_6-4-修改文件-与再次提交文件">6.4 修改文件,与再次提交文件</router-link></li><li><router-link to="#_6-5-文件状态讲解">6.5 文件状态讲解</router-link></li><li><router-link to="#_6-6-修改文件-不提交和上一个版本比较差异-diff">6.6 修改文件,不提交和上一个版本比较差异(diff)</router-link></li><li><router-link to="#_6-7-查看提交历史记录">6.7 查看提交历史记录</router-link></li><li><router-link to="#_6-9-文件删除">6.9 文件删除</router-link><ul><li><router-link to="#_6-9-2-从版本库删除">6.9.2 从版本库删除</router-link></li><li><router-link to="#_6-9-3-从版本库删除-但是不删除本地">6.9.3 从版本库删除,但是不删除本地</router-link></li></ul></li><li><router-link to="#_6-10-忽略提交">6.10 忽略提交</router-link></li><li><router-link to="#_7-1-分支的概念">7.1 分支的概念</router-link></li><li><router-link to="#_7-2-为何要使用分支">7.2 为何要使用分支</router-link></li><li><router-link to="#_7-3-创建分支">7.3 创建分支</router-link></li><li><router-link to="#_7-4-分支的查看切换">7.4 分支的查看切换</router-link><ul><li><router-link to="#_7-4-1-查看分支">7.4.1 查看分支</router-link></li><li><router-link to="#_7-4-2-切换分支">7.4.2 切换分支</router-link></li><li><router-link to="#_7-5-1-合并">7.5.1 合并</router-link></li><li><router-link to="#_7-5-2-删除分支">7.5.2 删除分支</router-link></li></ul></li><li><router-link to="#_8-1-标签的概念">8.1 标签的概念</router-link></li><li><router-link to="#_8-2-标签的创建-tag">8.2 标签的创建(tag)</router-link></li><li><router-link to="#_8-3-标签的切换与删除">8.3 标签的切换与删除</router-link></li><li><router-link to="#_9-0-局域网仓库">9.0 局域网仓库</router-link><ul><li><router-link to="#_9-0-1-本地相对路径-多个文件夹之间共享代码">9.0.1 本地相对路径,多个文件夹之间共享代码</router-link></li><li><router-link to="#_9-0-2-开启局域网共享代码">9.0.2 开启局域网共享代码</router-link></li></ul></li><li><router-link to="#_9-1-常用远程仓库托管服务">9.1 常用远程仓库托管服务</router-link></li><li><router-link to="#_9-2-码云账号注册">9.2 码云账号注册</router-link></li><li><router-link to="#_9-3-创建远程仓库">9.3 创建远程仓库</router-link></li><li><router-link to="#_9-4-把本地代码推送到远端">9.4 把本地代码推送到远端</router-link></li><li><router-link to="#_9-5-从远程仓库克隆代码">9.5 从远程仓库克隆代码</router-link></li><li><router-link to="#_9-6-代码的修改与提交-查看历史">9.6 代码的修改与提交,查看历史</router-link></li><li><router-link to="#_9-7-ssh-连接概述">9.7 ssh 连接概述</router-link></li><li><router-link to="#_9-8-ssh-密钥的生成">9.8 ssh 密钥的生成</router-link></li><li><router-link to="#_9-9-ssh-密钥配置">9.9 ssh 密钥配置</router-link></li><li><router-link to="#_9-10-ssh-方式克隆-提交代码">9.10 ssh 方式克隆/提交代码:</router-link></li><li><router-link to="#_9-11-远程仓库的其他操作">9.11. 远程仓库的其他操作</router-link></li><li><router-link to="#_9-12-利用-gitee-搭建个人主页">9.12 利用 gitee 搭建个人主页</router-link></li><li><router-link to="#_10-1-介绍">10.1 介绍</router-link></li><li><router-link to="#_11-1-查看远程">11.1 查看远程</router-link></li><li><router-link to="#_11-2-添加-移除远测仓库">11.2 添加/移除远测仓库</router-link></li><li><router-link to="#_11-3-从远程仓库获取代码">11.3 从远程仓库获取代码</router-link></li></ul></nav>
<h1 id="🎉git" tabindex="-1"><a class="header-anchor" href="#🎉git" aria-hidden="true">#</a> 🎉Git</h1>
<h1 id="_1-版本管理工具概念" tabindex="-1"><a class="header-anchor" href="#_1-版本管理工具概念" aria-hidden="true">#</a> 1.版本管理工具概念</h1>
<p>我在大学毕业写论文的时候的时候碰到过如下的现象</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;&lt;毕业论文第一版.doc>>
&lt;&lt;毕业论文第二版.doc>>
&lt;&lt;毕业论文第三版.doc>>
&lt;&lt;毕业论文最终版.doc>>
&lt;&lt;毕业论文最终版2.doc>>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类似的问题我曾经也碰到过很多,例如:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>领导让写文档,写好了,领导让修改,改好了,领导觉得第一版不错,改回来吧,此时内心一脸懵,第一版长啥样没存档啊
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>实际上,代码开发中也需要这样的软件来管理我们的代码. 例如我们经常会碰到如下的现象:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>改之前好好的,改完就报错了,也没怎么修改啊
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在这种情况下如果不能查看修改之前的代码,查找问题是非常困难的.</p>
<p>如果有一个软件能记录我们对文档的所有修改,所有版本,那么上面的问题讲迎刃而解.而这类软件我们一般叫做版本控制工具</p>
<p>版本管理工具一般具有如下特性:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1) 能够记录历史版本,回退历史版本
2) 团队开发,方便代码合并
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-版本管理工具介绍" tabindex="-1"><a class="header-anchor" href="#_2-版本管理工具介绍" aria-hidden="true">#</a> 2. 版本管理工具介绍</h1>
<p>现在比较流行的版本管理工具是 git ,但是实际上 git 是近几年才发展起来的,可能有一些老的项目,还在用一些老的软件,比如 svn</p>
<h2 id="_2-1-版本管理发展简史-维基百科" tabindex="-1"><a class="header-anchor" href="#_2-1-版本管理发展简史-维基百科" aria-hidden="true">#</a> 2.1 版本管理发展简史(维基百科)</h2>
<p><img src="@source/notes/record/Git/assets/1571983065236.png" alt="1571983065236"></p>
<h3 id="_2-1-1-svn-subversion" tabindex="-1"><a class="header-anchor" href="#_2-1-1-svn-subversion" aria-hidden="true">#</a> 2.1.1 SVN(SubVersion)</h3>
<p>工作流程</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>SVN是集中式版本控制系统，版本库是集中放在中央服务器的.
工作流程如下:
	1.从中央服务器远程仓库下载代码
	2.修改后将代码提交到中央服务器远程仓库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优缺点:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code> 优点: 简单,易操作
 缺点:所有代码必须放在中央服务器
  	   1.服务器一旦宕机无法提交代码,即容错性较差
       2.离线无法提交代码,无法及时记录我们的提交行为
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>svn 流程图</p>
<p><img src="@source/notes/record/Git/assets/svn.jpg" alt=""></p>
<h3 id="_2-1-2-git" tabindex="-1"><a class="header-anchor" href="#_2-1-2-git" aria-hidden="true">#</a> 2.1.2 Git</h3>
<p>工作流程</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Git是分布式版本控制系统（Distributed Version Control System，简称 DVCS），分为两种类型的仓库：
本地仓库和远程仓库
工作流程如下
    1．从远程仓库中克隆或拉取代码到本地仓库(clone/pull)
    2．从本地进行代码修改
    3．在提交前先将代码提交到暂存区
    4．提交到本地仓库。本地仓库中保存修改的各个历史版本
    5．修改完成后，需要和团队成员共享代码时，将代码push到远程仓库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/record/Git/assets/git.png" alt=""></p>
<p>总结:git 和 svn 的区别</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1. svn 是集中式版本控制工具,git 是分布式版本控制工具
2. svn 不支持离线提交,git 支持离线提交代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-git-发展简史" tabindex="-1"><a class="header-anchor" href="#_3-git-发展简史" aria-hidden="true">#</a> 3. Git 发展简史</h1>
<p>林纳斯·本纳第克特·托瓦兹（Linus Benedict Torvalds, 1969 年~ ）</p>
<p><img src="@source/notes/record/Git/assets/1571987252740.png" alt="1571987252740"></p>
<p>很多人都知道，Linus 在 1991 年创建了开源的 Linux，从此，Linux 系统不断发展，已经成为最大的服务器系统软件了。</p>
<p>Linus 虽然创建了 Linux，但 Linux 的壮大是靠全世界热心的志愿者参与的，这么多人在世界各地为 Linux 编写代码，那 Linux 的代码是如何管理的呢？</p>
<p>事实是，在 2002 年以前，世界各地的志愿者把源代码文件通过 diff 的方式发给 Linus，然后由 Linus 本人通过<strong>手工方式合并代码！</strong></p>
<p>你也许会想，为什么 Linus 不把 Linux 代码放到版本控制系统里呢？那个年代不是有 CVS、SVN 这些免费的版本控制系统吗？因为 Linus 坚定地反对 CVS 和 SVN，这些集中式的版本控制系统不但速度慢，<strong>而且必须联网才能使用</strong>。有一些商用的版本控制系统，虽然比 CVS、SVN 好用，但那是<strong>付费</strong>的，和 Linux 的开源精神不符。</p>
<p>不过，到了 2002 年，Linux 系统已经发展了十年了，代码库之大让 Linus 很难继续通过手工方式管理了，社区的弟兄们也对这种方式表达了强烈不满，于是 Linus 选择了一个商业的版本控制系统 BitKeeper，BitKeeper 的东家 BitMover 公司出于人道主义精神，授权 Linux 社区免费使用这个版本控制系统。而授权的前提是:Linux 社区的人不能开发具有相同功能的竞争产品!</p>
<p>另一方面,BitKeeper 不是开源的. 显然与 Linux 的开源精神不相符,所以 linux 社区的很多人抱怨,不愿意使用.</p>
<p>典型的就是 Andrew Tridgell (Samba 开发服务的创造者) 非常不满.偷偷违反了和 BitKeeper 的协议,反编译 BitKeeper 的源代码,开发了个爬虫,然后爬取信息被人发现了. BitKeeper 公司的领导非常不满意,然后开始发布消息说,(下个版本)不再为 Linux 提供免费的服务.</p>
<p>Linus 本人就出面协调(几周或者几个月),但是不管用, 没办法. 估计谈判的过程感觉到了憋屈--&quot;吃人嘴短,拿人手软&quot;</p>
<p>Linus 本人 花了 10 天的时间 Git 出来了,一个月之内，Linux 系统的源码已经由 Git 管理了！</p>
<p><img src="@source/notes/record/Git/assets/1571988966446.png" alt="Linus 采访记录"></p>
<p>Git 出来以后毕竟是一个人做的,开始并不好用(刚开始只能用勉强可以用来形容), 还是很多人抱怨,发展了很多年都没有干过其他软件.</p>
<p>直到 2008 年，GitHub 网站上线了，它为开源项目免费提供 Git 存储，无数开源项目开始迁移至 GitHub,从此 git 迎来了飞速发展,当下 git 已经成为了最流行的版本控制工具</p>
<h1 id="_4-git-的安装" tabindex="-1"><a class="header-anchor" href="#_4-git-的安装" aria-hidden="true">#</a> 4. Git 的安装</h1>
<h2 id="_4-1-git-的下载" tabindex="-1"><a class="header-anchor" href="#_4-1-git-的下载" aria-hidden="true">#</a> 4.1 git 的下载</h2>
<p>下载地址： https://git-scm.com/download</p>
<p><img src="@source/notes/record/Git/assets/1571990833074.png" alt="1571990833074"></p>
<p>附件</p>
<p><img src="@source/notes/record/Git/assets/1571991253594.png" alt="1571991253594"></p>
<hr/>
## 4.2 安装
<ol>
<li>
<p>按照附件的 顺序直接下一步傻瓜式安装即可</p>
</li>
<li>
<p>其中安装的过程中需要填写一个邮箱和用户名(任意即可)</p>
</li>
</ol>
<p><img src="@source/notes/record/Git/assets/1572001054551.png" alt="1572001054551"></p>
<ol start="3">
<li>
<p>$\color{red}{注意: 安装完毕请重启资源管理器,或者重启电脑!!!}$</p>
</li>
<li>
<p>更改语言</p>
</li>
</ol>
<p><img src="@source/notes/record/Git/assets/1571992521110.png" alt="1571992521110"></p>
<h1 id="_5-git-工作流程" tabindex="-1"><a class="header-anchor" href="#_5-git-工作流程" aria-hidden="true">#</a> 5. Git 工作流程</h1>
<h2 id="_5-1-git-初始化" tabindex="-1"><a class="header-anchor" href="#_5-1-git-初始化" aria-hidden="true">#</a> 5.1 Git 初始化</h2>
<p>我们先初始化一个本地仓</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1) 新建测试文件夹
2) 进入文件夹,然后右键创建版本库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/record/Git/assets/1571993852280.png" alt="1571993852280"></p>
<p>此时 我们看到</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1) 文件夹上多了一个绿色图标(如果没有请看本章节 5.3小节说明)
2) 文件夹内部生成了一个.git 隐藏文件夹(需要设置隐藏文件夹可见)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-2-git-流程" tabindex="-1"><a class="header-anchor" href="#_5-2-git-流程" aria-hidden="true">#</a> 5.2 git 流程</h2>
<h3 id="_5-2-1-流程图" tabindex="-1"><a class="header-anchor" href="#_5-2-1-流程图" aria-hidden="true">#</a> 5.2.1 流程图</h3>
<p><img src="@source/notes/record/Git/assets/git流程.png" alt=""></p>
<h3 id="_5-2-2-概念即详解" tabindex="-1"><a class="header-anchor" href="#_5-2-2-概念即详解" aria-hidden="true">#</a> 5.2.2 概念即详解</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>本地仓库：是在开发人员自己电脑上的Git仓库,存放我们的代码(.git 隐藏文件夹就是我们的本地仓库)
远程仓库：是在远程服务器上的Git仓库,存放代码(可以是github.com或者gitee.com 上的仓库,或者自己该公司的服务器)
工作区: 我们自己写代码(文档)的地方
暂存区: 在 本地仓库中的一个特殊的文件(index) 叫做暂存区,临时存储我们即将要提交的文件
------------
Clone：克隆，就是将远程仓库复制到本地仓库
Push：推送，就是将本地仓库代码上传到远程仓库
Pull：拉取，就是将远程仓库代码下载到本地仓库,并将代码 克隆到本地工作区
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/record/Git/assets/git流程_详解.png" alt=""></p>
<h1 id="_6-git-的基本使用-01-tortoisegit-操作本地仓库" tabindex="-1"><a class="header-anchor" href="#_6-git-的基本使用-01-tortoisegit-操作本地仓库" aria-hidden="true">#</a> 6.Git 的基本使用 01-TortoiseGit 操作本地仓库</h1>
<h2 id="_6-1-初始化仓库" tabindex="-1"><a class="header-anchor" href="#_6-1-初始化仓库" aria-hidden="true">#</a> 6.1 初始化仓库</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>方法一:
新建一个文件夹,进入文件夹内部操作
1)右键--> 在这里创建Git 版本库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/record/Git/assets/1572161580344.png" alt="1572161580344"></p>
<p>注意: 不要直接在桌面上操作,否则桌面就是一个仓库</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>方法二:
2) 右键-->Git GUI here
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/record/Git/assets/1572162906623.png" alt="1572162906623"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>方法三: 命令行模式
2) git init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/record/Git/assets/1572163015102.png" alt="1572163015102"></p>
<p>创建完毕仓库,我们发现,此时我们创建的文件夹下有一个.git 文件已经生成了</p>
<p>并且仓库文件夹上多了一个 绿色图标</p>
<p><img src="@source/notes/record/Git/assets/1572164583708.png" alt="1572164583708"></p>
<h2 id="_6-2-添加文件" tabindex="-1"><a class="header-anchor" href="#_6-2-添加文件" aria-hidden="true">#</a> 6.2 添加文件</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1)在仓库中新建一个文件
2)选中新建的文件-->右键--> TortoiseGit--> 添加
3)此时我们看到文件夹上多了一个 "加号"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/record/Git/assets/1572164475555.png" alt="1572164475555"></p>
<p><img src="@source/notes/record/Git/assets/1572165109016.png" alt="1572165109016"></p>
<h2 id="_6-3-提交文件至本地仓库" tabindex="-1"><a class="header-anchor" href="#_6-3-提交文件至本地仓库" aria-hidden="true">#</a> 6.3 提交文件至本地仓库</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1)选中文件
2) 右键--git提交
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/record/Git/assets/1572165471421.png" alt="1572165471421"></p>
<h2 id="_6-4-修改文件-与再次提交文件" tabindex="-1"><a class="header-anchor" href="#_6-4-修改文件-与再次提交文件" aria-hidden="true">#</a> 6.4 修改文件,与再次提交文件</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>当我们修改文件以后,文件上多了一个红色感叹号,表示我们上次提交后该文件被修改过
提交后文件图标又变成绿色
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/record/Git/assets/1572165676716.png" alt="1572165676716"></p>
<h2 id="_6-5-文件状态讲解" tabindex="-1"><a class="header-anchor" href="#_6-5-文件状态讲解" aria-hidden="true">#</a> 6.5 文件状态讲解</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Git工作目录下的文件存在两种状态：
1 untracked 未跟踪（未被纳入版本控制） :  比如新建的文件(此时文件夹上没有图标或者有一个"问号")
2 tracked 已跟踪（被纳入版本控制）
    2.1 Staged 已暂存状态            : 添加 但未提交状态(此时文件夹上有一个"加号")
	2.2 Unmodified 未修改状态        : 已提交(此时文件夹上有一个"对号")
	2.3 Modified 已修改状态          : 修改了,但是还没有提交 (此时文件夹上有一个"红色感叹号")
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/record/Git/assets/1569293793902.png" alt=""></p>
<p>这些文件的状态会随着我们执行 Git 的命令发生变化</p>
<p><img src="@source/notes/record/Git/assets/1566627767390.png" alt=""></p>
<h2 id="_6-6-修改文件-不提交和上一个版本比较差异-diff" tabindex="-1"><a class="header-anchor" href="#_6-6-修改文件-不提交和上一个版本比较差异-diff" aria-hidden="true">#</a> 6.6 修改文件,不提交和上一个版本比较差异(diff)</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>修改文件,此时不要提交
选中文件-->右键--> TortoiseGit--> 比较差异
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/record/Git/assets/1572167540734.png" alt="1572167540734"></p>
<h2 id="_6-7-查看提交历史记录" tabindex="-1"><a class="header-anchor" href="#_6-7-查看提交历史记录" aria-hidden="true">#</a> 6.7 查看提交历史记录</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>选中文件
右键--> TortoiseGit--> 显示日志
此时我们可以看到所有的历史提交记录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/record/Git/assets/1572167842481.png" alt="1572167842481"></p>
<p>##6.8 回退至历史版本</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>右键--> TortoiseGit--> 显示日志
选中某个版本--> 进行如下操作
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/record/Git/assets/1572171034508.png" alt="1572171034508"></p>
<h2 id="_6-9-文件删除" tabindex="-1"><a class="header-anchor" href="#_6-9-文件删除" aria-hidden="true">#</a> 6.9 文件删除</h2>
<p>###6.9.1 本地删除与恢复</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1) 直接选中文件删除的话,其实只是删除了本地工作区的文件,并没有删除 仓库中的文件
 此时时可以回退的, 比如我们进行如下操作
 1)文件删除
 2)右键--> TortoiseGit--> 还原
 此时我们发现文件又被恢复了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/record/Git/assets/1572169387835.png" alt="1572169387835"></p>
<h3 id="_6-9-2-从版本库删除" tabindex="-1"><a class="header-anchor" href="#_6-9-2-从版本库删除" aria-hidden="true">#</a> 6.9.2 从版本库删除</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>2) 我们如果真的想要将某个文件从服务器删除,需要进行如下操作
   1) 删除文件,和上面的操作一样
   2) 提交,此时服务文件已经删除了(历史版本还在,还是可以恢复)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-9-3-从版本库删除-但是不删除本地" tabindex="-1"><a class="header-anchor" href="#_6-9-3-从版本库删除-但是不删除本地" aria-hidden="true">#</a> 6.9.3 从版本库删除,但是不删除本地</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>我们可以如下操作,只删除服务器上的文件,但是本地文件并不删除
备注: 删除之后需要提交,才会真正的从服务器删除
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/record/Git/assets/1572171572963.png" alt="1572171572963"></p>
<h2 id="_6-10-忽略提交" tabindex="-1"><a class="header-anchor" href="#_6-10-忽略提交" aria-hidden="true">#</a> 6.10 忽略提交</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>有时候我们一些文件是不需要提交的比如说idea/eclipse 开发的代码自动生成的配置文件
如何配置不提交呢
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/record/Git/assets/1572172137494.png" alt="1572172137494"></p>
<p>此时我们的根目录下会生成一个.gitignore 文件</p>
<p>忽略文件如何阅读,常见格式</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token comment"># 所有以.a 结尾的文件讲被忽略(递归)</span>
<span class="token important">*.a</span>
<span class="token comment"># 不管其他规则怎样,强制不忽略  lib.a</span>
<span class="token tag">!lib.a</span>
<span class="token comment"># 只忽略 文件 TODO (注意这里是文件)</span>
/TODO
<span class="token comment"># 忽略 build文件夹下所有内容(递归) 这里是文件夹</span>
build/
<span class="token comment"># 忽略 doc 目录下以 *.txt 结尾的文件 (不递归)</span>
doc/<span class="token important">*.txt</span>
<span class="token comment"># 忽略 doc 目录下以 *.pdf 结尾的文件 (递归)</span>
doc/<span class="token important">**/*.pdf</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然理解了上述规则,我们也可以手动编辑该文件,而不用通过窗口化操作(如果不嫌麻烦)</p>
<h1 id="_7-git-的基本使用-02-tortoisegit-操作本地仓库-分支" tabindex="-1"><a class="header-anchor" href="#_7-git-的基本使用-02-tortoisegit-操作本地仓库-分支" aria-hidden="true">#</a> 7. Git 的基本使用 02-TortoiseGit 操作本地仓库(分支)</h1>
<h2 id="_7-1-分支的概念" tabindex="-1"><a class="header-anchor" href="#_7-1-分支的概念" aria-hidden="true">#</a> 7.1 分支的概念</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>几乎所有的版本控制系统都以某种形式支持分支。 使用分支意味着你可以把你的工作从开发主线上分离开来，避免影响开发主线。多线程开发,可以同时开启多个任务的开发,多个任务之间互不影响.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_7-2-为何要使用分支" tabindex="-1"><a class="header-anchor" href="#_7-2-为何要使用分支" aria-hidden="true">#</a> 7.2 为何要使用分支</h2>
<p>先看单线程开发</p>
<p><img src="@source/notes/record/Git/assets/1572173978185.png" alt="1572173978185"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>思考如下现象
    10.1 日 业务部门提出需求 : 明年 元旦3天做2个促销活动
	1) 12.31 号上线活动1,
	2) 1.4 号上线活动2 ,同时 要求撤销 活动1
    你所在 部门领导 为了保证能顺利完成,要求 11.15 号完成 上述连个功能的开发工作
此时作为开发人员:我要面临两个文件, 活动1 的代码,即要存在(12.31 要用)又要不存在(1.4 号要求删除) ,我们怎么做?
显然比较棘手,如果使用分支(可以理解为将代码复制一份)将很好解决
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/record/Git/assets/1572174740013.png" alt="1572174740013"></p>
<h2 id="_7-3-创建分支" tabindex="-1"><a class="header-anchor" href="#_7-3-创建分支" aria-hidden="true">#</a> 7.3 创建分支</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>到现在为止,我们一直使用的时主分支(master)
在主分支上操作创建分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/record/Git/assets/1572178189980.png" alt="1572178189980"></p>
<h2 id="_7-4-分支的查看切换" tabindex="-1"><a class="header-anchor" href="#_7-4-分支的查看切换" aria-hidden="true">#</a> 7.4 分支的查看切换</h2>
<h3 id="_7-4-1-查看分支" tabindex="-1"><a class="header-anchor" href="#_7-4-1-查看分支" aria-hidden="true">#</a> 7.4.1 查看分支</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>查看版本分支图,此时我们看到有两个分支
当然,我们可以创建多个分支
可以看到多个分支的图形
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/record/Git/assets/1572179420706.png" alt="1572179420706"></p>
<h3 id="_7-4-2-切换分支" tabindex="-1"><a class="header-anchor" href="#_7-4-2-切换分支" aria-hidden="true">#</a> 7.4.2 切换分支</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>右键--> 检出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/notes/record/Git/assets/1572180057481.png" alt="1572180057481"></p>
<p>##7.5 分支的合并与删除</p>
<h3 id="_7-5-1-合并" tabindex="-1"><a class="header-anchor" href="#_7-5-1-合并" aria-hidden="true">#</a> 7.5.1 合并</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>我们将代码切换到分支1,然后写属于需求1 的代码并提交
当我们把需求1 开发完毕如何把需求1 的代码合并到主分支呢?
-->1 切换到 主版本
-->2 右键 合并即可将需求1 写的代码合并至主分支
-----此时我们看到代码自动合并到了master分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/record/Git/assets/1572180623156.png" alt="1572180623156"></p>
<h3 id="_7-5-2-删除分支" tabindex="-1"><a class="header-anchor" href="#_7-5-2-删除分支" aria-hidden="true">#</a> 7.5.2 删除分支</h3>
<p><img src="@source/notes/record/Git/assets/1572183670465.png" alt="1572183670465"></p>
<p>5,冲突的处理
​ 5.1)冲突的概念</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>现象演示
	开发人员A 开发需求1,开发了一个工具类 MathUtil,里面第一行写了一个方法 add(int [] args)
 同时开发人员B 开发需求2,开发了一个工具类 MathUtil,里面第一行写了一个方法 add(int a int b)
他们在互相不知道对方需求的情况下同时提交了代码到自己的分支
   思考此时如果我们把需求1 和需求2 同时都合并到主分支上, 主分支的 工具类 MathUtil 的第一行应该使用谁的代码?
   此时主分支是不能智能判断第一行使用谁的代码,合并时会报错,我们叫做冲突.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/record/Git/assets/1572181403239.png" alt="1572181403239"></p>
<p>​ 5.2) 如何处理冲突</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>分析一下冲突的原因:
	开发人员之间彼此没有沟通导致的同一个时间节点修改了同一个地方的代码,合并是冲突
思考:
	我们能直接把某个开发人员开发的代码删除吗?
显然不能
	所以在处理冲突时,第一步应该时找开发另一个需求的人员沟通,之后才是处理冲突
-----
--> 选中冲突的文件(带黄色感叹号的文件都是冲突的文件,如果有多个需要逐一处理)
--> 右键--> 编辑冲突,
-->处理完毕后.标记已解决
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/record/Git/assets/1572182565594.png" alt="1572182565594"></p>
<p><img src="@source/notes/record/Git/assets/1572182727568.png" alt="1572182727568"></p>
<h1 id="_8-tag-标签" tabindex="-1"><a class="header-anchor" href="#_8-tag-标签" aria-hidden="true">#</a> 8.tag 标签</h1>
<h2 id="_8-1-标签的概念" tabindex="-1"><a class="header-anchor" href="#_8-1-标签的概念" aria-hidden="true">#</a> 8.1 标签的概念</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>如果你的项目达到一个重要的阶段，并希望永远记住那个特别的提交快照，你可以给它打上标签(tag)
比如说，我们想为我们的项目发布一个"1.0"版本。 我们给最新一次提交打上（HEAD）"v1.0"的标签。
标签可以理解为项目里程碑的一个标记,一旦打上了这个标记则,表示当前的代码将不允许提交
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-2-标签的创建-tag" tabindex="-1"><a class="header-anchor" href="#_8-2-标签的创建-tag" aria-hidden="true">#</a> 8.2 标签的创建(tag)</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>标签的创建和分支的创建操作几乎一样
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/notes/record/Git/assets/1572183849972.png" alt="1572183849972"></p>
<h2 id="_8-3-标签的切换与删除" tabindex="-1"><a class="header-anchor" href="#_8-3-标签的切换与删除" aria-hidden="true">#</a> 8.3 标签的切换与删除</h2>
<p><img src="@source/notes/record/Git/assets/1572184030612.png" alt="1572184030612"></p>
<p><img src="@source/notes/record/Git/assets/1572184109746.png" alt="1572184109746"></p>
<h1 id="_9-远程仓库" tabindex="-1"><a class="header-anchor" href="#_9-远程仓库" aria-hidden="true">#</a> 9. 远程仓库</h1>
<p>我们的代码不能总是放在本地,因为总是放在本地,一旦电脑出现故障,数据将丢失,怎么共享呢,这里我们需要一个服务器, 我们可以把代码放到服务器上,然后让别人下载,这样我峨嵋你既可以备份代码,也可以进行团队协作开发</p>
<h2 id="_9-0-局域网仓库" tabindex="-1"><a class="header-anchor" href="#_9-0-局域网仓库" aria-hidden="true">#</a> 9.0 局域网仓库</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>实际上我们可以搭建一个单间的局域网服务器共享我们的代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_9-0-1-本地相对路径-多个文件夹之间共享代码" tabindex="-1"><a class="header-anchor" href="#_9-0-1-本地相对路径-多个文件夹之间共享代码" aria-hidden="true">#</a> 9.0.1 本地相对路径,多个文件夹之间共享代码</h3>
<p><img src="@source/notes/record/Git/assets/1572535798760.png" alt="1572535798760"></p>
<h3 id="_9-0-2-开启局域网共享代码" tabindex="-1"><a class="header-anchor" href="#_9-0-2-开启局域网共享代码" aria-hidden="true">#</a> 9.0.2 开启局域网共享代码</h3>
<p><img src="@source/notes/record/Git/assets/1572535921581.png" alt="1572535921581"></p>
<p><img src="@source/notes/record/Git/assets/1572536029899.png" alt="1572536029899"></p>
<p>局域网这种共享是没有安全控制的,都可以访问,如果想要搭建一个可以控制权限的服务器需要借助第三方软件</p>
<p>gitblit,可以自行搜索搭建</p>
<h2 id="_9-1-常用远程仓库托管服务" tabindex="-1"><a class="header-anchor" href="#_9-1-常用远程仓库托管服务" aria-hidden="true">#</a> 9.1 常用远程仓库托管服务</h2>
<p>除了自己搭建服务器,其实我们可以使用一些免费的远程仓库,远程仓库有很多,常见的免费互联网远程仓库托管服务如下:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>www.github.com
www.gitee.com
www.gitlab.com

github  是一个基于git实现在线代码托管的仓库，向互联网开放，企业版要收钱。
gitee    即码云，是 oschina 免费给企业用的，不用自己搭建环境。
gitlab   类似 github，一般用于在企业内搭建git私服，要自己搭环境。

GitHub(gitee)、GitLab 不同点：
1、GitHub如果使用私有仓库是需要付费的，(2019年开始私有仓库也是免费的但是只能3个人协同开发,想要更多需要收费)，GitLab可以在上面搭建私人的免费仓库。
2、GitLab让开发团队对他们的代码仓库拥有更多的控制，相对于GitHub，它有不少的特色：
    (1)允许免费设置仓库权限
    (2)允许用户选择分享一个project的部分代码
    (3)允许用户设置project的获取权限，进一步提升安全性
    (4)可以设置获取到团队整体的改进进度
    (5)通过innersourcing让不在权限范围内的人访问不到该资源

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>鉴于国内用户可能网络不好,这里我们使用 gitee(码云) 来讲解我们的课程,其他可自行找资料学习非常类似</p>
<h2 id="_9-2-码云账号注册" tabindex="-1"><a class="header-anchor" href="#_9-2-码云账号注册" aria-hidden="true">#</a> 9.2 码云账号注册</h2>
<p><img src="@source/notes/record/Git/assets/1572267659865.png" alt="1572267659865"></p>
<p>填写邮箱发送验证码,然后可以注册账号,主页如下</p>
<p><img src="@source/notes/record/Git/assets/1572268091948.png" alt="1572268091948"></p>
<h2 id="_9-3-创建远程仓库" tabindex="-1"><a class="header-anchor" href="#_9-3-创建远程仓库" aria-hidden="true">#</a> 9.3 创建远程仓库</h2>
<p><img src="@source/notes/record/Git/assets/1572274044100.png" alt="1572274044100"></p>
<p><img src="@source/notes/record/Git/assets/224637.png" alt=""></p>
<p>各个类型仓库之间的区别</p>
<p><img src="@source/notes/record/Git/assets/1572274100802.png" alt="1572274100802"></p>
<p><img src="@source/notes/record/Git/assets/1572274406371.png" alt="1572274406371"></p>
<h2 id="_9-4-把本地代码推送到远端" tabindex="-1"><a class="header-anchor" href="#_9-4-把本地代码推送到远端" aria-hidden="true">#</a> 9.4 把本地代码推送到远端</h2>
<p><img src="@source/notes/record/Git/assets/1572275202869.png" alt="1572275202869"></p>
<p><img src="@source/notes/record/Git/assets/1572275492670.png" alt="1572275492670"></p>
<p><img src="@source/notes/record/Git/assets/1572275546739.png" alt="1572275546739"></p>
<p>此时我们刷新仓库发现代码已经存在了</p>
<p>我们填写的用户信息,会被保存在本地,下次提交无需填写用户名和密码</p>
<p><img src="@source/notes/record/Git/assets/1572277483698.png" alt="1572277483698"></p>
<h2 id="_9-5-从远程仓库克隆代码" tabindex="-1"><a class="header-anchor" href="#_9-5-从远程仓库克隆代码" aria-hidden="true">#</a> 9.5 从远程仓库克隆代码</h2>
<p>我们同样可以从库下载代码,</p>
<p>新建一个文件夹 repo2 ,进入然后进行如下操作</p>
<p><img src="@source/notes/record/Git/assets/1572275958701.png" alt="1572275958701"></p>
<p>此时我们发现我们的代码已经被下载下来了</p>
<h2 id="_9-6-代码的修改与提交-查看历史" tabindex="-1"><a class="header-anchor" href="#_9-6-代码的修改与提交-查看历史" aria-hidden="true">#</a> 9.6 代码的修改与提交,查看历史</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1)此时我们修改代码就不能仅仅是提交到本地了,提交完毕应该推送到远端服务器
2)此时如果别人从远端仓库下载最新的代码其实是可以看到我们的代码修改记录的
   git -->显示日志
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/record/Git/assets/1572277139243.png" alt="1572277139243"></p>
<h2 id="_9-7-ssh-连接概述" tabindex="-1"><a class="header-anchor" href="#_9-7-ssh-连接概述" aria-hidden="true">#</a> 9.7 ssh 连接概述</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>实际上git 不仅仅支持用户名密码方式的配置,可以有另外一种相对更加安全的配置即ssh 方式配置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ssh 方式的底层原理</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>ssh连接地城是RAS加密算法,又称非对称加密,是一种现在公认的最安全的加密方式
数学基础好的同学可以研究一下
https://www.cnblogs.com/cjm123/p/8243424.html

公钥私钥加密可以看作古代 的"虎符" , 我们本地电脑有一份,远程服务器有一份, 只要 "虎符" 核对通过 表示身份无误,可以执行提交等操作,无需输入用户名密码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-8-ssh-密钥的生成" tabindex="-1"><a class="header-anchor" href="#_9-8-ssh-密钥的生成" aria-hidden="true">#</a> 9.8 ssh 密钥的生成</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>#生成公钥私钥
 ssh-keygen -t rsa
 一直回车即可
 会默认用户目录 .ssh 目录生成一个默认的id_rsa文件 和id_rsa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/record/Git/assets/1572520139221.png" alt="1572520139221"></p>
<p><img src="@source/notes/record/Git/assets/1572520293700.png" alt="1572520293700"></p>
<h2 id="_9-9-ssh-密钥配置" tabindex="-1"><a class="header-anchor" href="#_9-9-ssh-密钥配置" aria-hidden="true">#</a> 9.9 ssh 密钥配置</h2>
<p><img src="@source/notes/record/Git/assets/1572520396806.png" alt="1572520396806"></p>
<h2 id="_9-10-ssh-方式克隆-提交代码" tabindex="-1"><a class="header-anchor" href="#_9-10-ssh-方式克隆-提交代码" aria-hidden="true">#</a> 9.10 ssh 方式克隆/提交代码:</h2>
<p>配置完成之后我们克隆我们之前的项目</p>
<p><img src="@source/notes/record/Git/assets/1572522118610.png" alt="1572522118610"></p>
<p>修改后直接提交推送即可成功,,git 会自动去.ssh 目录找我们的私钥进行匹配</p>
<h2 id="_9-11-远程仓库的其他操作" tabindex="-1"><a class="header-anchor" href="#_9-11-远程仓库的其他操作" aria-hidden="true">#</a> 9.11. 远程仓库的其他操作</h2>
<p>概念</p>
<p><img src="@source/notes/record/Git/assets/1572522822946.png" alt="1572522822946"></p>
<p>当我们从 gitee 上查看别人的项目的时候我们可能会看到上图中的按钮</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>指数:
	是gitee 网站根据当前项目的各项指标计算出来的一个值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/record/Git/assets/1572523045267.png" alt="1572523045267"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Star:
	点赞, 注意这里的并不像朋友圈那样容易获得点赞,圈内人还是很克制的
Watch:
   如果你watch 了某个开源项目,那么这个项目后续所有的改动你将收到通知
Fork :
	将别人的代码克隆到你自己的仓库
	作用一: 如果担心某个优秀的项目别人突然有一天不开源了,你可以fork到自己的仓库
    作用二: 修改别人的代码
	  以linux 为例,你其实不是linux 社区的开发人员,但是你 又想为linux 开发做贡献(维护代码)
	   你并没有权限,怎们办?
	   你可以先把linux 开源的代码 fork 到你自己的仓库,此时你就可以操作自己的仓库进行修改代码了
	   如何让别人合并你修改好的代码呢?
	    我们注意项目的上方有一个 " Pull Request" 这个按钮的意思是 "请求求别人合并你修改的代码"
	    当我们发起一个 Pull Request 时 , 项目的拥有者将收到 Pull Request请求,然后将根据你提交代码的质量决定是否合并
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>项目操作</p>
<p>1)我们可以删除修改我们自己仓库的基本信息</p>
<ol start="2">
<li>我们可以邀请其他人成为项目的开发人员或者管理人员</li>
</ol>
<p><img src="@source/notes/record/Git/assets/1572523819666.png" alt="1572523819666"></p>
<p>我们可以删除修改我们自己仓库的基本信息</p>
<p><img src="@source/notes/record/Git/assets/1572523928774.png" alt="1572523928774"></p>
<p><img src="@source/notes/record/Git/assets/1572523968992.png" alt="1572523968992"></p>
<h2 id="_9-12-利用-gitee-搭建个人主页" tabindex="-1"><a class="header-anchor" href="#_9-12-利用-gitee-搭建个人主页" aria-hidden="true">#</a> 9.12 利用 gitee 搭建个人主页</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>1)将静态资源上传至仓库
2) 选择服务 pages 即可部署
注意 1)必须有个index.html 文件
注意 2) 只能搭建静态网站,动态网站请租赁服务器搭建提供服务
注意 3) gitee 要求必须绑定手机号

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/record/Git/assets/1572525575923.png" alt="1572525575923"></p>
<p>点击开启后 gitee 会自动生成一个域名</p>
<p><img src="@source/notes/record/Git/assets/1572526097257.png" alt="1572526097257"></p>
<p>直接访问即可</p>
<p>此时我们已经在 git 上部署了一个静态的网站</p>
<p><img src="@source/notes/record/Git/assets/1572526136074.png" alt="1572526136074"></p>
<h1 id="_10-命令行-git-基本操作" tabindex="-1"><a class="header-anchor" href="#_10-命令行-git-基本操作" aria-hidden="true">#</a> 10.命令行-- git 基本操作</h1>
<h2 id="_10-1-介绍" tabindex="-1"><a class="header-anchor" href="#_10-1-介绍" aria-hidden="true">#</a> 10.1 介绍</h2>
<p>​ 上述我们的操作 使用的 是客户端 TortoiseGit 操作的 git ,实际上底层依旧是使用的命令行帮我们执行, 在早期 git 并没有窗口化工具,开发人员只能使用命令行模式</p>
<p>实际上,如果你掌握并熟练使用了命令行模式操作 git 的话,你会发现某些操作命令行比窗口化操作要简单</p>
<p>所有你在工作中会发现高深的技术人员可能会喜欢命令行模式提交 git</p>
<p>##10.2 环境配置</p>
<p>当安装 Git 后首先要做的事情是设置用户名称和 email 地址。这是非常重要的，因为每次 Git 提交都会使用该用户信息</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#设置用户信息</span>
   <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name “itcast”
   <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email “itcast@itcast.cn”
<span class="token comment">#查看配置信息</span>
   <span class="token function">git</span> config <span class="token parameter variable">--list</span>
   <span class="token function">git</span> config user.name
<span class="token comment">#通过上面的命令设置的信息会保存在~/.gitconfig文件中</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>##10.3 初始化本地仓库 init</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 初始化仓库带工作区</span>
<span class="token function">git</span> init
<span class="token comment"># 初始化仓库不带工作区</span>
<span class="token function">git</span> init <span class="token parameter variable">--bare</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>##10.4 克隆 clone</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 从远程仓库克隆</span>
<span class="token function">git</span> clone 远程Git仓库地址
例如: <span class="token function">git</span> clone https://gitee.com/itcast/gittest.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>##10.5 查看状态 status</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 查看状态</span>
<span class="token function">git</span> status
<span class="token comment">#查看状态 使输出信息更加简洁</span>
<span class="token function">git</span> status –s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>##10.6 add</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 将未跟踪的文件加入暂存区</span>
<span class="token function">git</span> <span class="token function">add</span>  <span class="token operator">&lt;</span>文件名<span class="token operator">></span>
<span class="token comment"># 将暂存区的文件取消暂存 (取消 add )</span>
<span class="token function">git</span> reset  <span class="token operator">&lt;</span>文件名<span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>##10.7 commit</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># git commit 将暂存区的文件修改提交到本地仓库</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"日志信息"</span>  <span class="token operator">&lt;</span>文件名<span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>##10.8 删除 rm</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 从本地工作区 删除文件</span>
<span class="token function">git</span> <span class="token function">rm</span> <span class="token operator">&lt;</span>文件名<span class="token operator">></span>
<span class="token comment"># 如果本工作区库误删, 想要回退</span>
<span class="token function">git</span> checkout <span class="token function">head</span> <span class="token operator">&lt;</span>文件名<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_11-命令行-git-远程仓库操作" tabindex="-1"><a class="header-anchor" href="#_11-命令行-git-远程仓库操作" aria-hidden="true">#</a> 11. 命令行--git 远程仓库操作</h1>
<h2 id="_11-1-查看远程" tabindex="-1"><a class="header-anchor" href="#_11-1-查看远程" aria-hidden="true">#</a> 11.1 查看远程</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 查看远程  列出指定的每一个远程服务器的简写</span>
<span class="token function">git</span> remote
<span class="token comment"># 查看远程 , 列出 简称和地址</span>
<span class="token function">git</span> remote  <span class="token parameter variable">-v</span>
<span class="token comment"># 查看远程仓库详细地址</span>
<span class="token function">git</span> remote show  <span class="token operator">&lt;</span>仓库简称<span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-2-添加-移除远测仓库" tabindex="-1"><a class="header-anchor" href="#_11-2-添加-移除远测仓库" aria-hidden="true">#</a> 11.2 添加/移除远测仓库</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 添加远程仓库</span>
<span class="token function">git</span> remote <span class="token function">add</span> <span class="token operator">&lt;</span>shortname<span class="token operator">></span> <span class="token operator">&lt;</span>url<span class="token operator">></span>
<span class="token comment"># 移除远程仓库和本地仓库的关系(只是从本地移除远程仓库的关联关系，并不会真正影响到远程仓库)</span>
<span class="token function">git</span> remote <span class="token function">rm</span> <span class="token operator">&lt;</span>shortname<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-3-从远程仓库获取代码" tabindex="-1"><a class="header-anchor" href="#_11-3-从远程仓库获取代码" aria-hidden="true">#</a> 11.3 从远程仓库获取代码</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 从远程仓库克隆</span>
<span class="token function">git</span> clone <span class="token operator">&lt;</span>url<span class="token operator">></span>
<span class="token comment"># 从远程仓库拉取 (拉取到.git 目录,不会合并到工作区,工作区发生变化)</span>
<span class="token function">git</span> fetch  <span class="token operator">&lt;</span>shortname<span class="token operator">></span>  <span class="token operator">&lt;</span>分支名称<span class="token operator">></span>
<span class="token comment"># 手动合并  把某个版本的某个分支合并到当前工作区</span>
<span class="token function">git</span> merge <span class="token operator">&lt;</span>shortname<span class="token operator">></span>/<span class="token operator">&lt;</span>分支名称<span class="token operator">></span>
<span class="token comment"># 从远程仓库拉取 (拉取到.git 目录,合并到工作区,工作区不发生变化) = fetch+merge</span>
<span class="token function">git</span> pull  <span class="token operator">&lt;</span>shortname<span class="token operator">></span>  <span class="token operator">&lt;</span>分支名称<span class="token operator">></span>
<span class="token function">git</span> pull  <span class="token operator">&lt;</span>shortname<span class="token operator">></span>  <span class="token operator">&lt;</span>分支名称<span class="token operator">></span>  --allow-unrelated-histories  <span class="token comment">#  强制拉取合并</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：如果当前本地仓库不是从远程仓库克隆，而是本地创建的仓库，并且仓库中存在文件，此时再从远程仓库拉取文件的时候会报错（fatal: refusing to merge unrelated histories ），解决此问题可以在 git pull 命令后加入参数--allow-unrelated-histories (如上 命令)</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 将本地仓库推送至远程仓库的某个分支</span>
<span class="token function">git</span> push <span class="token punctuation">[</span>remote-name<span class="token punctuation">]</span> <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_12-命令行-分支" tabindex="-1"><a class="header-anchor" href="#_12-命令行-分支" aria-hidden="true">#</a> 12. 命令行-- 分支</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 默认 分支名称为 master</span>
<span class="token comment"># 列出所有本地分支</span>
<span class="token function">git</span> branch
<span class="token comment"># 列出所有远程分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-r</span>
<span class="token comment"># 列出所有本地分支和远程分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-a</span>
<span class="token comment"># 创建分支</span>
<span class="token function">git</span> branch <span class="token operator">&lt;</span>分支名<span class="token operator">></span>
<span class="token comment"># 切换分支</span>
<span class="token function">git</span> checkout <span class="token operator">&lt;</span>分支名<span class="token operator">></span>
<span class="token comment"># 删除分支(如果分支已经修改过,则不允许删除)</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span>  <span class="token operator">&lt;</span>分支名<span class="token operator">></span>
<span class="token comment"># 强制删除分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-D</span>  <span class="token operator">&lt;</span>分支名<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 提交分支至远程仓库</span>
<span class="token function">git</span> push <span class="token operator">&lt;</span>仓库简称<span class="token operator">></span> <span class="token operator">&lt;</span>分支名称<span class="token operator">></span>
<span class="token comment"># 合并分支 将其他分支合并至当前工作区</span>
<span class="token function">git</span> merge <span class="token operator">&lt;</span>分支名称<span class="token operator">></span>
<span class="token comment"># 删除远程仓库分支</span>
<span class="token function">git</span> push origin –d branchName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_13-命令行-tag" tabindex="-1"><a class="header-anchor" href="#_13-命令行-tag" aria-hidden="true">#</a> 13 . 命令行 --tag</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 列出所有tag</span>
<span class="token function">git</span> tag
<span class="token comment"># 查看tag详细信息</span>
<span class="token function">git</span> show <span class="token punctuation">[</span>tagName<span class="token punctuation">]</span>
<span class="token comment"># 新建一个tag</span>
<span class="token function">git</span> tag <span class="token punctuation">[</span>tagName<span class="token punctuation">]</span>
<span class="token comment"># 提交指定tag</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>仓库简称<span class="token punctuation">]</span> <span class="token punctuation">[</span>tagName<span class="token punctuation">]</span>
<span class="token comment"># 新建一个分支，指向某个tag</span>
$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>
<span class="token comment"># 删除本地tag</span>
$ <span class="token function">git</span> tag <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>
<span class="token comment"># 删除远程tag (注意 空格)</span>
$ <span class="token function">git</span> push origin :refs/tags/<span class="token punctuation">[</span>tag<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_14-案例" tabindex="-1"><a class="header-anchor" href="#_14-案例" aria-hidden="true">#</a> 14. 案例</h1>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>企业中我们是如何开发的
1) 入职第一天,管理人员分配/git账号密码
2) 开发人员下载代码即文档/ 根据文档将环境搭建成功
3) 团队一般会给你讲讲项目相关的支持
----
4) 你接到第一个需求(或者某个功能,一般要经过沟通,分析,设计...等过程)
5) 创建feature分支(一般一个需求对应一个feature,命名格式上标注该需求的id)
6) 开发需求,本地测试,提交代码到当前需求对应的feature分支,
	一般来讲为了避免将测试代码提交,需要提交前,检查如下步骤
	6.1) 是否多提交了某个文件,比如测试文件
	6.2) 是否漏提交文件
	6.3) 打开每一个应该提交的文件,判断是否多提交了一行代码,是否少提交了一行代码,是否删除了本应该存在的代码
	检查完毕提交代码
7) 合并分支至test分支-- 测试人员会在test分支中测试
8) 测试人员测试bug ,开发者在feature分支上继续修改,提交
9) 测试人员测试通过 ,test分支会被测试人员合并到develop开发分支,再次测试
10)develop分支最终会被合并到master主分支

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>`</p>
</div></template>


