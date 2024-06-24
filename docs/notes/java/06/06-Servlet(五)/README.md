# 06 - Servlet（五） :parachute:

[[TOC]]

## 过滤器（Filter）

### 概述

过滤器（Filter）是 Servlet2.3 之后新增的一项 web 后端技术，可以对客户端的请求到达目标之前进行拦截，并且可以将请求进行截获，并作出处理之后再放行，是基于**责任链模式**，执行原理如下：

![1611714365509](./assets/1611714365509.png)

### 应用场景

过滤器的应用场景十分广泛，比如：

- 编码过滤器
- 非法访问过滤
- 敏感词过滤
- XSS 攻击过滤
- 通用跨域请求过滤
- ....

### 过滤器创建与使用

Filter 的创建分为以下步骤：

#### 1. 创建普通 Java 类实现 Filter 接口

由于实现 Filter 接口，该接口中包含三个方法，其中两个方法(`init()`,`destroy()`)为默认方法,唯一需要实现的方法只有`doFilter`

```java
public class HelloFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        System.out.println("filter初始化");
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain chain) throws IOException, ServletException {
        System.out.println("执行过滤器");
        //请求放行
        chain.doFilter(servletRequest,servletResponse);
    }

    @Override
    public void destroy() {
        System.out.println("销毁Filter");
    }
}

```

#### 2. 配置 Filter

Filter 的配置与 Servlet 的配置几乎一致，都包含两种配置方式：

1. 基于注解的配置

   ```java
   //对所有的请求过滤
   @WebFilter("/*")
   public class HelloFilter implements Filter {
   	//...
   }
   ```

2. 基于配置文件（web.xml）配置

   ```xml
   <!--过滤器配置-->
   <filter>
       <filter-name>encodingFilter</filter-name>
       <filter-class>com.softeem.filter.EncodingFilter</filter-class>
   </filter>
   <!--过滤器映射配置-->
   <filter-mapping>
       <filter-name>encodingFilter</filter-name>
       <url-pattern>/*</url-pattern>
   </filter-mapping>
   ```

### 案例讲解

#### 编码过滤

请求响应乱码文件十分常见，但是如果每次都在 Servlet 中单独处理，也会带来很多重复性的工作，因此可以将对于乱码的处理统一由过滤解决：

编码过滤器的编写方式:

**EncodingFilter.java**

```java
public class EncodingFilter implements Filter {

    private String encoding;

    @Override
    public void init(FilterConfig config) throws ServletException {
        encoding = config.getInitParameter("encoding");
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {

        request.setCharacterEncoding(encoding);
        response.setCharacterEncoding(encoding);
        //response.setContentType("text/html;charset="+encoding);
        chain.doFilter(request,response);
    }
}
```

**web.xml 配置**

```xml

<filter>
    <filter-name>encodingFilter</filter-name>
    <filter-class>com.softeem.filter.EncodingFilter</filter-class>
    <!--初始化参数-->
    <init-param>
        <param-name>encoding</param-name>
        <param-value>UTF-8</param-value>
    </init-param>
</filter>
<filter-mapping>
    <filter-name>encodingFilter</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>
```

#### 非法登录过滤

非法登录过滤，即对于一些安全性要求较高的系统来说，进行后台管理时必须确保存在登录过程，否则视为非法的访问；非法登录过滤拦截的原理为：

- 请求目标资源前先检查是否存在用户信息(session)
- 如果存在则将请求放行，否则重新定向到登录页面

1. **编写过滤器**

   ```java
   //@WebFilter("/admin/*")
   public class AuthFilter implements Filter {

       @Override
       public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
           //将ServletRequest强制转换为HttpServletRequest
           HttpServletRequest request = (HttpServletRequest) req;
           HttpServletResponse response = (HttpServletResponse) resp;

           HttpSession session = request.getSession();
           Object user = session.getAttribute("user");
           //判断session中是否存在用户信息
           if(Objects.nonNull(user)){
               //如果存在则认为用户已经登录，可以放行
               chain.doFilter(req, resp);
           }else{
               //如果session中没有数据，认为用户未登录，进行拦截
               PrintWriter writer = response.getWriter();
               writer.write("<script>alert('登录后再试!');location.href='../login.html'</script>");
               writer.flush();
           }
       }

   }

   ```

