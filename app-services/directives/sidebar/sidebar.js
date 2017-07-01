'use strict';

angular.module('MyApp')
	.directive('aside',function(){
		return {
        templateUrl:'app-services/directives/sidebar/sidebar.html',
        replace: true
    	}
	});
