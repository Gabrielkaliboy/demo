public class ThisInConstructor
{
	//����һ����Ϊfoo�ĳ�Ա����
	public int foo=10;
	public ThisInConstructor()
	{
		//�ڹ������ﶨ��һ��foo����
		int foo = 0;
		//ʹ��this����ù��������ڳ�ʼ���Ķ���
		//���ù��������ڳ�ʼ���Ķ���foo��Ա������Ϊ6
		this.foo=6;
	}
	
	public static void main(String[] args)
	{
		//����ʹ��ThisInConstructor�����Ķ����foo��Ա������������Ϊ6����������Ĵ��뽫��Ϊ6 
		System.out.println(new ThisInConstructor().foo);
	}
}