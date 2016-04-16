/**
 * 
 */

function InvoiceRow(manager, data){
	var self = this;
	var selected = false;
	
	var row = document.createElement("div");
	row.style.height = "25px";
	row.style.backgroundColor = "#ffffff";
	row.style.marginBottom = "5px";
	row.style.marginRight = "5px";
	
	var desc = document.createElement("div");
	desc.style.height = "25px";
	desc.style.float = "left";
	desc.style.lineHeight = "25px";
	desc.style.verticalAlign = "middle";
	desc.style.marginLeft="10px";
	
	var value = document.createElement("div");
	value.style.height = "25px";
	value.style.float = "right";
	value.style.marginRight = "10px";
	value.style.verticalAlign = "middle";
	value.style.lineHeight = "25px";
	value.style.fontWeight= "bold";
	
	row.appendChild(desc);
	row.appendChild(value);
	
	this.getDOMElement = function(){
		return row;
	}
	
	this.setSelected = function(b){
		selected = b;
		if (b == true)
			row.style.backgroundColor = "#e0e0e0";
		else row.style.backgroundColor = "#ffffff";
	}
	
	desc.innerText = data.description;
	value.innerText = Format.toMoneyString(data.amount);
	var id = data.id;
	
	row.onmouseover = function(){
		if (selected == true) return;
		row.style.backgroundColor = "#fbf5f0";
	}
	
	row.onmouseout = function(){
		if (selected == true) return;
		row.style.backgroundColor = "#ffffff";
	}
	
	row.onclick = function(){
		if (selected == true) return;
			manager.selectRow(self, id);
	}
}

function ViewInvoicesPage(){

	var self = this;
	var element = document.getElementById("viewInvoices");
	var host = document.getElementById("viewInvoicesTable");
	var curRow = null;
	
	var rateIr = document.getElementById("invoice_ir");
	var ratePis = document.getElementById("invoice_pis");
	var rateCofins = document.getElementById("invoice_cofins");
	var rateCsll = document.getElementById("invoice_csll");
	var total = document.getElementById("invoice_total");
	var block = document.getElementById("viewInvoiceTaxes");
	
	this.getDOMElement = function(){
		return element;
	}
	
	
	this.show = function(){
		shell.setLoadingState(true);
		self.selectRow(null);
		host.innerHTML = "";

		
		shell.apiGet("/company", function(data){
		
			var taxes = data;
			
			shell.apiGet("/invoices", function(data){
				
				var row;
				if (data!=null){
				data.forEach(function(item){
					row = new InvoiceRow(self, item);
					host.appendChild(row.getDOMElement());
				});
				}
				shell.setLoadingState(false);
			});
			
		});
		
		
	}
	
	this.selectRow = function(row, id){
		
		if (curRow != null){
			curRow.setSelected(false);
		}
		
		curRow = row;
		if (curRow != null){
			curRow.setSelected(true);
		
			shell.apiGet("/invoices/"+id+"/taxes", function(data){
				rateIr.innerText = Format.toMoneyString(data.ir);
				rateCofins.innerText = Format.toMoneyString(data.cofins);
				ratePis.innerText = Format.toMoneyString(data.pis);
				rateCsll.innerText = Format.toMoneyString(data.csll);
				total.innerText = Format.toMoneyString(data.ir + data.cofins + data.pis + data.csll);
				block.style.opacity = 1;
			});
		} else{
			block.style.opacity = 0.1;
			rateIr.innerText = "0,00";
			rateCofins.innerText = "0,00";
			ratePis.innerText = "0,00";
			rateCsll.innerText = "0,00";
			total.innerText= "0,00";
			
		}
	}
	
};
