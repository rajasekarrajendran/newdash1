(function () {
    'use strict';

    angular
        .module('MyApp')
        .controller('datatableController', datatableController);

    datatableController.$inject = ['$location', '$http', '$state', '$window','$scope' , '$document', '$timeout'];
    function datatableController($location, $http, $state ,  $window, $scope, $document, $timeout) {
        
    
 
	$scope.datatable=function(){
        
        $http.get("app-services/php/fetch.php")
			.success(function(data){
				$scope.products = data;
			})
			.error(function() {
				$scope.data = "error in fetching data";
			});
    }
    
   
    
    $scope.pageChanged = function() {
        
    $http.get('app-services/php/fetch.php').
    success(function(data) {
    //$scope.table1 = data;
        $scope.list = data;
        $scope.currentPage = 1; //current page
        $scope.entryLimit = 10; //max no of items to display in a page
        $scope.filteredItems = $scope.list.length; //Initially for no filter  
        $scope.totalItems = $scope.list.length;
       // $scope.GetCount();
    
       
    }).
    error(function(data, status, headers, config) {
      // log error
    });
    };
    
    $scope.pageChanged();
        
         $scope.setPage = function(pageNo) {
        $scope.currentPage = pageNo;
    };
          $scope.filter = function() {
        $timeout(function() { 
            $scope.filteredItems = $scope.filtered.length;
        }, 10);
    };
    $scope.sort_by = function(predicate) {
        $scope.predicate = predicate;
        $scope.reverse = !$scope.reverse;
    };
    
  
  

}
})();