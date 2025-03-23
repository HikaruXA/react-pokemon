import { useState } from "react";
import { pokemonAPI } from "../api";

const usePokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPokemon = async (pokemonName) => {
    if (!pokemonName) {
      setError("Please enter a Pokémon name.");
      return;
    }

    setLoading(true);
    setError("");

    const data = await pokemonAPI.getPokemon(pokemonName.toLowerCase());

    if (data.error) {
      setError(data.error);
      setPokemon(null);
    } else {
      setPokemon(data);
    }

    setLoading(false);
  };

  return { pokemon, loading, error, fetchPokemon };
};

export default usePokemon;
