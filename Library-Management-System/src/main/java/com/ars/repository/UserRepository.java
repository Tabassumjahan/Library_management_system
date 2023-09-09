package com.ars.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.ars.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

	Optional<User> findById(Long userId); // Change method name to follow Spring Data naming conventions

	@Query("SELECT u FROM User u WHERE u.email = :email")
	User findByEmail(String email);

	@Query("SELECT u FROM User u WHERE u.email = :email AND u.password = :password")
	User findByEmailAndPassword(String email, String password);
}
