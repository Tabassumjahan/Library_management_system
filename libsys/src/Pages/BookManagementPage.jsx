// BookManagementPage.js
import React, {useState, useEffect} from 'react';
import BookList from '../components/BookList';
import AddBookForm from '../components/Book/AddBookForm'; // Import the AddBookForm component
import UpdateBookForm from '../components/Book/UpdateBookForm'; // Import the UpdateBookForm component
import './BookManagementPage.css'


const BookManagementPage = () => {
  const [books, setBooks] = useState([]);
  const [bookToUpdate, setBookToUpdate] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [deleteSuccessMessage, setDeleteSuccessMessage] = useState('');
  const [updateSuccessMessage, setUpdateSuccessMessage] = useState('');
  const [bookData, setBookData] = useState(null);
  // Function to add a new book to the list
  const addBook = (newBook) => {
    // Update the list of books with the new book
    setBooks([...books, newBook]);
  };

  const handleUpdateBook = (updatedBookData) => {
    // Perform the update logic here, e.g., make an API call to update the book
    // After updating, you can clear the bookToUpdate state
    // Example API call:
    if (!bookData || !bookData.bookId) {
    console.error('Invalid book data for update.');
    return;
  }
    fetch(`http://localhost:8083/api/books/${bookData.bookId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedBookData),
    })
      .then((response) => response.json())
      .then((updatedBook) => {
        const updatedBooks = books.map((book) =>
          bookData.bookId === updatedBook.bookId ? updatedBook : book
        );

        setBooks(updatedBooks);
        // Clear the bookToUpdate state to hide the update form
        setBookToUpdate(null);
        setUpdateSuccessMessage('Book updated successfully.');
      })
      .catch(error => {
        console.error('Error updating book:', error);
      });
  };
  useEffect(() => {
    // Fetch the list of books from the API or any other source
    // and set it to the state
    const apiUrl = 'http://localhost:8083/api/books'; // Update with your API URL

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  }, []);

   const handleShowUpdateForm = () => {
    // When the "Show Update Book Form" button is clicked
    setShowUpdateForm(true);
   };
  
  const handleShowDeleteForm = () => {
    setShowDeleteForm(true);
  };

  const handleHideDeleteForm = () => {
    setShowDeleteForm(false);
  };
  
   const handleDeleteBook = (bookId) => {
    // Make an API request to delete the book by book ID or title
    // Update the books state after deleting the book
    // Example API call to delete by book ID:
    fetch(`http://localhost:8083/api/books/${bookId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Remove the deleted book from the books state
        setBooks(books.filter(book => book.id !== bookId));
        setShowDeleteForm(false);
        setDeleteSuccessMessage('Book deleted successfully.');
      })
      .catch(error => {
        console.error('Error deleting book:', error);
      });
  };
  return (
    <div>
      
      <AddBookForm onAddBook={addBook} />
      
      <BookList books={books} onDeleteBook={handleDeleteBook} />
      <div className="BookList">

      {showUpdateForm ? (
            <UpdateBookForm
              bookData={bookToUpdate}
              onUpdateBook={handleUpdateBook}
            />
      ) : (
        <div className="landing-page">
          {/* Button to show the UpdateBookForm */}
          <h2>Click to open Book Update form</h2>
          <button className="show-form-button" onClick={handleShowUpdateForm}>
            Show Update Book Form
          </button>
        </div>
        )}
        {showDeleteForm ? (
          <div className="delete-form">
            <h2>Delete Book</h2>
            <div>
            <p>Enter Book ID:</p>
              <input type="text" /><br></br>
            </div>
            <br></br>
            <div>
            <button className="show-form-button" onClick={handleDeleteBook}>Delete</button>
            <button className="show-form-button" onClick={handleHideDeleteForm}>Cancel</button>
            </div>
            </div>
        ) : (
          <div className="landing-page">
            <h2>Click to open Delete Book form</h2>
            <button className="show-form-button" onClick={handleShowDeleteForm}>
              Show Delete Book Form
            </button>
          </div>
        )}
        {deleteSuccessMessage && (
          <div className="success-message">{deleteSuccessMessage}</div>
        )}
        {updateSuccessMessage && (
          <div className="success-message">{updateSuccessMessage}</div>
        )}
      </div>
    </div>
  );
};

export default BookManagementPage;
