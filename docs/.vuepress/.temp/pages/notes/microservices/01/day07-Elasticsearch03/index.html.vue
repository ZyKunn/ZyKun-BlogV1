<template><div><h1 id="分布式搜索引擎-03-🥩" tabindex="-1"><a class="header-anchor" href="#分布式搜索引擎-03-🥩" aria-hidden="true">#</a> 分布式搜索引擎 03 🥩</h1>
<nav class="table-of-contents"><ul><li><router-link to="#_1-1-聚合的种类">1.1.聚合的种类</router-link></li><li><router-link to="#_1-2-dsl-实现聚合">1.2.DSL 实现聚合</router-link><ul><li><router-link to="#_1-2-1-bucket-聚合语法">1.2.1.Bucket 聚合语法</router-link></li><li><router-link to="#_1-2-2-聚合结果排序">1.2.2.聚合结果排序</router-link></li><li><router-link to="#_1-2-3-限定聚合范围">1.2.3.限定聚合范围</router-link></li><li><router-link to="#_1-2-4-metric-聚合语法">1.2.4.Metric 聚合语法</router-link></li><li><router-link to="#_1-2-5-小结">1.2.5.小结</router-link></li></ul></li><li><router-link to="#_1-3-restapi-实现聚合">1.3.RestAPI 实现聚合</router-link><ul><li><router-link to="#_1-3-1-api-语法">1.3.1.API 语法</router-link></li><li><router-link to="#_1-3-2-业务需求">1.3.2.业务需求</router-link></li><li><router-link to="#_1-3-3-业务实现">1.3.3.业务实现</router-link></li></ul></li><li><router-link to="#_2-1-拼音分词器">2.1.拼音分词器</router-link></li><li><router-link to="#_2-2-自定义分词器">2.2.自定义分词器</router-link></li><li><router-link to="#_2-3-自动补全查询">2.3.自动补全查询</router-link></li><li><router-link to="#_2-4-实现酒店搜索框自动补全">2.4.实现酒店搜索框自动补全</router-link><ul><li><router-link to="#_2-4-1-修改酒店映射结构">2.4.1.修改酒店映射结构</router-link></li><li><router-link to="#_2-4-2-修改-hoteldoc-实体">2.4.2.修改 HotelDoc 实体</router-link></li><li><router-link to="#_2-4-3-重新导入">2.4.3.重新导入</router-link></li><li><router-link to="#_2-4-4-自动补全查询的-javaapi">2.4.4.自动补全查询的 JavaAPI</router-link></li><li><router-link to="#_2-4-5-实现搜索框自动补全">2.4.5.实现搜索框自动补全</router-link></li></ul></li><li><router-link to="#_3-1-思路分析">3.1.思路分析</router-link><ul><li><router-link to="#_3-1-1-同步调用">3.1.1.同步调用</router-link></li><li><router-link to="#_3-1-2-异步通知">3.1.2.异步通知</router-link></li><li><router-link to="#_3-1-3-监听-binlog">3.1.3.监听 binlog</router-link></li><li><router-link to="#_3-1-4-选择">3.1.4.选择</router-link></li></ul></li><li><router-link to="#_3-2-实现数据同步">3.2.实现数据同步</router-link><ul><li><router-link to="#_3-2-1-思路">3.2.1.思路</router-link></li><li><router-link to="#_3-2-2-导入-demo">3.2.2.导入 demo</router-link></li><li><router-link to="#_3-2-3-声明交换机、队列">3.2.3.声明交换机、队列</router-link></li><li><router-link to="#_3-2-4-发送-mq-消息">3.2.4.发送 MQ 消息</router-link></li><li><router-link to="#_3-2-5-接收-mq-消息">3.2.5.接收 MQ 消息</router-link></li></ul></li><li><router-link to="#_4-1-搭建-es-集群">4.1.搭建 ES 集群</router-link></li><li><router-link to="#_4-2-集群脑裂问题">4.2.集群脑裂问题</router-link><ul><li><router-link to="#_4-2-1-集群职责划分">4.2.1.集群职责划分</router-link></li><li><router-link to="#_4-2-2-脑裂问题">4.2.2.脑裂问题</router-link></li><li><router-link to="#_4-2-3-小结">4.2.3.小结</router-link></li></ul></li><li><router-link to="#_4-3-集群分布式存储">4.3.集群分布式存储</router-link><ul><li><router-link to="#_4-3-1-分片存储测试">4.3.1.分片存储测试</router-link></li><li><router-link to="#_4-3-2-分片存储原理">4.3.2.分片存储原理</router-link></li></ul></li><li><router-link to="#_4-4-集群分布式查询">4.4.集群分布式查询</router-link></li><li><router-link to="#_4-5-集群故障转移">4.5.集群故障转移</router-link></li><li><router-link to="#总结">总结</router-link></li></ul></nav>
<h1 id="_0-学习目标" tabindex="-1"><a class="header-anchor" href="#_0-学习目标" aria-hidden="true">#</a> 0.学习目标</h1>
<h1 id="_1-数据聚合" tabindex="-1"><a class="header-anchor" href="#_1-数据聚合" aria-hidden="true">#</a> 1.数据聚合</h1>
<p><a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations.html" target="_blank" rel="noopener noreferrer">聚合（aggregations）<ExternalLinkIcon/></a>可以让我们极其方便的实现对数据的统计、分析、运算。例如：</p>
<ul>
<li>什么品牌的手机最受欢迎？</li>
<li>这些手机的平均价格、最高价格、最低价格？</li>
<li>这些手机每月的销售情况如何？</li>
</ul>
<p>实现这些统计功能的比数据库的 sql 要方便的多，而且查询速度非常快，可以实现近实时搜索效果。</p>
<h2 id="_1-1-聚合的种类" tabindex="-1"><a class="header-anchor" href="#_1-1-聚合的种类" aria-hidden="true">#</a> 1.1.聚合的种类</h2>
<p>聚合常见的有三类：</p>
<ul>
<li>
<p><strong>桶(Bucket)</strong> 聚合：用来对文档做分组</p>
<ul>
<li>TermAggregation：按照文档字段值分组，例如按照品牌值分组、按照国家分组</li>
<li>Date Histogram：按照日期阶梯分组，例如一周为一组，或者一月为一组</li>
</ul>
</li>
<li>
<p><strong>度量（Metric）</strong> 聚合：用以计算一些值，比如：最大值、最小值、平均值等</p>
<ul>
<li>Avg：求平均值</li>
<li>Max：求最大值</li>
<li>Min：求最小值</li>
<li>Stats：同时求 max、min、avg、sum 等</li>
</ul>
</li>
<li>
<p><strong>管道（pipeline）</strong> 聚合：其它聚合的结果为基础做聚合</p>
</li>
</ul>
<blockquote>
<p><strong>注意：</strong> 参加聚合的字段必须是 keyword、日期、数值、布尔类型</p>
</blockquote>
<h2 id="_1-2-dsl-实现聚合" tabindex="-1"><a class="header-anchor" href="#_1-2-dsl-实现聚合" aria-hidden="true">#</a> 1.2.DSL 实现聚合</h2>
<p>现在，我们要统计所有数据中的酒店品牌有几种，其实就是按照品牌对数据分组。此时可以根据酒店品牌的名称做聚合，也就是 Bucket 聚合。</p>
<h3 id="_1-2-1-bucket-聚合语法" tabindex="-1"><a class="header-anchor" href="#_1-2-1-bucket-聚合语法" aria-hidden="true">#</a> 1.2.1.Bucket 聚合语法</h3>
<p>语法如下：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>GET /hotel/_search
<span class="token punctuation">{</span>
  <span class="token property">"size"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>  <span class="token comment">// 设置size为0，结果中不包含文档，只包含聚合结果</span>
  <span class="token property">"aggs"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 定义聚合</span>
    <span class="token property">"brandAgg"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//给聚合起个名字</span>
      <span class="token property">"terms"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 聚合的类型，按照品牌值聚合，所以选择term</span>
        <span class="token property">"field"</span><span class="token operator">:</span> <span class="token string">"brand"</span><span class="token punctuation">,</span> <span class="token comment">// 参与聚合的字段</span>
        <span class="token property">"size"</span><span class="token operator">:</span> <span class="token number">20</span> <span class="token comment">// 希望获取的聚合结果数量</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果如图：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723171948228.png" alt="image-20210723171948228"></p>
<h3 id="_1-2-2-聚合结果排序" tabindex="-1"><a class="header-anchor" href="#_1-2-2-聚合结果排序" aria-hidden="true">#</a> 1.2.2.聚合结果排序</h3>
<p>默认情况下，Bucket 聚合会统计 Bucket 内的文档数量，记为_count，并且按照_count 降序排序。</p>
<p>我们可以指定 order 属性，自定义聚合的排序方式：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>GET /hotel/_search
<span class="token punctuation">{</span>
  <span class="token property">"size"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">"aggs"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"brandAgg"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"terms"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"field"</span><span class="token operator">:</span> <span class="token string">"brand"</span><span class="token punctuation">,</span>
        <span class="token property">"order"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"_count"</span><span class="token operator">:</span> <span class="token string">"asc"</span> <span class="token comment">// 按照_count升序排列</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"size"</span><span class="token operator">:</span> <span class="token number">20</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-3-限定聚合范围" tabindex="-1"><a class="header-anchor" href="#_1-2-3-限定聚合范围" aria-hidden="true">#</a> 1.2.3.限定聚合范围</h3>
<p>默认情况下，Bucket 聚合是对索引库的所有文档做聚合，但真实场景下，用户会输入搜索条件，因此聚合必须是对搜索结果聚合。那么聚合必须添加限定条件。</p>
<p>我们可以限定要聚合的文档范围，只要添加 query 条件即可：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>GET /hotel/_search
<span class="token punctuation">{</span>
  <span class="token property">"query"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"range"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"price"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"lte"</span><span class="token operator">:</span> <span class="token number">200</span> <span class="token comment">// 只对200元以下的文档聚合</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token property">"size"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">"aggs"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"brandAgg"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"terms"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"field"</span><span class="token operator">:</span> <span class="token string">"brand"</span><span class="token punctuation">,</span>
        <span class="token property">"size"</span><span class="token operator">:</span> <span class="token number">20</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这次，聚合得到的品牌明显变少了：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723172404836.png" alt="image-20210723172404836"></p>
<h3 id="_1-2-4-metric-聚合语法" tabindex="-1"><a class="header-anchor" href="#_1-2-4-metric-聚合语法" aria-hidden="true">#</a> 1.2.4.Metric 聚合语法</h3>
<p>上节课，我们对酒店按照品牌分组，形成了一个个桶。现在我们需要对桶内的酒店做运算，获取每个品牌的用户评分的 min、max、avg 等值。</p>
<p>这就要用到 Metric 聚合了，例如 stat 聚合：就可以获取 min、max、avg 等结果。</p>
<p>语法如下：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>GET /hotel/_search
<span class="token punctuation">{</span>
  <span class="token property">"size"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
  <span class="token property">"aggs"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"brandAgg"</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
      <span class="token property">"terms"</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
        <span class="token property">"field"</span><span class="token operator">:</span> <span class="token string">"brand"</span><span class="token punctuation">,</span> 
        <span class="token property">"size"</span><span class="token operator">:</span> <span class="token number">20</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"aggs"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 是brands聚合的子聚合，也就是分组后对每组分别计算</span>
        <span class="token property">"score_stats"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 聚合名称</span>
          <span class="token property">"stats"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 聚合类型，这里stats可以计算min、max、avg等</span>
            <span class="token property">"field"</span><span class="token operator">:</span> <span class="token string">"score"</span> <span class="token comment">// 聚合字段，这里是score</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这次的 score_stats 聚合是在 brandAgg 的聚合内部嵌套的子聚合。因为我们需要在每个桶分别计算。</p>
<p>另外，我们还可以给聚合结果做个排序，例如按照每个桶的酒店平均分做排序：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723172917636.png" alt="image-20210723172917636"></p>
<h3 id="_1-2-5-小结" tabindex="-1"><a class="header-anchor" href="#_1-2-5-小结" aria-hidden="true">#</a> 1.2.5.小结</h3>
<p>aggs 代表聚合，与 query 同级，此时 query 的作用是？</p>
<ul>
<li>限定聚合的的文档范围</li>
</ul>
<p>聚合必须的三要素：</p>
<ul>
<li>聚合名称</li>
<li>聚合类型</li>
<li>聚合字段</li>
</ul>
<p>聚合可配置属性有：</p>
<ul>
<li>size：指定聚合结果数量</li>
<li>order：指定聚合结果排序方式</li>
<li>field：指定聚合字段</li>
</ul>
<h2 id="_1-3-restapi-实现聚合" tabindex="-1"><a class="header-anchor" href="#_1-3-restapi-实现聚合" aria-hidden="true">#</a> 1.3.RestAPI 实现聚合</h2>
<h3 id="_1-3-1-api-语法" tabindex="-1"><a class="header-anchor" href="#_1-3-1-api-语法" aria-hidden="true">#</a> 1.3.1.API 语法</h3>
<p>聚合条件与 query 条件同级别，因此需要使用 request.source()来指定聚合条件。</p>
<p>聚合条件的语法：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723173057733.png" alt="image-20210723173057733"></p>
<p>聚合的结果也与查询结果不同，API 也比较特殊。不过同样是 JSON 逐层解析：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723173215728.png" alt="image-20210723173215728"></p>
<h3 id="_1-3-2-业务需求" tabindex="-1"><a class="header-anchor" href="#_1-3-2-业务需求" aria-hidden="true">#</a> 1.3.2.业务需求</h3>
<p>需求：搜索页面的品牌、城市等信息不应该是在页面写死，而是通过聚合索引库中的酒店数据得来的：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723192605566.png" alt="image-20210723192605566"></p>
<p>分析：</p>
<p>目前，页面的城市列表、星级列表、品牌列表都是写死的，并不会随着搜索结果的变化而变化。但是用户搜索条件改变时，搜索结果会跟着变化。</p>
<p>例如：用户搜索“东方明珠”，那搜索的酒店肯定是在上海东方明珠附近，因此，城市只能是上海，此时城市列表中就不应该显示北京、深圳、杭州这些信息了。</p>
<p>也就是说，搜索结果中包含哪些城市，页面就应该列出哪些城市；搜索结果中包含哪些品牌，页面就应该列出哪些品牌。</p>
<p>如何得知搜索结果中包含哪些品牌？如何得知搜索结果中包含哪些城市？</p>
<p>使用聚合功能，利用 Bucket 聚合，对搜索结果中的文档基于品牌分组、基于城市分组，就能得知包含哪些品牌、哪些城市了。</p>
<p>因为是对搜索结果聚合，因此聚合是<strong>限定范围的聚合</strong> ，也就是说聚合的限定条件跟搜索文档的条件一致。</p>
<p>查看浏览器可以发现，前端其实已经发出了这样的一个请求：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723193730799.png" alt="image-20210723193730799"></p>
<p>请求<strong>参数与搜索文档的参数完全一致</strong> 。</p>
<p>返回值类型就是页面要展示的最终结果：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723203915982.png" alt="image-20210723203915982"></p>
<p>结果是一个 Map 结构：</p>
<ul>
<li>key 是字符串，城市、星级、品牌、价格</li>
<li>value 是集合，例如多个城市的名称</li>
</ul>
<h3 id="_1-3-3-业务实现" tabindex="-1"><a class="header-anchor" href="#_1-3-3-业务实现" aria-hidden="true">#</a> 1.3.3.业务实现</h3>
<p>在<code v-pre>cn.itcast.hotel.web</code>包的<code v-pre>HotelController</code>中添加一个方法，遵循下面的要求：</p>
<ul>
<li>请求方式：<code v-pre>POST</code></li>
<li>请求路径：<code v-pre>/hotel/filters</code></li>
<li>请求参数：<code v-pre>RequestParams</code>，与搜索文档的参数一致</li>
<li>返回值类型：<code v-pre>Map&lt;String, List&lt;String&gt;&gt;</code></li>
</ul>
<p>代码：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">"filters"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span><span class="token punctuation">></span></span> <span class="token function">getFilters</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">RequestParams</span> params<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> hotelService<span class="token punctuation">.</span><span class="token function">getFilters</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里调用了 IHotelService 中的 getFilters 方法，尚未实现。</p>
<p>在<code v-pre>cn.itcast.hotel.service.IHotelService</code>中定义新方法：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span><span class="token punctuation">></span></span> <span class="token function">filters</span><span class="token punctuation">(</span><span class="token class-name">RequestParams</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在<code v-pre>cn.itcast.hotel.service.impl.HotelService</code>中实现该方法：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span><span class="token punctuation">></span></span> <span class="token function">filters</span><span class="token punctuation">(</span><span class="token class-name">RequestParams</span> params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1.准备Request</span>
        <span class="token class-name">SearchRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token string">"hotel"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 2.准备DSL</span>
        <span class="token comment">// 2.1.query</span>
        <span class="token function">buildBasicQuery</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 2.2.设置size</span>
        request<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 2.3.聚合</span>
        <span class="token function">buildAggregation</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 3.发出请求</span>
        <span class="token class-name">SearchResponse</span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 4.解析结果</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span><span class="token punctuation">></span></span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Aggregations</span> aggregations <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">getAggregations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 4.1.根据品牌名称，获取品牌结果</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> brandList <span class="token operator">=</span> <span class="token function">getAggByName</span><span class="token punctuation">(</span>aggregations<span class="token punctuation">,</span> <span class="token string">"brandAgg"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        result<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"品牌"</span><span class="token punctuation">,</span> brandList<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 4.2.根据品牌名称，获取品牌结果</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> cityList <span class="token operator">=</span> <span class="token function">getAggByName</span><span class="token punctuation">(</span>aggregations<span class="token punctuation">,</span> <span class="token string">"cityAgg"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        result<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"城市"</span><span class="token punctuation">,</span> cityList<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 4.3.根据品牌名称，获取品牌结果</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> starList <span class="token operator">=</span> <span class="token function">getAggByName</span><span class="token punctuation">(</span>aggregations<span class="token punctuation">,</span> <span class="token string">"starAgg"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        result<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"星级"</span><span class="token punctuation">,</span> starList<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">buildAggregation</span><span class="token punctuation">(</span><span class="token class-name">SearchRequest</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    request<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">aggregation</span><span class="token punctuation">(</span><span class="token class-name">AggregationBuilders</span>
                                 <span class="token punctuation">.</span><span class="token function">terms</span><span class="token punctuation">(</span><span class="token string">"brandAgg"</span><span class="token punctuation">)</span>
                                 <span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">"brand"</span><span class="token punctuation">)</span>
                                 <span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
                                <span class="token punctuation">)</span><span class="token punctuation">;</span>
    request<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">aggregation</span><span class="token punctuation">(</span><span class="token class-name">AggregationBuilders</span>
                                 <span class="token punctuation">.</span><span class="token function">terms</span><span class="token punctuation">(</span><span class="token string">"cityAgg"</span><span class="token punctuation">)</span>
                                 <span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">"city"</span><span class="token punctuation">)</span>
                                 <span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
                                <span class="token punctuation">)</span><span class="token punctuation">;</span>
    request<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">aggregation</span><span class="token punctuation">(</span><span class="token class-name">AggregationBuilders</span>
                                 <span class="token punctuation">.</span><span class="token function">terms</span><span class="token punctuation">(</span><span class="token string">"starAgg"</span><span class="token punctuation">)</span>
                                 <span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">"starName"</span><span class="token punctuation">)</span>
                                 <span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
                                <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token function">getAggByName</span><span class="token punctuation">(</span><span class="token class-name">Aggregations</span> aggregations<span class="token punctuation">,</span> <span class="token class-name">String</span> aggName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 4.1.根据聚合名称获取聚合结果</span>
    <span class="token class-name">Terms</span> brandTerms <span class="token operator">=</span> aggregations<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>aggName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 4.2.获取buckets</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Terms<span class="token punctuation">.</span>Bucket</span><span class="token punctuation">></span></span> buckets <span class="token operator">=</span> brandTerms<span class="token punctuation">.</span><span class="token function">getBuckets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 4.3.遍历</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> brandList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Terms<span class="token punctuation">.</span>Bucket</span> bucket <span class="token operator">:</span> buckets<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 4.4.获取key</span>
        <span class="token class-name">String</span> key <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">getKeyAsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        brandList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> brandList<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-自动补全" tabindex="-1"><a class="header-anchor" href="#_2-自动补全" aria-hidden="true">#</a> 2.自动补全</h1>
<p>当用户在搜索框输入字符时，我们应该提示出与该字符有关的搜索项，如图：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723204936367.png" alt="image-20210723204936367"></p>
<p>这种根据用户输入的字母，提示完整词条的功能，就是自动补全了。</p>
<p>因为需要根据拼音字母来推断，因此要用到拼音分词功能。</p>
<h2 id="_2-1-拼音分词器" tabindex="-1"><a class="header-anchor" href="#_2-1-拼音分词器" aria-hidden="true">#</a> 2.1.拼音分词器</h2>
<p>要实现根据字母做补全，就必须对文档按照拼音分词。在 GitHub 上恰好有 elasticsearch 的拼音分词插件。地址：https://github.com/medcl/elasticsearch-analysis-pinyin</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723205932746.png" alt="image-20210723205932746"></p>
<p>课前资料中也提供了拼音分词器的安装包：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723205722303.png" alt="image-20210723205722303"></p>
<p>安装方式与 IK 分词器一样，分三步：</p>
<p>​ ① 解压</p>
<p>​ ② 上传到虚拟机中，elasticsearch 的 plugin 目录</p>
<p>​ ③ 重启 elasticsearch</p>
<p>​ ④ 测试</p>
<p>详细安装步骤可以参考 IK 分词器的安装过程。</p>
<p>测试用法如下：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>POST /_analyze
<span class="token punctuation">{</span>
  <span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">"如家酒店还不错"</span><span class="token punctuation">,</span>
  <span class="token property">"analyzer"</span><span class="token operator">:</span> <span class="token string">"pinyin"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723210126506.png" alt="image-20210723210126506"></p>
<h2 id="_2-2-自定义分词器" tabindex="-1"><a class="header-anchor" href="#_2-2-自定义分词器" aria-hidden="true">#</a> 2.2.自定义分词器</h2>
<p>默认的拼音分词器会将每个汉字单独分为拼音，而我们希望的是每个词条形成一组拼音，需要对拼音分词器做个性化定制，形成自定义分词器。</p>
<p>elasticsearch 中分词器（analyzer）的组成包含三部分：</p>
<ul>
<li>character filters：在 tokenizer 之前对文本进行处理。例如删除字符、替换字符</li>
<li>tokenizer：将文本按照一定的规则切割成词条（term）。例如 keyword，就是不分词；还有 ik_smart</li>
<li>tokenizer filter：将 tokenizer 输出的词条做进一步处理。例如大小写转换、同义词处理、拼音处理等</li>
</ul>
<p>文档分词时会依次由这三部分来处理文档：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723210427878.png" alt="image-20210723210427878"></p>
<p>声明自定义分词器的语法如下：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>PUT /test
<span class="token punctuation">{</span>
  <span class="token property">"settings"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"analysis"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"analyzer"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 自定义分词器</span>
        <span class="token property">"my_analyzer"</span><span class="token operator">:</span> <span class="token punctuation">{</span>  <span class="token comment">// 分词器名称</span>
          <span class="token property">"tokenizer"</span><span class="token operator">:</span> <span class="token string">"ik_max_word"</span><span class="token punctuation">,</span>
          <span class="token property">"filter"</span><span class="token operator">:</span> <span class="token string">"py"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"filter"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 自定义tokenizer filter</span>
        <span class="token property">"py"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 过滤器名称</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"pinyin"</span><span class="token punctuation">,</span> <span class="token comment">// 过滤器类型，这里是pinyin</span>
		  <span class="token property">"keep_full_pinyin"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token property">"keep_joined_full_pinyin"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token property">"keep_original"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token property">"limit_first_letter_length"</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
          <span class="token property">"remove_duplicated_term"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token property">"none_chinese_pinyin_tokenize"</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"mappings"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"properties"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"text"</span><span class="token punctuation">,</span>
        <span class="token property">"analyzer"</span><span class="token operator">:</span> <span class="token string">"my_analyzer"</span><span class="token punctuation">,</span>
        <span class="token property">"search_analyzer"</span><span class="token operator">:</span> <span class="token string">"ik_smart"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723211829150.png" alt="image-20210723211829150"></p>
<p>总结：</p>
<p>如何使用拼音分词器？</p>
<ul>
<li>
<p>① 下载 pinyin 分词器</p>
</li>
<li>
<p>② 解压并放到 elasticsearch 的 plugin 目录</p>
</li>
<li>
<p>③ 重启即可</p>
</li>
</ul>
<p>如何自定义分词器？</p>
<ul>
<li>
<p>① 创建索引库时，在 settings 中配置，可以包含三部分</p>
</li>
<li>
<p>②character filter</p>
</li>
<li>
<p>③tokenizer</p>
</li>
<li>
<p>④filter</p>
</li>
</ul>
<p>拼音分词器注意事项？</p>
<ul>
<li>为了避免搜索到同音字，搜索时不要使用拼音分词器</li>
</ul>
<h2 id="_2-3-自动补全查询" tabindex="-1"><a class="header-anchor" href="#_2-3-自动补全查询" aria-hidden="true">#</a> 2.3.自动补全查询</h2>
<p>elasticsearch 提供了<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.6/search-suggesters.html" target="_blank" rel="noopener noreferrer">Completion Suggester<ExternalLinkIcon/></a>查询来实现自动补全功能。这个查询会匹配以用户输入内容开头的词条并返回。为了提高补全查询的效率，对于文档中字段的类型有一些约束：</p>
<ul>
<li>
<p>参与补全查询的字段必须是 completion 类型。</p>
</li>
<li>
<p>字段的内容一般是用来补全的多个词条形成的数组。</p>
</li>
</ul>
<p>比如，一个这样的索引库：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token comment">// 创建索引库</span>
PUT test
<span class="token punctuation">{</span>
  <span class="token property">"mappings"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"properties"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"title"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"completion"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后插入下面的数据：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token comment">// 示例数据</span>
POST test/_doc
<span class="token punctuation">{</span>
  <span class="token property">"title"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"Sony"</span><span class="token punctuation">,</span> <span class="token string">"WH-1000XM3"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
POST test/_doc
<span class="token punctuation">{</span>
  <span class="token property">"title"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"SK-II"</span><span class="token punctuation">,</span> <span class="token string">"PITERA"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
POST test/_doc
<span class="token punctuation">{</span>
  <span class="token property">"title"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"Nintendo"</span><span class="token punctuation">,</span> <span class="token string">"switch"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询的 DSL 语句如下：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token comment">// 自动补全查询</span>
GET /test/_search
<span class="token punctuation">{</span>
  <span class="token property">"suggest"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"title_suggest"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">"s"</span><span class="token punctuation">,</span> <span class="token comment">// 关键字</span>
      <span class="token property">"completion"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"field"</span><span class="token operator">:</span> <span class="token string">"title"</span><span class="token punctuation">,</span> <span class="token comment">// 补全查询的字段</span>
        <span class="token property">"skip_duplicates"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 跳过重复的</span>
        <span class="token property">"size"</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token comment">// 获取前10条结果</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-4-实现酒店搜索框自动补全" tabindex="-1"><a class="header-anchor" href="#_2-4-实现酒店搜索框自动补全" aria-hidden="true">#</a> 2.4.实现酒店搜索框自动补全</h2>
<p>现在，我们的 hotel 索引库还没有设置拼音分词器，需要修改索引库中的配置。但是我们知道索引库是无法修改的，只能删除然后重新创建。</p>
<p>另外，我们需要添加一个字段，用来做自动补全，将 brand、suggestion、city 等都放进去，作为自动补全的提示。</p>
<p>因此，总结一下，我们需要做的事情包括：</p>
<ol>
<li>
<p>修改 hotel 索引库结构，设置自定义拼音分词器</p>
</li>
<li>
<p>修改索引库的 name、all 字段，使用自定义分词器</p>
</li>
<li>
<p>索引库添加一个新字段 suggestion，类型为 completion 类型，使用自定义的分词器</p>
</li>
<li>
<p>给 HotelDoc 类添加 suggestion 字段，内容包含 brand、business</p>
</li>
<li>
<p>重新导入数据到 hotel 库</p>
</li>
</ol>
<h3 id="_2-4-1-修改酒店映射结构" tabindex="-1"><a class="header-anchor" href="#_2-4-1-修改酒店映射结构" aria-hidden="true">#</a> 2.4.1.修改酒店映射结构</h3>
<p>代码如下：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token comment">// 酒店数据索引库</span>
PUT /hotel
<span class="token punctuation">{</span>
  <span class="token property">"settings"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"analysis"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"analyzer"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"text_anlyzer"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"tokenizer"</span><span class="token operator">:</span> <span class="token string">"ik_max_word"</span><span class="token punctuation">,</span>
          <span class="token property">"filter"</span><span class="token operator">:</span> <span class="token string">"py"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"completion_analyzer"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"tokenizer"</span><span class="token operator">:</span> <span class="token string">"keyword"</span><span class="token punctuation">,</span>
          <span class="token property">"filter"</span><span class="token operator">:</span> <span class="token string">"py"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"filter"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"py"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"pinyin"</span><span class="token punctuation">,</span>
          <span class="token property">"keep_full_pinyin"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token property">"keep_joined_full_pinyin"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token property">"keep_original"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token property">"limit_first_letter_length"</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
          <span class="token property">"remove_duplicated_term"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token property">"none_chinese_pinyin_tokenize"</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"mappings"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"properties"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"keyword"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"name"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"text"</span><span class="token punctuation">,</span>
        <span class="token property">"analyzer"</span><span class="token operator">:</span> <span class="token string">"text_anlyzer"</span><span class="token punctuation">,</span>
        <span class="token property">"search_analyzer"</span><span class="token operator">:</span> <span class="token string">"ik_smart"</span><span class="token punctuation">,</span>
        <span class="token property">"copy_to"</span><span class="token operator">:</span> <span class="token string">"all"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"address"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"keyword"</span><span class="token punctuation">,</span>
        <span class="token property">"index"</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"price"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"integer"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"score"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"integer"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"brand"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"keyword"</span><span class="token punctuation">,</span>
        <span class="token property">"copy_to"</span><span class="token operator">:</span> <span class="token string">"all"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"city"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"keyword"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"starName"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"keyword"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"business"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"keyword"</span><span class="token punctuation">,</span>
        <span class="token property">"copy_to"</span><span class="token operator">:</span> <span class="token string">"all"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"location"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"geo_point"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"pic"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"keyword"</span><span class="token punctuation">,</span>
        <span class="token property">"index"</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"all"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"text"</span><span class="token punctuation">,</span>
        <span class="token property">"analyzer"</span><span class="token operator">:</span> <span class="token string">"text_anlyzer"</span><span class="token punctuation">,</span>
        <span class="token property">"search_analyzer"</span><span class="token operator">:</span> <span class="token string">"ik_smart"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"suggestion"</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"completion"</span><span class="token punctuation">,</span>
          <span class="token property">"analyzer"</span><span class="token operator">:</span> <span class="token string">"completion_analyzer"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-2-修改-hoteldoc-实体" tabindex="-1"><a class="header-anchor" href="#_2-4-2-修改-hoteldoc-实体" aria-hidden="true">#</a> 2.4.2.修改 HotelDoc 实体</h3>
<p>HotelDoc 中要添加一个字段，用来做自动补全，内容可以是酒店品牌、城市、商圈等信息。按照自动补全字段的要求，最好是这些字段的数组。</p>
<p>因此我们在 HotelDoc 中添加一个 suggestion 字段，类型为<code v-pre>List&lt;String&gt;</code>，然后将 brand、city、business 等信息放到里面。</p>
<p>代码如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">cn<span class="token punctuation">.</span>itcast<span class="token punctuation">.</span>hotel<span class="token punctuation">.</span>pojo</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">NoArgsConstructor</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Collections</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HotelDoc</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> address<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> price<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> score<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> brand<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> city<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> starName<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> business<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> location<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> pic<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Object</span> distance<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Boolean</span> isAD<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> suggestion<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">HotelDoc</span><span class="token punctuation">(</span><span class="token class-name">Hotel</span> hotel<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> hotel<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> hotel<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>address <span class="token operator">=</span> hotel<span class="token punctuation">.</span><span class="token function">getAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> hotel<span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">=</span> hotel<span class="token punctuation">.</span><span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>brand <span class="token operator">=</span> hotel<span class="token punctuation">.</span><span class="token function">getBrand</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>city <span class="token operator">=</span> hotel<span class="token punctuation">.</span><span class="token function">getCity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>starName <span class="token operator">=</span> hotel<span class="token punctuation">.</span><span class="token function">getStarName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>business <span class="token operator">=</span> hotel<span class="token punctuation">.</span><span class="token function">getBusiness</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>location <span class="token operator">=</span> hotel<span class="token punctuation">.</span><span class="token function">getLatitude</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">", "</span> <span class="token operator">+</span> hotel<span class="token punctuation">.</span><span class="token function">getLongitude</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pic <span class="token operator">=</span> hotel<span class="token punctuation">.</span><span class="token function">getPic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 组装suggestion</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>business<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// business有多个值，需要切割</span>
            <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>business<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 添加元素</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>suggestion <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>suggestion<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>suggestion<span class="token punctuation">,</span> arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>suggestion <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>brand<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>business<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-3-重新导入" tabindex="-1"><a class="header-anchor" href="#_2-4-3-重新导入" aria-hidden="true">#</a> 2.4.3.重新导入</h3>
<p>重新执行之前编写的导入数据功能，可以看到新的酒店数据中包含了 suggestion：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723213546183.png" alt="image-20210723213546183"></p>
<h3 id="_2-4-4-自动补全查询的-javaapi" tabindex="-1"><a class="header-anchor" href="#_2-4-4-自动补全查询的-javaapi" aria-hidden="true">#</a> 2.4.4.自动补全查询的 JavaAPI</h3>
<p>之前我们学习了自动补全查询的 DSL，而没有学习对应的 JavaAPI，这里给出一个示例：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723213759922.png" alt="image-20210723213759922"></p>
<p>而自动补全的结果也比较特殊，解析的代码如下：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723213917524.png" alt="image-20210723213917524"></p>
<h3 id="_2-4-5-实现搜索框自动补全" tabindex="-1"><a class="header-anchor" href="#_2-4-5-实现搜索框自动补全" aria-hidden="true">#</a> 2.4.5.实现搜索框自动补全</h3>
<p>查看前端页面，可以发现当我们在输入框键入时，前端会发起 ajax 请求：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723214021062.png" alt="image-20210723214021062"></p>
<p>返回值是补全词条的集合，类型为<code v-pre>List&lt;String&gt;</code></p>
<p>1）在<code v-pre>cn.itcast.hotel.web</code>包下的<code v-pre>HotelController</code>中添加新接口，接收新的请求：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"suggestion"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token function">getSuggestions</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">"key"</span><span class="token punctuation">)</span> <span class="token class-name">String</span> prefix<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> hotelService<span class="token punctuation">.</span><span class="token function">getSuggestions</span><span class="token punctuation">(</span>prefix<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）在<code v-pre>cn.itcast.hotel.service</code>包下的<code v-pre>IhotelService</code>中添加方法：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token function">getSuggestions</span><span class="token punctuation">(</span><span class="token class-name">String</span> prefix<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3）在<code v-pre>cn.itcast.hotel.service.impl.HotelService</code>中实现该方法：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token function">getSuggestions</span><span class="token punctuation">(</span><span class="token class-name">String</span> prefix<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1.准备Request</span>
        <span class="token class-name">SearchRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token string">"hotel"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 2.准备DSL</span>
        request<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">suggest</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SuggestBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addSuggestion</span><span class="token punctuation">(</span>
            <span class="token string">"suggestions"</span><span class="token punctuation">,</span>
            <span class="token class-name">SuggestBuilders</span><span class="token punctuation">.</span><span class="token function">completionSuggestion</span><span class="token punctuation">(</span><span class="token string">"suggestion"</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">prefix</span><span class="token punctuation">(</span>prefix<span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">skipDuplicates</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 3.发起请求</span>
        <span class="token class-name">SearchResponse</span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 4.解析结果</span>
        <span class="token class-name">Suggest</span> suggest <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">getSuggest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 4.1.根据补全查询名称，获取补全结果</span>
        <span class="token class-name">CompletionSuggestion</span> suggestions <span class="token operator">=</span> suggest<span class="token punctuation">.</span><span class="token function">getSuggestion</span><span class="token punctuation">(</span><span class="token string">"suggestions"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 4.2.获取options</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CompletionSuggestion<span class="token punctuation">.</span>Entry<span class="token punctuation">.</span>Option</span><span class="token punctuation">></span></span> options <span class="token operator">=</span> suggestions<span class="token punctuation">.</span><span class="token function">getOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 4.3.遍历</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>options<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">CompletionSuggestion<span class="token punctuation">.</span>Entry<span class="token punctuation">.</span>Option</span> option <span class="token operator">:</span> options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> text <span class="token operator">=</span> option<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-数据同步" tabindex="-1"><a class="header-anchor" href="#_3-数据同步" aria-hidden="true">#</a> 3.数据同步</h1>
<p>elasticsearch 中的酒店数据来自于 mysql 数据库，因此 mysql 数据发生改变时，elasticsearch 也必须跟着改变，这个就是 elasticsearch 与 mysql 之间的<strong>数据同步</strong> 。</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723214758392.png" alt="image-20210723214758392"></p>
<h2 id="_3-1-思路分析" tabindex="-1"><a class="header-anchor" href="#_3-1-思路分析" aria-hidden="true">#</a> 3.1.思路分析</h2>
<p>常见的数据同步方案有三种：</p>
<ul>
<li>同步调用</li>
<li>异步通知</li>
<li>监听 binlog</li>
</ul>
<h3 id="_3-1-1-同步调用" tabindex="-1"><a class="header-anchor" href="#_3-1-1-同步调用" aria-hidden="true">#</a> 3.1.1.同步调用</h3>
<p>方案一：同步调用</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723214931869.png" alt="image-20210723214931869"></p>
<p>基本步骤如下：</p>
<ul>
<li>hotel-demo 对外提供接口，用来修改 elasticsearch 中的数据</li>
<li>酒店管理服务在完成数据库操作后，直接调用 hotel-demo 提供的接口，</li>
</ul>
<h3 id="_3-1-2-异步通知" tabindex="-1"><a class="header-anchor" href="#_3-1-2-异步通知" aria-hidden="true">#</a> 3.1.2.异步通知</h3>
<p>方案二：异步通知</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723215140735.png" alt="image-20210723215140735"></p>
<p>流程如下：</p>
<ul>
<li>hotel-admin 对 mysql 数据库数据完成增、删、改后，发送 MQ 消息</li>
<li>hotel-demo 监听 MQ，接收到消息后完成 elasticsearch 数据修改</li>
</ul>
<h3 id="_3-1-3-监听-binlog" tabindex="-1"><a class="header-anchor" href="#_3-1-3-监听-binlog" aria-hidden="true">#</a> 3.1.3.监听 binlog</h3>
<p>方案三：监听 binlog</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723215518541.png" alt="image-20210723215518541"></p>
<p>流程如下：</p>
<ul>
<li>给 mysql 开启 binlog 功能</li>
<li>mysql 完成增、删、改操作都会记录在 binlog 中</li>
<li>hotel-demo 基于 canal 监听 binlog 变化，实时更新 elasticsearch 中的内容</li>
</ul>
<h3 id="_3-1-4-选择" tabindex="-1"><a class="header-anchor" href="#_3-1-4-选择" aria-hidden="true">#</a> 3.1.4.选择</h3>
<p>方式一：同步调用</p>
<ul>
<li>优点：实现简单，粗暴</li>
<li>缺点：业务耦合度高</li>
</ul>
<p>方式二：异步通知</p>
<ul>
<li>优点：低耦合，实现难度一般</li>
<li>缺点：依赖 mq 的可靠性</li>
</ul>
<p>方式三：监听 binlog</p>
<ul>
<li>优点：完全解除服务间耦合</li>
<li>缺点：开启 binlog 增加数据库负担、实现复杂度高</li>
</ul>
<h2 id="_3-2-实现数据同步" tabindex="-1"><a class="header-anchor" href="#_3-2-实现数据同步" aria-hidden="true">#</a> 3.2.实现数据同步</h2>
<h3 id="_3-2-1-思路" tabindex="-1"><a class="header-anchor" href="#_3-2-1-思路" aria-hidden="true">#</a> 3.2.1.思路</h3>
<p>利用课前资料提供的 hotel-admin 项目作为酒店管理的微服务。当酒店数据发生增、删、改时，要求对 elasticsearch 中数据也要完成相同操作。</p>
<p>步骤：</p>
<ul>
<li>
<p>导入课前资料提供的 hotel-admin 项目，启动并测试酒店数据的 CRUD</p>
</li>
<li>
<p>声明 exchange、queue、RoutingKey</p>
</li>
<li>
<p>在 hotel-admin 中的增、删、改业务中完成消息发送</p>
</li>
<li>
<p>在 hotel-demo 中完成消息监听，并更新 elasticsearch 中数据</p>
</li>
<li>
<p>启动并测试数据同步功能</p>
</li>
</ul>
<h3 id="_3-2-2-导入-demo" tabindex="-1"><a class="header-anchor" href="#_3-2-2-导入-demo" aria-hidden="true">#</a> 3.2.2.导入 demo</h3>
<p>导入课前资料提供的 hotel-admin 项目：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723220237930.png" alt="image-20210723220237930"></p>
<p>运行后，访问 http://localhost:8099</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723220354464.png" alt="image-20210723220354464"></p>
<p>其中包含了酒店的 CRUD 功能：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723220511090.png" alt="image-20210723220511090"></p>
<h3 id="_3-2-3-声明交换机、队列" tabindex="-1"><a class="header-anchor" href="#_3-2-3-声明交换机、队列" aria-hidden="true">#</a> 3.2.3.声明交换机、队列</h3>
<p>MQ 结构如图：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723215850307.png" alt="image-20210723215850307"></p>
<h4 id="_1-引入依赖" tabindex="-1"><a class="header-anchor" href="#_1-引入依赖" aria-hidden="true">#</a> 1）引入依赖</h4>
<p>在 hotel-admin、hotel-demo 中引入 rabbitmq 的依赖：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--amqp--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-amqp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-声明队列交换机名称" tabindex="-1"><a class="header-anchor" href="#_2-声明队列交换机名称" aria-hidden="true">#</a> 2）声明队列交换机名称</h4>
<p>在 hotel-admin 和 hotel-demo 中的<code v-pre>cn.itcast.hotel.constatnts</code>包下新建一个类<code v-pre>MqConstants</code>：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">cn<span class="token punctuation">.</span>itcast<span class="token punctuation">.</span>hotel<span class="token punctuation">.</span>constatnts</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MqConstants</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 交换机
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token constant">HOTEL_EXCHANGE</span> <span class="token operator">=</span> <span class="token string">"hotel.topic"</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 监听新增和修改的队列
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token constant">HOTEL_INSERT_QUEUE</span> <span class="token operator">=</span> <span class="token string">"hotel.insert.queue"</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 监听删除的队列
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token constant">HOTEL_DELETE_QUEUE</span> <span class="token operator">=</span> <span class="token string">"hotel.delete.queue"</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 新增或修改的RoutingKey
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token constant">HOTEL_INSERT_KEY</span> <span class="token operator">=</span> <span class="token string">"hotel.insert"</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 删除的RoutingKey
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token constant">HOTEL_DELETE_KEY</span> <span class="token operator">=</span> <span class="token string">"hotel.delete"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-声明队列交换机" tabindex="-1"><a class="header-anchor" href="#_3-声明队列交换机" aria-hidden="true">#</a> 3）声明队列交换机</h4>
<p>在 hotel-demo 中，定义配置类，声明队列、交换机：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">cn<span class="token punctuation">.</span>itcast<span class="token punctuation">.</span>hotel<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>itcast<span class="token punctuation">.</span>hotel<span class="token punctuation">.</span>constants<span class="token punctuation">.</span></span><span class="token class-name">MqConstants</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">Binding</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">BindingBuilder</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">Queue</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">TopicExchange</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MqConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">TopicExchange</span> <span class="token function">topicExchange</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">TopicExchange</span><span class="token punctuation">(</span><span class="token class-name">MqConstants</span><span class="token punctuation">.</span><span class="token constant">HOTEL_EXCHANGE</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Queue</span> <span class="token function">insertQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span><span class="token class-name">MqConstants</span><span class="token punctuation">.</span><span class="token constant">HOTEL_INSERT_QUEUE</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Queue</span> <span class="token function">deleteQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span><span class="token class-name">MqConstants</span><span class="token punctuation">.</span><span class="token constant">HOTEL_DELETE_QUEUE</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Binding</span> <span class="token function">insertQueueBinding</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">BindingBuilder</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token function">insertQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">to</span><span class="token punctuation">(</span><span class="token function">topicExchange</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">with</span><span class="token punctuation">(</span><span class="token class-name">MqConstants</span><span class="token punctuation">.</span><span class="token constant">HOTEL_INSERT_KEY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Binding</span> <span class="token function">deleteQueueBinding</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">BindingBuilder</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token function">deleteQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">to</span><span class="token punctuation">(</span><span class="token function">topicExchange</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">with</span><span class="token punctuation">(</span><span class="token class-name">MqConstants</span><span class="token punctuation">.</span><span class="token constant">HOTEL_DELETE_KEY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-4-发送-mq-消息" tabindex="-1"><a class="header-anchor" href="#_3-2-4-发送-mq-消息" aria-hidden="true">#</a> 3.2.4.发送 MQ 消息</h3>
<p>在 hotel-admin 中的增、删、改业务中分别发送 MQ 消息：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723221843816.png" alt="image-20210723221843816"></p>
<h3 id="_3-2-5-接收-mq-消息" tabindex="-1"><a class="header-anchor" href="#_3-2-5-接收-mq-消息" aria-hidden="true">#</a> 3.2.5.接收 MQ 消息</h3>
<p>hotel-demo 接收到 MQ 消息要做的事情包括：</p>
<ul>
<li>新增消息：根据传递的 hotel 的 id 查询 hotel 信息，然后新增一条数据到索引库</li>
<li>删除消息：根据传递的 hotel 的 id 删除索引库中的一条数据</li>
</ul>
<p>1）首先在 hotel-demo 的<code v-pre>cn.itcast.hotel.service</code>包下的<code v-pre>IHotelService</code>中新增新增、删除业务</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">deleteById</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">insertById</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）给 hotel-demo 中的<code v-pre>cn.itcast.hotel.service.impl</code>包下的 HotelService 中实现业务：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deleteById</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1.准备Request</span>
        <span class="token class-name">DeleteRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DeleteRequest</span><span class="token punctuation">(</span><span class="token string">"hotel"</span><span class="token punctuation">,</span> id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 2.发送请求</span>
        client<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">insertById</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token comment">// 0.根据id查询酒店数据</span>
        <span class="token class-name">Hotel</span> hotel <span class="token operator">=</span> <span class="token function">getById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 转换为文档类型</span>
        <span class="token class-name">HotelDoc</span> hotelDoc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HotelDoc</span><span class="token punctuation">(</span>hotel<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 1.准备Request对象</span>
        <span class="token class-name">IndexRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IndexRequest</span><span class="token punctuation">(</span><span class="token string">"hotel"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span>hotel<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 2.准备Json文档</span>
        request<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>hotelDoc<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">XContentType</span><span class="token punctuation">.</span><span class="token constant">JSON</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 3.发送请求</span>
        client<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3）编写监听器</p>
<p>在 hotel-demo 中的<code v-pre>cn.itcast.hotel.mq</code>包新增一个类：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">cn<span class="token punctuation">.</span>itcast<span class="token punctuation">.</span>hotel<span class="token punctuation">.</span>mq</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>itcast<span class="token punctuation">.</span>hotel<span class="token punctuation">.</span>constants<span class="token punctuation">.</span></span><span class="token class-name">MqConstants</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>itcast<span class="token punctuation">.</span>hotel<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">IHotelService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>amqp<span class="token punctuation">.</span>rabbit<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RabbitListener</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HotelListener</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">IHotelService</span> hotelService<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 监听酒店新增或修改的业务
     * <span class="token keyword">@param</span> <span class="token parameter">id</span> 酒店id
     */</span>
    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>queues <span class="token operator">=</span> <span class="token class-name">MqConstants</span><span class="token punctuation">.</span><span class="token constant">HOTEL_INSERT_QUEUE</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">listenHotelInsertOrUpdate</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        hotelService<span class="token punctuation">.</span><span class="token function">insertById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 监听酒店删除的业务
     * <span class="token keyword">@param</span> <span class="token parameter">id</span> 酒店id
     */</span>
    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>queues <span class="token operator">=</span> <span class="token class-name">MqConstants</span><span class="token punctuation">.</span><span class="token constant">HOTEL_DELETE_QUEUE</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">listenHotelDelete</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        hotelService<span class="token punctuation">.</span><span class="token function">deleteById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-集群" tabindex="-1"><a class="header-anchor" href="#_4-集群" aria-hidden="true">#</a> 4.集群</h1>
<p>单机的 elasticsearch 做数据存储，必然面临两个问题：海量数据存储问题、单点故障问题。</p>
<ul>
<li>海量数据存储问题：将索引库从逻辑上拆分为 N 个分片（shard），存储到多个节点</li>
<li>单点故障问题：将分片数据在不同节点备份（replica ）</li>
</ul>
<p><strong>ES 集群相关概念</strong>:</p>
<ul>
<li>
<p>集群（cluster）：一组拥有共同的 cluster name 的 节点。</p>
</li>
<li>
<font color="red">节点（node)</font> ：集群中的一个 Elasticearch 实例</li>
<li>
<font color="red">分片（shard）</font>：索引可以被拆分为不同的部分进行存储，称为分片。在集群环境下，一个索引的不同分片可以拆分到不同的节点中<p>解决问题：数据量太大，单点存储量有限的问题。</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20200104124440086-5602723.png" alt="image-20200104124440086"></p>
<blockquote>
<p>此处，我们把数据分成 3 片：shard0、shard1、shard2</p>
</blockquote>
</li>
<li>
<p>主分片（Primary shard）：相对于副本分片的定义。</p>
</li>
<li>
<p>副本分片（Replica shard）每个主分片可以有一个或者多个副本，数据和主分片一样。</p>
<p>​</p>
</li>
</ul>
<p>数据备份可以保证高可用，但是每个分片备份一份，所需要的节点数量就会翻一倍，成本实在是太高了！</p>
<p>为了在高可用和成本间寻求平衡，我们可以这样做：</p>
<ul>
<li>首先对数据分片，存储到不同节点</li>
<li>然后对每个分片进行备份，放到对方节点，完成互相备份</li>
</ul>
<p>这样可以大大减少所需要的服务节点数量，如图，我们以 3 分片，每个分片备份一份为例：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20200104124551912.png" alt="image-20200104124551912"></p>
<p>现在，每个分片都有 1 个备份，存储在 3 个节点：</p>
<ul>
<li>node0：保存了分片 0 和 1</li>
<li>node1：保存了分片 0 和 2</li>
<li>node2：保存了分片 1 和 2</li>
</ul>
<h2 id="_4-1-搭建-es-集群" tabindex="-1"><a class="header-anchor" href="#_4-1-搭建-es-集群" aria-hidden="true">#</a> 4.1.搭建 ES 集群</h2>
<p>参考课前资料的文档：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723222732427.png" alt="image-20210723222732427"></p>
<p>其中的第四章节：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723222812619.png" alt="image-20210723222812619"></p>
<h2 id="_4-2-集群脑裂问题" tabindex="-1"><a class="header-anchor" href="#_4-2-集群脑裂问题" aria-hidden="true">#</a> 4.2.集群脑裂问题</h2>
<h3 id="_4-2-1-集群职责划分" tabindex="-1"><a class="header-anchor" href="#_4-2-1-集群职责划分" aria-hidden="true">#</a> 4.2.1.集群职责划分</h3>
<p>elasticsearch 中集群节点有不同的职责划分：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723223008967.png" alt="image-20210723223008967"></p>
<p>默认情况下，集群中的任何一个节点都同时具备上述四种角色。</p>
<p>但是真实的集群一定要将集群职责分离：</p>
<ul>
<li>master 节点：对 CPU 要求高，但是内存要求第</li>
<li>data 节点：对 CPU 和内存要求都高</li>
<li>coordinating 节点：对网络带宽、CPU 要求高</li>
</ul>
<p>职责分离可以让我们根据不同节点的需求分配不同的硬件去部署。而且避免业务之间的互相干扰。</p>
<p>一个典型的 es 集群职责划分如图：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723223629142.png" alt="image-20210723223629142"></p>
<h3 id="_4-2-2-脑裂问题" tabindex="-1"><a class="header-anchor" href="#_4-2-2-脑裂问题" aria-hidden="true">#</a> 4.2.2.脑裂问题</h3>
<p>脑裂是因为集群中的节点失联导致的。</p>
<p>例如一个集群中，主节点与其它节点失联：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723223804995.png" alt="image-20210723223804995"></p>
<p>此时，node2 和 node3 认为 node1 宕机，就会重新选主：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723223845754.png" alt="image-20210723223845754"></p>
<p>当 node3 当选后，集群继续对外提供服务，node2 和 node3 自成集群，node1 自成集群，两个集群数据不同步，出现数据差异。</p>
<p>当网络恢复后，因为集群中有两个 master 节点，集群状态的不一致，出现脑裂的情况：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723224000555.png" alt="image-20210723224000555"></p>
<p>解决脑裂的方案是，要求选票超过 ( eligible 节点数量 + 1 ）/ 2 才能当选为主，因此 eligible 节点数量最好是奇数。对应配置项是 discovery.zen.minimum_master_nodes，在 es7.0 以后，已经成为默认配置，因此一般不会发生脑裂问题</p>
<p>例如：3 个节点形成的集群，选票必须超过 （3 + 1） / 2 ，也就是 2 票。node3 得到 node2 和 node3 的选票，当选为主。node1 只有自己 1 票，没有当选。集群中依然只有 1 个主节点，没有出现脑裂。</p>
<h3 id="_4-2-3-小结" tabindex="-1"><a class="header-anchor" href="#_4-2-3-小结" aria-hidden="true">#</a> 4.2.3.小结</h3>
<p>master eligible 节点的作用是什么？</p>
<ul>
<li>参与集群选主</li>
<li>主节点可以管理集群状态、管理分片信息、处理创建和删除索引库的请求</li>
</ul>
<p>data 节点的作用是什么？</p>
<ul>
<li>数据的 CRUD</li>
</ul>
<p>coordinator 节点的作用是什么？</p>
<ul>
<li>
<p>路由请求到其它节点</p>
</li>
<li>
<p>合并查询到的结果，返回给用户</p>
</li>
</ul>
<h2 id="_4-3-集群分布式存储" tabindex="-1"><a class="header-anchor" href="#_4-3-集群分布式存储" aria-hidden="true">#</a> 4.3.集群分布式存储</h2>
<p>当新增文档时，应该保存到不同分片，保证数据均衡，那么 coordinating node 如何确定数据该存储到哪个分片呢？</p>
<h3 id="_4-3-1-分片存储测试" tabindex="-1"><a class="header-anchor" href="#_4-3-1-分片存储测试" aria-hidden="true">#</a> 4.3.1.分片存储测试</h3>
<p>插入三条数据：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723225006058.png" alt="image-20210723225006058"></p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723225034637.png" alt="image-20210723225034637"></p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723225112029.png" alt="image-20210723225112029"></p>
<p>测试可以看到，三条数据分别在不同分片：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723225227928.png" alt="image-20210723225227928"></p>
<p>结果：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723225342120.png" alt="image-20210723225342120"></p>
<h3 id="_4-3-2-分片存储原理" tabindex="-1"><a class="header-anchor" href="#_4-3-2-分片存储原理" aria-hidden="true">#</a> 4.3.2.分片存储原理</h3>
<p>elasticsearch 会通过 hash 算法来计算文档应该存储到哪个分片：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723224354904.png" alt="image-20210723224354904"></p>
<p>说明：</p>
<ul>
<li>_routing 默认是文档的 id</li>
<li>算法与分片数量有关，因此索引库一旦创建，分片数量不能修改！</li>
</ul>
<p>新增文档的流程如下：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723225436084.png" alt="image-20210723225436084"></p>
<p>解读：</p>
<ul>
<li>1）新增一个 id=1 的文档</li>
<li>2）对 id 做 hash 运算，假如得到的是 2，则应该存储到 shard-2</li>
<li>3）shard-2 的主分片在 node3 节点，将数据路由到 node3</li>
<li>4）保存文档</li>
<li>5）同步给 shard-2 的副本 replica-2，在 node2 节点</li>
<li>6）返回结果给 coordinating-node 节点</li>
</ul>
<h2 id="_4-4-集群分布式查询" tabindex="-1"><a class="header-anchor" href="#_4-4-集群分布式查询" aria-hidden="true">#</a> 4.4.集群分布式查询</h2>
<p>elasticsearch 的查询分成两个阶段：</p>
<ul>
<li>
<p>scatter phase：分散阶段，coordinating node 会把请求分发到每一个分片</p>
</li>
<li>
<p>gather phase：聚集阶段，coordinating node 汇总 data node 的搜索结果，并处理为最终结果集返回给用户</p>
</li>
</ul>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723225809848.png" alt="image-20210723225809848"></p>
<h2 id="_4-5-集群故障转移" tabindex="-1"><a class="header-anchor" href="#_4-5-集群故障转移" aria-hidden="true">#</a> 4.5.集群故障转移</h2>
<p>集群的 master 节点会监控集群中的节点状态，如果发现有节点宕机，会立即将宕机节点的分片数据迁移到其它节点，确保数据安全，这个叫做故障转移。</p>
<p>1）例如一个集群结构如图：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723225945963.png" alt="image-20210723225945963"></p>
<p>现在，node1 是主节点，其它两个节点是从节点。</p>
<p>2）突然，node1 发生了故障：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723230020574.png" alt="image-20210723230020574"></p>
<p>宕机后的第一件事，需要重新选主，例如选中了 node2：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723230055974.png" alt="image-20210723230055974"></p>
<p>node2 成为主节点后，会检测集群监控状态，发现：shard-1、shard-0 没有副本节点。因此需要将 node1 上的数据迁移到 node2、node3：</p>
<p><img src="@source/notes/microservices/01/day07-Elasticsearch03/assets/image-20210723230216642.png" alt="image-20210723230216642"></p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ul>
<li>master(主节点)宕机后，EligibleMaster(候选主节点)选举为新的主节点</li>
<li>master 节点监控分片、节点状态、将故障节点上的分片转移到正常节点，确保数据安全</li>
</ul>
</div></template>


