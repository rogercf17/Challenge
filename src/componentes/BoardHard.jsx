import React from 'react';
import Tile from './Tile';

const BoardHard = ({ tiles, onDragStart, onDragOver, onDragEnter, onDragLeave, onDrop, onDragEnd }) => {
  return (
    <div className="w-[1580px] h-[550px]  mx-auto flex flex-wrap justify-center">
      {tiles.map((tile, index) => (
        <Tile
          key={index}
          src={tile}
          size="small"
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

export default BoardHard;
