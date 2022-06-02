import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import axios from 'axios';
import { handleIndividualData } from '../handleIndividualData';

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
  const language = bookInfo.volumeInfo?.language ?? '';
  const categories = bookInfo.volumeInfo?.categories ?? [];
  const ISBN = bookInfo.volumeInfo?.industryIdentifiers ?? [];
  const pages = bookInfo.volumeInfo?.pageCount ?? '';
  const publisher = bookInfo.volumeInfo?.publisher ?? '';
  let mature = bookInfo.volumeInfo?.maturityRating ?? '';
  mature = mature == 'MATURE' ? true : false;

  const fetchBook = () => {
    setIsLoading(true);
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((res) => {
        const data = handleIndividualData(res.data);
        setBookInfo(data);
        console.log(res.data);
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
    <div className="container book-details mb-3">
      <div className="row g-5">
        {/*............. Left column ..........*/}
        <div className="col">
          {/*............. Book image ..........*/}
          <div className="image-container">
            <img
              className="book-details-image mt-4 mb-5"
              src={bookImage}
              alt={bookTitle}
            />
            {/*........ Mature content warning ......*/}
            <div className="mature">{mature ? '🔞' : ''}</div>
          </div>
          {/*........ Language, categories, pages........*/}
          <h4 className="d-inline">Language:</h4>
          <span>{' ' + language}</span>
          <h4>Categories:</h4>
          <div className="categories">
            {categories.map((category, key) => {
              return <div key={key}>{category}</div>;
            })}
          </div>
          <h4 className="d-inline">Pages:</h4>
          <span>{' ' + pages}</span>
        </div>
        {/*............. Right column ..........*/}
        <div className="col-9">
          <h1>{bookTitle}</h1>
          <div>
            {/*............. Authors ..........*/}
            <h2>Author:</h2>
            {/* Link cannot be click when it's Unknown Authors  */}
            {bookAuthors === 'Unknown Authors'
              ? 'Unknown Authors'
              : bookAuthors?.map((author) => {
                  const authorQuery = author.replaceAll(' ', '+');
                  return (
                    <h3 key={author}>
                      <Link to={`/search/author/${authorQuery}`}>
                        {author + ' '}
                      </Link>
                    </h3>
                  );
                })}
          </div>
          {/*............. Date, publisher, ISBN ..........*/}
          <div className="book-date text-muted">Date: {publishedDate}</div>
          <div className="text-muted">Publisher: {publisher}</div>
          {ISBN.map((id, key) => {
            return (
              <div className="isbn" key={key}>
                {id.type}: {id.identifier}
              </div>
            );
          })}
          {/*............. Description ..........*/}
          {/* Parse string to HTML */}
          <div className="book-description mt-3">{parse(`${description}`)}</div>
          {/* <button onClick={() => handleSave(id)}>Add to Cart</button> */}
          <div className="book-price mt-3">
            {price} {currency}
          </div>
          <Link
            to={'/shopping-cart/'}
            state={{ data: bookToShopCart }}
            className="btn btn-primary my-3 px-5 text-uppercase"
          >
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
