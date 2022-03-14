import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { auth } from '../../../Firesbase/FirebaseConfig';

function AuthProvider() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubcribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({
          displayName,
          email,
          uid,
          photoURL,
        });
        return;
      }
    });
    return () => {
      unsubcribed();
    };
  }, []);

  return user;
}

export default AuthProvider;
