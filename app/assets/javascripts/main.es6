const app = angular.module('Main', ['ui.router', 'templates'])

app.config([
'$stateProvider',
'$urlRouterProvider',
'$locationProvider',
($stateProvider, $urlRouterProvider, $locationProvider) => {

  $locationProvider.html5Mode({ enabled: true })

  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'views/_dashboard.html',
      controller: 'DashboardCtrl'
    })

  $urlRouterProvider.otherwise('dashboard')
}])

app.controller('DashboardCtrl', ['$scope', ($scope) => {
  $scope.days = 26
  $scope.employees = [{"name":"foo bar"}]
  console.log('dashboard controller')
}])

