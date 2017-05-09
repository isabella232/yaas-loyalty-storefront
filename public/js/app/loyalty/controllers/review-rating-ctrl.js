angular.module('ds.loyalty')

.controller('RatingReviewCtrl', ['$rootScope', '$scope', '$injector',

    function($rootScope, $scope, $injector) {

        var $modal = $injector.get('$uibModal');
        var LoyaltySvc = $injector.get('LoyaltySvc');


        var productId = $injector.get('$stateParams').productId;


        $scope.thisUser = $rootScope.thisUser;




        $scope.pageNumber = 1;
        $scope.pageSize = 10;


        var modalInstance = '';

        $scope.reviewRatingData = [];
        $scope.avgRating = 0;
        $scope.ratingArray = [];

        $scope.customerExist = true;
        $scope.errorRating = false;
        $scope.isAddReview = false;
        $scope.disabledSave = false;
        $scope.showRatingPoint = false;
        $scope.showReviewPoint = false;

        $scope.ratingData = {
                                
            ratings: []
        };


        /*$scope.getDate = function(input) {
            return new Date(input);
        };*/

        $scope.getRatingPoints = function(){
            var fireRuleObject = LoyaltySvc.getFireRuleOjbect();
            fireRuleObject.member = $scope.thisUser.loyaltyUser;

                delete fireRuleObject.member.id;
                delete fireRuleObject.member.metadata;
                delete fireRuleObject.member.referralCode;
                delete fireRuleObject.member.customAttributes;

            fireRuleObject.memberActivity.memberId = $scope.thisUser.loyaltyUser.memberId;
            fireRuleObject.ruleType = 'ACTIVITY';
            fireRuleObject.memberActivity.activityType = 'RATING';
            LoyaltySvc.fireDummyRule(fireRuleObject).then(

                function(fireRuleData) {
                    $scope.showRatingPoint = true;
                    $scope.ratingPoint = fireRuleData.qualifyingPointsEarned;

                },
                function (error){
                    $scope.showRatingPoint = false;
                });


        };

        $scope.getReviewPoints = function(){
            var fireRuleObject = LoyaltySvc.getFireRuleOjbect();
            fireRuleObject.member = $scope.thisUser.loyaltyUser;

                delete fireRuleObject.member.id;
                delete fireRuleObject.member.metadata;
                delete fireRuleObject.member.referralCode;
                delete fireRuleObject.member.customAttributes;

            fireRuleObject.memberActivity.memberId = $rootScope.thisUser.loyaltyUser.memberId;
            fireRuleObject.ruleType = 'ACTIVITY';
            fireRuleObject.memberActivity.activityType = 'REVIEW';
            LoyaltySvc.fireDummyRule(fireRuleObject).then(

                function(fireRuleData) {
                    $scope.showReviewPoint = true;
                    $scope.reviewPoint = fireRuleData.qualifyingPointsEarned;

                },
                function (error){
                    $scope.showReviewPoint = false;
                });


        };


        $scope.getReviewerExist = function(isAddReview,rating) {

            var user = 'customerId:' + $scope.thisUser.hybrisUser.id;

            if(isAddReview === true){
                $scope.customerExist = true;
                $scope.myRating = rating.toFixed(1);

            }

            else{
                LoyaltySvc.getProductReviewer(productId, user).then(

                function (reviewerData) {

                    if (reviewerData.length === 0) {
                        $scope.customerExist = false;
                    }
                    else {
                        $scope.customerExist = true;
                        $scope.myRating = (reviewerData[0].rating).toFixed(1);
                    }
                }
            );
            }

            
        };


        $scope.getUser = function() {

            LoyaltySvc.getUser().then(

                function(userData) {
                    if($scope.thisUser.loyaltyUser.memberId){
                        $scope.getRatingPoints();
                        $scope.getReviewPoints();
                    }
                    $scope.getProductDetails();
                    $scope.getReviewerExist();
                }
            );
        };

        $scope.getProductDetails = function() {

            LoyaltySvc.getProductDetails(productId).then(

                function(productData) {

                    $scope.product = productData;
                    $scope.$emit('product:updated', productData);
                }
            );
        };


        $scope.totalRatingReviews = 0;
        $scope.totalReviewsToShow = 0;
        $scope.ratingShowFlag = true;

        $scope.getProductAvgRating = function () {

            $scope.totalRatingReviews = 0;
            $scope.totalReviewsToShow = 0;

            LoyaltySvc.getProductAvgRating(productId).then(

                function(productAvgRatingData) {

                    if (productAvgRatingData.avg) {

                        $scope.avgRatingModel = (productAvgRatingData.avg.rating).toFixed(1);

                        $scope.avgRating = Math.round( productAvgRatingData.avg.rating );
                        $scope.floorRating = Math.floor(productAvgRatingData.avg.rating);
                        $scope.avgRatingView = Math.floor( ( ( productAvgRatingData.avg.rating - $scope.floorRating ) * 100 ) ) - 10;

                        $scope.totalRatingReviews = productAvgRatingData.count;
                        $scope.totalReviewsToShow = productAvgRatingData.reviewCount;

                        if($scope.avgRatingModel > $scope.avgRating){

                            $scope.ratingShowFlag = false;

                        }else{
                            $scope.ratingShowFlag = true;
                        }   


                        //$scope.getProductReviewCount();

                        /*if(isAddReview)
                        $scope.getProductReviewRating(isAddReview);

                        else
                        $scope.getProductReviewRating();   */ 
                    }
                }
            );
        };
       /* $scope.getProductReviewCount = function(){
            $scope.totalReviewsToShow = 0;
            LoyaltySvc.getProductReviewCount(productId).then(

                function(productReviewData) {
                   
                        $scope.totalReviewsToShow = $scope.totalRatingReviews - productReviewData.count;
                                           
                }
            );
        };*/

        $scope.ratingArray = [];

        $scope.getProductRatingCounts = function() {

            $scope.ratingArray = [];

            LoyaltySvc.getProductRatingCounts(productId).then(

                function(productRatingCountData) {

                    if (productRatingCountData) {

                        angular.forEach(productRatingCountData, function (ratingOb) {
                            $scope.ratingArray.push(ratingOb);
                        });
                    }
                }
            );
        };

        $scope.$on('product:updated', function (event, data) {

            //$scope.thisUser.isUser

           
                $scope.isAddReview = true;
                $scope.getProductAvgRating();
                $scope.getProductRatingCounts();
                $scope.getProductReviewRating($scope.isAddReview);

                   
        });




        $scope.processing = false;
        $scope.reviewRatingData = [];

        $scope.getProductReviewRating = function(isAddReview) {

            if(isAddReview){
                $scope.pageNumber = 1;
                $scope.reviewRatingData = [];
            }
            else{
                 $scope.reviewRatingData = $scope.reviewRatingData || [];
            }

           

            var query = 'pageSize=' + $scope.pageSize + '&pageNumber=' + $scope.pageNumber + '&sort=metadata:desc';

            if ( ! $scope.processing && ( $scope.reviewRatingData.length < $scope.totalRatingReviews ) ||  ! $scope.processing && isAddReview) {

                $scope.processing = true;

                LoyaltySvc.getProductReviewRating(productId, query).then(

                    function(reviewRatingData) {

                        $scope.processing = false;

                        if (reviewRatingData.length > 0) {
                            $scope.isAddReview = false;

                            reviewRatingData.forEach(function (ratingOb) {

                                var ratingObject = angular.copy(ratingOb);

                                LoyaltySvc.getFormattedDate(ratingObject.metadata.createdAt).then(

                                    function (translatedDate) {

                                        ratingObject.createdDate = translatedDate;
                                         $scope.reviewRatingData.push(ratingObject);
                                        /* if ( ratingObject.reviewTitle === '' && ratingObject.reviewComment === '' ) {
                                            $scope.totalReviewsToShow -= 1;
                                        }
*/
                                    });
                                
                            });

                            $scope.pageNumber += 1;
                        }
                    }
                );
            }
        };



        $scope.reviewProductCtrl = function($scope) {


            $scope.productName = $scope.product.name;

            if ($scope.thisUser.hybrisUser.firstName === undefined) {
                $scope.thisUser.hybrisUser.firstName = '';
            }

            if ($scope.thisUser.hybrisUser.lastName === undefined) {
                $scope.thisUser.hybrisUser.lastName = '';
            }

            var userFullname = $scope.thisUser.hybrisUser.firstName + ' ' + $scope.thisUser.hybrisUser.lastName;

            $scope.review = {
                ratingId: '',
                sku: productId,
                rating: 0,
                reviewerName: userFullname,
                customerId: $scope.thisUser.hybrisUser.id,
                reviewTitle: '',
                reviewComment: '',
                reviewStatus: 'PUBLISHED'
            };

            $scope.ratingText = [
                'RATING_TEXT0',
                'RATING_TEXT1',
                'RATING_TEXT2',
                'RATING_TEXT3',
                'RATING_TEXT4',
                'RATING_TEXT5'
            ];

            $scope.closeModal = function() {
                modalInstance.close();
            };

            $scope.postReviewRating = function(reviewModel) {

                

                if ( reviewModel.rating === 0 ) {
                    $scope.errorRating = true;
                } 

                else {
                    $scope.disabledSave = true;

                    LoyaltySvc.postProductReviewRating(reviewModel).then(

                        function (response) {
                            $scope.isAddReview = true;
                            $scope.disabledSave = false;
                            $scope.closeModal();
                            $scope.getReviewerExist($scope.isAddReview,reviewModel.rating);
                            $scope.getProductAvgRating();
                            $scope.getProductRatingCounts();
                            $scope.getProductReviewRating($scope.isAddReview);
                            


                        },

                        function (error){
                            $scope.closeModal();
                            $scope.disabledSave = false;
                        }
                    );
                }
            };
        };

        var modalInstance = {

        };

        $scope.openWriteReviewModal = function() {

            modalInstance = $injector.get('$uibModal').open({
                templateUrl: 'js/app/loyalty/templates/write_product_review.html',
                controller: 'reviewProductCtrl',
                scope: $scope
            });
        };


        $scope.ratingToPercentage = function(val, maxVal) {
            return parseFloat(100 * (val / maxVal));
        };

        $scope.gotoProductSpecificPage = function (pageType) {

            $injector.get('$state').go('base.product.' + pageType, {
                productId: productId
            });
        };

        $scope.getProductReviews = function() {

            if ( $scope.totalRatingReviews > 0 ) {
                $scope.gotoProductSpecificPage('review');               
            }
        };

        $scope.gotoProductDetailPage = function() {
            $scope.gotoProductSpecificPage('detail');
        };


        var unBindUserEvent = $rootScope.$on('loyaltyInformation:updated', function(event, eveObj) {
            $scope.thisUser = $rootScope.thisUser;
        });

        $scope.$on('$destroy', unBindUserEvent);

        $rootScope.$on('user:signedin', function(event, data) {
            $scope.init();
        });

        $rootScope.$on('user:signedout', function(event, data) {
            $scope.init();
        });


        $scope.init = function() {
            $scope.getUser();
        };

        $scope.init();
    }
]);
