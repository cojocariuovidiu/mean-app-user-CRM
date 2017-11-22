angular.module('userService', ['authService'])

.factory('User', function($http) {

	// create a new object
	var userFactory = {};

	// get a single user
	userFactory.get = function(id) {
		return $http.get('/api/users/' + id);
	};

	// get all users
	userFactory.all = function() {
		return $http.get('/api/users/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2F0eWEiLCJ1c2VybmFtZSI6IlNhdHlhIiwiaWF0IjoxNTExMzMyNjYwLCJleHAiOjE1MTE0MTkwNjB9.VYe7ICpCfvFXxfTulx5dHJMI6eoYXZRRUMHoo6NTCVs');
	};

	// create a user
	userFactory.create = function(userData) {
		return $http.post('/api/users/', userData);
	};

	// update a user
	userFactory.update = function(id, userData) {
		return $http.put('/api/users/' + id, userData);
	};

	// delete a user
	userFactory.delete = function(id) {
		return $http.delete('/api/users/' + id);
	};

	// return our entire userFactory object
	return userFactory;

});