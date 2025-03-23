import { useState } from "react";
import { speciesAPI } from "../api";

const useSpecies = () => {
  const [species, setSpecies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchSpecies = async (speciesName) => {
    if (!speciesName) {
      setError("Please enter a species name.");
      return;
    }

    setLoading(true);
    setError("");

    const data = await speciesAPI.getSpecies(speciesName.toLowerCase());

    if (data.error) {
      setError(data.error);
      setSpecies(null);
    } else {
      setSpecies(data);
    }

    setLoading(false);
  };

  return { species, loading, error, fetchSpecies };
};

export default useSpecies;
