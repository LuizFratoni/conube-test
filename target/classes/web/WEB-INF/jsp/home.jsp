<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="/assets/js/shell.js"></script>
<script type="text/javascript" src="/assets/js/viewInvoicesPage.js"></script>
<script type="text/javascript" src="/assets/js/createInvoicePage.js"></script>
<script type="text/javascript" src="/assets/js/configPage.js"></script>
<link rel="stylesheet" type="text/css" href="/assets/css/defaults.css">
<title>Conube - Test</title>
</head>
<body>


	<div id="companyName" style="position: absolute; text-align: right; left: 10px; right: 30px; top: 10px; line-height: 30px; height: 30px; vertical-align: middle; font-size: 20px; font-weight: bold;">
		${company.name}
    </div>
    
    <div id="buttonBar" style="position: absolute; left: 10px; top: 50px; height: 30px; right: 10px;">
    
    	
    </div>
    
    
    
    <div id="viewInvoices" style="; display: none; right: 10px; position: absolute; left: 10px; top: 100px; bottom: 10px; right: 10px; min-width: 600px;">
    
    	<div id="viewInvoicesTable" style="overflow-y: scroll; position: absolute; backgroound-color: #cccccc; overflow-y: scroll; left: 0px; right: 250px; top: 0px; bottom: 10px;">
    	
    	</div>
    		
    	<div id="viewInvoiceTaxes" style="opacity: 0.1; position: absolute; top: 0px; width: 200px; height: 170px; right: 20px;  border-radius: 8px; border: solid 1px #e0e0e0;">
    		<div style="font-size: 12px; font-weight: bold; margin-top: 8px; margin-left: 8px; margin-bottom: 15px;">Withheld Taxes</div>
    		<div>
    			<div style="margin-left: 15px; width: 80px; line-height: 24px; vertical-align: middle; float: left;">IR:</div>
    			<div  id="invoice_ir" style="width: 90px; line-height: 24px; vertical-align: middle; font-weight: bold; float: left; align: right; text-align: right">0,00</div>
    		</div>
    		<div>
    			<div style="margin-left: 15px; width: 80px; line-height: 24px; vertical-align: middle; float: left;">PIS:</div>
    			<div id="invoice_pis" style="width: 90px; line-height: 24px; vertical-align: middle; font-weight: bold; float: left; align: right; text-align: right">0,00</div>
    		</div>
    		<div>
    			<div style="margin-left: 15px; width: 80px; line-height: 24px; vertical-align: middle; float: left;">COFINS:</div>
    			<div id="invoice_cofins" style="width: 90px; line-height: 24px; vertical-align: middle; font-weight: bold; float: left; align: right; text-align: right">0,00</div>
    		</div>
    		<div>
    			<div style="margin-left: 15px; width: 80px; line-height: 24px; vertical-align: middle; float: left;">CSLL:</div>
    			<div id="invoice_csll" style="width: 90px; line-height: 24px; vertical-align: middle; font-weight: bold; float: left; align: right; text-align: right">0,00</div>
    		</div>
    		
    		<div>
    			<div style="margin-left: 15px; width: 80px; line-height: 24px; vertical-align: middle; float: left; font-weight: bold">TOTAL:</div>
    			<div id="invoice_total" style="width: 90px; line-height: 24px; vertical-align: middle; font-weight: bold; float: left; align: right; text-align: right">0,00</div>
    		</div>
    		
    	</div>
    	
    </div>
    
    <div id="createInvoice" style="display: none; position: absolute; left: 10px; top: 100px; bottom: 10px; right: 10px; min-width: 600px; width: 600px;">
    	<div style="font-size: 14px; margin-bottom: 6px;">Nova Invoice</div>
    	<div>
    		<div style="width: 100px; line-height: 24px; vertical-align: middle; float: left;">Description:</div>
    		<input id="createInvoice_desc" type="text" style="height: 24px; width: 400px;"> </input>
    	</div>
    	<div style="margin-top: 5px; width: 500px;">
    		<div style="width: 100px; line-height: 24px; vertical-align: middle; float: left;">Amount:</div>
    		<input id="createInvoice_amount" type="text" style="height: 24px; width: 100px;" value="0,00"> </input>
    		<input id="createInvoice_ok" type="submit" style="float: right" value="+ Create Invoice"></input>
    	</div>
    	
    	<div style="float: left; width: 200px; height: 150px; border-radius: 8px; margin-top: 20px; border: solid 1px #eee0dd; background-color: #fbf0e0;">
    		<div style="font-size: 12px; font-weight: bold; margin-top: 8px; margin-left: 8px; margin-bottom: 15px;">Tax Rates</div>
    		<div>
    			<div style="margin-left: 15px; width: 80px; line-height: 24px; vertical-align: middle; float: left;">IR:</div>
    			<div  id="createInvoice_rateIr" style="width: 90px; line-height: 24px; vertical-align: middle; font-weight: bold; float: left; align: right; text-align: right">0%</div>
    		</div>
    		<div>
    			<div style="margin-left: 15px; width: 80px; line-height: 24px; vertical-align: middle; float: left;">PIS:</div>
    			<div id="createInvoice_ratePis" style="width: 90px; line-height: 24px; vertical-align: middle; font-weight: bold; float: left; align: right; text-align: right">0%</div>
    		</div>
    		<div>
    			<div style="margin-left: 15px; width: 80px; line-height: 24px; vertical-align: middle; float: left;">COFINS:</div>
    			<div id="createInvoice_rateCofins" style="width: 90px; line-height: 24px; vertical-align: middle; font-weight: bold; float: left; align: right; text-align: right">0%</div>
    		</div>
    		<div>
    			<div style="margin-left: 15px; width: 80px; line-height: 24px; vertical-align: middle; float: left;">CSLL:</div>
    			<div id="createInvoice_rateCsll" style="width: 90px; line-height: 24px; vertical-align: middle; font-weight: bold; float: left; align: right; text-align: right">0%</div>
    		</div>
    	</div>
    	
    	<div style="float: left; width: 200px; height: 170px; border-radius: 8px; margin-top: 20px; border: solid 1px #e0e0e0; margin-left: 80px;">
    		<div style="font-size: 12px; font-weight: bold; margin-top: 8px; margin-left: 8px; margin-bottom: 15px;">Withheld Taxes</div>
    		<div>
    			<div style="margin-left: 15px; width: 80px; line-height: 24px; vertical-align: middle; float: left;">IR:</div>
    			<div  id="createInvoice_ir" style="width: 90px; line-height: 24px; vertical-align: middle; font-weight: bold; float: left; align: right; text-align: right">0,00</div>
    		</div>
    		<div>
    			<div style="margin-left: 15px; width: 80px; line-height: 24px; vertical-align: middle; float: left;">PIS:</div>
    			<div id="createInvoice_pis" style="width: 90px; line-height: 24px; vertical-align: middle; font-weight: bold; float: left; align: right; text-align: right">0,00</div>
    		</div>
    		<div>
    			<div style="margin-left: 15px; width: 80px; line-height: 24px; vertical-align: middle; float: left;">COFINS:</div>
    			<div id="createInvoice_cofins" style="width: 90px; line-height: 24px; vertical-align: middle; font-weight: bold; float: left; align: right; text-align: right">0,00</div>
    		</div>
    		<div>
    			<div style="margin-left: 15px; width: 80px; line-height: 24px; vertical-align: middle; float: left;">CSLL:</div>
    			<div id="createInvoice_csll" style="width: 90px; line-height: 24px; vertical-align: middle; font-weight: bold; float: left; align: right; text-align: right">0,00</div>
    		</div>
    		<div>
    			<div style="margin-left: 15px; width: 80px; line-height: 24px; vertical-align: middle; float: left; font-weight: bold">TOTAL:</div>
    			<div id="createInvoice_total" style="width: 90px; line-height: 24px; vertical-align: middle; font-weight: bold; float: left; align: right; text-align: right">0,00</div>
    		</div>
    	</div>
    	
    </div>
    
    <div id="config" style="display: none; position: absolute; left: 10px; top: 100px; right: 10px; bottom: 10px;">
    
    <div style=" width: 1100px;  position: absolute; height: 140px; border-radius: 8px; margin-top: 20px;">
    		<div style="font-size: 12px; font-weight: bold; margin-top: 8px; margin-left: 8px; margin-bottom: 15px;">Company Information (Taxes Rates %)</div>
    		<div>
    			<div style="margin-left: 15px; width: 110px; line-height: 24px; vertical-align: middle; float: left;">Company Name</div>
    			<input  type="text" id="config_name" style="width: 230px; line-height: 24px; vertical-align: middle; font-weight: bold; float: left; align: right;"></input>
    		</div>
    		<div>
    			<div style="margin-left: 15px; width: 30px; line-height: 24px; vertical-align: middle; float: left;">IR:</div>
    			<input  type="text" id="config_ir" style="width: 70px; line-height: 24px; vertical-align: middle; font-weight: bold; float: left; align: right; text-align: right"></input>
    		</div>
    		<div>
    			<div style="margin-left: 15px; width: 30px; line-height: 24px; vertical-align: middle; float: left;">PIS:</div>
    			<input  type="text"  id="config_pis" style="width: 70px; line-height: 24px; vertical-align: middle; font-weight: bold; float: left; align: right; text-align: right"></input>
    		</div>
    		<div>
    			<div style="margin-left: 15px; width: 60px; line-height: 24px; vertical-align: middle; float: left;">COFINS:</div>
    			<input  type="text"  id="config_cofins" style="width: 70px; line-height: 24px; vertical-align: middle; font-weight: bold; float: left; align: right; text-align: right"></input>
    		</div>
    		<div>
    			<div style="margin-left: 15px; width: 40px; line-height: 24px; vertical-align: middle; float: left;">CSLL:</div>
    			<input  type="text"  id="config_csll" style="width: 70px; line-height: 24px; vertical-align: middle; font-weight: bold; float: left; align: right; text-align: right"></input>
    		</div>

		</div>
    	
    	<input type="submit" id="config_ok" value= "UPDATE CHANGES"></input>
    	
    </div>
    
    <div id="stateCursor" style="display: none; position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px; background-image: url(/assets/img/bigst.gif); background-repeat: no-repeat; background-position: center;">
    
    </div>
    <script type="text/javascript"> 

    	shell.initialize();

   	</script>

</nav>
    

</body>
</html>