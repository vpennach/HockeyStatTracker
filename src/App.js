
import React from 'react';
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import { Route, Routes } from "react-router-dom"
import AboutPage from './pages/AboutPage';
import DataPage from './pages/DataPage'

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/data" element={<DataPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App;

