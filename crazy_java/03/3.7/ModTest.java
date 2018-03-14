public class ModTest
{
	public static void main(String[] Args)
	{
		double a=5.2;
		double b=3.1;
		double mod=a%b;
		System.out.println(mod);//mod值为2.1
		System.out.println("5对0.0求余的结果是："+5%0.0);//NaN
		System.out.println("-5.0对0求余的结果是："+-5.0%0);//NaN
		
		
		
	}
}