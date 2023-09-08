import React, { useState } from 'react';
import './AddBookForm.css';

const AddBookForm = ({ onAddBook }) => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    subject: '',
    isbn: '',
    publisher: '',
    publicationDate: '',
    quantity: 0,
    availableQuantity: 0,
  });
    const [message, setMessage] = useState('');
    const [ setBookId] = useState('');
    const generateBookId = () => {
    return Math.floor(1000 + Math.random() * 9000);
    };

    
    const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      const bookId = generateBookId();
      setBookId(bookId);
    const newBook = { ...book, bookId };

      fetch('http://localhost:8083/api/books', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(newBook),
      })
          .then((response) => {
              if (!response.ok) {
                  throw new Error('Error adding book');
            
              }
              return response.json();
          })
          .then((data) => {
    
              // Clear the form after adding the book
              setBook({
                  
                  title: '',
                  author: '',
                  subject: '',
                  isbn: '',
                  publisher: '',
                  publicationDate: '',
                  quantity: 0,
                  availableQuantity: 0,
              });
              setMessage('Book added successfully.');
              onAddBook(newBook);
          })
      .catch((error) => {
        console.error('Error adding book:', error);
      });
  };

  return (
    <div>
      <h2>Add New Book</h2>
          <form onSubmit={handleSubmit}>
        
        <div>
          <label className="custom-label">Title:</label>
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="custom-label">Author:</label>
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="custom-label">Subject:</label>
          <input
            type="text"
            name="subject"
            value={book.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="custom-label">ISBN:</label>
          <input
            type="text"
            name="isbn"
            value={book.isbn}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="custom-label">Publisher:</label>
          <input
            type="text"
            name="publisher"
            value={book.publisher}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="custom-label">Publication Date:</label>
          <input
            type="date"
            name="publicationDate"
            value={book.publicationDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="custom-label">Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={book.quantity}
            onChange={handleChange}
            required
          />
              </div>
            <div>
          <label className="custom-label">Avaliable-Quantity:</label>
          <input
            type="number"
            name="availableQuantity"
            value={book.availableQuantity}
            onChange={handleChange}
            required
          />
              </div>
          
        <br></br>   
        <button type="submit">Add Book</button>
          </form>
        {message && <p>{message}</p>} {/* Display the message if it's set */}
    </div>
  );
};

export default AddBookForm;
