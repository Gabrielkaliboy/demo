public class ConstructorTest
{
	public String name;
	public int count;
	
	//�ṩ�Զ���Ĺ�������������������������
	public ConstructorTest(String name,int count)
	{
		//�����������this���������г�ʼ���Ķ���
		//�������д��뽫�����2����������this���������name��countʵ������
		this.name=name;
		this.count=count;
	}
	
	public static void main(String[] args)
	{
		//ʹ���Զ���Ĺ���������������
		//ϵͳ����Ըö�������Զ���ĳ�ʼ��
		ConstructorTest tc=new ConstructorTest("���",90900);
		//���ConstructorTest�����name��count����ʵ������
		System.out.println(tc.name);
		System.out.println(tc.count);
	}
}