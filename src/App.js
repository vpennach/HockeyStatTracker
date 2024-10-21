
import React from 'react';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import DataPage from './pages/DataPage';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/data" element={<DataPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
    </>
  )
}

export default App;

