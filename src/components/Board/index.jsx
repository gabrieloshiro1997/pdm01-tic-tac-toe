import React, { useState } from 'react';

import { Square } from '../Square';

import './styles.css';

function Board(props) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  const handleClick = (i) => {
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'x' : 'o';

    setXIsNext(!xIsNext);
    setSquares(newSquares);
  };

  return (
    <div>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export { Board };
