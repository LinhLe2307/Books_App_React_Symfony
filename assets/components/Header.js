import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode'; //npm install jwt-decode

import ButtonUp from './UI components/ButtonUp';
import SearchBar from './SearchBar';

const Header = ({ books }) => {
  const [user, setUser] = useState({});
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  {
    /*......... GOOGLE LOG IN AND SIGN OUT...........*/
  }

  // LOG IN
  const handleCallbackResponse = res => {
    console.log('Encoded JWI ID token: ' + res.credential);
    let userObject = jwt_decode(res.credential);
    setUser(userObject);
    document.getElementById('signInDiv').hidden = true;
  };

  // SIGN OUT
  const handleSignOut = e => {
    setUser({});
    document.getElementById('signInDiv').hidden = false;
  };

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id:
        '776173077238-q3dqfad6hp6andesnhaalve5295ua3hq.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
    });
    google.accounts.id.prompt();
  }, []);

  // If there is no user, the sign in button will be displayed. Otherwise, it will display sign out button
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
                <span className='text-white'>{books.length ?? 0 + ' '}</span>
                <span className='material-symbols-outlined text-white'>
                  shopping_cart
                </span>
              </Link>
            </li>
            {/*............ Google Sign in button ...........*/}
            {/*......... Sign in ...........*/}
            <li id='signInDiv'></li>
            {isLoggingOut && Object.keys(user).length != 0 && (
              // ......... Sign out ...........
              <button
                onClick={e => handleSignOut(e)}
                className='btn btn-primary'
                style={{ height: '2.5rem' }}
              >
                Sign Out
              </button>
            )}
            {user && (
              <div onClick={() => setIsLoggingOut(prevState => !prevState)}>
                <img
                  style={{ height: '3rem', borderRadius: '50%' }}
                  src={user.picture}
                ></img>
                <h3 style={{ color: 'white' }}>{user.name}</h3>
              </div>
            )}
          </ul>
        </div>
      </nav>
      <ButtonUp />
    </header>
  );
};

export default Header;
