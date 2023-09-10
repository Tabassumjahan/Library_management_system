import React, { useState } from "react";
import "./BorrowingBookForm.css";

const BorrowBookForm = ({ borrowBook }) => {
  const [formData, setFormData] = useState({
    userId: "",
    bookId: "",
    borrowDate: "",
    dueDate: "",
    returnDate: "",
    status: "Borrowed",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    borrowBook(formData);
    setFormData({
      userId: "",
      bookId: "",
      borrowDate: "",
      dueDate: "",
      returnDate: "",
      status: "",
    });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center h-100 col mb-3">
      <div className="" style={{ width: "50%" }}>
        <form onSubmit={handleSubmit}>
          <div className="center row g-3 container ms-4 mt-3">
            <div className=" mb-3 col">
              <label className="form-label">User ID:</label>
              <input
                type="text"
                name="userId"
                className="form-control"
                value={formData.userId}
                onChange={handleChange}
                required
              />
            </div>

            <div className=" mb-3 col">
              <label className="form-label">Book ID:</label>
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
              <label className="form-label">Borrow Date:</label>
              <input
                type="date"
                name="borrowDate"
                className="form-control"
                value={formData.borrowDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className=" mb-3 col">
              <label className="form-label">Due Date:</label>
              <input
                type="date"
                name="dueDate"
                className="form-control"
                value={formData.dueDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className=" mb-3 col">
              <label className="form-label">Return Date:</label>
              <input
                type="date"
                name="returnDate"
                className="form-control"
                value={formData.returnDate}
                onChange={handleChange}
              />
            </div>
            <div className="status-label">
              <label className="form-label">Status:</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="form-control d-inline mx-2"
                required
                style={{ width: "auto" }}
              >
                <option value="Borrowed"> Borrowed</option>
                <option value="Returned">Returned</option>
              </select>
            </div>
          </div>
          <div className="button-container mt-3 text-center">
            <button type="submit" className="btn btn-primary">
              Borrow/Return Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BorrowBookForm;
