/**
 * 
 */

function ConfigPage(){
	
	var self = this;
	
	var page = document.getElementById("config");
	var rateIr = document.getElementById("config_ir");
	var ratePis = document.getElementById("config_pis");
	var rateCofins = document.getElementById("config_cofins");
	var rateCsll = document.getElementById("config_csll");
	var name = document.getElementById("config_name");
	
	var  btn = document.getElementById("config_ok");
	
	var pgTitle = document.getElementById("companyName");
	
	
	this.getDOMElement = function(){
		return page;
	}
	
	this.show = function(){
		
		shell.setLoadingState(true);
		
		shell.apiGet("/company", function(data){
			
			name.value = data.name;
			
			rateIr.value = data.irTaxRate;
			ratePis.value = data.pisTaxRate;
			rateCofins.value = data.cofinsTaxRate;
			rateCsll.value = data.csllTaxRate;
			
			
			shell.setLoadingState(false);
		});
		
	}
	
	
	btn.onclick = function(){
		
		var ir = Format.floatFromString( rateIr.value );
		var pis = Format.floatFromString ( ratePis.value );
		var cofins = Format.floatFromString( ratePis.value );
		var csll = Format.floatFromString( rateCsll.value );
		
		if (name.value.trim() == ""){
			alert("Indique um nome para a companhia");
			return;
		}
		
		if (ir == null || pis == null || cofins == null || csll == null){
			alert("Há valores inválidos. Por favor, verifique");
			return;
		}		
		
		var pck = {
				name : name.value.trim(),
				irTaxRate : ir, pisTaxRate : pis, cofinsTaxRate : cofins, csllTaxRate : csll
		};
		
		shell.apiPut("/company", pck, function(){
			companyName.innerText = name.value.trim();
			alert("Dados atualizados");
		});
		
	}
	
}

