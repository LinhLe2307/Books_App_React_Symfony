import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import BookCard from "./BookCard";

const SearchPage = () => {

  const keyword = useParams().keyword; //Since users' input matches the keyword in URL, we can use it after q= to get the data
  const authorName = useParams().name; //Since author's name matches the keyword in URL, we can use it after q= to get the data
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sort, setSort] = useState("");
  const [dateSorted, setDateSorted] = useState([]);

  // fetch books from Google API based on users' inputs. Default volume is 10 but we can get the maximum allowable results up to 40
  const fetchBooks = () => {
    setIsLoading(true);
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${keyword}&maxResults=40`
      )
      .then((res) => {
        const data = handleAvailableData(res);
        setBooks(data);
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
        const data = handleAvailableData(res);
        setBooks(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  // Add chosen books to API
  const handleAdd = () => {
    // need API to add
  };

  const handleSort = (e) => {
    console.log(e.target.value);
    setSort(e.target.value);
  }

  const handleAvailableData = (res) => {
    // If there are no date, images or title, make default value
    const availableData = res.data.items.map(book => {
      if (book.volumeInfo.hasOwnProperty('publishedDate') === false) {
        book.volumeInfo.publishedDate = "0000";
      }
      if (book.volumeInfo.hasOwnProperty('imageLinks') === false) {
        book.volumeInfo.imageLinks = { thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-y-IJN8glQlf1qoU01dEgGPUa0d1-sjfWg&usqp=CAU" }
      }
      if (book.volumeInfo.hasOwnProperty('title') === false) {
        book.volumeInfo.title = "No Title";
      }
      return book;
    });
    return availableData;

  }


  useEffect(() => {
    // keyword will be undefined whenever the url changes to search the authorName. It will still render even undefined everytime the author's name is click => double rendering
    keyword ? fetchBooks() : "";
  }, [keyword]);

  useEffect(() => {
    authorName ? handleAuthor() : "";
  }, [authorName]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <select defaultValue={sort} onClick={handleSort} >
        <option value="sort" disabled>Sort</option>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>

      <div className="row align-items-center">
        {books.map((book) => {
          return <BookCard key={book.id} {...book} />;
        })}
      </div>
    </>
  );
};

export default SearchPage;
