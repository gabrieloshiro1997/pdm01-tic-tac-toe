import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { Board } from './components/Board';

ReactDOM.render(
  <React.StrictMode>
    <Board
      squares={Array(9)
        .fill()
        .map((_, index) => index)}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
