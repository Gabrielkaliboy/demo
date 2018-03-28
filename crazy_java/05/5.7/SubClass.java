class BaseClass
{
	public int book=6;
	public void base()
	{
		System.out.println("父类的普通方法base");
	}
	
	public void test()
	{
		System.out.println("父类的test方法");
	}
}

public class SubClass extends BaseClass
{
	// 重新定义一个book实例变量来隐藏父类的book实例变量
	public String book="java EE";
	
	public void test()
	{
		System.out.println("子类的test方法覆盖了父类的");
	}
	
	public void sub()
	{
		System.out.println("子类自己的sub方法");
	}
	
	public static void main(String[] args)
	{
		//下面编译时类型和运行时类型完全一样，因此不存在多态
		BaseClass bc=new BaseClass();
		
		//输出6
		System.out.println(bc.book);
		
		//下面两次调用将执行BaseClass的方法
		bc.base();//父类的普通方法base
		bc.test();//父类的test方法
		
		//下面编译时和运行时完全一样，因此不存在多态
		SubClass sc=new SubClass();
		
		System.out.println(sc.book);//java EE
		//下面将执行从父类继承到的base方法
		sc.base();//父类的普通方法base
		
		//下面调用将执行当前类的test()方法
		sc.test();//子类的test方法覆盖了父类的
		
		//下面编译时类型和运行时类型不同，多态发生
		BaseClass ploymophicBc = new SubClass();
		
		//输出6，表明访问的是父类对象的实例变量
		System.out.println(ploymophicBc.book);
		
		//下面调用将执行从父类继承到的base方法
		ploymophicBc.base();//父类的普通方法base
		
		//下面调用将执行从当前类的test方法
		ploymophicBc.test();//子类的test方法覆盖了父类的
		
		//因为ploymophicBc的编译时的类型为BaseClass
		//BaseClass类没有提供sub方法，所以下面代码编译时会出错
		//ploymophicBc.sub();
		
	}
}