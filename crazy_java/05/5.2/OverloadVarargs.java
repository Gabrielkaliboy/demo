public class OverloadVarargs
{
	public void test(String mes)
	{
		System.out.println("只有一个字符串参数的test方法");
	}
	
	//因为前面已经有了test方法，test方法里面有一个字符串参数
	//因此此处的长度可变形参里面不包含一个字符串参数的形式
	
	public void test(String ... books)
	{
		System.out.println("形参长度可变的test方法");
	}
	
	public static void main(String[] args)
	{
		OverloadVarargs olv=new OverloadVarargs();
		
		//下面两次调用将执行第二个test
		olv.test();
		olv.test("adfa","afdsf");
		
		//下面调用将执行第一个test方法
		olv.test("fasfa");
		
		olv.test(new String[]{"afdsaf"});
	}
}