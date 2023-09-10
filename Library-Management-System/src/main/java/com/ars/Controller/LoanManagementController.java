package com.ars.Controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ars.entity.LoanManagement;
import com.ars.repository.LoanManagementRepository;
import com.ars.service.LoanManagementService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/loanmanagement")
public class LoanManagementController {
	
	 private final LoanManagementService loanManagementService;

	    @Autowired
	    public LoanManagementController(LoanManagementService loanManagementService) {
	        this.loanManagementService = loanManagementService;
	    }

	    @GetMapping
	    public List<LoanManagement> getAllLoans() {
	        return loanManagementService.getAllLoans();
	    }

	    @GetMapping("/{loanId}")
	    public LoanManagement getLoanById(@PathVariable Long loanId) throws NotFoundException {
	        return loanManagementService.getLoanById(loanId);
	    }

	    @PostMapping
	    public LoanManagement createLoan(@RequestBody Map<String,String> loan) {
	        return loanManagementService.createLoan(loan);
	    }

	    @PutMapping("/{loanId}")
	    public LoanManagement updateLoan(@PathVariable Long loanId, @RequestBody LoanManagement updatedLoan) throws NotFoundException {
	        return loanManagementService.updateLoan(loanId, updatedLoan);
	    }

	    @DeleteMapping("/{loanId}")
	    public void deleteLoan(@PathVariable Long loanId) {
	        loanManagementService.deleteLoan(loanId);
	    }

}
