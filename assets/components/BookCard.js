import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ButtonPrimary from "./UI components/ButtonPrimary";

const BookCard = props => {
  const { id, volumeInfo, saleInfo, click } = props;

  const bookTitle = volumeInfo.title;
  const bookImage =
    volumeInfo.imageLinks.thumbnail || volumeInfo.imageLinks?.smallThumbnail;
  const bookAuthors = volumeInfo.authors;
  const publishedDate = volumeInfo.publishedDate;
  const price = saleInfo.listPrice.amount;
  const currency = saleInfo.listPrice.currencyCode;

  // Replacing all the spaces in URL with - for readability. Since the book title is for displaying only, we can use "-", if we use it for search, should use "+"
  const titleFormat = bookTitle && bookTitle.replaceAll(" ", "-");

  return (
    <div className='card' style={{ width: "15rem" }}>
      {/* This is for taking the image */}
      <Link to={`${id}/${titleFormat}`} state={{ data: props.data }}>
        <img src={bookImage} alt={bookTitle} className='card-img-top' />
      </Link>

      <div className='card-body'>
        {/* Send the book id and title to BookDetails as :id/:title to display it in URL and retrieve id by useParams().id to fetch data*/}
        <Link to={`${id}/${titleFormat}`} state={{ data: props.data }}>
          <h5 className='card-title'>{bookTitle}</h5>
        </Link>
        <ul>
          {/* Link cannot be click when it's Unknown Authors  */}
          {bookAuthors === "Unknown Authors" ? (
            <li>Unknown Authors</li>
          ) : (
            bookAuthors?.map(author => {
              const authorQuery = author.replaceAll(" ", "+");
              return (
                <li key={author}>
                  <Link to={`/search/author/${authorQuery}`}>{author}</Link>
                </li>
              );
            })
          )}
        </ul>
        <p className='text-muted'>Date: {publishedDate}</p>
        <div className='card-price'>
          {price} {currency}
        </div>
      </div>
      <ButtonPrimary click={() => click(props)}>Add to Cart</ButtonPrimary>
    </div>
  );
};

export default BookCard;
