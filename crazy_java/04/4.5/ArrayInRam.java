public class ArrayInRam{
	public static void main(String[] args)
	{
		//使用静态初始化
		int [] a={3,2,23};
		//使用动态初始化
		int [] b= new int[5];
		
		//输出b数组的长度
		System.out.println("b数组的长度是："+b.length);
		
		//输出a里面的元素
		for( int i=0 ,len=a.length; i<len;i++){
			System.out.println(a[i]);
		}
		//循环输出b数组的元素
		for(int i=0,len=b.length;i<len;i++){
			System.out.println("b数组中的元素"+b[i]);
		}
		//让b指向a
		b=a;
		//再次输出b的元素
		for(int i :b){
			System.out.println(i);
		}
	}
}