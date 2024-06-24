<template><div><h1 id="支付宝沙箱环境" tabindex="-1"><a class="header-anchor" href="#支付宝沙箱环境" aria-hidden="true">#</a> <strong>支付宝沙箱环境</strong></h1>
<nav class="table-of-contents"><ul><li><router-link to="#_1-获取开发参数">1 获取开发参数</router-link></li><li><router-link to="#_2-安装模拟器">2 安装模拟器</router-link></li><li><router-link to="#_3-配置支付参数">3 配置支付参数</router-link></li></ul></nav>
<h3 id="_1-获取开发参数" tabindex="-1"><a class="header-anchor" href="#_1-获取开发参数" aria-hidden="true">#</a> <strong>1 获取开发参数</strong></h3>
<p>学成在线项目支付模块使用支付宝沙箱环境进行开发测试。</p>
<p>开发过程需要三个支付参数：app_id、应用私钥、支付宝公钥，下边在支付宝开发平台配置沙箱环境。</p>
<p>进入支付宝开放平台：https://open.alipay.com/</p>
<p><img src="@source/notes/project/02/支付宝沙箱环境配置/assets/image-20230614204849611.png" alt="image-20230614204849611"></p>
<p>点击登录，使用自己的支付宝账号扫码登录即可。</p>
<p>登录成功，进入控制台：</p>
<p><img src="@source/notes/project/02/支付宝沙箱环境配置/assets/image-20230614204855653.png" alt="image-20230614204855653"></p>
<p>在控制台首页最下方 点击进入沙箱环境</p>
<p><img src="@source/notes/project/02/支付宝沙箱环境配置/assets/image-20230614204901031.png" alt="image-20230614204901031"></p>
<p>进入沙箱环境页面列出了应用信息，其中就有我们需要的 appid。</p>
<p><img src="@source/notes/project/02/支付宝沙箱环境配置/assets/image-20230614204904756.png" alt="image-20230614204904756"></p>
<p>点击“查看”，查看密钥，开发需要支付宝公钥和应用私钥，稍后我们需要使用它们进行开发测试。</p>
<p><img src="@source/notes/project/02/支付宝沙箱环境配置/assets/image-20230614204914095.png" alt="image-20230614204914095"></p>
<p>根据测试需要进行充值（沙箱环境为虚拟充值）</p>
<p><img src="@source/notes/project/02/支付宝沙箱环境配置/assets/image-20230614204919911.png" alt="image-20230614204919911"></p>
<h3 id="_2-安装模拟器" tabindex="-1"><a class="header-anchor" href="#_2-安装模拟器" aria-hidden="true">#</a> <strong>2 安装模拟器</strong></h3>
<p>下载模拟器：<a href="http://mumu.163.com/" target="_blank" rel="noopener noreferrer">http://mumu.163.com/<ExternalLinkIcon/></a></p>
<p>安装模拟器，安装在没有空格和中文的目录。</p>
<p>安装成功，启动模拟器</p>
<p><img src="@source/notes/project/02/支付宝沙箱环境配置/assets/image-20230614204925652.png" alt="image-20230614204925652"></p>
<p>下一步在模拟器安装支付宝：</p>
<p>选择课程资料中支付宝安装包 wallet_101521226_client_release_201812261416.apk（沙箱版本）</p>
<p><img src="@source/notes/project/02/支付宝沙箱环境配置/assets/image-20230614204931259.png" alt="image-20230614204931259"></p>
<p>安装成功后支付宝客户端的快捷方式出现在桌面上。</p>
<p><img src="@source/notes/project/02/支付宝沙箱环境配置/assets/image-20230614204934919.png" alt="image-20230614204934919"></p>
<p>使用沙箱环境的买家账号登录沙箱版本的支付宝。</p>
<p>查看沙箱环境的账号：</p>
<p><img src="@source/notes/project/02/支付宝沙箱环境配置/assets/image-20230614204939262.png" alt="image-20230614204939262"></p>
<h3 id="_3-配置支付参数" tabindex="-1"><a class="header-anchor" href="#_3-配置支付参数" aria-hidden="true">#</a> <strong>3 配置支付参数</strong></h3>
<p>上一节获取三个支付参数：app_id、应用私钥、支付宝公钥，下边在微服务进行配置并使用它们进行测试。</p>
<p>在 nacos 配置这三个参数</p>
<p>在 orders-service-dev.yaml 配置文件 配置如下：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">pay</span><span class="token punctuation">:</span>
  <span class="token key atrule">qrcodeurl</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//192.168.101.1<span class="token punctuation">:</span>63030/orders/requestpay<span class="token punctuation">?</span>payNo=%s
  <span class="token key atrule">alipay</span><span class="token punctuation">:</span>
    <span class="token key atrule">APP_ID</span><span class="token punctuation">:</span> <span class="token number">2021000122627231</span>
    <span class="token key atrule">APP_PRIVATE_KEY</span><span class="token punctuation">:</span> MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCsL6378mIfHKVeDkDCrPVg59HXQLlk1W1rVNlVE07dydAOHYCGN03lsSTGseduF1LkBZd5r45H/O1gOpaEGsOteKH9/79z1qhZPIM6Z19yNzLYrhJFF4DIVvOBvZCdc3efl+C2K1eNZwHSub3wqWgZwe/vUU4COx8TUBTkXudbkbWxrOOmr9eXbZ3VAv41p+eHpwbpxiSjGhEBl79Ey5AgJeoaYdyFvP9Zz3bcBFMmp7VPZ2TjG10EGTu9hh0vNjXDXdKAb60rkpOB/EdmEC+sZYqaL8lRylPHxn5mSqwBajf5ogMajpWDMzMjukJuy7tZmAjZSQt+NF4+x0AKCvEFAgMBAAECggEBAJ7x0Ih/oaYYmmpte8h5QnW26RTrsXfsMHpgs9J95VKE5iLxht/ek3DRiiJEvV759tF4e/CfZxb62uD2lFTUJAexENBYUhILeBIP8w9pt0jGvZAZd9IBtSa6ZURBigpeOXHAEHX5InPsP1mXjkdnCiqkxOjEw975VmFMjkyVcroqCbZWMEtG0c7uexQFRF4zrNr1xxWvX4l6hyhPkpaAnxhZXu7KxbgOZx9+m/v3k6AHimva2wSLoZPiOSRzDOR9sOGFNOKHZ/LfebBCGkuC0M03qlqEq7JGJUN9OBAJIyUcy+3cHcQl59duM/sVpXga6Z7ZIr6eDw3VKKwrjibATmECgYEA9uswWIzPWsc75OIMdan7TmxXFMTqHAMnSdIv7NstopSHrr8/C5E5bAwD/YrsGNgof9XL2Hq1QrypAjXXxKWm3pUl/HSo1TDdJkriKXJyXIBm3egQzExnqXmnzdQOO+7MIRS83/G8OuJu/wOJHTa0roJMLK9tNRr5oq6SBWQdsj0CgYEAsoTc79dWqMW3LMMTnIRPnuwnCeX3oZ+qIIPnURGXCDaQnQM0TJHdtUJAihwPyZP834zoJlKYRawN6ENi3XZ3+NThQFdPUMHEK+JsjyhMtS6opLj/UFZop6qKYLT2z14dMKYw2MQ802JYfp0YCXCJxTjQnsSfVuXiRMSOZ5/rjmkCgYEAzIGu4Sh+9Sjeqouu1iWbRzDkTwdo/xp9h97WYs6F1Yo/drRfey0k6iBpja1qLomZwYdJ9lprloK7WGFP/EdXFjNh6t6Ulz6JbBXJi5qGraaLjG+QuiTuFqf0G73urCT0XNHYPYLx67NvSzeacN/GdmLkxH3nbXySFfOQbXamQeECgYBx7RiSd3p2erdLebMqT8YARfUj+/7sxlhsJ8GXmwIn26quiTz3IJ+87WsCuKXanvbiM6pzyoIi9Iprj5Wof9JQmoql5RJZF096MiXVtoI9nmlBtk45lutzFQL6dIKOFCHMykKiE5o9zKVtKBQO8iL6GigJKrIFYu/jswyuVQCfAQKBgQDW8xcd00lRMvpANvPg/viw/s3dh2QO5x1SGLFqcpn5ukFt0HHr78NssTJ15v1W6G/uXt1WH6qxWWbUkeHqn/YbqAu38FfGcqJ0IdxGpygZWcPT+CYe0irISq06EHRQ1EVLWbqfXqH7B1p6PiTRPRgdOITBxn54nLGCryHZ6sVqRQ==
    <span class="token key atrule">ALIPAY_PUBLIC_KEY</span><span class="token punctuation">:</span> MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsvHBfpUS46t302LDbxWM+beQI1ZN++pFeJiaqbXt+N3CHJ3X2T2mqXgi2O5YNHfOUzDdR87eqFvcwA11rZ5clhjcqMQtyzvNsNA+3WH7ez/IfqNu8wvtq4ZqnCPoT4ocYkAH2IIaYImT7Kdb1uHfrm4vUgK9WdpuxLQwoCMA5clJg/tKRjGBMzHJI/ppvpyJFkkmW5cb17Ym/o4v0KwqAspzHNhzTHsLR4XvEdRpN6Gnd8sW+oWZe9O4oZtt/IxljHfKpFXucxBIOiz/9Ngv9SpZLLbugpYn24k42WGLO+utHM5+FRxUI44zfa4FkoO00U8ii9jinK7zSBfvVZ34TwIDAQAB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>APP_ID: 应用 id</p>
<p>APP_PRIVATE_KEY: 应用私钥</p>
<p>ALIPAY_PUBLIC_KEY：支付宝公钥</p>
<p>从自己的沙箱环境复制这三个参数进行配置。</p>
</div></template>


