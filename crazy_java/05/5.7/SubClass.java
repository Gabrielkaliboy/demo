class BaseClass
{
	public int book=6;
	public void base()
	{
		System.out.println("�������ͨ����base");
	}
	
	public void test()
	{
		system.out.println("�����test����");
	}
}

public class SubClass extends BaseBlass
{
	// ���¶���һ��bookʵ�����������ظ����bookʵ������
	public String book="java EE";
	
	public void test()
	{
		System.out.println("�����test���������˸����");
	}
	
	public void sub()
	{
		System.out.println("�����Լ���sub����");
	}
	
	public static void main(String[] args)
	{
		//�������ʱ���ͺ�����ʱ������ȫһ������˲����ڶ�̬
		BaseClass bc=new BaseClass();
		
		//���6
		System.out.println(bc.book);
		
		//�������ε��ý�ִ��BaseClass�ķ���
		bc.base();
		bc.test();
		
		//�������ʱ������ʱ��ȫһ������˲����ڶ�̬
		SubClass sc=new SubClass();
		
		System.out.println(sc.book);//java EE
		//���潫ִ�дӸ���̳е���base����
		sc.base();
		
		//������ý�ִ�е�ǰ���test()����
		sc.test();
		
		//�������ʱ���ͺ�����ʱ���Ͳ�ͬ����̬����
		BaseClass ploymophicBc = new SubClass();
		
		//���6���������ʵ��Ǹ�������ʵ������
		System.out.println(ploymophicBc.book);
		
		//������ý�ִ�дӸ���̳е���base����
		ploymophicBc.base();
		
		//������ý�ִ�дӵ�ǰ���test����
		ploymophicBc.test();
		
		//��ΪploymophicBc�ı���ʱ������ΪBaseClass
		//BaseClass��û���ṩsub��������������������ʱ�����
		//ploymophicBc.sub();
		
	}
}