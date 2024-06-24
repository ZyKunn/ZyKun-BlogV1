# 02 - Mysql 之 SQL 查询 :nerd_face:

[[TOC]]

## Mysql 图形界面工具使用

mysql 的第三方图形界面工具非常多，比如:

- **Sqlyog**
- **Navicat for Mysql**
- **Navicat Premium**
- Mysql Front
- PhpMyAdmin

## 运算符

### 算术运算

| 运算符 | 操作方式 | 说明             |
| ------ | -------- | ---------------- |
| +      | a + b    | 实现两数相加     |
| -      | a - b    | 两数相减         |
| -      | -a       | 一元减号，取负值 |
| \*     | a \* b   | 两数相乘         |
| /      | a / b    | 两数相除         |
| %      | a % b    | 两数取余         |

### 关系运算

| 运算符        | 操作方式            | 说明                              |
| ------------- | ------------------- | --------------------------------- |
| =             | a=b                 | 如果两操作数相等则为 true         |
| !=,<>         | a != b,a<>b         | 如果两操作数不相等则为 true       |
| >             | a > b               | 如果 a 大于 b,为 true             |
| \>=           | a >= b              | 如果 a 大于等于 b,为 true         |
| <             | a < b               | 如果 a 小于 b,为 true             |
| <=            | a <= b              | 如果 a 小于等于 b,为 true         |
| in            | a in(b1,b2,b3...)   | 判断 a 是否是 b1,b2,b3...中的一个 |
| between...and | a between b1 and b2 | 判断 a 是否在 b1,b2 之间          |
| like          | a like b            | 如果 a 与 b 匹配，则为 true       |
| not like      | a not like b        | 如果 a 与 b 不匹配，则为 true     |
| is null       | a is null           | 如果操作数为 null，则为 true      |
| is not null   | a is not null       | 如果操作数不为 null，则为 true    |

```mysql
SELECT * FROM emp where NAME <> '张三'
SELECT * FROM emp where sal > 7000
SELECT * FROM emp where age in (21,22,23,29)
SELECT *  FROM emp where sal>=7500 && sal<=8000
SELECT * FROM emp where sal BETWEEN 7500 and 8000
SELECT * from emp where name like "%张%"
SELECT * FROM emp where name is not null
```

### 逻辑运算

| 运算符   | 操作方式       | 说明                                       |
| -------- | -------------- | ------------------------------------------ |
| and,&&   | a and b,a && b | 逻辑与，两操作数都为 true 则为 true        |
| or，\|\| | a or b,a\|\|b  | 逻辑或，两操作数任意一个为 true，则为 true |
| not,!    | not a,!a       | 逻辑非，如果操作数为 false，则结果为 true  |

> 运算数左右需为 boolean 结果

## SQL 查询

​ SQL 查询在数据库中是非常重要的组成，因为未来开发场景下，大多数的功能都集中在查询上，而且查询可以简单，也可以复杂，复杂到很多表之间的联合查询。

SQL 查询的语法：

```sql
select
distinct
	查询列
from
	表名称
连接表（inner join/left join/right join）
where
	查询条件
group by
	分组依据
having
	分组的查询条件
order by
	排序字段
limit
	结果限制
```

### 基础查询

1. 查询所有列

   ```sql
   select * from emp;
   ```

2. 查询部分列信息（查询员工的姓名，职位，薪资）

   ```sql
   select ename,job,sal from emp;
   ```

