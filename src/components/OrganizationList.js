import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function OrganizationList() {
  const [organizations] = useState([
    { id: 1, name: "Happy Tails Shelter", location: "Nairobi", email: "info@happytails.ke" },
    { id: 2, name: "KSPCA", location: "Karen", email: "help@kspca.or.ke" }
  ]);

  return (
    <div style={{ padding: "50px" }}>
      <h1 style={{ textAlign: "center", color: "#545268" }}>Our Partners</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        {organizations.map(org => (
          <div key={org.id} style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
            <h2>{org.name}</h2>
            <p>{org.location}</p>
            <Link to={`/organizationList/${org.id}`} className="button">Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrganizationList;