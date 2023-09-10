package com.ars.entity;

import java.time.LocalDate;

import jakarta.persistence.*;

@Entity
@Table(name = "Reservation")

public class Reservation {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reservationID;

    @ManyToOne
    @JoinColumn(name = "userID")
    private User User;

    @ManyToOne
    @JoinColumn(name = "bookID")
    private Book Book;

    private LocalDate reservationDate;

	public Long getReservationID() {
		return reservationID;
	}

	public void setReservationID(Long reservationID) {
		this.reservationID = reservationID;
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

	public LocalDate getReservationDate() {
		return reservationDate;
	}

	public void setReservationDate(LocalDate reservationDate) {
		this.reservationDate = reservationDate;
	}

}
