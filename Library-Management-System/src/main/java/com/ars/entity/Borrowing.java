package com.ars.entity;

import java.time.LocalDate;

import jakarta.persistence.*;

@Entity
@Table(name = "Borrowing")
public class Borrowing {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long BorrowingID;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "UserID")
    private User User;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "BookID")
    private Book Book;

    private LocalDate BorrowDate;
    private LocalDate DueDate;
    private LocalDate ReturnDate;
    private String Status;
    
	public Long getBorrowingID() {
		return BorrowingID;
	}
	public void setBorrowingID(Long borrowingID) {
		BorrowingID = borrowingID;
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
	public LocalDate getBorrowDate() {
		return BorrowDate;
	}
	public void setBorrowDate(LocalDate borrowDate) {
		this.BorrowDate = borrowDate;
	}
	public LocalDate getDueDate() {
		return DueDate;
	}
	public void setDueDate(LocalDate dueDate) {
		this.DueDate = dueDate;
	}
	public LocalDate getReturnDate() {
		return ReturnDate;
	}
	public void setReturnDate(LocalDate returnDate) {
		this.ReturnDate = returnDate;
	}
	public String getStatus() {
		return Status;
	}
	public void setStatus(String status) {
		this.Status = status;
	}


}
