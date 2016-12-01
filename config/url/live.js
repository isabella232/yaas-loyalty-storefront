
           
                    apis: {


                        core: {

                            url: '/hybris/loy-member/v1',

                            program: {
                                loyaltyPrograms: '/hybris/loy-member/v1/loyaltyPrograms',
                                tiers: '/hybris/loy-member/v1/tiers'
                            },

                            member: {
                                members: '/hybris/loy-member/v1/members',
                                activities: '/hybris/loy-member/v1/memberActivities'
                            },

                            mash: {
                                activities: '/hybris/loy-member/v1/activities',
                                registration: '/hybris/loy-member/v1/memberRegistrations'
                            },

                            discount : {
                                loyaltyDiscount : '/hybris/loy-member/v1/discount',
                                remove : '/hybris/loy-member/v1/discount/remove'
                            }
                        },


                        config: {

                            url: '/hybris/loy-config/v1/',

                            loyaltyConfig: '/hybris/loy-config/v1/laasConfigurations',
                            programConfig: '/hybris/loy-config/v1/programConfigurations'
                        },


                        engine: {

                            url: '/hybris/loy-rule/v1',

                            fireRule: '/hybris/loy-rule/v1/dummyFire',
                            rewardInfo: '/hybris/loy-rule/v1/rewardInfo',
                        },

                        
                        advocacy: {

                            url: '/hybris/loy-advocacy/v1',

                            reviewRating :'/hybris/loy-advocacy/v1/ratingReviews',
                            ratingReview: '/hybris/loy-advocacy/v1/ratingReviewMashup',
                            sendReferral :'/hybris/loy-advocacy/v1/sendReferral'
                        },


                        wallet: {
                            
                            googleWallet : '/hybris/loy-google-wallet/v1/',
                            appleWallet:'/hybris/loy-apple-wallet/v1/STORECARD/',
                            appleWalletEndPoint : '/generateWalletUrl'
                        },

                        hybrisProfile: {
                            consentReference: '/hybris/profile-consent/b2',
                            analytics: '/hybris/live-yprofile-analytics/v1'
                        },

                    }               
                