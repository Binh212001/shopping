import React, { createContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GetProduct } from './app/ProductSlice';
import Header from './feature/Header';
import { routes } from './Routes/Route';
import { useDispatch, useSelector } from 'react-redux';

import './scss/index.scss';

export const Productcontext = createContext();
function Layout() {
  const dispatch = useDispatch();
  const Products = useSelector((state) => state.Products);
  useEffect(() => {
    dispatch(GetProduct());
  }, [dispatch]);
  return (
    <Router>
      <Header></Header>
      <Productcontext.Provider value={Products.products}>
        <Switch>
          {routes.map((data, index) => (
            <Route
              key={index}
              exact={data.exact}
              children={data.main}
              path={data.path}
            />
          ))}
        </Switch>
      </Productcontext.Provider>
    </Router>
  );
}

export default Layout;
