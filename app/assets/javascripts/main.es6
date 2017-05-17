const app = angular.module('Main', ['ui.router', 'templates', 'angularMoment'])

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

app.factory('employees', ['$http', '$q', ($http, $q) => {
  let deferred = $q.defer()
  return {
    getAll : () => {
      $http.get('/employees.json').then( (response) => {
        deferred.resolve(response.data)
      })
      return deferred.promise
    }
  }
}])

app.controller('DashboardCtrl', ['$scope', 'employees', 'moment', ($scope, employees, moment) => {
  $scope.curDate = moment().date(1).month(11).year(2017).toDate()
  $scope.days = [...Array(31)]
  employees.getAll().then( (data) => {
    console.log(data)
    $scope.employees = data
  })
  console.log('dashboard controller', $scope.employees)
}])

