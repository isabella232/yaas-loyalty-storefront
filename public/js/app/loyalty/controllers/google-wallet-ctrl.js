

	angular.module('ds.loyalty')

		.controller('GoogleWalletCtrl', ['$rootScope', '$scope', '$injector','$stateParams','LoyaltySvc',

			function ($rootScope, $scope, $injector, $stateParams, LoyaltySvc) {

                $scope.customerId = $stateParams.customerId;

                $scope.getJwtToken = function(){
                    LoyaltySvc.getJWTForGoogleWallet($scope.customerId).then(

                        function(walletData) {
                            
                            gapi.savetowallet.render('saveToWallet', {
                                'jwt': walletData.tokenString
                            });
                        }
                    );
                };

                 $scope.getJwtToken();


			}
		]);