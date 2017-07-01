(function () {
    'use strict';

    angular
        .module('MyApp')
        .controller('FormController', FormController)
        .directive('fileModel', ['$parse', function ($parse) {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    var model = $parse(attrs.fileModel);
                    var modelSetter = model.assign;

                    element.bind('change', function () {
                        scope.$apply(function () {
                            modelSetter(scope, element[0].files[0]);
                        });
                    });
                }
            };
        }]);

    FormController.$inject = ['$location','$http', '$state','$window', '$scope' , '$document', '$rootScope', 'Flash','$timeout', 'notify'];
    function FormController($location, $http, $state , $window, $scope, $document, $rootScope, Flash, $timeout, notify) {
        
    $scope.insertData2 = function(){
        
       
    Flash.clear();
        
    $http.post('app-services/php/insert.php', $scope.form)
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
                           pname : $scope.pname,
                           pprice : $scope.pprice,
                           prating : $scope.prating,
                           pdescription : $scope.pdescription
                           
                       },
                       file: $scope.myFile
                   };
                   var fd = new FormData();
                   fd.append("uploadinfo", angular.toJson(data.uploadInfo, true));
                   fd.append("file", data.file);
       
    
    $http.post('app-services/php/insert.php', fd)
       .success(function(data) {
        
       console.log("Succesfully Inserted");
      // Flash.create('success', 'Successfully Inserted!', 0, {container: 'flash-fixed'});
       $state.go("home.form",{},{reload:true});
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
            $state.go("home.form",{},{reload:true});
            console.log("Clear");
     
 
        
        
    };

    $scope.closeAll = function(){
        notify.closeAll();
    };
        
          
    
 
  

}
})(); 

 
