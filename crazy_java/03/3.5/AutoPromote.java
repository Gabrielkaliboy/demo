public class AutoPromote
{
	public static void main(String[] args)
	{
		short sValue=2;
		
		//右侧的表达式被提升到了int类型，而左侧哈市short类型，把右侧的int类型赋值给左侧的short类型，从而出错
		//sValue=sValue-2;
		//系统会报错
		//System.out.print(sValue);
		
		//表达式类型正确提升
		
		byte b=40;
		char c='a';
		int i =23;
		double d=.314;
		//右侧表达式中最高等级操作数是d,double类型
		//则右侧表达式的类型为double类型，因此赋值给一个double类型的变量
		
		double result = b+c+i*d;
		//将输出144.22
		System.out.println(result);
		System.out.println(c);
		int result1=b+c;
		//137
		System.out.println(result1);
		
		int val=3;
		//右边表达式中
	}
}