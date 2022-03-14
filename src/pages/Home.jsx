import React, { useEffect, useState } from 'react';
import dataSlider from '../feature/dataSlider';
import ProductList from '../feature/component/ProductList';
import BtnSlider from '../feature/BtnSlider';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
function Home() {
  const [slideIndex, setSlideIndex] = useState(1);

  const [btnScroll, setBtnScroll] = useState(false);
  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  setTimeout(() => {
    nextSlide();
  }, 5000);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setBtnScroll(true);
      } else {
        setBtnScroll(false);
      }
    });

    return () => {
      window.removeEventListener('scroll', () => {
        setBtnScroll(false);
      });
    };
  }, [slideIndex]);

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="hero">
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
      <ProductList></ProductList>
      {btnScroll ? (
        <button onClick={() => handleScroll()} className="home__scroll">
          <ArrowUpwardIcon />
        </button>
      ) : null}
    </div>
  );
}

export default Home;
