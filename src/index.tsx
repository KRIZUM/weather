import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {HashRouter} from "react-router-dom";
import {ThemeProvider} from "./provider/ThemeProvider";
import {Provider} from "react-redux";
import { store } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <HashRouter>
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider>
    <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
    </HashRouter>

);

