import React, { useState } from "react";
import usePokemon from "../hooks/usePokemon";

const Home = () => {
  const [pokemonName, setPokemonName] = useState("");
  const { pokemon, loading, error, fetchPokemon } = usePokemon();

  return (
    <div>
      <h1>Pokémon Search</h1>
      <input
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
        placeholder="Enter Pokémon Name"
      />
      <button onClick={() => fetchPokemon(pokemonName)}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {pokemon && !error && (
        <div>
          <h2>{pokemon.name.toUpperCase()}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>
            <strong>Type:</strong>{" "}
            {pokemon.types.map((t) => t.type.name).join(", ")}
          </p>
          <p>
            <strong>Abilities:</strong>{" "}
            {pokemon.abilities.map((a) => a.ability.name).join(", ")}
          </p>
          <p>
            <strong>Base Experience:</strong> {pokemon.base_experience}
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
