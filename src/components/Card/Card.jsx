import React, { useState } from 'react';
import './Card.css';

const Card = ({ pokemon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h1>{pokemon.name}</h1>
      {pokemon.sprites && pokemon.sprites.front_default && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
      <div className={`type ${isHovered ? 'hovered' : ''}`}>
        <p>Tipo: {pokemon.types.map((type) => type.name.toUpperCase()).join(' | ')}</p>
      </div>
    </div>
  );
};

export default Card;
