import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import parse from "html-react-parser";
import axios from "axios";
import { handleIndividualData } from "../handleIndividualData";

const BookDetails = ({ click }) => {
  const location = useLocation();
  const bookInfo = location.state.data;
  const { volumeInfo, saleInfo } = bookInfo;

  const bookTitle = volumeInfo?.title;
  const bookImage =
    volumeInfo?.imageLinks?.thumbnail || volumeInfo?.imageLinks?.smallThumbnail;
  const bookAuthors = volumeInfo?.authors;
  const publishedDate = volumeInfo?.publishedDate;
  const description = volumeInfo?.description;
  const price = saleInfo?.listPrice?.amount;
  const currency = saleInfo?.listPrice?.currencyCode;
  const language = volumeInfo?.language ?? "";
  const categories = volumeInfo?.categories ?? [];
  const ISBN = volumeInfo?.industryIdentifiers ?? [];
  const pages = volumeInfo?.pageCount ?? "";
  const publisher = volumeInfo?.publisher ?? "";
  let mature = volumeInfo?.maturityRating ?? "";
  mature = mature == "MATURE" ? true : false;

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
          <div className="mature">{mature ? "🔞" : ""}</div>
        </div>
        {/*........ Language, categories, pages........*/}
        <h4 className="d-inline">Language:</h4>
        <span>{" " + language}</span>
        <h4>Categories:</h4>
        <div className="categories">
          {categories.map((category, key) => {
            return <div key={key}>{category}</div>;
          })}
        </div>
        <h4 className="d-inline">Pages:</h4>
        <span>{" " + pages}</span>
      </div>
      {/*............. Right column ..........*/}
      <div className="col-9">
        <h1>{bookTitle}</h1>
        <div>
          {/*............. Authors ..........*/}
          <h2>Author:</h2>
          {/* Link cannot be click when it's Unknown Authors  */}
          {bookAuthors === "Unknown Authors"
            ? "Unknown Authors"
            : bookAuthors?.map((author) => {
                const authorQuery = author.replaceAll(" ", "+");
                return (
                  <h3 key={author}>
                    <Link to={`/search/author/${authorQuery}`}>
                      {author + " "}
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
        <div className="book-price mt-3">
          {price} {currency}
        </div>
        {/*............... Button ..............*/}
        <button className="btn btn-primary" onClick={() => click(bookInfo)}>
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);
};

export default BookDetails;
