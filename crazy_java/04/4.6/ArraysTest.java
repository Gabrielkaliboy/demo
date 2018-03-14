import java.util.Arrays;  

public class ArraysTest
{
	public static void main( String[] args)
	{
		int [] a=new int []{2,3,23};
		int [] a2=new int[]{2,3,23};
		
		//比较a和a2是否完全相同,a和a2数组的长度相同，每个元素一次相等，将输出true
		System.out.println("a数组是否和a2数组完全相同"+Arrays.equals(a,a2));
		
		//通过复制一个a数组，生成一个新的b数组
		int [] b=Arrays.copyOf(a,6);
		System.out.println("a数组是否和b数组完成相同"+Arrays.equals(a,b));
		
		for(int i: b)
		{
			System.out.println("我是b里面的元素："+i);
		}
		
		//将数组b的第三个元素（包括）到第五个元素（不包括）赋值为1
		Arrays.fill(b,2,4,1);
		
		//输出b数组的元素
		System.out.println("b数组现在变为："+Arrays.toString(b));
		
		
		//对b数组进行排序
		Arrays.sort(b);
		System.out.println("b数组的元素为："+Arrays.toString(b));
		
	}
}