import java.lang.String;
public class PersonTest
{
	public static void main(String[] args)
	{
		class Person
		{
			//ʹ��private���γ�Ա����������Щ��Ա������������
			private String name;
			private int age;
			//�ṩ����������name��Ա����
			
			public void setName(String name)
			{
				//ִ�к���У�飬Ҫ���û���������2-6λ֮��
				if(name.length() >6 || name.length()<2)
				{
					System.out.println("�����õ��û���������Ҫ��");
					return;
				}else
				{
					this.name=name;
				}
			}
			public String getName()
			{
				return this.name;
			}
			
			//�ṩ����������age��Ա����
			public void setAge(int age)
			{
				//ִ�к���У�飬Ҫ���û���������0-100֮��
				if(age>100 || age<0)
				{
					System.out.println("�����õ����䲻�Ϸ�");
					return;
				}else{
					this.age=age;
				}
			}
			
			public int getAge()
			{
				return this.age;
			}
		}
	
		Person p = new Person();
		//ӦΪage��Ա�����Ѿ������أ������������佫�����
		//p.age=1000;
		//������䲻�����������ʱ������ʾ"�����õ����䲻�Ϸ�"
		//���򽫲����޸�p��age��Ա����
		p.setAge(1000);
		
		//����p��age��Ա��������ͨ����Ӧ��getter��������Ϊ�����δ�ɹ�����p��age��Ա����������������0
		System.out.println("δ������age��Ա����ʱ��"+p.getAge());
		
		//�ɹ��޸�age��Ա����
		p.setAge(30);
		//��Ϊ����ɹ�����p�ĳ�Ա����������������30
		System.out.println("�ɹ�����age��Ա�����Ժ�"+p.getAge());
		
		//����ֱ�Ӳ���p��name������ֻ��ͨ����Ӧ��setter����
		//��Ϊ����ַ�������2-6���������óɹ�
		p.setName("���");
		
		System.out.println("�ɹ�����name��Ա�����Ժ�"+p.name);
	}
}