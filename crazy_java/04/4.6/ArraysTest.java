import java.util.Arrays;  

public class ArraysTest
{
	public static void main( String[] args)
	{
		int [] a=new int []{2,3,23};
		int [] a2=new int[]{2,3,23};
		
		//�Ƚ�a��a2�Ƿ���ȫ��ͬ,a��a2����ĳ�����ͬ��ÿ��Ԫ��һ����ȣ������true
		System.out.println("a�����Ƿ��a2������ȫ��ͬ"+Arrays.equals(a,a2));
		
		//ͨ������һ��a���飬����һ���µ�b����
		int [] b=Arrays.copyOf(a,6);
		System.out.println("a�����Ƿ��b���������ͬ"+Arrays.equals(a,b));
		
		for(int i: b)
		{
			System.out.println("����b�����Ԫ�أ�"+i);
		}
		
		//������b�ĵ�����Ԫ�أ��������������Ԫ�أ�����������ֵΪ1
		Arrays.fill(b,2,4,1);
		
		//���b�����Ԫ��
		System.out.println("b�������ڱ�Ϊ��"+Arrays.toString(b));
		
		
		//��b�����������
		Arrays.sort(b);
		System.out.println("b�����Ԫ��Ϊ��"+Arrays.toString(b));
		
	}
}