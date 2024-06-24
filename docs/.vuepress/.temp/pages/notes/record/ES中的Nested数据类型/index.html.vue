<template><div><h1 id="🌈es-中的-nested-数据类型" tabindex="-1"><a class="header-anchor" href="#🌈es-中的-nested-数据类型" aria-hidden="true">#</a> 🌈ES 中的 Nested 数据类型</h1>
<hr/>
<nav class="table-of-contents"><ul><li><router-link to="#前言">前言</router-link></li><li><router-link to="#一-es-如何存储对象">（一）ES 如何存储对象</router-link></li><li><router-link to="#二-nested-类型">（二）Nested 类型</router-link></li><li><router-link to="#三-使用-nested-进行聚合查询">（三）使用 nested 进行聚合查询</router-link></li><li><router-link to="#四-nested-中的-inner-hits">（四）nested 中的 inner_hits</router-link></li><li><router-link to="#五-nested-的使用建议">（五）nested 的使用建议</router-link></li></ul></nav>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>在开始之前需要提前理解一下两点</p>
<ul>
<li>一个 object 字段只能存入一个 JSON 对象, 不适合存对象数组</li>
<li>如果想要一个字段存一个对象数组,可以使用 nested 字段类型</li>
</ul>
<p>在工作开发中, 我们常遇到 2 张表示 1 对多的关系,这样的父子结构, 如果用 MySQL 存的话,子表设一个字段 parentId 存储父表的 id,这样就可以用 join 关联查询.
那么 ES 作为 NoSQL,它有更便捷的存储方式来保存父子结构:</p>
<ul>
<li>第一种:join 字段类型,子文档包含父文档 ID,可用 has_parent 和 has_child 来查询</li>
<li>第二种:nested 字段类型,子文档就存在父文档某个字段内部,适合子文档数量较少的情况</li>
</ul>
<p>object 存储对象数组的缺陷, 如果要存对象数组, 并且对数组中每一个对象进行单独查询, 用 nested 类型比较合适.
但是 nested 类型适合子文档数量较少情况,有 es 有如下默认设置</p>
<ul>
<li>一个文档最多有 50 个 nested 类型的字段</li>
<li>一个文档所有 nested 类型的字段存储文档最大数量是 10000 条</li>
</ul>
<h2 id="一-es-如何存储对象" tabindex="-1"><a class="header-anchor" href="#一-es-如何存储对象" aria-hidden="true">#</a> （一）ES 如何存储对象</h2>
<p>ElasticSearch 中可以将数据以对象的方式存储并查询，但是 ES 底层的 Lucene 没有内部对象的概念，因此如果<strong>通过默认的方式</strong>往 ES 中插入对象**【暂且我们叫他为 Object 类型】**，ES 会将对象层次结构扁平化为字段名称和值的简单列表。 比如下面这一段数据：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>PUT my_index/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span>
  <span class="token property">"group"</span> <span class="token operator">:</span> <span class="token string">"fans"</span><span class="token punctuation">,</span>
  <span class="token property">"user"</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"first"</span> <span class="token operator">:</span> <span class="token string">"John"</span><span class="token punctuation">,</span>
      <span class="token property">"last"</span> <span class="token operator">:</span>  <span class="token string">"Smith"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"first"</span> <span class="token operator">:</span> <span class="token string">"Alice"</span><span class="token punctuation">,</span>
      <span class="token property">"last"</span> <span class="token operator">:</span>  <span class="token string">"White"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ES 内部会将这份数据变成下面这个样子：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"group"</span><span class="token operator">:</span> <span class="token string">"fans"</span><span class="token punctuation">,</span>
  <span class="token property">"user.first"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"alice"</span><span class="token punctuation">,</span> <span class="token string">"john"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"user.last"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"smith"</span><span class="token punctuation">,</span> <span class="token string">"white"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缺失了<strong>first</strong>和<strong>last</strong>之间的关联性。比如这个时候想查询一个 first 为<strong>John</strong>，last 为<strong>White</strong>的人，理论上是没有这个人的，但是实际上名为 fans 的这个组还是被查出来了。</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>GET my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"bool"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"must"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token property">"match"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">"user.first"</span><span class="token operator">:</span> <span class="token string">"John"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token property">"match"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">"user.last"</span><span class="token operator">:</span>  <span class="token string">"White"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从结果可以看到，两条数据都被查询出来了。</p>
