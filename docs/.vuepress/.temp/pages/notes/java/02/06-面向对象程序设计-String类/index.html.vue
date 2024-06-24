<template><div><h1 id="_05-面向对象程序设计-string-类" tabindex="-1"><a class="header-anchor" href="#_05-面向对象程序设计-string-类" aria-hidden="true">#</a> 05 - 面向对象程序设计 - String 类 🍫</h1>
<nav class="table-of-contents"><ul><li><router-link to="#string-类-续">String 类(续)</router-link></li><li><router-link to="#stringbuffer-stringbuilder">StringBuffer &amp; StringBuilder</router-link><ul><li><router-link to="#string、stringbuffer、stringbuilder-字符串拼接效率对比">String、StringBuffer、StringBuilder 字符串拼接效率对比</router-link></li><li><router-link to="#stringbuffer-常用方法">StringBuffer 常用方法</router-link></li></ul></li><li><router-link to="#static">static</router-link><ul><li><router-link to="#static-1">static</router-link></li></ul></li></ul></nav>
<h2 id="string-类-续" tabindex="-1"><a class="header-anchor" href="#string-类-续" aria-hidden="true">#</a> String 类(续)</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestString</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">String</span> commons <span class="token operator">=</span> <span class="token string">"听说单身狗凤姐去了米国，找到了心仪男票，三天两头在微博上抨击单身狗。。。。"</span><span class="token punctuation">;</span>
		<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> words <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">"凤姐"</span><span class="token punctuation">,</span> <span class="token string">"米国"</span><span class="token punctuation">,</span> <span class="token string">"单身狗"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> k <span class="token operator">:</span> words<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			commons <span class="token operator">=</span> commons<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> <span class="token function">placeholder</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"替换后："</span> <span class="token operator">+</span> commons<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 根据字符串的字符个数返回对应长度的“*”</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">String</span> p <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			p <span class="token operator">+=</span> <span class="token string">"*"</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> p<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * 手机号脱敏 将手机号的前三位后四位显示中间四位使用"*"替换
	 *
	 * <span class="token keyword">@param</span> <span class="token parameter">phoneNum</span>
	 * <span class="token keyword">@return</span>
	 */</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token class-name">String</span> phoneNum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> phoneNum<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">"****"</span><span class="token operator">+</span>phoneNum<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">"http://www.softeem.com/query/list.html"</span><span class="token punctuation">;</span>
		<span class="token comment">// 获取指定的子字符串在目标字符串中最后一次出现的索引</span>
		<span class="token keyword">int</span> i <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 匹配给定的字符串是否符合指定的正则表达式规则（匹配，查找，替换）</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"13567898765"</span><span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span><span class="token string">"1[3578]\\d{9}"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 将字符串中指定的字符替换成新的字符</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"无极剑圣剑客"</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token char">'剑'</span><span class="token punctuation">,</span> <span class="token char">'刀'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">String</span> commons <span class="token operator">=</span> <span class="token string">"听说单身狗凤姐去了米国，找到了心仪男票，三天两头在微博上抨击单身狗。。。。"</span><span class="token punctuation">;</span>

		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>commons<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"单身狗"</span><span class="token punctuation">,</span> <span class="token string">"***"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">new</span> <span class="token class-name">TestString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 脱敏操作 134****7890</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"张三13456543212男"</span><span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">"1[3578]\\d{9}"</span><span class="token punctuation">,</span> <span class="token string">"*"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">String</span> phone <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span><span class="token string">"13245674321"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>phone<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">"10/张三/男/计算机科学与技术/68.8"</span><span class="token punctuation">;</span>
		<span class="token comment">//使用特定的分隔符对字符串截取，并存储到数组中</span>
		<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> info <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//		for (String s : info) {</span>
