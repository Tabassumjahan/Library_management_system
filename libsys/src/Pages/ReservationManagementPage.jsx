import React, { useState } from 'react';
import Reservation from '../components/Reservation';
import BookList from '../components/BookList';
import ReservationForm from '../components/ReservationForm';
import Navbar from '../components/Navbar';
import './ReservationManagementPage.css'

const ReservationManagementPage = () => {
const [reservations, setReservations] = useState([]);
   const handleReservationSubmit = (formData) => {
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
        setReservations([...reservations, newReservation]);
      })
      .catch(error => console.error('Error creating reservation:', error));
  };
  return (
    <div mb-3>
      <Navbar />

      <h2 className=" text-center mt-4 mb-3">Reservation Management</h2>

      <div className="col text-center container w-80 "> 
          <img
            src="https://img.freepik.com/free-photo/creative-assortment-with-different-books_23-2148851019.jpg?w=996&t=st=1694352294~exp=1694352894~hmac=eb2118a2b9fe66193dcd89bf91b81e92e54aeb732ffd746574152aa167f802ea" class="img-fluid20" ></img>
      </div>
      <ReservationForm onSubmit={handleReservationSubmit} />
      < Reservation />
    </div>
  );
};

export default ReservationManagementPage;
