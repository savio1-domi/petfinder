import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to POST to your backend /users or /register
    console.log("Registering:", formData);
    alert("Account created! Please login.");
    navigate("/login");
  };

  return (
    <div style={authContainer}>
      <div style={authCard}>
        <h2>Join the Family 🐾</h2>
        <form onSubmit={handleSubmit} style={formStyle}>
          <input name="username" placeholder="Username" onChange={handleChange} style={inputStyle} required />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} style={inputStyle} required />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} style={inputStyle} required />
          <button type="submit" style={btnStyle}>Register</button>
        </form>
        <p>Already have an account? <Link to="/login" style={{color: "#ff5230"}}>Login here</Link></p>
      </div>
    </div>
  );
}

// Reusable styles for Auth
const authContainer = { display: "flex", justifyContent: "center", alignItems: "center", height: "80vh", backgroundColor: "#fcfcfc" };
const authCard = { padding: "40px", background: "#fff", borderRadius: "20px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)", textAlign: "center", width: "100%", maxWidth: "400px" };
const formStyle = { display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" };
const inputStyle = { padding: "12px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "16px" };
const btnStyle = { padding: "12px", background: "#545268", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" };

export default Register;