public class Person
{
	
	public static void main( String[] args)
	{
		//ʹ��person�ඨ��һ��person���͵ı���
		Person p;

		//ͨ��new�ؼ��ֵ���Person��Ĺ�����������һ��Personʵ������Personʵ������p����
		p=new Person();

		//������Լ�дΪ Person p=new Person();

		//����p��nameʵ��������ֱ��Ϊ�ñ�����ֵ
		p.name="jarry";
		//����p��say����������p����ʵ������һ���β�
		//���ø÷�������Ϊ�β�ָ��һ��ֵ
		p.say("java���Ժܼ򵥣�ѧϰ������");
		//ֱ�����p��nameʵ�������������jarry

		System.out.println(p.name);
	}
	//����������Ա����
	public String name;
	public int age;
	
	//����һ��say����
	public void say(String content)
	{
		System.out.println(content);
	}
	
}
