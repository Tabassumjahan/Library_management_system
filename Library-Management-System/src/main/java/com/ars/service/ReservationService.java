package com.ars.service;

import com.ars.entity.Book;
import com.ars.entity.LoanManagement;
import com.ars.entity.User;
import com.ars.repository.BookRepository;
import com.ars.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ars.entity.Reservation;
import com.ars.repository.ReservationRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class ReservationService {
	
	private final ReservationRepository reservationRepository;
    private final UserRepository userRepository;
    private final BookRepository bookRepository;

    @Autowired
    public ReservationService(ReservationRepository reservationRepository, UserRepository userRepository, BookRepository bookRepository) {
        this.reservationRepository = reservationRepository;
        this.userRepository = userRepository;
        this.bookRepository = bookRepository;
    }

    public List<Reservation> getAllReservations() {
        return reservationRepository.findAll();
    }

    public Reservation getReservationById(Long reservationId) {
        return reservationRepository.findById(reservationId)
                .orElseThrow();
    }

    public Reservation createReservation(Map<String,String> reservation) {
        Reservation reserve = new Reservation();
        reserve.setReservationDate(LocalDate.parse(reservation.get("reservationDate")));
        Long userId = Long.parseLong(reservation.get("userId"));
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            reserve.setUser(userOptional.get());
        } else {
            throw new RuntimeException("User not found with ID: " + userId);
        }
        Long bookId = Long.parseLong(reservation.get("bookId"));
        Optional<Book> bookOptional = bookRepository.findById(bookId);
        if (bookOptional.isPresent()) {
            reserve.setBook(bookOptional.get());
        } else {
            throw new RuntimeException("Book not found with ID: " + bookId);
        }
        return reservationRepository.save(reserve);
    }

    public void deleteReservation(Long reservationId) {
        reservationRepository.deleteById(reservationId);
    }
	

}
