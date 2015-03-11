angular.module('starter.controllers', [])

    .controller('DashCtrl', function ($scope, Course, DateUtils,Session,Account,CourseSession) {


        $scope.day=Session.getCurDay();
        $scope.dayBefore=DateUtils.addDays($scope.day,-1);
        $scope.dayAfter=DateUtils.addDays($scope.day,+1);
        $scope.courses = CourseSession.findAllByDay($scope.day);

        $scope.prevDay=function()
        {
            $scope.day=DateUtils.addDays($scope.day,-1);
            $scope.dayBefore=DateUtils.addDays($scope.day,-1);
            $scope.dayAfter=DateUtils.addDays($scope.day,+1);
            $scope.courses = CourseSession.findAllByDay($scope.day);

            Session.setCurDay($scope.day);

        };
        $scope.nextDay=function()
        {
            $scope.day=DateUtils.addDays($scope.day,+1);
            $scope.dayBefore=DateUtils.addDays($scope.day,-1);
            $scope.dayAfter=DateUtils.addDays($scope.day,+1);
            $scope.courses = CourseSession.findAllByDay($scope.day);
            Session.setCurDay($scope.day);
        };
    })

    .controller('AccountCtrl', function ($scope, Course,Account) {
        $scope.account = Account;
        $scope.courses = Course.all();
    })

    .controller('CourseDetailCtrl', function ($scope, $ionicHistory, $stateParams, Course) {
        $scope.giorni=['Dom','Lun','Mar','Mer','Gio','Ven','Sab'];
        $scope.corso = Course.get($stateParams.id);
        $scope.goBack=function(){
            $ionicHistory.goBack();
        };
    });