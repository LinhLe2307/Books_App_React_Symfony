import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

const BookDetails = () => {
    // take the id from the BookCard
    const id = (useParams().id);
    const [bookInfo, setBookInfo] = useState({});

    const fetchBook = () => {
        axios
            .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
            .then(res => setBookInfo(res.data.volumeInfo))
            .catch(error => console.log(error))
    }

    // intially run when open the page
    useEffect(() => {
        fetchBook();
    }, [])

    return (
        <div>
            <img src={bookInfo.imageLinks?.thumbnail} />
            <h1>{bookInfo.title}</h1>
            <h2>{bookInfo.authors?.map(author => `${author} `)}
                <p>{bookInfo.description}</p>
            </h2>
        </div>
    )
}

export default BookDetails