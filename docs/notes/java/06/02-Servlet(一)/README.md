# 02 - Servlet（一） :small_airplane:

[[TOC]]

## JavaWeb 基础技术

javaweb 是一个庞大知识体系，内部综合了各项 web 开发相关技术，常见有以下：

- Servlet(服务端小程序)
- JSP(动态网页)
- JSTL/EL 表达式(表达式语言)
- Fileter(过滤器)
- Listener(监听器)
- WebSocket(服务端消息主动推送技术)
- MVC（软件架构方式）

## Servlet 技术入门

![1611105886913](./assets/1611105886913.png)

### Servlet 概述

​ Servlet:是一个组合词，由 Server+Applet 组合而成；是一项运行在服务端的 java 小程序；提供了对客户端 http**请求处理**的能力，同时也能够将处理之后的**结果响应**给客户端

### HelloServlet

1. 创建普通 java 类继承 HttpServlet
2. 重写 doGet/doPost 方法（或直接重写 service）
3. 配置 url-pattern（两种）

```java
@WebServlet("/hello")
public class HelloServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("HelloServlet...Get");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("HelloServlet...Post");
    }
}
```

#### 基于注解的配置

从 web3.0 开始 servlet 支持使用注解的方式配置 servlet,使用方式是直接在 servlet 类上方使用`@WebServlet`注解，需要注明 url-pattern 地址，如下：

```java
@WebServlet("/hello")
```

浏览器访问路径如下：

```
http://localhost/javaweb02/hello
```

或者

```java
@WebServlet(urlPatterns = {"/hello","/HelloServlet","/hi"})
```

浏览器访问路径可以从以上三个映射地址中任意选择

```
http://localhost/javaweb02/hi
http://localhost/javaweb02/hello
http://localhost/javaweb02/HelloWorld
```

#### 基于 xml 的配置（3.0 以下的配置）

在 web3.0 以前对于 servlet 的配置只能通过 web.xml 文件(**位于 web 根目录的 WEB-INF 中**)完成

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">

    <servlet>
        <servlet-name>HelloServlet</servlet-name>
        <servlet-class>com.softeem.servlets.HelloServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>HelloServlet</servlet-name>
        <url-pattern>/hello</url-pattern>
    </servlet-mapping>

</web-app>
```

## Servlet 创建方式对比

Servlet 的创建方式有三种：

1. 实现 Servlet 接口
2. 继承 GenericServlet
3. **继承 HttpServlet（推荐）**

## Servlet 请求流程(生命周期)

![1611114241832](./assets/1611114241832.png)

Servlet 在 web 服务器中是基于多线程的实现，是单例的模式运行（**尽量避免在 servlet 中定义全局变量，存在线程安全问题**），即对于所有客户端的请求是通过同一个实例来实现，通过代码测试可以看出:

![1611114513198](./assets/1611114513198.png)

**总结 servlet 生命周期:**

1. web 容器（web 服务器)初始化会首先加载并校验所有的 Servlet
2. 当客户端对 servlet 发起第一次请求时，servlet 会自动执行 init 方法完成一些初始化工作（init 方法只会执行一次）
3. 然后根据客户端发送的请求方法由 HttpServlet 中 service 方法决定调用 doXXX 方法处理请求
4. 之后任何客户端请求都会直接执行 doXXX 方法，而不会再次执行 init
5. 当 web 容器停止服务时，所有的 servlet 会执行 destory 完成一些销毁工作

### 服务器配置热部署

每次对 servlet 类（或者 jsp，其他各种资源类）进行修改，都需要重启服务器才能够让最新的配置生效，比较麻烦，tomcat 服务器是支持热更新的，配置如下：

![1611115080022](./assets/1611115080022.png)

## HttpServletRequest&HttpServletResponse

Servlet 中设计了两个接口用于处理客户端请求以及做出相应，分别为:

- HttpServletRequest
- HttpServletResponse

### HttpServletRequest(耳朵)

该接口用于接收客户端发送的请求，其中包含一些请求的头信息，**提交的数据**，以及客户端的状态等;Servlet 中多数时候使用 HttpServletRequest 对象都是为了获取客户端提交的数据

```java
@Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    //        System.out.println("这是第一个Servlet类！！！！");
    //获取请求头的所有名称
    Enumeration<String> headers = req.getHeaderNames();
    while(headers.hasMoreElements()){
        String name = headers.nextElement();
        String value = req.getHeader(name);
        //            System.out.println(name+"==="+value);
    }
    /**获取客户端信息*/
    //获取客户端ip地址
    String ip = req.getRemoteAddr();
    System.out.println("客户端ip-->"+ip);
    String user = req.getRemoteUser();
    System.out.println("客户端-->"+user);
    String host = req.getRemoteHost();
    System.out.println("客户端主机名--->"+host);
    int port = req.getRemotePort();
    System.out.println("客户端端口--->"+port);
    System.out.println("=============================");

    /**获取请求信息*/
    String serverName = req.getServerName();
    String path = req.getRequestURI();
    int serverPort = req.getServerPort();
    String protocol = req.getProtocol();
    String queryString = req.getQueryString();

    System.out.println("协议===>"+protocol);
    System.out.println("serverName===>"+serverName);
    System.out.println("服务端端口===>"+serverPort);
    System.out.println("请求资源地址===>"+path);
    System.out.println("查询信息===>"+queryString);
    System.out.println("-----------------------------");

}
```

HttpServletRequest 获取客户端提交数据的方式非常多：

| 方法名                              | 说明                                                             |
| ----------------------------------- | ---------------------------------------------------------------- |
| **getParameter(String name)**       | 从客户端的请求参数中通过 key 获取传递值（例如 username=softeem） |
| **getParameterValues(String name)** | 从客户端的请求参数中获取数据(字符串数组)                         |
| getParameterMap()                   | 将客户端提交的所有数据存储到 Map 中（Map<String,String[]>）      |
| getParameterNames()                 | 获取客户端提交的所有数据对应的 name 值                           |

页面端：

```html
<form action="user">
  用户名：<input type="text" name="username" placeholder="请输入用户名" /><br />
  密码：<input type="password" name="password" placeholder="请输入密码" /><br />
  爱好： <input type="checkbox" name="fun" value="1" />女 <input type="checkbox" name="fun" value="2" />学习 <input type="checkbox" name="fun" value="3" />愉快的学习 <input type="checkbox" name="fun" value="4" />疯狂学习 <br />
  <button type="submit">提交</button>
