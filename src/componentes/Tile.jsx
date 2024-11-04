import React from 'react';

const Tile = ({ 
  src, 
  onDragStart, 
  onDragOver, 
  onDragEnter, 
  onDragLeave, 
  onDrop, 
  onDragEnd,
  size = "large" // Novo prop para controlar o tamanho
}) => {
  // Definindo classes baseadas no tamanho
  const sizeClasses = {
    large: "w-[120px] h-[120px]", // Para o puzzle fácil (5x5)
    small: "w-[80px] h-[80px]"  // Para o puzzle difícil (7x19)
  };

  return (
    <img
      src={src}
      className={`${sizeClasses[size]} border-[0.5px] border-light-blue-300`}
      draggable="true"
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onDragEnd={onDragEnd}
    />
  );
};

export default Tile;