app.config(function($routeProvider) {
    $routeProvider
        .when('/flats', {
            templateUrl : 'views/flats/index.html',
            controller: 'FlatController'
        })
        .when('/flat/new', {
            templateUrl : 'views/flats/new.html',
            controller: 'FlatController'
        });
});
