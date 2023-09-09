package com.ars.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "User")
public class User {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "UserID") 
    private Long userId;
	@Column(name = "FirstName")
    private String firstName;
	@Column(name = "LastName")
    private String lastName;
	@Column(name = "Email")
    private String email;
	@Column(name = "Password")
    private String password;
	@Column(name = "AccountStatus")
    private String accountStatus;
	public Long getId() {
		return userId;
	}
	public void setId(Long id) {
		this.userId = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getAccountStatus() {
		return accountStatus;
	}
	public void setAccountStatus(String accountStatus) {
		this.accountStatus = accountStatus;
	}
    
	
}
