// PokemonModal.jsx
import React from 'react';

const PokemonModal = ({ pokemon, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <h1> <span>|</span> {pokemon.name}</h1>
          {pokemon.sprites && pokemon.sprites.front_default && (
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          )}
          <div className="modal-type">
          <p>| Tipo: {pokemon.types.map((type) => type.name.toUpperCase()).join(' | ')}
           <br></br>| Habilidades: {pokemon.abilities.map((type) => type.name.toUpperCase()).join(' | ')}
           <br></br>| Evoluções: 
            </p>
          
          </div>
          <button className="close-button" onClick={onClose}>Fechar</button>
          <label> Desenvolvido por VPDeveloper - Todos os direitos reservados.</label>
        </div>
      </div>
    </div>
    
  );
};

export default PokemonModal;
