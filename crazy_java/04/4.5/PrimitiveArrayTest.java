public class PrimitiveArrayTest
{
	public static void main(String[] args)
	{
		//�����������
		int [] a;
		
		//��̬��ʼ������
		a=new int[5];
		//Ϊ����Ԫ�ظ�ֵ
		for(int i=0,len=a.length;i<len;i++){
			a[i]=i+10;
		}
		
		//��ȡa�е�ֵ
		for( int i :a){
			System.out.println(i);
		}
		
	}
}