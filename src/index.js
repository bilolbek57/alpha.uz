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

// Redux - ma'lumotlarni bir joydan boshqa joyga yuborish uchun kerak
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["cart", "heart"],
  blacklist: ["water"]
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer)
let persistor = persistStore(store)

// const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <BakToTop/>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

