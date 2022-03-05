import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router';
import { getByid } from '../../app/GetIDSlice';
import { doc, setDoc } from 'firebase/firestore';

import { addNewProduct } from '../../app/CartSlice';
import { AuthContext } from '../Auth/SignIn/AuthProvider';
import { db } from '../../Firesbase/FirebaseConfig';
import { v4 as uuidv4 } from 'uuid';

function ProductView() {
  const [qty, setqty] = useState(1);

  const dispatch = useDispatch();
  const item = useSelector((state) => state.Productid);

  const id = useParams();
  const history = useHistory();
  const user = useContext(AuthContext);

  useEffect(() => {
    dispatch(getByid(id));
  }, [dispatch, id]);

  //create param product to add to cart

  let product = {
    id: item.products.id,
    ...item,
    quantyti: qty,
    sum: qty * item.products.price,
    ...user,
  };
  const onClickPr = async (product, user) => {
    if (user.uid) {
      alert('Mua hàng thành công');
      dispatch(addNewProduct(product));
      history.push('/cart');
      await setDoc(doc(db, 'cart', uuidv4()), {
        ...product,
      });
      history.push('/cart');
    } else {
      history.push('/login');
    }
  };
  if (item.status === true) {
    return <div>Loading</div>;
  }

  return (
    <div className="view">
      <div className="view__left">
        <img
          src={item.products.image}
          alt={item.products.title}
          className="view__left__img"
        />
      </div>
      <div className="view__right">
        <h2 className="view__right__title">
          {item.products.title}
        </h2>
        <div className="view__right__des">
          {item.products.description}
        </div>
        <div className="view__right__price">
          {item.products.price}$
        </div>
        <div className="view__right__qty">
          <button
            className="view__right__qty__btn"
            onClick={() => {
              if (qty !== 1) {
                setqty(qty - 1);
              }
            }}
          >
            -
          </button>
          <span className="view__right__qty__amount">
            {qty}
          </span>
          <button
            className="view__right__qty__btn"
            onClick={() => {
              setqty(qty + 1);
            }}
          >
            +
          </button>
        </div>
        <div className="view__right__sum">
          Thành tiền:{qty * item.products.price}$
        </div>
        <button
          className="view__right__buy"
          onClick={() => {
            onClickPr(product, user);
          }}
        >
          Mua Hang
        </button>
      </div>
    </div>
  );
}

export default ProductView;
