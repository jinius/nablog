'use strict';

angular.module('nablogApp')
.factory('Token', function($window) {
	var service = {};

	service.createToken = function() {
		var token = {};

		token.key = CryptoJS.lib.WordArray.random(128/8).toString();
		token.tag = token.key.slice(0,4);

		return token;
	};

	service.saveToken = function(token) {
		$window.localStorage.setItem('TokenStorage', angular.toJson(token));
	};

	service.loadToken = function() {
		return angular.fromJson($window.localStorage.getItem('TokenStorage'));
	};

	service.sign = function(token, data) {
		data = (typeof data === 'string') ? data : angular.toJson(data);
		return CryptoJS.SHA256(token + data).toString();
	};

	return service;
});
