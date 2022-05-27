import React, { useState } from "react";
import { Link } from "react-router-dom";

const BookCard = ({ id, volumeInfo, saleInfo }) => {
  const [selectedBooks, setSelectedBooks] = useState([]);

  const bookTitle = volumeInfo.title;
  const bookImage =
    volumeInfo.imageLinks.thumbnail || volumeInfo.imageLinks?.smallThumbnail;
  const bookAuthors = volumeInfo.authors;
  const publishedDate = volumeInfo.publishedDate;
  const price = saleInfo.listPrice.amount;
  const currency = saleInfo.listPrice.currencyCode;

  // Replacing all the spaces in URL with - for readability. Since the book title is for displaying only, we can use "-", if we use it for search, should use "+"
  const titleFormat = bookTitle && bookTitle.replaceAll(" ", "-");

  const handleAdd = (id) => {
    const newSelectedBooks = [...selectedBooks];
    newSelectedBooks.push(id);
    setSelectedBooks(newSelectedBooks);
  };

  return (
    <div className="card" style={{ width: "15rem" }}>
      {/* This is for taking the image */}
      <img src={bookImage} alt={bookTitle} className="card-img-top" />

      <div className="card-body">
        {/* Send the book id and title to BookDetails as :id/:title to display it in URL and retrieve id by useParams().id to fetch data*/}
        <Link to={`${id}/${titleFormat}`}>
          <h5 className="card-title">{bookTitle}</h5>
        </Link>
        <ul>
          {/* Link cannot be click when it's Unknown Authors  */}
          {bookAuthors === "Unknown Authors" ? (
            <li>Unknown Authors</li>
          ) : (
            bookAuthors?.map((author) => {
              const authorQuery = author.replaceAll(" ", "+");
              return (
                <li key={author}>
                  <Link to={`/search/author/${authorQuery}`}>{author}</Link>
                </li>
              );
            })
          )}
        </ul>
        <p>Date: {publishedDate}</p>
        <div>
          {price} {currency}
        </div>
      </div>

      <button onClick={() => handleAdd(id)}>Add to Cart</button>
    </div>
  );
};

export default BookCard;
