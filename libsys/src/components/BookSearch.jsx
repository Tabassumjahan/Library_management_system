import React, { useState } from 'react';
import './BookSearch.css'
function BookSearch({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="book-search">
      <h3>Book Search</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search by title, author, or subject"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
        <br></br>
      </form>
    </div>
  );
}

export default BookSearch;

