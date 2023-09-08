import React, { useState } from 'react';
import Reservation from '../components/Reservation';
import BookList from '../components/BookList';
import ReservationForm from '../components/ReservationForm';
const ReservationManagementPage = () => {
const [reservations, setReservations] = useState([]);
   const handleReservationSubmit = (formData) => {
    // Implement your logic for handling the reservation submission here
     console.log('Form Data:', formData);
     
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
    // You can send the formData to your API or perform other actions here

  // Implement your reservation management page content here
  return (
    <div>
          <h2>Reservation Management</h2>
      <ReservationForm onSubmit={handleReservationSubmit} />
          < Reservation />
          <BookList />

      {/* Add your reservation management components, tables, and reports */}
    </div>
  );
};

export default ReservationManagementPage;
