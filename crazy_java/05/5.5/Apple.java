public class Apple{
	public String name;
	public String color;
	public double weight;
	
	//û�в����Ĺ�����
	public Apple(){};
	
	//���������Ĺ�����
	public Apple(String name,String color)
	{
		this.name=name;
		this.color=color;
	}
	
	//���������Ĺ�����
	public Apple(String name,String color,double weight)
	{
		this(name,color);
		//����this���øù��������ڳ�ʼ����java����
		this.weight = weight;
	}
}