# 08 - 类加载器和反射 :artificial_satellite:

[[Toc]]

## 1.类的加载

### 1.1 类加载

​ 当程序要使用某个类时，如果该类还未被加载到内存当中，则系统会通过类加载，类连接，类的初始化三个步骤来对类进行初始化。如果不出现意外情况，jvm 将会连续完成这三个步骤，所有有时候也把这三个步骤称为类加载或类的初始化。

#### 类的加载

- 就是指将 class 文件读入内存，并为之创建一个 java.lang.Class 对象
- 任何类被使用时，系统都会为之建立一个 java.lang.Class 对象

#### 类的连接

- 验证阶段：用于检验被加载的类是否有正确的内部结构，并和其他类协调一致（是否对 jvm 有危害）
- 准备阶段：负责为类的类静态变量分配内存，并设置默认初始化值
- 解析阶段：将类的二进制数据中的符号引用替换为直接引用

#### 类的初始化

​ 对类变量进行初始化，步骤如下：

- 假如类还未被加载和连接，则程序先加载并连接该类
- 假如该类的直接父类还未被初始化，则先初始化其父类
- 假如类中有初始化语句，则系统依次执行这些初始化语句

  ### 1.2 类加载器

​ 类加载器的作用：负责将.class 文件加载到内容中，并为之生成对应的 java.lang.Class 对象

​ ClassLoader 双亲委派机制：用来保护程序的安全

​ ClassLoader 的三个子类

​ BoostarpClassLoader (启动类记载器): 用来加载 JDK 中的所有 Class

​ ExClassLoader（扩展类加载器）：用来加载外部引入的一些 jar 包

​ AppClassLoader（应用类加载器）：用来加载我们自己写的 class

​

## 2.反射入门

- 反射概述

  ​ 是指在运行时去获取一个类的变量和方法信息。然后通过获取到的信息来创建对象，调用方法的一种机制。由于这种动态性，可以极大的增强程序的灵活性，程序不用在编译期就完成确定，在运行期仍然可以扩展

- 获得 Class 对象的三种方式

  ```java
  public class ReflectDemo1 {

      public static void main(String[] args) throws ClassNotFoundException {
          //获取class文件的对象方式一：直接通过类的属性class获取
          //ctrl+alt+v ~=alt+enter
          Class c1 = User.class;
          //获取class文件的对象方式二；通过调用对象的方法getClass()
          User u = new User();
          Class c2 = u.getClass();
          System.out.println(c1==c2);
          //获取class文件的对象方式三：通过调用Class的静态方式forName（）
          Class c3 = Class.forName("com.sfoteem.reflect.demo1.User");
          System.out.println(c3==c2);
          //通过Class对象反射生成对象  jdk9以上newInstance()过时了
          Object o = c3.newInstance();
          System.out.println(o);
      }

      //三种方式都可以获取Class文件对象
      //第一种是最简单
      //第三种是最灵活
  }
  ```

- 获得构造器

  ```java
  /**
   * 获取构造函数
   */
  public class ConstructorDemo {

      public static void main(String[] args) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException {
          /*
          * Constructor<?>[] getConstructors()
              返回一个数组包含 Constructor物体反射所有的 类对象表示的类的公共构造函数。
          * */
          Class clazz = User.class;

          Constructor[] constructors = clazz.getConstructors();
          for (Constructor constructor : constructors) {
              System.out.println(constructor);
          }
          System.out.println("============================");
          /*Constructor<?>[] getDeclaredConstructors()
              返回 Constructor物体反射所有的构造函数通过 类对象表示的类中声明一个数组。  */
          Constructor[] declaredConstructors = clazz.getDeclaredConstructors();
          for (Constructor declaredConstructor : declaredConstructors) {
              System.out.println(declaredConstructor);
          }
          System.out.println("============================");
          //拿一个构造函数 参数若不写 则拿到的时候默认空参构造函数
          //Constructor constructor = clazz.getConstructor();
          Constructor constructor = clazz.getConstructor(int.class);
          Object o = constructor.newInstance(10);
          System.out.println(o);
          System.out.println(constructor);
          //拿到任何单个构造函数 若有参数 则给定指定参数的class对象即可
          Constructor c = clazz.getDeclaredConstructor(String.class);
          //当设置为true的时候 即可越过java虚拟机修饰符检查访问机制
          //也称作暴力反射。。。
          c.setAccessible(true);
          Object o1 = c.newInstance("小鲍");

          System.out.println(o1);
      }
  }
  ```

