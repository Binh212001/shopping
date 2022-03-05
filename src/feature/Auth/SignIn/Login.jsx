import React from 'react';

import 'firebase/compat/auth';

import {
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '../../../Firesbase/FirebaseConfig';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const provider = new GoogleAuthProvider();

function Login() {
  const history = useHistory();

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        if (res) {
          history.push('/');
        }
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <div className="login">
      <button onClick={() => handleSignIn()}>Google</button>
    </div>
  );
}

export default Login;
