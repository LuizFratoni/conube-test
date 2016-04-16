package conube.test.data;

public class InvoiceTaxes {

	private double ir, pis, cofins, csll;

	public double getIr(){
		return ir;
	}
	
	public double getPis(){
		return pis;
	}
	
	public double getCofins(){
		return cofins;
	}
	
	public double getCsll(){
		return csll;
	}
	
	
	public InvoiceTaxes(double amount, CompanyInfo taxRates){
		
		double aux = amount * (taxRates.getIrTaxRate()/100);
		if (aux > 10) ir = aux;
		else ir = 0;
		
		if (amount > 500){
			pis = amount * (taxRates.getPisTaxRate()/100);
			cofins = amount * (taxRates.getCofinsTaxRate()/100);
			csll = amount * (taxRates.getCsllTaxRate()/100);
		}
		else{
			cofins = 0; pis = 0; csll = 0;
		}
		
	}
	
	
	
}



