import React, { useState } from 'react';
import './Card.css';
import PokemonModal from './PokemonModal'; // Certifique-se do caminho correto

const Card = ({ pokemon }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="card" onClick={openModal}>
        <h1>{pokemon.name}</h1>
        {pokemon.sprites && pokemon.sprites.front_default && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
        <div className={`type`}>
          <p>Tipo: {pokemon.types.map((type) => type.name.toUpperCase()).join(' | ')}</p>
        </div>
      </div>
      {isModalOpen && <PokemonModal pokemon={pokemon} onClose={closeModal} />}
    </div>
  );
};

export default Card;
