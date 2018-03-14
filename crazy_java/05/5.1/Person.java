public class Person
{
	
	public static void main( String[] args)
	{
		//使用person类定义一个person类型的变量
		Person p;

		//通过new关键字调用Person类的构造器，返回一个Person实例，将Person实例赋给p变量
		p=new Person();

		//上面可以简写为 Person p=new Person();

		//访问p的name实例变量，直接为该变量赋值
		p.name="jarry";
		//调用p的say方法，声明p方法实定义了一个形参
		//调用该方法必须为形参指定一个值
		p.say("java语言很简单，学习很容易");
		//直接输出p的name实例变量，将输出jarry

		System.out.println(p.name);
	}
	//定义两个成员变量
	public String name;
	public int age;
	
	//定义一个say方法
	public void say(String content)
	{
		System.out.println(content);
	}
	
}
