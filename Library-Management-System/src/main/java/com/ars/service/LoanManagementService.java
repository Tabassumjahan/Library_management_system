package com.ars.service;


import com.ars.entity.Book;
import com.ars.entity.User;
import com.ars.repository.BookRepository;
import com.ars.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import com.ars.entity.LoanManagement;
import com.ars.repository.LoanManagementRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class LoanManagementService {
	
	 private final LoanManagementRepository loanManagementRepository;
	private final UserRepository userRepository;
	private final BookRepository bookRepository;


	@Autowired
	    public LoanManagementService(LoanManagementRepository loanManagementRepository, UserRepository userRepository, BookRepository bookRepository) {
	        this.loanManagementRepository = loanManagementRepository;
		this.userRepository = userRepository;
		this.bookRepository = bookRepository;
	}

	    public List<LoanManagement> getAllLoans() {
	        return loanManagementRepository.findAll();
	    }

	    public LoanManagement getLoanById(Long loanId) throws NotFoundException {
	        return loanManagementRepository.findById(loanId)
	                .orElseThrow(() -> new NotFoundException());
	    }

	    public LoanManagement createLoan(Map<String,String> loan) {
			LoanManagement  newLoan= new LoanManagement();
			newLoan.setDueDate(LocalDate.parse(loan.get("dueDate")));
			Double fine = Double.parseDouble(loan.get("fine"));
			newLoan.setFine(fine);
			Long userId = Long.parseLong(loan.get("userId"));
			Optional<User> userOptional = userRepository.findById(userId);
			if (userOptional.isPresent()) {
				newLoan.setUser(userOptional.get());
			} else {
				throw new RuntimeException("User not found with ID: " + userId);
			}
			Long bookId = Long.parseLong(loan.get("bookId"));
			Optional<Book> bookOptional = bookRepository.findById(bookId);
			if (bookOptional.isPresent()) {
				newLoan.setBook(bookOptional.get());
			} else {
				throw new RuntimeException("Book not found with ID: " + bookId);
			}
			return loanManagementRepository.save(newLoan);
	    }

	    public LoanManagement updateLoan(Long loanId, LoanManagement updatedLoan) throws NotFoundException {
	        LoanManagement existingLoan = loanManagementRepository.findById(loanId)
	                .orElseThrow(() -> new NotFoundException());

	        // Update loan properties here
	        existingLoan.setDueDate(updatedLoan.getDueDate());
	        // Update other properties

	        return loanManagementRepository.save(existingLoan);
	    }

	    public void deleteLoan(Long loanId) {
	        loanManagementRepository.deleteById(loanId);
	    }
	
	
}
