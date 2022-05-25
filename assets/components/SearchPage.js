import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import BookCard from "./BookCard";

const SearchPage = () => {
  
  const keyword = useParams().keyword; //Since users' input matches the keyword in URL, we can use it after q= to get the data
  const authorName = useParams().name; //Since author's name matches the keyword in URL, we can use it after q= to get the data
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
    // keyword will be undefined whenever the url changes to search the authorName. It will still render even undefined everytime the author's name is click => double rendering
    keyword ? fetchBooks() : "";
  }, [keyword]);

  useEffect(() => {
    // authorName will be undefined whenever the url changes to search the keyword (users' inputs). It will still render even undefined everytime the keyword is provided => double rendering
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