</form>
```

后端 servlet 类:

```java
@WebServlet("/user")
public class UserServlet extends HttpServlet {

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //设置请求编码
        req.setCharacterEncoding("utf-8");
        //http://127.0.0.1/javaweb02/user?username=admin&password=123456
        //数据段：username=admin&password=123456
        //获取客户端提交的数据
        String username = req.getParameter("username");
        String password = req.getParameter("password");
        System.out.println(username+"/"+password);

        //获取表单提交的数据（数组）
        String[] funs = req.getParameterValues("fun");
        for (String s:funs) {
            System.out.println(s);
        }
        System.out.println("================");

        //将所有的请求参数存储一个Map集合中
        Map<String, String[]> maps = req.getParameterMap();
        maps.forEach((k,v)->{
            for (String item:v){
                System.out.println(k+"===="+item);
            }
        });

        Enumeration<String> pnames = req.getParameterNames();
        while(pnames.hasMoreElements()){
            String name = pnames.nextElement();
            System.out.println(name+"#####");
        }
    }
}

```

#### 关于 405 问题

当客户端的请求方法（比如客户端发送是 GET 请求）与服务端处理的方法(服务端只重写了 doPost 方法)不一致时会出现 405 状态码

![1611123675494](./assets/1611123675494.png)

解决方案有如下两种：

1. 在 doGet 里面调用 doPost（反之亦可）

   ```java
   @WebServlet("/user")
   public class UserServlet extends HttpServlet {

       @Override
       protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
           doGet(request, response);
       }

       @Override
       protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

       }
   }

   ```

2. 直接在 servlet 类中重写 service 方法

   ```java
   @WebServlet("/user")
   public class UserServlet extends HttpServlet {

       //    @Override
       //    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
       //       doGet(request, response);
       //    }
       //
       //    @Override
       //    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
       //
       //    }


       @Override
       protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

           System.out.println("执行service");
       }
   }
   ```

#### 表单提交

![1611125210463](./assets/1611125210463.png)

### HttpServletResponse（嘴巴）

Servlet 除了能获取客户端请求之外，还可以对客户端的请求做出响应

常见方法：

| 方法           | 说明                                       |
| -------------- | ------------------------------------------ |
| getWriter()    | 从 response 对象中获取输出流               |
| sendRedirect() | 重定向请求到目标资源(页面，或其他 servlet) |

```java
//        resp.setCharacterEncoding("utf-8");
//        resp.setContentType("text/html;charset=utf-8");
//        PrintWriter out = resp.getWriter();
//        out.println("服务端收到信息了!!!等7个工作日之后处理");
//        out.flush();

//重定向（客户端跳转）
//        resp.sendRedirect("main.html");

//请求转发（服务端跳转）
req.getRequestDispatcher("main.html").forward(req,resp);
```

## 综合案例:登录注册实现

![1611129401534](./assets/1611129401534.png)

![1611129418684](./assets/1611129418684.png)
