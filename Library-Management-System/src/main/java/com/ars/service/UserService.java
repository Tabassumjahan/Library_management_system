package com.ars.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import com.ars.entity.User;
import com.ars.repository.UserRepository;

@Service
public class UserService {

	private static UserRepository userRepository;

	@Autowired
	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	public static User getUserById(Long userId) throws NotFoundException {
		return userRepository.findById(userId)
				.orElseThrow(() -> new NotFoundException());
	}

	public User loginUser(String email, String password) throws Exception {
		User user = userRepository.findByEmailAndPassword(email, password);
		if(user != null) return user;
		else throw new Exception("User Not Found");
	}

	public User createUser(User user) throws Exception{
		User existingUser = userRepository.findByEmail(user.getEmail());
		if(existingUser == null)
			return userRepository.save(user);
		else
			throw new Exception("User alredy exist");
	}

	public User updateUser(Long userId, User updatedUser) throws NotFoundException {
		User existingUser = userRepository.findById(userId)
				.orElseThrow(() -> new NotFoundException());

		// Update user properties here
		if (updatedUser.getFirstName() != null) {
			existingUser.setFirstName(updatedUser.getFirstName());
		}
		if (updatedUser.getLastName() != null) {
			existingUser.setLastName(updatedUser.getLastName());
		}

		return userRepository.save(existingUser);
	}

	public void deleteUser(Long userId) {
		userRepository.deleteById(userId);
	}

}
