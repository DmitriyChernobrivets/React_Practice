import React from "react";
import "./books.css";
import Book from "./book";

const Books = ({ addbooks, deleteBooks }) => (
  <ul>
    {addbooks.map(el => (
      <li key={el.id}>
        <Book {...el} deleteBooks={deleteBooks} />
      </li>
    ))}
  </ul>
);

export default Books;
