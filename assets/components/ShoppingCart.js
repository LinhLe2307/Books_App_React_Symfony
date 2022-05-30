import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { handleIndividualData } from '../handleIndividualData';
import { bookList } from './ShoppingList';

const ShoppingCart = () => {
  const [booksInACart, setBooksInACart] = useState([]);
  const location = useLocation();
  const [newBook, setNewBook] = useState(
    location.state?.data ? location.state.data : ''
  );
  // let newBook = location.state?.data ? location.state.data : '';

  useEffect(() => {
    // console.log(newBook);
    setBooksInACart([...booksInACart, newBook]);
    addNewBook();

    //Warning if reload button is clicked
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = '';
      return '';
    };
    window.addEventListener('beforeunload', unloadCallback);
    return () => window.removeEventListener('beforeunload', unloadCallback);
  }, []);

  const addNewBook = () => {
    //Helper list that keeps track of added books
    booksInACart == '' ? '' : bookList.push(...booksInACart);
    //If a new book is not empty add it to bookList
    newBook == '' ? '' : bookList.push(newBook);
    console.log('Books list on load: ', bookList);
  };

  const handleDeleteBook = (e) => {
    let bookId = e.target.name;

    //Clear new book if id matches
    newBook.id == bookId ? setNewBook('') : '';
    //Find book by id and delete
    let i = bookList.findIndex((book) => book.id == bookId);
    bookList.splice(i, 1);
    setBooksInACart(...bookList);
  };

  if (!bookList.length == 0) {
    return (
      <div>
        <h1 className="p-3 m-2">Shopping Cart</h1>
        {bookList?.map((book, key) => {
          return (
            <div className="order card m-2" key={key}>
              <div className="card-body d-inline-flex">
                <img
                  className="card-image d-inline-flex p-2"
                  src={book.volumeInfo?.imageLinks?.thumbnail}
                  style={{ height: '100px', width: '80px' }}
                ></img>
                <div className="card-content d-inline">
                  <h2 className="card-title">
                    Title: {book.volumeInfo?.title} -{' '}
                    {book.volumeInfo?.authors[0]}
                  </h2>
                  Price: {book.saleInfo?.listPrice?.amount}
                  {book.saleInfo?.listPrice?.currencyCode}
                </div>
                <button
                  onClick={(e) => handleDeleteBook(e)}
                  className="btn btn-light"
                  name={book.id}
                >
                  x
                </button>
              </div>
            </div>
          );
        })}
        <Link
          to={'/checkout/'}
          state={{ data: bookList }}
          className="btn btn-primary m-2"
        >
          CHECKOUT
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="p-3 m-2">Shopping Cart</h1>
        <div className="p-3">Cart is empty</div>
      </div>
    );
  }
};

export default ShoppingCart;