2. **过滤器的配置（从上到下依次执行 谁先配置谁先执行）**

   ```xml
   <!--权限过滤配置-->
   <filter>
       <filter-name>EncodingFilter</filter-name>
       <filter-class>com.goover.filter.EncodingFilter</filter-class>
       <!--        初始参数-->
       <init-param>
           <!--            参数名称-->
           <param-name>encoding</param-name>
           <!--            参数值-->
           <param-value>UTF-8</param-value>
       </init-param>
   </filter>
   <filter-mapping>
       <filter-name>EncodingFilter</filter-name>
       <url-pattern>/*</url-pattern>
   </filter-mapping>

   <filter>
       <filter-name>authFilter</filter-name>
       <filter-class>com.softeem.filter.AuthFilter</filter-class>
   </filter>
   <filter-mapping>
       <filter-name>authFilter</filter-name>
       <!--拦截所有对于admin/*资源的请求-->
       <url-pattern>/admin/*</url-pattern>
   </filter-mapping>
   ```

3. **Servlet 代码**

   ```java
   @WebServlet("/login")
   public class LoginServlet extends HttpServlet {

       @Override
       protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
           String name = req.getParameter("username");
           String pwd = req.getParameter("password");

           if("softeem".equals(name) && "123456".equals(pwd)){
               User u = new User();
               u.setUsername(name);
               u.setPassword(pwd);
               //登录成功后需要将用户信息存储到session中
               req.getSession().setAttribute("user",u);
               resp.sendRedirect("admin/index.html");
           }else{
               PrintWriter writer = resp.getWriter();
               writer.write("<script>alert('请检查账号或密码!');location.href='login.html'</script>");
               writer.flush();
           }

       }
   }

   ```

#### XSS 过滤

​ XSS（Cross Site Scripting）,跨站脚本攻击，是一种常见的网络攻击方式，指的是在客户端浏览器中，或者其他终端设备，利用表单或者请求参数，向服务端发送一些恶意的代码片段，一般这些恶意的代码片段多数以 javascript 为脚本，但是不限于 javascript，另外可能也有其他类型的脚本，比如：VBScript，ActiveX，Flash,或者是普通的 html；基于这种漏洞，攻击者可能会得到一些比较高的操作权限，比如一些网页私密内容，cookie 等信息，从而对网站的威胁巨大。

以上问题即跨站脚本攻击所带来的的问题；在 web 应用中如何解决 XSS 问题呢？

1. 前端页面

   ```html
   <form action="comm">
     <label for="content">请输入评论信息:</label><br />
     <textarea id="content" name="content" cols="50" rows="10"></textarea><br />

     <button>发表评论</button>
   </form>
   ```

2. servlet 类

   ```java
   @WebServlet("/comm")
   public class CommServlet extends HttpServlet {

       @Override
       protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
   		//获取提交的数据
           String content = req.getParameter("content");

           req.setAttribute("content",content);
           req.getRequestDispatcher("show.jsp").forward(req,resp);
       }
   }
   ```

3. xss 过滤器

   ```java
   @WebFilter("/*")
   public class XSSFilter implements Filter {

       @Override
       public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
           //转换Request
           HttpServletRequest request  = (HttpServletRequest)req;
           //放行请求（对request重新包装）
           chain.doFilter(new XssRequest(request), resp);
       }

   }

   ```

