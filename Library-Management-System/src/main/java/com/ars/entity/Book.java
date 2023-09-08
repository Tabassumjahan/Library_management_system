package com.ars.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Book")
public class Book {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long BookID;
    private String Title;
    private String Author;
    private String Subject;
    private String ISBN;
    private String Publisher;
    private String PublicationDate;
    private int Quantity;
    private int availableQuantity;
    
	public Long getId() {
		return BookID;
	}
	public void setId(Long id) {
		this.BookID = id;
	}
	public String getTitle() {
		return Title;
	}
	public void setTitle(String title) {
		this.Title = title;
	}
	public String getAuthor() {
		return Author;
	}
	public void setAuthor(String author) {
		this.Author = author;
	}
	public String getSubject() {
		return Subject;
	}
	public void setSubject(String subject) {
		this.Subject = subject;
	}
	public String getIsbn() {
		return ISBN;
	}
	public void setIsbn(String isbn) {
		this.ISBN = isbn;
	}
	public String getPublisher() {
		return Publisher;
	}
	public void setPublisher(String publisher) {
		this.Publisher = publisher;
	}
	public String getPublicationDate() {
		return PublicationDate;
	}
	public void setPublicationDate(String publicationDate) {
		this.PublicationDate = publicationDate;
	}
	public int getQuantity() {
		return Quantity;
	}
	public void setQuantity(int quantity) {
		this.Quantity = quantity;
	}
	public int getAvailableQuantity() {
		return availableQuantity;
	}
	public void setAvailableQuantity(int availableQuantity) {
		this.availableQuantity = availableQuantity;
	}

}
