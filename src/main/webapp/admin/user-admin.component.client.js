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
		$searchBtn.click(findUserById);
		$updateBtn.click(updateUser2);
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

		var user = new User(id, username, password, firstName, lastName, role);

		userService
		.createUser(user)
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

	//function selectUser() { }

	function updateUser() {
		console.log('Updating user');
		
		//var row = $userRowTemplate.filter()

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
	
	function updateUser2() {
		
		var updateBtn = $(event.currentTarget);
		
		var userId = $('.wbdv-form').attr('id');
		
		var username = $('#usernameFld').val();
		var password = $('#passwordFld').val();
		var firstName = $('#firstNameFld').val();
		var lastName = $('#lastNameFld').val();
		var role = $('#roleFld').val();

		var user = new User(userId, username, password, firstName, lastName, role);		

		userService
		.updateUser(user)
		.then(findAllUsers);
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
//
//		clone.attr('id',users[u].id);
//		clone.find('#wbdv-edit').click(updateUser);
//		clone.find('#wbdv-remove').click(deleteUser);
//
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
