import {
  query,
  collection,
  where,
  getDocs,
} from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../feature/Auth/SignIn/AuthProvider';
import { db } from '../Firesbase/FirebaseConfig';

import { doc, onSnapshot } from 'firebase/firestore';
function useCart() {
  const [productCart, setProductCart] = useState();
  const user = useContext(AuthContext);

  if (user) {
    const unsub = onSnapshot(
      doc(db, 'cart', user.uid),
      (doc) => {
        console.log('Current data: ', doc.data());
      }
    );
  }

  useEffect(() => {
    if (user) {
      get(user);
    }
  }, [user]);

  const get = async (user) => {
    const q = query(
      collection(db, 'cart'),
      where('uid', '==', user.uid)
    );

    const querySnapshot = await getDocs(q);
    let item = [];
    querySnapshot.forEach((doc) => {
      item.push(doc.data());
    });
    setProductCart(item);
  };
  return productCart;
}

export default useCart;
