import { useState } from "react";
import { abilityAPI } from "../api";

const useAbility = () => {
  const [ability, setAbility] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchAbility = async (abilityName) => {
    if (!abilityName) {
      setError("Please enter an ability name.");
      return;
    }

    setLoading(true);
    setError("");

    const data = await abilityAPI.getAbility(abilityName.toLowerCase());

    if (data.error) {
      setError(data.error);
      setAbility(null);
    } else {
      setAbility(data);
    }

    setLoading(false);
  };

  return { ability, loading, error, fetchAbility };
};

export default useAbility;
