public class AutoConversion
{
	public static void main(String[] Args)
	{
		int a = 6;
		//int类型可以自动转换为float类型
		
		float f=a;
		//下面将输出6.0
		System.out.println(f);
		
		byte b=9;
		//下面的代码将出错，byte类型不能自动类型转为char类型
		
		//char c=b;
		
		//byte类型可以自动类型转为double类型
		double d=b;
		
		//下面将输出9.0
		System.out.println(d);
	}
}