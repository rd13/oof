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
  // 1st of this month
  $scope.currentDate = moment().date(1).startOf('day')
  $scope.currentMonth = $scope.currentDate.month()

  $scope.monthList = moment.months()

  $scope.refreshView = (m, y) => {
    $scope.currentDate.month(m || $scope.currentDate.month())
    $scope.currentDate.year(y || $scope.currentDate.year())

    $scope.daysInMonth = $scope.currentDate.daysInMonth()
    $scope.days = [...Array($scope.daysInMonth).keys()].map((d) => d+1)
  }

  $scope.refreshView()



  $scope.getCellClass = (absences, day) => {
    let date = $scope.currentDate.date(day)
    let classList = absences.filter((absence) => {
      return moment(absence.date).diff(date, 'days') === 0
    }).map(absence => absence.ab_type)
    return classList || '';
  }

  // $scope.updateCurrentMonth = (m) => {
  //   $scope.currentDate = currentDate.month(m)
  //   $scope.daysInMonth = currentDate.daysInMonth()
  //
  //   $scope.days = [...Array($scope.daysInMonth).keys()]
  //   console.log($scope.daysInMonth)
  // }


  $scope.employees = []

  employees.getAll().then( (data) => {
    $scope.employees = data
  })
}])

