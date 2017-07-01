var app = angular.module("MyApp", [ 
									'ui.router',
									'ngRoute',
									'ngAnimate',
									'ngSanitize',
                                    'ngFlash',
									'ngCookies',
									'ui.bootstrap',                            
								    'oc.lazyLoad',
                                    'cgNotify']);
									
app.config(function($httpProvider, $stateProvider, $urlRouterProvider) {

	localStorage.clear();
	$httpProvider.defaults.headers.post = {};
	$stateProvider
   
   
    

	.state('login', {
		url : '/login',
		templateUrl : 'login/login.html',
		controller : 'LoginController',
		controllerAs : 'vm'
		
	})
    
    .state('logout', {
                templateUrl: 'login/login.html',
                controller: 'LoginController',
                controllerAs: 'vm',
                url: '/login'
            })
	.state('home', {
		url : '/home',
		templateUrl : 'home/home.view.html',
		controller : 'HomeController',
		controllerAs : 'vm',
		resolve: {
                    loadMyFiles:function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'MyApp',
                            files:[                            
                            'app-services/directives/header/header.js',
                            'app-services/directives/sidebar/sidebar.js'                                
                            ]
                        })
                    }
                }
	})
	.state('home.dashboard', {
		url : '/',
		templateUrl : 'home/dashboard.html',
		controller : 'DashboardController',
		controllerAs : 'vm'
		
	})
    
    .state('home.form', {
		url : '/form',
		templateUrl : 'form/form.html',
		controller : 'FormController',
		controllerAs : 'vm'
		
	})
    
     .state('home.datatable', {
		url : '/datatable',
		templateUrl : 'datatable/datatable.html',
		controller : 'datatableController',
		controllerAs : 'vm'
		
	})
    
    
    .state('home.tabs', {
		url : '/tabs',
		templateUrl : 'tabs/tabs.html',
		controller : 'tabsController',
		controllerAs : 'vm'
		
	})
    
    .state('home.banner', {
		url : '/banner',
		templateUrl : 'banner-images/banner.html',
		controller : 'bannerController',
		controllerAs : 'vm'
		
	})
	

	$urlRouterProvider.otherwise('/login');
     //FlashProvider.setTimeout(5000);
     //FlashProvider.setShowClose(true);
     //FlashProvider.setOnDismiss(myCallback);
     //FlashProvider.setTemplatePreset('transclude');
   

}
);

app.filter('startFrom', function() {
    return function(input, start) {
        if(input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    }
});


app.run(function($rootScope, $location, $cookieStore, $http, $state) {
	// keep user logged in after page refresh
	
	$rootScope.globals = $cookieStore.get('globals') || {};
	if ($rootScope.globals.currentUser) {
		$http.defaults.headers.common['Authorization'] = 'Basic '
				+ $rootScope.globals.currentUser.authdata; // jshint
															// ignore:line
	}

	  $rootScope.$on('$locationChangeStart', function (event, next, current) {
          // redirect to login page if not logged in and trying to access a restricted page
          var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
          var loggedIn = $rootScope.globals.currentUser;
          if (restrictedPage && !loggedIn) {
              $location.path('/login');
          }
      });
});


   


 

