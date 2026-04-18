import React, { useState } from 'react';
import Animal from './Animal';
import Search from './Search';

function AnimalList({ pets, onDeletePet, onUpdatePet }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");

  const displayedPets = pets.filter(pet => {
    const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "All" || pet.category === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div style={{ padding: "50px" }}>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      <div style={{ margin: "20px 0" }}>
        <button className="button-primary" onClick={() => setFilterType("All")} style={{marginRight: '5px'}}>All</button>
        <button className="button-primary" onClick={() => setFilterType("Dog")} style={{marginRight: '5px'}}>Dogs 🐶</button>
        <button className="button-primary" onClick={() => setFilterType("Cat")}>Cats 🐱</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {displayedPets.map(pet => (
          <Animal 
            key={pet.id} 
            pet={pet} 
            onDeletePet={onDeletePet} 
            onUpdatePet={onUpdatePet} 
          />
        ))}
      </div>
    </div>
  );
}

export default AnimalList;