```sql
insert into emp(eno,ename,job,age) values(23,'卡牌大师','骨干员工',33);

-- 查询指定列
select ename,job,IFNULL(sal,0) from emp;
IFnull(exp1,exp2)
解释:当exp1字段为null时，默认该这个null值赋值为exp2

--查询时使用运算操作
select ename,ifnull(sal,0)-1000 from emp;

--显示所有的职位，不能重复
select distinct job from emp;

distinct 去重的语法，去除重复出现字段值

/*
	mysql聚合函数查询
	count  统计函数
	sum	求和
	avg	求平均值
	max 求最大值
	min 求最小值
*/
--查询表中一共有多少员工
select count(*) from emp;

--查询所有员工的总薪资
select sum(sal) from emp;

--查询所有员工的月薪平均值
select avg(sal) from emp;

--查询工资最低的员工薪资
select min(sal) from emp;

--查询工资最高的员工薪资
select max(sal) from emp;
```

### 条件查询

```sql
/* 条件查询 */
-- 查询年龄超过30的员工
select * from emp where age>=30;

-- 查询所有薪资超过3500 小于10000的员工信息
select * from emp where sal >= 3500 && sal < 10000;
select * from emp where sal between 3500 and 10000;

-- 查询所有在3，5，6三个部门的员工
select * from emp where  dno=3 or dno=5 or dno=6;
select * from emp where  dno=3 || dno=5 || dno=6;
select * from emp where dno in(3,5,6);

-- 查询所有不是经理的员工
select * from emp where job != '经理';
select * from emp where job <> '经理';

/* 模糊查询 */
-- 查询名字中带有“卡”的员工（模糊查询）
select * from emp where ename like '%卡%';

-- 查询姓“卡”的所有员工
select * from emp where ename like '卡%';

-- 查询只有三个字姓“卡”的员工
select * from emp where ename like '卡__';

/*
	"%"和"_"：都是占位符，%用于匹配多个字符,“_”用于匹配一个字符
*/
-- 查询名字只包含两个字的员工
select * from emp where ename like '__';
-- 查询所有员工中不是姓李的员工
select * from emp where ename not like '李%';

/*
 分组查询：group by
 查询目标必须是分组依据或者分组函数（聚合函数）
*/
-- 统计每一种职位的员工各有多少人？
select job,count(*) from emp group by job;

-- 统计每个部门分别有多少人
select dno,count(*) from emp group by dno;

-- 查询每个部门月薪超过3500员工有多少人？
select dno,count(*) from emp where sal > 3500 group by dno;

-- 查询每个部门月薪超过3500员工有多少人,要求显示部门号，人数以及平均薪资？
select dno,count(*) as '总人数',avg(sal) as '平均薪资' from emp where sal > 3500 group by dno;
-- 查询每个工作岗位员工数量，并且要求员工的薪资大于5000
SELECT job,count(*) from emp GROUP BY job HAVING MIN(sal)>5000
-- 使用别名
select e.ename n,e.sal s,e.hiredate h from emp e;

/*
	排序：order by
			  ASC 升序 (默认)
				DESC 降序
*/
-- 查询所有员工信息，并且按照月薪从高到低排序显示
select * from emp order by sal desc

-- 查询每个部门的平均薪资，并且按照平均薪资从高到低排序（显示：部门号，平均薪资）
select dno,avg(sal) from emp group by dno order by avg(sal)

/*
	分页：分页需求一般分为假分页(逻辑分页)和真分页(物理分页)
		这里主要使用真分页，可以节省内存空间，直接在数据库里面对数据分页
		limit
		limit一般后面带两个整数参数
		1：起始的查询位置
		2：本次查询的数据行数
*/
-- 显示结果中的前五条数据
select * from emp limit 5;

-- 以上操作等同
select * from emp limit 20,5;

```

### 多表联合查询

##### 笛卡尔沉积：

1. 先确定数据要用到哪些表。
2. 将多个表先通过笛卡尔积变成一个表。
3. 然后去除不符合逻辑的数据（根据两个表的关系去掉）。
4. 最后当做是一个虚拟表一样来加上条件即可。

如果 A 表有 20 条记录，B 表有 30 条记录，则二者关联后的笛卡尔积工 20\*30=600 条记实录。也就是说 A 表中的每条记录都会于 B 表的所有记录关联一次，三种关联方式实际上就是对“笛卡尔积”的处理方式不同。

