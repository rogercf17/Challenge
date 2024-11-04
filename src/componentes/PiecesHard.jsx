import React from 'react';
import Tile from './Tile';

const PiecesHard = ({ pieces, onDragStart, onDragOver, onDragEnter, onDragLeave, onDrop, onDragEnd }) => {
  return (
    <div className="w-[auto] max-h-[550px] ml-40 mr-40 mx-auto flex flex-wrap overflow-y-auto">
      {pieces.map((piece, index) => (
        <Tile
          key={index}
          src={piece}
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

export default PiecesHard;