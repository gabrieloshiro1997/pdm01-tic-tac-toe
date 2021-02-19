import React, { useState, useCallback, useMemo } from 'react';

import { Square } from '../Square';
import { Button } from '../Button';

import './styles.css';

function Board(props) {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [xIsNext, setXIsNext] = useState(true);

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
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

  const handleClick = useCallback(
    (i) => {
      if (winningPlayer) {
        alert('O jogo já acabou!');
        return;
      }

      if (squares[i]) {
        alert('Quadrado já ocupado');
        return;
      }
      const newSquares = squares.slice();
      newSquares[i] = xIsNext ? 'X' : 'O';

      setXIsNext(!xIsNext);
      setSquares(newSquares);
    },
    [squares, xIsNext, winningPlayer]
  );

  const resetGame = useCallback(() => {
    console.log('teste');
    const cleanArray = Array(9).fill('');
    setSquares(cleanArray);
  }, []);

  const randomSelect = useCallback(() => {
    let randomNumber;

    if (winningPlayer) {
      alert('O jogo já acabou!');
      return;
    }

    let alreadySelected = true;
    while (alreadySelected) {
      randomNumber = Math.floor(Math.random() * 9);

      const notFilled = squares[randomNumber] === '';
      if (notFilled) {
        alreadySelected = false;
      }
    }

    handleClick(randomNumber);
  }, [handleClick, squares, winningPlayer]);

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
      <div className='board-row'>
        <Button
          type='button'
          backgroundColor='#282c34'
          onClick={() => resetGame()}
        >
          Reiniciar Partida
        </Button>
      </div>
      <div className='board-row'>
        <Button
          type='button'
          backgroundColor='#3085AE'
          onClick={() => randomSelect()}
        >
          Jogada Aleatória
        </Button>
      </div>
    </div>
  );
}

export { Board };
