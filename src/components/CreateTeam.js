// src/components/CreateTeam.js
import React, { useState } from "react";
import "../styles/CreateTeam.css"; // Import CSS for styling

const initialPlayers = [
  { position: "LW1" }, { position: "C1" }, { position: "RW1" }, { position: "LD1" }, { position: "RD1" },
  { position: "LW2" }, { position: "C2" }, { position: "RW2" }, { position: "LD2" }, { position: "RD2" },
  { position: "LW3" }, { position: "C3" }, { position: "RW3" }, { position: "LD3" }, { position: "RD3" },
  { position: "LW4" }, { position: "C4" }, { position: "RW4" }, { position: "G1" }, { position: "G2" }
];

const CreateTeam = () => {
  const [players, setPlayers] = useState(initialPlayers);

  const handleInputChange = (index, field, value) => {
    const updatedPlayers = [...players];
    updatedPlayers[index][field] = value;
    setPlayers(updatedPlayers);
  };

  return (
    <div className="create-team-container">
      <h2>Create Your Team</h2>
      <div className="team-grid">
        {players.map((player, index) => (
          <div key={index} className={`player-box ${index % 5 === 3 ? "defense-space" : ""}`}>
            <h4>{player.position}</h4>
            <input
              type="text"
              placeholder="First Name"
              value={player.firstName || ""}
              onChange={(e) => handleInputChange(index, "firstName", e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={player.lastName || ""}
              onChange={(e) => handleInputChange(index, "lastName", e.target.value)}
            />
            <input
              type="number"
              placeholder="Number"
              value={player.number || ""}
              onChange={(e) => handleInputChange(index, "number", e.target.value)}
            />
          </div>
        ))}
      </div>
      <button className="save-team-btn">Save Team</button>
    </div>
  );
};

export default CreateTeam;
