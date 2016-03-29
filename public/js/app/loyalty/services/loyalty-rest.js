
    angular.module('ds.loyalty')

        .factory('LoyaltyREST', ['RESTSvc',

            function (RESTSvc) {

                var LoyaltyREST = {

                    getLoyaltyConfiguration: function (url) {
                        return RESTSvc.get(url);
                    },

                    getLoyaltyPrograms: function (url) {
                        return RESTSvc.get(url);
                    },

                    registerForMembership: function(url, memberData) {
                        return RESTSvc.post(url, memberData);
                    },

                    getUserLoyaltyMembership: function(url, userData) {
                        return RESTSvc.get(url, userData);
                    },

                    postMemberActivity: function(url, activityModel) {
                        return RESTSvc.post(url, activityModel);
                    },

                    getTiersOfProgram: function(url) {
                        return RESTSvc.get(url);                        
                    },

                    getTierInfo: function(url) {
                        return RESTSvc.get(url);                        
                    },

                    getUserPointsAccount: function(url) {
                        return RESTSvc.get(url);  
                    },


                    getProductRatings: function(url) {
                        return RESTSvc.get(url);                        
                    },
                    
                    getProductAvgRating: function(url) {
                        return RESTSvc.get(url);                        
                    },

                    getProductReview: function(url) {
                        return RESTSvc.get(url);                        
                    },

                    postProductReview: function(url, reviewData) {
                        return RESTSvc.post(url, reviewData);
                    },

                    applyCoupon: function(url) {
                        return RESTSvc.get(url);
                    },

                    fireDummyRule: function (url , dummyData) {
                        return RESTSvc.post(url, dummyData);
                    },

                    accountDetailsLoyalty: function(url, accountData){

                        return RESTSvc.put(url, accountData);
                    },
                    getRewardInfo: function(url){
                        return RESTSvc.get(url);
                    },

                    sendReferralEmail: function(url, data) {
                        return RESTSvc.post(url, data);
                    },

                    getProductReviewRating : function(url) {
                        return RESTSvc.get(url);
                    },

                    postProductReviewRating : function(url, data) {
                        return RESTSvc.post(url, data);
                    },

                    getProductRatingCounts : function(url) {
                        return RESTSvc.get(url);
                    },

                    getJWTForGoogleWallet: function(url, data) {
                        return RESTSvc.post(url, data);
                    },

                    getURLForAppleWallet : function(url) {
                        return RESTSvc.get(url);
                    },

                    postApplyLoyaltyPoints: function(url, data) {
                        return RESTSvc.post(url, data);
                    },

                    deleteLoyaltyPoints: function(url) {
                        return RESTSvc.delete(url);
                    }
                };

                return LoyaltyREST;
            }
        ]);