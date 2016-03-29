

	angular.module('ds.loyalty')

		.controller('RewardsPointCtrl', ['$rootScope', '$scope', '$injector',

			function ($rootScope, $scope, $injector) {

				var LoyaltySvc = $injector.get('LoyaltySvc');
                var $stateParams = $injector.get('$stateParams');



                $scope.thisUser = $rootScope.thisUser;

                $scope.getUser = function () {
                    $scope.thisUser = $rootScope.thisUser;
                    if ( $scope.thisUser ) {
                        $scope.getEarningRatio();
                    }
                    else{
                        LoyaltySvc.getUser();
                        $scope.getEarningRatio();
                    }
                };
                
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
                        }
                    );  
                };


                $scope.getTransactionAmountWithQty = function (amount, qty) {
                    return amount * qty;
                };



                $scope.product = {

                };

                $scope.quantity = 0;



                $scope.pointsProcessing = false;

                $scope.getCalculatePoints = function (productOb, quantity) {

                    if ($scope.thisUser.isMember) {


                        if ( productOb && quantity > 0 ) {

                            $scope.pointsProcessing = true;

                            var fireRuleModel = LoyaltySvc.getFireRuleOjbect();

                            if (fireRuleModel && angular.isObject(fireRuleModel)) {
                                var productAttributesObj = {
                                    productId : productOb.product.id,
                                    productName : productOb.product.name,
                                    price : productOb.prices[0].effectiveAmount,
                                    quantity  : quantity,
                                    imageURL : '',
                                    productCategory : angular.copy(productOb.categories),
                                    customAttributes:[]
                                };

                                angular.forEach(productAttributesObj.productCategory, function(category){ 
                                    category.categoryId =  category.id;
                                    delete category.image;
                                    delete category.metadata;
                                    delete category.published;
                                    delete category.id;
                                    delete category.parentId;
                                });

                                fireRuleModel.productAttributes.push(productAttributesObj);

                                fireRuleModel.member = $rootScope.thisUser.loyaltyUser;

                                delete fireRuleModel.member.id;
                                delete fireRuleModel.member.metadata;
                                delete fireRuleModel.member.referralCode;
                                delete fireRuleModel.member.customAttributes;

                                fireRuleModel.memberActivity.memberId = $rootScope.thisUser.loyaltyUser.memberId;

                                fireRuleModel.memberActivity.transactionAmount = $scope.getTransactionAmountWithQty(productOb.prices[0].effectiveAmount, quantity);

                                LoyaltySvc.fireDummyRule(fireRuleModel).then(

                                    function(fireRuleData) {

                                    $scope.earning.points = fireRuleData.redeemablePointsEarned;
                                    $scope.earning.cash = ( $scope.earning.points * $scope.earning.ratio );
                                    $scope.pointsProcessing = false;
                                    }
                                );

                            }
                        }
                    }
                };

                var productDetailsEvent = $scope.$on('product:details:updated', function (event, productOb) {
                    $scope.product = productOb;
                });


                var productQtyEvent = $scope.$on('product:qty:updated', function (event, quantity) {
                    $scope.quantity = quantity;
                    $scope.getCalculatePoints($scope.product,  $scope.quantity);
                });


                var unBindUserEvent = $rootScope.$on('loyaltyInformation:updated', function (event, eveObj) {
                    $scope.thisUser = $rootScope.thisUser;
                    $scope.getCalculatePoints($scope.product,  $scope.quantity);
                });

                $scope.$on('$destroy', unBindUserEvent);
                $scope.$on('$destroy', productQtyEvent);
                $scope.$on('$destroy', productDetailsEvent);



                $scope.init = function () {
                    $scope.getUser();
                };

                $scope.init();
			}
		]);