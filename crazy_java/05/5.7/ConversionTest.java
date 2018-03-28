public class ConversionTest
{
	public static void main(String[] args)
	{
		double d=13.4;
		long l=(long)d;
		System.out.println(l);
		
		int in =5;
		//试图把一个数值类型转换为整数类型，下面代码编译出错
		//编译时会显示：不可转换的类型
		//boolean b = (boolean)in;
		
		Object obj="Hello";
		//obj变量编译的时候类型为Object，Object与String存在继承关系，可以强制类型转换
		//而且obj变量的实际类型为String，所以运行时也可以通过。
		String objStr=(String)obj;
		System.out.println(objStr);
		
		//定义一个objPri变量，编译时为Object，实际类型为Integer
		Object objPri = new Integer(5);
		//ObjPri变量的编译时类型为Object，objPri运行时为Integer
		//Object和Integer存在继承关系
		//可以强制类型转换，而objPri变量的实际类型是Integer
		
		//所以下面代码运行会导致ClassCastException异常
		//String Str=(String)objPri;
		
		
		//为了保持程序健壮，我们可以在修改之前做一个校验
		if(objPri instanceof String)
		{
			String Str=(String)objPri;
		}
	}
}