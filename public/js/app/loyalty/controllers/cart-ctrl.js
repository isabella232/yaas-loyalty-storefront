

    angular.module('ds.loyalty')

        .controller('LoyaltyCartCtrl', ['$rootScope', '$scope', '$injector',

            function ($rootScope, $scope, $injector) {

                var LoyaltySvc = $injector.get('LoyaltySvc');


                $scope.thisUser = $rootScope.thisUser;

                $scope.getUser = function () {

                    $scope.thisUser = $rootScope.thisUser;

                    if ( ! $scope.thisUser ) {
                        LoyaltySvc.getUser();
                    }
                };

                var unBindUserEvent = $rootScope.$on('loyaltyInformation:updated', function (event, eveObj) {
                    $scope.thisUser = $rootScope.thisUser;
                });

                $scope.$on('$destroy', unBindUserEvent);
                
                $scope.earning = {

                    ratio: 0,
                    points: 0,
                    cash: 0
                };

                $scope.getEarningRatio = function(pointsOb) {
                    //changed to getRedeemRatio
                    LoyaltySvc.getRedeemRatio().then(

                        function (earningRatio) {

                            $scope.earning.ratio = earningRatio;

                            $scope.earning.points = pointsOb.redeemablePointsEarned;
                            $scope.earning.cash = ( $scope.earning.points * $scope.earning.ratio );
                        }
                    );  
                };

                $rootScope.$on('rewardPoints:calculated', function (event, pointsOb) {
                    $scope.getEarningRatio(pointsOb);
                });

                $scope.init = function () {
                    $scope.getUser();
                };

                $scope.init();
            }
        ]);