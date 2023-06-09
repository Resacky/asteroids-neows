import React from 'react';
import ReactDOM from 'react-dom/client';

import AppStart from '../src/pages/start.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <b>Hello World!</b>
    <AppStart />
  </React.StrictMode>
);