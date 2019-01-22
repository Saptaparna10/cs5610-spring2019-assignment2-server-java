package com.example.cs5610spring2019assignment2serverjava.services;

import java.util.*;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
			@PathVariable("userId") long id) {
		for(User user: users) {
			if(id == user.getId())
				return user;
		}
		return null;
	}

	@PostMapping("/api/user")
	public User createUser(@RequestBody User user) {

		users.add(user);	
		return user;
	}

	@DeleteMapping("/api/user/{userId}")
	public void deleteUser(@PathVariable("userId") long id) {
		for(int i=0; i<users.size(); i++) {
			if(id == users.get(i).getId()) {
				users.remove(i);
				return;
			}
		}
	}

	@PutMapping("/api/user/{userId}")
	public User updateUser(@PathVariable("userId") long userId, @RequestBody User user) {
		for(int i=0; i<users.size(); i++) {
			if(userId == users.get(i).getId()) {
				users.get(i).setFirstName(user.getFirstName());
				users.get(i).setLastName(user.getLastName());
				users.get(i).setPassword(user.getPassword());
				users.get(i).setRole(user.getRole());
				users.get(i).setUsername(user.getUsername());
			}
		}
		return user;
	}

	@GetMapping("/api/user/{username}/{password}/{firstName}/{lastName}/{role}")
	public List<User> findUserById(
			@PathVariable("username") String username,
			@PathVariable("password") String password,
			@PathVariable("firstName") String firstName,
			@PathVariable("lastName") String lastName,
			@PathVariable("role") String role) {

		System.out.println(username+" "+password+" "+firstName+" "+lastName+" "+role);

		List<User> result = users.stream()
				.filter(user -> Objects.nonNull(user.getUsername()))
				.filter(user -> {if(username==null)return true;
				else return user.getUsername().equals(username);})
	
//				.filter(u -> u.getUsername().equals(username) || username==null)
//				.filter(u -> u.getUsername().equals(password) || password==null)
//				.filter(u -> u.getUsername().equals(firstName) || firstName==null)
//				.filter(u -> u.getUsername().equals(lastName) || lastName==null)
//				.filter(u -> u.getUsername().equals(role) || role==null)
				.collect(Collectors.toList());

		return result;
	}
}