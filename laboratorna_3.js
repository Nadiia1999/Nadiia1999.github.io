(function(){
'use strict';	
angular.module('myFirstApp',[])
.controller('myFirstController', myFirstController); 

 myFirstController.$inject=['$scope' ];

function myFirstController($scope){
 $scope.words="";
 $scope.Productlist="";

 $scope.breakfast= function(){
 $scope.words=probil($scope.Productlist);
 };
 
 function probil(products1){
	 var products=products1.split(',');
	 
	 for(var i=products.length - 1; i>=0; i--){
		 if (products[i]==="") products.splice(i, 1);
	 }
	 if (products.length===0){
		 return "Будь ласка, уведіть дані!";
	 } else if (products.length<=3){
		 return "На здоров'я!";
	 } else {
		 return "Це забагато!";
     }
	 
 }
}
}) ();