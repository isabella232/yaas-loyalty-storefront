
    angular.module('ds.loyalty')

        .controller('LoyaltyCheckoutCtrl', ['$rootScope', '$scope', '$injector', 'LoyaltySvc',

            function ($rootScope, $scope, $injector, LoyaltySvc) {

                var CartSvc = $injector.get('CartSvc');
                var GlobalData = $injector.get('GlobalData');
                var LoyaltySvc = $injector.get('LoyaltySvc');

                $scope.currencyId = GlobalData.getCurrencySymbol();
                $scope.thisUser = $rootScope.thisUser;
                $scope.showApplyPoints = true;
                $scope.isSliderDisabled = false;

                 $scope.getUser = function () {

                    $scope.thisUser = $rootScope.thisUser;

                    if ( $scope.thisUser ) {
                        $scope.calcAmounts();
                    }
                };

                $scope.isLoyaltyPointsApplied = false;

                $scope.applyLoyaltyPoints =  function(){
                    $scope.isSliderDisabled = true;
                    var applyDiscountData = {
                        customerId : $scope.thisUser.hybrisUser.id,
                        cartId : $scope.cart.id,
                        transactionAmount : $scope.redeem.pointsToCurr,
                        pointsRedeemed : $scope.redeem.pointsGoing,
                        transactionCurrency : GlobalData.getCurrencyId()
                    };                    
                    
                    LoyaltySvc.applyLoyaltyPoints(applyDiscountData).then(
                        
                        function(response) {
                            $scope.showApplyPoints = false;

                            CartSvc.getCart().then(function (cart){
                                $scope.cart = cart;
                                $scope.redeem.pointsGoing = applyDiscountData.pointsRedeemed;
                                $scope.amounts.redeemDiscount = applyDiscountData.transactionAmount;
                                $scope.isLoyaltyPointsApplied = true;
                            });
                        },

                        function(errorresponse) {
                           $scope.isSliderDisabled = false;
                            console.log(errorresponse);
                        }
                    );   
                }

                $scope.removeLoyaltyPoints =  function(){
                    if($scope.cart.discounts){
                        var removeDiscountData = {
                            cartId : "",
                            loyaltyDiscountId : -1
                        }
                        angular.forEach($scope.cart.discounts, function(discount){
                            if(discount.name == "Loyalty Points Redemption"){
                                removeDiscountData.loyaltyDiscountId = discount.id;
                            }
                        });
                    
                        removeDiscountData.cartId = $scope.cart.id;

                        if(removeDiscountData.loyaltyDiscountId !== -1){
                            LoyaltySvc.removeLoyaltyPoints(removeDiscountData).then(
                                
                                function(response) {
                                    $scope.showApplyPoints = true;
                                    CartSvc.getCart().then(function (cart){
                                        $scope.cart = cart;
                                        $scope.isSliderDisabled = false;
                                        $scope.redeem.pointsGoing = 0;
                                        $scope.amounts.redeemDiscount = 0;
                                        $scope.isLoyaltyPointsApplied = false;

                                    });
                                },

                                function(errorresponse) {
                                    console.log(errorresponse);
                                }
                            ); 
                        }
                    }   
                }

               
                var unBindUserEvent = $rootScope.$on('loyaltyInformation:updated', function (event, eveObj) {
                    $scope.thisUser = $rootScope.thisUser;
                    $scope.calcAmounts();
                });

                $scope.redeem = {

                    ratio: -1,
                    pointsGoing: 0,
                    pointsToCurr: 0,
                    cashGoing: 0
                };   

                $scope.getRedeemRatio = function() {

                    return LoyaltySvc.getRedeemRatio().then(

                        function (redeemRatio) {
                            $scope.redeem.ratio = redeemRatio;
                        }
                    );  
                };

                $scope.coupon = {

                };

                $scope.cart = {

                };            

                $scope.amounts = {
                    shippingAmount: 0,
                    originalAmount: 0,
                    originalTotalAmount: 0,
                    redeemDiscount: 0,
                    couponDiscount: 0,
                    discountAmount: 0,
                    newAmount: 0
                };

                $scope.calcAmounts = function () {

                    $scope.cart = CartSvc.getLocalCart();

                    if ( $scope.cart && angular.isArray( $scope.cart.items ) ) {

                        $scope.amounts.shippingAmount = $scope.cart.shipping.fee.amount;
                        $scope.amounts.originalAmount = angular.copy($scope.cart.subTotalPrice.amount);
                        $scope.amounts.originalTotalAmount = angular.copy($scope.cart.totalPrice.amount);
    
                        // $scope.coupon = UserCoupon.getCoupon();
                        // $scope.amounts.couponDiscount = $scope.coupon.amounts.discountAmount;

                        if ( $scope.redeem.ratio === -1 ) {

                            $scope.getRedeemRatio().then(

                                function (redeemRatio) {  
                                                          
                                    $scope.setUserMaxPoints();
                                    $scope.changeNewAmount();
                                    $scope.changeShippingAmount();
                                }
                            );
                        }   
                        else{
                            $scope.setUserMaxPoints();
                            $scope.changeNewAmount();
                            $scope.changeShippingAmount();
                        }                         
                    }
                };





                $scope.userMaxCash = 0;
                $scope.userMaxPoints = 0;


                $scope.setUserMaxPoints = function () {
                    $scope.userMaxPoints = $scope.getUserMaxPoints($scope.thisUser.loyaltyUser.totalBalancePoints || 0);
                    $scope.userMaxCash = ($scope.userMaxPoints * $scope.redeem.ratio).toFixed(2);
                    $rootScope.$broadcast('amountChanged:redeemablePoints', $scope.userMaxPoints);

                };

                $scope.getUserMaxPoints = function(userMaxpPoints) {

                    var productPoints = $scope.getPointsFromPrice($scope.amounts.originalAmount - $scope.amounts.couponDiscount);
                    
                    var result = userMaxpPoints;

                    if ( productPoints <= userMaxpPoints ) {
                        result = productPoints;
                    }

                    return result.toFixed(0);
                };


                $scope.getPointsFromPrice = function(priceVal) {
                    return priceVal / $scope.redeem.ratio;
                };


                $scope.changePointsGoing = function () {
                    $scope.redeem.pointsToCurr = ( ( $scope.redeem.pointsGoing || 0 ) * $scope.redeem.ratio).toFixed(2);
                    
                    $scope.amounts.redeemDiscount = parseFloat($scope.redeem.pointsToCurr);
                    
                    
                    $scope.changeNewAmount();
                    $scope.changeTotalDiscount();

                    if ( $scope.amounts.redeemDiscount >= ($scope.amounts.originalTotalAmount - $scope.amounts.couponDiscount) ){
                        $rootScope.$emit('redeem:full', $scope.amounts);
                    }
                    else{
                        $rootScope.$emit('redeem:partial', $scope.amounts);
                    }

                };

                $scope.changeCashGoing = function() {

                    $scope.redeem.pointsToCurr = ( $scope.redeem.cashGoing || 0 ).toFixed(2);
                    $scope.redeem.pointsGoing  = ($scope.redeem.cashGoing / $scope.redeem.ratio);
                    $scope.amounts.redeemDiscount = parseFloat($scope.redeem.pointsToCurr);
                    $scope.changeNewAmount();
                    $scope.changeTotalDiscount();

                    if ( $scope.amounts.redeemDiscount >= ($scope.amounts.originalTotalAmount - $scope.amounts.couponDiscount) ){
                        $rootScope.$emit('redeem:full', $scope.amounts);

                    }
                    else{
                        $rootScope.$emit('redeem:partial', $scope.amounts);
                    }

                };

                $scope.changeNewAmount = function () {
                    
                    $scope.amounts.newAmount = $scope.amounts.originalTotalAmount - parseFloat( $scope.amounts.redeemDiscount );

                    if ($scope.amounts.newAmount <= 0 ) {
                        $scope.amounts.newAmount = 0;
                    }
               
                    $scope.amounts.newAmount = parseFloat($scope.amounts.newAmount).toFixed(2);
                    $rootScope.$emit('amountChanged:total', $scope.amounts.newAmount);
                };   

                $scope.changeTotalDiscount = function () {                    
                    $scope.amounts.discountAmount = parseFloat( $scope.amounts.redeemDiscount ).toFixed(2);                    
                    $rootScope.$emit('amountChanged:discount', $scope.amounts.discountAmount);
                };

                $scope.changeShippingAmount = function () {
                    $scope.amounts.shippingAmount = parseFloat( $scope.amounts.shippingAmount ).toFixed(2);
                    $rootScope.$emit('amountChanged:shipping', $scope.amounts.shippingAmount);                    
                };

              



                $scope.serviceCalled = {};
                $scope.serviceCalled['ORDER_PLACED'] = false ;
                $scope.serviceCalled['ORDER'] = false ;
                $scope.serviceCalled['REDEEM'] = false;

                $scope.order = {
                    
                }


                var unBindOrderAddress = $rootScope.$on('order:cart', function(eve, order){
                    $scope.order =  order;
                });


                var unBindCartUpdated = $rootScope.$on('cart:updated', function (eve, cartObj) {
                    
                    if( cartObj.source !=='reset' ){
                        
                        $scope.amounts.originalTotalAmount = cartObj.cart.totalPrice.amount;                        
                    
                    }

                    $scope.amounts.redeemDiscount = 0;
                    $scope.amounts.discountAmount = 0;
                    $rootScope.$emit('amountChanged:total', $scope.amounts.originalTotalAmount);
                    $rootScope.$emit('amountChanged:discount', $scope.amounts.discountAmount);
                    
                    if ( cartObj.source !=='reset' ) {

                        $scope.calcAmounts();

                        $scope.redeem.cashGoing = 0;
                        $scope.redeem.pointsGoing = 0;
                        $scope.redeem.pointsToCurr = 0;
                    }

                    if ( $scope.thisUser.isMember ) {
                        $scope.setUserMaxPoints();
                    }
                });

                $scope.isOrderPlaced = false;

                var unBindOrderPlaced = $rootScope.$on('order:placed', function (eve, orderData) {
                    
                    $scope.isOrderPlaced = true;

                    if ( $scope.thisUser.isMember ) {

                        if ( ! $scope.serviceCalled['ORDER_PLACED'] ) {

                            $scope.serviceCalled['ORDER_PLACED'] = true;
                            $scope.doMemberActivitiesOnCheckout($scope.thisUser.hybrisUser.id, orderData.orderId);
                        }
                    }
                });


                var unBindCouponRemoved = $rootScope.$on('coupon:removed', function (e) {
                    $scope.isSliderDisabled = false;
                    $scope.showApplyPoints = true;
                });



                $scope.postOrderActivity = function (customerId, transactionAmount, orderId) {
                    
                    var totalItems  = 0;
                    angular.forEach($scope.cart.items, function(item){
                        totalItems = totalItems + item.quantity;
                    });
                    var orderActivity = {
                        customerId: customerId,
                        activityType: 'ORDER',
                        transactionAmount: transactionAmount,
                        refId: orderId,
                            transactionCurrency :GlobalData.getCurrencyId(),
                            rulesPayload : {
                                productAttributes :[],
                                orderAttributes : {
                                  transactionCurrency :GlobalData.getCurrencyId(),
                                  total : $scope.amounts.originalTotalAmount,
                                  subTotal : $scope.amounts.originalAmount,
                                  shippingAmount : $scope.amounts.shippingAmount,
                                  discountAmount : $scope.amounts.discountAmount,
                                  shippingCountry: $scope.order.shipTo.country,
                                  shippingState : $scope.order.shipTo.state,
                                  totalItems : totalItems,
                                  customAttributes:[]
                                }
                            },
                    };

                        LoyaltySvc.getProductAttributes($scope.cart).then(function(productAttributes){

                                orderActivity.rulesPayload.productAttributes = productAttributes;

                    if ( ! $scope.serviceCalled['ORDER'] ) {

                        $scope.serviceCalled['ORDER'] = true ;

                        LoyaltySvc.postMemberActivity(orderActivity).then(

                            function(responseMemberActivity) {
                                
                                $rootScope.$emit('loyalty:orderId', orderId)

                            },

                            function(errorresponse) {
                                $scope.serviceCalled['ORDER'] = false;
                            }
                        ); 
                    }
                        });
                };

                $scope.postRedeemActivity = function (customerId, pointsGoing, orderId) {                   

                    var redeemActivity = {
                        customerId: customerId,
                        activityType: 'REDEEM',
                        pointsRedeemed: pointsGoing,
                        transactionAmount: 0,      
                        refId: orderId,
                        rulesPayload : {
                                productAttributes :[],
                                orderAttributes : {
                                  transactionCurrency :GlobalData.getCurrencyId(),
                                  total : '',
                                  subTotal : '',
                                  shippingAmount :'',
                                  discountAmount : '',
                                  shippingCountry: "",
                                  shippingState : "",
                                  customAttributes:[]
                                }
                            },                  
                    };
                     
                     var responseMemberActivityRedeem ;

                    if ( ! $scope.serviceCalled['REDEEM'] ) {

                        return LoyaltySvc.postMemberActivity(redeemActivity).then(

                            function(responseMemberActivity) {

                                $scope.serviceCalled['REDEEM'] = true;
                                responseMemberActivityRedeem = responseMemberActivity;
                            }
                        );
                    }
                };

                $scope.doMemberActivitiesOnCheckout = function(customerId, orderId) {
                    
                    LoyaltySvc.setAmountsAfterOrder($scope.amounts);
                    //$scope.postOrderActivity(customerId, $scope.amounts.originalAmount, orderId) ;
                    if ( $scope.isLoyaltyPointsApplied ) {
                        $scope.postRedeemActivity(customerId, $scope.redeem.pointsGoing, orderId).then(

                            function(redeemResponse) {
                                $scope.postOrderActivity(customerId, $scope.amounts.originalAmount, orderId);
                            }
                        );
                    }

                    else {
                        $scope.postOrderActivity(customerId, $scope.amounts.originalAmount, orderId) ;
                    }
                };

                $scope.$on('$destroy', unBindCartUpdated);
                $scope.$on('$destroy', unBindOrderPlaced);
                $scope.$on('$destroy', unBindUserEvent);
                $scope.$on('$destroy', unBindCouponRemoved);

                $scope.$on('$destroy', function(){
                    if($scope.isOrderPlaced === false){
                        $scope.removeLoyaltyPoints();
                    }
                });


                $scope.init = function () {
                    $scope.getUser();
                    $scope.removeLoyaltyPoints();
                };
                $scope.init();               
            }
        ]);