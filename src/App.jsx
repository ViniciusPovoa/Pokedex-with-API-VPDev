import React, { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import './App.css';
import { Link } from "react-router-dom";

function App() {
  const [itens, setItens] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const getApiData = async () => {
      const endpoints = [];
      try {
        for (var i = 1; i <= 96; i++) {
          endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
        }
  
        const res = await Promise.all(endpoints.map((endpoint) => fetch(endpoint)));
        const data = await Promise.all(res.map(async (r) => r.json()));
        const modifiedRes = data.map((pokemon) => ({
          ...pokemon,
          name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
        }));
  
        const typesPromises = modifiedRes.map(async (pokemon) => {
          const response = await fetch(pokemon.types[0].type.url);
          const typeData = await response.json();
          return typeData;
        });
  
        const types = await Promise.all(typesPromises);
  
        // Combinar os tipos com os dados do Pokémon
        const pokemonWithTypes = modifiedRes.map((pokemon, index) => ({
          ...pokemon,
          types: [types[index]],
        }));
  
        setItens(pokemonWithTypes);
      } catch (error) {
        console.log(error);
      }
    }
  
    getApiData();
  }, []);
  

  return (
    <div className="App">
      <div id="divBusca">
        <input 
          type="text" id="txtBusca"
          placeholder="Pesquisar Pokémon..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="cards-list">
        {itens
          .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((item, index) => (
            <Card key={index} pokemon={item} types={item.types} />
          ))}
      </div>
    </div>
  );
}

export default App;
