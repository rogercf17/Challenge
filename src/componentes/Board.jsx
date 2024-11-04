import React from 'react';
import Tile from './Tile';

const Board = ({ tiles, onDragStart, onDragOver, onDragEnter, onDragLeave, onDrop, onDragEnd }) => {
  return (
    <div className="w-[600px] h-[600px]  mx-auto flex flex-wrap">
      {tiles.map((tile, index) => (
        <Tile
          key={index}
          src={tile}
          size="large"
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          onDragEnd={onDragEnd}
        />
      ))}
    </div>
  );
};

export default Board;