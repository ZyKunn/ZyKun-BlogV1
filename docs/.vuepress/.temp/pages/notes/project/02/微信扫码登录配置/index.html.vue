<template><div><h1 id="微信扫码登录配置" tabindex="-1"><a class="header-anchor" href="#微信扫码登录配置" aria-hidden="true">#</a> <strong>微信扫码登录配置</strong></h1>
<nav class="table-of-contents"><ul><li><router-link to="#_1、修改前端工程-xc-ui-pc-static-portal-目录下的-wxsign-html">1、修改前端工程 xc-ui-pc-static-portal 目录下的 wxsign.html</router-link></li><li><router-link to="#_3、配置-hosts-文件">3、配置 hosts 文件</router-link></li></ul></nav>
<h3 id="_1、修改前端工程-xc-ui-pc-static-portal-目录下的-wxsign-html" tabindex="-1"><a class="header-anchor" href="#_1、修改前端工程-xc-ui-pc-static-portal-目录下的-wxsign-html" aria-hidden="true">#</a> 1、修改前端工程 xc-ui-pc-static-portal 目录下的 wxsign.html</h3>
<p>屏蔽代码行：redirect_uri: &quot;http://tjxt-user-t.itheima.net/xuecheng/auth/wxLogin&quot;</p>
<p>改为如下方式：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//请用微信生成二维码</span>
<span class="token keyword">function</span> <span class="token function">generateWxQrcode</span><span class="token punctuation">(</span><span class="token parameter">token</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> wxObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WxLogin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">self_redirect</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'login_container'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">appid</span><span class="token operator">:</span> <span class="token string">'wx17655f8047b85150'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">scope</span><span class="token operator">:</span> <span class="token string">'snsapi_login'</span><span class="token punctuation">,</span>
    <span class="token comment">//redirect_uri: "http://tjxt-user-t.itheima.net/xuecheng/auth/wxLogin",</span>
    <span class="token literal-property property">redirect_uri</span><span class="token operator">:</span> <span class="token string">'http://tjxt-user-t.itheima.net/api/auth/wxLogin'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span> token<span class="token punctuation">,</span>
    <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">''</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、在 nginx.conf 配置 tjxt-user-t.itheima.net 域名</p>
<p>在 http 下添加 server_names_hash_bucket_size 64;如下：</p>
<p><img src="@source/notes/project/02/微信扫码登录配置/assets/image-20230608191044290.png" alt="image-20230608191044290"></p>
<p>配置 tjxt-user-t.itheima.net 虚拟主机，如下：</p>
<p><img src="@source/notes/project/02/微信扫码登录配置/assets/image-20230608191050756.png" alt="image-20230608191050756"></p>
<p>重新加载 nginx 的配置文件：nginx.exe -s reload</p>
<h3 id="_3、配置-hosts-文件" tabindex="-1"><a class="header-anchor" href="#_3、配置-hosts-文件" aria-hidden="true">#</a> 3、配置 hosts 文件</h3>
<p>修改 hosts 文件，配置 tjxt-user-t.itheima.net 如下：</p>
<p><img src="@source/notes/project/02/微信扫码登录配置/assets/image-20230608191057422.png" alt="image-20230608191057422"></p>
</div></template>


