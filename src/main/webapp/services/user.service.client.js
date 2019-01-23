function AdminUserServiceClient() {
	this.createUser = createUser;
	this.findAllUsers = findAllUsers;
	this.findUserById = findUserById;
	this.deleteUser = deleteUser;
	this.updateUser = updateUser;
	this.selectUser = selectUser;
	this.url = 'https://frozen-headland-13704.herokuapp.com/api/user';
		//'http://localhost:8080/api/user';
	var self = this;

	function createUser(user) {
		return fetch(self.url, {
			method: 'post',
			body: JSON.stringify(user),
			headers: {
				'content-type': 'application/json'
			}
		}).then(function(response) {
			return response.json();
		}).catch(function(err) {
			alert('Duplicate entry found!');
		});
	}

	function updateUser(userId, user) { 
		return fetch(self.url + "/" + userId, {
			method: 'put',
			body: JSON.stringify(user),
			headers: {
				'content-type': 'application/json'
			}
		});
	}

	function deleteUser(userId) { 
		return fetch(self.url + "/" + userId, {
			method: 'delete',
		});
	}

	function findAllUsers() {
		return fetch(this.url)
		.then(function(response) {
			return response.json();
		});
	}

	function findUserById(userId) { 
		return fetch(this.url+"/"+userId)
		.then(function(response) {
			return response.json();
		});
	}

	function selectUser(username, password, firstName, lastName, role) {
		return fetch(this.url +"/search?username="+username+"&password="+password+"&firstName="+firstName+"&lastName="+lastName+ "&role="+role)
		.then(function(response) {
			return response.json();
		});
	}
}