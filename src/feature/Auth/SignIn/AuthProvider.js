import { onAuthStateChanged } from 'firebase/auth';
import React, {
  createContext,
  useState,
  useEffect,
} from 'react';
import { auth } from '../../../Firesbase/FirebaseConfig';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState();

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
      setUser({});
    });
    return () => {
      unsubcribed();
    };
  }, []);

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
