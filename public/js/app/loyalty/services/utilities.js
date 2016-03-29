
	angular.module('ds.loyalty')

		.factory('Utilities', ['$rootScope', '$injector', 

			function($rootScope, $injector) {


				var appConfig = $injector.get('appConfig');
				var LoyaltyConfig = $injector.get('LoyaltyConfig');


				return {

					getTextDay: function(numDay) {
						var textDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
						return textDays[numDay];
					},

					getMonthDay: function(numMonth) {
						var textMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
						'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
						];
						return textMonths[numMonth];
					},

					getFormattedDate: function(epochTime) {

						if (epochTime == null) {
							epochTime = (new Date()).getTime();
						}

						while (Math.floor(epochTime).toString().length > 13) {
							epochTime /= 1000;
						}

						var newDate = new Date(parseFloat(epochTime));
						return this.getTextDay(newDate.getDay()) + ' ' + this.getMonthDay(newDate.getMonth()) + ' ' + newDate.getDate() + ' ' + newDate.getFullYear();
					},



					getApp: function () {

						var app = '';
						app = appConfig.app();
						return app;
					},

					getTenant: function () {

						var tenant = '';
						tenant = appConfig.storeTenant();
						return tenant;
					},

					getBaseUrl: function ( dontWantProtocol ) {

						var baseUrl = '';
						baseUrl = 'https://' + appConfig.dynamicDomain();
						return baseUrl;
					},

					getLoyaltyConfigurationUrl: function () {
						return this.getBaseUrl() + LoyaltyConfig.apis.config.loyaltyConfig;
					},

					getloyaltyProgramUrl: function () {
						return this.getBaseUrl() + LoyaltyConfig.apis.config.programConfig;
					},

					getTiersUrl: function () {
						return this.getBaseUrl() + LoyaltyConfig.apis.core.program.tiers;
					},

					getLoyaltyMembershipUrl: function () {   
						return this.getBaseUrl() + LoyaltyConfig.apis.core.member.members;
					},

					getMemberRegistrationUrl: function () {
						return this.getBaseUrl() + LoyaltyConfig.apis.core.mash.registration;
					},

					getMemberActivityPostUrl: function () {
						return this.getBaseUrl() + LoyaltyConfig.apis.core.mash.activities;
					},

					getMemberActivityUrl: function () {
						return this.getBaseUrl() + LoyaltyConfig.apis.core.member.activities;
					},

					getFireRuleUrl: function () {
						return this.getBaseUrl() + LoyaltyConfig.apis.engine.fireRule;
					},

					getReferralEmailUrl : function () { 

						return this.getBaseUrl() + LoyaltyConfig.apis.advocacy.sendReferral;
					},

					getProductReviewRatingUrl : function () { 

						return this.getBaseUrl() + LoyaltyConfig.apis.advocacy.reviewRating;
					},

					postProductReviewRatingUrl : function () { 

						return this.getBaseUrl() + LoyaltyConfig.apis.advocacy.ratingReview;
					},
                    
                    getRewardInfoDataUrl: function(){
						return this.getBaseUrl() + LoyaltyConfig.apis.engine.rewardInfo;
					},

					getGoogleWalletJWTUrl: function (customerId) {

						return this.getBaseUrl() +LoyaltyConfig.apis.wallet.googleWallet+customerId+'/loyaltyObject' ;

					},
					
					getApplyDiscountUrl: function () {
						return this.getBaseUrl() + LoyaltyConfig.apis.core.discount.loyaltyDiscount;
					},

					getRemoveDiscountUrl : function (customerId) {
						return this.getBaseUrl() + LoyaltyConfig.apis.core.discount.remove;
					},

					getAppleWalletUrl : function (customerId) {
						return this.getBaseUrl() + LoyaltyConfig.apis.wallet.appleWallet +customerId + LoyaltyConfig.apis.wallet.appleWalletEndPoint;
					}

				};
			}
		]);