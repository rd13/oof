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
  let currentDate = moment().date(1)
  $scope.currentDate = currentDate
  $scope.currentMonth = currentDate.month()
  $scope.monthList = moment.months()
  $scope.daysinmonth = $scope.currentDate.daysInMonth()
  $scope.days = [...Array(31).keys()]
  $scope.employees = []

  employees.getAll().then( (data) => {
    $scope.employees = data
  })
}])

