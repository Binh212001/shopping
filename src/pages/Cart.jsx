import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getItem } from '../app/CartSlice';

import ProductCart from '../feature/component/ProductCart';

function Cart() {
  const item = useSelector(
    (state) => state.Productoncart.products
  );
  console.log(
    '🚀 ~ file: Cart.jsx ~ line 9 ~ Cart ~ item',
    item
  );

  return (
    <div className="carts">
      {item.map((item, index) => {
        return <ProductCart key={index} item={item} />;
      })}
    </div>
  );
}

export default Cart;
