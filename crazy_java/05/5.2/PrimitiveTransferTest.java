public class PrimitiveTransferTest
{
	public static void swap(int a,int b)
	{
		//�������ʵ��a,b����ֵ���滻
		//����һ����ʱ����������a������ֵ
		int tmp=a;
		a=b;
		b=tmp;
		System.out.println("swap��������a��ֵ�ǣ�"+a+";b��ֵΪ��"+b);	
	}
	
	public static void main(String[] args)
	{
		int a = 6;
		int b =9;
		System.out.println("����swap����֮ǰ��mian�����������a��ֵ�ǣ�"+a+";b��ֵΪ��"+b);	
		swap(a,b);
		System.out.println("����swap�����Ժ�mian�����������a��"+a+";����b��ֵ�ǣ�"+b);
	}
}