package com.ars.entity;

import java.time.LocalDate;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "loan_management")
public class LoanManagement {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long LoanID;

    @ManyToOne
    @JoinColumn(name = "UserID")
    private User User;

    @ManyToOne
    @JoinColumn(name = "BookID")
    private Book Book;

    private LocalDate DueDate;
    private double Fine;
    
	public Long getLoanID() {
		return LoanID;
	}
	public void setLoanID(Long loanID) {
		LoanID = loanID;
	}
	public User getUser() {
		return User;
	}
	public void setUser(User user) {
		User = user;
	}
	public Book getBook() {
		return Book;
	}
	public void setBook(Book book) {
		Book = book;
	}
	public LocalDate getDueDate() {
		return DueDate;
	}
	public void setDueDate(LocalDate dueDate) {
		DueDate = dueDate;
	}
	public double getFine() {
		return Fine;
	}
	public void setFine(double fine) {
		Fine = fine;
	}


}
