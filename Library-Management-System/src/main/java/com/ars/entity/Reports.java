package com.ars.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Reports")
public class Reports {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reportId;

    private String userActivity;
    private String bookStatus;
    private double fineCollected;
    
	public Long getReportID() {
		return reportId;
	}
	public void setReportID(Long reportID) {
		reportID = reportID;
	}
	public String getUserActivity() {
		return userActivity;
	}
	public void setUserActivity(String userActivity) {
		userActivity = userActivity;
	}
	public String getBookStatus() {
		return bookStatus;
	}
	public void setBookStatus(String bookStatus) {
		bookStatus = bookStatus;
	}
	public double getFineCollected() {
		return fineCollected;
	}
	public void setFineCollected(double fineCollected) {
		fineCollected = fineCollected;
	}


}
