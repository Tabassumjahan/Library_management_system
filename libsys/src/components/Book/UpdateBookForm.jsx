import React, { useState, useEffect } from 'react';

const UpdateBookForm = ({ bookData, onUpdateBook }) => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    subject: '',
    isbn: '',
    publisher: '',
    publicationDate: '',
    quantity: 0,
    availableQuantity: 0,
    bookId: '',
  });

  // Use useEffect to update the form fields when bookData changes
  useEffect(() => {
    if (bookData) {
      // Update the form fields with bookData if it exists
      setBook({
        title: bookData.title || '',
        author: bookData.author || '',
        subject: bookData.subject || '',
        isbn: bookData.isbn || '',
        publisher: bookData.publisher || '',
        publicationDate: bookData.publicationDate || '',
        quantity: bookData.quantity || 0,
        availableQuantity: bookData.availableQuantity || 0,
        bookId: bookData.bookId || '',
      });
    }
  }, [bookData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation if needed

    // Handle the update logic here using the book data in the "book" state
      onUpdateBook(book);
    // Clear the form after updating the book
    setBook({
      title: '',
      author: '',
      subject: '',
      isbn: '',
      publisher: '',
      publicationDate: '',
        quantity: 0,
      availableQuantity: 0,
      bookId: '',
    });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center h-100 col">
      <div className="" style={{ width: "50%" }}>
      <h2>Update Book</h2>
        <form onSubmit={handleSubmit}>
        <div className="center row g-3 container ms-4 mt-5">
        <div className=" mb-3 col">
          <label className="form-label" htmlFor="bookId">Book ID:</label>
          <input
            type="text"
            id="bookId"
            name="bookId"
            className= "form-control"
            value={book.bookId}
            onChange={handleChange}
            required
          />
        </div>
          <div className=" mb-3 col">
            <label className="form-label" htmlFor="title">Title:</label>
            <input
            type="text"
            id="title"
            name="title"
            className= "form-control"
            value={book.title}
            onChange={handleChange}
            required
          />
          </div>
          <div >
          <label className="form-label" htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            className= "form-control"
            value={book.author}
            onChange={handleChange}
          />
        </div>
        <div className=" mb-3 col">
          <label  className="form-label" htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            className= "form-control"
            value={book.subject}
            onChange={handleChange}
          />
          </div>
          <div className=" mb-3 col">
          <label className="form-label" htmlFor="isbn">ISBN:</label>
          <input
            type="text"
            id="isbn"
            name="isbn"
            className= "form-control"
            value={book.isbn}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="publisher">Publisher:</label>
          <input
            type="text"
            id="publisher"
            name="publisher"
            className= "form-control"
            value={book.publisher}
            onChange={handleChange}
          />
          </div> 
          </div>
        <div className="button-container mt-3 text-center">
        <button type="submit" className="btn btn-primary">Update Book</button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBookForm;
