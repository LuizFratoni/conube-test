/**
 * 
 */

var API_Path = "http://localhost:8080";


var Format = {


		toMoneyString : function(num){
		   if ( num == null) return "0,00";
		   x = 0;

		   if(num<0) {
		      num = Math.abs(num);
		      x = 1;
		   }
		   if(isNaN(num)) num = "0";
		      cents = Math.floor((num*100+0.5)%100);

		   num = Math.floor((num*100+0.5)/100).toString();

		   if(cents < 10) cents = "0" + cents;
		      for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
		         num = num.substring(0,num.length-(4*i+3))+'.'
		               +num.substring(num.length-(4*i+3));
		   ret = num + ',' + cents;
		   if (x == 1) ret = ' - ' + ret;return ret;

		    
		},
		
		
		floatFromString : function(str){
		    str = str.replace(".", "");
		    str = str.replace(",",".");
		    return parseFloat(str);
		}

		
}

function RestRequest(uri, method, params, ret){
    

            var req = new XMLHttpRequest();

            req.open(method,uri, true);

            req.setRequestHeader('Content-Type', 'application/json');            
            
            req.onload = function(){
                try{
                    var result = JSON.parse(req.responseText);         
                    
                    if (ret != null) ret( result, null);
                   
                } catch(err){
                   alert(" Error Requesting Data "+uri+": "+err);

                }
            }
            req.onerror = function(e){
                if (ret != null) ret(null, e);
            }
            
            req.send(params);

}

function MenuButton(text, page){
	
	var element = document.createElement("div");
	var self = this;
	var selected = false;
	element.innerText = text;
	element.className = "menuButton"
	
	this.getDOMElement = function(){
		return element;
	}
	
	element.onmouseover = function(){
		if (selected == true) return;
		element.className = "menuButton_mouseOver"
	}
	
	element.onmouseout = function(){
		if (selected == true) return;
		element.className = "menuButton"
	}
	
	element.onclick = function(){
		shell.selectMenu(self);
	}
	
	this.setSelected = function(b){
		selected = b;
		if (b == true){
			element.className = "menuButton_selected";
		}  else element.className = "menuButton";
	}
	this.getPage = function(){
		return page;
	}
}

function Container(el){
	var element = el;
	
	
	this.add = function(item ){
		element.appendChild(item.getDOMElement());
	}
	
	this.remove = function(item){
		element.removeChild(item);
	}
}

function Shell(){
	
	var buttonBar;
	var curPage = null;
	var curMenu;
	var self = this;
	var host = new Container(document.body);
	var stateImg;
	this.initialize = function(){
		stateImg = document.getElementById("stateCursor");
		buttonBar = new Container(document.getElementById("buttonBar"));
		
		pgViewInvoices = new ViewInvoicesPage();
		pgCreateInvoice = new CreateInvoicePage();
		pgConfig = new ConfigPage();
		
		var btn1 = new MenuButton("View Invoices", pgViewInvoices);
		buttonBar.add(btn1);
		
		buttonBar.add(new MenuButton("Create Invoice", pgCreateInvoice));
		buttonBar.add(new MenuButton("Configuration", pgConfig));
		
		self.selectMenu(btn1);

	}
	
	this.setLoadingState = function(b){
		if (b == true) stateImg.style.display = "block";
		else  stateImg.style.display = "none";
	}
	
	this.show = function(page){
		
		var el = page.getDOMElement();
		/*el.style.position = "absolute";
		el.style.left = "10px";
		el.style.top = "100px";
		el.style.bottom = "10px;"
		el.style.right = "10px";*/
		
		el.style.display = "block";
		page.show();
	}
	
	this.selectMenu = function(menu){
		if (curMenu != null) {
			curMenu.setSelected(false);
			if (curPage != null) curPage.getDOMElement().style.display = "none";
		}
		curMenu = menu;
		curMenu.setSelected(true);
	
		curPage = curMenu.getPage();
		if (curPage != null)
			self.show(curPage);
		
		

	}
	

    this.apiGet = function(uri, onReturn){
        RestRequest(API_Path+uri, "GET",null, onReturn);
    }
    
    this.apiDelete = function(uri, onReturn){
        RestRequest(API_Path+uri, "DELETE",null, onReturn);
    }
    
    this.apiPost = function(uri,params, onReturn){
        var data = null;
        if (params != null) data = JSON.stringify(params);
        RestRequest(API_Path+uri, "POST", data, onReturn);
    }
    
    this.apiPut = function(uri,params, onReturn){
        var data = null;
        if (params != null) data = JSON.stringify(params);
        RestRequest(API_Path+uri, "PUT", data, onReturn);
    }



	
}

var shell =new Shell();

