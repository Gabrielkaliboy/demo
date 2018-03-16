public class Overload
{
	//下面定义了两个test方法，但方法的形参列表不一样，系统可以区分出这两个方法，这被称为方法重载
	public void test()
	{
		System.out.println("无参数");
	}
	
	public void test(String msg)
	{
		System.out.println("重载的test方法"+msg);
	}
	
	public static void main(String[] args)
	{
		Overload ol = new Overload();
		//调用test没有参数，因此会调用第一个
		ol.test();
		
		//有参数
		ol.test("234");
	}
}