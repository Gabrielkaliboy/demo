public class ReferenceTransferTest
{
	public static void swap(DataWrap dw)
	{
		//������������ʵ��dw�����a��Ա������ֵ
		int tmp = dw.a;
		
		//��dw�����b��Ա������ֵ��a��Ա����
		dw.a=dw.b;
		
		//����ʱ����tmp��ֵ��dw�����b��Ա����
		dw.b = tmp;
		System.out.println("swap�����a��Ա������ֵ�ǣ�"+dw.a+";b��Ա������ֵ�ǣ�"+dw.b);
		
	}
	
	public static void main(String[] args)
	{
		DataWrap dw = new DataWrap();
		dw.a=6;
		dw.b=9;
		swap(dw);
		System.out.println("������a��Ա������ֵ�ǣ�"+dw.a+";b��Ա������ֵ�ǣ�"+dw.b);
	}
}