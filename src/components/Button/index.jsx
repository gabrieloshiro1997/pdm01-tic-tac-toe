import React from 'react';

import './styles.css';

function Button({ children, backgroundColor, ...rest }) {
  return (
    <button
      className='button'
      style={{ background: backgroundColor }}
      type='button'
      {...rest}
    >
      {children}
    </button>
  );
}
export { Button };
