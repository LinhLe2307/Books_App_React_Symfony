import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Layout from './pages/Layout';
import HomePage from './components/HomePage';
import ShoppingCart from './components/ShoppingCart';
import BookDetails from './components/BookDetails';
import SearchPage from './components/SearchPage';
import Checkout from './components/Checkout';

function Main() {
  const [booksInACart, setBooksInACart] = useState([]);

  const handleAddToCart = (book) => {
    setBooksInACart([...booksInACart, book]);
    console.log('Books in a cart: ', booksInACart);
  };

  const handleDeleteBook = (e) => {
    console.log('Delete book is clicked', e.target.name);
    let bookId = e.target.name;

    let filtered = booksInACart.filter((book) =>
      //Account for repeating books
      book.id === bookId ? false : true
    );
    setBooksInACart(filtered);
  };

  const handleClearBookList = () => {
    setBooksInACart([]);
  };

  const NoMatch = () => {
    return <h2>No path matches</h2>;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout books={booksInACart} />}>
          <Route index element={<HomePage click={handleAddToCart} />} />

          <Route
            path="/:id/:title"
            element={<BookDetails click={handleAddToCart} />}
          />
          {/* This is when searching keyword (users' inputs) */}
          <Route
            path="/search/:keyword"
            element={<SearchPage click={handleAddToCart} />}
          />
          <Route
            path="/search/:keyword/:id/:title"
            element={<BookDetails click={handleAddToCart} />}
          />

          {/* This is when clicking authors */}
          <Route exact path="/search/author/:name" element={<SearchPage />} />
          <Route
            exact
            path="/search/author/:name/:id/:tile"
            element={<BookDetails click={handleAddToCart} />}
          />
          <Route
            path="/shopping-cart"
            element={
              <ShoppingCart books={booksInACart} click={handleDeleteBook} />
            }
          />
          <Route
            path="/checkout"
            element={
              <Checkout books={booksInACart} click={handleClearBookList} />
            }
          />

          {/* Handle non-existing path, will redirect to /404 */}
          <Route path="/404" element={<NoMatch />} />
          <Route path="/*" element={<Navigate to="/404" />} />
          <Route path="/search/author/*" element={<Navigate to="/404" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  //<React.StrictMode>
  <Main />
  //</React.StrictMode>
);
