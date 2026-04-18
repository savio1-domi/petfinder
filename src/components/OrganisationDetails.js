import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function OrganisationDetails() {
  const [org, setOrg] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/organizations/${id}`)
      .then(r => r.json())
      .then(data => setOrg(data));
  }, [id]);

  if (!org) return <h2>Loading Organization...</h2>;

  return (
    <div style={{ padding: "50px", maxWidth: "800px", margin: "0 auto" }}>
      <Link to="/organizationList">← Back to Contacts</Link>
      <h1 style={{ color: "#545268", marginTop: "20px" }}>{org.name}</h1>
      <div style={{ background: "#f1e6f2", padding: "30px", borderRadius: "15px" }}>
        <p><strong>Location:</strong> {org.location || "Nairobi, Kenya"}</p>
        <p><strong>Email:</strong> {org.email}</p>
        <p><strong>Phone:</strong> {org.phone || "+254 700 000 000"}</p>
        <hr />
        <h3>Our Mission</h3>
        <p>{org.mission || "Providing a safe haven for every animal in need."}</p>
      </div>
    </div>
  );
}

export default OrganisationDetails;