import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddPet({ onAddPet }) {
  const [formData, setFormData] = useState({ 
    name: "", 
    breed: "", 
    image_url: "", 
    description: "",
    category: "Dog" 
  });
  
  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Name Validation
    if (formData.name.trim().length < 2) {
      setError("Name must be at least 2 characters long.");
      return;
    }
    
    // 2. Advanced URL Validation using Regex
    const urlPattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d%_.~+=-]*)?$','i'); // fragment locator

    if (!urlPattern.test(formData.image_url)) {
      setError("Please enter a valid image URL (e.g., https://images.com/dog.jpg).");
      return;
    }

    setError(""); // Clear errors if all checks pass

    // 3. Proceed with POST request
    fetch("http://localhost:9292/pets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
    .then(res => {
      if (!res.ok) throw new Error("Failed to save pet");
      return res.json();
    })
    .then(newPet => {
      onAddPet(newPet);
      navigate("/animalList");
    })
    .catch(err => setError("Server error. Please check if your backend is running."));
  };

  return (
    <div className="add-pet-container" style={{ padding: "50px", textAlign: "center" }}>
      <h2 style={{ color: "var(--primary-color)" }}>List a New Pet</h2>
      
      {/* Error Message Display */}
      {error && (
        <p style={{ 
          color: "white", 
          backgroundColor: "var(--accent-color)", 
          padding: "10px", 
          borderRadius: "5px",
          maxWidth: "400px",
          margin: "10px auto"
        }}>
          ⚠️ {error}
        </p>
      )}

      <form onSubmit={handleSubmit} style={formLayout}>
        <input 
          placeholder="Pet Name" 
          value={formData.name}
          onChange={e => setFormData({...formData, name: e.target.value})} 
          style={inputStyle}
          required
        />

        <select 
          value={formData.category}
          onChange={e => setFormData({...formData, category: e.target.value})}
          style={inputStyle}
        >
          <option value="Dog">Dog 🐶</option>
          <option value="Cat">Cat 🐱</option>
          <option value="Other">Other 🐾</option>
        </select>
        
        <input 
          placeholder="Breed (e.g. Golden Retriever)" 
          value={formData.breed}
          onChange={e => setFormData({...formData, breed: e.target.value})} 
          style={inputStyle}
          required
        />
        
        <input 
          placeholder="Image URL (http://...)" 
          value={formData.image_url}
          onChange={e => setFormData({...formData, image_url: e.target.value})} 
          style={inputStyle}
          required
        />

        <textarea 
          placeholder="Short Description" 
          value={formData.description}
          onChange={e => setFormData({...formData, description: e.target.value})} 
          style={{ ...inputStyle, height: "100px" }}
        />

        <button type="submit" className="button-primary">List Pet</button>
      </form>
    </div>
  );
}

// --- Component Styles ---
const formLayout = {
  display: "flex", 
  flexDirection: "column", 
  maxWidth: "400px", 
  margin: "0 auto", 
  gap: "15px"
};

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  fontSize: "16px",
  outlineColor: "var(--accent-color)",
  fontFamily: "inherit"
};

export default AddPet;