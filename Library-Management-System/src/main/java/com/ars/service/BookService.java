package com.ars.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ars.entity.Book;
import com.ars.repository.BookRepository;

import java.util.List;

@Service
public class BookService {
	
	private static BookRepository bookRepository = null;

    @Autowired
    public BookService(BookRepository bookRepository) {
        BookService.bookRepository = bookRepository;
    }

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public static Book getBookById(Long bookId) {
        return bookRepository.findById(bookId)
                .orElseThrow();
    }

    public static Book createBook(Book book) {
        return bookRepository.save(book);
    }

    public static Book updateBook(Long bookId, Book updatedBook) {
        updatedBook.setId(bookId);
        return bookRepository.save(updatedBook);
    }

    public static void deleteBook(Long bookId) {
        bookRepository.deleteById(bookId);
    }

}
