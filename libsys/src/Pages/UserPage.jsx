import React, { useState, useEffect } from 'react';
import './UserPage.css';

function UserPage() {
  const [userId, setUserId] = useState('');
  const [bookIdToReserve, setBookIdToReserve] = useState('');
    const [reservationDate, setReservationDate] = useState('');
    const [reservedBooks, setReservedBooks] = useState([]);
    const [reservationMessage, setReservationMessage] = useState('');
    const [bookIdToBorrow, setBookIdToBorrow] = useState('');
  const [borrowMessage, setBorrowMessage] = useState('');

  const handleReserveBook = () => {
    // Implement logic to reserve a book
    // You can make a POST API request to your backend
    // Send userBookId and bookIdToReserve as request data

    fetch(`http://localhost:8083/api/reservations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        bookId: bookIdToReserve,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle API response (e.g., show a success message)
        // Update reservedBooks state if necessary

        // Assuming the API response includes the newly reserved book
          setReservedBooks((prevReservedBooks) => [...prevReservedBooks, data]);
          setReservationMessage('Book reserved successfully.');
      })
      .catch((error) => {
          console.error('Error reserving book:', error);
          setReservationMessage('Failed to reserve the book. Please try again.');
      });
  };
const handleBorrowBook = () => {
    // Implement logic to borrow a book
    // You can make a POST API request to your backend
    // Send userId and bookIdToBorrow as request data

    fetch(`http://localhost:8083/api/borrowings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        bookId: bookIdToBorrow,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle API response (e.g., show a success message)
        // You can update borrowMessage state or take any other actions

        setBorrowMessage('Book borrowed successfully.');
      })
      .catch((error) => {
        console.error('Error borrowing book:', error);
        setBorrowMessage('Failed to borrow the book. Please try again.');
      });
  };
  useEffect(() => {
    // Fetch reserved books when the component mounts
    // You can make an API request to get the list of reserved books
    fetch('http://localhost:8083/api/reservations')
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API returns an array of reserved books
        setReservedBooks(data);
      })
      .catch((error) => {
        console.error('Error fetching reserved books:', error);
      });
  }, []);

  return (
    <div className="user-management">
      

      {/* Reserve a book */}
      <div className="reserve-book">
        <h3>Reserve a Book</h3>
        <div className="input-container">
        <input
          type="text"
          placeholder="Enter User ID"
          value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                      required
        />
        <input
          type="text"
          placeholder="Enter Book ID to Reserve"
          value={bookIdToReserve}
          onChange={(e) => setBookIdToReserve(e.target.value)}
         />
          <input
          type="date"
          placeholder="Reservation Date"
          value={reservationDate}
          onChange={(e) => setReservationDate(e.target.value)}
              />
              </div>
        <div className="button-container">
          <button onClick={handleReserveBook}>Reserve</button>
              </div>
              {reservationMessage && <p className="reservation-message">{reservationMessage}</p>}
          </div>
          {/* Borrow a book */}
      <div className="borrow-book">
        <h3>Borrow a Book</h3>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter Book ID to Borrow"
            value={bookIdToBorrow}
            onChange={(e) => setBookIdToBorrow(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button onClick={handleBorrowBook}>Borrow</button>
        </div>
        {borrowMessage && <p className="borrow-message">{borrowMessage}</p>}
      </div>

    </div>
  );
}

export default UserPage;
