import React, { useState, useEffect } from 'react';
import './style.css';

const regions = [
  { id: 4, name: 'Hoenn' },
  { id: 2, name: 'Johto' },
  { id: 1, name: 'Kanto' },
];

const PokeDex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonByRegion = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokedex/${selectedRegion.id}/`);
        const data = await response.json();
        setPokemonList(data.pokemon_entries);
      } catch (error) {
        setError(`Error fetching ${selectedRegion.name} Pokémon: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonByRegion();
  }, [selectedRegion]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredPokemon = pokemonList.filter((pokemon) =>
    pokemon.pokemon_species.name.toLowerCase().includes(searchTerm)
  );

  const fetchPokemonDetails = async (pokemonName) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data = await response.json();
      setSelectedPokemon(data);
    } catch (error) {
      setError(`Error fetching Pokémon details: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setSelectedPokemon(null);
  };

  return (
    <div className="container">
      <h1>{selectedRegion.name} Region PokeDex</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {/* Pokémon Details Modal */}
      {selectedPokemon && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>&times;</button>
            <h2>{selectedPokemon.name.charAt(0).toUpperCase() + selectedPokemon.name.slice(1)}</h2>
            <div className="flex">
              <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} />
              <div>
                <p>Height: {selectedPokemon.height / 10} m</p>
                <p>Weight: {selectedPokemon.weight / 10} kg</p>
                <p>Types: {selectedPokemon.types.map((type) => type.type.name).join(', ')}</p>
                <p>Abilities: {selectedPokemon.abilities.map((ability) => ability.ability.name).join(', ')}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="input-group">
        <label htmlFor="region-select">Select Region:</label>
        <select
          id="region-select"
          value={selectedRegion.id}
          onChange={(e) => setSelectedRegion(regions.find((r) => r.id === Number(e.target.value)))}
          className="select"
        >
          {regions.map((region) => (
            <option key={region.id} value={region.id}>{region.name}</option>
          ))}
        </select>
      </div>

      <input
        type="text"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={handleSearch}
        className="input"
      />

      <div className="pokemon-grid">
        {filteredPokemon.map((pokemon) => (
          <div key={pokemon.entry_number} className="pokemon-card" onClick={() => fetchPokemonDetails(pokemon.pokemon_species.name)}>
            <h2>{pokemon.pokemon_species.name.charAt(0).toUpperCase() + pokemon.pokemon_species.name.slice(1)}</h2>
            <button className="button">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokeDex;
