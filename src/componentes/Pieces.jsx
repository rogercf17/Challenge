import React from 'react';
import Tile from './Tile';

const Pieces = ({ pieces, onDragStart, onDragOver, onDragEnter, onDragLeave, onDrop, onDragEnd }) => {
  return (
    <div className="w-[auto] max-h-[auto] ml-40 mr-40 mx-auto flex flex-wrap">
      {pieces.map((piece, index) => (
        <Tile
          key={index}
          src={piece}
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

export default Pieces;