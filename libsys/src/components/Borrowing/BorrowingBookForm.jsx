import React, { useState } from 'react';
import './BorrowingBookForm.css'

const BorrowBookForm = ({ borrowBook }) => {
    const [formData, setFormData] = useState({ 
    userId: '',
    bookId: '',
    borrowDate: '', // Add borrow date field
    dueDate: '',    // Add due date field
    returnDate: '', // Add return date field
    status: '', // Default status to Active
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    borrowBook(formData);
      setFormData({
      userId: '',
      bookId: '',
      borrowDate: '', // Clear date fields
      dueDate: '',
      returnDate: '',
      status: '', // Reset status to Active
    });
      // Clear the form fields
  };

  return (
    <div>
      
      <form onSubmit={handleSubmit}>

          <div>
          <label className="custom-label">User ID:</label>
          <input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            required
          />
              </div>
              <br></br>
        <div>
          <label className="custom-label">Book ID:</label>
          <input
            type="text"
            name="bookId"
            value={formData.bookId}
            onChange={handleChange}
            required
          />
              </div>
              <div>
          <label className="custom-label">Borrow Date:</label>
          <input
            type="date"
            name="borrowDate"
            value={formData.borrowDate}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add Due Date field */}
        <div>
          <label className="custom-label">Due Date:</label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
              required
          />
        </div>
        {/* Add Return Date field */}
        <div>
          <label className="custom-label">Return Date:</label>
          <input
            type="date"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
          />
        </div>
        {/* Add Status field */}
        <div className="status-label">
          <label className="custom-label">Status:</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
            style={{ width: 'auto' }} 
            >
            <option value="Borrowed"> Borrowed</option>
            <option value="Returned">Returned</option>          
                  </select>
            </div>
              <br></br>
        <button type="submit">Borrow/Return Book</button>
      </form>
    </div>
  );
};

export default BorrowBookForm;
