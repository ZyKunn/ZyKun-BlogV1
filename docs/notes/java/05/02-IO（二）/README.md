# 02 - IO（二） :pencil:

[[TOC]]

## IO 综合练习

## 缓冲流(续)

### flush()

对于字符输出流，系统会自带缓冲区，默认 write 时，数据会先存储到缓冲区中，一旦执行 close()方法，此时缓冲区中的数据会全部同步到目标输出源中，若此时还不能 close，但是需要将数据实时同步时，可以通过调用输出流的 flush 方法，强制刷新:

```java
//        BufferedWriter bw = new BufferedWriter(new FileWriter("day2-IO02/c.txt"));
//        bw.write("忽闻岸上踏歌声");
//        bw.flush();
//        bw.close();

//        FileOutputStream fos = new FileOutputStream("day2-IO02/c.txt",true);
//        fos.write("李白乘舟将欲行".getBytes());

        FileWriter fw = new FileWriter("day2-IO02/c.txt");
        fw.write("忽闻岸上踏歌声");
        //将缓冲区的内容，刷新到目标输出源中
        fw.flush();
        //关闭流之前会先执行flush
        fw.close();
```

## 打印流（输出）

在 IO 中提供了两个用于输出的流：打印流；这两个流主要区别在于一个用于字符输出，另一个用于字节输出：

- PrintWriter
- PrintStream

### PrintStream

字节打印流

#### 常见的构造器

- PrintStream(OutputStream os)
- PrintStream(OutputStream os,boolean autoFlush)
- PrintStream(String fileName)

#### 常见方法

- print(..)
- println(..)
- write(..)

### PrintWriter

字符打印流

#### 常见构造器

- PrintWriter(Writer w)
- PrintWriter(Writer out,boolean autoFlush)
- PrintWriter(String fileName)

#### 常见方法

- print(..)
- println(..)
- write(..)

## RandomAccessFile

RandomAccessFile 是 javaIO 中提供的一个功能丰富的特殊流，该流包含了对于文件的读写操作，具体的使用方式和 FileInputStream 与 FileOutputStream 几乎一致，除此之外，RandomAccessFile 还提供了对于元数据(原始数据类型)的读写操作。

### 构造器

- RandomAccessFile(File file,String mode)
- RandomAccessFile(String fname,String mode)

> 其中第二个参数 mode 的可取值为：
>
> - "r" 以只读方式打开。调用结果对象的任何 write 方法都将导致抛出 IOException。
>
> - "rw" 打开以便读取和写入。如果该文件尚不存在，则尝试创建该文件。
>
> - "rws" 打开以便读取和写入，对于 "rw"，还要求对文件的内容或元数据的每个更新都同步写入到底层存储设备。
>
> - "rwd" 打开以便读取和写入，对于 "rw"，还要求对文件内容的每个更新都同步写入到底层存储设备。

### 常见方法

- read(byte[] b)
- readInt()
- readBoolean()
- ...
- write(byte[] b,int offset,int len)
- write(byte[] b)
- writeInt(int i)
- writeBoolean(boolean b)
- getFilePointer() :获取当前文件的指针偏移位置
- seek(int position)：设置文件指针到目标位置，在该位置发生下一次读写

基本使用：

```java
//创建一个随机访问文件流对象
RandomAccessFile raf = new RandomAccessFile("day2-IO02/record.txt","rw");
//以元数据的形式写入文件，在文件中占据4个字节容量
raf.writeInt(10000);
System.out.println("当前文件指针位置:"+raf.getFilePointer());
//将文件指针跳转到指定的位置发生下一次读取或者写入
raf.seek(0);
//long lon = raf.readLong();
//System.out.println(lon);
//读取元数据
int i = raf.readInt();
System.out.println(i); // 10000
```

#### 综合案例:文件断点拷贝

实现原理:

文件正常拷贝的过程中，由于客观原因出现异常，导致中途停止拷贝；下一次拷贝时读取目标文件中上次拷贝的终止位置，将文件指针设置到该位置，继续拷贝。

```java
File source  = new File("D:\\素材\\视频\\larva搞笑虫子\\34.mp4");
File target = new File("day2-IO02",source.getName());
//读取
RandomAccessFile reader = new RandomAccessFile(source,"r");
//写入
RandomAccessFile writer = new RandomAccessFile(target,"rw");
//获取目标文件的目前文件指针
//        long pos = writer.getFilePointer();
//获取目标流中内容的长度
long pos = writer.length();
reader.seek(pos);
writer.seek(pos);
long start = System.currentTimeMillis();
byte[] b = new byte[1024];
int len = 0;
int count = 0;
while((len = reader.read(b)) != -1){
    writer.write(b,0,len);
    count++;
    //            if(count==5000){
    //                System.out.println(10/0);
    //            }
}
System.out.println(count);
writer.close();
reader.close();
long end = System.currentTimeMillis();
System.out.println("耗时:"+(end-start));
```

## 对象序列化

​ 目前为止所了解所有流，操作的一般都是文本文件(字符流)和二进制的文件(字节流)；但是如果需要将一个 java 对象写入文件中此时字节流与字符流都无法满足需求；在实际项目中经常会涉及到一些缓存技术，而缓存中(内存级别存储)可以存储 java 对象，当外部需要对象时直接从缓存中获取，减少对于数据的 IO 操作。

​ 因此，针对以上需求，java 中提供了对象序列化技术，允许将一个 java 对象存储到文件，或者通过网络发送到指定的目标主机；同时也可以通过文件(或者网络)直接读取这些存储的 java 对象，对于 java 对象的读写操作，IO 中称之为对象的序列化（写）与反序列化(读)。通过对象序列化机制可以最大限度的保证数据的完整性。

java 中用于进行对象序列化操作的两个流称之为对象流:

- ObjectOutputStream
- ObjectInputStream

对象实现序列化的前提条件为必须让目标类型实现以下两个接口中的一个：

- **Serializable（推荐）**
- Externalizable

### 序列化

```java
Player p = new Player();
p.setNickname("嗜血狂魔");
p.setHp(15000);
p.setPower(6666);
p.setLocation("新手村");
p.setLevel(99);

//        try (
//                PrintStream ps = new PrintStream("D:\\IDEA_WorkSpase\\Goover\\java高级\\Day02-IO\\c.txt")
//        ) {
//            //打印对象 事实上写进去的是一串字符串(内部调用了toSring方法)
//            ps.print(p);
//        }

/**
         * 序列化的过程
         */
        try (
                FileOutputStream fos = new FileOutputStream("D:\\IDEA_WorkSpase\\Goover\\java高级\\Day02-IO\\c.txt");
                ObjectOutputStream oos = new ObjectOutputStream(fos)
        ) {
            oos.writeObject(p);
        }

```

### 反序列化

```java
FileInputStream fis = new FileInputStream("day2-IO02/record.txt");
ObjectInputStream ois = new ObjectInputStream(fis);
Object obj  = ois.readObject();
```

> 注意事项：
>
> 对于需要进行序列化操作的对象必须让其类实现`Serializable`接口：
>
> ```java
> public class Player implements Serializable {
>
>    private String id;
>    private String nickname;
>    private String sex;
>    private int level;
>    private int hp;
>    private int mp;
>    private int power;
>    private String location;
>
>    //setter/getter
>    //toString
> }
> ```

### transient 关键字

对象序列化本质就是以**元数据**的形式将对象中的属性值写入到文件中，对于方法并不会序列化；对于不需要序列化的属性可以使用`transient`关键字进行修饰。

```java
 private transient int power;
```
