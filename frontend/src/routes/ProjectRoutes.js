app.config(function($routeProvider) {
    $routeProvider
        .when('/projects', {
            templateUrl : 'views/projects/index.html'
        })
        .when('/project/new', {
            templateUrl : 'views/projects/new.html'
        })
        .when('/project/:name', {
            templateUrl : 'views/project/single.html'
        });
});
