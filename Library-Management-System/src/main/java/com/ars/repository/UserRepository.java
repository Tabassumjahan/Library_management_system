package com.ars.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ars.entity.User;

public interface UserRepository extends JpaRepository<User, Long>  {

	Optional<User> getUserById(Long userId);

}
