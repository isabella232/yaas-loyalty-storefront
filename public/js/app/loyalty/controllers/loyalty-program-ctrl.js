
    angular.module('ds.loyalty')

       .controller('RegisterForLoyaltyProgramCtrl', ['$rootScope', '$scope', '$injector', '$modalInstance', 'userData',

            function ($rootScope, $scope, $injector, $modalInstance, userData) {

                $scope.userData = userData;
                $scope.myUser = {};
                $scope.wrongReferral = true;
                var LoyaltySvc = $injector.get('LoyaltySvc');
                var cookieSvc = $injector.get('CookieSvc');

                $scope.getLoyaltyPrograms = function() {

                    $scope.loyaltyPrograms = [];

                    LoyaltySvc.getLoyaltyPrograms().then(

                        function(loyaltyProgramData) {

                            $scope.loyaltyPrograms.push(loyaltyProgramData[0]);
                            $scope.userProgram = $scope.loyaltyPrograms[0].programId;
                            $scope.userProgramName = $scope.loyaltyPrograms[0].loyaltyProgramName;
                        }
                    );
                };

                $scope.init = function() {
                    $scope.getLoyaltyPrograms();
                };

                 $scope.init();

                $scope.closeModal = function() {
                    $modalInstance.dismiss();
                };


                var loyaltyProgramRegistration = function (user) {
                    LoyaltySvc.registerForMembership(user).then(
                        function (registrationResponse) {
                            $scope.wrongReferral = true;
                            LoyaltySvc.getMemberData(user.customerId);
                            if ( $rootScope.loyaltyConfig.enableTellAFriend) {
                                $scope.closeModal();
                            }
                        },
                        function (error) {
                            $scope.wrongReferral = true;
                            $scope.myUser.referraledCode = '';
                        }
                    );
                };

                $scope.registerCustomerForProgram = function() {


                    var user = {
                        email: $scope.userData.email,
                        customerId: $scope.userData.customerId,
                        loyaltyProgramId: $scope.userData.loyaltyProgramId,
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

        .controller('LoyaltyProgramCtrl', ['$rootScope', '$scope', '$injector',

            function ($rootScope, $scope, $injector) {

                var LoyaltySvc = $injector.get('LoyaltySvc');
                var cookieSvc = $injector.get('CookieSvc');
            
                $scope.registrationServiceCalled = false;
                var $modal = $injector.get('$uibModal');
                $scope.wrongReferral = true;
                $scope.myUser = {};

                $scope.registrationController = function($scope, GlobalData) {

                    $scope.loyaltyConfig =  $rootScope.loyaltyConfig;

                    $scope.loyaltyProgram = {

                    };

                    // $scope.site =  GlobalData.getSite();
                    
                    $scope.languageCode =  GlobalData.getLanguageCode();


                    $scope.wantLoyaltyProgram = false;

                    $scope.getLoyaltyPrograms = function () {

                        LoyaltySvc.getLoyaltyPrograms().then(

                            function (loyaltyProgramdata) {                              
                                $scope.loyaltyProgram = loyaltyProgramdata[0];
                            }
                        );
                    };

                    $scope.init = function () {

                        $scope.loyaltyProgram = {

                        };

                        $scope.wantLoyaltyProgram = false;

                        $scope.user = {
                            referraledCode: ''
                            // preferredLanguage: ''
                        };

                        // var idx = $scope.site.languages.indexOf($scope.languageCode);

                        // if ( idx < 0 ) {
                        //     idx = 0;
                        // }

                        // $scope.user.preferredLanguage = $scope.site.languages[idx];

                        $scope.getLoyaltyPrograms();
                    };

                    $scope.getLoyaltyProgramMembership = function() {
                       
                        $scope.modalInstance = $scope.openLoyaltyProgramMembershipModal();
                    };                   

                    $scope.openLoyaltyProgramMembershipModal = function() {

                        return $modal.open({
                            templateUrl: 'js/app/loyalty/templates/signup_for_loyalty_program_modal.html',
                            controller: 'RegisterForLoyaltyProgramCtrl',
                            resolve: {
                                userData: function () {
                                  return $scope.userData;
                              }
                          }
                        });                       
                    };


                    $scope.init();


                    var loyaltyProgramRegistration = function (user) {
                        LoyaltySvc.registerForMembership(user).then(function (response) {
                            $scope.registrationServiceCalled = true;
                        }, function (response) {
                            $scope.registrationServiceCalled = false;
                            if(response.status === 404 && response.message === "INVALID_REF_CODE"){
                                $scope.userData = user;
                                $scope.getLoyaltyProgramMembership();
                            }
                        });
                    };

                    $scope.$on('user:signedup', function( eve, userData ) { 
                        
                        $scope.$on('user:signedin', function() { 

                            if( $scope.wantLoyaltyProgram || !$rootScope.loyaltyConfig.showReward ) {

                                userData.loyaltyProgramId = $scope.loyaltyProgram.programId;
                                userData.referralCode = $scope.user.referraledCode;   
                                userData.preferredLanguage = $scope.languageCode ;                         

                                if ( ! $scope.registrationServiceCalled ) {

                                    $scope.registrationServiceCalled = true;

                                    /*
                                        If yProfile package is subscribed for the particular tenant, then generate the consent reference and pass the same id to the Loyalty member registration service as the custom attributes
                                     */
                                    
                                    LoyaltySvc.checkForHybrisProfileSubscription().then(function (subscriptionData) {
                                        try {
                                            return ( subscriptionData.status === 'ACTIVE' );
                                        } catch ( exception ) {
                                            return false;
                                        }
                                    }).then(function (subscriptionStatus) {
                                        if ( subscriptionStatus ) {
                                                var consentReference =  cookieSvc.getConsentReferenceCookie();
                                                userData = angular.extend(userData, {
                                                    customAttributes: [{
                                                        cname: 'consentReference',
                                                        cvalue: consentReference
                                                    }]
                                                });
                                                loyaltyProgramRegistration(userData);


                                        } else {
                                            loyaltyProgramRegistration(userData);
                                        }
                                    }, function (response) {
                                        loyaltyProgramRegistration(userData);
                                    });
                                }
                            }
                        });
                    });
                };
            }
        ]);