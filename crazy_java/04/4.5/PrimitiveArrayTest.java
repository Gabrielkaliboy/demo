public class PrimitiveArrayTest
{
	public static void main(String[] args)
	{
		//定义数组变量
		int [] a;
		
		//动态初始化变量
		a=new int[5];
		//为数组元素赋值
		for(int i=0,len=a.length;i<len;i++){
			a[i]=i+10;
		}
		
		//读取a中的值
		for( int i :a){
			System.out.println(i);
		}
		
	}
}