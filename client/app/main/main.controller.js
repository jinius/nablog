'use strict';

angular.module('nablogApp')
.controller('MainCtrl', function ($scope, Token) {
	$scope.token = Token.loadToken() || Token.createToken();
});
