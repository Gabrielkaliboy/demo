public class BlockTest
{
	public static void main(String[] args)
	{
		{
			//定义一个代码块局部变量
			int a;
			//下面代码将出现错误，因为a变量还未初始化
			//System.out.println("代码块局部变量a的值："+a);
			
			//为a变量赋值，也就是进行初始化
			a=5;
			System.out.println(a);
		}
		
		//在代码块外面访问代码块里面的变量a，a并不存在
		//System.out.println(a);
	}
}