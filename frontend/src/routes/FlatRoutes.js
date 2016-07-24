app.config(function($routeProvider) {
    $routeProvider
        .when('/flats', {
            templateUrl : 'views/flats/index.html',
            controller: 'FlatController'
        });
});
