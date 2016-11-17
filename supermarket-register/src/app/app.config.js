export function routing($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/supermarket-register');

    $stateProvider
        .state('app', {
            abstract: true,
            template: '<app-component></app-component>'
        })

}
