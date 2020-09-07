import React, { createContext, useState, useEffect } from "react";

export const BookContext = createContext();

const BookContextProvider = (probs) => {
  let localBooks = localStorage.getItem("books");
  const preBooks = [
    { title: "Malý princ", name: "Antoine de Saint-Exupéry", id: 1 },
    { title: "451 stupňů Fahrenheita", name: "Ray Bradbury", id: 2 },
    { title: "Outsider", name: "Stephen King", id: 3 },
  ];
  const [books, setBooks] = useState(
    localBooks ? JSON.parse(localBooks) : preBooks
  );

  const addBook = (title, name) => {
    setBooks([...books, { title, name, id: title }]);
  };
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {probs.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
