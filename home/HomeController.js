(function () {
    'use strict';

    angular
        .module('MyApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$rootScope'];
    function HomeController($rootScope) {
        var vm = this;
       
    }

})();