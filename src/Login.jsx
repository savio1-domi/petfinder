import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Logic to verify credentials with backend
    console.log("Logging in:", { email, password });
    navigate("/"); // Redirect to home after login
  };

  return (
    <div style={authContainer}>
      <div style={authCard}>
        <h2>Welcome Back</h2>
        <form onSubmit={handleLogin} style={formStyle}>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} style={inputStyle} required />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} style={inputStyle} required />
          <button type="submit" style={{ ...btnStyle, background: "#ff5230" }}>Login</button>
        </form>
        <p style={{ marginTop: "15px" }}>
          New to Petflix? <Link to="/register" style={{color: "#545268"}}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

// Using the same style constants as above...
const authContainer = { display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" };
const authCard = { padding: "40px", background: "#fff", borderRadius: "20px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)", textAlign: "center", width: "100%", maxWidth: "400px" };
const formStyle = { display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" };
const inputStyle = { padding: "12px", borderRadius: "8px", border: "1px solid #ddd" };
const btnStyle = { padding: "12px", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" };

export default Login;