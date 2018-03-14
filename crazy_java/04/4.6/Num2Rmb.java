import java.util.Arrays;
import java.lang.Math;
public class Num2Rmb
{
	private String[] hanArr={"零","壹","贰","叁","肆","伍","陆","柒","捌","玖"};
	
	private String[] unitArr={"十","百","千"};
	/*
		@param num需要被分解的浮点数
		return 分解出来的整数部分和小数部分。第一个数组元素是整数部分，第二个数组元素是小数部分
	*/
	private String[] divide(double num)
	{
		//将一个浮点数类型强制转为long类型，即得到他的整数部分
		long zheng=(long) num;
		
		//浮点数减去整数部分，得到小数部分，小数部分乘以100后在取整得到2位小数
		long xiao=Math.round((num-zheng)*100);
		
		//下面用两种方法将整数转换为字符串
		return new String[] {zheng + "",String.valueOf(xiao)};
	}
	
	/*
		把一个四位的数字字符串变成汉字字符串
		numStr 需要被转换的四位数字字符串
		return 四位数字字符串被转换成汉字字符串
	*/
	
	private String toHanStr(String numStr)
	{
		String result="";
		int numLen = numStr.length();
		
		//依次遍历数字字符串的每一个数字
		for(int i=0;i<numLen;i++)
		{
			//把char型数字转换为int型数字，因为他们的ascii码值恰好相差48
			//因此把char型数字减去48得到int型数字，例如"4"被转为4
			int num = numStr.charAt(i) - 48;
			
			//如果不是最后一位数字，并且数字不是0，则需要添加单位（千百十）
			if(i!=numLen -1 && num!=0)
			{
				result+=hanArr[num]+unitArr[numLen-2-i];
			}else{
				//否则不要添加单位
				result+=hanArr[num];
			}
		}
		return result;
	}
	public static void main(String[] args)
	{
		Num2Rmb nr= new Num2Rmb();
		
		//测试把一个浮点数分解成整数部分和小数部分
		System.out.println(Arrays.toString(nr.divide(234242.2362424)));
		
		//测试把一个四位的数字字符串变成汉字字符串
		System.out.println(nr.toHanStr("6109"));
	}
}