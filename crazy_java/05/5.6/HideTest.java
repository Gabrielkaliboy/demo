class Parent
{
	public String tag="����java����";
}
class Derived extends Parent
{
	//����һ��˽�е�tagʵ�����������ظ����tagʵ������
	private String tag="����Derived�е�tag";
}
public  class HideTest
{
	public class void main(String[] args)
	{
		Derived d=new Derived();
		
		//���򲻿��Է���d��˽�б���tag,��������ľ��ӻ�����������
		//System.out.println(d.tag);
		//��d������ʾ������ת��ΪParent�󣬼����Է���tagʵ������
		System.out.println(((Parent)d).tag);
	}
}