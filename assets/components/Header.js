import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode"; //npm install jwt-decode

const Header = ({ books }) => {
  const [inputField, setInputField] = useState("");
  const [user, setUser] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Input from users
  const handleChange = (e) => {
    //in case someone has put spaces in the input and format it to look nicer in the URL using +
    const inputFormat = e.target.value.trim().replaceAll(" ", "+");
    setInputField(inputFormat);
  };

  {
    /*......... GOOGLE LOG IN AND SIGN OUT...........*/
  }

  // LOG IN
  const handleCallbackResponse = (res) => {
    console.log("Encoded JWI ID token: " + res.credential);
    let userObject = jwt_decode(res.credential);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  };

  // SIGN OUT
  const handleSignOut = (e) => {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  };

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id:
        "776173077238-q3dqfad6hp6andesnhaalve5295ua3hq.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
    google.accounts.id.prompt();
  }, []);

  // If there is no user, the sign in button will be displayed. Otherwise, it will display sign out button
  return (
    <header className="sticky-top p-4">
      <nav className="navbar-expand-lg">
        <div
          className="navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <h1 className="ml-5">
            <Link to="/" className="text-white">
              Book Nook
            </Link>
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
              <Link to="/" className="nav-link active text-white">
                Home
              </Link>
            </li>
            <li className="nav-item">
              {/*......... Scroll down to contacts on any page...........*/}
              <a href="#contact" className="nav-link active text-white">
                Contacts
              </a>
            </li>
            <li className="nav-item">
              <Link to="/shopping-cart" className="nav-link active">
                <span className="text-white">{books.length ?? 0 + " "}</span>
                <span className="material-symbols-outlined text-white">
                  shopping_cart
                </span>
              </Link>
            </li>

            {/*......... Sign in ...........*/}
            <li id="signInDiv"></li>
            {Object.keys(user).length != 0 && (
              // ......... Sign out ...........
              <button
                onClick={(e) => handleSignOut(e)}
                style={{ height: "3rem" }}
              >
                Sign Out
              </button>
            )}
            {user && (
              <div>
                <img src={user.picture}></img>
                <h3 style={{ color: "white" }}>{user.name}</h3>
              </div>
            )}
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
