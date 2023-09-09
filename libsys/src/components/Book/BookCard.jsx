import React from "react";

function BookCard({ link, title, description }) {
  console.log(title);
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={link} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
