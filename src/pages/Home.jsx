import React, { useEffect, useState } from 'react';

import ProductList from '../feature/component/ProductList';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
function Home() {
  const [btnScroll, setBtnScroll] = useState(false);

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
  }, []);

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="hero">
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
