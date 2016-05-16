(function (angular) {
    angular
        .module('bakalavr', ['ui.router'])
        .config(config);

    config.$inject = [
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider'
    ];

    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('index', {
                'url': '/video-stream',
                'templateUrl': '/views/index.html'
            })
        ;

        $urlRouterProvider.otherwise('/video-stream');
        $locationProvider.html5Mode(true).hashPrefix('!');
    }
})(angular);