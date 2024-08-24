import React, { useState, useEffect } from 'react';

const Ejercicio5 = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Nombre del Pokémon que quieres buscar
    const pokemonName = 'pikachu';

    // Función para obtener los datos de la API
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        setPokemon(data);
        console.log("esta es la data",data)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // Llamar a la función de obtención de datos
    fetchPokemon();
  }, []); // El array vacío significa que este efecto se ejecuta una vez cuando el componente se monta

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {pokemon && (
        <div>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} /> {/* Imagen del Pokémon */}
          <p>Peso: {pokemon.weight}</p>
          <p>Altura: {pokemon.height}</p>
          <p>Tipo: {pokemon.types.map(type => type.type.name).join(', ')}</p> {/* Tipos del Pokémon */}
        </div>
      )}
    </div>
  );
};

export default Ejercicio5;
