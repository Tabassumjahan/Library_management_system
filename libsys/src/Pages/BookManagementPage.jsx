// BookManagementPage.js
import React, {useState, useEffect} from 'react';
import BookList from '../components/BookList';
import AddBookForm from '../components/Book/AddBookForm'; 
import UpdateBookForm from '../components/Book/UpdateBookForm'; 
import './BookManagementPage.css'
import Navbar from '../components/Navbar';


const BookManagementPage = () => {
  const [books, setBooks] = useState([]);
  const [bookToUpdate, setBookToUpdate] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [deleteSuccessMessage, setDeleteSuccessMessage] = useState('');
  const [updateSuccessMessage, setUpdateSuccessMessage] = useState('');
  const [bookData, setBookData] = useState(null);
  
  const addBook = (newBook) => {
  
    setBooks([...books, newBook]);
  };

  const handleUpdateBook = (updatedBookData) => {
 
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
       
        setBookToUpdate(null);
        setUpdateSuccessMessage('Book updated successfully.');
      })
      .catch(error => {
        console.error('Error updating book:', error);
      });
  };
  useEffect(() => {

    const apiUrl = 'http://localhost:8083/api/books'; 

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
    setShowUpdateForm(true);
   };
  
  const handleShowDeleteForm = () => {
    setShowDeleteForm(true);
  };

  const handleHideDeleteForm = () => {
    setShowDeleteForm(false);
  };
  
   const handleDeleteBook = (bookId) => {
    fetch(`http://localhost:8083/api/books/${bookId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
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
      <Navbar />
      <div className="container mt-3">
      <AddBookForm onAddBook={addBook} />
      </div>
      <BookList books={books} onDeleteBook={handleDeleteBook} />
      <div className="BookList">

      {showUpdateForm ? (
            <UpdateBookForm
              bookData={bookToUpdate}
              onUpdateBook={handleUpdateBook}
            />
      ) : (
        <div className="container mt-5 text-center bottom-border w-50">
          <h3>Click to open Book Update form</h3>
          <button className="show-form-button" onClick={handleShowUpdateForm} class="btn btn-primary">
            Show Update Book Form
          </button>
        </div>
        )}
        {showDeleteForm ? (
          <div className="container d-flex justify-content-center align-items-center h-100 col">
        <div className="" style={{ width: "50%" }}>
            <h3 className="text-center mt-4 container border-bottom w-50">Delete Book</h3>
            <div className= " form-label text-center" >
            <p className= "mt-3">Enter Book ID:</p>
                <input type="text"
                  id="bookId"
                  name="bookId"
                  className="form-control"
                />
            </div>
            <br></br>
            <div className =" button-container mt-2 text-center">
            <button className="show-form-button" onClick={handleDeleteBook} class="btn btn-danger btn-sm"> Delete</button>
            <button className="show-form-button" onClick={handleHideDeleteForm} class="btn btn-primary btn-sm ms-2">Cancel</button>
            </div>
            </div>
          </div>
        ) : (
          <div className="container mt-5 text-center bottom-border w-50">
            <h2>Click to open Delete Book form</h2>
            <button className="show-form-button" onClick={handleShowDeleteForm} class="btn btn-primary">
              Show Delete Book Form
            </button>
          </div>
        )}
        {deleteSuccessMessage && (
          <div className="success-message container mt-5 text-center">{deleteSuccessMessage}</div>
        )}
        {updateSuccessMessage && (
          <div className="success-message container mt-5 text-center">{updateSuccessMessage}</div>
        )}
      </div>
    </div>
  );
};

export default BookManagementPage;
