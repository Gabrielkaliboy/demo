import java.util.Arrays;
public class ArraysTest2
{
	public static void main(String[] args)
	{
		int [] arr1=new int [] {3,-4,25,16,30,18};
		//������arr1���в�������
		System.out.println("���ڵ�arr1�ǣ�"+Arrays.toString(arr1));
		Arrays.parallelSort(arr1);
		System.out.println("���в��������Ժ��arr1�ǣ�"+Arrays.toString(arr1));
		
		/*
		��δ���ִ�б���
		int [] arr2=new int []{3,-4,25,16,30,18};
		Arrays.parallelPrefix(arr2,new IntBinaryOperator()
		{
			//left����������ǰһ����������Ԫ�أ������һ��Ԫ�ص�ʱ��leftΪ1
			//right ���������е�ǰ��������Ԫ��
			public int applyAsInt(int left,int right){
				return left*right;
			}
		});
		
		System.out.println(Arrays.toString(arr2));

		int arr3 = new int [5];
		Arrays.parallelSetAll(arr3,new IntUnaryOperator(){
			//operand�������ڼ����Ԫ������
			public int applyAsInt(int operand)
			{
				return operand*5;
			}
		});
		System.out.println(Arrays.toString(arr3));
		
				*/
	}
}