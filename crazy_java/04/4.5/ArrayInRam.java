public class ArrayInRam{
	public static void main(String[] args)
	{
		//ʹ�þ�̬��ʼ��
		int [] a={3,2,23};
		//ʹ�ö�̬��ʼ��
		int [] b= new int[5];
		
		//���b����ĳ���
		System.out.println("b����ĳ����ǣ�"+b.length);
		
		//���a�����Ԫ��
		for( int i=0 ,len=a.length; i<len;i++){
			System.out.println(a[i]);
		}
		//ѭ�����b�����Ԫ��
		for(int i=0,len=b.length;i<len;i++){
			System.out.println("b�����е�Ԫ��"+b[i]);
		}
		//��bָ��a
		b=a;
		//�ٴ����b��Ԫ��
		for(int i :b){
			System.out.println(i);
		}
	}
}