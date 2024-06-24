# 03 - 常用类(综合实践) :evergreen_tree:

[[TOC]]

## 练习讲解

​ 以下练习题主要考察 java 常用类中 Random、BigDecimal 以及 ArrayList 类综合使用能力，同时对面向对象（封装，继承，多态）技术进行实践能力考察。

### 微信红包（拼手气红包）

​ 基于 BigDecimal 类实现微信红包算法的功能，比如设置红包总金额，然后设置需要生成的红包个数，为每个红包随机指定金额，最低不能低于 0.01 元,要求：

1. 每个红包金额随机指定
2. 每个红包金额不能低于 0.01 元
3. 要求每个红包的金额之和恰好等于总金额
4. 如果平均每个红包的金额不足 0.01 元时抛出一个 RedPacketException，提示每个红包金额不能少于 0.01 元

#### 红包类

```java
/**
 * 	红包类
 * @author mrchai
 *
 */
public class RedPacket {

	/**红包ID*/
	private int id;
	/**红包金额*/
	private BigDecimal money;

	public RedPacket() {
	}

	public RedPacket(int id, BigDecimal money) {
		super();
		this.id = id;
		this.money = money;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public BigDecimal getMoney() {
		return money;
	}

	public void setMoney(BigDecimal money) {
		this.money = money;
	}

	@Override
	public String toString() {
		return id+"号用户获得"+money+"元";
	}

}
```

#### 红包异常类

```java
/**
 * 	红包异常
 * @author mrchai
 */
public class RedpacketException extends Exception{

	public RedpacketException() {
		// TODO Auto-generated constructor stub
	}

	public RedpacketException(String msg) {
		super(msg);
	}
}

```

#### 红包管理

```java
public class RedPacketManage {

    /** 设置每个红包最小金额 */
    static final BigDecimal MIN = new BigDecimal("0.01");

    /*
	 * @double total 总金额
	 * @int count 红包个数
	 * @return 返回生成的所有红包金额集合
	 */
    public static ArrayList<RedPacket> genRedPacket(double total, int count) throws RedpacketException {
        // 声明临时变量用于存储所有随机的红包对象
        ArrayList<RedPacket> packets = new ArrayList<RedPacket>();
        // 计算每个红包分配最低金额一共需要多少钱
        double min = MIN.multiply(new BigDecimal(count)).setScale(2, BigDecimal.ROUND_HALF_EVEN).doubleValue();
        if (min > total) {
            // 红包金额不够分配时，抛出异常
            throw new RedpacketException("每个红包金额不能少于0.01元");
        } else if (min == total) {
            // 红包金额恰好每人只够分配0.01元，则平均分配
            for (int i = 0; i < count; i++) {
                // 创建红包对象
                RedPacket item = new RedPacket(i + 1, new BigDecimal("0.01"));
                // 将红包加入集合
                packets.add(item);
            }
        } else {
            // 当总金额大于每人最少金额之和时，随机分配
            // 将总金额包装为BigDecimal
            BigDecimal totalMoney = new BigDecimal(total);
            //声明临时变量统计当前分配的金额总数
            BigDecimal now = new BigDecimal(0);
            // 获取每个红包的比例
            double[] scale = randomScale(count);
            // 为前count-1个红包分配金额
            for (int i = 0; i < count - 1; i++) {
                // 获取当前比例红包需要分配的金额
                BigDecimal item = totalMoney.multiply(new BigDecimal(scale[i]))
                    .setScale(2, BigDecimal.ROUND_HALF_EVEN);
                packets.add(new RedPacket(i + 1, item));
                //累计已分配金额总数
                now = now.add(item);
            }
            // 剩余的金额给最后一个
            //获取剩余的金额
            BigDecimal last = totalMoney.subtract(now);
            //设置最后一个红包的金额为原来基础上增加剩余的总金额
            packets.get(count-1).setMoney(packets.get(count-1).getMoney().add(last).setScale(2, BigDecimal.ROUND_HALF_EVEN));
        }
        return packets;
    }

    /**
	 * 	随机红包金额比例
	 * @param count 红包的份数
	 * @return 每份红包的比例数组
	 */
    private static double[] randomScale(int count) {
        // 临时数组存储所有红包的金额比例
        double[] scale = new double[count];
        Random r = new Random();
        double total = 0.0;
        for (int i = 0; i < count; i++) {
            // 为每一个元素设置一个1-100随机数
            scale[i] = r.nextInt(100) + 1;
            // 累计所有随机的数值
            total += scale[i];
        }
        // 循环计算每个红包的金额比例
        for (int i = 0; i < count; i++) {
            scale[i] = scale[i] / total;
        }
        return scale;
    }

}
```

