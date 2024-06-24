<template><div><h1 id="_04-线程-二" tabindex="-1"><a class="header-anchor" href="#_04-线程-二" aria-hidden="true">#</a> 04 - 线程（二） 😻</h1>
<nav class="table-of-contents"><ul><li><router-link to="#线程并发问题">线程并发问题</router-link><ul><li><router-link to="#概述">概述</router-link></li><li><router-link to="#案例场景">案例场景</router-link></li><li><router-link to="#并发编程有三要素">并发编程有三要素</router-link></li></ul></li><li><router-link to="#线程同步解决方案">线程同步解决方案</router-link><ul><li><router-link to="#synchronized">Synchronized</router-link></li><li><router-link to="#lock">lock</router-link></li><li><router-link to="#volatile">volatile</router-link></li></ul></li><li><router-link to="#作业">作业</router-link></li></ul></nav>
<h2 id="线程并发问题" tabindex="-1"><a class="header-anchor" href="#线程并发问题" aria-hidden="true">#</a> 线程并发问题</h2>
<h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h3>
<p>在多线程操作共享变量时可能会遇到如下问题：</p>
<p>例如：银行取钱，现有多个用户操作同一个账户，可能会遇到并发安全问题，假设一个账户中余额一共 10000 元，现在有多个用户同时通过该账户取款，各取 10000；取款的过程必然会先进行余额检查，如果余额足够则允许取款；如果多个用户将取款的时间恰好定在同一个时刻，此时就可能出现这些用户同时取款成功的情况，但是实际账户的余额与预期的结果出现不一致。</p>
<p>以上问题就称之为<strong>线程安全</strong>问题；所谓线程安全问题：即多线程并发操作共享变量时造成的结果污染问题</p>
<h3 id="案例场景" tabindex="-1"><a class="header-anchor" href="#案例场景" aria-hidden="true">#</a> 案例场景</h3>
<p>类似以上线程安全问题有很多：</p>
<ul>
<li>购票</li>
<li>限时秒杀</li>
</ul>
<h3 id="并发编程有三要素" tabindex="-1"><a class="header-anchor" href="#并发编程有三要素" aria-hidden="true">#</a> 并发编程有三要素</h3>
<ul>
<li>原子性：线程是原子操作的，要么都成功，要么都失败</li>
<li>可见性：多个线程并发操作时，一个线程对共享变量的修改要实时的同步到其他线程中</li>
<li>有序性：线程内部的程序执行，由上而下依次执行。(避免指令重排)</li>
</ul>
<h2 id="线程同步解决方案" tabindex="-1"><a class="header-anchor" href="#线程同步解决方案" aria-hidden="true">#</a> 线程同步解决方案</h2>
<h3 id="synchronized" tabindex="-1"><a class="header-anchor" href="#synchronized" aria-hidden="true">#</a> Synchronized</h3>
<p>synchronized 是 java 中提供一个用于实现线程同步的关键字，通过使用该关键字，可以有效的解决线程并发时线程安全的问题，解决的并发编程中的原子性。synchronized 有三种使用方式：</p>
<ul>
<li>对象锁（使用 synchronized 关键对对象/实例锁定）</li>
<li>方法锁（使用 synchronized 对方法修饰锁定方法）</li>
<li>类锁（使用 synchronized 直接锁定类）</li>
</ul>
<h4 id="对象锁" tabindex="-1"><a class="header-anchor" href="#对象锁" aria-hidden="true">#</a> 对象锁</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AccountOperation</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/** 账户*/</span>
    <span class="token keyword">private</span> <span class="token class-name">Account</span> a<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 待取款金额*/</span>
    <span class="token keyword">private</span> <span class="token keyword">double</span> target<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">AccountOperation</span><span class="token punctuation">(</span><span class="token class-name">Account</span> a<span class="token punctuation">,</span> <span class="token keyword">double</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> a<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>target <span class="token operator">=</span> target<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            a<span class="token punctuation">.</span><span class="token function">giveMoney</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方法锁" tabindex="-1"><a class="header-anchor" href="#方法锁" aria-hidden="true">#</a> 方法锁</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">giveMoney</span><span class="token punctuation">(</span><span class="token keyword">double</span> m<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>m <span class="token operator">&lt;=</span> money<span class="token punctuation">)</span><span class="token punctuation">{</span>
        money <span class="token operator">-=</span> m<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span> <span class="token string">"取款成功，余额："</span> <span class="token operator">+</span> money<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"余额不足，"</span> <span class="token operator">+</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"取款失败!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="类锁" tabindex="-1"><a class="header-anchor" href="#类锁" aria-hidden="true">#</a> 类锁</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">giveMoney</span><span class="token punctuation">(</span><span class="token keyword">double</span> m<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">Account</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>m <span class="token operator">&lt;=</span> money<span class="token punctuation">)</span><span class="token punctuation">{</span>
            money <span class="token operator">-=</span> m<span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span> <span class="token string">"取款成功，余额："</span> <span class="token operator">+</span> money<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"余额不足，"</span> <span class="token operator">+</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"取款失败!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>类锁的另一种写法</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">static</span>  <span class="token keyword">void</span> <span class="token function">giveMoney</span><span class="token punctuation">(</span><span class="token keyword">double</span> m<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>m <span class="token operator">&lt;=</span> money<span class="token punctuation">)</span><span class="token punctuation">{</span>
        money <span class="token operator">-=</span> m<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span> <span class="token string">"取款成功，余额："</span> <span class="token operator">+</span> money<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"余额不足，"</span> <span class="token operator">+</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"取款失败!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h4 id="死锁问题" tabindex="-1"><a class="header-anchor" href="#死锁问题" aria-hidden="true">#</a> 死锁问题</h4>
<p>使用锁虽然能够解决多线程访问共享变量造成的安全问题，但是如果使用不当，也有可能会导致死锁；</p>
<p>死锁即多个线程等待被对方线程占有的资源时陷入一个僵局。</p>
<p><img src="@source/notes/java/05/04-线程（二）/assets/1610614118889.png" alt="1610614118889"></p>
<p>参考代码:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DeadLock</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Object</span> o1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Object</span> o2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//获取线程名称</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">"t1"</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>o1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">"已锁定o1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>o2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">"执行完毕"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">"t2"</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>o2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">"已锁定o2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>o1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">"执行完毕"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lock" tabindex="-1"><a class="header-anchor" href="#lock" aria-hidden="true">#</a> lock</h3>
<p>在 Java5 中新增的并发编程包中，提供一种新型的锁机制<code v-pre>Lock</code>,提供了比 synchronized 功能更为强大的锁，<code v-pre>Lock</code>是一个接口，主要的实现类是<code v-pre>ReentrantLock</code>（可重入锁），提供了公平锁与非公平锁机制，默认是非公平锁的实现。</p>
<p><strong>构造器</strong></p>
<table>
<thead>
<tr>
<th><code v-pre>ReentrantLock()</code></th>
<th>创建一个 <code v-pre>ReentrantLock</code>的实例。</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>ReentrantLock(boolean fair)</code></td>
<td>根据给定的公平政策创建一个 <code v-pre>ReentrantLock</code>的实例。</td>
</tr>
</tbody>
</table>
<p>用法如下:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SaleTickets</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span><span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">transient</span> <span class="token class-name">ReentrantLock</span> lock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>count <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//获取锁</span>
            lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"买到车票："</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token operator">--</span>count<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">finally</span><span class="token punctuation">{</span>
                <span class="token comment">//解锁</span>
                lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">SaleTickets</span> st <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SaleTickets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Thread</span> t1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>st<span class="token punctuation">,</span><span class="token string">"小明"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span> t2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>st<span class="token punctuation">,</span><span class="token string">"小红"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span> t3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>st<span class="token punctuation">,</span><span class="token string">"小王"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        t1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        t2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        t3<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意事项</p>
<p>由于 Lock 是手动获取以及释放锁（区别 synchronized 自动锁机制），因此一般锁的获取会放在 try 语句块之前，并且对于锁的释放如果使用的位置不恰当,很有可能造成死锁，因此建议将锁的释放定义在 finally 语句块中</p>
<p>synchornized 和 lock 区别？</p>
<p>synchronized：</p>
<ul>
<li>是 java 中提供的一个关键字</li>
<li>synchronized 锁在任务执行完毕之后会自动释放</li>
<li>synchronized 是一种非公平锁</li>
<li>synchronized 适用于少量的代码片段</li>
</ul>
<p>lock：</p>
<ul>
<li>是一个 java 类，提供的功能要强大于 synchronized</li>
<li>锁的释放需要手动控制，因此可以控制粒度更为细腻的操作</li>
<li>lock 既可以使用公平锁，也可以使用非公平锁实现</li>
<li>lock 适用于大量代码片段的锁机制</li>
</ul>
</blockquote>
<h3 id="volatile" tabindex="-1"><a class="header-anchor" href="#volatile" aria-hidden="true">#</a> volatile</h3>
<p>在了解 volatile 之前，先看以下代码：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">VolatileDemo</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span><span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token keyword">boolean</span> isOver<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"子线程启动"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>isOver<span class="token punctuation">)</span><span class="token punctuation">{</span>
            i<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"线程终止。。。"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token class-name">VolatileDemo</span> vd <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VolatileDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span> t1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>vd<span class="token punctuation">)</span><span class="token punctuation">;</span>
        t1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        vd<span class="token punctuation">.</span>isOver <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/*

*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 分析以上程序，启动了两条线程，其中主线程中等待三秒之后会将结束标记修改，正常情况下，被修改的变量值应该立即被子线程读取，从而结束子线程；但是实际情况是，子线程并未结束，而是一直循环执行。</p>
<p>​ 产生原因如下：</p>
<p><img src="@source/notes/java/05/04-线程（二）/assets/1610613660958.png" alt="1610613660958"></p>
<p>如果需要将线程中对变量的修改立即同步给其他线程，只需要将变量使用<code v-pre>volatile</code>关键字修饰即可:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token keyword">boolean</span> isOver<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>volatile 可以保证数据的<strong>可见性</strong>以及<strong>有序性</strong>（不会进行指令重排），但是不保证原子性。</p>
<h2 id="作业" tabindex="-1"><a class="header-anchor" href="#作业" aria-hidden="true">#</a> 作业</h2>
<ul>
<li>
<p>思考：设计一个医院的挂号系统，存在多台挂号机器，要求这多台挂号机器能同时工作（同时放号），发放的号码要求不能出现重复，效果如下：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>线程A:1  5  8
线程B:2  4  9
线程C:3  6  7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并且要求能够支持断电后号码不还原，即若号码发放到 9 号，此时断电了，下一次恢复供电之后号码从 10 继续开始。</p>
</li>
</ul>
</div></template>


