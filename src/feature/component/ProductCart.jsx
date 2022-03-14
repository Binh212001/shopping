import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../Firesbase/FirebaseConfig';
import { useDispatch } from 'react-redux';
import { updateDoc } from 'firebase/firestore';

import { removeProduct, updateProduct } from '../../app/CartSlice';

function ProductCart(props) {
  const item = props;

  const pid = item.item.pid;
  let data = item.item;

  const dispatch = useDispatch();

  const [qty, setqty] = useState(item.item.quantyti);

  const updateQty = async (otp, qty, pid, data) => {
    const washingtonRef = doc(db, 'cart', pid);
    if (otp === '+') {
      //mac du da set qty nhung qty trong data thieu mot don vi . vay nen +1 de so luong chinh xac
      setqty(qty + 1);
      data = {
        ...data,
        quantyti: qty + 1,
      };

      dispatch(updateProduct(data));

      await updateDoc(washingtonRef, {
        quantyti: qty + 1,
      });
    } else {
      setqty(qty - 1);
      //mac du da set qty nhung qty trong data thieu mot don vi . vay nen +1 de so luong chinh xac

      data = {
        ...data,
        quantyti: qty - 1,
      };

      dispatch(updateProduct(data));
      await updateDoc(washingtonRef, {
        quantyti: qty - 1,
      });
      if (qty <= 1) {
        dispatch(removeProduct(pid));
        await deleteDoc(doc(db, 'cart', pid));
        return;
      }
    }
  };
  const handleRemove = async (pid) => {
    await deleteDoc(doc(db, 'cart', pid));
    props.onRemove(pid);
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
          Thanh tien :{item.item.products.price * qty}
        </div>
        <button
          className="product__cart__content__del"
          onClick={() => {
            handleRemove(item.item.pid);
          }}
        >
          Xóa sản phẩm
        </button>
      </div>

      <div className="product__cart__control">
        <button
          onClick={() => updateQty('-', qty, pid, data)}
          className="product__cart__control_btn"
        >
          -
        </button>
        <span className="product__cart__control_qty">{qty}</span>
        <button
          onClick={() => updateQty('+', qty, pid, data)}
          className="product__cart__control_btn"
        >
          +
        </button>
      </div>
    </div>
  );
}

ProductCart.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ProductCart;
