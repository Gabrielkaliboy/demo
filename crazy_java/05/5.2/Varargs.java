public class Varargs
{
	//�������βθ����ɱ�ķ���
	public static void test(int a ,String ... books)
	{
		//books���������鴦��
		for(String tmp:books)
		{
			System.out.println(tmp);
		}
		
		System.out.println(a);
	}
	
	public static void main(String[] args)
	{
		test(4,"daf","dfafsaf");
	}
}