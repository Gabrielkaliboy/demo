//import java.io.BufferedReader;
import java.io.*;
//������bug
public class GoBang
{
	//�������̴�С
	private static int BOARD_SIZE = 15;
	//����һ����ά�������䵱����
	private String [] [] board;
	public void initBoard()
	{
		//��ʼ����������
		board=new String[BOARD_SIZE][ BOARD_SIZE];
		//��ÿ��Ԫ�ظ�ֵΪ��+���������ڿ���̨�������
		for(int i=0; i<BOARD_SIZE;i++)
		{
			for(int j=0;j<BOARD_SIZE;j++)
			{
				board[i][j] = "+";
			}
		}
	}
	
	//�ڿ���̨������̵ķ���
	public void printBoard()
	{
		for(int i=0;i<BOARD_SIZE;i++)
		{
			for(int j=0;j<BOARD_SIZE;j++){
				System.out.println(board[i][j]);
			}
			//ÿ��ӡ��һ�����һ�����з�
			System.out.println("\n");
		}
	}
	
	public static void main(String[] args)
	{
		GoBang gb=new GoBang();
		gb.initBoard();
		gb.printBoard();
		
		//�������ڻ�ȡ��������ķ���
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		String inputStr=null;
		//br.readLine();ÿ���ڼ���������һ�����ݺ󰴻س���������������ݾͻᱻbr��ȡ��
		while((inputStr = br.readLine()) != null)
		{
			//���û�������ַ����ԣ���Ϊ�ָ������ָ�������ַ���
			String[] posStrArr = inputStr.split(",");
			
			//�������ַ���ת��Ϊ�û����������
			int xPos = Integer.parseInt(posStrArr[0]);
			int yPos = Integer.parseInt(posStrArr[1]);
			
			//�Ѷ��������Ԫ�ظ�ֵΪ��
			gb.board[yPos-1][xPos-1] = "��";
			
			/*
				�����������������������Ϊ������������꣬����board���飬���漰
				1.�������Ч��
				2.�µ���ĵ㣬�����ظ�����
				3.ÿ�������Ժ���Ҫɨ��˭Ӯ��
				
			*/
			gb.printBoard();
			System.out.println("����������������꣬Ӧ��xy�ĸ�ʽ��");
		}
	}
	
}