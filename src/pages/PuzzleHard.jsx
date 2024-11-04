import React, { useState, useEffect } from 'react';
import Board from '../componentes/BoardHard';
import Pieces from '../componentes/PiecesHard';



const PuzzleHard = () => {
  const [boardTiles, setBoardTiles] = useState([]);
  const [pieces, setPieces] = useState([]);
  const [turns, setTurns] = useState(0);
  const [currTile, setCurrTile] = useState(null);
  const [otherTile, setOtherTile] = useState(null);

  const ROWS = 7;
  const COLUMNS = 19;

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    // Initialize board
    const initialBoard = Array(ROWS * COLUMNS).fill('/assets/images/puzzleHard/blank.jpg');
    setBoardTiles(initialBoard);

    // Initialize pieces
    let initialPieces = Array.from({ length: ROWS * COLUMNS }, (_, i) => `/assets/images/puzzleHard/${i + 1}.png`);
    initialPieces.reverse();
    
    // Shuffle pieces
    for (let i = 0; i < initialPieces.length; i++) {
      const j = Math.floor(Math.random() * initialPieces.length);
      [initialPieces[i], initialPieces[j]] = [initialPieces[j], initialPieces[i]];
    }
    
    setPieces(initialPieces);
  };

  const handleDragStart = (e) => {
    setCurrTile(e.target);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
  };

  const handleDragLeave = () => {
    // Handle drag leave if needed
  };

  const handleDrop = (e) => {
    setOtherTile(e.target);
  };

  const handleDragEnd = () => {
    if (currTile.src.includes('blank')) {
      return;
    }

    const currImg = currTile.src;
    const otherImg = otherTile.src;

    currTile.src = otherImg;
    otherTile.src = currImg;

    setTurns(prev => prev + 1);
  };

  return (
    
    <div className="font-sans text-center">
      <br></br>
      <h2 className="text-2xl text-teal-fff font-bold">Quebra-Cabeça</h2>
      <div className="mt-4">
        <Board
          tiles={boardTiles}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onDragEnd={handleDragEnd}
        />
        <h2 className="text-xl font-bold my-4">
          Jogadas: <span>{turns}</span>
        </h2>
        <Pieces
          pieces={pieces}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onDragEnd={handleDragEnd}
        />
      </div>
    </div>
  );
};

export default PuzzleHard