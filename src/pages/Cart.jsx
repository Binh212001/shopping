import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import { AuthContext } from '../feature/Auth/SignIn/AuthProvider';

import ProductCart from '../feature/component/ProductCart';

import { useDispatch, useSelector } from 'react-redux';
import { getCart, removeProduct } from '../app/CartSlice';
import useCart from '../service/useCart';

function Cart() {
  const user = useContext(AuthContext);

  const dispatch = useDispatch();

  const product = useSelector(
    (state) => state.Productoncart.products
  );

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
      {product.length > 0 ? (
        <h2 className="carttitle">
          Bạn có {product.length} sản phẩm trong giỏ hàng
        </h2>
      ) : (
        <h2 className="carttitle">
          Bạn không có sản phảm nào trong giỏ hàng
        </h2>
      )}
      {product.map((item, index) => {
        return (
          <ProductCart
            onRemove={onRemove}
            key={index}
            item={item}
          />
        );
      })}
    </div>
  );
}

export default Cart;