#### 测试

```java
p ublic static void main(String[] args) throws RedpacketException {
    ArrayList<RedPacket> list = genRedPacket(5, 10);
    BigDecimal t = new BigDecimal(0);
    for (RedPacket rp : list) {
        System.out.println(rp);
        t= t.add(rp.getMoney());
    }
    System.out.println(t);
}
```

#### 运行结果

```
1号用户获得0.70元
2号用户获得0.13元
3号用户获得0.46元
4号用户获得0.50元
5号用户获得0.59元
6号用户获得0.92元
7号用户获得0.02元
8号用户获得0.11元
9号用户获得0.65元
10号用户获得0.92元
5.00
```

### 斗地主发牌

参考斗地主的游戏规则，完成一个发牌的功能(54 张牌，考虑点数，花色；三名玩家，其中地主比其他玩家多 3 张牌)

#### 牌类

```java
/**
 * 3-10 J Q K A 2 Queen King 牌类
 *
 * @author mrchai
 */
public class Card {

	/** 牌面值 */
	private String name;
	/** 花色 */
	private String flower;
	/** 大小点数 */
	private int num;

	public Card() {
	}

	public Card(String name, String flower, int num) {
		super();
		this.name = name;
		this.flower = flower;
		this.num = num;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getFlower() {
		return flower;
	}

	public void setFlower(String flower) {
		this.flower = flower;
	}

	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}

	@Override
	public String toString() {
		if (Objects.nonNull(flower)) {
			return name + "-" + num + "-" + flower;
		}
		return name + "-" + num;
	}

}
```

#### 玩家类

```java
/**
 * 	玩家类
 * @author mrchai
 */
public class Player {

	/**玩家id*/
	private int id;
	/**玩家姓名*/
	private String name;
	/**是否地主*/
	private boolean boss;
	/**牌集合*/
	private ArrayList<Card> cards=new ArrayList<Card>();

	public Player() {
	}

	public Player(int id, String name, boolean boss, ArrayList<Card> cards) {
		super();
		this.id = id;
		this.name = name;
		this.boss = boss;
		this.cards = cards;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public boolean isBoss() {
		return boss;
	}
	public void setBoss(boolean boss) {
		this.boss = boss;
	}
	public ArrayList<Card> getCards() {
		return cards;
	}
	public void setCards(ArrayList<Card> cards) {
		this.cards = cards;
	}

	@Override
	public String toString() {
		return name+(boss?"(地主)":"")+":"+cards;
	}

}
```

#### 游戏管理类

