import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode"; //npm install jwt-decode

import ButtonUp from "./UI components/ButtonUp";
import SearchBar from "./SearchBar";
import GoogleSignIn from "./GoogleSignIn";

const Header = ({ books }) => {
  return (
    <header className='sticky-top p-4'>
      <nav className='navbar-expand-lg'>
        <div
          className='navbar-collapse justify-content-between'
          id='navbarSupportedContent'
        >
          {/*................. Navigation links .................*/}
          {/* Home */}
          <h1 className='ml-5'>
            <Link to='/' className='text-white'>
              Book Nook
            </Link>
          </h1>
          <SearchBar />
          {/* Home */}
          <ul className='nav'>
            <li className='nav-item'>
              <Link to='/' className='nav-link active text-white'>
                Home
              </Link>
            </li>
            {/* Contacts */}
            <li className='nav-item'>
              <a href='#contact' className='nav-link active text-white'>
                Contacts
              </a>
            </li>
            {/* Shopping cart */}
            <li className='nav-item'>
              <Link to='/shopping-cart' className='nav-link active'>
                <span className='text-white'>{books.length ?? 0 + " "}</span>
                <span className='material-symbols-outlined text-white'>
                  shopping_cart
                </span>
              </Link>
            </li>
            <GoogleSignIn />
          </ul>
        </div>
      </nav>
      <ButtonUp />
    </header>
  );
};

export default Header;
