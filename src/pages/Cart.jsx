import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { getItem } from '../app/CartSlice';
import { AuthContext } from '../feature/Auth/SignIn/AuthProvider';

import ProductCart from '../feature/component/ProductCart';

function Cart() {
  const user = useContext(AuthContext);
  const item = useSelector(
    (state) => state.Productoncart.products
  );
  console.log(
    '🚀 ~ file: Cart.jsx ~ line 9 ~ Cart ~ item',
    item
  );

  const history = useHistory();

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
