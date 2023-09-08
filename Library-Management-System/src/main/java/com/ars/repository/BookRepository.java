package com.ars.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ars.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long>{

}
