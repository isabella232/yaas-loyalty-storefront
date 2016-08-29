angular.module('ds.loyalty')

.controller('LoyaltyUserCtrl', ['$rootScope', '$scope', '$injector','$http','GlobalData',

    function($rootScope, $scope, $injector, $http, GlobalData) {

        var $modal = $injector.get('$modal');
        var $timeout = $injector.get('$timeout');
        var LoyaltySvc = $injector.get('LoyaltySvc');
        var cookieSvc = $injector.get('CookieSvc');

        $scope.thisUser = $rootScope.thisUser;

        $scope.isConfigMaintained = $rootScope.isConfigMaintained;

        $scope.configData = $rootScope.loyaltyConfig;
        $scope.disableInvitation = true;
        $scope.wrongReferral = false;
        $scope.disableSave = false;  


        $scope.user = {};
        $scope.myUser = {};


        $scope.getUser = function() {

            LoyaltySvc.getUser().then(

                function(userData) {
                    $scope.thisUser = userData;
                    $scope.checkForMembership();
                    //$scope.getJwtToken();
                }
            );

        };

        $scope.getRewardInfo = function(memberId) {

            LoyaltySvc.getRewardInfoData(memberId).then(
                function(rewardData) {

                    $scope.dispNextTierFlag = true;
                    $scope.displayRewardInfo = false;

                    if(rewardData && rewardData.totalBalancePoints && rewardData.currentTierName)
                        $scope.displayRewardInfo = true;

                    $scope.totalRedeemablePoints = rewardData.totalBalancePoints;

                    $scope.nextTierThreshold = rewardData.nextTierThreshold;

                    $scope.userPresentTier = rewardData.currentTierName;


                    if (rewardData.nextTierThreshold === 0) {

                        $scope.dispNextTierFlag = false;

                        $scope.nextTierThreshold = rewardData.totalQualifyingPoints;

                    } else {

                        $scope.updagradableTier = rewardData.nextTierName;

                        $scope.remainingPoints = rewardData.nextTierThreshold - rewardData.totalQualifyingPoints;
                        
                        if($scope.remainingPoints <= 0){
                            $scope.dispNextTierFlag = false;
                            $scope.nextTierThreshold = rewardData.totalQualifyingPoints;
                        }
                    }



                    $timeout(function() {

                        $scope.dynamicValue = (rewardData.totalQualifyingPoints / $scope.nextTierThreshold) * 100;

                    }, 200);

                }
            );


        };

        $scope.getLoyaltyInfo = function(loyaltyUser) {

            LoyaltySvc.getLoyaltyProgramById(loyaltyUser.programId).then(

                function(programData) {
                    $scope.thisUser.program = programData.loyaltyProgramName;
                    $scope.thisUser.programId = programData.programId;
                }
            );

            LoyaltySvc.getTierInfo(loyaltyUser.tierId).then(

                function(tierdata) {
                    $scope.thisUser.tier = tierdata.name;
                }
            );
        };

        $scope.loyaltyPrograms = [];
        $scope.userProgram = '';

                $scope.userProgramName = '';

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


       $scope.registerCustomerForProgram = function() {

            $scope.disableSave = true; 

            var user = {
                email: $scope.thisUser.hybrisUser.contactEmail,
                customerId: $scope.thisUser.hybrisUser.id,
                loyaltyProgramId: $scope.userProgram,
                referralCode: $scope.myUser.referraledCode,
                firstName: $scope.thisUser.hybrisUser.firstName,
                lastName: $scope.thisUser.hybrisUser.lastName,
                preferredLanguage : $scope.languageCode
            };


            var loyaltyProgramRegistration = function (user) {
                LoyaltySvc.registerForMembership(user).then(function (response) {
                    $scope.wrongReferral = false;
                    $scope.disableSave = false; 
                    LoyaltySvc.getMemberData(user.customerId);
                    $scope.closeModal();
                    //GlobalData.setLanguage($scope.myUser.preferredLanguage);
                }, function (response) {
                    $scope.wrongReferral = true;
                    $scope.disableSave = false; 
                    $scope.myUser.referraledCode = "";
                });
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
        
        var modalInstance = {

        };

        $scope.site =  GlobalData.getSite();

        $scope.languageCode =  GlobalData.getLanguageCode();

        var idx = $scope.site.languages.indexOf($scope.languageCode);

        if ( idx < 0 ) {
            idx = 0;
        }

        $scope.myUser.preferredLanguage = $scope.site.languages[idx];

        $scope.getLoyaltyProgramMembership = function() {
            $scope.wrongReferral = false;

           if($scope.configData.enableTellAFriend){
                modalInstance = $modal.open({
                    templateUrl: 'js/app/loyalty/templates/signup_for_loyalty_program_modal.html',
                    scope: $scope
                });
            }
            else{
                $scope.registerCustomerForProgram();
            }

           
        };

        $scope.closeModal = function() {
            modalInstance.close();
        };

        $scope.checkForMembership = function() {
            if ($scope.thisUser.isMember) {
                $scope.getLoyaltyInfo($scope.thisUser.loyaltyUser);
                $scope.getRewardInfo($scope.thisUser.loyaltyUser.memberId);
                $scope.getJwtToken();
                $scope.detectAppleDevice();
            } else {
                $scope.getLoyaltyPrograms();
            }
        };

        $scope.openReferralModal = function() {

            modalInstance = $modal.open({
                templateUrl: 'js/app/loyalty/templates/referral_modal.html',
                scope: $scope
            });

        };

        $scope.openPreferredLanguageModal = function() {

            modalInstance = $modal.open({
                templateUrl: 'js/app/loyalty/templates/preferred_language_modal.html',
                scope: $scope
            });

        };

        $scope.updatePreferredLanguage = function(){
            var user = {
                preferredLanguage : $scope.myUser.preferredLanguage
            }
            LoyaltySvc.updateAccountDetails(user).then(function(){
                LoyaltySvc.getMemberData($scope.thisUser.hybrisUser.id);
                $rootScope.$broadcast('loyaltyInformation:updated');
              //  GlobalData.setLanguage($scope.myUser.preferredLanguage);
                $scope.closeModal();
            },
            function(){

            });

        };

        $scope.handleArray = function(event, data) {

            if (angular.isArray(data)) {

                if (event.keyCode === 32) {

                    if (data.length > 4) {

                        event.stopPropagation();
                        event.preventDefault();
                        return false;
                    }
                }
            }
        };



        /*$scope.sendInvitation = function(referralModel, referralForm) {

            if (referralForm.$valid) {

                $scope.closeModal();

                $scope.referredEmails = referralModel.emailList.join(', ');

                var referralData = {
                    customerId: $scope.thisUser.hybrisUser.id,
                    programId: $scope.thisUser.programId || $scope.userProgram,
                    referralCode: $scope.thisUser.loyaltyUser.referralCode,
                    programName: $scope.thisUser.program,
                    emails: referralModel.emailList
                };


                LoyaltySvc.sendReferralEmail(referralData).then(

                    function(response) {


                        modalInstance = $modal.open({
                            templateUrl: 'js/app/loyalty/templates/success_modal.html',
                            scope: $scope
                        });
                    }
                );

            }
            $scope.referral = {

            };
        };
*/
        $scope.disableInvitation = true;

        $scope.checkEmailValidity = function (referralModel){
            var pattern = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/; 
            if(angular.isArray(referralModel)){
                if(referralModel.length === 0)
                    $scope.disableInvitation = false;
                angular.forEach(referralModel, function (ratingOb) {
                if( ! pattern.test(ratingOb) || referralModel.length > 5) {
                    $scope.disableInvitation = false;
                }
                else
                    $scope.disableInvitation = true;
            });
            }
            
            else{
               if( ! pattern.test(referralModel) || referralModel.length > 5) {
                    $scope.disableInvitation = false;
                } 
                else
                $scope.disableInvitation = true; 
            }
               
        };


         $scope.select2Options = {
                    multiple: true,
                    'simple_tags': true,
                    tags: [],
                    maximumSelectionLength: 5
                };
         $scope.sendInvitation = function(referralModel, referralForm) {

            if (referralForm.$valid) {

                $scope.disableInvitation = false;

                $scope.emailList = [];
                for(var i=0 ; i < referralModel.emailList.length ; i++){
                     $scope.emailList[i] = referralModel.emailList[i];
                }
                
                $scope.referredEmails = $scope.emailList.join(', ');

                $scope.closeModal();

                var referralData = {
                    customerId: $scope.thisUser.hybrisUser.id,
                    programId: $scope.thisUser.programId || $scope.userProgram,
                    referralCode: $scope.thisUser.loyaltyUser.referralCode,
                    programName: $scope.thisUser.program,
                    emails: $scope.emailList
                };

                LoyaltySvc.sendReferralEmail(referralData).then(
                    function(response) {
                        modalInstance = $modal.open({
                            templateUrl: 'js/app/loyalty/templates/success_modal.html',
                            scope: $scope
                        });
                        $scope.disableInvitation = true;
                    },
                    function(error) {
                        $scope.disableInvitation = true;
                    }
                );

            }
            $scope.referral = {

            };
        };

        $scope.getJwtTokenCalled = 0;
        $scope.getURLForAppleWalletCalled = 0;

        $scope.getJwtToken = function(){
            if($scope.getJwtTokenCalled <1){
                $scope.getJwtTokenCalled = $scope.getJwtTokenCalled + 1 ;                        
                var data = {};
                LoyaltySvc.getJWTForGoogleWallet($scope.thisUser.hybrisUser.id, data).then(

                    function(walletData) {
                        gapi.savetowallet.render('saveToWallet', {
                            'jwt': walletData.tokenString
                        });
                    },
                    function(){
                        
                    }
                );
            }
        };

        $scope.showAddToAppleWallet = false;

        $scope.detectAppleDevice = function(){
            var uagent = navigator.userAgent.toLowerCase();
            if (uagent.search("iphone") > -1 || uagent.search("ipad") > -1 || uagent.search("ipod") > -1){
                $scope.getURLForAppleWallet();
            }
            else
              $scope.showAddToAppleWallet = false;
        };

        $scope.getURLForAppleWallet = function(){
            if($scope.thisUser.loyaltyUser.memberId && ($scope.getURLForAppleWalletCalled <1 ) ){
                $scope.getURLForAppleWalletCalled = $scope.getURLForAppleWalletCalled + 1 ;
                LoyaltySvc.getURLForAppleWallet($scope.thisUser.loyaltyUser.memberId).then(

                    function(response) {
                        $scope.appleWalletUrl = response.addToWalletUrl;
                        $scope.showAddToAppleWallet = true;

                    },
                    function(){
                        $scope.showAddToAppleWallet = false;
                    }
                );
            }
        };


        var unBindUserEvent = $rootScope.$on('loyaltyInformation:updated', function(event, eveObj) {
            $scope.thisUser = $rootScope.thisUser;
            $scope.checkForMembership();
        });

        $scope.$on('$destroy', unBindUserEvent);

        $scope.init = function() {
            $scope.getUser();
        };

        if($rootScope.isConfigMaintained){
            $scope.init();
        }

    }
]);
