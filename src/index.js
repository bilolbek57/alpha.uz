import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import "number-brm"
// redux - malumotlarni bir joydan boshqa joyga yuborish uchun kerak
import rootReducer from './context/reducer';
import {legacy_createStore as createStore} from "redux"
import { Provider } from "react-redux"
import BakToTop from './components/back-to-top/BakToTop';

const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <BakToTop/>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

