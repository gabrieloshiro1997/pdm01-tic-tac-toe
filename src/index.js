import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { Square } from './components/Square';

ReactDOM.render(
  <React.StrictMode>
    <Square value={0} onClick={() => console.log('0')} />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
