import React, { useState, useEffect }  from 'react';

const BorrowingTable = () => {
    const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8083/api/borrowings') 
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
    <div className ="container mt-5 mb-4">
      <h3 className="text-center mt-4  mb-3border-bottom w-70">Borrowed Books</h3>
      <table className = "table table-striped" >
        <thead>
          <tr>
          <th scope="col">Borrowing ID</th> 
            <th scope="col">User ID</th>
            <th scope="col">Book ID</th>
            <th scope="col">Borrow Date</th>
            <th scope="col">Due Date</th>
            <th scope="col">Return Date</th>
            <th scope="col">Status</th>
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
