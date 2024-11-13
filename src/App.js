
import React from 'react';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Route, Routes, Navigate } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
    </>
  )
}

export default App;

