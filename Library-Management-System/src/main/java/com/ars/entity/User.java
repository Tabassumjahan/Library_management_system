package com.ars.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "User")
public class User {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "UserID") 
    private Long UserID;
	@Column(name = "FirstName") 
    private String FirstName;
	@Column(name = "LastName")
    private String LastName;
	@Column(name = "Email")
    private String Email;
	@Column(name = "Password")
    private String Password;
	@Column(name = "AccountStatus")
    private String AccountStatus;
	public Long getId() {
		return UserID;
	}
	public void setId(Long id) {
		this.UserID = id;
	}
	public String getFirstName() {
		return FirstName;
	}
	public void setFirstName(String firstName) {
		this.FirstName = firstName;
	}
	public String getLastName() {
		return LastName;
	}
	public void setLastName(String lastName) {
		this.LastName = lastName;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		this.Email = email;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		this.Password = password;
	}
	public String getAccountStatus() {
		return AccountStatus;
	}
	public void setAccountStatus(String accountStatus) {
		this.AccountStatus = accountStatus;
	}
    
	
}
