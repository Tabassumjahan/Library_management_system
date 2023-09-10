import React, { useState, useEffect } from "react";
import "./BookList.css";
import BookSearch from "./BookSearch";
import Navbar from "./Navbar";

const BookList = () => {
  const user = JSON.parse (localStorage.getItem("User"))
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:8083/api/books"; // Update with your API URL

    // Fetch the list of books from the API
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setBooks(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
   
    const filteredBooks = books.filter((book) => {
      const lowerCaseQuery = query.toLowerCase();
      return (
        book.title.toLowerCase().includes(lowerCaseQuery) ||
        book.author.toLowerCase().includes(lowerCaseQuery) ||
        book.subject.toLowerCase().includes(lowerCaseQuery)
      );
    });

    // Update the books state with the filtered results
    setBooks(filteredBooks);
  };
  return (
    
    <div className="BookList mt-4">
      {user.email != "admin@123" && <Navbar /> }
      <h2 className="text-center mt-4 my-4">BOOK LIST </h2>
      <div className="d-flex justify-content-center align-items-center flex-column"></div>
      <BookSearch onSearch={handleSearch} />
      <div className="space-after-search"></div>

      {/* Pass the search function */}

      <table className="table table-striped container">
        <thead>
          <tr>
            <th scope="col">BookID</th>
            <th scope="col"> Title</th>
            <th scope="col">Author</th>
            <th scope="col">ISBN</th>
            <th scope="col">Subject</th>
            <th scope="col">Publisher</th>
            <th scope="col">PublicationDate</th>
            <th scope="col">Quantity</th>
            <th scope="col">Available Quantity</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {searchResults.length > 0
            ? searchResults.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.isbn}</td>
                  <td>{book.subject}</td>
                  <td>{book.publisher}</td>
                  <td>{book.publicationDate}</td>
                  <td>{book.quantity}</td>
                  <td>{book.availableQuantity}</td>
                </tr>
              ))
            : books.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.isbn}</td>
                  <td>{book.subject}</td>
                  <td>{book.publisher}</td>
                  <td>{book.publicationDate}</td>
                  <td>{book.quantity}</td>
                  <td>{book.availableQuantity}</td>

                  {/* Display more data as needed */}
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
