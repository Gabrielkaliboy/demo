public class Ostrich extends Bird
{
	//��дbird���fly()����
	public void fly()
	{
		System.out.println("Ostrich������fly����");
	}
	
	public static void main(String[] args)
	{
		//����Ostrich����
		Ostrich os = new Ostrich();
		//ִ��Ostrich�����fly����
		os.fly();
	}
}