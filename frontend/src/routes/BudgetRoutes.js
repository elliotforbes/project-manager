app.config(function($routeProvider) {
    $routeProvider
        .when('/budget', {
            templateUrl : 'views/budget/index.html',
            controller: 'BudgetController'
        });
});
