
	angular.module('ds.loyalty')

		.factory('RESTSvc', ['$q', '$http', 

			function($q, $http) {

				return {

					get: function( url, data ) {

						var deferred = $q.defer();

						$http.get(
							url,
							data
						).success(function(response) {		                    
							deferred.resolve(response);
						}).error(function(response) {		                    
							deferred.reject(response);
						});

						return deferred.promise;
					},


					post: function( url, data ) {

						var deferred = $q.defer();

						$http.post(
							url,
							data
						).success(function(response) {		                    
							deferred.resolve(response);
						}).error(function(response) {		                    
							deferred.reject(response);
						});
						
						return deferred.promise;
					},


					put: function( url, data ) {

						var deferred = $q.defer();

						$http.put(
							url,
							data
						).success(function(response) {		                    
							deferred.resolve(response);
						}).error(function(response) {		                    
							deferred.reject(response);
						});
						
						return deferred.promise;
					},

					delete: function( url, data ) {

						var deferred = $q.defer();

						$http.delete(
							url,
							data
						).success(function(response) {		                    
							deferred.resolve(response);
						}).error(function(response) {		                    
							deferred.reject(response);
						});
						
						return deferred.promise;
					}
				};
			}
		]);