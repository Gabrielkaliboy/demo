class Person
{
	//定义一个实例变量
	public String name;
	
	//定义一个类变量
	public static int eyeNum;
}
public class PersonTest
{
	public static void main(String[] args)
	{
		//第一次主动使用person类，该类自动初始化，则eyeNum变量自动起作用，输出0
		System.out.println("Person的eyeNum的类变量值："+Person.eyeNum);
		
		
		//下面这种引用会报错：无法从静态上下文中引用非静态变量name
		//System.out.println("实例变量name的值为："+Person.name);
		
		//创建Person对象
		Person p = new Person();
		
		//通过Person对象的引用p来访问Person对象name实例变量
		//并通过实例访问eyeNum变量
		System.out.println("p变量的name变量值："+p.name+"p变量的eyeNum变量值是："+p.eyeNum);//null 0
		
		
		//直接为name实例变量赋值
		p.name="孙悟空";
		//通过p访问eyeNum类变量，依然是访问Person的eyeNum类变量
		
		p.eyeNum=2;
		
		//再次通过Person对象的实例来访问name实例变量和eyeNum类变量
		System.out.println("p变量的name变量值："+p.name+"p变量的eyeNum变量值是："+p.eyeNum);//孙悟空 2
		
		
		//前面通过p修改了Person的eyeNum,此处的Person.eyeNum将输出2
		System.out.println("Person的eyeNum的类变量值："+Person.eyeNum);//2
		
		Person p2=new Person();
		
		//p2访问的eyeNum类变量依然引用Person类的，因此依然输出2
		System.out.println("p2对象的eyeNum的类变量值为："+p2.eyeNum+";p2对象的name变量值为："+p2.name);//2 null
	}
}