import React from 'react';
import ReactDOM from 'react-dom/client';

import start from '../src/pages/start.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <b>Hello World!</b>
    <start/>
  </React.StrictMode>
);