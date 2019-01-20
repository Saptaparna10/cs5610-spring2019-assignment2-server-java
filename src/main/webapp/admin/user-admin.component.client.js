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
	
	//render all users
	function renderUsers(users) {
		
		$tbody.empty(); 
        for(var u=0; u<users.length; u++) {
            console.log(users[u]);
            var clone = $userRowTemplate.clone();
            clone.find(".wbdv-username").html(users[u].username);
            clone.find(".wbdv-first-name").html(users[u].firstName);
            clone.find(".wbdv-last-name").html(users[u].username);
            clone.find(".wbdv-role").html(users[u].firstName);
            
            clone.attr('id',users[u].id);
            clone.find('#wbdv-edit').click(editUser);
            clone.find('.wbdv-remove').click(deleteUser);

            $tbody.append(clone);
        }
    }
})();
