package conube.test;

public class TransactionResult {

	private boolean success;
	private Object id;
	
	TransactionResult(boolean b){
		success = b;
	}
	
	TransactionResult(boolean b, Object id){
		success = b;
	}
	
	
	public boolean getSuccess(){
		return success;
	}
	
	public Object getId(){
		return id;
	}
}
