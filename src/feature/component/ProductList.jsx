import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import dataSlider from '../dataSlider';
import BtnSlider from '../BtnSlider';
import { GetProduct } from '../../app/ProductSlice';
import Grid from './Grid';
import Product from './Product';

function ProductList() {
  const [slideIndex, setSlideIndex] = useState(1);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.Products);

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };
  useEffect(() => {
    dispatch(GetProduct());
  }, [dispatch]);

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  if (products.status === true) {
    return <div>Loading</div>;
  }
  return (
    <div className="product-list">
      <div className="container-slider">
        {dataSlider.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={
                slideIndex === index + 1 ? 'slide active-anim' : 'slide'
              }
            >
              <img src={obj.slide} />
            </div>
          );
        })}
        <BtnSlider moveSlide={nextSlide} direction={'next'} />
        <BtnSlider moveSlide={prevSlide} direction={'prev'} />

        <div className="container-dots">
          {Array.from({ length: 3 }).map((item, index) => (
            <div
              key={index}
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? 'dot active' : 'dot'}
            ></div>
          ))}
        </div>
      </div>
      <Grid gap={10} col={4} colmd={2} colsm={1}>
        {products.products.map((data) => {
          return <Product key={data.id} item={data}></Product>;
        })}
      </Grid>
    </div>
  );
}

export default ProductList;
