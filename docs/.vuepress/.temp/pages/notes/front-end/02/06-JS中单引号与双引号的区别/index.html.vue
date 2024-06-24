<template><div><h1 id="_06-js-单引号与双引号的区别" tabindex="-1"><a class="header-anchor" href="#_06-js-单引号与双引号的区别" aria-hidden="true">#</a> 06 - JS 单引号与双引号的区别！ 🌼</h1>
<p>首先要说明，在 JS 中单引号与双引号可以同时使用，但是要有规则。</p>
<p><code v-pre>一:</code>外面用了双引号，里面就不可以在用双引号了；外面用了单引号，里面也就不可以用单引号了。</p>
<p><code v-pre>==:</code>二`不同类型引号之间可以嵌套，最多两层（用转义可以套多层，但是可读性差，不建议这么用！）；比如单引号中套双引号，或者双引号中套单引号。</p>
<p><code v-pre>三:</code>单引号转义为'；双引号转义为&quot;；</p>
<p><code v-pre>四:</code>单引号与双引号之间的字符串是可以连接的；例如：'a'+&quot;b&quot;+&quot;c&quot;+'d' = &quot;abcd&quot;</p>
<p><code v-pre>五:</code> <code v-pre>&lt;div class='con&quot;+&quot;tent'&gt;&lt;/div&gt;</code> 相当于 <code v-pre>&lt;div class='content'&gt;&lt;/div&gt;</code>这里就是单引号套双引号的例子；</p>
<p><code v-pre>六:</code>从编译速度上来看，单引号在浏览器中被编译的速度更快；</p>
<p><code v-pre>七:</code>单引号与双引号在各自单独使用时，基本没有区别；例如：</p>
<p>var exm = '案例'；var exe = &quot;案例&quot;；变量 exm 与 exe 的内容都是字符串 案例；</p>
<p>console.info(exe == exe) ；//输出 true；</p>
<p><code v-pre>八:</code>单引号和双引号混合使用时，需要注意：</p>
<p>一般出现在 JS 拼接字符串里面，或者 html 元素的属性里面，单引号和双引号必须成双成对的出现，可以单引号在外面，也可以双引号在外面；</p>
<p>var exm = &quot;'案例'&quot;；//这里变量 exm 的内容是字符串'案例'，这里单引号也是字符串的一部分；</p>
<p>var exe = '&quot;案例&quot;'；//这里变量 exe 的内容是字符串&quot;案例&quot;，这里的双引号也是字符串的一部分；</p>
<p>console.info(exe == exe) ；//输出 false；他们是不一样的字符串；</p>
<p><code v-pre>九:</code>字符串拼接：</p>
<p>var html = <code v-pre>&quot;&lt;div class = 'content'&gt;&lt;/div&gt;&quot;</code>；//这里外面是双引号，里面就不能在用双引号了，引号必须成双成对，所以这里里面用了单引号；</p>
<p>同理，var html = <code v-pre>'&lt;div class = &quot;content&quot;&gt;&lt;/div&gt;'</code>；//也是可以的；</p>
<p>那么只用一种引号能不能实现呢，也是可以的；但是必须对引号进行转义，告诉浏览器这里的引号只是字符串，而不是引号结束符。例如：</p>
<p>var html = <code v-pre>'&lt;div class = \'content\'&gt;&lt;/div&gt;'</code>或者 var htm = <code v-pre>&quot;&lt;div class = \&quot;content\&quot;&gt;&lt;/div&gt;&quot;</code>；</p>
</div></template>


