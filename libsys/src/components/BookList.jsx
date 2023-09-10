import React, { useState, useEffect } from "react";

import BookSearch from "./BookSearch";
import Navbar from "./Navbar";
import UpdateBookForm from "./Book/UpdateBookForm";

const BookList = ({ getBookList, books, setBooks }) => {
  const user = JSON.parse(localStorage.getItem("User"));
  const [bookToUpdate, setBookToUpdate] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [deleteSuccessMessage, setDeleteSuccessMessage] = useState("");
  const [updateSuccessMessage, setUpdateSuccessMessage] = useState("");

  // const [books, setBooks] = useState([]);

  // const getBookList = () => {
  //   const apiUrl = "http://localhost:8083/api/books"; // Update with your API URL

  //   // Fetch the list of books from the API
  //   fetch(apiUrl)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setBooks(data);
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching books:", error);
  //     });
  // };

  useEffect(() => {
    getBookList();
  }, []);

  const [searchResults, setSearchResults] = useState([]);

  const handleShowUpdateForm = () => {
    setShowUpdateForm(true);
  };

  const handleShowDeleteForm = () => {
    setShowDeleteForm(true);
  };

  const handleDeleteBook = (bookId) => {
    fetch(`http://localhost:8083/api/books/${bookId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        getBookList();
        setShowDeleteForm(false);
        setDeleteSuccessMessage("Book deleted successfully.");
      })
      .catch((error) => {
        console.error("Error deleting book:", error);
      });
  };

  const handleSearch = (query) => {
    const filteredBooks = books.filter((book) => {
      const lowerCaseQuery = query.toLowerCase();
      return (
        book.title.toLowerCase().includes(lowerCaseQuery) ||
        book.author.toLowerCase().includes(lowerCaseQuery) ||
        book.subject.toLowerCase().includes(lowerCaseQuery)
      );
    });
    setBooks(filteredBooks);
  };

  return (
    <div className="BookList mt-4 mb-5">
      {user.email != "admin@123" && <Navbar />}
      <h2 className="text-center mt-4 my-4">BOOK LIST </h2>
      <div className="d-flex justify-content-center align-items-center flex-column"></div>
      <BookSearch onSearch={handleSearch} />
      <div className="space-after-search"></div>

      

      <table className="table table-striped container">
        <thead>
          <tr>
            <th scope="col">BookID</th>
            <th scope="col"> Title</th>
            <th scope="col">Author</th>
            <th scope="col">ISBN</th>
            <th scope="col">Subject</th>
            <th scope="col">Publisher</th>
            <th scope="col">PublicationDate</th>
            <th scope="col">Quantity</th>
            <th scope="col">Available Q.</th>
            <th scopr="col">Actions</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {searchResults.length > 0
            ? searchResults.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.isbn}</td>
                  <td>{book.subject}</td>
                  <td>{book.publisher}</td>
                  <td>{book.publicationDate}</td>
                  <td>{book.quantity}</td>
                  <td>{book.availableQuantity}</td>
                  <td>
                    <div>
                      <button
                        className="btn btn-info btn-sm"
                        onClick={() => {
                          handleShowUpdateForm();
                          setBookToUpdate(book);
                        }}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          handleDeleteBook(book.id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            : books.length > 0 &&
              books.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.isbn}</td>
                  <td>{book.subject}</td>
                  <td>{book.publisher}</td>
                  <td>{book.publicationDate}</td>
                  <td>{book.quantity}</td>
                  <td>{book.availableQuantity}</td>
                  <td>
                    <div className="">
                      <button
                        className="btn btn-info btn-sm mx-1"
                        onClick={() => {
                          handleShowUpdateForm();
                          setBookToUpdate(book);
                        }}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          handleDeleteBook(book.id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>

                  {/* Display more data as needed */}
                </tr>
              ))}
        </tbody>
      </table>

      <div className="BookList">
        {showUpdateForm && (
          <UpdateBookForm
            bookData={bookToUpdate}
            setShowUpdateForm={setShowUpdateForm}
            getBookList={getBookList}
          />
        )}
      </div>
    </div>
  );
};

export default BookList;
