(function(){
'use strict';
 
angular.module('ShoppingListApp', [])
.controller('ShoppingListShowController', ShoppingListShowController)
.service('ShoppingListService', ShoppingListService);

ShoppingListShowController.$inject=['ShoppingListService'];
function ShoppingListShowController(ShoppingListService){	
	var showList= this;
	
	 showList.items=ShoppingListService.getItems();
	 showList.removeItem= function(itemIndex){
	 ShoppingListService.removeItem(itemIndex); }
}
		
function ShoppingListService(){
var service = this;
var items =[{ 
   mark: "BMW",
   quantity: "30"
}, 
{ 
   mark: "Citroen",
   quantity: "32"
}, 

{  mark: "Tesla",
   quantity: "5"
}, 
{ 
   mark: "Toyota",
    quantity: "18"
}, 
{ 
   mark: "Mazda",
   quantity: "32"
}, 
{ 
   mark: "Skoda",
   quantity: "22"
}];


service.getItems = function(){
	return items;
};

service.removeItem= function(itemIndex){
	items.splice(itemIndex, 1);
	
};

}	
})();	
	