package com.ars.service;

import com.ars.entity.Book;
import com.ars.entity.User;
import com.ars.repository.BookRepository;
import com.ars.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ars.entity.Borrowing;
import com.ars.repository.BorrowingRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional; // Import for handling Optional

@Service
public class BorrowingService {

    private final BorrowingRepository borrowingRepository;
    private final UserRepository userRepository;
    private final BookRepository bookRepository;

    @Autowired
    public BorrowingService(BorrowingRepository borrowingRepository, UserRepository userRepository, BookRepository bookRepository) {
        this.borrowingRepository = borrowingRepository;
        this.userRepository = userRepository;
        this.bookRepository = bookRepository;
    }

    public List<Borrowing> getAllBorrowings() {
        return borrowingRepository.findAll();
    }

    public Borrowing getBorrowingById(Long borrowingId) {
        return borrowingRepository.findById(borrowingId)
                .orElseThrow(() -> new RuntimeException("Borrowing not found with ID: " + borrowingId));
    }

    public Borrowing createBorrowing(Map<String,String> borrowing) {
        Borrowing newBorrowing = new Borrowing();
        newBorrowing.setBorrowDate(LocalDate.parse(borrowing.get("borrowDate")));
        newBorrowing.setStatus(borrowing.get("status"));
        newBorrowing.setReturnDate(LocalDate.parse(borrowing.get("returnDate")));
        newBorrowing.setDueDate(LocalDate.parse(borrowing.get("dueDate")));
        Long userId = Long.parseLong(borrowing.get("userId"));
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            newBorrowing.setUser(userOptional.get());
        } else {
            throw new RuntimeException("User not found with ID: " + userId);
        }
        Long bookId = Long.parseLong(borrowing.get("bookId"));
        Optional<Book> bookOptional = bookRepository.findById(bookId);
        if (bookOptional.isPresent()) {
            newBorrowing.setBook(bookOptional.get());
        } else {
            throw new RuntimeException("Book not found with ID: " + bookId);
        }
        return borrowingRepository.save(newBorrowing);
    }

    public Borrowing updateBorrowing(Long borrowingId, Borrowing updatedBorrowing) {
        Borrowing existingBorrowing = borrowingRepository.findById(borrowingId)
                .orElseThrow(() -> new RuntimeException("Borrowing not found with ID: " + borrowingId));

        // Update borrowing properties here
        existingBorrowing.setDueDate(updatedBorrowing.getDueDate());
        existingBorrowing.setStatus(updatedBorrowing.getStatus());
        // Update other properties

        return borrowingRepository.save(existingBorrowing);
    }

    public void deleteBorrowing(Long borrowingId) {
        borrowingRepository.deleteById(borrowingId);
    }
}
