import React, { useState } from "react";
import "./AddBookForm.css";

const AddBookForm = ({ getBookList }) => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    subject: "",
    isbn: "",
    publisher: "",
    publicationDate: "",
    quantity: 0,
    availableQuantity: 0,
  });
  const [message, setMessage] = useState("");
  // const [bookId, setBookId] = useState("");
  // const generateBookId = () => {
  //   return Math.floor(1000 + Math.random() * 9000);
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const generatedBookId = generateBookId();
    // setBookId(generatedBookId);
    // const newBook = { ...book, bookId };

    fetch("http://localhost:8083/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error adding book");
        }
        getBookList();
        return response.json();
      })
      .then((data) => {
        setBook({
          title: "",
          author: "",
          subject: "",
          isbn: "",
          publisher: "",
          publicationDate: "",
          quantity: 0,
          availableQuantity: 0,
        });
        setMessage("Book added successfully.");
        // onAddBook(newBook);
      })
      .catch((error) => {
        console.error("Error adding book:", error);
      });
  };

  return (
    <div className="mt-4 container">
      <div className="col"></div>
      <div className="container d-flex justify-content-center align-items-center h-100 col">
        <div className="" style={{ width: "50%" }}>
          <h2 className="text-center mt-3 container border-bottom w-50">
            Add New Book
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="center row g-3 container ms-4 mt-5">
              <div className=" mb-3 col">
                <label className="form-label">Title : </label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value={book.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className=" mb-3 col">
                <label className="form-label">Author:</label>
                <input
                  type="text"
                  name="author"
                  className="form-control"
                  value={book.author}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="form-label">Subject:</label>
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  value={book.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="form-label">ISBN:</label>
                <input
                  type="text"
                  className="form-control"
                  name="isbn"
                  value={book.isbn}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="form-label">Publisher:</label>
                <input
                  type="text"
                  name="publisher"
                  className="form-control"
                  value={book.publisher}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="form-label">Publication Date:</label>
                <input
                  type="date"
                  name="publicationDate"
                  className="form-control"
                  value={book.publicationDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className=" mb-3 col">
                <label className="form-label">Quantity:</label>
                <input
                  type="number"
                  name="quantity"
                  className="form-control"
                  value={book.quantity}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className=" mb-3 col">
                <label className="form-label">Avaliable-Quantity:</label>
                <input
                  type="number"
                  className="form-control"
                  name="availableQuantity"
                  value={book.availableQuantity}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="button-container mt-3 text-center">
              <button type="submit" className="btn btn-primary">
                Add Book
              </button>
            </div>
          </form>
          <div className="text-center mb-4">{message && <p>{message}</p>}</div>
        </div>
      </div>
    </div>
  );
};

export default AddBookForm;