<p><img src="@source/notes/record/ES中的Nested数据类型/assets/image-20231117141219478.png" alt="image-20231117141219478"></p>
<h2 id="二-nested-类型" tabindex="-1"><a class="header-anchor" href="#二-nested-类型" aria-hidden="true">#</a> （二）Nested 类型</h2>
<p>这个时候就需要用到<strong>nested</strong>，nested 类型是 object 数据类型的特殊版本，它允许对象数组以一种可以相互独立查询的方式进行索引。</p>
<p>在 Nested 内部，每个对象索引其实是一个单独的隐藏文档，这意味着每个嵌套对象都可以独立于其他对象进行查询。</p>
<p>使用 Nested 需要先创建索引，依旧通过上边的这个例子</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>DELETE my_index

PUT my_index
<span class="token punctuation">{</span>
  <span class="token property">"mappings"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"properties"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"user"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"nested"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

PUT my_index/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span>
  <span class="token property">"group"</span> <span class="token operator">:</span> <span class="token string">"fans"</span><span class="token punctuation">,</span>
  <span class="token property">"user"</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"first"</span> <span class="token operator">:</span> <span class="token string">"John"</span><span class="token punctuation">,</span>
      <span class="token property">"last"</span> <span class="token operator">:</span>  <span class="token string">"Smith"</span><span class="token punctuation">,</span>
      <span class="token property">"age"</span> <span class="token operator">:</span> <span class="token string">"23"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"first"</span> <span class="token operator">:</span> <span class="token string">"Alice"</span><span class="token punctuation">,</span>
      <span class="token property">"last"</span> <span class="token operator">:</span>  <span class="token string">"White"</span><span class="token punctuation">,</span>
      <span class="token property">"age"</span><span class="token operator">:</span><span class="token string">"24"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先创建 my_index 索引，设置 user 的类型为 nested，接着在查询时，需要通过 es 的 nested 查询语句查询，使用同样的方式查询 first 为 John，last 为 White 的用户，这次的结果是不存在。因为通过 nested 存储的对象是具有关联性的。</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>GET my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"nested"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"user"</span><span class="token punctuation">,</span>
      <span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"bool"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"must"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> <span class="token property">"match"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">"user.first"</span><span class="token operator">:</span> <span class="token string">"John"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token property">"match"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">"user.last"</span><span class="token operator">:</span>  <span class="token string">"White"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上边的 DSL 语句用 Java API 实现如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testNested</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
    <span class="token comment">//自己封装的一个获取RestHighLevelClient的类</span>
    <span class="token class-name">RestHighLevelClient</span> client<span class="token operator">=</span><span class="token class-name">ElasticSearchClient</span><span class="token punctuation">.</span><span class="token function">getClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">SearchRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token string">"my_index"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">SearchSourceBuilder</span> searchSourceBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchSourceBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">BoolQueryBuilder</span> boolQueryBuilder <span class="token operator">=</span> <span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">boolQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    boolQueryBuilder<span class="token punctuation">.</span><span class="token function">must</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchQuery</span><span class="token punctuation">(</span><span class="token string">"user.first"</span><span class="token punctuation">,</span><span class="token string">"John"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    boolQueryBuilder<span class="token punctuation">.</span><span class="token function">must</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchQuery</span><span class="token punctuation">(</span><span class="token string">"user.last"</span><span class="token punctuation">,</span><span class="token string">"White"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    searchSourceBuilder<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">nestedQuery</span><span class="token punctuation">(</span><span class="token string">"user"</span><span class="token punctuation">,</span>boolQueryBuilder<span class="token punctuation">,</span> <span class="token class-name">ScoreMode<span class="token punctuation">.</span>None</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    request<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>searchSourceBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">SearchResponse</span> search <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">SearchHit</span><span class="token punctuation">[</span><span class="token punctuation">]</span> hits <span class="token operator">=</span> search<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> hits<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SearchHit</span> hit <span class="token operator">=</span> hits<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>hit<span class="token punctuation">.</span><span class="token function">getSourceAsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-使用-nested-进行聚合查询" tabindex="-1"><a class="header-anchor" href="#三-使用-nested-进行聚合查询" aria-hidden="true">#</a> （三）使用 nested 进行聚合查询</h2>
<p>除了使用 nested 进行普通查询外，nested 也支持聚合查询，同样是上面的例子，现在做一个对年龄聚合的操作：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>GET my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">"aggs"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"nestedAgg"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"nested"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"user"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"aggs"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"ageAgg"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"terms"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"field"</span><span class="token operator">:</span> <span class="token string">"user.age.keyword"</span><span class="token punctuation">,</span>
            <span class="token property">"size"</span><span class="token operator">:</span> <span class="token number">10</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四-nested-中的-inner-hits" tabindex="-1"><a class="header-anchor" href="#四-nested-中的-inner-hits" aria-hidden="true">#</a> （四）nested 中的 inner_hits</h2>
<p>查询 nested 对象时，只要查询条件符合这个 nested 对象里的某一个条件，整个 nested 对象都会被检索出来。比如上面这个例子中，我只想查询叫做 John Smith 的这个人，但是通过普通的 query 查询会把整条记录都查询出来，效果就是这样：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"hits"</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"_index"</span> <span class="token operator">:</span> <span class="token string">"my_index"</span><span class="token punctuation">,</span>
        <span class="token property">"_type"</span> <span class="token operator">:</span> <span class="token string">"_doc"</span><span class="token punctuation">,</span>
        <span class="token property">"_id"</span> <span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
        <span class="token property">"_score"</span> <span class="token operator">:</span> <span class="token number">1.3862942</span><span class="token punctuation">,</span>
        <span class="token property">"_source"</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"group"</span> <span class="token operator">:</span> <span class="token string">"fans"</span><span class="token punctuation">,</span>
          <span class="token property">"user"</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token property">"first"</span> <span class="token operator">:</span> <span class="token string">"John"</span><span class="token punctuation">,</span>
              <span class="token property">"last"</span> <span class="token operator">:</span> <span class="token string">"Smith"</span><span class="token punctuation">,</span>
              <span class="token property">"age"</span> <span class="token operator">:</span> <span class="token string">"23"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token property">"first"</span> <span class="token operator">:</span> <span class="token string">"Alice"</span><span class="token punctuation">,</span>
              <span class="token property">"last"</span> <span class="token operator">:</span> <span class="token string">"White"</span><span class="token punctuation">,</span>
              <span class="token property">"age"</span> <span class="token operator">:</span> <span class="token string">"24"</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果只想要 nested 中里的一个对象，就可以使用 inner_hits。使用比较简单，只需要在查询语句之后加上 inner_hits 即可。</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>GET my_index/_search
<span class="token punctuation">{</span>
  <span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"nested"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"user"</span><span class="token punctuation">,</span>
      <span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"bool"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"must"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> <span class="token property">"match"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">"user.first"</span><span class="token operator">:</span> <span class="token string">"John"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token property">"match"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">"user.last"</span><span class="token operator">:</span>  <span class="token string">"Smith"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"inner_hits"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询结果里就会多出来一块数据，里面就只会展示具体的 nested 对象：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"inner_hits"</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"user"</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"hits"</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">"total"</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">"value"</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">"relation"</span> <span class="token operator">:</span> <span class="token string">"eq"</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token property">"max_score"</span> <span class="token operator">:</span> <span class="token number">1.3862942</span><span class="token punctuation">,</span>
              <span class="token property">"hits"</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                  <span class="token property">"_index"</span> <span class="token operator">:</span> <span class="token string">"my_index"</span><span class="token punctuation">,</span>
                  <span class="token property">"_type"</span> <span class="token operator">:</span> <span class="token string">"_doc"</span><span class="token punctuation">,</span>
                  <span class="token property">"_id"</span> <span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
                  <span class="token property">"_nested"</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"field"</span> <span class="token operator">:</span> <span class="token string">"user"</span><span class="token punctuation">,</span>
                    <span class="token property">"offset"</span> <span class="token operator">:</span> <span class="token number">0</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token property">"_score"</span> <span class="token operator">:</span> <span class="token number">1.3862942</span><span class="token punctuation">,</span>
                  <span class="token property">"_source"</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">"last"</span> <span class="token operator">:</span> <span class="token string">"Smith"</span><span class="token punctuation">,</span>
                    <span class="token property">"first"</span> <span class="token operator">:</span> <span class="token string">"John"</span><span class="token punctuation">,</span>
                    <span class="token property">"age"</span> <span class="token operator">:</span> <span class="token string">"23"</span>
                  <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五-nested-的使用建议" tabindex="-1"><a class="header-anchor" href="#五-nested-的使用建议" aria-hidden="true">#</a> （五）nested 的使用建议</h2>
<p>nested 可以很好地存储和查询对象类型数据，但是也不能滥用 nested。每个 nested 对象都被索引为一个单独的文档，简单来讲就是如果一个索引里包含 100 个 user 对象，那么在实际底层将创建 101 个 Lucene 文档，是一个很大的消耗。</p>
<p>nested 类型只应在特殊情况下使用，一个索引在创建的时候，nested 类型的对象默认不能超过 50 个，可通过<code v-pre>index.mapping.nested_fields.limit</code>修改。</p>
<p>一个具体的文档中，nested 类型中包含的嵌套对象的数量默认不能超过 10000 个，也就是说上面创建的 user 在一个文档里不能超过 10000 个，可通过<code v-pre>index.mapping.nested_objects.limit</code>修改。</p>
</div></template>


