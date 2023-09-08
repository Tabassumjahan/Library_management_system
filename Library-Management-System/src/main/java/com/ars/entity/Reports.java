package com.ars.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Reports")
public class Reports {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ReportID;

    private String UserActivity;
    private String BookStatus;
    private double FineCollected;
    
	public Long getReportID() {
		return ReportID;
	}
	public void setReportID(Long reportID) {
		ReportID = reportID;
	}
	public String getUserActivity() {
		return UserActivity;
	}
	public void setUserActivity(String userActivity) {
		UserActivity = userActivity;
	}
	public String getBookStatus() {
		return BookStatus;
	}
	public void setBookStatus(String bookStatus) {
		BookStatus = bookStatus;
	}
	public double getFineCollected() {
		return FineCollected;
	}
	public void setFineCollected(double fineCollected) {
		FineCollected = fineCollected;
	}


}
