public class Ostrich extends Bird
{
	//重写bird类的fly()方法
	public void fly()
	{
		System.out.println("Ostrich方法的fly方法");
	}
	
	public static void main(String[] args)
	{
		//创建Ostrich对象
		Ostrich os = new Ostrich();
		//执行Ostrich对象的fly方法
		os.fly();
	}
}