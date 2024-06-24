# 05 - Servlet（四） :airplane:

[[TOC]]

## 请求转发与重定向

Servlet 中的跳转技术主要包含两种：

1. 请求转发（request.getRequestDispartcher().forward(request,response)）

2. 重定向（response.sendRedirect()）

   ![1611626736388](./assets/1611626736388.png)

### 请求转发（forward）

请求转发也称之为服务端跳转，即客户端只发送一次请求，后续的多次请求由服务端发起，因此客户端的请求地址栏只会显示第一次发送的地址（实际服务端已经在内部转发了多次），请求转发可以将存储在一次 request 范围(客户端发起的)之内的数据传递到下一个 Servlet 中

```JAVA
//向request范围存储了一个属性（key:username,value:softeem）
request.setAttribute("username","softeem"); //Map  获取则是 request.getAttribute();
request.getRequestDispatcher("../goods/list").forward(req,resp);
```

### 重定向（redirect）

重定向也称之为客户端跳转，即客户端请求会发送多次，而且地址栏会显示最后一次请求的地址，由于重定向是客户端的跳转方式，因此每次请求之间没有直接关系，所以存储在 request 范围之内数据无法传递到下一个请求

```java
//request范围内数据无法传递到下一个servlet中
request.setAttribute("username","softeem");
response.sendRedirect("../goods/list");
```

## Servlet 作用域对象

![1611631738599](./assets/1611631738599.png)

### request

request 作用域作用于一次请求范围（客户端请求）,当使用请求转发跳转时，可以向 request 范围之内存储数据，并且在下一个 Servlet 中可以将 request 的数据获取

使用方式：

```java
//存储数据到request
request.setAttribute(name,value);
//获取request数据
request.getAttribute(name)
```

### session

session 也称之为会话，通常指的是一次项目的访问过程（只要浏览器不关闭，或者不到达 session 的有效期）存储在 session 范围之内的数据会一直存在。

session 有效期默认是:30 分钟（在 tomcat 的 web.xml 文件中有配置）:

![1611629377155](./assets/1611629377155.png)

> 如果需要修改 session 的有效期,不要去直接修改服务器(Tomcat->conf 目录下)中的 web.xml；而是应该修改 web 项目中 WEB-INF 下的 web.xml

客户端每一次服务端建立连接时都会创建一个 session（具备一个独一无二的 sessionid），在同一次访问中，无论页面（请求转发）如何跳转，只要 sessionid 是同一个，则 session 中的数据是一直有效且共享的。一旦浏览器关闭，下一次重新开启时，sessionid 会发生变更。

使用方式

```java
HttpSession session = request.getSession();
//存储数据到session
session.setAttribute(name,value);
//取出session中的数据
session.getAttribute(name)
```

**作用：**

session 的存储范围为服务端，一般用于存储一些安全性要求较高的少量数据，比如：用户的登录信息（账号密码等）

### ServletContext

ServletContext 也称之为上下文环境；一旦 web 容器启动，项目被装载后，服务端会自动创建一个上下文环境（SerlvetContext）,该环境是唯一的（单例）；只要服务器不重启，存储在在该范围内的数据会一直有效，并且可以实现多个用户之间的数据共享。

ServletContext 的获取包含三种方式:

```java
//方式一：
ServletContext app1 = this.getServletContext();
//方式二：
ServletContext app2 = this.getServletConfig().getServletContext();
//方式三：
ServletContext app3 = req.getSession().getServletContext();
```

使用方式：

```java
ServletContext context = req.getSession().getServletContext();
//存储数据到ServletContext
context.setAttribute(name,value);
//获取ServletContext数据
context.getAttribute(name)
```

> 如果需要对指定作用域中的属性清除可以使用：
>
> - removeAttribute(name)移除
>
> 对于 session 来说还可以直接使用`invalidate()`方法，清除整个 session 对象

```java
HttpSession session = req.getSession();
//		将session中的指定属性移除
		session.removeAttribute("user");

//		将session失效
		session.invalidate();

//		移除request范围的指定属性
//        req.removeAttribute();
//        移除上下文环境的指定属性
//        req.getSession().getServletContext().removeAttribute();
```

## 会话跟踪技术之 Cookie

Http 协议是无状态的（每次一次的 http 请求相互之间无关联），但是实际开发中经常需要在多个请求之间进行数据的传递，以及状态的转移；此时 servlet 中支持四种会话跟踪技术：

1. **URL 传值**（get 请求）

   ```
   http://localhost/javaweb01/login?username=admin&password=123456&code=0.12312435345345
   ```

2. **隐藏域传值**（post/get 请求）

   ```html
   <input type="hidden" name="method" value="login" />
   ```

3. **session**

   ```java
   session.setAttribute(name,value);
   ```

4. **Cookie**

   Cookie 是客户端浏览器，实现数据缓存的一种技术，是通过在本地操作系统中以文件存储的形式，存储少量(4kb 左右)的数据信息；cookie 由服务端制造，通过 response 对象响应到客户端，然后再通过 request 发送到服务端，

### cookie 的使用如下：

1. 制造并存储 cookie

   ```java
   @WebServlet("/cookie/add")
   public class CookieServlet extends HttpServlet {

       @Override
       protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

           User u = new User(1,"张三","张三123",5);
           Model m = new Model(0,"操作成功",u);

           //创建cookie对象
           Cookie c = new Cookie("username","softeem");
           //设置cookie的有效期(秒) 一周时间  默认有效期与session保持一致
           c.setMaxAge(60*60*24*7);
           //设置cookie生效的域名（主机地址）
           //        c.setDomain("com.softeem.top");
           //设置cookie生效的位置（对于同一个主机中的哪一个项目）
           //        c.setPath("/javaweb05");
           c.setPath("/");

           //将对象转换为json字符串
           String s = JSON.toJSONString(m);
           //将数据转码（Cookie不支持中文和特殊符号）
           s = URLEncoder.encode(s, "utf-8");
           System.out.println("json---->"+s);
           Cookie c2 = new Cookie("info", s);
           c2.setMaxAge(60*60*24);
           c2.setPath("/javaweb05");
           //将cookie对象通过response对象发送到客户端
           resp.addCookie(c);
           resp.addCookie(c2);
       }
   }

   ```

2. 读取 Cookie

   ```java
   @WebServlet("/cookie/read")
   public class ReadCookieServlet extends HttpServlet {

       @Override
       protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

           Cookie[] cookies = req.getCookies();
           for (Cookie c : cookies) {
               String name = c.getName();
               String value = c.getValue();
               System.out.println(name+"---->"+value);
               if("info".equals(name)){
                   //解码
                   String json = URLDecoder.decode(value, "utf-8");
                   System.out.println("info解码后:"+json);
                   //解析为javabean
                   Model model = JSON.parseObject(json, Model.class);
                   System.out.println("解析json为javabean:"+model);
               }
           }
       }
   }

   ```

### Cookie 的应用场景：

1. 大型网站的首页信息的缓存
2. 购物车功能
3. 保存账号功能
4. 历史浏览记录
5. ...

### 案例讲解：记住密码实现

## 作业

1. 基于 Cookie 以及 session，实现一个浏览记录保存的功能

![1611646163155](./assets/1611646163155.png)
