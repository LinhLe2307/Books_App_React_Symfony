import React, { useState, useEffect } from "react";
import axios from "axios";

import BookCard from "./BookCard";

const Home = () => {
    const [books, setBooks] = useState([]);
    const [inputField, setInputField] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // fetch books from Google API based on users' inputs. Default volume is 10 but we can get the maximum allowable results up to 40
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setInputField(e.target.value)
        axios
            .get(`https://www.googleapis.com/books/v1/volumes?q=${inputField}&maxResults=40`)
            .then(res => {
                setBooks(res.data.items);
                setIsLoading(false);
            }
            )
            .catch(error => console.log(error));

    };

    // Input from users
    const handleChange = (e) => {
        //in case someone has put spaces in the input
        setInputField(e.target.value.trim())
    }

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

        // clear users' inputs
        setInputField("");
    }

    // Add chosen books to API
    const handleAdd = () => {
        // need API to add 
    }

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} defaultValue={inputField} placeholder="Search..." />
                <button type="submit">Submit</button>
            </form>

            <div className="row align-items-center">
                {books && books.map(book => (
                    <BookCard
                        key={book.id}
                        {...book}
                        handleAuthor={handleAuthor} />
                ))}
            </div>
        </div>)
};

export default Home;
