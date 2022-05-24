import React from 'react';
import { Link } from "react-router-dom";

const BookCard = ({ id, volumeInfo, handleAuthor, handleAdd }) => {
    const bookTitle = volumeInfo?.title;
    const bookImage = volumeInfo.imageLinks?.thumbnail;
    const bookAuthors = volumeInfo.authors;
    const publishedDate = volumeInfo.publishedDate;

    // This is for making replacing all the spaces in URL with - for readability 
    const titleFormat = bookTitle.replaceAll(" ", "-")

    const authorsConverter = (author) => {
        // this is for q=inauthor:"author+name" which will be searching with exact name of the author. Inauthor: means searching in author name
        const authorQuery = author.replaceAll(' ', '+');
        handleAuthor(authorQuery)
    }

    return (
        <div className='card' style={{ width: "15rem" }}>

            {/* This is for taking the image */}
            <img src={bookImage} alt={bookTitle}
                className="card-img-top" />

            <div className='card-body'>

                {/* Send the book id and title to BookDetails as :id/:title to display it in URL and retrieve id by useParams().id to fetch data*/}
                <Link to={`${id}/${titleFormat}`}><h5 className='card-title'>{bookTitle}</h5></Link>
                <ul>
                    {bookAuthors?.map(author => (
                        <li onClick={() => authorsConverter(author)} key={author}><a>{author}</a></li>
                    ))}
                </ul>
                <p>{publishedDate}</p>
            </div>

            <button onClick={() => handleAdd()}>Add to Cart</button>
        </div>
    )
}

export default BookCard