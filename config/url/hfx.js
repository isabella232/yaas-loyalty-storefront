
           
                    apis: {


                        core: {

                            url: '/hybris/hfx-loy-member/v1',

                            program: {
                                loyaltyPrograms: '/hybris/hfx-loy-member/v1/loyaltyPrograms',
                                tiers: '/hybris/hfx-loy-member/v1/tiers'
                            },

                            member: {
                                members: '/hybris/hfx-loy-member/v1/members',
                                activities: '/hybris/hfx-loy-member/v1/memberActivities'
                            },

                            mash: {
                                activities: '/hybris/hfx-loy-member/v1/activities',
                                registration: '/hybris/hfx-loy-member/v1/memberRegistrations'
                            },

                            discount : {
                                loyaltyDiscount : '/hybris/hfx-loy-member/v1/discount',
                                remove : '/hybris/hfx-loy-member/v1/discount/remove'
                            }
                        },


                        config: {

                            url: '/hybris/hfx-loy-config/v1/',

                            loyaltyConfig: '/hybris/hfx-loy-config/v1/laasConfigurations',
                            programConfig: '/hybris/hfx-loy-config/v1/programConfigurations'
                        },


                        engine: {

                            url: '/hybris/hfx-loy-rule/v1',

                            fireRule: '/hybris/hfx-loy-rule/v1/dummyFire',
                            rewardInfo: '/hybris/hfx-loy-rule/v1/rewardInfo',
                        },

                        
                        advocacy: {

                            url: '/hybris/hfx-loy-advocacy/v1',

                            reviewRating :'/hybris/hfx-loy-advocacy/v1/ratingReviews',
                            ratingReview: '/hybris/hfx-loy-advocacy/v1/ratingReviewMashup',
                            sendReferral :'/hybris/hfx-loy-advocacy/v1/sendReferral'
                        },


                        wallet: {
                            
                            googleWallet : '/hybris/hfx-loy-google-wallet/v1/',
                            appleWallet:'/hybris/hfx-loy-apple-wallet/v1/STORECARD/',
                            appleWalletEndPoint : '/generateWalletUrl'
                        },

                        hybrisProfile: {
                            consentReference: '/hybris/profile-consent/b2',
                            analytics: '/hybris/hfx-yprofile-analytics/v1'
                        },

                    }               
                