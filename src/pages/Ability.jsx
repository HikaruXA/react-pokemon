import React, { useState } from "react";
import useAbility from "../hooks/useAbility";

const Ability = () => {
  const [abilityName, setAbilityName] = useState("");
  const { ability, loading, error, fetchAbility } = useAbility();
  return (
    <div>
      <h1>Ability Search</h1>
      <input
        type="text"
        value={abilityName}
        onChange={(e) => setAbilityName(e.target.value)}
        placeholder="Enter Ability Name"
      />
      <button onClick={() => fetchAbility(abilityName)}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {ability && !error && (
        <div>
          <h2>{ability.name.toUpperCase()}</h2>
          <p>{ability.effect_entries[1].effect}</p>
        </div>
      )}
    </div>
  );
};

export default Ability;
