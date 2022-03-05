import {
  query,
  collection,
  where,
  getDocs,
} from 'firebase/firestore';
import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import { AuthContext } from '../feature/Auth/SignIn/AuthProvider';
import { db } from '../Firesbase/FirebaseConfig';

function useCart() {
  const user = useContext(AuthContext);
  const { uid } = user;

  const [productCart, setProductCart] = useState();
  console.log(
    '🚀 ~ file: useCart.js ~ line 20 ~ useCart ~ productCart',
    productCart
  );

  useEffect(() => {
    get(uid);
  }, [uid]);

  const get = async (uid) => {
    const q = query(
      collection(db, 'cart'),
      where('uid', '==', uid)
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
