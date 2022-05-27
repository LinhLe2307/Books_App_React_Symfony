import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { handleIndividualData } from "../handleIndividualData";

const BookDetails = () => {
  // Since book's id matches the id in URL, we can use it as query to get the data
  const id = useParams().id;
  const [bookInfo, setBookInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [bookToShopCart, setBookToShopCart] = useState({});

  const bookTitle = bookInfo.volumeInfo?.title;
  const bookImage =
    bookInfo.volumeInfo?.imageLinks?.thumbnail ||
    bookInfo.volumeInfo?.imageLinks?.smallThumbnail;
  const bookAuthors = bookInfo.volumeInfo?.authors;
  const publishedDate = bookInfo.volumeInfo?.publishedDate;
  const description = bookInfo.volumeInfo?.description;
  const price = bookInfo.saleInfo?.listPrice?.amount;
  const currency = bookInfo.saleInfo?.listPrice?.currencyCode;

  const fetchBook = () => {
    setIsLoading(true);
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((res) => {
        const data = handleIndividualData(res.data);
        setBookInfo(data);
        //Data that will be passed to shopping cart
        setBookToShopCart(res.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
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
      <img src={bookImage} />
      <h1>{bookTitle}</h1>
      <ul>
        <h5>Author:</h5>
        {/* Link cannot be click when it's Unknown Authors  */}
        {bookAuthors === "Unknown Authors"
          ? "Unknown Authors"
          : bookAuthors?.map((author) => {
              const authorQuery = author.replaceAll(" ", "+");
              return (
                <li key={author}>
                  <Link to={`/search/author/${authorQuery}`}>{author}</Link>
                </li>
              );
            })}
      </ul>
      <h4>
        {price} {currency}
      </h4>
      <h5>Date: {publishedDate}</h5>
      <p>{description}</p>
      {/* <button onClick={() => handleSave(id)}>Add to Cart</button> */}
      <Link
        to={"/shopping-cart/"}
        state={{ data: bookToShopCart }}
        className="btn btn-primary"
      >
        Add to Cart
      </Link>
    </div>
  );
};

export default BookDetails;
