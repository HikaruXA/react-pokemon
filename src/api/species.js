import axiosInstance from "./axiosInstance";

export const getSpecies = async (speciesName) => {
  try {
    const response = await axiosInstance.get(`pokemon-species/${speciesName}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      return { error: "Species not found!" };
    }
    console.error("API Error:", error.response?.data?.message || error.message);
    return null;
  }
};
