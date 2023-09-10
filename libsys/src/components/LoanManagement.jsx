import React, { useState, useEffect } from "react";
import "./LoanManagement.css";
function LoanManagement() {
  const [loans, setLoans] = useState([]);
 
  const [loanData, setLoanData] = useState({
    userId: "",
    bookId: "",
    dueDate: "",
    fine: "",
  });

  useEffect(() => {
    // Fetch loan data from your backend API here and set it using setLoans
    // Example API call:
    fetch("http://localhost:8083/api/loanmanagement")
      .then((response) => response.json())
      .then((data) => setLoans(data))
      .catch((error) => console.error("Error fetching loans:", error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoanData({ ...loanData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a POST request to your backend to create a new loan
    // Example API call:
    fetch("http://localhost:8083/api/loanmanagement", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loanData),
    })
      .then((response) => response.json())
      .then((newLoan) => {
        setLoans([...loans, newLoan]);
        setLoanData({
          userId: "",
          bookId: "",
          dueDate: "",
          fine: "",
        });
      })
      .catch((error) => console.error("Error creating loan:", error));
  };

  return (
    <div className="LoanBook mt-4 center row g-3 container ms-4">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div className="" style={{ width: "50%" }}>
          <h3 className="text-center border-bottom w-80">Loan</h3>
          <form onSubmit={handleSubmit}>
            <div className="LoanBook mt-4 center row g-3 container ms-4">
              <div className="col mt-3">
                <label className="form-label">User ID:</label>
                <input
                  type="text"
                  name="userId"
                  className="form-control"
                  value={loanData.userId}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col mt-3">
                <label className="form-label">Book ID:</label>
                <input
                  type="text"
                  name="bookId"
                  className="form-control"
                  value={loanData.bookId}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label className="form-label">Due Date:</label>
                <input
                  type="date"
                  name="dueDate"
                  className="form-control"
                  value={loanData.dueDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label className="fine-label">Fine:</label>
                <input
                  type="text"
                  name="fine"
                  className="form-control"
                  value={loanData.fine}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="button-container mt-3 text-center">
                <button type="submit" className="btn btn-primary">
                  Create Loan
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="LoanList">
        <div className="container mt-5">
          <h3 className="text-center mt-4 border-bottom w-80">Loan List</h3>
          <table className="table table-striped mt-4 ms-4">
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
                  <td>{loan.user ? loan.user.id : "N/A"}</td>
                  <td>{loan.book ? loan.book.id : "N/A"}</td>
                  <td>{loan.dueDate}</td>
                  <td>{loan.fine}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default LoanManagement;
