'use strict';

angular.module('nablogApp')
.config(function ($routeProvider) {
	$routeProvider
	.when('/post', {
		templateUrl: 'app/post/post.html',
		controller: 'PostCtrl'
	})
	.when('/post/new', {
		templateUrl: 'app/post/post-new.html',
		controller: 'PostNewCtrl'
	})
	.when('/post/:id', {
		templateUrl: 'app/post/post-view.html',
		controller: 'PostViewCtrl'
	});
});
