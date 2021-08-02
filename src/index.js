import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'styles/normalize.css';
import 'styles/global.css';
import { MainWrapper } from 'components/MainWrapper/MainWrapper';
import store from 'store/Store';

import App from 'App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MainWrapper>
          <App />
        </MainWrapper>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
