import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import "../App.css";

const BookDetail = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  return (
    <div className="bookDetail" onClick={() => removeBook(book.id)}>
      <h3>{book.title}</h3>
      <p>{book.name}</p>
    </div>
  );
};

export default BookDetail;
