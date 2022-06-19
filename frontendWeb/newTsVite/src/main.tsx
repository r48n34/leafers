import React from 'react'
import ReactDOM from 'react-dom/client'

import { ClickToComponent } from "click-to-react-component";

import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import store from './pages/fyp/store'

import { Talkr } from "talkr";
import en from "./i18n/en.json";
import hk from "./i18n/hk.json";

import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Talkr languages={{ en, hk }} defaultLanguage="en">
      <BrowserRouter>
        <App />
        <ClickToComponent />
      </BrowserRouter>
      </Talkr>
    </Provider>
  </React.StrictMode>
)
