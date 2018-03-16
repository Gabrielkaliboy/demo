import java.lang.String;
public class PersonTest
{
	public static void main(String[] args)
	{
		class Person
		{
			//使用private修饰成员变量，将这些成员变量隐藏起来
			private String name;
			private int age;
			//提供方法来操作name成员变量
			
			public void setName(String name)
			{
				//执行合理校验，要求用户名必须在2-6位之间
				if(name.length() >6 || name.length()<2)
				{
					System.out.println("你设置的用户名不符合要求");
					return;
				}else
				{
					this.name=name;
				}
			}
			public String getName()
			{
				return this.name;
			}
			
			//提供方法来操作age成员变量
			public void setAge(int age)
			{
				//执行合理校验，要求用户名必须在0-100之间
				if(age>100 || age<0)
				{
					System.out.println("您设置的年龄不合法");
					return;
				}else{
					this.age=age;
				}
			}
			
			public int getAge()
			{
				return this.age;
			}
		}
	
		Person p = new Person();
		//应为age成员变量已经被隐藏，所以下面的语句将会出错
		//p.age=1000;
		//下面语句不会出错，但运行时将会提示"您设置的年龄不合法"
		//程序将不会修改p的age成员变量
		p.setAge(1000);
		
		//访问p的age成员变量必须通过对应的getter方法，因为上面从未成功设置p的age成员变量，因此这里输出0
		System.out.println("未能设置age成员变量时："+p.getAge());
		
		//成功修改age成员变量
		p.setAge(30);
		//因为上面成功设置p的成员变量，因此这里输出30
		System.out.println("成功设置age成员变量以后："+p.getAge());
		
		//不能直接操作p的name变量，只能通过对应的setter方法
		//因为李刚字符串满足2-6，所以设置成功
		p.setName("李刚");
		
		System.out.println("成功设置name成员变量以后："+p.name);
	}
}