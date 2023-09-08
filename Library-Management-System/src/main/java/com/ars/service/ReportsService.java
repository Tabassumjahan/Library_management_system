package com.ars.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ars.entity.Reports;
import com.ars.repository.ReportsRepository;

import java.util.List;

@Service
public class ReportsService {
	
	private final ReportsRepository reportsRepository;

    @Autowired
    public ReportsService(ReportsRepository reportsRepository) {
        this.reportsRepository = reportsRepository;
    }

    public List<Reports> getAllReports() {
        return reportsRepository.findAll();
    }

    public Reports getReportById(Long reportId) {
        return reportsRepository.findById(reportId)
                .orElseThrow();
    }

    public Reports createReport(Reports report) {
        return reportsRepository.save(report);
    }

    public void deleteReport(Long reportId) {
        reportsRepository.deleteById(reportId);
    }

}
