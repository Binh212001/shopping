import React, { useEffect } from 'react';

import ProductCart from '../feature/component/ProductCart';

import { useDispatch, useSelector } from 'react-redux';
import { getCart, removeProduct } from '../app/CartSlice';

function Cart() {
  const user = useSelector((state) => state.User.user);

  const dispatch = useDispatch();

  const product = useSelector((state) => state.Productoncart.products);

  const onRemove = (pid) => {
    dispatch(removeProduct(pid));
  };
  useEffect(() => {
    if (user) {
      dispatch(getCart(user));
    }
  }, [dispatch, user]);

  return (
    <div className="carts">
      {product.length >= 0 ? (
        <h2 className="carttitle">
          Bạn có {product.length} sản phẩm trong giỏ hàng
        </h2>
      ) : null}
      {product.map((item, index) => {
        return <ProductCart onRemove={onRemove} key={index} item={item} />;
      })}
    </div>
  );
}

export default Cart;
