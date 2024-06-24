# 03 - Servlet (二) :flight_arrival:

[[TOC]]

## Servlet 综合案例（用户登录，注册）

### 前台页面代码 菜单

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>菜单</title>
    <link rel="stylesheet" href="static/layui/css/layui.css" />
  </head>
  <body>
    <div class="layui-layout layui-layout-admin">
      <div class="layui-header">
        <div class="layui-logo">layui 后台布局</div>
        <!-- 头部区域（可配合layui已有的水平导航） -->
        <ul class="layui-nav layui-layout-left">
          <li class="layui-nav-item"><a href="">控制台</a></li>
          <li class="layui-nav-item"><a href="">商品管理</a></li>
          <li class="layui-nav-item"><a href="">用户</a></li>
          <li class="layui-nav-item">
            <a href="javascript:;">其它系统</a>
            <dl class="layui-nav-child">
              <dd><a href="">邮件管理</a></dd>
              <dd><a href="">消息管理</a></dd>
              <dd><a href="">授权管理</a></dd>
            </dl>
          </li>
        </ul>
        <ul class="layui-nav layui-layout-right">
          <li class="layui-nav-item">
            <a href="javascript:;">
              <img src="http://t.cn/RCzsdCq" class="layui-nav-img" />
              贤心
            </a>
            <dl class="layui-nav-child">
              <dd><a href="">基本资料</a></dd>
              <dd><a href="">安全设置</a></dd>
            </dl>
          </li>
          <li class="layui-nav-item"><a href="">退了</a></li>
        </ul>
      </div>

      <div class="layui-side layui-bg-black">
        <div class="layui-side-scroll">
          <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
          <ul class="layui-nav layui-nav-tree" lay-filter="test">
            <li class="layui-nav-item layui-nav-itemed">
              <a class="" href="javascript:;">所有商品</a>
              <dl class="layui-nav-child">
                <dd><a href="item.html">商品管理</a></dd>
                <dd><a href="javascript:;">列表二</a></dd>
                <dd><a href="javascript:;">列表三</a></dd>
                <dd><a href="">超链接</a></dd>
              </dl>
            </li>
            <li class="layui-nav-item">
              <a href="javascript:;">解决方案</a>
              <dl class="layui-nav-child">
                <dd><a href="javascript:;">列表一</a></dd>
                <dd><a href="javascript:;">列表二</a></dd>
                <dd><a href="">超链接</a></dd>
              </dl>
            </li>
            <li class="layui-nav-item"><a href="">云市场</a></li>
            <li class="layui-nav-item"><a href="">发布商品</a></li>
          </ul>
        </div>
      </div>

      <div class="layui-body">
        <!-- 内容主体区域 -->
        <iframe src="" frameborder="0" id="menu" style="width: 100%; height: 1080px;"></iframe>
      </div>

      <div class="layui-footer">
        <!-- 底部固定区域 -->
        © layui.com - 底部固定区域
      </div>
    </div>
    <script src="static/layui/layui.js"></script>
    <script>
      //JavaScript代码区域
      layui.use(['element', 'jquery'], function () {
        var element = layui.element
        var $ = layui.jquery
        /**
         * 页面加载时，运行
         */
        $(function () {
          //获取所有的a标签
          $('dd a').click(function (e) {
            e.preventDefault() //取消所有a标签的默认行为
            //获取iframe对象，给它的src赋值 ，赋值内容是点击的每一个a标签的href属性
            $('#menu').attr('src', $(this).attr('href'))
          })
        })
      })
    </script>
  </body>
