package com.ars.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ars.entity.Borrowing;

public interface BorrowingRepository extends JpaRepository<Borrowing, Long> {

}
