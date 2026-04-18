import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logging in as ${email}`);
  };

  return (
    <div style={{ padding: '100px', textAlign: 'center' }}>
      <h2>Sign Up / Login</h2>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto', gap: '10px' }}>
        <input 
          type="email" 
          placeholder="Email" 
          onChange={(e) => setEmail(e.target.value)} 
          style={{ padding: '10px' }}
        />
        <input type="password" placeholder="Password" style={{ padding: '10px' }} />
        <button type="submit" className="button" style={{ background: '#545268', color: 'white', padding: '10px', border: 'none' }}>
          Enter Petflix
        </button>
      </form>
    </div>
  );
}

export default Login;