import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import { handleIndividualData } from "../handleIndividualData";

const HomePage = ({ click }) => {
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
      .then(res => {
        const data = handleAvailableData(res);
        setBooks(data);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  };

  const handleAvailableData = res => {
    // If there are no date, images or title, make default value
    const availableData = res.data.items.map(book => {
      return handleIndividualData(book);
    });
    return availableData;
  };

  if (isLoading) {
    return (
      <div
        className='d-flex justify-content-center'
        style={{ height: "100vh" }}
      >
        <div className='spinner-border' role='status'></div>
      </div>
    );
  }
  return (
    <main className='container-fluid'>
      <h1 className='p-3 m-2 text-white'>Homepage</h1>

      <div className='justify-content-center d-flex p-2 flex-wrap'>
        {books.map((book, key) => {
          return <BookCard key={key} data={book} {...book} click={click} />;
        })}
      </div>
    </main>
  );
};

export default HomePage;
