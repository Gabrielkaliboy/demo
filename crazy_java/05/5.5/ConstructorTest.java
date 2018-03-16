public class ConstructorTest
{
	public String name;
	public int count;
	
	//提供自定义的构造器，构造器包含两个参数
	public ConstructorTest(String name,int count)
	{
		//构造器里面的this代表他进行初始化的对象
		//下面两行代码将传入的2个参数赋给this代表对象的name和count实例变量
		this.name=name;
		this.count=count;
	}
	
	public static void main(String[] args)
	{
		//使用自定义的构造器来创建对象
		//系统将会对该对象进行自定义的初始化
		ConstructorTest tc=new ConstructorTest("疯狂",90900);
		//输出ConstructorTest对象的name和count两个实例变量
		System.out.println(tc.name);
		System.out.println(tc.count);
	}
}