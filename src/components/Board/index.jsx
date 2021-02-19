import React, { useState, useMemo } from 'react';

import { Square } from '../Square';

import './styles.css';

function Board(props) {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [xIsNext, setXIsNext] = useState(true);

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  const handleClick = (i) => {
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';

    setXIsNext(!xIsNext);
    setSquares(newSquares);
  };

  const nextPlayer = useMemo(() => {
    const player = xIsNext ? 'X' : 'O';

    return player;
  }, [xIsNext]);

  const winningPlayer = useMemo(() => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const line of lines) {
      const [a, b, c] = line;
      if (
        squares[a].toString() &&
        squares[a].toString() === squares[b].toString() &&
        squares[b].toString() === squares[c].toString()
      ) {
        return squares[a];
      }
    }
    return null;
  }, [squares]);

  return (
    <div>
      {winningPlayer && (
        <div className='status'>Jogador vencedor: {winningPlayer}</div>
      )}

      {!winningPlayer && <div className='status'>Jogador: {nextPlayer}</div>}
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
