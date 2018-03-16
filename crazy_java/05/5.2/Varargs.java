public class Varargs
{
	//定义了形参个数可变的方法
	public static void test(int a ,String ... books)
	{
		//books被当成数组处理
		for(String tmp:books)
		{
			System.out.println(tmp);
		}
		
		System.out.println(a);
	}
	
	public static void main(String[] args)
	{
		test(4,"daf","dfafsaf");
	}
}