(function () {
    'use strict';

    angular
        .module('MyApp')
        .controller('bannerController', bannerController);

    bannerController.$inject = ['$location', '$http', '$state', '$window','$scope' , '$document','$timeout', '$rootScope', 'notify'];
    function bannerController($location, $http, $state ,  $window, $scope, $document, $timeout, $rootScope, notify) {
        
         $scope.insertData2 = function(){
        
       
    Flash.clear();
        
    $http.post('app-services/php/banner_insert.php', $scope.banner)
       .success(function(data) {
        
        console.log("Succesfully Inserted");
                           })
                           .error(function(data, status, headers, config) {
                               // log error
                               
                              console.log("Error");
                           });
    
}
    
        $timeout(function(){
   //clear message
   //FlashService.ClearMessage(); - or whatever how you clear the message
}, 2000);
   
  
    
     
    
 
    
  

        $scope.insertData = function(){
            $rootScope.flash={};
            $rootScope.flash.message='';
            var data = {
                       uploadInfo: {
                           btitle : $scope.banner.btitle
                           
                         
                           
                       },
                       file: $scope.myFile
                   };
                   var fd = new FormData();
                   fd.append("uploadinfo", angular.toJson(data.uploadInfo, true));
                   fd.append("file", data.file);
       
    
    $http.post('app-services/php/banner_insert.php', fd)
       .success(function(data) {
        
       console.log("Succesfully Inserted");
      // Flash.create('success', 'Successfully Inserted!', 0, {container: 'flash-fixed'});
       $state.go("home.banner",{},{reload:true});
          notify({
            message: 'Form Data Sucessfully Inserted',
            classes: 'alert.sucess',
            
            position: 'center',
            duration: '3000'
        });
    
        

                           })
                           .error(function(data, status, headers, config) {
                               // log error
                              Flash.create('danger', 'Error !', 0, {container: 'flash-fixed'});
                              console.log("Error");
                           });
    
}
        $scope.formclear = function() {
          
     
     //$scope.form =null;
            $state.go("home.banner",{},{reload:true});
            console.log("Clear");
     
 
        
        
    };

    $scope.closeAll = function(){
        notify.closeAll();
    };
        
        
  

}
})();