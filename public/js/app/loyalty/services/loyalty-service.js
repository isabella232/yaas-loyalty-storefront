
    angular.module('ds.loyalty')

        .factory('LoyaltySvc', ['settings', 'Utilities', 'LoyaltyREST', '$injector', '$rootScope',

            function (settings, Utilities, LoyaltyREST, $injector, $rootScope) {

                var $q = $injector.get('$q');
                var AuthSvc = $injector.get('AuthSvc');
                var AccountSvc = $injector.get('AccountSvc');
                var GlobalData = $injector.get('GlobalData');
                var LoyaltyConfig = $injector.get('LoyaltyConfig');
                var $translate = $injector.get('$translate');

                var orderAmounts = {

                };

                var LoyaltyService = {

                    getProductAttributes : function (cart) {
        
                        var productAttributesArray = [];

                        var self = this;

                        var defered = $q.defer();

                        var ctr = 0;

                        angular.forEach(cart.items, function(item){

                            self.getProductDetails(item.product.id).then(function (product) {

                                ctr += 1;

                                if( angular.isArray(product.categories) && product.categories.length > 0 ){

                                    angular.forEach(product.categories, function(category){ 
                                        category.categoryId =  category.id;
                                        delete category.image;
                                        delete category.metadata;
                                        delete category.published;
                                        delete category.id;
                                    });                                
                                }


                                var productAttributesObj = {
                                    productId : item.product.id,
                                    productName : product.product.name,
                                    price : item.price.effectiveAmount,
                                    quantity  : item.quantity,
                                    imageURL : item.product.images[0].url,
                                    productCategory : product.categories,
                                    customAttributes:[]
                                };


                                productAttributesArray.push(productAttributesObj);


                                if (ctr === cart.items.length) {
                                    defered.resolve(productAttributesArray);
                                }
                            });
                        });
                                          
                        return defered.promise;
                    },

                    applyLoyaltyPoints :  function (data) {

                        var url = Utilities.getApplyDiscountUrl();
                        var defered = $q.defer();

                        LoyaltyREST.postApplyLoyaltyPoints(url, data).then (

                            function (response) {
                                defered.resolve(response);
                            }, function(response) {
                                defered.reject(response);
                            }
                         );
                        
                        return defered.promise;
                    },

                    removeLoyaltyPoints :  function (data) {

                        var url = Utilities.getRemoveDiscountUrl();
                        url = url + '/'+data.cartId + '/'+data.loyaltyDiscountId;
                        var defered = $q.defer();

                        LoyaltyREST.deleteLoyaltyPoints(url, data).then (

                            function (response) {
                                defered.resolve(response);
                            }, function(response) {
                                defered.reject(response);
                            }
                         );
                        
                        return defered.promise;
                    },


                    getCurrencyConverter: function () {

                        var converter = 0;
                        var url = Utilities.getLoyaltyConfigurationUrl(); 

                        var defered = $q.defer();

                        LoyaltyREST.getLoyaltyConfiguration(url).then (

                            function (configOb) {
                                 
                               configOb[0].conversionRatio.forEach(function(v,i){
                                 
                                     if ( v.conversionType === LoyaltyConfig.pointsToCurrencyKey && v.currencySymbol === GlobalData.getCurrencyId()) {                                          
                                          converter = v.pointValue ;                                          
                                          defered.resolve(converter);
                                     }
                               })
                            }
                         );
                        
                        return defered.promise;
                    },

                    getPointsToCurrency: function ( points, currVal ) {
                        return points * currVal;
                    },

                    getCurrencyToPoints: function ( points, currVal ) {
                        return points / currVal;                        
                    },

                    setAmountsAfterOrder: function (amount) {                          
                        orderAmounts = amount;
                    },

                    getAmountsAfterOrder: function() {                             
                       return orderAmounts;
                    },
                    
                    registerForMembership: function(customer) {

                        var url = Utilities.getMemberRegistrationUrl();
                        return LoyaltyREST.registerForMembership(url, customer);
                    },

                    getLoyaltyConfiguration: function () {
                        var url = Utilities.getLoyaltyConfigurationUrl();
                        return LoyaltyREST.getLoyaltyConfiguration(url);
                    },

                    getLoyaltyPrograms: function () {
                        var url = Utilities.getloyaltyProgramUrl() + '?pageNumber=1&pageSize=1';
                        return LoyaltyREST.getLoyaltyPrograms(url);
                    },

                    getLoyaltyProgramById: function (programId) {
                        var url = Utilities.getloyaltyProgramUrl() + '/' + programId;
                        return LoyaltyREST.getLoyaltyPrograms(url);
                    },

                    getTiersOfProgram: function (programId) {
                        var url = Utilities.getloyaltyProgramUrl() + '?q=programId:' + programId;
                        return LoyaltyREST.getTiersOfProgram(url);
                    },

                    getTierInfo: function (tierId) {
                        var url = Utilities.getTiersUrl() + '/' + tierId;
                        return LoyaltyREST.getLoyaltyPrograms(url);
                    },

                    getMemberActivities: function(membershipId, pageSize) {

                       
                        var url = Utilities.getMemberActivityUrl() + '?q=memberId:(\"' + membershipId +'\")&'+'pageSize='+pageSize+'&sort=metadata:desc';
                        return LoyaltyREST.getUserPointsAccount(url);                        
                    },

                    getMemberActivitiesForOrder : function(orderId) {
                        var url = Utilities.getMemberActivityUrl() + '?q=refId:('+ orderId +')';
                        return LoyaltyREST.getUserPointsAccount(url);                        
                    },

                    isUserMember: function(customerId) {
                        var url = Utilities.getLoyaltyMembershipUrl();
                        url += '?q=customerId:' + customerId;
                        return LoyaltyREST.getUserLoyaltyMembership(url);
                    },

                    postMemberActivity: function(activityModel) {
                        var url = Utilities.getMemberActivityPostUrl();
                        return LoyaltyREST.postMemberActivity(url, activityModel);
                    },

                    getProductDetails: function(productId) {
                        var PriceProductREST = $injector.get('PriceProductREST');
                         return PriceProductREST.ProductDetails.one('productdetails', productId).customGET('', {expand: 'media'});
                    },

                    applyCoupon: function(couponCode) {                        
                        var url = Utilities.getCouponUsageUrl() + '/' + couponCode;
                        return LoyaltyREST.applyCoupon(url);                        
                    },

                    fireDummyRule: function(dummyRuleData) {                        
                        var url = Utilities.getFireRuleUrl();
                        return LoyaltyREST.fireDummyRule(url, dummyRuleData);                        
                    },

                    sendReferralEmail : function(data) {
                        var url = Utilities.getReferralEmailUrl();
                        return LoyaltyREST.sendReferralEmail(url, data);
                    },
                    getProductReviewRating : function(productId, params) {
                        var url = Utilities.getProductReviewRatingUrl();
                        url += '?q=sku:' + productId;

                        if (params) {
                            url += '&' + params;
                        }
                        return LoyaltyREST.getProductReviewRating(url);
                    },
                    getProductReviewer : function(productId, user) {
                        var url = Utilities.getProductReviewRatingUrl();
                        url += '?q=sku:' + productId;

                        if (user) {
                            url += ' ' + user;
                        }
                        return LoyaltyREST.getProductReviewRating(url);
                    },

                    postProductReviewRating : function(data) {
                        var url = Utilities.postProductReviewRatingUrl();
                        return LoyaltyREST.postProductReviewRating(url, data);
                    },

                    getProductAvgRating: function (productId) {
                        var url = Utilities.getProductReviewRatingUrl();
                        url += '/aggr?totalCount=true&q=sku:' + '\"' + productId + '\"' + '&avg=rating';
                        return LoyaltyREST.getProductAvgRating(url);                        
                    },

                    getProductRatingCounts : function (productId) {
                        var url = Utilities.getProductReviewRatingUrl();
                        url += '/' + productId + '/ratingCount';
                        return LoyaltyREST.getProductRatingCounts(url);                        
                    },

                    getProductReviewCount: function (productId) {
                        var url = Utilities.getProductReviewRatingUrl();
                        url += '/aggr?totalCount=true&q=sku:' + productId + ' ' + 'reviewComment:""';
                        return LoyaltyREST.getProductAvgRating(url);                        
                    },




                    getFireRuleOjbect: function () {

                        return {

                            ruleType: 'ORDER',

                            memberActivity: {
                                createdBy: 'SYSTEM',
                                memberActivityId: '',
                                memberId: '',
                                quarter: 'Q_1',
                                week: 1,
                                refId: '',
                                activityType: 'ORDER',
                                transactionAmount: 0,
                                transactionCurrency: GlobalData.getCurrencyId(),
                                transactionPoints: 0,
                                qualifyingPoints: 0,
                                rulesApplied: ['TEST'],
                                programId: '',
                                tierId: '',
                                discountId: '',
                                updatedBy: 'SYSTEM',
                                activityStatus: 'ACTIVE',
                                year: '',
                                month: 'JAN'
                            },

                            member: {
                                
                            },
                            customAttributes: [],
                            productAttributes : [],
                            orderAttributes : {
                              transactionCurrency :GlobalData.getCurrencyId(),
                              total:'',
                              subTotal:'',
                              shippingAmount:'',
                              discountAmount:'',
                              shippingCountry:'',
                              shippingState:'',
                              customAttributes:[]
                            }
                        };
                    },

                    getRewardInfoData: function(memberId){

                        var url = Utilities.getRewardInfoDataUrl()+ '/' + memberId;
                        return LoyaltyREST.getRewardInfo(url); 


                    },

                    getUser: function () {

                        var self = this;

                        var deferred = $q.defer();

                        $rootScope.thisUser = {

                            isUser: false,
                            isMember: false,

                            hybrisUser: {

                            },

                            loyaltyUser: {

                            }
                        };

                        if ( AuthSvc.isAuthenticated() ) {

                            $rootScope.thisUser.isUser = true;

                            AccountSvc.account().then(

                                function (userData) {

                                    $rootScope.thisUser.hybrisUser = userData;
                                    $rootScope.thisUser.hybrisUser.fullName = $rootScope.thisUser.hybrisUser.firstName + ' ' + $rootScope.thisUser.hybrisUser.lastName;

                                    var customerId = userData.id;

                                    if ( customerId && customerId !== 'C000000000' ) {

                                       self.isUserMember(customerId).then(

                                            function (memberData) {

                                                if ( memberData.length > 0 ) {
                                                    
                                                    $rootScope.thisUser.isMember = true;
                                                    $rootScope.thisUser.loyaltyUser = memberData[0];

                                                    $rootScope.$emit('loyaltyInformation:updated', $rootScope.thisUser);
                                                }

                                                deferred.resolve( $rootScope.thisUser );
                                            }
                                        ); 
                                    } 

                                    else {
                                        deferred.resolve( $rootScope.thisUser );
                                    }                                        
                                }
                            );
                        }

                        else {
                            deferred.resolve( $rootScope.thisUser );
                        }

                        return deferred.promise;
                    },

                    getMemberData: function (customerId) {

                        var deferred = $q.defer();

                        this.isUserMember(customerId).then(

                            function (memberData) {

                                if ( memberData.length > 0 ) {
                                    
                                    $rootScope.thisUser.isMember = true;
                                    $rootScope.thisUser.loyaltyUser = memberData[0];
                                    $rootScope.$emit('loyaltyInformation:updated', $rootScope.thisUser);
                                    deferred.resolve( memberData[0] );
                                }
                            }
                        );

                        return deferred.promise;
                    },



                    
                    getConfigData :  function() {

                        var deferred = $q.defer();

                        if ( angular.isArray(LoyaltyConfig.configData) ) {
                            if(LoyaltyConfig.configData === [])
                                $rootScope.isConfigMaintained = false;
                            else
                                $rootScope.isConfigMaintained = true;
                            deferred.resolve(LoyaltyConfig.configData);
                        } else {

                            LoyaltyREST.getLoyaltyConfiguration(Utilities.getLoyaltyConfigurationUrl()).then(

                                function (configData) {

                                    LoyaltyConfig.configData = configData;
                                    if(LoyaltyConfig.configData === [])
                                        $rootScope.isConfigMaintained = false;
                                    else
                                        $rootScope.isConfigMaintained = true;
                                    deferred.resolve(configData);
                                }
                            );
                        }

                        return deferred.promise;
                    },
                    

                    getSilentGratification: function() {

                        var deferred = $q.defer();

                        this.getConfigData().then(

                            function (configData) {

                                var result = false;
                                var matchedResult = false;

                                if (configData.length > 0) {

                                    configData[0].configData.forEach(function (configOb) {

                                        if ( ! matchedResult ) {

                                            if ( configOb.name === LoyaltyConfig.configFlags.showReward ) {

                                                matchedResult = true;

                                                result =  (configOb.value === 'true');
                                                $rootScope.loyaltyConfig.showReward = result;
                                            }
                                        }
                                    });
                                    
                                    deferred.resolve(result);
                                }
                            }
                        );

                        return deferred.promise;
                    },

                    getShowCash: function() {

                        var deferred = $q.defer();

                        this.getConfigData().then(

                            function (configData) {

                                var result = false;
                                var matchedResult = false;

                                if (configData.length > 0) {

                                    configData[0].configData.forEach(function (configOb) {

                                        if ( ! matchedResult ) {

                                            if ( configOb.name === LoyaltyConfig.configFlags.showCashBal ) {

                                                matchedResult = true;

                                                result =  (configOb.value === 'true');
                                                $rootScope.loyaltyConfig.showCashBal = result;
                                            }
                                        }
                                    });

                                    deferred.resolve(result);
                                }
                            }
                        );

                        return deferred.promise;
                    },

                    getEnableTellAFriend: function() {

                        var deferred = $q.defer();

                        this.getConfigData().then(

                            function (configData) {

                                var result = false;
                                var matchedResult = false;

                                if (configData.length > 0) {

                                    configData[0].configData.forEach(function (configOb) {

                                        if ( ! matchedResult ) {

                                            if ( configOb.name === LoyaltyConfig.configFlags.enableTellAFriend ) {

                                                matchedResult = true;

                                                result =  (configOb.value === 'true');
                                                $rootScope.loyaltyConfig.enableTellAFriend = result;
                                            }
                                        }
                                    });

                                    deferred.resolve(result);
                                }
                            }
                        );

                        return deferred.promise;
                    },

                    getRedeemRatio: function() {

                        var deferred = $q.defer();

                        this.getConfigData().then(

                            function (configobj) {

                                var result = false;
                                var matchedResult = false;

                                if (configobj.length > 0) {

                                    configobj[0].conversionRatio.forEach(function (conversionOb) {

                                        if ( ! matchedResult ) {

                                            if (conversionOb.currencySymbol === GlobalData.getCurrencyId() && conversionOb.conversionType === LoyaltyConfig.conversionType.redeeming ) {
                                                result =  (conversionOb.currencyValue / conversionOb.pointValue);
                                                matchedResult = true;
                                            }
                                        }
                                    });

                                    deferred.resolve(result);
                                }
                            }
                        );
                        return deferred.promise;
                    },

                    getFormattedDate : function (input) {

                        var deferred = $q.defer();
                        
                        var monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

                        var date = new Date(input);
                        
                        var thisMonth = monthNames[date.getMonth()];
                        var thisYear = date.getFullYear();
                        var thisDate  = date.getDate();
                        
                        var thisHours = date.getHours();

                        var thisHoursInAmPm = (thisHours > 12) ? (thisHours-12) : thisHours;
                        
                        var thisMinutes = (date.getMinutes()<10)? ('0'+date.getMinutes()) : date.getMinutes();
                        var thisSeconds  = (date.getSeconds()<10)? ('0'+date.getSeconds()) : date.getSeconds();
                        var getAmPm = (thisHours >= 12) ? 'PM' : 'AM';
                        
                        $translate([thisMonth, getAmPm]).then(

                            function(translatedStrings) {
                                
                                thisMonth = translatedStrings[thisMonth];
                                getAmPm =  translatedStrings[getAmPm];
                                
                                var showThisDate = thisMonth + ' ' + thisDate +', '+ thisYear + ' ' + thisHoursInAmPm + ':' + thisMinutes + ':'+ thisSeconds + ' ' + getAmPm;

                                deferred.resolve(showThisDate);
                                
                            }
                        );

                        return deferred.promise;
                    },






                     updateAccountDetails: function(account){

                        var self = this;
                        
                        var deferred = $q.defer();

                        AccountSvc.account().then(

                                    function(userData) {

                                        self.isUserMember(userData.id).then(

                                            function(memberData) {

                                                if (memberData.length > 0) {

                                                    var memberId = memberData[0].memberId;

                                                // var mapperObj = {
                                                //     contactEmail : 'customerEmail',
                                                //     firstName : 'customerFirstName',
                                                //     lastName : 'customerLastName'
                                                // }

                                                var partialUpdateJson = {
                                                    customerEmail : account.contactEmail,
                                                    customerFirstName : account.firstName,
                                                    customerLastName : account.lastName,
                                                    preferredLanguage : account.preferredLanguage
                                                };
                                            
                                                var membershipJson = {
                                                    memberId: memberData[0].memberId,
                                                    memberNumber: memberData[0].memberNumber,
                                                    programId: memberData[0].programId,
                                                    customerId: memberData[0].customerId,
                                                    dateValidFrom: memberData[0].dateValidFrom,
                                                    dateValidTo: memberData[0].dateValidTo,
                                                    tierId : memberData[0].tierId,
                                                    tierHistory: memberData[0].tierHistory,
                                                    createdBy: memberData[0].createdBy,
                                                    memberStatus: memberData[0].memberStatus,
                                                    preferredLanguage : memberData[0].preferredLanguage

                                                }
                                                 // partialUpdateJson[mapperObj[field]] = data;

                                                   membershipJson = angular.extend(membershipJson, partialUpdateJson);
                                                    var url = Utilities.getLoyaltyMembershipUrl()+'/'+memberId+'?patch=true';
                                                    
                                                    LoyaltyREST.accountDetailsLoyalty(url,membershipJson).then(function(response){
                                                        deferred.resolve(response);
                                                    }, function(){
                                                        deferred.reject(response);
                                                    });
                                                }

                                                else {
                                                   
                                                }
                                            }
                                        );
                                    }
                                );  
                                return deferred.promise; 
                    },


                    getJWTForGoogleWallet: function (customerId, data) {
                        var url = Utilities.getGoogleWalletJWTUrl(customerId);
                        return LoyaltyREST.getJWTForGoogleWallet(url, data);
                    },

                    getHybrisProfileConsentReference: function () {
                        var url = Utilities.getHybrisProfileConsentReferenceUrl();
                        return LoyaltyREST.getHybrisProfileConsentReference(url);
                    },

                    checkForHybrisProfileSubscription: function () {
                        var url = Utilities.getHybrisProfileAnalyticsUrl() + '/tenantsubscription';
                        return LoyaltyREST.checkForHybrisProfileSubscription(url);
                    },



                };

                return LoyaltyService;
            }
        ]);
