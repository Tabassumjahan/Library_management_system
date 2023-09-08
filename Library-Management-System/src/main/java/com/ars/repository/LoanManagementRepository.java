package com.ars.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ars.entity.LoanManagement;

public interface LoanManagementRepository extends JpaRepository<LoanManagement, Long>{

}
