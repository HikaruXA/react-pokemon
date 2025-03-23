import React, { useState } from "react";
import useSpecies from "../hooks/useSpecies";

const Species = () => {
  const [speciesName, setSpeciesName] = useState("");
  const { species, loading, error, fetchSpecies } = useSpecies();

  return (
    <div>
      <h1>Species Search</h1>
      <input
        type="text"
        value={speciesName}
        onChange={(e) => setSpeciesName(e.target.value)}
        placeholder="Enter Species Name"
      />
      <button onClick={() => fetchSpecies(speciesName)}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <h2>{species?.name?.toUpperCase() || "N/A"}</h2>
        <p>
          <strong>Generation:</strong> {species?.generation?.name || "N/A"}
        </p>
        <p>
          <strong>Color:</strong> {species?.color?.name || "N/A"}
        </p>
        <p>
          <strong>Habitat:</strong> {species?.habitat?.name || "N/A"}
        </p>
        <p>
          <strong>Shape:</strong> {species?.shape?.name || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default Species;
