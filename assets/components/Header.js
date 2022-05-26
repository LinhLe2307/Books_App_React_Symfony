import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [inputField, setInputField] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Input from users
  const handleChange = (e) => {
    //in case someone has put spaces in the input and format it to look nicer in the URL using +
    const inputFormat = e.target.value.trim().replaceAll(' ', '+');
    setInputField(inputFormat);
  };

  return (
    <header className="sticky-top bg-light p-4">
      <nav className="navbar-expand-lg navbar-light">
        <div
          className="navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <h1 className="ml-5">
            <Link to="/">Book Nook</Link>
          </h1>

          {/* Send the inputField as :keyword to SearchPage to display it in URL and useParams().keyword to fetch query*/}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={handleChange}
              defaultValue={inputField}
              placeholder="Search..."
            />
            <button type="submit" className="btn btn-primary">
              <Link to={`/search/${inputField}`} className="text-light">
                Submit
              </Link>
            </button>
          </form>

          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Search
              </Link>
            </li>
            <li className="nav-item">
              {/* <Link to="/contact" className="nav-link active">
                Contact
              </Link> */}
              {/*......... Scroll down to contacts on any page...........*/}
              <a href="#contacts" className="nav-link active">
                Contacts
              </a>
            </li>
            <li className="nav-item">
              <Link to="/shopping-cart" className="nav-link active">
                <span className="material-symbols-outlined">shopping_cart</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <button id="btnUp" className="btn btn-primary">
        <a href="#" className="material-symbols-outlined link-light">
          arrow_upward
        </a>
      </button>
    </header>
  );
};

export default Header;
