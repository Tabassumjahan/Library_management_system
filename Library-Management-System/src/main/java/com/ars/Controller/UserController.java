package com.ars.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ars.entity.User;
import com.ars.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class UserController {
	
	 private final UserService userService;

	    @Autowired
	    public UserController(UserService userService) {
	        this.userService = userService;
	    }

	    @GetMapping("/users")
	    public List<User> getAllUsers() {
	        return userService.getAllUsers();
	    }

	    @GetMapping("/{userId}")
	    public ResponseEntity<User> getUserById(@PathVariable Long userId) {
	        try {
	            User user = UserService.getUserById(userId);
	            return ResponseEntity.ok(user);
	        } catch (NotFoundException e) {
	            return ResponseEntity.notFound().build();
	        }
	    }

		@PostMapping("/login")
		public User loginUser(@RequestBody User user) throws Exception {
			String email = user.getEmail();
			String password = user.getPassword();
			return userService.loginUser(email,password);
		}

	    @PostMapping("/register")
	    public User createUser(@RequestBody User user) throws Exception {
	        return userService.createUser(user);
	    }

	    @PutMapping("/{userId}")
	    public ResponseEntity<User> updateUser(@PathVariable Long userId, @RequestBody User updatedUser) {
	    	 if (userId == null || userId <= 0) {
	    	        return ResponseEntity.badRequest().build(); // Return a bad request response for invalid userId
	    	    }
	        try {
	            User user = userService.updateUser(userId, updatedUser);
	            return ResponseEntity.ok(user);
	        } catch (NotFoundException e) {
	            return ResponseEntity.notFound().build();
	        }
	    }

	    @DeleteMapping("/{userId}")
	    public ResponseEntity<String> deleteUser(@PathVariable String userId) {
	    	if (userId != null) {
	    		Long id = Long.valueOf(userId);
	    		userService.deleteUser(id);
	    	}
	        
			return ResponseEntity.noContent().build();
	    }

}
