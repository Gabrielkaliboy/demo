public class Apple{
	public String name;
	public String color;
	public double weight;
	
	//没有参数的构造器
	public Apple(){};
	
	//两个参数的构造器
	public Apple(String name,String color)
	{
		this.name=name;
		this.color=color;
	}
	
	//三个参数的构造器
	public Apple(String name,String color,double weight)
	{
		this(name,color);
		//下面this引用该构造器正在初始化的java对象
		this.weight = weight;
	}
}