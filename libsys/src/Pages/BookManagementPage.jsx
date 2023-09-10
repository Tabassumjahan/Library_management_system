// BookManagementPage.js
import React, { useState, useEffect } from "react";
import BookList from "../components/BookList";
import AddBookForm from "../components/Book/AddBookForm";
import UpdateBookForm from "../components/Book/UpdateBookForm";
import "./BookManagementPage.css";
import Navbar from "../components/Navbar";

const BookManagementPage = () => {
  const [books, setBooks] = useState([]);

  const getBookList = () => {
    const apiUrl = "http://localhost:8083/api/books";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  };
  useEffect(() => {
    getBookList();
  }, []);

  return (
    <div>
      <Navbar />
      <h2 className="container mt-3 mb-3 text-center">Book Management</h2>
      <div className="col text-center container w-80 ">
        <img
          src="https://img.freepik.com/free-photo/books-arrangement-table_23-2150264095.jpg?size=626&ext=jpg&ga=GA1.1.1158874087.1694090533&semt=ais "
          class="img-fluid3"
        ></img>
      </div>
      <div className="container mt-3">
        <AddBookForm getBookList={getBookList} />
      </div>

      <div className="container mt-4">
        <BookList getBookList={getBookList} books={books} setBooks={setBooks} />
      </div>
    </div>
  );
};

export default BookManagementPage;
