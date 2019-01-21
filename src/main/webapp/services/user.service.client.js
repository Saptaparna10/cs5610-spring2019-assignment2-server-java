function AdminUserServiceClient() {
	this.createUser = createUser;
	this.findAllUsers = findAllUsers;
	this.findUserById = findUserById;
	this.deleteUser = deleteUser;
	this.updateUser = updateUser;
	this.url = 'http://localhost:8080/api/user';
	var self = this;
	
	function createUser(user) {
		return fetch(self.url, {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
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
	
	function updateUser(user) { 
		return fetch(self.url, {
            method: 'put',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        });
	}
	
	function deleteUser(userId) { 
		 return fetch(self.url + '/' + userId, {
	            method: 'delete'
	        })
	}
}