- 获得字段

  ```java
  /**
   * 获取字段
   */
  public class FiledDemo {

      public static void main(String[] args) throws NoSuchFieldException {
          /*
          * Field getField(String name) 拿到一个字段 通过给定的参数拿到指定的字段
              返回一个 Field对象反映的类或接口的 类对象表示的指定公共成员。
          * */
          Class c = User.class;
          Field field = c.getField("age");
          System.out.println(field);
          //通过调用getType();获取该字段的类型
          Class<?> type = field.getType();
          System.out.println(type);
          //获取字段类型的字符串
          String str = type+"";
          str = type.getCanonicalName();
          str = type.getName();
          System.out.println(str.equals("int"));
          //
          int i = field.getModifiers();

          //Field getFields() 拿到所有的公共字段
          Field[] fields = c.getFields();
          for (Field f : fields) {
              System.out.println(f);
          }

          System.out.println("===================");
          //拿到任何的字段 调用getDeclaredFiled()
          Field age = c.getDeclaredField("name");
          int num = age.getModifiers();
          System.out.println(num);

      }
  }
  ```

- 获得方法

  ```java
  **
   *  获取方法
   */
  public class MethodDemo {

      public static void main(String[] args) throws NoSuchMethodException, IllegalAccessException, InstantiationException, InvocationTargetException {
          //获取Class对象
          Class c = User.class;

          //获取所有公共方法包括父类getMethods()  ctrl+alt+v
          Method[] methods = c.getMethods();
          //遍历查看一下是否拿到了
          for (Method method : methods) {
              System.out.println(method);
          }
          System.out.println("========================");
          //拿单个公共的getMethod(String name,Class<T>... params)

          //获取所有方法不包括父类 getDeclaredMethods()
          Method[] m = c.getDeclaredMethods();
          //查看一下是否拿到了所有不包括父类
          for (Method method : m) {
              System.out.println(method);
          }

          //拿单个公共的getDeclaredMethod(String name,Class<T>... params)
          Method me = c.getDeclaredMethod("playGame", String.class);
          //怎么执行这个方法
          //实例化一个对象
          Object obj = c.newInstance();//存在于堆中
          System.out.println(obj);
          //me代表拿到的方法playGame  通过me对象调用invoke（obj，..）
          //obj就是谁要执行这个方法

          me.invoke(obj,"小鲍");


      }
  }
  ```

## 3. 案例

- 通过配置文件创建对象

  ```java
  /**
   * 通过配置文件创建对象
   */
  public class Test1 {

      public static void main(String[] args) throws IOException, ClassNotFoundException, NoSuchMethodException, IllegalAccessException, InstantiationException, InvocationTargetException {
          /*Cat c = new Cat();
          c.bark();

          Dog d = new Dog();
          d.bark();*/

          //第一步 读取配置文件 通过类加载器获得输入流 任何class对象都可以获取类加载器
          InputStream inputStream = Test1.class.getClassLoader().getResourceAsStream("class.txt");
          //第二步创建properties对象 用来加载流
          Properties prop = new Properties();
          prop.load(inputStream);
          String className = prop.getProperty("className");
          String methodName = prop.getProperty("methodName");
          //第三步通过Class的静态方法forName()获取该类的Class对象
          Class<?> c = Class.forName(className);
          //通过Class对象拿到该类方法
          Method method = c.getDeclaredMethod(methodName);
          //实例化对象
          //Object obj = c.newInstance();
          Object obj = c.getDeclaredConstructor().newInstance();
          //调用方法
          method.invoke(obj);

      }
  }
  ```

  配置文件

  ```properties
  #className=com.softeem.reflect.softeem.reflect.test.Dog
  #methodName=bark
  className=com.softeem.reflect.softeem.reflect.test.Cat
  methodName=bark
  ```

- 越过泛型检查

  ```java
  /**
   * 通过反射越过泛型检查
   */
  public class Test2 {

      public static void main(String[] args) throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
          //java中的泛型机制是一种伪泛型  只作用于编译期间
          List<Integer> list = new ArrayList<>();
          /*list.add(1);
          list.add(2);
          list.add(3);
          list.add("呵呵");
          System.out.println(list);*/

          Class<? extends List> c = list.getClass();
          Method method = c.getDeclaredMethod("add", Object.class);
          method.invoke(list,"呵呵");
          method.invoke(list,"哈哈");
          method.invoke(list,"嘻嘻");
          System.out.println(list);
      }
  }
  ```

