import React from 'react';
import { Link } from "react-router-dom";

const BookCard = ({ volumeInfo, handleAuthor, handleAdd }) => {
    const bookTitle = volumeInfo?.title;
    const bookImage = volumeInfo.imageLinks?.thumbnail;
    const bookAuthors = volumeInfo.authors;

    const authorsConverter = (author) => {
        // this is for q=inauthor:"author+name" which will be searching with exact name of the author.
        const authorQuery = author.replaceAll(' ', '+');
        handleAuthor(authorQuery)
    }

    return (
        <div className='card' style={{ width: "15rem" }}>

            {/* This is for taking the image */}
            <img src={bookImage} alt={bookTitle}
                className="card-img-top" />

            <div className='card-body'>
                <h5 className='card-title'>{bookTitle}</h5>
                <ul>
                    {bookAuthors?.map(author => (
                        <li onClick={() => authorsConverter(author)} key={author}>{author}</li>
                    ))}
                </ul>
            </div>
            {/* We return the whole book Object in case we use other later */}
            <button onClick={() => handleAdd()}>Add to Cart</button>
        </div>
    )
}

export default BookCard