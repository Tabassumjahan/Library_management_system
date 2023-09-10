import React, { useState, useEffect } from 'react';

function Reservation() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8083/api/reservations')
       .then(response => response.json())
       .then(data => setReservations(data))
       .catch(error => console.error('Error fetching reservations:', error));
  }, []);

     const handleReservationSubmit = (formData) => {
    fetch('http://localhost:8083/api/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(newReservation => {
        setReservations([...reservations, newReservation]);
      })
      .catch(error => console.error('Error creating reservation:', error));
  };

  return (
    <div className = " mt-4 mb-3">
      <h2 className=" text-center mt-5 mb-3 border-bottom w-70">Reservations</h2>

      <table className = "table table-striped container">
        <thead>
          <tr>
            <th scope="col">Reservation ID</th>
            <th scope="col">User</th>
            <th scope="col">Book</th>
            <th scope="col">Reservation Date</th>
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
