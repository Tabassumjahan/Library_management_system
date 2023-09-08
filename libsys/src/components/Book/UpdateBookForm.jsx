import React, { useState, useEffect } from 'react';
import './UpdateBookForm.css';

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
    <div>
      <h2>Update Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="bookId">Book ID:</label>
          <input
            type="text"
            id="bookId"
            name="bookId"
            value={book.bookId}
            onChange={handleChange}
            required
          />
        </div>
          <div>
                  <label htmlFor="title">Title:</label>
                  <input
            type="text"
            id="title"
            name="title"
            value={book.title}
            onChange={handleChange}
            required
          />
              </div>
              <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={book.author}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={book.subject}
            onChange={handleChange}
          />
              </div>
              <div>
          <label htmlFor="isbn">ISBN:</label>
          <input
            type="text"
            id="isbn"
            name="isbn"
            value={book.isbn}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="publisher">Publisher:</label>
          <input
            type="text"
            id="publisher"
            name="publisher"
            value={book.publisher}
            onChange={handleChange}
          />
        </div> 
              <br></br>
        {/* Your input fields here */}
        <button type="submit" className="update-button1">Update Book</button>
      </form>
    </div>
  );
};

export default UpdateBookForm;
