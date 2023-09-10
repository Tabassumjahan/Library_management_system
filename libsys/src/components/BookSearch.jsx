import React, { useState } from "react";
import "./BookSearch.css";
function BookSearch({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className=" ">
      <form onSubmit={handleSubmit}>
        <label
          for="colFormLabelSm"
          class="col-sm-2 col-form-label col-form-label-sm"
        ></label>
        <div class="col-sm-8">
          <div className="form-label mb-2 d-flex justify-content-start align-items-center">
            <input
              type="text"
              placeholder="Search by title/subject"
              className="form-control me-3 w-50"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button type="submit" className="btn btn-primary btn-sm">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BookSearch;
