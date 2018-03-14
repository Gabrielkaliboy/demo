import java.util.Arrays;
import java.lang.Math;
public class Num2Rmb
{
	private String[] hanArr={"��","Ҽ","��","��","��","��","½","��","��","��"};
	
	private String[] unitArr={"ʮ","��","ǧ"};
	/*
		@param num��Ҫ���ֽ�ĸ�����
		return �ֽ�������������ֺ�С�����֡���һ������Ԫ�����������֣��ڶ�������Ԫ����С������
	*/
	private String[] divide(double num)
	{
		//��һ������������ǿ��תΪlong���ͣ����õ�������������
		long zheng=(long) num;
		
		//��������ȥ�������֣��õ�С�����֣�С�����ֳ���100����ȡ���õ�2λС��
		long xiao=Math.round((num-zheng)*100);
		
		//���������ַ���������ת��Ϊ�ַ���
		return new String[] {zheng + "",String.valueOf(xiao)};
	}
	
	/*
		��һ����λ�������ַ�����ɺ����ַ���
		numStr ��Ҫ��ת������λ�����ַ���
		return ��λ�����ַ�����ת���ɺ����ַ���
	*/
	
	private String toHanStr(String numStr)
	{
		String result="";
		int numLen = numStr.length();
		
		//���α��������ַ�����ÿһ������
		for(int i=0;i<numLen;i++)
		{
			//��char������ת��Ϊint�����֣���Ϊ���ǵ�ascii��ֵǡ�����48
			//��˰�char�����ּ�ȥ48�õ�int�����֣�����"4"��תΪ4
			int num = numStr.charAt(i) - 48;
			
			//����������һλ���֣��������ֲ���0������Ҫ��ӵ�λ��ǧ��ʮ��
			if(i!=numLen -1 && num!=0)
			{
				result+=hanArr[num]+unitArr[numLen-2-i];
			}else{
				//����Ҫ��ӵ�λ
				result+=hanArr[num];
			}
		}
		return result;
	}
	public static void main(String[] args)
	{
		Num2Rmb nr= new Num2Rmb();
		
		//���԰�һ���������ֽ���������ֺ�С������
		System.out.println(Arrays.toString(nr.divide(234242.2362424)));
		
		//���԰�һ����λ�������ַ�����ɺ����ַ���
		System.out.println(nr.toHanStr("6109"));
	}
}