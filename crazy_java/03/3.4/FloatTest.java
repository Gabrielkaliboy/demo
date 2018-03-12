public class FloatTest
{
	public static void main(String[] args)
	{
		float af=4.3323424234f;
		
		//下面将看到af值已经发生变化
		System.out.println(af);
		double a=0.0;
		double c=Double.NEGATIVE_INFINITY;
		float d=Float.NEGATIVE_INFINITY;
		
		//double和float的负的无穷大是一样的
		System.out.println(c==d);
		
		// 0.0除以0.0将出现非负数
		System.out.println(a/a);
		
		//两个非负数之间是不相等的
		System.out.println(a/a == Float.NaN);
		
		//所有的正的无穷大都是相等的
		System.out.println(5.0/0 == 234.0/0);
		
		//负数除以0.0得到负的无穷大
		System.out.println(-8/a);
		
		//下面的代码将抛出异常
		System.out.println(0/0);
	}
}