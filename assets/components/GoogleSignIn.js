import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode"; //npm install jwt-decode

const GoogleSignIn = () => {
  const [user, setUser] = useState({});
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  // LOG IN
  const handleCallbackResponse = res => {
    console.log("Encoded JWI ID token: " + res.credential);
    let userObject = jwt_decode(res.credential);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  };

  // SIGN OUT
  const handleSignOut = e => {
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

  return (
    <div>
      {/*......... Sign in ...........*/}
      <li id='signInDiv'></li>
      {isLoggingOut && Object.keys(user).length != 0 && (
        // ......... Sign out ...........
        <button
          onClick={e => handleSignOut(e)}
          className='btn btn-primary'
          style={{ height: "2.5rem" }}
        >
          Sign Out
        </button>
      )}
      {user && (
        <div onClick={() => setIsLoggingOut(prevState => !prevState)}>
          <img
            style={{ height: "3rem", borderRadius: "50%" }}
            src={user.picture}
          ></img>
          <p style={{ color: "white" }}>{user.name}</p>
        </div>
      )}
    </div>
  );
};
export default GoogleSignIn;
