(function () {
	var $usernameFld, $passwordFld;
	var $removeBtn, $editBtn, $createBtn;
	var $firstNameFld, $lastNameFld;
	var $roleFld;
	var $userRowTemplate, $tbody;
	var userService = new AdminUserServiceClient();
	$(main);


	function main() {
		$usernameFld = $('#usernameFld');
		$passwordFld = $('#passwordFld');
		$firstNameFld = $('#firstNameFld');
		$lastNameFld = $('#lastNameFld');
		$roleFld = $('#roleFld');

		$editBtn = $('.wbdv-edit');
		$removeBtn = $('.wbdv-remove');
		$searchBtn = $('.wbdv-search');
		$createBtn = $('.wbdv-create');
		$updateBtn = $('.wbdv-update');
		$tbody = $('.wbdv-tbody');
		$userRowTemplate = $('.wbdv-template');

		$createBtn.click(createUser);
		$searchBtn.click(selectUser);
		$updateBtn.click(confirmUpdate);
		$removeBtn.click(deleteUser);
		$editBtn.click(updateUser);

		findAllUsers();
	}


	function createUser() {
		console.log('creating user');

		var id = new Date().getTime();
		var username = $usernameFld.val();
		var password = $passwordFld.val();
		var firstName = $firstNameFld.val();
		var lastName = $lastNameFld.val();
		var role = $roleFld.val();
		
		if(username==null || username==""){
			alert('Username cannot be empty');
			return false;
		}

		var user = new User(id, username, password, firstName, lastName, role);

		userService
		.createUser(user)
		.then(findAllUsers);
	}


	function deleteUser(event) {
		console.log('Deleting user');

		var deleteBtn = $(event.currentTarget);
		var userId = deleteBtn
		.parent()
		.parent()
		.parent()
		.attr('id');

		userService
		.deleteUser(userId)
		.then(findAllUsers);

	}

	function selectUser() {
		console.log('Searching user');
		
		var username = $('#usernameFld').val();
		var password = $('#passwordFld').val();
		var firstName = $('#firstNameFld').val();
		var lastName = $('#lastNameFld').val();
		var role = $('#roleFld').val();

		//var user = new User(null, username, password, firstName, lastName, role);		

		userService
		.selectUser(username!=null? (username.length==0?null:username) : null,
				password!=null? (password.length==0?null:password) : null,
				firstName!=null? (firstName.length==0?null:firstName): null,
				lastName!=null? (lastName.length==0?null:lastName): null,
				role!=null? (role.length==0?null:role): null)
		.then(renderUsers);
	}

	function updateUser() {
		console.log('Updating user');

		var editBtn = $(event.currentTarget);

		var userId = editBtn
		.parent()
		.parent()
		.parent()
		.attr('id');

		editBtn
		.parent()
		.parent()
		.parent()
		.hide();

		findUserById(userId);
	}

	function confirmUpdate() {
		console.log('Performing actual update on user');

		var userId = $('.wbdv-form').attr('id');

		var username = $('#usernameFld').val();
		var password = $('#passwordFld').val();
		var firstName = $('#firstNameFld').val();
		var lastName = $('#lastNameFld').val();
		var role = $('#roleFld').val();

		var user = new User(userId, username, password, firstName, lastName, role);		

		userService
		.updateUser(userId,user)
		.then(findAllUsers);
	}

	function findAllUsers() {
		console.log('find all users');

		userService.findAllUsers()
		.then(renderUsers)
		.catch(function (err){
			throw err;
		});
	}

	function findUserById(uid) { 
		console.log('find user by id');

		userService.findUserById(uid)
		.then(renderUser)
		.catch(function (err){
			throw err;
		});
	}


	function renderUser(user) { 
		console.log('render one user');

//		$tbody.empty(); 
		console.log(user);

//		var clone = $userRowTemplate.clone();
//		clone.find(".wbdv-username").html(user.username);
//		clone.find(".wbdv-first-name").html(user.firstName);
//		clone.find(".wbdv-last-name").html(user.lastName);
//		clone.find(".wbdv-role").text(user.role);

//		clone.attr('id',users[u].id);
//		clone.find('#wbdv-edit').click(updateUser);
//		clone.find('#wbdv-remove').click(deleteUser);

//		$tbody.append(clone);
//		clearFields();

		$('.wbdv-form').attr('id', user.id);
		$usernameFld.val(user.username);
		$passwordFld.val(user.password);
		$firstNameFld.val(user.firstName);
		$lastNameFld.val(user.lastName);
	}

	//render all users
	function renderUsers(users) {
		console.log('render users');

		$tbody.empty(); 
		for(var u=0; u<users.length; u++) {
			console.log(users[u]);
			var clone = $userRowTemplate.clone();
			clone.find(".wbdv-username").html(users[u].username);
			clone.find(".wbdv-first-name").html(users[u].firstName);
			clone.find(".wbdv-last-name").html(users[u].lastName);
			clone.find(".wbdv-role").text(users[u].role);

			clone.attr('id',users[u].id);
			clone.find('#wbdv-edit').click(updateUser);
			clone.find('#wbdv-remove').click(deleteUser);

			$tbody.append(clone);
			clearFields();
		}
	}

	function clearFields(){
		$('.form-control').val('');
		//$('.wbdev-form').attr('id','');
	}
})();
