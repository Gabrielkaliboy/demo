public class ConversionTest
{
	public static void main(String[] args)
	{
		double d=13.4;
		long l=(long)d;
		System.out.println(l);
		
		int in =5;
		//��ͼ��һ����ֵ����ת��Ϊ�������ͣ��������������
		//����ʱ����ʾ������ת��������
		//boolean b = (boolean)in;
		
		Object obj="Hello";
		//obj���������ʱ������ΪObject��Object��String���ڼ̳й�ϵ������ǿ������ת��
		//����obj������ʵ������ΪString����������ʱҲ����ͨ����
		String objStr=(String)obj;
		System.out.println(objStr);
		
		//����һ��objPri����������ʱΪObject��ʵ������ΪInteger
		Object objPri = new Integer(5);
		//ObjPri�����ı���ʱ����ΪObject��objPri����ʱΪInteger
		//Object��Integer���ڼ̳й�ϵ
		//����ǿ������ת������objPri������ʵ��������Integer
		
		//��������������лᵼ��ClassCastException�쳣
		//String Str=(String)objPri;
		
		
		//Ϊ�˱��ֳ���׳�����ǿ������޸�֮ǰ��һ��У��
		if(objPri instanceof String)
		{
			String Str=(String)objPri;
		}
	}
}