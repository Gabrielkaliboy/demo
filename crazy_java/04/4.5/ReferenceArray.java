class Person
{
	public int age;//����
	public double height;//���
	public void info()
	{
		System.out.println("�ҵ������ǣ�"+age+",�ҵ�����ǣ�"+height );
	}
	
}

	public class ReferenceArray
	{
		public static void main(String[] args)
		{
			//����һ��students�����������������Person[]
			Person [] students;
			
			//ִ�ж�̬��ʼ��
			students = new Person[2];
			
			//����һ��Personʵ�����������Personʵ����ֵ��zhang����
			
			Person zhang=new Person();
			
			//Ϊzhang�����õ�Person�����age��height��ֵ
			
			zhang.age=14;
			zhang.height=189;
			
			//����һ��Personʵ�����������Personʵ������lee����
			Person lee = new Person();
			
			//Ϊlee�����õ�Person�����age��height��ֵ
			lee.age=19;
			lee.height=190;
			
			//��zhang������ֵ��ֵ����һ������Ԫ��
			students[0] = zhang;
			
			//��Lee������ֵ��students�ڶ�������Ԫ��
			students[1] = lee;
			
			//�������д���һ������Ϊlee��students[1]ָ�����ͬһ��Personʵ��
			lee.info();
			students[1].info();
			
			//������ӡ��ַ
			System.out.println(students[1]);
		}
	}