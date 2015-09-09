'use strict';

angular.module('nablogApp')
.factory('Post', function Post($http, $q) {
	return {
		/**
		 * Gets all posts
		 */
		index: function() {
			var deferred = $q.defer();

			$http.get('/api/posts')
			.success(function(data) {
				deferred.resolve(data);
			})
			.error(function(err) {
				deferred.reject(err);
			});

			return deferred.promise;
		},

		/**
		 * Get a post
		 */
		get: function(id) {
			var deferred = $q.defer();

			$http.get('/api/posts/' + id)
			.success(function(data) {
				deferred.resolve(data);
			})
			.error(function(err) {
				deferred.reject(err);
			});

			return deferred.promise;
		},

		/**
		 * Create a post
		 */
		create: function(post) {
			var deferred = $q.defer();

			$http.post('/api/posts', post)
			.success(function() {
				deferred.resolve();
			})
			.error(function(err) {
				deferred.reject(err);
			});

			return deferred.promise;
		},

		/**
		 * Remove a post
		 */
		remove: function(post) {
			var deferred = $q.defer();

			$http.delete('/api/posts/' + post.id)
			.success(function() {
				deferred.resolve();
			})
			.error(function(err) {
				deferred.reject(err);
			});

			return deferred.promise;
		}
	};
});
