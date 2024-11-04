import React from 'react';
import { Link } from 'react-router-dom';

const PuzzlePage = () => {
  return (
    <div className="mt-40 flex-grow flex flex-col items-center ">
      <h1 className="text-3xl font-bold mb-8">Escolha o nível de dificuldade</h1>
      <div className="flex gap-8">
        <Link 
          to="/puzzle/easy" 
          className="px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-xl">
          Fácil
        </Link>
        <Link 
          to="/puzzle/hard" 
          className="px-8 py-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-xl">
          Desafiador
        </Link>
      </div>
    </div>
  );
};

export default PuzzlePage;