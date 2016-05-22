(function (angular) {
    angular
        .module('bakalavr', [
            'ui.router',
            "ngSanitize",
            "com.2fdevs.videogular",
            "com.2fdevs.videogular.plugins.controls"
        ])
        .config(config);

    config.$inject = [
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider',
        '$compileProvider'
    ];

    function config($stateProvider, $urlRouterProvider, $locationProvider, $compileProvider) {
        $stateProvider
            .state('index', {
                'url': '/video-stream',
                'templateUrl': '/views/index.html'
            })
        ;

        $urlRouterProvider.otherwise('/video-stream');
        $locationProvider.html5Mode(true).hashPrefix('!');

        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|data):/);
    }
})(angular);