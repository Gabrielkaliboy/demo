public class AutoPromote
{
	public static void main(String[] args)
	{
		short sValue=2;
		
		//�Ҳ�ı��ʽ����������int���ͣ���������short���ͣ����Ҳ��int���͸�ֵ������short���ͣ��Ӷ�����
		//sValue=sValue-2;
		//ϵͳ�ᱨ��
		//System.out.print(sValue);
		
		//���ʽ������ȷ����
		
		byte b=40;
		char c='a';
		int i =23;
		double d=.314;
		//�Ҳ���ʽ����ߵȼ���������d,double����
		//���Ҳ���ʽ������Ϊdouble���ͣ���˸�ֵ��һ��double���͵ı���
		
		double result = b+c+i*d;
		//�����144.22
		System.out.println(result);
		System.out.println(c);
		int result1=b+c;
		//137
		System.out.println(result1);
		
		int val=3;
		//�ұ߱��ʽ��
	}
}