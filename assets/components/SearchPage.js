import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from "axios";
import BookCard from './BookCard'

const SearchPage = () => {
    
    //Since users' input matches the keyword in URL, we can use it as query to get the data
    const keyword = (useParams().keyword);
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // // fetch books from Google API based on users' inputs. Default volume is 10 but we can get the maximum allowable results up to 40
    const fetchBooks = () => {
        setIsLoading(true);
        axios
            .get(`https://www.googleapis.com/books/v1/volumes?q=${keyword}&maxResults=40`)
            .then(res => {
                setBooks(res.data.items);
                setIsLoading(false);
            }
            )
            .catch(error => console.log(error));
    };

    // render the page every time keyword (users' inputs) change
    useEffect(() => {
        fetchBooks();
    }, [keyword])

    // Clicking to the names of authors. Default volume is 10 but we can get the maximum allowable results up to 40
    const handleAuthor = (name) => {
        setIsLoading(true);
        axios
            .get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:"${name}"&maxResults=40`)
            .then(res => {
                setBooks(res.data.items);
                setIsLoading(false);
            })
            .catch(error => console.log(error));

    }

    // Add chosen books to API
    const handleAdd = () => {
        // need API to add
    }

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div className="row align-items-center">
            {books && books.map(book => (
                <BookCard
                    key={book.id}
                    {...book}
                    handleAuthor={handleAuthor} />
            ))}
        </div>
    )
}

export default SearchPage