4. Xss 请求包装器(对原始的请求数据进行包装处理)

   ```java
   public class XssRequest extends HttpServletRequestWrapper {

       public XssRequest(HttpServletRequest request) {
           super(request);
       }

       @Override
       public String getParameter(String name) {
           //获取原始的客户端提交内容
           String value = super.getParameter(name);
           //将原始内容处理之后重新返回
           return handler(value);
       }

       @Override
       public String[] getParameterValues(String name) {
           //获取原始的 根据name取到的所有values（未经处理的数据）
           String[] values = super.getParameterValues(name);
           if(Objects.isNull(values)){
               return null;
           }
           //创建新的数组用于存储处理之后的数据值
           String[] newValues = new String[values.length];
           //处理
           for (int i = 0; i < values.length; i++) {
               newValues[i] = handler(values[i]);
           }
           return newValues;
       }

       public String handler(String value){
           //过滤特殊字符，以及脚本内容
           // <  &lt;
           // >  &gt;
           //使用第三方插件：commons-lang、commons-text
           return StringEscapeUtils.escapeHtml4(value);
       }

   }

   ```

> 过滤器的面试题：
>
> 1.  Filter 是如何实现的：
>
> ​ Filter 是基于责任链的设计模式实现，内部基于回调机制，在请求到达目标资源之前执行过滤，
>
> 2.  拦截器（Interceptor）和过滤器（Filter）区别？

## 监听器 （Listener）

### 概述

​ Listener 是 Servlet 中的一个重要组件，用于监听 HttpServletRequest,HttpSession,ServletContext 三大作用域的状态变化，比如 session 的产生，request 中元素的新增与销毁，ServletContext 的启动与销毁等；监听器不需要手动调用，通常是在服务器运行时条件满足后自动产生事件对象，并且自动执行相关的方法。

### 监听器分类

Servlet 中的监听器分为以下三大类

1. **ServletRquest 监听**
   1. ServletRequestListener：监听 request 对象的产生与销毁
   2. ServletRequestAttributeListener：监听 request 作用域中元素的产生，移除以及替换
2. **HttpSession 监听**
   1. HttpSessionListener：监听 session 的产生与销毁
   2. HttpSessionAttributeListener：监听 session 中属性的产生，移除以及替换
3. **ServletContext 监听**
   1. ServletContextListener：监听整个应用的初始化与销毁
   2. ServletContextAttributeListener：监听 ServletContext 作用域中元素的产生，移除以及替换

> 监听器的应用场景：
>
> 1.  监听网站的总访问人数（session）
> 2.  网站的同时在线人数（session）
> 3.  在 javaEE 项目中，容器启动时执行一些初始化资源的加载工作监听（servletContext）

### 创建与使用

监听器的创建有两个步骤

1. 创建一个类实现一个具体的监听器接口

   ```java
   public class PageViewCountListener implements HttpSessionListener {

       /**
        * session被创建时执行
        * @param e
        */
       @Override
       public void sessionCreated(HttpSessionEvent e) {
           ServletContext context = e.getSession().getServletContext();
           Object obj = context.getAttribute("viewCount");
           int count = 0;
           //判断是不是第一次访问
           if(obj != null){
               //获取存储总访问人数
               count = Integer.parseInt(obj.toString());
           }
           context.setAttribute("viewCount",++count);
           System.out.println("有新的session产生。。。"+e.getSession().getId());
       }

       /**
        * session销毁时执行
        * @param e
        */
       @Override
       public void sessionDestroyed(HttpSessionEvent e) {
           System.out.println("session被销毁...."+e.getSession().getId());
       }
   }

   ```

2. 配置监听器

   监听器的配置也包含两种方式：

   - 基于注解的配置

     ```java
     @WebListener
     public class PageViewCountListener implements HttpSessionListener{
         //...
     }
     ```

   - 通过在 web.xml 中配置

     ```xml
     <!--监听器配置-->
     <listener>
         <listener-class>com.softeem.listener.PageViewCountListener</listener-class>
     </listener>
     ```

## 作业题

1. 基于 Filte 技术，实现一个，敏感词过滤功能，要求:可以动态添加敏感词，对于敏感词要求使用`*`代替
2. 基于 Listener 技术，要求实现网站**在线人数**的统计
