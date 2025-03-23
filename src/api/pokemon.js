import axiosInstance from "./axiosInstance";

export const getPokemon = async (pokemonName) => {
  try {
    const response = await axiosInstance.get(`pokemon/${pokemonName}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      return { error: "Pokémon not found!" }; // Return error message
    }
    console.error("API Error:", error.response?.data?.message || error.message);
    return { error: "Something went wrong!" };
  }
};