</html>
```

### 数据表格

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <link rel="stylesheet" href="static/layui/css/layui.css" />
  </head>
  <body>
    <!--搜索开始-->
    <!--搜索功能可以自己私下做一下-->
    <!--搜索结束-->

    <!--表格开始-->
    <table class="layui-hide" id="test" lay-filter="test"></table>
    <script type="text/html" id="toolbarDemo">
      <div class="layui-btn-container">
        <button class="layui-btn layui-btn-sm" lay-event="add">添加</button>
      </div>
    </script>
    <script type="text/html" id="barDemo">
      <a class="layui-btn layui-btn-xs" lay-event="edit">编辑</a>
      <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a>
    </script>
    <!--表格结束-->
    <!--弹出层开始-->
    <div id="saveOrUpdate" style="display: none">
      <form class="layui-form" lay-filter="dataForm" id="dataForm">
        <div class="layui-form-item">
          <div class="layui-inline">
            <label class="layui-form-label">商品id</label>
            <div class="layui-input-inline">
              <input type="tel" name="id" lay-verify="required" autocomplete="off" class="layui-input" />
            </div>
          </div>
          <div class="layui-inline">
            <label class="layui-form-label">商品名称</label>
            <div class="layui-input-inline">
              <input type="text" name="name" lay-verify="required" autocomplete="off" class="layui-input" />
            </div>
          </div>
        </div>
        <div class="layui-form-item">
          <div class="layui-inline">
            <label class="layui-form-label">商品单价</label>
            <div class="layui-input-inline">
              <input type="tel" name="price" lay-verify="required" autocomplete="off" class="layui-input" />
            </div>
          </div>
          <div class="layui-inline">
            <label class="layui-form-label">商品库存</label>
            <div class="layui-input-inline">
              <input type="text" name="count" lay-verify="required" autocomplete="off" class="layui-input" />
            </div>
          </div>
        </div>
        <div class="layui-form-item">
          <div class="layui-inline">
            <label class="layui-form-label">商品状态</label>
            <div class="layui-input-inline">
              <input type="tel" name="status" lay-verify="required" autocomplete="off" class="layui-input" />
            </div>
          </div>
          <div class="layui-inline">
            <label class="layui-form-label">商品分类</label>
            <div class="layui-input-inline">
              <input type="text" name="type" lay-verify="required" autocomplete="off" class="layui-input" />
            </div>
          </div>
        </div>
        <div class="layui-form-item">
          <div class="layui-inline">
            <label class="layui-form-label">上架时间</label>
            <div class="layui-input-inline">
              <input type="tel" name="date" lay-verify="required" autocomplete="off" class="layui-input" />
            </div>
          </div>
        </div>
        <div class="layui-form-item" style="text-align: center">
          <div class="layui-input-block">
            <button type="button" class="layui-btn layui-btn-normal" lay-submit="" lay-filter="dataForm">立即提交</button>
            <button type="reset" class="layui-btn layui-btn-warm">重置</button>
          </div>
        </div>
      </form>
    </div>
    <!--弹出层结束-->
    <script src="static/layui/layui.js"></script>
    <script>
      layui.use(['jquery', 'table', 'layer', 'form'], function () {
        var table = layui.table
        var $ = layui.jquery
        var layer = layui.layer
        var form = layui.form
        //温馨提示：默认由前端自动合计当前行数据。从 layui 2.5.6 开始： 若接口直接返回了合计行数据，则优先读取接口合计行数据。
        //详见：https://www.layui.com/doc/modules/table.html#totalRow
        var myTable = table.render({
          elem: '#test',
          //请求的地址
          url: 'itemServlet?method=queryList',
          toolbar: '#toolbarDemo',
          title: '商品数据表',
          cols: [
            [
              { type: 'checkbox', fixed: 'left' },
              { field: 'id', title: '商品ID', fixed: 'left', unresize: true, sort: true, totalRowText: '合计' },
              { field: 'name', title: '商品名称', edit: 'text' },
              { field: 'price', title: '商品价格', edit: 'text' },
              { field: 'count', title: '商品库存', sort: true, totalRow: true },
              { field: 'type', title: '商品分类', edit: 'text', sort: true },
              {
                field: 'status',
                title: '商品状态',
                sort: true,
                totalRow: true,
                templet: function (res) {
                  return res.status == 1 ? '上架' : '已下架'
                }
              },
              { field: 'date', title: '上架时间', sort: true, totalRow: true },
              { fixed: 'right', title: '操作', toolbar: '#barDemo' }
            ]
          ],
          page: true
        })

        //工具栏事件
        table.on('toolbar(test)', function (obj) {
          var checkStatus = table.checkStatus(obj.config.id)
          switch (obj.event) {
            case 'add':
              openAddItem()
              break
          }
        })
        var url
        //定义个返回值代表弹出层
        var indexForm
        //添加商品
        function openAddItem() {
          indexForm = layer.open({
            type: 1,
            title: '添加商品',
            content: $('#saveOrUpdate'),
            area: ['800px'],
            //打开弹出层成功时的回调函数
            success: function (index) {
              //清空表格
              $('#dataForm')[0].reset()
              url = 'itemServlet?method=insert'
            }
          })
        }
        //修改商品
        function openUpdateItem(data) {
          indexForm = layer.open({
            type: 1,
            title: '修改商品',
            content: $('#saveOrUpdate'),
            area: ['800px'],
            //打开弹出层成功时的回调函数
            success: function (index) {
              //回显数据
              form.val('dataForm', data)
              url = 'itemServlet?method=modify'
            }
          })
        }

        //表单提交
        form.on('submit(dataForm)', function () {
          //序列化表单
          var params = $('#dataForm').serialize()
          //发送ajax请求
          $.get(
            url,
            params,
            function (data) {
              //给出提示信息
              if (data.code == 1) {
                layer.msg(data.msg)
              } else {
                layer.msg(data.msg)
              }
              //关闭弹出层
              layer.close(indexForm)
              //刷新表格
              myTable.reload()
            },
            'json'
          )
        })

        //监听行工具事件
        table.on('tool(test)', function (obj) {
          var data = obj.data //date就是每一行的数据
          console.log(data)
          if (obj.event === 'del') {
            layer.confirm('真的删除行么', function (index) {
              $.get('itemServlet?method=delete&id=' + data.id, function (data) {})
              obj.del() //这就是删除具体的一行 表面删除
              layer.close(index)
            })
          } else if (obj.event === 'edit') {
            openUpdateItem(data)
          }
        })
      })
    </script>
  </body>
</html>
```

