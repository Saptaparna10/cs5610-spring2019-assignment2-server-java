package com.example.cs5610spring2019assignment2serverjava.services;

import java.util.*;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.cs5610spring2019assignment2serverjava.models.User;

@RestController
public class UserService {
//	User alice = new User(123, "alice", "Alice", "Wonderland");
//	User bob   = new User(234, "bob", "Bob", "Marley");

	List<User> users = new ArrayList<>();
	//User[] users = {alice, bob};

	@GetMapping("/api/user")
	public List<User> findAllUser() {
		return users;
	}
	@GetMapping("/api/user/{userId}")
	public User findUserById(
			@PathVariable("userId") Integer id) {
		for(User user: users) {
			if(id == user.getId().intValue())
				return user;
		}
		return null;
	}
	
	@PostMapping("/api/user")
	public User createUser(@RequestBody User user) {
		
		users.add(user);	
		return user;
	}
	
//	public void deleteUser(Integer id) {
//		
//	}
//	public User updateUser(Integer id, User user) {
//		
//	}
}