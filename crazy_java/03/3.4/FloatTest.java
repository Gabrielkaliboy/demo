public class FloatTest
{
	public static void main(String[] args)
	{
		float af=4.3323424234f;
		
		//���潫����afֵ�Ѿ������仯
		System.out.println(af);
		double a=0.0;
		double c=Double.NEGATIVE_INFINITY;
		float d=Float.NEGATIVE_INFINITY;
		
		//double��float�ĸ����������һ����
		System.out.println(c==d);
		
		// 0.0����0.0�����ַǸ���
		System.out.println(a/a);
		
		//�����Ǹ���֮���ǲ���ȵ�
		System.out.println(a/a == Float.NaN);
		
		//���е��������������ȵ�
		System.out.println(5.0/0 == 234.0/0);
		
		//��������0.0�õ����������
		System.out.println(-8/a);
		
		//����Ĵ��뽫�׳��쳣
		System.out.println(0/0);
	}
}