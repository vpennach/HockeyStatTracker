
import React from 'react';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from './pages/AboutPage';
import TeamBuilder from './pages/TeamBuilder';
import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team-builder" element={<TeamBuilder />} />
        </Routes>
    </>
  )
}

export default App;

