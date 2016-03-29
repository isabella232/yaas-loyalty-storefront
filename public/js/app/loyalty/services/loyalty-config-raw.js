

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
                    
                    
                    //<Configs>
                };

                return LoyaltyConfig;
            }
        ]);