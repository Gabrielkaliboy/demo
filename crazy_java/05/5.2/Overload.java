public class Overload
{
	//���涨��������test���������������β��б�һ����ϵͳ�������ֳ��������������ⱻ��Ϊ��������
	public void test()
	{
		System.out.println("�޲���");
	}
	
	public void test(String msg)
	{
		System.out.println("���ص�test����"+msg);
	}
	
	public static void main(String[] args)
	{
		Overload ol = new Overload();
		//����testû�в�������˻���õ�һ��
		ol.test();
		
		//�в���
		ol.test("234");
	}
}