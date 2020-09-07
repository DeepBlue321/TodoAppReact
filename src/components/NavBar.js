import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import "../App.css";

const NavBar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Seznam knih</h1>
      <p>Momentálně máte {books.length} knihy</p>
    </div>
  );
};

export default NavBar;