```sql
/*
	多表联合查询
	1.等值连接 （查询条件数至少等于 表数-1）
	2.内连接
	3.左外连接
	4.右外连接
	5.自连接
*/
-- 等值连接
-- 为避免笛卡尔积出现，应该在查询时加入等值连接条件
-- 显示所有员工和所在部门的信息（emp,dept）
select * from emp,dept where emp.dno=dept.dno;

-- 查询所有员工的工号，姓名，职位，月薪和所在部门名称
select
	e.eno,e.ename,e.job,e.sal,d.dname
from
	emp e,dept d
where
	e.dno=d.dno;

-- 在以上基础上再显示员工的薪资等级
select
	e.eno,e.ename,e.job,e.sal,d.dname,s.level
from
	emp e,dept d,sallevel s
where
	e.dno=d.dno and
	e.sal between s.lowsal and s.hisal;

-- 查询所有T8等级薪资的员工来自哪些部门，显示部门名和员工姓名，薪资
select
	e.ename,e.sal,d.dname
from
	emp e,dept d,sallevel s
where
	e.dno=d.dno and
	e.sal between s.lowsal and s.hisal and
	s.level='T8';

-- 内连接(根据连接条件获取相交的部分，与等值连接结果一致)
-- 显示所有员工的基本信息包含部门信息
select * from emp e inner join dept d on e.dno=d.dno;

-- 左外连接(左连接)
-- 左连接以左表为基准连接右表，不论左表是否存在与右表关联的数据，左表始终完全显示
-- 查询出所有员工信息包括部门信息，同时要求显示不属于任何部门的员工
select * from emp e LEFT JOIN dept d on e.dno = d.dno;

-- 查询出所有员工和部门的信息，要求显示没有员工的部门信息
select * from dept d LEFT JOIN emp e on e.dno = d.dno;
-- 右外连接(右连接)
-- 右连接以右表为基准连接左表，不论右表是否存在与左表关联的数据，右表始终完全显示
select * from emp e RIGHT JOIN dept d on e.dno = d.dno;

/*
	子查询：将一个查询的查询结果当做另一个查询的条件使用;或者将一个查询的结果当做一张临时表使用
	单行子查询
	多行子查询
	多列子查询（临时表）
*/
-- 查询与猪八戒同一个部门的其他员工信息(子查询)
select * from emp where dno=(select dno from emp where ename='猪八戒');

-- 自连接
select e2.* from emp e1,emp e2 where e1.dno = e2.dno and e1.ename='猪八戒';

-- 使用内连接实现以上需求？
select e2.* from emp e1 INNER JOIN emp e2 on e1.dno=e2.dno and e1.ename='猪八戒'

-- 查询在研发部和行政部的所有员工？
select * from emp where dno in
(select dno from dept where dname in('研发部','行政部'));

-- 查询与猪八戒同一个部门并且同一个职位的员工信息
select e.* from emp e,
(select dno,job from emp where ename='猪八戒') t
where e.dno=t.dno and e.job=t.job and e.ename != '猪八戒';

-- 查询行政部中比研发部中任何一个员工工资都高的员工信息
select e.* from emp e,dept d where e.sal >
(select max(e.sal) from emp e,dept d where e.dno=d.dno and d.dname='研发部')
and d.dname='行政部' and e.dno=d.dno;

-- 找出部门10中所有经理，部门20中所有普通员工以及既不是经理又不是普通员工
-- 但其薪金大于或等6000的所有雇员的详细资料。
select * from emp where dno=20 and job='普通员工'
UNION  -- 联合其他查询结果
select * from emp where dno=10 and job='经理'
union
select * from emp where job not in ('普通员工','经理') and sal > 6000;
```

