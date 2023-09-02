import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import store from './pages/fyp/store'

import { Talkr } from "talkr";

import en from "./i18n/en.json";
import cn from "./i18n/cn.json";
import hk from "./i18n/hk.json";
import jp from "./i18n/jp.json";
import kr from "./i18n/kr.json";

import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Talkr languages={{ en, hk, jp, cn, kr }} defaultLanguage="en">
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Talkr>
    </Provider>
  </React.StrictMode>
)