### 模型代码 也就是返回给页面的数据格式

```java
package com.softeem.dto;

public class Model {

    private int code;
    private String msg;
    private int count;
    private Object data;

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}
```

### dao 实现类

```java
package com.softeem.dao.impl;

import com.softeem.dao.ItemDao;
import com.softeem.entity.Item;
import com.softeem.utils.DBUtils3;

import java.util.List;

public class ItemDaoImpl implements ItemDao {

    @Override
    public List<Item> selectList() {
        String sql = "select * from item";
        return DBUtils3.queryList(Item.class,sql);
    }

    @Override
    public boolean insert(Item item) {
        String sql = "insert into item values(?,?,?,?,?,?,?)";
        return DBUtils3.exeUPdate(sql,item.getId(),item.getName(),item.getPrice(),
                item.getCount(),item.getStatus(),item.getType(),item.getDate());
    }
}
```

### dao 接口

```java
package com.softeem.dao;

import com.softeem.entity.Item;

import java.util.List;

public interface ItemDao {

    List<Item> selectList();

    boolean insert(Item item);
}
```

### servlet 类

```java
import com.alibaba.fastjson.JSON;
import com.softeem.dao.ItemDao;
import com.softeem.dao.impl.ItemDaoImpl;
import com.softeem.dto.Model;
import com.softeem.entity.Item;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet("/itemServlet")
public class ItemServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //第一步 处理请求的乱码
                req.setCharacterEncoding("utf-8");
                //第二步 处理响应的乱码
                resp.setContentType("text/html;charset=utf-8");
                //第三步 接受要处理的请求
        String method = req.getParameter("method");
        //第四步 通过method的值来决定执行哪个方法
        switch (method){
            case "queryList":
                queryList(req,resp);
                break;
            case "insert":
                insert(req,resp);
                break;
            case "modify":
                modify(req,resp);
                break;
            case "delete":
                delete(req,resp);
                break;
        }
    }

    /**
     * 添加商品
     * @param req
     * @param resp
     */
    private void insert(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        //告诉页面，数据以json数据形式返回
        resp.setContentType("application/json;charset=utf-8");
        //接受所有的数据
        String id = req.getParameter("id");
        String name = req.getParameter("name");
        String price = req.getParameter("price");
        String type = req.getParameter("type");
        String count = req.getParameter("count");
        String date = req.getParameter("date");
        String status = req.getParameter("status");

        //创建一个商品的对象 把数据封装成一个对象
        Item item = new Item(Integer.parseInt(id),name,Double.parseDouble(price),Integer.parseInt(count),
                Integer.parseInt(status),type,date);
        System.out.println(item);

        //创建dao层对象
        ItemDao itemDao = new ItemDaoImpl();
        //调用dao层查询所有商品列表
        boolean result = itemDao.insert(item);
        //创建一个model对象
        Model model = new Model();
        if(result){
            model.setCode(1);
            model.setMsg("添加成功");
        }else{
            model.setCode(0);
            model.setMsg("添加失败");
        }

        //把model转化为json数据
        String json = JSON.toJSONString(model);
        System.out.println(json);
        resp.getWriter().write(json);

    }

    /**
     * 修改商品
     * @param req
     * @param resp
     */
    private void modify(HttpServletRequest req, HttpServletResponse resp) {
    }

    /**
     * 删除商品
     * @param req
     * @param resp
     */
    private void delete(HttpServletRequest req, HttpServletResponse resp) {
    }

    /**
     * 查询所有商品列表
     * @param req
     * @param resp
     */
    private void queryList(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        //创建dao层对象
        ItemDao itemDao = new ItemDaoImpl();
        //调用dao层查询所有商品列表
        List<Item> list = itemDao.selectList();
        //创建一个model对象
        Model model = new Model();
        model.setCode(0);
        model.setMsg("");
        model.setCount(20);
        model.setData(list);
        //把model转化为json数据
        String json = JSON.toJSONString(model);
        System.out.println(json);
        resp.getWriter().write(json);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req,resp);
    }
}
```

