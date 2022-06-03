import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '942309890017-8jr5rja8oe2k61phlvson6gimu31nu1m.apps.googleusercontent.com';

const Logout = () => {
  const onSuccess = (res) => {
    alert('Logged out successfully');
  };

  //   const onFailure = () => {
  //     console.log('Handle failure cases');
  //   };

  //   const { signOut } = useGoogleLogout({
  //     clientId,
  //     onLogoutSuccess,
  //     onFailure,
  //   });

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
    // <button onClick={signOut} className="button">
    //   <img src="icons/google.svg" alt="google login" className="icon"></img>
    //   <span className="buttonText">Sign Out</span>
    // </button>
  );
};

export default Logout;
