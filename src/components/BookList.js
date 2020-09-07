import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetail from "./BookDetails";

const BookList = (probs) => {
  const { books, removeBook } = useContext(BookContext);
  return (
    <div>
      {books.length > 0 ? (
        books.map((book) => (
          <BookDetail book={book} key={book.id} onClick={removeBook} />
        ))
      ) : (
        <p>Žádné knihy</p>
      )}
    </div>
  );
};

export default BookList;
