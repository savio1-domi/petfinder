import React from 'react';
import { Link } from 'react-router-dom';

function Animal({ pet, onDeletePet, onUpdatePet }) {
  // Description was being extracted here but ignored below
  const { id, name, breed, image_url, description, isFavorite } = pet;

  const toggleFavorite = () => {
    fetch(`http://localhost:9292/pets/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isFavorite: !isFavorite })
    })
    .then(res => res.json())
    .then(data => onUpdatePet(data));
  };

  return (
    <div className="card" style={{ position: 'relative', textAlign: 'left' }}>
      <button 
        onClick={toggleFavorite} 
        style={heartBtnStyle}
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>
      
      <img src={image_url} alt={name} style={imgStyle} />
      
      <div style={{ padding: '15px' }}>
        <h3 style={{ margin: '0 0 5px 0' }}>{name}</h3>
        <p style={{ color: 'var(--accent-color)', fontWeight: 'bold', fontSize: '0.9rem', margin: '0 0 10px 0' }}>
          {breed}
        </p>
        
        {/* We are now using the 'description' variable! */}
        <p style={descriptionStyle}>
          {description || "No description available for this sweet friend."}
        </p>

        <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
          <Link to={`/animalList/${id}`} style={{ flex: 1 }}>
             <button className="button-primary" style={{ width: '100%' }}>Details</button>
          </Link>
          <button 
            onClick={() => onDeletePet(id)} 
            style={adoptBtnStyle}
          >
            Adopted
          </button>
        </div>
      </div>
    </div>
  );
}

// --- Internal Styles ---
const heartBtnStyle = { 
  position: 'absolute', 
  top: '10px', 
  right: '10px', 
  border: 'none', 
  background: 'rgba(255,255,255,0.7)', 
  borderRadius: '50%',
  width: '35px',
  height: '35px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '20px', 
  cursor: 'pointer',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
};

const imgStyle = { 
  width: '100%', 
  height: '200px', 
  objectFit: 'cover' 
};

const descriptionStyle = {
  fontSize: '0.85rem',
  color: '#666',
  height: '40px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  lineHeight: '1.4'
};

const adoptBtnStyle = {
  padding: '8px 12px',
  border: '1px solid var(--accent-color)',
  borderRadius: '8px',
  background: 'transparent',
  color: 'var(--accent-color)',
  cursor: 'pointer',
  fontWeight: 'bold'
};

export default Animal;