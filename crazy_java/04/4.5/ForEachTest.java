public class ForEachTest{
	public static void main(String[] args)
	{
		String [] books={"123","123123","afsafsdfsa"};
		for( String book :books){
			System.out.println(book);
		}
		
		System.out.println(books.length);
		
		System.out.println("数组里面的第二个元素是："+books[1]);
	}
}