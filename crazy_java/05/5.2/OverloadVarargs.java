public class OverloadVarargs
{
	public void test(String mes)
	{
		System.out.println("ֻ��һ���ַ���������test����");
	}
	
	//��Ϊǰ���Ѿ�����test������test����������һ���ַ�������
	//��˴˴��ĳ��ȿɱ��β����治����һ���ַ�����������ʽ
	
	public void test(String ... books)
	{
		System.out.println("�βγ��ȿɱ��test����");
	}
	
	public static void main(String[] args)
	{
		OverloadVarargs olv=new OverloadVarargs();
		
		//�������ε��ý�ִ�еڶ���test
		olv.test();
		olv.test("adfa","afdsf");
		
		//������ý�ִ�е�һ��test����
		olv.test("fasfa");
		
		olv.test(new String[]{"afdsaf"});
	}
}