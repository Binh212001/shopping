import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './app/Store';


import Layout from './Layout';



ReactDOM.render(
  <React.StrictMode>
  <Provider store= {store}>
    <Layout />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

