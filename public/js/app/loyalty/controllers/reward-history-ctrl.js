
    angular.module('ds.loyalty')

        .controller('RewardHistoryCtrl', ['$rootScope', '$scope', '$injector',

            function ($rootScope, $scope, $injector) {

                var $q = $injector.get('$q');
               /* var $translate = $injector.get('$translate');*/
                var LoyaltySvc = $injector.get('LoyaltySvc');
                

                /*$scope.getFormattedDate = function (input) {

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
                };

*/



                

                $scope.thisUser = $rootScope.thisUser;

                $scope.getUser = function () {

                    $scope.thisUser = $rootScope.thisUser;

                    if ( $scope.thisUser) {
                        $scope.checkForMembership();
                    }
                };

                var unBindUserEvent = $rootScope.$on('loyaltyInformation:updated', function (event, eveObj) {

                    $scope.thisUser = $rootScope.thisUser;
                    $scope.checkForMembership();
                });

                $scope.$on('$destroy', unBindUserEvent);




                $scope.defaultHistroyLength =10;

                $scope.showHistoryToggle = false;

                $scope.getMemberActivities = function (memberId) {

                    var params = {
                        pageSize: 100
                    };

                    $scope.memberActivities = [];
                    var activitiesArray = [];

                    LoyaltySvc.getMemberActivities(memberId, params.pageSize).then(

                        function (activitiesData) {

                            activitiesData.forEach(function (activityOb) {

                                var activity = angular.copy(activityOb);

                                LoyaltySvc.getFormattedDate(activity.metadata.createdAt).then(

                                    function (translatedDate) {

                                        activity.createdDate = translatedDate;
                                        activitiesArray.push(activity);
                                        $scope.memberActivities = activitiesArray;
                                        $scope.showHistoryFilter = $scope.showHistoryToggle ? $scope.memberActivities.length : $scope.defaultHistroyLength  ;

                                    }
                                );
                            });
                        }
                    );                    
                };


                $scope.checkForMembership = function () {

                    if ( $scope.thisUser.isMember ) {
                        $scope.getMemberActivities($scope.thisUser.loyaltyUser.memberId);
                    }
                };

    
                $scope.init = function() {                      
                    $scope.getUser();
                };

                $scope.init();                
            }
        ]);