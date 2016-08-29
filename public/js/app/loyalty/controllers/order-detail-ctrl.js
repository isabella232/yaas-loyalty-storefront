
	angular.module('ds.loyalty')

        .controller('OrderDetailCtrl', ['$rootScope', '$scope', 'LoyaltySvc',

            function ($rootScope, $scope, LoyaltySvc ) {

                $scope.amounts = {
                	redeemed : 0,
                	earned : 0
                }

                $scope.redeem = {
                	ratio : -1
                };

                $scope.points = {
                    redeemed : 0,
                    earned : 0
                }

                $scope.getRedeemRatio = function() {

                    return LoyaltySvc.getRedeemRatio().then(

                        function (redeemRatio) {
                            $scope.redeem.ratio = redeemRatio;
                        }
                    );  
                };

                var unbindOrderEvent =  $rootScope.$on('loyalty:orderId',function(eve,orderId){     	

                	LoyaltySvc.getMemberActivitiesForOrder(orderId).then(
                       
                        function (data) {

							for( var temp = 0; temp < data.length; temp++ ){
								if(data[temp].activityType === "REDEEM"){
                                    $scope.points.redeemed = data[temp].transactionPoints;
									$scope.amounts.redeemed = data[temp].transactionPoints * $scope.redeem.ratio ;
								}
								else if(data[temp].activityType === "ORDER"){
                                    $scope.points.earned = data[temp].transactionPoints;
									$scope.amounts.earned = data[temp].transactionPoints * $scope.redeem.ratio ;
								}
							};
                        }
                    ); 
            	});

                $scope.$on('$destroy', unbindOrderEvent)

            	$scope.init = function() {
			        $scope.getRedeemRatio();
			    };

        		$scope.init();


            }
        ]);