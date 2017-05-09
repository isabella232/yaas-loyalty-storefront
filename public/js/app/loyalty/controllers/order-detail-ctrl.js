
	angular.module('ds.loyalty')

        .controller('OrderDetailCtrl', ['$rootScope', '$scope', 'LoyaltySvc', 'GlobalData',

            function ($rootScope, $scope, LoyaltySvc, GlobalData ) {

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

                var unbindOrderCancelEvent = $rootScope.$on('order:cancelled', function (event, orderObj) {
                    
                    var totalItems  = 0;
                    angular.forEach(orderObj.order.entries, function(item){
                        totalItems = totalItems + item.amount;
                    });

                    var cancelOrderActivity = {
                        customerId: $rootScope.thisUser.hybrisUser.id,
                        activityType: 'CANCELLATION',
                        transactionAmount: orderObj.order.subTotalPrice,
                        points: parseInt ( $scope.points.earned ),
                        refId: orderObj.order.id,
                        transactionCurrency : GlobalData.getCurrencyId(),
                        rulesPayload : {
                            productAttributes :[],
                            orderAttributes : {
                                transactionCurrency :GlobalData.getCurrencyId(),
                                total : orderObj.order.totalPrice,
                                subTotal : orderObj.order.subTotalPrice,
                                shippingAmount : orderObj.order.shipping.total.amount,
                                discountAmount :  0,
                                shippingCountry: orderObj.order.shippingAddress.country,
                                shippingState : orderObj.order.shippingAddress.state,
                                totalItems : totalItems,
                                customAttributes:[]
                            },
                            customAttributes: []
                        }
                    };
                    if( orderObj.order.discounts.length>0 )
                        cancelOrderActivity.rulesPayload.orderAttributes.discountAmount = orderObj.order.discounts[0].amount ;

                    LoyaltySvc.getProductAttributesForOrderCancel( orderObj.order ).then(function(productAttributes){
                        cancelOrderActivity.rulesPayload.productAttributes = productAttributes;
                        LoyaltySvc.cancelOrder(cancelOrderActivity).then(function(responseMemberActivity) {
                            
                        }, function(errorresponse) {
                            
                        });
                       
                    });


                });


                $scope.$on('$destroy', unbindOrderEvent);
                $scope.$on('$destroy', unbindOrderCancelEvent);

            	$scope.init = function() {
			        $scope.getRedeemRatio();
			    };

        		$scope.init();


            }
        ]);