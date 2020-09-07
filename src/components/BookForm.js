import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";
import "../App.css";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const { addBook, books } = useContext(BookContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, name);
    console.log(books);
    setTitle("");
    setName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        value={title}
      />
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        value={name}
      />
      <button className="button" type="submit">
        Přidat
      </button>
    </form>
  );
};

export default BookForm;
