'use strict';

angular.module('nablogApp')
.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'app/main/main.html',
		controller: 'MainCtrl'
	});
});
