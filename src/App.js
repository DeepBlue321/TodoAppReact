import React from "react";
import NavBar from "./components/NavBar";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import BookContextProvider from "./contexts/BookContext";
import "./App.css";

function App() {
  return (
    <div className="body">
      <BookContextProvider>
        <NavBar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
