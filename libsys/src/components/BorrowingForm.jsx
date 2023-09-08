import React, { useState } from 'react';

const BorrowingForm = ({ borrowBook }) => {
  const [formData, setFormData] = useState({ userId: '', bookId: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    borrowBook(formData);
    setFormData({ userId: '', bookId: '' }); // Clear the form fields
  };

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID:</label>
          <input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Book ID:</label>
          <input
            type="text"
            name="bookId"
            value={formData.bookId}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Borrow Book</button>
      </form>
    </div>
  );
};

export default BorrowingForm;
