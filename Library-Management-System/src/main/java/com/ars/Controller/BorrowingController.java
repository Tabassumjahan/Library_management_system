package com.ars.Controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ars.entity.Borrowing;
import com.ars.repository.BorrowingRepository;
import com.ars.service.BorrowingService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/borrowings")
public class BorrowingController {

    private final BorrowingService borrowingService;

    @Autowired
    public BorrowingController(BorrowingService borrowingService) {
        this.borrowingService = borrowingService;
    }

    @GetMapping
    public List<Borrowing> getAllBorrowings() {
        return borrowingService.getAllBorrowings();
    }

    @GetMapping("/{borrowingId}")
    public Borrowing getBorrowingById(@PathVariable Long borrowingId) {
        return borrowingService.getBorrowingById(borrowingId);
    }

    @PostMapping
    public Borrowing createBorrowing(@RequestBody Map<String,String> borrowing) {
        return borrowingService.createBorrowing(borrowing);
    }

    @PutMapping("/{borrowingId}")
    public Borrowing updateBorrowing(@PathVariable Long borrowingId, @RequestBody Borrowing updatedBorrowing) {
        return borrowingService.updateBorrowing(borrowingId, updatedBorrowing);
    }

    @DeleteMapping("/{borrowingId}")
    public void deleteBorrowing(@PathVariable Long borrowingId) {
        borrowingService.deleteBorrowing(borrowingId);
    }


}