> 查询注意事项:
>
> 1. 对于任何查询，明确几个目标：
>
> 1. **查询列**
> 1. **查询目标表**
> 1. **查询条件**
>
> 1. 查询方式：
>
> ```
> 多表查询:
> 等值连接
> 内连接
> 自连接
> 外连接(左外连接，右外连接)
>
> 子查询
> 单行子查询
> 多行子查询
> 多列子查询（虚拟表）
> ```
>
> 3.  对于同一个查询需求可以使用多种手段实现，但是需要考虑效率
> 4.  查询语句优化：
> 5.  尽量避免子查询
> 6.  避免使用“\*”
> 7.  对查询结果尽量使用 limit 显示
> 8.  单条 sql 尽量少用或者不用 like
> 9.  在 sql 语句中尽量使用等值作为条件
> 10. 使用函数的时候，尽量使用系统函数，少使用自定义函数
> 11. 对某些经常使用或者经常被查询的字段添加索引

## 维护数据完整性之约束

在数据库中维护**数据完整性**的解决方案有两种：

1. 约束（constraint）
2. 触发器（trigger）

### 约束（Constraint）

约束是通过对数据表中的字段使用以一些特殊用途的关键字进行限定，从而使得该列的数据不能随意填写，以此来保障数据的完整性；数据库中一共包含以下 5 种约束：

1. **主键约束（primary key）**
2. 外键约束（foreign key）
3. 唯一约束（unique）
4. 检查约束（check） **Mysql 暂时不生效**
5. 不为空约束（not null）

#### 主键约束（primary key）

主键约束一般用于一张表中的标识列（该列数据唯一且不为空）；每一张表都应该存在一个主键，主键可以用于一个列，也可以应用于多个列

如果主键类型为 int 的时候：

建议主键设置成自增长，如果主键设置成自增长的时候，在添加数据时，可以不用给主键赋值

```mysql
INSERT into emp (eno,ename) VALUES (null,'沙和尚2')
```

如果主键类型为字符串：

可以使用类似于 UUID 这样的一个 32 位或者 18 位的一个字符串：比如 eb077943-0b49-43ba-a7be-22c443e1b7b8

作为 varchar 类型的 id 的值

1. 注意事项：

> 1.  主键列一般用于标识列（不能重复，且不为空）
> 2.  尽量避免使用联合主键（设置多个列同时为主键）
> 3.  任何表都应该存在主键列

#### 外键约束（foreign key）

外键约束一般用于对一个表与另一个表进行关 联时的依据，通常会在表中使用 foreign key 建立外键；外键必然是另一张表的主键，而另一张就称之为主表，添加外键的表称之为从表。

#### 唯一约束（unique）

唯一约束用于设置表中指定列是唯一的（不可重复）；常见于用于表中的用户名列，分类表中类别名列等，使用方式：

```sql
username varchar(30) unique not null,
```

如果报错值，后面偷偷跟了一个空格这样会导致数据重复

解决这种问题：

​ 先后台对这个数据去空格在数据库中查询一边，再做保存

#### 不为空约束（not null）

设置表中指定列必须给定值，不允许为 null

#### 检查约束（check）

检查约束在 mysql 中还未生效，如果需要对字段进行检查约束，可以考虑使用 enum 类型。

### 触发器：

触发器是与表有关的数据库对象，在满足定义条件时触发，并执行触发器中定义的语句集合。

确定它是非常高效的：触发器是针对每一行的；对增删改非常频繁的表上切记不要使用触发器，因为它会非常消耗资源。

#### 练习：

_1.列出同部门下所有员工的姓名及其直接上级的名字(根据 deptno 划分部门)_

2.列出受雇日期早于直接上级的所有员工的编号、姓名、部门名称

3.列出部门名称和这些部门的员工信息

4.列出在销售部工作的员工的姓名，假定不知道销售部的部门编号

5.列出与庞统从事相同工作的所有员工及部门名称

6.列出最低薪金大于 15000 的各种工作以及从事此工作的员工人数
