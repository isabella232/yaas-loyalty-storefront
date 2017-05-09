
    angular.module('ds.loyalty')

        .controller('SignupCheckoutCtrl', ['$rootScope', '$scope', 'LoyaltySvc', '$injector','GlobalData',

            function ($rootScope, $scope, LoyaltySvc, $injector,GlobalData) {

                var $state = $injector.get('$state');
                var CartSvc = $injector.get('CartSvc');
                var cookieSvc = $injector.get('CookieSvc');

                $scope.thisUser = $rootScope.thisUser;
                $scope.wrongReferral = false;
                $scope.configData = $rootScope.loyaltyConfig;
                $scope.user = {};
                $scope.myUser = {};
                $scope.disableSave = false; 
                var $modal = $injector.get('$uibModal');
                $scope.thisUser.cart = {

                }
                
                var unBindUserEvent = '';


                $scope.getUser = function () {

                    $scope.thisUser = $rootScope.thisUser;
                    unBindUserEvent = $scope.$broadcast('user:gotInfo', $scope.thisUser);
                };

                var unBindGotuserInfo = $scope.$on('user:gotInfo', function(event, userData) {
                    if( !$scope.thisUser.isMember ){
                        $scope.getLoyaltyPrograms();
                    }
                });


                $scope.wantLoyaltyProgram = false;

                var unBindUserEvent = $rootScope.$on('loyaltyInformation:updated', function (event, eveObj) {
                    $scope.thisUser = $rootScope.thisUser;
                    $scope.getLoyaltyPrograms();
                });

                $scope.getLoyaltyPrograms = function () {
                    
                    LoyaltySvc.getLoyaltyPrograms().then(

                        function(loyaltyProgramdata) {
                          
                            $scope.loyaltyProgram = loyaltyProgramdata[0];
                            $scope.userProgramName = $scope.loyaltyProgram.loyaltyProgramName;
                        }
                    );
                 };

                $scope.getLoyaltyProgramMembership = function() {
                    $scope.wrongReferral = false;

                    if($scope.configData.enableTellAFriend){
                         modalInstance = $modal.open({
                        templateUrl: 'js/app/loyalty/templates/signup_for_loyalty_program_modal.html',
                        scope: $scope
                    });
                    }
                    else
                    {
                        $scope.registerCustomerForProgram();
                    }                   
                };

                $scope.init = function () {
                   /* $scope.thisUser.cart = CartSvc.getLocalCart();
                    if ( $scope.thisUser.cart.items instanceof Array ) {*/
                        $scope.getUser();
                   /* }*/
                };

                $scope.init();

               /* var unBindOrderPlaced = $rootScope.$on('order:placed', function (eve, orderData) {
                    if ( ! $scope.thisUser.isMember ) {
                        $scope.register();
                        $scope.thisUser.isMember = false;
                    }
                });

               $scope.$on('$destroy', unBindOrderPlaced);*/
                var modalInstance = {

                };

                $scope.closeModal = function() {
                    modalInstance.close();
                };




                var loyaltyProgramRegistration = function (user) {
                    LoyaltySvc.registerForMembership(user).then(function (response) {
                        $scope.wrongReferral = false;
                        $scope.disableSave = false; 
                        LoyaltySvc.getMemberData(user.customerId);
                        if ( $scope.configData.enableTellAFriend ) {
                            $scope.closeModal();
                        }
                    }, function (error) {
                        $scope.wrongReferral = true;
                        $scope.disableSave = false; 
                        $scope.myUser.referraledCode = "";
                    });
                };

                $scope.registerCustomerForProgram = function () {   

                    $scope.disableSave = true;     
                    var user = {
                        email: $scope.thisUser.hybrisUser.contactEmail,
                        customerId: $scope.thisUser.hybrisUser.id,
                        loyaltyProgramId: $scope.loyaltyProgram.programId,
                        firstName: $scope.thisUser.hybrisUser.firstName,
                        lastName: $scope.thisUser.hybrisUser.lastName,
                        referralCode: $scope.myUser.referraledCode
                    };

                    LoyaltySvc.checkForHybrisProfileSubscription().then(function (subscriptionData) {
                        try {
                            return ( subscriptionData.status === 'ACTIVE' );
                        } catch ( exception ) {
                            return false;
                        }
                    }).then(function (subscriptionStatus) {
                        if ( subscriptionStatus ) {
                            var consentReference =  cookieSvc.getConsentReferenceCookie();
                            user = angular.extend(user, {
                                    customAttributes: [{
                                        cname: 'consentReference',
                                        cvalue: consentReference
                                    }]
                                });
                               loyaltyProgramRegistration(user);

                        } else {
                            loyaltyProgramRegistration(user);
                        }
                    }, function (response) {
                        loyaltyProgramRegistration(user);
                    });
                };
            }
        ])
    ;