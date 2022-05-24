import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

const BookDetails = () => {
    // Since book's id matches the id in URL, we can use it as query to get the data
    const id = (useParams().id);
    const [bookInfo, setBookInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false)

    const fetchBook = () => {
        setIsLoading(true);
        axios
            .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
            .then(res => {
                setBookInfo(res.data.volumeInfo);
                setIsLoading(false);
            })
            .catch(error => console.log(error))
    }

    // intially run when open the page
    useEffect(() => {
        fetchBook();
    }, [])

    if (isLoading) {
        return <p>...Loading</p>
    }

    return (
        <div>
            <img src={bookInfo.imageLinks?.thumbnail} />
            <h1>{bookInfo.title}</h1>
            <h2>{bookInfo.authors?.map(author => `${author} `)}
            </h2>
            <p>{bookInfo.description}</p>
        </div>
    )
}

export default BookDetails