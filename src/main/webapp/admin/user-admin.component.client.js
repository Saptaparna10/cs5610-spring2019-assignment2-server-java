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
		$tbody = $('.wbdv-body');
		$userRowTemplate = $('.wbdv-user');

		$createBtn.click(createUser);
		$searchBtn.click(selectUser);
		$updateBtn.click(updateUser);
		userService = new UserServiceClient();
		findAllUsers();
	}


	function createUser() { … }
	
	function findAllUsers() {
		console.log('find all users');
		userService.findAllUsers(renderUsers);
	}
	
	function findUserById() { … }
	function deleteUser() { … }
	function selectUser() { … }
	function updateUser() { … }
	function renderUser(user) { … }
	function renderUsers(users) { … }
})();
