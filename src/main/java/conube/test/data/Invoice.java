package conube.test.data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Invoice {

	@Id
	@GeneratedValue
	private int id;
	
	private String description;
	private double amount;
	
	public int getId(){
		return id;
	}
	
	public String getDescription(){
		return description;
	}
	
	public void setDescription(String value){
		description = value;
	}
	
	public double getAmount(){
		return amount;
	}
	
	public void setAmount(double v){
		amount = v;
	}
	
}


