class Parent
{
	public String tag="疯狂的java讲义";
}
class Derived extends Parent
{
	//定义一个私有的tag实例变量来隐藏父类的tag实例变量
	private String tag="子类Derived中的tag";
}
public  class HideTest
{
	public class void main(String[] args)
	{
		Derived d=new Derived();
		
		//程序不可以访问d的私有变量tag,所以下面的句子会引起编译错误
		//System.out.println(d.tag);
		//将d变量显示的向上转型为Parent后，即可以访问tag实例变量
		System.out.println(((Parent)d).tag);
	}
}