import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { getCart } from '../app/CartSlice';

import { AuthContext } from '../feature/Auth/SignIn/AuthProvider';

import ProductCart from '../feature/component/ProductCart';
import useCart from '../service/useCart';

function Cart() {
  const user = useContext(AuthContext);
  console.log(
    '🚀 ~ file: Cart.jsx ~ line 13 ~ Cart ~ user',
    user
  );
  const history = useHistory();

  // const product = useCart();

  const item = useSelector(
    (state) => state.Productoncart.products
  );

  const dispatch = useDispatch();
  // neu chua co user dang nhap thi quay lai dang nhap

  if (!user) {
    history.push('/login');
  }
  return (
    <div className="carts">
      {item.map((item, index) => {
        return <ProductCart key={index} item={item} />;
      })}
    </div>
  );
}

export default Cart;
