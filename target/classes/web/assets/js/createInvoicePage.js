/**
 * 
 */


function CreateInvoicePage(){
	
	var self = this;
	
	var pageElement = document.getElementById("createInvoice");
	var info;
	
	var rateIr = document.getElementById("createInvoice_rateIr");
	var ratePis = document.getElementById("createInvoice_ratePis");
	var rateCofins = document.getElementById("createInvoice_rateCofins");
	var rateCsll = document.getElementById("createInvoice_rateCsll");
	
	var ir = document.getElementById("createInvoice_ir");
	var pis = document.getElementById("createInvoice_pis");
	var cofins = document.getElementById("createInvoice_cofins");
	var csll = document.getElementById("createInvoice_csll");
	var total = document.getElementById("createInvoice_total");
	
	var fdescricao = document.getElementById("createInvoice_desc");
	var fvalor = document.getElementById("createInvoice_amount");
	
	this.show = function(){
		shell.setLoadingState(true);
		
		shell.apiGet("/company", function(data){
			info = data;
			rateIr.innerText = data.irTaxRate+"%";
			ratePis.innerText = data.pisTaxRate+"%";
			rateCofins.innerText = data.cofinsTaxRate+"%";
			rateCsll.innerText = data.csllTaxRate+"%";
			
			
			shell.setLoadingState(false);
		})
	}
	
	this.getDOMElement = function(){
		return pageElement;
	}
	
	document.getElementById("createInvoice_ok").onclick = function(){
		var desc = fdescricao.value.trim();
		var valor = Format.floatFromString(fvalor.value);
		
		if(desc == ""){ alert("Adicione uma descrição à Invoice"); return; }
		
		if (valor == null || isNaN(valor)== true || valor <= 0){
			alert("Insira um valor válido para a Invoice (> 0)");
			return;
		}
		
		var invoice = { description : desc, amount : valor};
		
		shell.apiPost("/invoices", invoice, function(result){
			if (result == null){
				alert("Não foi possível adicionar invoice");
				return;
			}
			
			fdescricao.value = "";
			fvalor.value = "0,00";
			alert("Invoice Inserted");
		});
	}
	
	fvalor.onkeydown = function(e){
		if (e.keyCode == 13) fvalor.blur();
	}
	
	fvalor.onblur = function(){
		var valor = parseFloat(fvalor.value);
		if (isNaN(valor) == true || valor <= 0){
			valor = 0;
			fvalor.value = "0,00";
			ir.value = "0,00";
			pis.value = "0,00"; cofins.value= "0,00"; csll.value = "0,00";
			total.value ="0,00";
		} else {
			shell.apiPost("/invoices/taxesCalc", { amount : valor }, function(data){
				fvalor.value = Format.toMoneyString(valor);
				ir.innerText = Format.toMoneyString(data.ir);
				cofins.innerText = Format.toMoneyString(data.cofins);
				pis.innerText = Format.toMoneyString(data.pis);
				csll.innerText = Format.toMoneyString(data.csll);
				total.innerText = Format.toMoneyString(data.ir + data.cofins + data.pis + data.csll);
			});
		}
	}
	
}

