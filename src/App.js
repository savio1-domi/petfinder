import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import AnimalList from './components/AnimalList';
import AnimalDetails from './components/AnimalDetails';
import AddPet from './components/AddPet/AddPet';
import OrganizationList from './components/OrganizationList';
import OrganisationDetails from './components/OrganisationDetails';
import Login from './Login';
import Register from './Register';
import './Theme.css'; // Make sure you created this!

function App() {
  const [pets, setPets] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch("http://localhost:9292/pets")
      .then(res => {
        if (!res.ok) throw new Error("Server Is down"); return res.json() })
      .then(data => setPets(data))
      .catch(err => {
        console.error("Fetch failed:", err);
      });
  }, []);

  const handleAddPet = (newPet) => setPets([...pets, newPet]);
  const handleDeletePet = (id) => setPets(pets.filter(pet => pet.id !== id));
  
  const handleUpdatePet = (updatedPet) => {
    const updatedPets = pets.map(p => p.id === updatedPet.id ? updatedPet : p);
    setPets(updatedPets);
  };

  return (
    <div className={darkMode ? "app dark-theme" : "app"}>
      <Navbar />
      <div style={{ textAlign: 'right', padding: '10px' }}>
         <button className="button-primary" onClick={() => setDarkMode(!darkMode)}>
           {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
         </button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animalList" element={
          <AnimalList pets={pets} onDeletePet={handleDeletePet} onUpdatePet={handleUpdatePet} />
        } />
        <Route path="/animalList/:id" element={<AnimalDetails />} />
        <Route path="/AddPet" element={<AddPet onAddPet={handleAddPet} />} />
        <Route path="/organizationList" element={<OrganizationList />} />
        <Route path="/organizationList/:id" element={<OrganisationDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;