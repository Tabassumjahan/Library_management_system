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
    setFormData({
      userId: '',
      bookId: '',
      reservationDate: '',
    });
  };

  return (
    <div className="AddUser mt-3 center row g-3 container ms-4">
      <div className="d-flex justify-content-center align-items-center flex-column">
      <h3 className= " text-center mt-4 mb-4 container"> Reserve Book</h3>
      <form onSubmit={handleSubmit}>
      <div className=" mt-4 center row g-3 container ms-4">
      <div className="mb-3 col mt-3">
        <label className = 'form-label'>User ID:</label>
        <input
          type= "text"
          name="userId"
          className="form-control"
          value={formData.userId}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3 col mt-3">
        <label className = 'form-label'>Book ID:</label>
        <input
          type="text"
          name="bookId"
          className="form-control"
          value={formData.bookId}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className = 'form-label'>Reservation Date:</label>
        <input
          type="date"
          name="reservationDate"
          className="form-control"
          value={formData.reservationDate}
          onChange={handleChange}
          required
        />
        </div>
          <div className="button-container mt-3 text-center mb-3">
              <button type="submit" className="btn btn-primary">Make Reservation</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReservationForm;
