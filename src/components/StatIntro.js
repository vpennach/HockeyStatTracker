// src/components/StatIntro.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/StatIntro.css';

const StatIntro = ({ onClose }) => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleCreateTeamClick = () => {
      navigate('/team-builder'); // Navigate to the TeamBuilder page
    };

  return (
    <div className="stat-intro-overlay">
      <div className="stat-intro-content">
        <h2>Welcome to Hockey Stat Tracker!</h2>
        <p>This application allows you to keep track of players stats live during a game.</p>
        <p>You will first be prompted with a screen to create a player.</p>
        <p>Simply just follow the directions to create a full 20 man roster (2 goalies).</p>
        <p>Click Create Team below to start!</p>
        <button onClick={handleCreateTeamClick}>Create Team!</button>
      </div>
    </div>
  );
};

export default StatIntro;
