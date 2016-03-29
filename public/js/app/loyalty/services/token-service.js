

    angular.module('ds.loyalty')

        .factory('LoyaltyTokenSvc', ['$rootScope', 'RESTSvc', 'LoyaltyConfig', 'Utilities', 'ipCookie', 

            function($rootScope, RESTSvc, LoyaltyConfig, Utilities, ipCookie) {

                var defaultExpirySeconds = 3599;

                var Token = function(accessToken, tenant) {
               
                    this.accessToken = accessToken;
                    this.tenant = tenant;

                    this.getAccessToken = function() {
                        return this.accessToken;
                    };

                    this.getTenant = function() {
                        return this.tenant;
                    };
                };


                var TokenSvc = {

                    getAuthorizationBearer: function(accessToken) {
                        return 'Bearer ' + accessToken;
                    },

                    hasToken: function () {

                        if ( this.getToken().getAccessToken() ) {
                            return true;
                        } else {
                            return false;
                        }
                    },

                    getToken: function () {

                        var tokenCookie = ipCookie(LoyaltyConfig.accessCookie);

                        if ( tokenCookie ) {

                            if( tokenCookie.tenant === Utilities.getTenant() ) {
                                return new Token(tokenCookie.accessToken, tokenCookie.tenant);
                            }

                            
                        }
                        
                        return new Token(null, null);
                    },

                    saveToken: function(accessToken, expiresIn) {
                        var token = new Token( accessToken, Utilities.getTenant() );
                        ipCookie(LoyaltyConfig.accessCookie, JSON.stringify(token), {expirationUnit: 'seconds', expires: expiresIn ? expiresIn : defaultExpirySeconds, secure: false});
                        $rootScope.$emit('loyaltyToken:obtained', token);
                    },

                    removeToken: function () {
                        ipCookie.remove(LoyaltyConfig.accessCookie);
                    },

                    getAccessToken: function() {
                        var url = Utilities.getTokenUrl();

                        var client = Utilities.getClientInformation();

                        var queryString = '';

                        queryString +=  'grant_type=' + LoyaltyConfig.grantType;
                        queryString +=  '&scope=' + LoyaltyConfig.roleSeller;
                        queryString +=  '&client_id=' + client.clientId;
                        queryString +=  '&client_secret=' + client.clientSecret;

                        return RESTSvc.post(url, queryString);
                    },                
                    
                };

                return TokenSvc;
            }
        ]);