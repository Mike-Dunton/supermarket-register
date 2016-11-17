export function routing($stateProvider) {

    $stateProvider
        .state('app.supermarket-register', {
            url: '/supermarket-register',
            template: '<register-component></register-component>'
        });
}