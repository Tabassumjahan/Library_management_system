// BorrowingManagementPage.js
import React,{ useState }  from 'react';
import BorrowBookForm from '../components/Borrowing/BorrowingBookForm';
import BookList from '../components/BookList';
import BorrowingTable from '../components/BorrowingTable';
const BorrowingManagementPage = () => {
    const [borrowedBooks, setBorrowedBooks] = useState([]);
    // Define your borrowBook and returnBook functions here.
    
     // Function to fetch borrowed books data from the API
  // The empty dependency array ensures this effect runs only once when the component mounts

  const borrowBook = async (formData) => {
    try {
      // Send a POST request to your backend API to record the borrowing transaction.
      const response = await fetch('http://localhost:8083/api/borrowings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send the formData to the backend.
      });

        if (response.ok) {
            // The book was successfully borrowed.
            alert('Book borrowed successfully!');
            
            setBorrowedBooks([...borrowedBooks, formData]);
      } else {
        // Handle errors, e.g., book not available, user not found, etc.
        alert('Error borrowing book. Please try again.');
      }
    } catch (error) {
      console.error('Error borrowing book:', error);
    }
  };

  

  return (
    <div>
      <h1>Borrowing Management Page</h1>
      <BorrowBookForm borrowBook={borrowBook} />
    

    
          <BookList />
          
    <BorrowingTable borrowedBooks={borrowedBooks} />
    </div>
  );
};

export default BorrowingManagementPage;