- 拷贝对象

  ```java

  /**
   * 对象拷贝
   */
  public class Test3 {
      /**
       * 通过泛型机制返回指定对象
       * @param resource
       * @param t
       * @param <T>
       * @return
       * @throws IllegalAccessException
       * @throws InstantiationException
       * @throws NoSuchMethodException
       * @throws InvocationTargetException
       */
      public static<T> T copy(Object resource,Class<T> t) throws IllegalAccessException, InstantiationException, NoSuchMethodException, InvocationTargetException {
          //通过原对象获取class对象
          Class<?> c = resource.getClass();
          //通过给定的类型创建对象
          T obj = t.newInstance();
          //获取所有字段
          Field[] fields = c.getDeclaredFields();
          for (Field field : fields) {
              //获取字段的简洁字符串形式
              String f = field.getName();
              //System.out.println(f);
              String sname = "set"+f.substring(0,1).toUpperCase()+f.substring(1);
              String gname = "get"+f.substring(0,1).toUpperCase()+f.substring(1);
              if(field.getType().getName().equals("boolean")){
                  gname = "is"+f.substring(0,1).toUpperCase()+f.substring(1);
              }
              //System.out.println(sname);
              //System.out.println(gname);
              //获取原对象的具体get方法
              Method getMethod = c.getMethod(gname);
              //调用原对象的具体方法get 获取到一个值
              Object value = getMethod.invoke(resource);
              //获取具体set方法
              Method setMethod = c.getMethod(sname, field.getType());
              //把通过原对象拿到的值 赋值到新的对象里面
              setMethod.invoke(obj,value);
          }
          return obj;
      }


      /**
       * 拷贝对象
       * @param resource
       * @return
       * @throws IllegalAccessException
       * @throws InstantiationException
       * @throws NoSuchMethodException
       * @throws InvocationTargetException
       */
      public static Object copy(Object resource) throws IllegalAccessException, InstantiationException, NoSuchMethodException, InvocationTargetException {
          //通过原对象获取class对象
          Class<?> c = resource.getClass();
          //通过反射创建一只新的对象
          Object target = c.newInstance();
          //获取所有字段
          Field[] fields = c.getDeclaredFields();
          for (Field field : fields) {
              //获取字段的简洁字符串形式
              String f = field.getName();
              //System.out.println(f);
              String sname = "set"+f.substring(0,1).toUpperCase()+f.substring(1);
              String gname = "get"+f.substring(0,1).toUpperCase()+f.substring(1);
              if(field.getType().getName().equals("boolean")){
                  gname = "is"+f.substring(0,1).toUpperCase()+f.substring(1);
              }
              //System.out.println(sname);
              //System.out.println(gname);
              //获取原对象的具体get方法
              Method getMethod = c.getMethod(gname);
              //调用原对象的具体方法get 获取到一个值
              Object value = getMethod.invoke(resource);
              //获取具体set方法
              Method setMethod = c.getMethod(sname, field.getType());
              //把通过原对象拿到的值 赋值到新的对象里面
              setMethod.invoke(target,value);
          }
          return target;
      }

      public static void main(String[] args) throws InstantiationException, IllegalAccessException, NoSuchMethodException, InvocationTargetException {
          Cat c = new Cat();
          c.setAge(2);
          c.setName("伽菲猫");

          Cat cat = copy(c, Cat.class);
          System.out.println(cat);
      }
  }
  ```

