import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import parse from "html-react-parser";

import BookViewer from "./BookViewer";
import SearchLibrary from "./SearchLibrary";

const BookDetails = ({ click }) => {
  const [showPreview, setShowPreview] = useState(true);
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
  const rating = volumeInfo?.ratingsCount ?? "";

  const handlePreview = () => {
    setShowPreview(!showPreview);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(bookInfo);
  }, []);

  return (
    <div>
      <div className='container book-details mb-3'>
        <div className='row g-5'>
          {/*............. Left column ..........*/}
          <div className='col'>
            {/*............. Book image ..........*/}
            <div className='image-container'>
              <img
                className='book-details-image mt-4 mb-5'
                src={bookImage}
                alt={bookTitle}
              />
              {/*........ Mature content warning ......*/}
              <div className='mature'>{mature ? "🔞" : ""}</div>
            </div>
            {/*........ Language, categories, pages........*/}
            <h4 className='d-inline'>Language:</h4>
            <span>{" " + language}</span>
            <h4>Categories:</h4>
            <div className='categories'>
              {categories.map((category, key) => {
                return <div key={key}>{category}</div>;
              })}
            </div>
            <h4 className='d-inline'>Pages:</h4>
            <span>{" " + pages}</span>
          </div>
          {/*............. Right column ..........*/}
          <div className='col-9'>
            <h1>{bookTitle}</h1>
            <div>
              {rating
                ? Array.apply(null, Array(5)).map((k, i) =>
                    i <= rating ? "★" : "☆"
                  )
                : ""}
            </div>
            <div>
              {/*............. Authors ..........*/}
              <h2>Author:</h2>
              {/* Link cannot be click when it's Unknown Authors  */}
              {bookAuthors === "Unknown Authors"
                ? "Unknown Authors"
                : bookAuthors?.map(author => {
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
            <div className='book-date text-muted'>Date: {publishedDate}</div>
            <div className='text-muted'>Publisher: {publisher}</div>
            {ISBN.map((id, key) => {
              return (
                <div className='isbn' key={key}>
                  {id.type}: {id.identifier}
                </div>
              );
            })}
            {/*............. Description ..........*/}
            {/* Parse string to HTML */}
            <div className='book-description mt-3'>
              {parse(`${description}`)}
            </div>
            <div className='book-price mt-3'>
              {price} {currency}
            </div>
            {/*............... Button ..............*/}
            <button className='btn btn-primary' onClick={() => click(bookInfo)}>
              Add to Cart
            </button>
          </div>
        </div>
        <SearchLibrary bookAuthor={bookAuthors[0]} bookTitle={bookTitle} />
        <button className='btn btn-primary' onClick={handlePreview}>
          {showPreview ? "Hide preview" : "Show preview"}
        </button>
        {showPreview ? <BookViewer ISBN_num={ISBN[0].identifier} /> : ""}
      </div>
    </div>
  );
};

export default BookDetails;
