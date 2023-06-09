import React from 'react';
import ReactDOM from 'react-dom/client';

import Start from '../src/pages/start.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <b>Hello World!</b>
    <Start/>
  </React.StrictMode>
);