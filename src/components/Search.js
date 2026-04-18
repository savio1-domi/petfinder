import React from 'react';

function Search({ searchTerm, onSearchChange }) {
  return (
    <div className="search-container" style={{ margin: "20px auto", maxWidth: "600px" }}>
      <input
        type="text"
        placeholder="Search for a pet by name..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{
          width: "100%",
          padding: "12px 20px",
          borderRadius: "25px",
          border: "1px solid #ddd",
          fontSize: "16px",
          outline: "none",
          boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
        }}
      />
    </div>
  );
}

export default Search;