import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "./BookCard";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    setIsLoading(true);
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=classics&filter=paid-ebooks&maxResults=40`
      )
      .then((res) => {
        console.log(res.data.items);
        setBooks(res.data.items);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Homepage</h1>
      <div className="justify-content-center d-flex p-2 flex-wrap">
        {books.map((book, key) => {
          return <BookCard key={key} {...book} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
