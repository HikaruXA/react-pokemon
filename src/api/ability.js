import axiosInstance from "./axiosInstance";

export const getAbility = async (abilityName) => {
  try {
    const response = await axiosInstance.get(`ability/${abilityName}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      return { error: "Ability not found!" };
    }
    console.error("API Error:", error.response?.data?.message || error.message);
    return null;
  }
};
