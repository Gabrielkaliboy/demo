public class NarrowConversion
{
	public static void main(String[] args)
	{
		int iValue=233;
		//ǿ�ư�int���͵�ֵתΪbyte���͵�ֵ
		byte bValue=(byte)iValue;
		
		//�����-23
		System.out.println(bValue);
		
		double dValue=3.98;
		//ǿ�ư�double���͵�ֵתΪint���͵�ֵ
		int tol = (int)dValue;
		
		//�����3
		System.out.println(tol);
		
	}
}