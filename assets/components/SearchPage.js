import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import BookCard from "./BookCard";
import { handleIndividualData } from "../handleIndividualData";

const SearchPage = ({ click }) => {
  const keyword = useParams().keyword; //Since users' input matches the keyword in URL, we can use it after q= to get the data
  const authorName = useParams().name; //Since author's name matches the keyword in URL, we can use it after q= to get the data
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sort, setSort] = useState("");

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

  const handleAvailableData = (res) => {
    // If there are no date, images or title, make default value
    const availableData = res.data.items.map((book) => {
      return handleIndividualData(book);
    });
    return availableData;
  };

  // This is for comparing years, months and dates between books
  const sortedDate = books.sort((a, b) => {
    // split the publishedDate to year, month, date and sort based on year, then month, then date
    const [aYear, aMonth, aDate] = a.volumeInfo.publishedDate.split("-");
    const [bYear, bMonth, bDate] = b.volumeInfo.publishedDate.split("-");

    if (sort === "newest") {
      if (parseInt(aYear) === parseInt(bYear)) {
        if (parseInt(aMonth) === parseInt(bMonth)) {
          if (parseInt(aDate) < parseInt(bDate)) return -1;
          if (parseInt(aDate) > parseInt(bDate)) return 1;
          return 0; // when year, month, date is the same, do nothing
        } else if (parseInt(aMonth) > parseInt(bMonth)) return -1;
        else return 1;
      } else if (parseInt(aYear) > parseInt(bYear)) return -1;
      else return 1;
    } else if (sort === "oldest") {
      if (parseInt(bYear) === parseInt(aYear)) {
        if (parseInt(bMonth) === parseInt(aMonth)) {
          if (parseInt(bDate) < parseInt(aDate)) return -1;
          if (parseInt(bDate) > parseInt(aDate)) return 1;
          return 0;
        } else if (parseInt(bMonth) > parseInt(aMonth)) return -1;
        else return 1;
      } else if (parseInt(bYear) > parseInt(aYear)) return -1;
      else return 1;
    }
  });

  // handle sorting chosen
  const handleSort = (e) => {
    setSort(e.target.value);
  };

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
      <select
        className="form-select m-3 form-select-sm mx-auto"
        defaultValue={sort}
        onChange={handleSort}
      >
        <option value="" invalid="true" hidden>
          Sort
        </option>
        <option value="oldest">Oldest</option>
        <option value="newest">Newest</option>
      </select>
      <div className="justify-content-center d-flex p-2 flex-wrap">
        {sortedDate.map((book) => {
          return <BookCard key={book.id} data={book} {...book} click={click} />;
        })}
      </div>
    </>
  );
};

export default SearchPage;
