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
		$updateBtn.click(updateUser);

		findAllUsers();
	}


	function createUser() {
		console.log('creating user');

		var username = $usernameFld.val();
		var password = $passwordFld.val();
		var firstName = $firstNameFld.val();
		var lastName = $lastNameFld.val();
		var role = $roleFld.val();

		var user = new User(username, password, firstName, lastName, role);

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

	function findUserById() { }
	function deleteUser() { }
	function selectUser() { }
	function updateUser() { }
	function renderUser(user) { }

	//render all users
	function renderUsers(users) {

		$tbody.empty(); 
		for(var u=0; u<users.length; u++) {
			console.log(users[u]);
			var clone = $userRowTemplate.clone();
			clone.find(".wbdv-username").html(users[u].username);
			clone.find(".wbdv-first-name").html(users[u].firstName);
			clone.find(".wbdv-last-name").html(users[u].lastName);
			clone.find(".wbdv-role").text(users[u].role);

			//clone.attr('id',users[u].id);
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
