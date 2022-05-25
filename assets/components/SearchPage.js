import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import BookCard from "./BookCard";

const SearchPage = () => {
  //Since users' input matches the keyword in URL, we can use it as query to get the data
  const keyword = useParams().keyword;
  const authorName = useParams().name;
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // fetch books from Google API based on users' inputs. Default volume is 10 but we can get the maximum allowable results up to 40
  const fetchBooks = () => {
    setIsLoading(true);
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${keyword}&maxResults=40`
      )
      .then((res) => {
        setBooks(res.data.items);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  // Clicking to the names of authors
  const handleAuthor = () => {
    setIsLoading(true);

    // this is for q=inauthor:"author+name" which will be searching with exact name of the author. Inauthor: means searching in author name
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=inauthor:"${authorName}"&maxResults=40`
      )
      .then((res) => {
        setBooks(res.data.items);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  // Add chosen books to API
  const handleAdd = () => {
    // need API to add
  };

  useEffect(() => {
    // conditional rendering the keyword (users' inputs) whenever it's changed. Otherwise, it will render everytime the author link is click => double rendering
    keyword ? fetchBooks() : "";
  }, [keyword]);

  useEffect(() => {
    // conditional rendering the author whenever it's changed. Otherwise, it will render everytime the input is changed => double rendering
    authorName ? handleAuthor() : "";
  }, [authorName]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="row align-items-center">
      {books.map((book) => {
        // Check whether or not there are images or title
        const checkImage = book.volumeInfo.imageLinks;
        const checkTitle = book.volumeInfo.title;
        if (checkImage && checkTitle) {
          return <BookCard key={book.id} {...book} />;
        }
      })}
    </div>
  );
};

export default SearchPage;
