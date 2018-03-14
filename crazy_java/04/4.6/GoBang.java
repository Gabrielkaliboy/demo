//import java.io.BufferedReader;
import java.io.*;
//程序有bug
public class GoBang
{
	//定义棋盘大小
	private static int BOARD_SIZE = 15;
	//定义一个二维数组来充当棋盘
	private String [] [] board;
	public void initBoard()
	{
		//初始化棋盘数组
		board=new String[BOARD_SIZE][ BOARD_SIZE];
		//把每个元素赋值为”+“，用于在控制台输出棋盘
		for(int i=0; i<BOARD_SIZE;i++)
		{
			for(int j=0;j<BOARD_SIZE;j++)
			{
				board[i][j] = "+";
			}
		}
	}
	
	//在控制台输出棋盘的方法
	public void printBoard()
	{
		for(int i=0;i<BOARD_SIZE;i++)
		{
			for(int j=0;j<BOARD_SIZE;j++){
				System.out.println(board[i][j]);
			}
			//每打印完一行输出一个换行符
			System.out.println("\n");
		}
	}
	
	public static void main(String[] args)
	{
		GoBang gb=new GoBang();
		gb.initBoard();
		gb.printBoard();
		
		//这是用于获取键盘输入的方法
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		String inputStr=null;
		//br.readLine();每当在键盘上输入一行内容后按回车键，刚输入的内容就会被br读取到
		while((inputStr = br.readLine()) != null)
		{
			//将用户输入的字符串以，作为分隔符，分割成两个字符串
			String[] posStrArr = inputStr.split(",");
			
			//将两个字符串转换为用户下棋的坐标
			int xPos = Integer.parseInt(posStrArr[0]);
			int yPos = Integer.parseInt(posStrArr[1]);
			
			//把对象的数组元素赋值为●
			gb.board[yPos-1][xPos-1] = "●";
			
			/*
				电脑随机生成两个整数，作为电脑下棋的坐标，赋给board数组，还涉及
				1.坐标的有效性
				2.下的棋的点，不能重复下棋
				3.每次下棋以后需要扫描谁赢了
				
			*/
			gb.printBoard();
			System.out.println("请输入您下棋的坐标，应以xy的格式：");
		}
	}
	
}