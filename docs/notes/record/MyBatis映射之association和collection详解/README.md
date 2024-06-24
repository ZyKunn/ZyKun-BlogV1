# 🐦‍MyBatis 映射之 association 和 collection 详解

<hr/>

[[toc]]

## 一、引言

一直对 association 和 collection 有点混淆，现整理一篇文章，用于加强记忆。

## 二、association

association 用于一对一、多对一场景使用。

现在有 2 个表 book 表、bookshelf 书架表。

| BOOK     |         |         |
| -------- | ------- | ------- |
| 字段名称 | 类型    | 备注    |
| id       | int     | 主键    |
| name     | varchar | 书名    |
| type     | int     | 类型    |
| shelf_id | int     | 书架 id |

| Book_shelf |         |            |
| ---------- | ------- | ---------- |
| 字段名称   | 类型    | 备注       |
| id         | int     | 主键       |
| number     | varchar | 书架编号   |
| num        | int     | 可存放数量 |

现有需求：查询根据书籍 id 查询书籍信息和所在书架编号。

PoJo

```java
public class Book{

private Integer id;
private String name;
private String type;
private Integer shelfId;
private BookShelf bookShelfDto;

}
```

```java
public class BookShelf {

private Integer id;
private String number;
private String num;

}
```

mapper

```xml
<resultMap id="bookResultMap" type="com.abc.Book">
    <id property="id" column="id"/>
    <result property="name" column="name"/>
    <result property="type" column="type"/>
    <!--关联属性-->
    <association property="bookShelfDto" javaType="com.abc.BookShelf">
        <id property="id" column="shelf_id"/>
        <result property="number" column="number"/>
        <result property="num" column="num"/>
    </association>
</resultMap>

<select id="getBookInfo" resultMap="bookResultMap">
select book.id,book.name,book.type,book.shelf_id,shelf.number,shelf.num
from book left join book_shelf shelf on book.shelf_id = shelf.id
where book.id = #{id}
</select>
```

## 三、collection

应用场景为一对多关系，即实体里放集合。

表不变

现有需求：根据书架 ID 查询书架信息及书架存放的书籍信息。

POJO

```java
public class Book{

private Integer id;
private String name;
private String type;
private Integer shelfId;

}
```

```java
public class BookShelf {

private Integer id;
private String number;
private String num;
private List<Book> bookList;

}
```

```xml
<resultMap id="bookShelfResultMap" type="com.abc.BookShelf">
    <id property="id" column="shelf_id"/>
    <result property="number" column="number"/>
    <result property="num" column="num"/>
    <!--关联属性-->
    <collection property="bookList" javaType="com.abc.Book">
         <id property="id" column="id"/>
         <result property="name" column="name"/>
         <result property="type" column="type"/>
    </collection>
</resultMap>

<select id="getBookShelfInfo" resultMap="bookShelfResultMap">
select book.id,book.name,book.type,book.shelf_id,shelf.number,shelf.num
from book left join book_shelf shelf on book.shelf_id = shelf.id
where shelf.id = #{id}
</select>

Mapper.java
BookShelf getBookShelfInfo(Integer id);
```
