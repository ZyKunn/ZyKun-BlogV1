# 🌈ElasticSearch：模糊查询，是 match、fuzzy 还是 wildcard?

<hr/>

[[toc]]

## 引言：DSL 和 SQL 中模糊查询一样吗

今天来说一下模糊查询的事，我们使用**关系型数据库**时，模糊查询使用的就是 like，加上通配符

| 通配符       | 说明                          |
| ------------ | ----------------------------- |
| %            | 包含 0 个或多个字符的任意字符 |
| \_（下划线） | 任意 1 个字符                 |

那 ElasticSearch 中模糊查询是什么呢，我们知道 term 是精确查询，有的地方说 match 是模糊，有的地方说 wildcard 是模糊，甚至还有 fuzzy 等，字面意思就是‘模糊’的语句，他们有什么区别呢

## ElasticSearch 中的模糊查询

举个例子，我们有个人物名单索引 listofhistoricalfigures
里面 name 字段内容如下

1. 张三
2. 张三丰
3. 张飞
4. 三德子
5. 张二丰
6. 孙权
7. 马三丰

结构是下面这样，text 支持分词查询，keyword 支持精确查询

```json

"name": {
        "type": "text",
        "fields": {
          "keyword": {
            "type": "keyword"
          }
        }
     }

```

### match 分词匹配检索

> match
> 英 [mætʃ] 美 [mætʃ]
> n. 火柴;比赛;竞赛;敌手;旗鼓相当的人
> v.般配;相配;相同;相似;相一致;找相称(或相关)的人(或物);配对

match 字面意思是 **相似;相一致;找相称(或相关)的人(或物);配对**

```json
GET listofhistoricalfigures/_search
'{
    "query": {
        "match": {
            "name": "张三"
        }
    }
}

```

我们使用 match 和默认分词器，会把张三进行分词，分成张、三、张三进行检索
会匹配到的结果有

```bash
张三
张三丰
张飞
三德子
张二丰
马三丰
```

### wildcard 通配符检索

> wildcard
> 美 [ˈwaɪldˌkɑrd]
> n.未知数;未知因素;(给予没有正常参赛资格的选手准其参加比赛的)“外卡”;“外卡”选手;
> (用于代替任何字符或字符串的)通配符

wildcard 字面意思是 **通配符**

```json
GET listofhistoricalfigures/_search
'{
    "query": {
        "wildcard": {
            "name.keyword": "张三*"
        }
    }
}

```

使用 wildcard 相当于 SQL 的 like，前后都可以拼接\*，表示匹配 0 到多个任意字符
加.keyword 是要匹配完整的词
会匹配到的结果有

```bash
张三
张三丰
```

### fuzzy 模糊/纠错检索

> fuzzy
> 英 [ˈfʌzi] 美 [ˈfʌzi]
> adj. 覆有绒毛的;毛茸茸的;紧鬈的;拳曲的;(形状或声音)模糊不清的

fuzzy 字面意思是 **模糊**

```json
GET listofhistoricalfigures/_search
'{
    "query": {
        "fuzzy": {
            "name.keyword": "张三"
        }
    }
}

```

使用 fuzzy 就行百度一样，你输入个“邓子棋”，也能把“邓紫棋”查出来，有一定的纠错能力
加.keyword 是要匹配完整的词
会匹配到的结果有

```bash
张三
张三丰
张飞
张二丰
马三丰
```

## 结论

1.match 分词匹配检索，可以对查询条件分词，查到更多匹配的内容，结合不同的分词器，可以得到不同的效果

2.wildcard 通配符检索功能就像传统的 SQL like 一样，如果数据在 es，你又想得到传统的“模糊查询”结构时，用 wildcard

3.fuzzy 纠错检索，让输入条件有容错性
