public class PrimitiveAndString
{
	public static void main(String[] args)
	{
		//下面的代码是错误的，因为5是整数，不能直接赋值给一个字符串
		//String str1=5;
		
		//一个基本类型的值和字符串进行连接运算时，基本类型的值自动转换为字符串
		String str2=3.5f+"";
		//下面输出3.5
		System.out.println(str2);
		
		//下面语句输出7Hello
		System.out.println(3+4+"Hello");
		
		//下面语句输出Hello!+3会把3当成字符串处理，然后把4也当成字符串
		System.out.println("Hello!"+3+4);
	}
}