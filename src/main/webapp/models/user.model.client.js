function User(username, password, firstName, lastName, role) {
	this.username = username;
	this.password = password;
	this.firstName = firstName;
	this.lastName = lastName;
	this.role = role;


	// username
	this.setUsername = setUsername;
	this.getUsername = getUsername;

	// password
	this.setPassword = setPassword;
	this.getPassword = getPassword;

	// first name
	this.setFirstName = setFirstName;
	this.getFirstName = getFirstName;

	// last name
	this.setLastName = setLastName;
	this.getLastName = getLastName;

	// role
	this.setRole = setRole;
	this.getRole = getRole;


	//getter setter for username
	function setUsername(username) {
		this.username = username;
	}

	function getUsername() {
		return this.username;
	}

	// getter setter for password
	function setPassword(password) {
		this.password = password;
	}

	function getPassword() {
		return this.password;
	}

	// getter setter for first name
	function setFirstName(firstName) {
		this.firstName = firstName;
	}

	function getFirstName() {
		return this.firstName;
	}

	// getter setter for last name
	function setLastName(lastName) {
		this.lastName = lastName;
	}

	function getLastName() {
		return this.lastName;
	}
	
    // getter setter for last name
    function setRole(role) {
        this.role = role;
    }

    function getRole() {
        return this.role;
    }
}
