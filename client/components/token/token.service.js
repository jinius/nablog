'use strict';

angular.module('nablogApp')
.factory('Token', function($window) {
	var service = {};

	service.createToken = function() {
		var token = {};
		// TODO

		token.publicKey = 'Dummy public key';
		token.privateKey = 'Dummy private key';

		return token;
	};

	service.saveToken = function(token) {
		$window.localStorage.setItem('TokenStorage', angular.toJson(token));
	};

	service.loadToken = function() {
		return angular.fromJson($window.localStorage.getItem('TokenStorage'));
	};

	service.sign = function(data, token) {
		// TODO
		return angular.toJson(data) + angular.toJson(token);
	};

	return service;
});
