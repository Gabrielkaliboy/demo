class Person
{
	//����һ��ʵ������
	public String name;
	
	//����һ�������
	public static int eyeNum;
}
public class PersonTest
{
	public static void main(String[] args)
	{
		//��һ������ʹ��person�࣬�����Զ���ʼ������eyeNum�����Զ������ã����0
		System.out.println("Person��eyeNum�������ֵ��"+Person.eyeNum);
		
		
		//�����������ûᱨ���޷��Ӿ�̬�����������÷Ǿ�̬����name
		//System.out.println("ʵ������name��ֵΪ��"+Person.name);
		
		//����Person����
		Person p = new Person();
		
		//ͨ��Person���������p������Person����nameʵ������
		//��ͨ��ʵ������eyeNum����
		System.out.println("p������name����ֵ��"+p.name+"p������eyeNum����ֵ�ǣ�"+p.eyeNum);//null 0
		
		
		//ֱ��Ϊnameʵ��������ֵ
		p.name="�����";
		//ͨ��p����eyeNum���������Ȼ�Ƿ���Person��eyeNum�����
		
		p.eyeNum=2;
		
		//�ٴ�ͨ��Person�����ʵ��������nameʵ��������eyeNum�����
		System.out.println("p������name����ֵ��"+p.name+"p������eyeNum����ֵ�ǣ�"+p.eyeNum);//����� 2
		
		
		//ǰ��ͨ��p�޸���Person��eyeNum,�˴���Person.eyeNum�����2
		System.out.println("Person��eyeNum�������ֵ��"+Person.eyeNum);//2
		
		Person p2=new Person();
		
		//p2���ʵ�eyeNum�������Ȼ����Person��ģ������Ȼ���2
		System.out.println("p2�����eyeNum�������ֵΪ��"+p2.eyeNum+";p2�����name����ֵΪ��"+p2.name);//2 null
	}
}