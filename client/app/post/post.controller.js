'use strict';

angular.module('nablogApp')
.controller('PostCtrl', function($scope, Post) {
	$scope.posts = [];

	Post.index()
	.then(function(data) {
		$scope.posts = data;
	});

	$scope.time = function(post) {
		// TODO
		return post.time || '1 hr';
	};

	$scope.removePost = function(post) {
		if(! post) { return; }
		Post.remove(post);
	};
})
.controller('PostNewCtrl', function($scope, $location, Post, Token) {
	$scope.post = {};
	$scope.createPost = function() {
		var post = $scope.post;
		var token = Token.loadToken() || Token.createToken();
		post.signature = Token.sign(Token.loadToken(), post);
		Post.create(post)
		.then(function() {
			$location.path('/post');
		});
	};
})
.controller('PostViewCtrl', function($scope, $location, $routeParams, Post) {
	$scope.post = {
		title: 'Error',
		content: 'cannot find post',
		comments: []
	};

	Post.get($routeParams.id)
	.then(function(data) {
		$scope.post = data;
	});

	$scope.isMyPost = function() {
		return true;
	};

	$scope.removePost = function() {
		Post.remove($scope.post)
		.then(function() {
			$location.path('/post');
		});
	};
});
