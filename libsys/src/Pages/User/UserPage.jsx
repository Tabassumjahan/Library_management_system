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
        
        setReservedBooks((prevReservedBooks) => [...prevReservedBooks, data]);
        setReservationMessage("Book reserved successfully.");
      })
      .catch((error) => {
        console.error("Error reserving book:", error);
        setReservationMessage("Failed to reserve the book. Please try again.");
      });
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
        <h3 className= "text-center border-bottom w-90">Reserve a Book</h3>

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
          <label for= "Book Id"  class="form-label">Book Id :
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
          <label for= "Reservation Date" class="form-label">Reservation Date :
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
        </div >
        <div className="text-center">
        {reservationMessage && (
          <p className="reservation-message">{reservationMessage}</p>
        )}
        </div>
    </div>
    
      {/* Borrow a book */ }
      <div className="borrow-book mt-4 center row g-3 container ms-4">
        <h3 className= "text-center border-bottom w-90">Borrow a Book</h3>
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
          <label for= "Book Id"  class="form-label">Book Id :
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
          <label for= "Borrow Date" class="form-label">Borrow Date :
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
    </div>
  );
}

export default UserPage;
