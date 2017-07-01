
(function () {
    'use strict';

    angular
        .module('MyApp')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$location', '$http', '$state', '$window','$scope' , '$document'];
    function DashboardController($location, $http, $state ,  $window, $scope, $document) {
        
        $scope.countpro = {};
        $scope.tabcount = {};
$scope.companycout = function(){
        
         $http.get("app-services/php/count_products.php")
			.success(function(data){
				$scope.countpro = data;
             
			})
			.error(function() {
				$scope.data = "error in fetching data";
			});
    }
$scope.companycout();

$scope.tabcount = function(){
        
         $http.get("app-services/php/count_tab.php")
			.success(function(data){
				$scope.tabcount = data;
             
			})
			.error(function() {
				$scope.data = "error in fetching data";
			});
    }
 $scope.tabcount();
  

}
})();
