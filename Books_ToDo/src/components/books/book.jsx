import React from "react";

const Book = ({ id, img, title, author, descr, deleteBooks }) => (
  <div>
    <img src={img} alt="img" />
    <div className="book">
      <h2>{title}</h2>
      <h4>{author}</h4>
      <p>{descr}</p>
    </div>
    <button className="delete" onClick={() => deleteBooks(id)}>
      delete
    </button>
  </div>
);
export default Book;
