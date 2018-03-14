class Person
{
	public int age;//年龄
	public double height;//身高
	public void info()
	{
		System.out.println("我的年龄是："+age+",我的身高是："+height );
	}
	
}

	public class ReferenceArray
	{
		public static void main(String[] args)
		{
			//定义一个students数组变量，其类型是Person[]
			Person [] students;
			
			//执行动态初始化
			students = new Person[2];
			
			//创建一个Person实例，并将这个Person实例赋值给zhang变量
			
			Person zhang=new Person();
			
			//为zhang所引用的Person对象的age和height赋值
			
			zhang.age=14;
			zhang.height=189;
			
			//创建一个Person实例，并将这个Person实例赋给lee变量
			Person lee = new Person();
			
			//为lee所引用的Person对象的age和height赋值
			lee.age=19;
			lee.height=190;
			
			//将zhang变量的值赋值给第一个数组元素
			students[0] = zhang;
			
			//将Lee变量赋值给students第二个数组元素
			students[1] = lee;
			
			//下面两行代码一样，因为lee和students[1]指向的是同一个Person实例
			lee.info();
			students[1].info();
			
			//这个会打印地址
			System.out.println(students[1]);
		}
	}