// CardDetails.jsx
import React from 'react';

const CardDetails = ({ pokemon, onClose }) => {
  return (
    <div className="card-details">
      <button className="close-button" onClick={onClose}>Fechar</button>
      {/* Renderize as informações detalhadas do Pokémon aqui */}
    </div>
  );
};

export default CardDetails;
