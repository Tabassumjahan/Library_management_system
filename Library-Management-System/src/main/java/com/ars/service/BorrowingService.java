package com.ars.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ars.entity.Borrowing;
import com.ars.repository.BorrowingRepository;

import java.util.List;

@Service 

public class BorrowingService {
	
	 private final BorrowingRepository borrowingRepository;

	    @Autowired
	    public BorrowingService(BorrowingRepository borrowingRepository) {
	        this.borrowingRepository = borrowingRepository;
	    }

	    public List<Borrowing> getAllBorrowings() {
	        return borrowingRepository.findAll();
	    }

	    public Borrowing getBorrowingById(Long borrowingId) {
	        return borrowingRepository.findById(borrowingId)
	                .orElseThrow();
	    }

	    public Borrowing createBorrowing(Borrowing borrowing) {
	        return borrowingRepository.save(borrowing);
	    }

	    public Borrowing updateBorrowing(Long borrowingId, Borrowing updatedBorrowing) {
	        Borrowing existingBorrowing = borrowingRepository.findById(borrowingId)
	                .orElseThrow();

	        // Update borrowing properties here
	        existingBorrowing.setDueDate(updatedBorrowing.getDueDate());
	        // Update other properties

	        return borrowingRepository.save(existingBorrowing);
	    }

	    public void deleteBorrowing(Long borrowingId) {
	        borrowingRepository.deleteById(borrowingId);
	    }

}
