package com.ars.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ars.entity.Reports;

public interface ReportsRepository extends JpaRepository<Reports, Long> {

}
