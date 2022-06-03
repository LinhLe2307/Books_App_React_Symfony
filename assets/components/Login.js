import React from 'react';
import { GoogleLogin } from 'react-google-login';

import { refreshTokenSetup } from '../utils/refreshTokenSetup';

const clientId =
  '942309890017-8jr5rja8oe2k61phlvson6gimu31nu1m.apps.googleusercontent.com';

const Login = () => {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    refreshTokenSetup(res);
  };

  const onFailure = (err) => {
    console.log('Login Failure: res:', err);
  };

  //   const { signIn } = useGoogleLogin({
  //     onSuccess,
  //     onFailure,
  //     clientId,
  //     isSignedIn: true,
  //     accessType: 'offline',
  //   });

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
    // <button onClick={signIn} className="button">
    //   <img src="icons/google.svg"></img>
    //   <span className="buttonText">Sign in with Google</span>
    // </button>
  );
};

export default Login;
