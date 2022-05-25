import React from 'react';
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
  const NoMatch = () => {
    return <h2>No path matches</h2>;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          {/* This is when searching keyword (users' inputs) */}
          <Route path="/search/:keyword" element={<SearchPage />} />
          <Route path="/search/:keyword/:id/:tile" element={<BookDetails />} />

          {/* This is when clicking authors */}
          <Route exact path="/search/author/:name" element={<SearchPage />} />
          <Route
            exact
            path="/search/author/:name/:id/:tile"
            element={<BookDetails />}
          />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />

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
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
