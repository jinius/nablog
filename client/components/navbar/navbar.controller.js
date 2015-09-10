'use strict';

angular.module('nablogApp')
.controller('NavbarCtrl', function ($scope, $location) {
	$scope.menu = [{
		'title': 'Home',
		'link': '/'
	}, {
		'title': 'Post',
		'link': '/post'
	}, {
		'title': 'Group',
		'link': '/group'
	}];

	$scope.isCollapsed = true;

	$scope.isActive = function(route) {
		return route === $location.path();
	};
});
