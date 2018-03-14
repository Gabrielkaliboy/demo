public class ReferenceTransferTest
{
	public static void swap(DataWrap dw)
	{
		//下面三个代码实现dw对象的a成员变量的值
		int tmp = dw.a;
		
		//把dw对象的b成员变量赋值给a成员变量
		dw.a=dw.b;
		
		//把临时变量tmp赋值给dw对象的b成员变量
		dw.b = tmp;
		System.out.println("swap方法里，a成员变量的值是："+dw.a+";b成员变量的值是："+dw.b);
		
	}
	
	public static void main(String[] args)
	{
		DataWrap dw = new DataWrap();
		dw.a=6;
		dw.b=9;
		swap(dw);
		System.out.println("交换后，a成员变量的值是："+dw.a+";b成员变量的值是："+dw.b);
	}
}