import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import ReactDOM from 'react-dom/client';

const container = document.getElementById('root')!;
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
