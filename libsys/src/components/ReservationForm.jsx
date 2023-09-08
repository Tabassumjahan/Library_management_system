import React, { useState } from 'react';

function ReservationForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    userId: '',
    bookId: '',
    reservationDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // Clear form fields
    setFormData({
      userId: '',
      bookId: '',
      reservationDate: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className = 'custom-label'>User ID:</label>
        <input
          type="text"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className = 'custom-label'>Book ID:</label>
        <input
          type="text"
          name="bookId"
          value={formData.bookId}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className = 'custom-label'>Reservation Date:</label>
        <input
          type="date"
          name="reservationDate"
          value={formData.reservationDate}
          onChange={handleChange}
          required
        />
          </div>
          <br />
      <button type="submit">Make Reservation</button>
    </form>
  );
}

export default ReservationForm;