### 数据响应之 JSON 插件使用

在 Servlet 中可以使用 response 获取输出流(PrintWriter)，然后通过输出流对象将数据响应到客户端(web 前端)，由于前端的语言种类很多，因此不同的语言之间传递的对象语法格式差异较大，因此，无法直接将 java 对象传递前端(不认识)；所以多数时候后端只能发送字符串数据到前端，但是如需要发送复杂的数据，则需要 JSON 字符串（主流）支持；

在 java 中存在非常多的开源的 JSON 插件：

- fastJSON 阿里巴巴提供的
- Gson 谷歌提供的
- Jackson
- Json-lib
- ....

## fastJSON 用法

```java
public static void main(String[] args) {

    Tbuser u = new Tbuser();
    u.setId(5);
    u.setUsername("ZyKun");
    u.setPassword("123456");
    u.setCellphone("18632186327");
    u.setEmail("7e25@40koxoo.xyz");


    Model model = new Model(1, "登录成功", u);

    //将Java对象转换为JSON字符串
    //fastJson
    String json = JSON.toJSONString(model);
    System.out.println("json字符串" + json);

    //解析json字符串为目前项目中存在java类型对象
    Model m = JSON.parseObject(json, Model.class);
    System.out.println("Java对象" + m);

    //解析json字符串为JSONObject(没有预定的java类型时使用)
    String myjson = "{\"id\":1001,\"stuName\":\"狗蛋\",\"age\":18}";
    JSONObject jsonObject = JSON.parseObject(myjson);
    System.out.println(jsonObject.getIntValue("id"));
    System.out.println(jsonObject.getString("stuName"));
    System.out.println(jsonObject.getIntValue("age"));


    List<Tbuser> users = new ArrayList<>();
    users.add(new Tbuser(1, "softeem", "123", "110", "110@163.com"));
    users.add(new Tbuser(2, "jack", "123", "120", "120@163.com"));
    users.add(new Tbuser(3, "tomcat", "123", "130", "130@163.com"));
    users.add(new Tbuser(4, "spring", "123", "140", "140@163.com"));
    users.add(new Tbuser(5, "mybatis", "123", "150", "150@163.com"));
    users.add(new Tbuser(6, "spring cloud", "163", "160", "160@163.com"));

    //将Java集合转换为JSON字符串
    String listJson = JSON.toJSONString(users);
    System.out.println(listJson);

    //将json字符串解析为java集合对象
    List<Tbuser> tbusers = JSON.parseArray(listJson, Tbuser.class);
    tbusers.forEach(i -> System.out.println(i));
}

```

## 请求转发与重定向

## url-pattern 详解与请求路径问题

## Servlet 处理多个请求

​ 以往在客户端发送请求到服务端时，每一个 Servlet 只做一件事情(即一个功能点)，一旦对于功能需求比较多系统来说，就会需要大量的 Servlet 来处理请求，不利于统一管理，因此，可以将对于某一个模块（用户模块，订单模块，商品模块，购物车模块）的操作单独用一个 Servlet 类解决该模块的所有操作（增删改查：CRUD）

## 作业

基于 Layui+Servlet+JSON 实现一个单表的 CRUD 操作，例如一个商品内容管理系统中的商品管理模块：

（商品 id，名称，单价，库存，分类，上架时间，状态:是否上架）
