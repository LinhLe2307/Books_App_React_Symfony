import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { handleIndividualData } from '../handleIndividualData';
import { bookList } from './ShoppingList';

const ShoppingCart = () => {
  const [booksInACart, setBooksInACart] = useState([]);
  const location = useLocation();
  const newBook = location.state?.data ? location.state.data : '';

  useEffect(() => {
    console.log(newBook);
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
    newBook == '' ? '' : bookList.push(newBook);
    console.log('Books list: ', bookList);
  };

  if (!bookList.length == 0) {
    return (
      <div>
        <h1>Shopping Cart</h1>
        {bookList?.map((book, key) => {
          return (
            <div className="order card" key={key}>
              <h2 className="card-title">
                Title: {book.volumeInfo?.title} - {book.volumeInfo?.authors[0]}
              </h2>
              <img
                className="card-image"
                src={book.volumeInfo?.imageLinks?.thumbnail}
                style={{ height: '100px', width: '80px' }}
              ></img>
              <div className="card-body">
                Price: {book.saleInfo?.listPrice?.amount}
              </div>
            </div>
          );
        })}
        <Link
          to={'/checkout/'}
          state={{ data: bookList }}
          className="btn btn-primary"
        >
          CHECKOUT
        </Link>
      </div>
    );
  } else {
    return (
      <>
        <h1>Shopping Cart</h1>
        <div>Cart is empty</div>
      </>
    );
  }
};

export default ShoppingCart;
