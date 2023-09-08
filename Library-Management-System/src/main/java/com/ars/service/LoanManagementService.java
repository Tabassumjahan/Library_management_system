package com.ars.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import com.ars.entity.LoanManagement;
import com.ars.repository.LoanManagementRepository;

import java.util.List;

@Service
public class LoanManagementService {
	
	 private final LoanManagementRepository loanManagementRepository;

	    @Autowired
	    public LoanManagementService(LoanManagementRepository loanManagementRepository) {
	        this.loanManagementRepository = loanManagementRepository;
	    }

	    public List<LoanManagement> getAllLoans() {
	        return loanManagementRepository.findAll();
	    }

	    public LoanManagement getLoanById(Long loanId) throws NotFoundException {
	        return loanManagementRepository.findById(loanId)
	                .orElseThrow(() -> new NotFoundException());
	    }

	    public LoanManagement createLoan(LoanManagement loan) {
	        return loanManagementRepository.save(loan);
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
