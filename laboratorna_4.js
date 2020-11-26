(function(){
'use strict';
 
angular.module('ShoppingListApp', [])
.controller('ShoppingListAddController', ShoppingListAddController)
.controller('ShoppingListShowController', ShoppingListShowController)
.controller('ShoppingListShowController1', ShoppingListShowController1)

.service('ShoppingListService', ShoppingListService);

ShoppingListAddController.$inject = ['ShoppingListService'];
function ShoppingListAddController(ShoppingListService){
var itemAdder= this;

 itemAdder.itemName = "";
 itemAdder.itemQuantity = "";

itemAdder.addItem=function(){
	ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
}
}

ShoppingListShowController.$inject=['ShoppingListService'];
function ShoppingListShowController(ShoppingListService){	
	var showList= this;
	
	 showList.items=ShoppingListService.getItems();
	 showList.removeItem= function(itemIndex){
	 ShoppingListService.removeItem(itemIndex); }
}
	
ShoppingListShowController1.$inject=['ShoppingListService'];
function ShoppingListShowController1(ShoppingListService){	
	var showList1= this;
	
	showList1.items1=ShoppingListService.getItems1();
	
}
	

	
function ShoppingListService(){
var service = this;
var items =[{ 
   name: "Milk",
   quantity: "3"
}, 
{ 
   name: "Donuts",
   quantity: "32"
}, 
{ 
   name: "Cookies",
   quantity: "22"
}, 
{ 
   name: "Chocolate",
   quantity: "1"
}, 
{ 
   name: "Appple",
   quantity: "10"
}];

var items1 =[];



service.addItem= function(itemName, quantity){
	var item = {
		name: itemName,
		quantity: quantity
	};
	
	items.push(item);
};

service.getItems = function(){
	return items;
};

service.getItems1 = function(){
	return items1;
};

service.removeItem= function(itemIndex){
	items.splice(itemIndex, 1);
	
};

service.copyItem= function(itemIndex){
    items1 =items.toString();
};

}	
})();	
	
	
