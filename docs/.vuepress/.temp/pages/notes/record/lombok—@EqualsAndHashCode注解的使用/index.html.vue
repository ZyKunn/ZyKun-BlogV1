<template><div><h1 id="🌶️-lombok—-equalsandhashcode-callsuper-true-注解的使用" tabindex="-1"><a class="header-anchor" href="#🌶️-lombok—-equalsandhashcode-callsuper-true-注解的使用" aria-hidden="true">#</a> <strong>🌶️ lombok—@EqualsAndHashCode(callSuper = true)注解的使用</strong></h1>
<hr/>
<nav class="table-of-contents"><ul><li><router-link to="#举个简单的栗子">举个简单的栗子：</router-link></li></ul></nav>
<blockquote>
<p>@EqualsAndHashCode(callSuper = true)</p>
<p>该注解用于子类对象之间进行比较的时候</p>
<p>不加该注解的影响：子类对象属性值一致，但其继承的父类对象属性值不一致，在比较的时候会出现比较结果不对的情况。</p>
</blockquote>
<h2 id="举个简单的栗子" tabindex="-1"><a class="header-anchor" href="#举个简单的栗子" aria-hidden="true">#</a> 举个简单的栗子：</h2>
<p>1.这边先定义一个分类对象 Parent，有一个属性：code</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Parent</span> <span class="token punctuation">{</span>
<span class="token doc-comment comment">/**
 * 父类编码
 */</span>
<span class="token keyword">private</span> <span class="token class-name">String</span> code<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.再定义一个子类对象 Child，有一个属性：name</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Child</span> <span class="token keyword">extends</span> <span class="token class-name">Parent</span> <span class="token punctuation">{</span>
<span class="token doc-comment comment">/**
 * 子类名称
 */</span>
<span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.在方法中 new 两个 Child 对象：childTest1、childTest2；</p>
<p>对这两个 Child 对象的自有属性 name 都赋值为：Child；</p>
<p>但是对继承的父类属性 code 进行不同的赋值；</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Child</span> childTest1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
childTest1<span class="token punctuation">.</span><span class="token function">setCode</span><span class="token punctuation">(</span><span class="token string">"1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
childTest1<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"child"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Child</span> childTest2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
childTest2<span class="token punctuation">.</span><span class="token function">setCode</span><span class="token punctuation">(</span><span class="token string">"2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
childTest2<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"child"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.根据使用过程中，这两个对象肯定是不一样的，但是，在不加 @EqualsAndHashCode(callSuper = true) 注解的情况下对这两个对象进行比较得到的结果却是 true</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">boolean</span> isSame <span class="token operator">=</span> <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>childTest1<span class="token punctuation">,</span>childTest2<span class="token punctuation">)</span><span class="token punctuation">;</span>
log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"testEquals -> childTest1:{}, childTest2:{}"</span><span class="token punctuation">,</span> childTest1<span class="token punctuation">,</span> childTest2<span class="token punctuation">)</span><span class="token punctuation">;</span>
log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"testEquals -> :{}"</span><span class="token punctuation">,</span> isSame<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/record/lombok—@EqualsAndHashCode注解的使用/assets/image-20231011114451870.png" alt="image-20231011114451870"></p>
<p>5.@EqualsAndHashCode(callSuper = true) 注解的作用就是将其父类属性也进行比较，下面是 Child 类加了注解后运行的结果：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@EqualsAndHashCode</span><span class="token punctuation">(</span>callSuper <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Child</span> <span class="token keyword">extends</span> <span class="token class-name">Parent</span> <span class="token punctuation">{</span>
<span class="token doc-comment comment">/**
 * 子类名称
 */</span>
<span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/record/lombok—@EqualsAndHashCode注解的使用/assets/image-20231011114532293.png" alt="image-20231011114532293"></p>
</div></template>


