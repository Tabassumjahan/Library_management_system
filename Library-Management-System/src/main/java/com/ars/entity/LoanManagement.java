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
    private Long loadId;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User User;

    @ManyToOne
    @JoinColumn(name = "bookId")
    private Book Book;

    private LocalDate dueDate;
    private double fine;
    
	public Long getLoanID() {
		return loadId;
	}
	public void setLoanID(Long loanID) {
		this.loadId = loanID;
	}
	public User getUser() {
		return User;
	}
	public void setUser(User user) {
		this.User = user;
	}
	public Book getBook() {
		return Book;
	}
	public void setBook(Book book) {
		this.Book = book;
	}
	public LocalDate getDueDate() {
		return dueDate;
	}
	public void setDueDate(LocalDate dueDate) {
		this.dueDate = dueDate;
	}
	public double getFine() {
		return fine;
	}
	public void setFine(double fine) {
		this.fine = fine;
	}

}
