

    angular.module('ds.loyalty')

        .factory('LoyaltyConfig', ['$rootScope', 

            function ($rootScope) {

                var LoyaltyConfig = {

                    pointsToCurrencyKey: 'EARNING',

                    configData : {},

                    configFlags : { 
                        showReward : 'showReward', 
                        showCashBal : 'showCashBal' ,
                        enableTellAFriend : 'enableTellAFriend'               
                    },

                    conversionType : {
                        earning : 'EARNING',
                        redeeming : 'REDEEMING'
                    },
                    
                    
                    // Dynamic Configurations

            
                    apis: {


                        core: {

                            url: '/hybris/test-loy-member/v1',

                            program: {
                                loyaltyPrograms: '/hybris/test-loy-member/v1/loyaltyPrograms',
                                tiers: '/hybris/test-loy-member/v1/tiers'
                            },

                            member: {
                                members: '/hybris/test-loy-member/v1/members',
                                activities: '/hybris/test-loy-member/v1/memberActivities'
                            },

                            mash: {
                                activities: '/hybris/test-loy-member/v1/activities',
                                registration: '/hybris/test-loy-member/v1/memberRegistrations'
                            },

                            discount : {
                                loyaltyDiscount : '/hybris/test-loy-member/v1/discount',
                                remove : '/hybris/test-loy-member/v1/discount/remove'
                            }
                        },


                        config: {

                            url: '/hybris/test-loy-config/v1/',

                            loyaltyConfig: '/hybris/test-loy-config/v1/laasConfigurations',
                            programConfig: '/hybris/test-loy-config/v1/programConfigurations'
                        },


                        engine: {

                            url: '/hybris/test-loy-rule/v1',

                            fireRule: '/hybris/test-loy-rule/v1/dummyFire',
                            rewardInfo: '/hybris/test-loy-rule/v1/rewardInfo',
                        },

                        
                        advocacy: {

                            url: '/hybris/test-loy-advocacy/v1',

                            reviewRating :'/hybris/test-loy-advocacy/v1/ratingReviews',
                            ratingReview: '/hybris/test-loy-advocacy/v1/ratingReviewMashup',
                            sendReferral :'/hybris/test-loy-advocacy/v1/sendReferral'
                        },


                        wallet: {
                            
                            googleWallet : '/hybris/test-loy-google-wallet/v1/',
                            appleWallet:'/hybris/test-loy-apple-wallet/v1/STORECARD/',
                            appleWalletEndPoint : '/generateWalletUrl'

                        }

                    }
                };

                return LoyaltyConfig;
            }
        ]);