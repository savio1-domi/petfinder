import React from 'react';

function Breeds({ breeds, selectedBreed, onBreedSelect }) {
  return (
    <div className="breed-filter" style={{ textAlign: "center", marginBottom: "30px" }}>
      <button 
        onClick={() => onBreedSelect("All")}
        style={selectedBreed === "All" ? activeBtn : inactiveBtn}
      >
        All Breeds
      </button>
      {breeds.map(breed => (
        <button 
          key={breed} 
          onClick={() => onBreedSelect(breed)}
          style={selectedBreed === breed ? activeBtn : inactiveBtn}
        >
          {breed}
        </button>
      ))}
    </div>
  );
}

const baseBtn = {
  margin: "5px",
  padding: "8px 15px",
  borderRadius: "20px",
  cursor: "pointer",
  border: "1px solid #ff5230",
  transition: "0.3s"
};

const activeBtn = { ...baseBtn, background: "#ff5230", color: "white" };
const inactiveBtn = { ...baseBtn, background: "transparent", color: "#ff5230" };

export default Breeds;