import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {
  // Since book's id matches the id in URL, we can use it as query to get the data
  const id = useParams().id;
  const [bookInfo, setBookInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchBook = () => {
    setIsLoading(true);
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((res) => {
        const data = handleAvailableData(res.data.volumeInfo);
        setBookInfo(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const handleAvailableData = (res) => {
    // If there are no date, images or title, make default value
    if (res.hasOwnProperty("publishedDate") === false) {
      res.publishedDate = "0000";
    }
    if (res.hasOwnProperty("imageLinks") === false) {
      res.imageLinks = {
        thumbnail:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-y-IJN8glQlf1qoU01dEgGPUa0d1-sjfWg&usqp=CAU",
      };
    }
    if (res.hasOwnProperty("authors") === false) {
      res.authors = "Unknown Authors";
    }

    if (res.hasOwnProperty("title") === false) {
      res.title = "No Title";
    }
    return res;
  };

  // intially run when open the page
  useEffect(() => {
    fetchBook();
  }, []);

  if (isLoading) {
    return <p>...Loading</p>;
  }

  return (
    <div>
      <img src={bookInfo.imageLinks?.thumbnail} />
      <h1>{bookInfo.title}</h1>
      <ul>
        <h5>Author:</h5>
        {/* Link cannot be click when it's Unknown Authors  */}
        {bookInfo.authors === "Unknown Authors"
          ? "Unknown Authors"
          : bookInfo.authors?.map((author) => {
              const authorQuery = author.replaceAll(" ", "+");
              return (
                <li key={author}>
                  <Link to={`/search/author/${authorQuery}`}>{author}</Link>
                </li>
              );
            })}
      </ul>
      <h5>{bookInfo.publishedDate}</h5>
      <p>{bookInfo.description}</p>
    </div>
  );
};

export default BookDetails;
