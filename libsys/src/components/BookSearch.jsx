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
    <div className="book-search row g-2">
      <h4>Book Search</h4>
      <form onSubmit={handleSubmit}>
        <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm"></label>
        <div class="col-sm-8">
        <div className = "input-group mb-2">
        <input
          type="text"
          placeholder="Search by title/subject"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type= "submit" className="btn btn-primary btn-sm" >Search</button>
          </div>
          </div>
      </form>
    </div>
  );
}

export default BookSearch;

