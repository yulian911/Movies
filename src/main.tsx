import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './api/store'

import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Provider store={store}>
      <PersistGate loading={'loading'} persistor={persistor}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