```java
public class GameManage {

	/**声明所有牌的集合*/
	private static ArrayList<Card> all = new ArrayList<>();
	/**用于生成牌的牌面值*/
	private static String[] names = {"3","4","5","6","7","8","9","10","J","Q","K","A","2","Queen","King"};
	/**用于生成牌的花色*/
	private static String[] flowers = {"红桃","方块","梅花","黑桃"};
	/**所有玩家集合*/
	private ArrayList<Player> players = new ArrayList<Player>();
	/**声明随机数生成器*/
	private static Random randomGen = new Random();

	static {
		/******初始化所有牌******/
		//笛卡尔积
		int i = 0;
		for (; i < names.length-2; i++) {
			for (int j = 0; j < flowers.length; j++) {
				Card c = new Card(names[i], flowers[j], i);
				all.add(c);
			}
		}
		//将大小王加入
		all.add(new Card(names[names.length-2],null,i++));
		all.add(new Card(names[names.length-1],null,i++));
	}

	/**
	 * 	添加玩家
	 */
	public void addPlayer() {
		Scanner sc = new Scanner(System.in);
		System.out.println("请输入玩家1名称：");
		String name1 = sc.nextLine();
		System.out.println("请输入玩家2名称：");
		String name2 = sc.nextLine();
		System.out.println("请输入玩家3名称：");
		String name3 = sc.nextLine();

		Player p1 = new Player();
		p1.setId(1);
		p1.setName(name1);

		Player p2 = new Player();
		p2.setId(2);
		p2.setName(name2);

		Player p3 = new Player();
		p3.setId(3);
		p3.setName(name3);
		//将三名玩家加入集合
		players.add(p1);
		players.add(p2);
		players.add(p3);
	}

	/**
	 * 	随机地主
	 */
	public void randomBoss() {
		//添加玩家
		addPlayer();
		//随机地主索引
		int i = randomGen.nextInt(players.size());
		//设置指定位置的玩家为地主
		players.get(i).setBoss(true);
	}

	/**
	 * 	发牌
	 */
	public ArrayList<Player> sendCard() {
		//随机地主
		randomBoss();
		//对每一名玩家遍历
		for (Player p : players) {
			//先为每一位玩家随机发17张牌
			for (int i = 0; i < 17; i++) {
				//随机一张牌的索引
				int cardIndex = randomGen.nextInt(all.size());
				//获取随机索引位置的牌
				Card card = all.get(cardIndex);
				//将随机的牌加入当前遍历玩家的集合
				p.getCards().add(card);
				//从源集合中移除这张牌
				all.remove(card);
			}
		}
		//最后三张牌给地主
		for (Player p : players) {
			if(p.isBoss()) {
				//将all集合中的所有元素加入地主的集合
				p.getCards().addAll(all);
			}
		}
		return players;
	}

}
```

#### 测试

```java
public static void main(String[] args) {
    ArrayList<Player> players = new GameManage().sendCard();
    for (Player p : players) {
        System.out.println(p);
    }
}
```

#### **运行结果**

```
请输入玩家1名称：
刘备
请输入玩家2名称：
关羽
请输入玩家3名称：
张飞
刘备:[A-11-梅花, 4-1-梅花, 9-6-红桃, 8-5-梅花, A-11-方块, 8-5-黑桃, 6-3-红桃, 6-3-方块, K-10-方块, Queen-13, 10-7-梅花, K-10-梅花, Q-9-梅花, 2-12-红桃, Q-9-红桃, 6-3-梅花, 10-7-黑桃]
关羽:[5-2-黑桃, 9-6-黑桃, A-11-黑桃, 4-1-红桃, 5-2-红桃, 3-0-红桃, 5-2-方块, A-11-红桃, 6-3-黑桃, 5-2-梅花, 7-4-红桃, K-10-黑桃, 8-5-方块, 4-1-黑桃, 3-0-方块, Q-9-方块, 8-5-红桃]
张飞(地主):[10-7-方块, 2-12-黑桃, 7-4-梅花, 2-12-方块, 2-12-梅花, 4-1-方块, 7-4-黑桃, Q-9-黑桃, J-8-梅花, 7-4-方块, 3-0-梅花, J-8-方块, 3-0-黑桃, J-8-黑桃, 10-7-红桃, J-8-红桃, King-14, 9-6-方块, 9-6-梅花, K-10-红桃]
```

## File 补充

```java
File f = new File("d:/username.txt");

System.out.println("文件是否存在:" + f.exists());

System.out.println("判断是否是隐藏文件：" + f.isHidden());

System.out.println("文件大小(字节)：" + f.length());

// 从1970年01月01日 00:00:00 ~ 指定时间之间的毫秒数
System.out.println("文件的最后修改时间：" + f.lastModified());

// 列出当前系统中可用的盘符
File[] files = File.listRoots();
for (File file : files) {
    System.out.println(file);
}

f = new File("d:/新建文本文档.txt");
//文件重命名
boolean b = f.renameTo(new File("d:/a.txt"));
System.out.println("重命名结果:" + b);
```
