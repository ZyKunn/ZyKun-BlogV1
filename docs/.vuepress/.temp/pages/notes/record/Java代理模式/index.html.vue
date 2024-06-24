<template><div><h1 id="🥳-java-代理模式" tabindex="-1"><a class="header-anchor" href="#🥳-java-代理模式" aria-hidden="true">#</a> 🥳 Java 代理模式</h1>
<hr/>
<nav class="table-of-contents"><ul><li><router-link to="#_1-代理模式">1. 代理模式</router-link></li><li><router-link to="#_2-静态代理">2. 静态代理</router-link></li><li><router-link to="#_3-动态代理">3. 动态代理</router-link><ul><li><router-link to="#_3-1-jdk-动态代理机制">3.1. JDK 动态代理机制</router-link></li><li><router-link to="#_3-2-cglib-动态代理机制">3.2. CGLIB 动态代理机制</router-link></li><li><router-link to="#_3-3-jdk-动态代理和-cglib-动态代理对比">3.3. JDK 动态代理和 CGLIB 动态代理对比</router-link></li></ul></li><li><router-link to="#_4-静态代理和动态代理的对比">4. 静态代理和动态代理的对比</router-link></li><li><router-link to="#_5-总结">5. 总结</router-link></li></ul></nav>
<h2 id="_1-代理模式" tabindex="-1"><a class="header-anchor" href="#_1-代理模式" aria-hidden="true">#</a> 1. 代理模式</h2>
<p>代理模式是一种比较好理解的设计模式。简单来说就是 <strong>我们使用代理对象来代替对真实对象(real object)的访问，这样就可以在不修改原目标对象的前提下，提供额外的功能操作，扩展目标对象的功能。</strong></p>
<p><strong>代理模式的主要作用是扩展目标对象的功能，比如说在目标对象的某个方法执行前后你可以增加一些自定义的操作。</strong></p>
<p>举个例子：新娘找来了自己的姨妈来代替自己处理新郎的提问，新娘收到的提问都是经过姨妈处理过滤之后的。姨妈在这里就可以看作是代理你的代理对象，代理的行为（方法）是接收和回复新郎的提问。</p>
<p><img src="@source/notes/record/Java代理模式/assets/image-20240229102853934.png" alt="image-20240229102853934"></p>
<p>​ Understanding the Proxy Design Pattern | by Mithun Sasidharan | Medium</p>
<p>代理模式有静态代理和动态代理两种实现方式，我们 先来看一下静态代理模式的实现。</p>
<h2 id="_2-静态代理" tabindex="-1"><a class="header-anchor" href="#_2-静态代理" aria-hidden="true">#</a> 2. 静态代理</h2>
<p><strong>静态代理中，我们对目标对象的每个方法的增强都是手动完成的（*后面会具体演示代码*），非常不灵活（*比如接口一旦新增加方法，目标对象和代理对象都要进行修改*）且麻烦(*需要对每个目标类都单独写一个代理类*）。</strong> 实际应用场景非常非常少，日常开发几乎看不到使用静态代理的场景。</p>
<p>上面我们是从实现和应用角度来说的静态代理，从 JVM 层面来说， <strong>静态代理在编译时就将接口、实现类、代理类这些都变成了一个个实际的 class 文件。</strong></p>
<p>静态代理实现步骤:</p>
<ol>
<li>定义一个接口及其实现类；</li>
<li>创建一个代理类同样实现这个接口</li>
<li>将目标对象注入进代理类，然后在代理类的对应方法调用目标类中的对应方法。这样的话，我们就可以通过代理类屏蔽对目标对象的访问，并且可以在目标方法执行前后做一些自己想做的事情。</li>
</ol>
<p>下面通过代码展示！</p>
<p><strong>1.定义发送短信的接口</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">SmsService</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.实现发送短信的接口</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SmsServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">SmsService</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"send message:"</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> message<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.创建代理类并同样实现发送短信的接口</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SmsProxy</span> <span class="token keyword">implements</span> <span class="token class-name">SmsService</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">SmsService</span> smsService<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">SmsProxy</span><span class="token punctuation">(</span><span class="token class-name">SmsService</span> smsService<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>smsService <span class="token operator">=</span> smsService<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//调用方法之前，我们可以添加自己的操作</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"before method send()"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        smsService<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//调用方法之后，我们同样可以添加自己的操作</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"after method send()"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4.实际使用</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SmsService</span> smsService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SmsServiceImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">SmsProxy</span> smsProxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SmsProxy</span><span class="token punctuation">(</span>smsService<span class="token punctuation">)</span><span class="token punctuation">;</span>
        smsProxy<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"java"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行上述代码之后，控制台打印出：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>before method send<span class="token punctuation">(</span><span class="token punctuation">)</span>
send message:java
after method send<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以输出结果看出，我们已经增加了 <code v-pre>SmsServiceImpl</code> 的<code v-pre>send()</code>方法。</p>
<h2 id="_3-动态代理" tabindex="-1"><a class="header-anchor" href="#_3-动态代理" aria-hidden="true">#</a> 3. 动态代理</h2>
<p>相比于静态代理来说，动态代理更加灵活。我们不需要针对每个目标类都单独创建一个代理类，并且也不需要我们必须实现接口，我们可以直接代理实现类( <em>CGLIB 动态代理机制</em>)。</p>
<p><strong>从 JVM 角度来说，动态代理是在运行时动态生成类字节码，并加载到 JVM 中的。</strong></p>
<p>说到动态代理，Spring AOP、RPC 框架应该是两个不得不提的，它们的实现都依赖了动态代理。</p>
<p><strong>动态代理在我们日常开发中使用的相对较少，但是在框架中的几乎是必用的一门技术。学会了动态代理之后，对于我们理解和学习各种框架的原理也非常有帮助。</strong></p>
<p>就 Java 来说，动态代理的实现方式有很多种，比如 <strong>JDK 动态代理</strong>、<strong>CGLIB 动态代理</strong>等等。</p>
<h3 id="_3-1-jdk-动态代理机制" tabindex="-1"><a class="header-anchor" href="#_3-1-jdk-动态代理机制" aria-hidden="true">#</a> 3.1. JDK 动态代理机制</h3>
<h4 id="_3-1-1-介绍" tabindex="-1"><a class="header-anchor" href="#_3-1-1-介绍" aria-hidden="true">#</a> 3.1.1. 介绍</h4>
<p><strong>在 Java 动态代理机制中 <code v-pre>InvocationHandler</code> 接口和 <code v-pre>Proxy</code> 类是核心。</strong></p>
<p><code v-pre>Proxy</code> 类中使用频率最高的方法是：<code v-pre>newProxyInstance()</code> ，这个方法主要用来生成一个代理对象。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> <span class="token function">newProxyInstance</span><span class="token punctuation">(</span><span class="token class-name">ClassLoader</span> loader<span class="token punctuation">,</span>
                                      <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> interfaces<span class="token punctuation">,</span>
                                      <span class="token class-name">InvocationHandler</span> h<span class="token punctuation">)</span>
    <span class="token keyword">throws</span> <span class="token class-name">IllegalArgumentException</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个方法一共有 3 个参数：</p>
<ol>
<li><strong>loader</strong> :类加载器，用于加载代理对象。</li>
<li><strong>interfaces</strong> : 被代理类实现的一些接口；</li>
<li><strong>h</strong> : 实现了 <code v-pre>InvocationHandler</code> 接口的对象；</li>
</ol>
<p>要实现动态代理的话，还必须需要实现<code v-pre>InvocationHandler</code> 来自定义处理逻辑。 当我们的动态代理对象调用一个方法时，这个方法的调用就会被转发到实现<code v-pre>InvocationHandler</code> 接口类的 <code v-pre>invoke</code> 方法来调用。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">InvocationHandler</span> <span class="token punctuation">{</span>

<span class="token doc-comment comment">/**
 * 当你使用代理对象调用方法的时候实际会调用到这个方法
 */</span>
<span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">Object</span> proxy<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>
    <span class="token keyword">throws</span> <span class="token class-name">Throwable</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>invoke()</code> 方法有下面三个参数：</p>
<ol>
<li><strong>proxy</strong> :动态生成的代理类</li>
<li><strong>method</strong> : 与代理类对象调用的方法相对应</li>
<li><strong>args</strong> : 当前 method 方法的参数</li>
</ol>
<p>也就是说：<strong>你通过<code v-pre>Proxy</code> 类的 <code v-pre>newProxyInstance()</code> 创建的代理对象在调用方法的时候，实际会调用到实现<code v-pre>InvocationHandler</code> 接口的类的 <code v-pre>invoke()</code>方法。</strong> 你可以在 <code v-pre>invoke()</code> 方法中自定义处理逻辑，比如在方法执行前后做什么事情。</p>
<h4 id="_3-1-2-jdk-动态代理类使用步骤" tabindex="-1"><a class="header-anchor" href="#_3-1-2-jdk-动态代理类使用步骤" aria-hidden="true">#</a> 3.1.2. JDK 动态代理类使用步骤</h4>
<ol>
<li>定义一个接口及其实现类；</li>
<li>自定义 <code v-pre>InvocationHandler</code> 并重写<code v-pre>invoke</code>方法，在 <code v-pre>invoke</code> 方法中我们会调用原生方法（被代理类的方法）并自定义一些处理逻辑；</li>
<li>通过 <code v-pre>Proxy.newProxyInstance(ClassLoader loader,Class&lt;?&gt;[] interfaces,InvocationHandler h)</code> 方法创建代理对象；</li>
</ol>
<h4 id="_3-1-3-代码示例" tabindex="-1"><a class="header-anchor" href="#_3-1-3-代码示例" aria-hidden="true">#</a> 3.1.3. 代码示例</h4>
<p>这样说可能会有点空洞和难以理解，我上个例子，大家感受一下吧！</p>
<p><strong>1.定义发送短信的接口</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">SmsService</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.实现发送短信的接口</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SmsServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">SmsService</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"send message:"</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> message<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.定义一个 JDK 动态代理类</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">InvocationHandler</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">InvocationTargetException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Method</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> ZyKun
 * <span class="token keyword">@createTime</span> 2020年05月11日 11:23:00
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DebugInvocationHandler</span> <span class="token keyword">implements</span> <span class="token class-name">InvocationHandler</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 代理类中的真实对象
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Object</span> target<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">DebugInvocationHandler</span><span class="token punctuation">(</span><span class="token class-name">Object</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>target <span class="token operator">=</span> target<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">Object</span> proxy<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InvocationTargetException</span><span class="token punctuation">,</span> <span class="token class-name">IllegalAccessException</span> <span class="token punctuation">{</span>
        <span class="token comment">//调用方法之前，我们可以添加自己的操作</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"before method "</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> result <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//调用方法之后，我们同样可以添加自己的操作</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"after method "</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>invoke()</code> 方法: 当我们的动态代理对象调用原生方法的时候，最终实际上调用到的是 <code v-pre>invoke()</code> 方法，然后 <code v-pre>invoke()</code> 方法代替我们去调用了被代理对象的原生方法。</p>
<p><strong>4.获取代理对象的工厂类</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JdkProxyFactory</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> <span class="token function">getProxy</span><span class="token punctuation">(</span><span class="token class-name">Object</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Proxy</span><span class="token punctuation">.</span><span class="token function">newProxyInstance</span><span class="token punctuation">(</span>
                target<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 目标类的类加载器</span>
                target<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getInterfaces</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">// 代理需要实现的接口，可指定多个</span>
                <span class="token keyword">new</span> <span class="token class-name">DebugInvocationHandler</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>   <span class="token comment">// 代理对象对应的自定义 InvocationHandler</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>getProxy()</code>：主要通过<code v-pre>Proxy.newProxyInstance（）</code>方法获取某个类的代理对象</p>
<p><strong>5.实际使用</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">SmsService</span> smsService <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">SmsService</span><span class="token punctuation">)</span> <span class="token class-name">JdkProxyFactory</span><span class="token punctuation">.</span><span class="token function">getProxy</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SmsServiceImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
smsService<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"java"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>运行上述代码之后，控制台打印出：</p>
<div class="language-plain line-numbers-mode" data-ext="plain"><pre v-pre class="language-plain"><code>before method send
send message:java
after method send
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-cglib-动态代理机制" tabindex="-1"><a class="header-anchor" href="#_3-2-cglib-动态代理机制" aria-hidden="true">#</a> 3.2. CGLIB 动态代理机制</h3>
<h4 id="_3-2-1-介绍" tabindex="-1"><a class="header-anchor" href="#_3-2-1-介绍" aria-hidden="true">#</a> 3.2.1. 介绍</h4>
<p><strong>JDK 动态代理有一个最致命的问题是其只能代理实现了接口的类。</strong></p>
<p><strong>为了解决这个问题，我们可以用 CGLIB 动态代理机制来避免。</strong></p>
<p><a href="https://github.com/cglib/cglib" target="_blank" rel="noopener noreferrer">CGLIBopen in new window<ExternalLinkIcon/></a>(<em>Code Generation Library</em>)是一个基于<a href="http://www.baeldung.com/java-asm" target="_blank" rel="noopener noreferrer">ASMopen in new window<ExternalLinkIcon/></a>的字节码生成库，它允许我们在运行时对字节码进行修改和动态生成。CGLIB 通过继承方式实现代理。很多知名的开源框架都使用到了<a href="https://github.com/cglib/cglib" target="_blank" rel="noopener noreferrer">CGLIBopen in new window<ExternalLinkIcon/></a>， 例如 Spring 中的 AOP 模块中：如果目标对象实现了接口，则默认采用 JDK 动态代理，否则采用 CGLIB 动态代理。</p>
<p><strong>在 CGLIB 动态代理机制中 <code v-pre>MethodInterceptor</code> 接口和 <code v-pre>Enhancer</code> 类是核心。</strong></p>
<p>你需要自定义 <code v-pre>MethodInterceptor</code> 并重写 <code v-pre>intercept</code> 方法，<code v-pre>intercept</code> 用于拦截增强被代理类的方法。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">MethodInterceptor</span>
<span class="token keyword">extends</span> <span class="token class-name">Callback</span><span class="token punctuation">{</span>
    <span class="token comment">// 拦截被代理类中的方法</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">intercept</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span>Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">,</span><span class="token class-name">MethodProxy</span> proxy<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li><strong>obj</strong> : 被代理的对象（需要增强的对象）</li>
<li><strong>method</strong> : 被拦截的方法（需要增强的方法）</li>
<li><strong>args</strong> : 方法入参</li>
<li><strong>proxy</strong> : 用于调用原始方法</li>
</ol>
<p>你可以通过 <code v-pre>Enhancer</code>类来动态获取被代理类，当代理类调用方法的时候，实际调用的是 <code v-pre>MethodInterceptor</code> 中的 <code v-pre>intercept</code> 方法。</p>
<h4 id="_3-2-2-cglib-动态代理类使用步骤" tabindex="-1"><a class="header-anchor" href="#_3-2-2-cglib-动态代理类使用步骤" aria-hidden="true">#</a> 3.2.2. CGLIB 动态代理类使用步骤</h4>
<ol>
<li>定义一个类；</li>
<li>自定义 <code v-pre>MethodInterceptor</code> 并重写 <code v-pre>intercept</code> 方法，<code v-pre>intercept</code> 用于拦截增强被代理类的方法，和 JDK 动态代理中的 <code v-pre>invoke</code> 方法类似；</li>
<li>通过 <code v-pre>Enhancer</code> 类的 <code v-pre>create()</code>创建代理类；</li>
</ol>
<h4 id="_3-2-3-代码示例" tabindex="-1"><a class="header-anchor" href="#_3-2-3-代码示例" aria-hidden="true">#</a> 3.2.3. 代码示例</h4>
<p>不同于 JDK 动态代理不需要额外的依赖。<a href="https://github.com/cglib/cglib" target="_blank" rel="noopener noreferrer">CGLIBopen in new window<ExternalLinkIcon/></a>(<em>Code Generation Library</em>) 实际是属于一个开源项目，如果你要使用它的话，需要手动添加相关依赖。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>cglib<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>cglib<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.3.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>1.实现一个使用阿里云发送短信的类</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">github<span class="token punctuation">.</span>javaguide<span class="token punctuation">.</span>dynamicProxy<span class="token punctuation">.</span>cglibDynamicProxy</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AliSmsService</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"send message:"</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> message<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.自定义 <code v-pre>MethodInterceptor</code>（方法拦截器）</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">net<span class="token punctuation">.</span>sf<span class="token punctuation">.</span>cglib<span class="token punctuation">.</span>proxy<span class="token punctuation">.</span></span><span class="token class-name">MethodInterceptor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">net<span class="token punctuation">.</span>sf<span class="token punctuation">.</span>cglib<span class="token punctuation">.</span>proxy<span class="token punctuation">.</span></span><span class="token class-name">MethodProxy</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Method</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 自定义MethodInterceptor
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DebugMethodInterceptor</span> <span class="token keyword">implements</span> <span class="token class-name">MethodInterceptor</span> <span class="token punctuation">{</span>


    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token parameter">o</span>           被代理的对象（需要增强的对象）
     * <span class="token keyword">@param</span> <span class="token parameter">method</span>      被拦截的方法（需要增强的方法）
     * <span class="token keyword">@param</span> <span class="token parameter">args</span>        方法入参
     * <span class="token keyword">@param</span> <span class="token parameter">methodProxy</span> 用于调用原始方法
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">intercept</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">,</span> <span class="token class-name">MethodProxy</span> methodProxy<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
        <span class="token comment">//调用方法之前，我们可以添加自己的操作</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"before method "</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> object <span class="token operator">=</span> methodProxy<span class="token punctuation">.</span><span class="token function">invokeSuper</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//调用方法之后，我们同样可以添加自己的操作</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"after method "</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> object<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.获取代理类</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">net<span class="token punctuation">.</span>sf<span class="token punctuation">.</span>cglib<span class="token punctuation">.</span>proxy<span class="token punctuation">.</span></span><span class="token class-name">Enhancer</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CglibProxyFactory</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> <span class="token function">getProxy</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> clazz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建动态代理增强类</span>
        <span class="token class-name">Enhancer</span> enhancer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Enhancer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置类加载器</span>
        enhancer<span class="token punctuation">.</span><span class="token function">setClassLoader</span><span class="token punctuation">(</span>clazz<span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置被代理类</span>
        enhancer<span class="token punctuation">.</span><span class="token function">setSuperclass</span><span class="token punctuation">(</span>clazz<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置方法拦截器</span>
        enhancer<span class="token punctuation">.</span><span class="token function">setCallback</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">DebugMethodInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建代理类</span>
        <span class="token keyword">return</span> enhancer<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4.实际使用</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">AliSmsService</span> aliSmsService <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">AliSmsService</span><span class="token punctuation">)</span> <span class="token class-name">CglibProxyFactory</span><span class="token punctuation">.</span><span class="token function">getProxy</span><span class="token punctuation">(</span><span class="token class-name">AliSmsService</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
aliSmsService<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"java"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>运行上述代码之后，控制台打印出：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>before method send
send message:java
after method send
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-jdk-动态代理和-cglib-动态代理对比" tabindex="-1"><a class="header-anchor" href="#_3-3-jdk-动态代理和-cglib-动态代理对比" aria-hidden="true">#</a> 3.3. JDK 动态代理和 CGLIB 动态代理对比</h3>
<ol>
<li><strong>JDK 动态代理只能代理实现了接口的类或者直接代理接口，而 CGLIB 可以代理未实现任何接口的类。</strong> 另外， CGLIB 动态代理是通过生成一个被代理类的子类来拦截被代理类的方法调用，因此不能代理声明为 final 类型的类和方法。</li>
<li>就二者的效率来说，大部分情况都是 JDK 动态代理更优秀，随着 JDK 版本的升级，这个优势更加明显。</li>
</ol>
<h2 id="_4-静态代理和动态代理的对比" tabindex="-1"><a class="header-anchor" href="#_4-静态代理和动态代理的对比" aria-hidden="true">#</a> 4. 静态代理和动态代理的对比</h2>
<ol>
<li><strong>灵活性</strong>：动态代理更加灵活，不需要必须实现接口，可以直接代理实现类，并且可以不需要针对每个目标类都创建一个代理类。另外，静态代理中，接口一旦新增加方法，目标对象和代理对象都要进行修改，这是非常麻烦的！</li>
<li><strong>JVM 层面</strong>：静态代理在编译时就将接口、实现类、代理类这些都变成了一个个实际的 class 文件。而动态代理是在运行时动态生成类字节码，并加载到 JVM 中的。</li>
</ol>
<h2 id="_5-总结" tabindex="-1"><a class="header-anchor" href="#_5-总结" aria-hidden="true">#</a> 5. 总结</h2>
<p>这篇文章中主要介绍了代理模式的两种实现：静态代理以及动态代理。涵盖了静态代理和动态代理实战、静态代理和动态代理的区别、JDK 动态代理和 Cglib 动态代理区别等内容。</p>
</div></template>