<span class="token comment">//			System.out.print(s + " ");</span>
<span class="token comment">//		}</span>
		<span class="token class-name">Student</span> stu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		stu<span class="token punctuation">.</span><span class="token function">setSno</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>info<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		stu<span class="token punctuation">.</span><span class="token function">setSname</span><span class="token punctuation">(</span>info<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		stu<span class="token punctuation">.</span><span class="token function">setSex</span><span class="token punctuation">(</span>info<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		stu<span class="token punctuation">.</span><span class="token function">setMajor</span><span class="token punctuation">(</span>info<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		stu<span class="token punctuation">.</span><span class="token function">setScore</span><span class="token punctuation">(</span><span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token function">parseDouble</span><span class="token punctuation">(</span>info<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stu<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">String</span> file <span class="token operator">=</span> <span class="token string">"美女.png"</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"\\."</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">//将指定的字符串转换为大写字母</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"helloworld"</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//将字符串转换为小写</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"HelloWorld"</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">//将字符串前后空格去除</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"    hello world   123   "</span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">//有以下学生名称   smith scott allen james kobe</span>
		<span class="token comment">//要求将学生名字首字符大写输出？</span>

		<span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">"   smith scott allen james kobe   "</span><span class="token punctuation">;</span>
		<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> names <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> n <span class="token operator">:</span> names<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			n <span class="token operator">=</span> n<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span>n<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">//将整数类型值转换为String</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="stringbuffer-stringbuilder" tabindex="-1"><a class="header-anchor" href="#stringbuffer-stringbuilder" aria-hidden="true">#</a> StringBuffer &amp; StringBuilder</h2>
<p>​ String 类型由于是一个定长字符串，一旦为 String 赋值，则无法修改，修改只能重新为其指定新的地址；如果需要在原来字符串的基础上增加新的内容，则意味着每次都要重新创建对象，因此在进行大量字符串拼接时，会大量消耗内存空间；如果需要涉及到经常性的字符串拼接 java 中提供了两个类来完成:</p>
<ul>
<li>java.lang.StringBuffer</li>
<li>java.lang.StringBuilder</li>
</ul>
<p>​ 以上两个类拥有相同的 API(提供的构造器和方法几乎一致)，两个类都是可变长度的字符串实现，区别在于<strong>StringBuffer 是线程安全的</strong>，<strong>StringBuilder 是线程不安全</strong>；StringBuilder 在多线程环境下效率要高于 StringBuffer,因为 StringBuffer 的方法中都有同步锁，因此在多线程并发访问的时候，同一时间只能有一条线程访问方法，因此，效率较低但是数据的安全性一致性能得到保证。<strong>单线程环境下两者的效率一致</strong></p>
<h3 id="string、stringbuffer、stringbuilder-字符串拼接效率对比" tabindex="-1"><a class="header-anchor" href="#string、stringbuffer、stringbuilder-字符串拼接效率对比" aria-hidden="true">#</a> String、StringBuffer、StringBuilder 字符串拼接效率对比</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>

	<span class="token comment">//17s</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			s <span class="token operator">+=</span> <span class="token string">"hello"</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//0.005s</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testStringBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">StringBuffer</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

    <span class="token comment">//0.005s</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testStringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token comment">// 记录开始时间毫秒数</span>
		<span class="token keyword">long</span> start <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">testString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">long</span> end <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"耗时:"</span> <span class="token operator">+</span> <span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"毫秒"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="stringbuffer-常用方法" tabindex="-1"><a class="header-anchor" href="#stringbuffer-常用方法" aria-hidden="true">#</a> StringBuffer 常用方法</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">StringBuffer</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//链式编程(函数式编程)</span>
sb <span class="token operator">=</span> sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span>  <span class="token comment">// 追加内容</span>
    <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token number">3.14</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//.insert(5, "你好世界"); // 插入 366712642</span>

<span class="token comment">//无论StringBuffer如何追加内容，hashCode始终不变</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sb<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">"123"</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
s <span class="token operator">=</span> <span class="token string">"123"</span><span class="token operator">+</span><span class="token string">"456"</span><span class="token punctuation">;</span>
<span class="token comment">//一旦String类型变量重新值则hashCode将会改变</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sb<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//删除指定索引区间的子字符串</span>
sb <span class="token operator">=</span> sb<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//字符串反转</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sb<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sb<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>String、StringBuffer 和 StringBuilder 的区别？</p>
</blockquote>
<h2 id="static" tabindex="-1"><a class="header-anchor" href="#static" aria-hidden="true">#</a> static</h2>
<h3 id="static-1" tabindex="-1"><a class="header-anchor" href="#static-1" aria-hidden="true">#</a> static</h3>
<p>​ static 是一个 java 中的关键字，同时也是一个修饰符；static 主要用于修饰属性，方法，内部类；被 static 修饰的元素与对象无关（不需要通过对象访问），称之为类成员。</p>
<ul>
<li>被 static 修饰的属性称之为类属性（静态属性）</li>
<li>被 static 修饰的方法称之为类方法（静态方法）</li>
<li>被 static 修饰的初始化块称之为静态块（静态游离块）</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StaticDemo</span> <span class="token punctuation">{</span>

	<span class="token keyword">static</span> <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">"hello"</span><span class="token punctuation">;</span>

	<span class="token comment">//静态方法</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">m</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"do something....."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//		StaticDemo sd = new StaticDemo();</span>
<span class="token comment">//		sd.m();</span>
		<span class="token comment">//静态方法无需创建对象调用</span>
		<span class="token function">m</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//静态属性也无需使用对象调用</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h4>
<ol>
<li><strong>被 static 修饰的元素不再与对象相关</strong>，即 jvm 的 gc(垃圾回收)机制回收对象时与类成员无关，即不会回收 static 元素，static 元素会常驻内存直到 JVM 结束</li>
<li><strong>static 一般用于工具类的方法</strong>，比如：java.util.Arrays、java.lang.Math 等</li>
<li>类加载时会对所有的静态成员进行验证，但是此时对象还未产生，因此<strong>不能在静态方法中调用非静态成员</strong></li>
<li>针对以上的问题即：<strong>不允许在 static 方法中使用 this 关键字</strong></li>
<li><strong>static 元素只在类加载实行一次</strong></li>
</ol>
<h4 id="初始化块与-static-块" tabindex="-1"><a class="header-anchor" href="#初始化块与-static-块" aria-hidden="true">#</a> 初始化块与 static 块</h4>
<p>java 的类结构中还存在一个特殊的语句块：初始化块，又称之为游离块；游离块作用于构造器执行前，执行一些初始化操作；一般用于将多个不同构造器中要执行的重复代码进行统一编写。如：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Player</span> <span class="token punctuation">{</span>

	<span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token keyword">int</span> level<span class="token punctuation">;</span>

	<span class="token comment">//初始化块（游离块）</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"德玛西亚"</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"加载画布。。。。"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token class-name">Player</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token class-name">Player</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token class-name">Player</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> level<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>level <span class="token operator">=</span> level<span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"构造器执行"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Mianshi</span> <span class="token punctuation">{</span>

	<span class="token class-name">String</span> msg <span class="token operator">=</span> <span class="token string">"hello"</span><span class="token punctuation">;</span>

	<span class="token keyword">static</span> <span class="token punctuation">{</span>
		<span class="token class-name">Mianshi</span> ms <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Mianshi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		ms<span class="token punctuation">.</span>msg <span class="token operator">=</span> <span class="token string">"world"</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ms<span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token punctuation">{</span>
		msg<span class="token operator">=</span><span class="token string">"softeem"</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token class-name">Mianshi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		msg <span class="token operator">=</span> <span class="token string">"你好世界"</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//类加载时会自动执行静态初始化块中的内容，即便main方法中没有编写任何内容</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="static-块-游离块-构造器的执行顺序" tabindex="-1"><a class="header-anchor" href="#static-块-游离块-构造器的执行顺序" aria-hidden="true">#</a> static 块，游离块，构造器的执行顺序</h5>
<ol>
<li>首先执行 static 块，并且只执行一次</li>
<li>其次对象创建时先执行游离块然后才执行构造器</li>
<li>游离块的执行次数取决于构造器的调用次数</li>
</ol>
</div></template>


