'use strict';
var sampleApp=angular.module("myApp",['ngRoute','xeditable']);


sampleApp.config(['$routeProvider',function($routeProvider) {
	    $routeProvider.when('/AddNewOrder',{
		templateUrl:'templates/add_order.html',
		controller: 'AddOrderController'	
	 }).when('/login',{
		templateUrl:'templates/show_orders.html',
		controller: 'ShowOrdersController'
	 }).otherwise({
        redirectTo: 'index.html'
     });
      
}]);

sampleApp.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});



sampleApp.controller('AddOrderController', function($scope) {
$scope.message = 'This is Add new order screen';   
});


sampleApp.controller('ShowOrdersController', function($scope) {
 $scope.user={
		name:'ranjith',
		email:'example@mail.com',
		number:'0123456789'
	};
});

sampleApp.controller('RadiolistCtrl', function($scope, $filter) {
  $scope.user = {
    status: 0
  }; 

  $scope.statuses = [
    {value: 1, text: 'male'},
    {value: 2, text: 'female'}
  ]; 

  $scope.showStatus = function() {
    var selected = $filter('filter')($scope.statuses, {value: $scope.user.status});
    return ($scope.user.status && selected.length) ? selected[0].text : 'Not set';
  };
});

sampleApp.controller('TextareaCtrl', function($scope) {
  $scope.user = {
    desc: 'Enter your address'
  };
});

sampleApp.controller('RangeCtrlssc', function($scope){
	$scope.user={
		range: 100
	};
});
sampleApp.controller('RangeCtrlInter', function($scope){
	$scope.user={
		range: 100
	};
});
sampleApp.controller('RangeCtrlBtech', function($scope){
	$scope.user={
		range: 100
	};
});