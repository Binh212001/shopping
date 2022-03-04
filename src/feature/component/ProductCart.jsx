import React from 'react';
import PropTypes from 'prop-types';
import { removeProduct } from '../../app/CartSlice';
import { useDispatch } from 'react-redux';

function ProductCart(props) {
  const item = props;
  console.log(
    '🚀 ~ file: ProductCart.jsx ~ line 8 ~ ProductCart ~ item',
    item
  );

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <div className="product__cart">
      <img
        src={item.item.products.image}
        alt={item.item.products.title}
        className="product__cart__img"
      />
      <div className="product__cart__content">
        <h3 className="product__cart__content__title">
          {item.item.products.title}
        </h3>
        <div className="product__cart__content__sum">
          Thanh tien :{' '}
          {item.item.products.price * item.item.quantyti}
        </div>
        <button
          className="product__cart__content__del"
          onClick={() => {
            handleRemove(item.item.id);
          }}
        >
          Xóa sản phẩm
        </button>
      </div>
    </div>
  );
}

ProductCart.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ProductCart;
