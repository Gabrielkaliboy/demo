public class PrimitiveTransferTest
{
	public static void swap(int a,int b)
	{
		//下面代码实现a,b变量值的替换
		//定义一个临时变量来保存a变量的值
		int tmp=a;
		a=b;
		b=tmp;
		System.out.println("swap方法里面a的值是："+a+";b的值为："+b);	
	}
	
	public static void main(String[] args)
	{
		int a = 6;
		int b =9;
		System.out.println("调用swap方法之前，mian函数里面变量a的值是："+a+";b的值为："+b);	
		swap(a,b);
		System.out.println("调用swap方法以后，mian函数里面变量a是"+a+";变量b的值是："+b);
	}
}