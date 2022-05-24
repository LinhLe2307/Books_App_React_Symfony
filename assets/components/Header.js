import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [inputField, setInputField] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  // Input from users
  const handleChange = (e) => {

    //in case someone has put spaces in the input and format it to look nicer in the URL
    const inputFormat = e.target.value.trim().replaceAll(" ", "+");
    setInputField(inputFormat);
  }

  return (
    <header className="sticky-top bg-light p-4">
      <nav className="navbar-expand-lg navbar-light">
        <div className="navbar-collapse justify-content-between" id="navbarSupportedContent">
          <h1 className="ml-5"><Link to="/">SL</Link></h1>

          {/* Send the inputField as :keyword to SearchPage to display it in URL and useParams().keyword to fetch query*/}
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} defaultValue={inputField} placeholder="Search..." />
            <button type="submit"><Link to={`/search/${inputField}`}>Submit</Link></button>
          </form>

          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active" >Search</Link>
            </li>
            <li className="nav-item">
              <Link to="/checkout" className="nav-link active">Cart</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link active">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