- 封装 DBUtils

  ```java
  /**
   * 封装DBUtils
   */
  public class Test4 {
      //驱动
      private static final String driver = "com.mysql.cj.jdbc.Driver";
      //访问路径
      private static final String url = "jdbc:mysql:///mybase?serverTimezone=UTC";
      //用户名
      private static final String username = "root";
      //密码
      private static final String password = "root";
      //声明一个连接池对象
      private static DruidDataSource dataSource;

      static {
          //静态代码块调用生成连接池方法
          dataSource = creatDataSource();
      }

      /**
       * 创建连接池
       * @return
       */
      private static DruidDataSource creatDataSource() {
          //设置参数
          dataSource = new DruidDataSource();
          dataSource.setDriverClassName(driver);
          dataSource.setUrl(url);
          dataSource.setUsername(username);
          dataSource.setPassword(password);
          return dataSource;
      }

      /**
       * 获取连接
       * @return
       */
      public static Connection getConnection(){
          Connection conn = null;
          try{
              if(dataSource==null||dataSource.isClosed()){
                  dataSource = creatDataSource();
              }
              conn = dataSource.getConnection();
          }catch (SQLException e){
              e.printStackTrace();
          }
          return conn;
      }

      /**
       * 关闭资源
       * @param rs
       * @param stat
       * @param conn
       */
      public static void close(ResultSet rs, Statement stat,Connection conn){
          try{
              if(rs!=null){
                  rs.close();
              }
              if(stat!=null){
                  rs.close();
              }
              if(conn!=null){
                  rs.close();
              }
          }catch (SQLException e){
              e.printStackTrace();
          }
      }

      //通用更新操作
      //  id  name  age  time  id:1 ,name:肖翠,age:15 ,time:3
      //   1  小鲍   15    3
      //  2   肖翠   15    3

      /**
       * 把查询到的结果封装到map集合中
       * @param sql
       * @param params
       * @return
       */
      public static List<Map<String,Object>> queryToMap(String sql,Object... params){
          //创建集合
          List<Map<String,Object>> maps = new ArrayList<>();
          //获取连接
          Connection conn = getConnection();
          //获取执行sql语句的平台
          PreparedStatement stat = null;
          ResultSet rs = null;
          try {
              stat = conn.prepareStatement(sql);
              //判断参数是否为空
              if(params!=null){
                  //遍历循环参数
                  for (int i = 0; i < params.length; i++) {
                      //为占位符设置值
                      stat.setObject((i+1),params[i]);
                  }
              }
              //执行查询并获取结果集
              rs = stat.executeQuery();
              //获取查询结果的元数据
              ResultSetMetaData rsmd = rs.getMetaData();
              //获取一条查询结果的总列数
              int columnCount = rsmd.getColumnCount();
              //遍历结果集
              while (rs.next()){
                  Map<String,Object> map = new HashMap<>();
                  //遍历一条结果集
                  for (int i = 1; i <= columnCount ; i++) {
                      //获取每一列的名字
                      String name = rsmd.getColumnName(i);
                      //通过列名获取对应的值
                      Object value = rs.getObject(name);
                      //把列名，列值通过键值对存储到map集合中
                      map.put(name,value);
                  }
                  //把每一行数据对应的map存到maps中
                  maps.add(map);
              }
              return maps;
          } catch (SQLException e) {
              e.printStackTrace();
          }finally {
              close(rs,stat,conn);
          }
          return null;
      }

      /**
       * 通用查询查一个
       * @param sql
       * @param t
       * @param params
       * @param <T>
       * @return
       */
      public static<T> T queryOne(String sql,Class<T> t,Object... params){
          //将查询结果封装到map中
          List<Map<String, Object>> maps = queryToMap(sql, params);
          T obj = null;
          //判断集合长度
          if(maps.size()>0){
              Map<String, Object> map = maps.get(0);
              obj = mapToBean(t,map);
          }
          return obj;
      }

      public static<T> List<T> queryList(String sql,Class<T> t,Object... params){
          //创建一个List
          List<T> list = new ArrayList<>();
          //将查询结果封装到map中
          List<Map<String, Object>> maps = queryToMap(sql, params);
          T obj = null;
          //判断集合长度
          if(maps.size()>0){
              for (Map<String, Object> map : maps) {
                  obj = mapToBean(t,map);
                  list.add(obj);
              }
          }
          return list;
      }

      /**
       * 将map转化为对象
       * @param t
       * @param map
       * @param <T>
       * @return
       */
      private static <T> T mapToBean(Class<T> t, Map<String, Object> map) {
          try{
              //实例化一个给定类型的对象
              T obj = t.newInstance();
              //遍历map
              map.forEach((k,v)->{
                  try {
                      //获取给定类型的字段
                      Field field = t.getDeclaredField(k);
                      //暴力反射
                      field.setAccessible(true);
                      //把值赋值给对象的属性
                      field.set(obj,v);
                  } catch (NoSuchFieldException e) {
                      e.printStackTrace();
                  } catch (IllegalAccessException e) {
                      e.printStackTrace();
                  }
              });
              return obj;
          } catch (IllegalAccessException e) {
              e.printStackTrace();
          } catch (InstantiationException e) {
              e.printStackTrace();
          }
          return null;
      }

  }
  ```

- 封装 BaseServlet

## 作业：封装一个能将 request.getParameterMap（）变成一个对象的工具类
