package com.ars.entity;

import java.time.LocalDate;

import jakarta.persistence.*;

@Entity
@Table(name = "Reservation")

public class Reservation {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ReservationID;

    @ManyToOne
    @JoinColumn(name = "UserID")
    private User User;

    @ManyToOne
    @JoinColumn(name = "BookID")
    private Book Book;

    private LocalDate ReservationDate;

	public Long getReservationID() {
		return ReservationID;
	}

	public void setReservationID(Long reservationID) {
		ReservationID = reservationID;
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
		return ReservationDate;
	}

	public void setReservationDate(LocalDate reservationDate) {
		ReservationDate = reservationDate;
	}

}
