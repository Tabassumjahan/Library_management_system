import React, { useState, useEffect } from 'react';
import './BookList.css';
import BookSearch from './BookSearch';

const BookList = () => {
    
  const [books, setBooks] = useState([]);
  

    useEffect(() => {
       const apiUrl = 'http://localhost:8083/api/books'; // Update with your API URL

    // Fetch the list of books from the API
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
          setBooks(data);
          console.log(data)
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
    }, []);

    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (query) => {
    // Implement your search logic here
    // You can update the book list based on the search query
    // For example, you can filter the books array based on the query
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
    <div className="BookList">
        <h2>Book List</h2>
    <BookSearch onSearch={handleSearch} />
     <div className="space-after-search"></div>
    
     {/* Pass the search function */}
        
    <table className="custom-table">
        <thead>
                <tr>
            <th>BookID</th>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Subject</th>
            <th>Publisher</th>
            <th>PublicationDate</th>
            <th>Quantity</th>
            <th>Available Quantity</th>
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
            : books.map(book => (
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
