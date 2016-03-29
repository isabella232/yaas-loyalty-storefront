

    angular.module('ds.loyalty')

        .controller('LoyaltyCheckoutCartCtrl', ['$rootScope', '$scope', '$injector',

            function ($rootScope, $scope, $injector) {

                var LoyaltySvc = $injector.get('LoyaltySvc');

                $scope.thisUser = $rootScope.thisUser;

                $scope.getUser = function () {

                    $scope.thisUser = $rootScope.thisUser;

                    if ( ! $scope.thisUser ) {
                        LoyaltySvc.getUser();
                    } else {
                        $rootScope.calculatePoints();
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

                var unBindPointsEvent =  $rootScope.$on('rewardPoints:calculated', function (event, pointsOb) {
                    $scope.getEarningRatio(pointsOb);
                });

                $scope.$on('$destroy', unBindPointsEvent);


                $scope.init = function () {
                    $scope.getUser();
                };

                $scope.init();
            }
        ]);

/*

	angular.module('ds.loyalty')

		.controller('LoyaltyCheckoutCartCtrl', ['$rootScope', '$scope', '$injector','GlobalData',

			function ($rootScope, $scope, $injector,GlobalData) {

               var LoyaltySvc = $injector.get('LoyaltySvc');


                $scope.thisUser = $rootScope.thisUser;

                $scope.getUser = function () {

                    $scope.thisUser = $rootScope.thisUser;

                    if ( $scope.thisUser ) {

                        if ( ! $rootScope.calculatedPointsData ) {
                            //$rootScope.calculatePoints();
                        }                        
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

                    LoyaltySvc.getEarningRatio().then(

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
                    console.dir('init');
                    $scope.getUser();
                };

                $scope.init();
			}
		]);*/