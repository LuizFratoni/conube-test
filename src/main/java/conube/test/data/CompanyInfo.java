package conube.test.data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class CompanyInfo {

	@Id
	private int id;
	
	private String name;
	private double irTaxRate;
	private double pisTaxRate;
	private double cofinsTaxRate;
	private double csllTaxRate;
	
	public void setId(int i){
		id = i;
	}
	public int getId(){
		return id;
	}
	
	public String getName(){
		return name;
	}
	
	public double getIrTaxRate(){
		return irTaxRate;
	}
	
	public double getPisTaxRate(){
		return pisTaxRate;
	}
	
	public double getCofinsTaxRate(){
		return cofinsTaxRate;
	}
	
	public double getCsllTaxRate(){
		return csllTaxRate;
	}
	
	
	public void setName(String v){
		name = v;
	}
	
	public void setIrTaxRate(double v){
		irTaxRate = v;
	}
	
	public void setPisTaxRate(double v){
		pisTaxRate = v;
	}
	
	public void setCofinsTaxRate(double v){
		cofinsTaxRate = v;
	}
	
	public void setCsllTaxRate(double v){
		csllTaxRate = v;
	}
}
