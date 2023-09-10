import React, { useState, useEffect } from "react";

import Navbar from "../../components/Navbar";

function UserPage() {
  const [userId, setUserId] = useState("");
  const [bookIdToReserve, setBookIdToReserve] = useState("");
  const [reservationDate, setReservationDate] = useState("");
  const [reservedBooks, setReservedBooks] = useState([]);
  const [reservationMessage, setReservationMessage] = useState("");
  const [bookIdToBorrow, setBookIdToBorrow] = useState("");
  const [borrowMessage, setBorrowMessage] = useState("");
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const handleReserveBook = () => {

    fetch(`http://localhost:8083/api/reservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        bookId: bookIdToReserve,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        
        setReservedBooks((prevReservedBooks) => [...prevReservedBooks, { userId, bookId: bookIdToReserve, reservationDate },]);
        setReservationMessage("Book reserved successfully.");
      })
      .catch((error) => {
        console.error("Error reserving book:", error);
        setReservationMessage("Failed to reserve the book. Please try again.");
      });
  };

  const calculateDueDate = () => {
    const today = new Date();
    const dueDate = new Date(today);
    dueDate.setDate(today.getDate() + 40);
    return dueDate.toISOString().split('T')[0]; // Format as yyyy-mm-dd
  };
  const handleBorrowBook = () => {
    

    fetch(`http://localhost:8083/api/borrowings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        bookId: bookIdToBorrow,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setBorrowedBooks((prevBorrowedBooks) => [
          ...prevBorrowedBooks,
          { userId, bookId: bookIdToBorrow, borrowDate: reservationDate, dueDate: calculateDueDate() },
        ]);
        setBorrowMessage("Book borrowed successfully.");
      })
      .catch((error) => {
        console.error("Error borrowing book:", error);
        setBorrowMessage("Failed to borrow the book. Please try again.");
      });
  };
  useEffect(() => {
    
    fetch("http://localhost:8083/api/reservations")
      .then((response) => response.json())
      .then((data) => {
        setReservedBooks(data);
      })
      .catch((error) => {
        console.error("Error fetching reserved books:", error);
      });
  }, []);

  return (
    <div className="user-management">
      <Navbar />

      {/* Reserve a book */}
      <div className="reserve-book mt-4 center row g-3 container ms-4">
        <div className="d-flex justify-content-center align-items-center flex-column">
        <h3 className="text-center border-bottom w-90">Reserve a Book</h3>
        <div className=" mt-4 center row g-3 container ms-4">
        <div className="mb-3 col">
          <label for="User Id" class="form-label">User Id :
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 col">
          <label for="Book Id" class="form-label">Book Id :
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Book ID to Reserve"
            value={bookIdToReserve}
            onChange={(e) => setBookIdToReserve(e.target.value)}
          />
        </div>
        <div className=" text-center">
          <label for="Reservation Date" class="form-label">Reservation Date :
          </label>
          <input
            type="date"
            class="form-control"
            placeholder="Reservation Date"
            value={reservationDate}
            onChange={(e) => setReservationDate(e.target.value)}
          />
        </div>

        <div>
          <div className="button-container mt-3 text-center">
            <button onClick={handleReserveBook} type="button" class="btn btn-primary btn-sm">Reserve</button>
              </div>
              </div>
        </div >
        <div className="text-center">
          {reservationMessage && (
            <p className="reservation-message">{reservationMessage}</p>
          )}
          </div>
          </div>
      </div>
    
      {/* Borrow a book */}
      <div className="borrow-book mt-4 center row g-3 container ms-4">
        <h3 className="text-center border-bottom w-90">Borrow a Book</h3>
        <div className="mb-3 col">
          <label for="User Id" class="form-label">User Id :
          </label>
          <input
            type="text"
            placeholder="Enter User ID"
            class="form-control"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 col">
          <label for="Book Id" class="form-label">Book Id :
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Book ID to Borrow"
            value={bookIdToBorrow}
            onChange={(e) => setBookIdToBorrow(e.target.value)}
          />
        </div>
        <div className=" text-center">
          <label for="Borrow Date" class="form-label">Borrow Date :
          </label>
          <input
            type="date"
            class="form-control"
            placeholder="Borrow Date"
            value={reservationDate}
            onChange={(e) => setReservationDate(e.target.value)}
          />
        </div>
        <div className="button-container text-center">
          <button onClick={handleBorrowBook} type="button" class="btn btn-primary btn-sm">Borrow</button>
        </div>
        <div className="text-center">
          {borrowMessage && <p className="borrow-message">{borrowMessage}</p>}
        </div>
      </div>
      {/* Reserved Books Table */}
      {reservedBooks.length > 0 && (
        <div className="reserved-books mt-4 mb-4 container">
          <h3 className="text-center mt-4 mb-3">Reserved Books</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Reservation ID</th>
                <th scope="col">User </th>
                <th scope="col">Book </th>
                <th scope="col">Reservation Date</th>
              </tr>
            </thead>
            <tbody>
              {reservedBooks.map((reservation) => (
                <tr key={reservation.reservationId}>
                  <td>{reservation.reservationID}</td>
                  <td>{reservation.user ? `${reservation.user.firstName} ${reservation.user.lastName}` : 'N/A'}</td>
                  <td>{reservation.book ? reservation.book.title : 'N/A'}</td>
                  <td>{reservation.reservationDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* Borrowed Books Table */}
      {borrowedBooks.length > 0 && (
        <div className="borrowed-books mt-4 mb-4 container">
          <h3 className="text-center mt-4">Borrowed Books</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                 
                <th scope="col">User ID</th>
                <th scope="col">Book ID</th>
                <th scope="col">Borrow Date</th>
                <th scope="col">Due Date</th>
              </tr>
            </thead>
            <tbody>
              {borrowedBooks.map((book, index) => (
                <tr key={index}>
                  
                  <td>{book.userId}</td>
                  <td>{book.bookId}</td>
                  <td>{book.borrowDate}</td>
                  <td>{book.dueDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  

  );
}

export default UserPage;
