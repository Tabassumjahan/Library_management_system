import React, { useState, useEffect } from 'react';
import './Reservation.css'
function Reservation() {
  // State to manage reservation data
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // Fetch reservation data from your backend API here and set it using setReservations
    // Example API call:
    fetch('http://localhost:8083/api/reservations')
       .then(response => response.json())
       .then(data => setReservations(data))
       .catch(error => console.error('Error fetching reservations:', error));
  }, []);

     const handleReservationSubmit = (formData) => {
    // Send the reservation data to your backend API for processing
    // Example API call:
    fetch('http://localhost:8083/api/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(newReservation => {
        // Add the newly created reservation to the list
        setReservations([...reservations, newReservation]);
      })
      .catch(error => console.error('Error creating reservation:', error));
  };

  return (
    <div className = "Reservation">
      <h2>Reservations</h2>

      <table className = "custom-table3">
        <thead>
          <tr>
            <th>Reservation ID</th>
            <th>User</th>
            <th>Book</th>
            <th>Reservation Date</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.reservationId}>
              <td>{reservation.reservationID}</td>
              <td>
      {reservation.user ? `${reservation.user.firstName} ${reservation.user.lastName}` : 'N/A'}
    </td>
    <td>{reservation.book ? reservation.book.title : 'N/A'}</td>
              <td>{reservation.reservationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Reservation;
