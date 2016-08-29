
           
                    apis: {


                        core: {

                            url: '/hybris/dev-loy-member/v1',

                            program: {
                                loyaltyPrograms: '/hybris/dev-loy-member/v1/loyaltyPrograms',
                                tiers: '/hybris/dev-loy-member/v1/tiers'
                            },

                            member: {
                                members: '/hybris/dev-loy-member/v1/members',
                                activities: '/hybris/dev-loy-member/v1/memberActivities'
                            },

                            mash: {
                                activities: '/hybris/dev-loy-member/v1/activities',
                                registration: '/hybris/dev-loy-member/v1/memberRegistrations'
                            },

                            discount : {
                                loyaltyDiscount : '/hybris/dev-loy-member/v1/discount',
                                remove : '/hybris/dev-loy-member/v1/discount/remove'
                            }
                        },


                        config: {

                            url: '/hybris/dev-loy-config/v1/',

                            loyaltyConfig: '/hybris/dev-loy-config/v1/laasConfigurations',
                            programConfig: '/hybris/dev-loy-config/v1/programConfigurations'
                        },


                        engine: {

                            url: '/hybris/dev-loy-rule/v1',

                            fireRule: '/hybris/dev-loy-rule/v1/dummyFire',
                            rewardInfo: '/hybris/dev-loy-rule/v1/rewardInfo',
                        },

                        
                        advocacy: {

                            url: '/hybris/dev-loy-advocacy/v1',

                            reviewRating :'/hybris/dev-loy-advocacy/v1/ratingReviews',
                            ratingReview: '/hybris/dev-loy-advocacy/v1/ratingReviewMashup',
                            sendReferral :'/hybris/dev-loy-advocacy/v1/sendReferral'
                        },

                        wallet: {
                            
                            googleWallet : '/hybris/dev-loy-google-wallet/v1/',
                            appleWallet:'/hybris/dev-loy-apple-wallet/v1/STORECARD/',
                            appleWalletEndPoint : '/generateWalletUrl'

                        },

                        hybrisProfile: {
                            consentReference: '/hybris/profile-consent/b2',
                            analytics: '/hybris/dev-yprofile-analytics/v1'
                        },


                    }               
                