import React, { useState, useEffect }  from 'react';
import './BorrowingTable.css'
const BorrowingTable = () => {
    const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    // Fetch the list of borrowed books from your Spring Boot API
    fetch('http://localhost:8083/api/borrowings') // Update the URL to match your Spring Boot API endpoint
      .then(response => response.json())
      .then(data => {
        setBorrowedBooks(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching borrowed books:', error);
      });
  }, []);
  return (
    <div className ="Borrowed Books">
      <h2>Borrowed Books</h2>
      <table className = "custom-table5" >
        <thead>
          <tr>
           <th>Borrowing ID</th> 
            <th>User ID</th>
            <th>Book ID</th>
            <th>Borrow Date</th>
            <th>Due Date</th>
            <th>Return Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
         {borrowedBooks.map((borrowing, index) => (
             <tr key={index}>
    <td>{borrowing.borrowingID}</td>
    <td>{borrowing.user ? borrowing.user.id : 'User ID not available'}</td>
    <td>{borrowing.book ? borrowing.book.id : 'Book ID not available'}</td>
    <td>{borrowing.borrowDate}</td>
    <td>{borrowing.dueDate}</td>
    <td>{borrowing.returnDate}</td>
    <td>{borrowing.status}</td>
  </tr>
))}

        </tbody>
      </table>
    </div>
  );
};

export default BorrowingTable;
