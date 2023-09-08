import React, { useState, useEffect } from 'react';
import './LoanManagement.css';
function LoanManagement() {
  // State to manage loan data
  const [loans, setLoans] = useState([]);
  // State for form inputs
  const [loanData, setLoanData] = useState({
    userId: '',
    bookId: '',
    dueDate: '',
    fine: '',
  });

  useEffect(() => {
    // Fetch loan data from your backend API here and set it using setLoans
    // Example API call:
    fetch('http://localhost:8083/api/loanmanagement')
       .then(response => response.json())
       .then(data => setLoans(data))
       .catch(error => console.error('Error fetching loans:', error));
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoanData({ ...loanData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a POST request to your backend to create a new loan
    // Example API call:
    fetch('http://localhost:8083/api/loanmanagement', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(loanData),
     })
       .then(response => response.json())
       .then(newLoan => {
         setLoans([...loans, newLoan]);
         setLoanData({
           userId: '',
           bookId: '',
           dueDate: '',
           fine: '',
         });
      })
       .catch(error => console.error('Error creating loan:', error));
  };

  return (
    <div>
      <h2>Loan Management</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="custom-label">User ID:</label>
          <input
            type="text"
            name="userId"
            value={loanData.userId}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label className="custom-label">Book ID:</label>
          <input
            type="text"
            name="bookId"
            value={loanData.bookId}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label className="custom-label">Due Date:</label>
          <input
            type="date"
            name="dueDate"
            value={loanData.dueDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label className="custom-label">Fine:</label>
          <input
            type="text"
            name="fine"
            value={loanData.fine}
            onChange={handleInputChange}
            required
          />
              </div>
              <br></br>
        <button type="submit">Create Loan</button>
          </form>
          

        <div className = "LoanList">


        <h2>Loan List</h2>
        <table className = "custom-table1">
        <thead>
          <tr>
            <th>Loan ID</th>
            <th>User ID</th>
            <th>Book ID</th>
            <th>Due Date</th>
            <th>Fine</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.loanID}>
              <td>{loan.loanID}</td>
              <td>{loan.user? loan.user.userId : 'N/A' }</td>
              <td>{loan.book? loan.book.bookId : 'N/A'}</td>
              <td>{loan.dueDate}</td>
              <td>{loan.fine}</td>
              </tr>
              
        ))}
        </tbody>
        </table>
        </div>
    </div>
  );
}

export default LoanManagement;
