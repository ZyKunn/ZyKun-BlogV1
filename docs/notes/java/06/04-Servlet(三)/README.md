# 04 - Servlet（三） :flight_departure:

[[TOC]]

## 表单提交补充

### 日期类型数据处理

页面端:

```html
<form action="user">
  <input type="hidden" name="op" value="reg" />
  <label for="birth">出生年月:</label>
  <input type="date" name="birth" id="birth" />
  <button type="submit">提交</button>
</form>
```

servlet：

```java
private void reg(HttpServletRequest request, HttpServletResponse response){
    //获取前端数据只能是字符串
    String birth = request.getParameter("birth");
    try {
        Date birthday = DateFormat.getDateInstance().parse(birth);
        System.out.println("生日--->"+birthday);
    } catch (ParseException e) {
        e.printStackTrace();
    }
}
```

### 文件上传

之前表单提交到后台的数据都是普通的文本信息，即便是数值或者日期，在后端都可以通过 java 相关 API 进行转换，但是如果表单提交到后台数据不是一个文本而是文件（图片，视频，音频等附件），Servlet 又该如何处理：

在 Servlet 支持文件上传的技术，解决方案有很多，只需要将前端提交的数据以流形式读取即可，后端有以下解决方法：

- jspSmartupload 技术(早期插件)
  - 优点：简单，便捷，快速
  - 缺点：直接通过内存缓存，不适合上传大文件
- commons-fileUpload（apache 开源组织的一个开源项目）
  - 优点：支持磁盘缓存，适合上传大文件
  - 缺点：API 相对复杂
- Servlet3.0 之后自带文件上传解决方案（要求 tomcat 必须是 7.0+）

#### 使用方式

1. 表单提交方式必须设置为`method="post"`
2. 表单的 enctype 必须设置为`multipart/form-data`
3. 表单中文件控件必须指定 name 属性（对于单文件）
4. Servlet 类中需要添加`@MultipartConfig`

#### 单文件上传

页面端:

```html
<h1>单文件上传</h1>
<form action="upload01" method="post" enctype="multipart/form-data">
  <input type="file" name="myfile" /><br />
  <button>上传</button>
</form>
```

服务端:

```java
@MultipartConfig
@WebServlet("/upload01")
public class UploadServlet01 extends HttpServlet {

    private static String baseDir = "d:/javaweb04";

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");

        //获取上传数据的文件部分（单文件）
        Part part = request.getPart("myfile");
        //获取文件大小
        long size = part.getSize();
        //获取提交的文件名称(tomcat8.0+)
        String name = part.getSubmittedFileName();
        //获取提交的文件mimeType
        String contentType = part.getContentType();
        System.out.println("大小：" + size);
        System.out.println("文件名：" + name);
        System.out.println("contentType：" + contentType);

        String date = new SimpleDateFormat("yyyyMMdd").format(new Date());
        File file = new File(baseDir, date);
        if (!file.exists()) {
            file.mkdirs();
        }

        //如果文件重名，可以考虑使用uuid随机一个字符串作为文件名前缀(适用于不同内容的同名文件)
        String uuid = UUID.randomUUID().toString();

        //如果是两个内容也一样的文件（不论是否重名），认为是重复文件，此处可以将文件的流转换为md5值
        //进行比对，如果两个文件md5一致，则说明是内容重复的文件

        //将文件写入目标位置
        part.write(file.getAbsolutePath() + File.separator + uuid + "_" + name);

    }

}

```

#### 多文件上传

页面端：

只需要在 file 控件中设置`multiple`属性

```html
<h1>多文件上传</h1>
<form action="upload02" method="post" enctype="multipart/form-data">
  <input type="file" name="myfile" multiple /><br />
  <button>上传</button>
</form>
```

服务端:

```java
@MultipartConfig
@WebServlet("/upload02")
public class UploadServlet02 extends HttpServlet {

    private static String baseDir = "d:/javaweb04";

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");

        Collection<Part> parts = request.getParts();
        for (Part part : parts) {
            if (part.getSubmittedFileName() != null) {
                part.write(baseDir + File.separator + part.getSubmittedFileName());
            }
        }
    }

}
```

## 请求跳转

### 请求转发与重定向

### url-pattern

## 会话跟踪技术之 Session 与 Cookie

### HttpSession

### Cookie
