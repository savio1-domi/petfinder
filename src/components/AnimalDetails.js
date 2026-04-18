import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function AnimalDetails() {
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); // Grabs the ID from the URL

  useEffect(() => {
    // Replace with your actual backend URL
    fetch(`http://localhost:9292/pets/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setPet(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error loading pet details:", err));
  }, [id]);

  if (loading) return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Loading friend details...</h2>;
  if (!pet) return <h2 style={{ textAlign: "center" }}>Pet not found!</h2>;

  return (
    <div className="details-container" style={detailsWrapper}>
      <Link to="/animalList" style={backLink}>← Back to all pets</Link>
      
      <div className="details-card" style={cardLayout}>
        <div className="details-image-section">
          <img src={pet.image_url} alt={pet.name} style={detailImg} />
        </div>

        <div className="details-info-section" style={infoSection}>
          <h1 style={{ color: "#545268", fontSize: "3rem" }}>{pet.name}</h1>
          <h3 style={{ color: "#ff5230", textTransform: "uppercase" }}>{pet.breed}</h3>
          
          <div style={badgeContainer}>
            <span style={badge}>Age: {pet.age || "Unknown"}</span>
            <span style={badge}>Gender: {pet.gender || "Not specified"}</span>
          </div>

          <p style={descriptionText}>
            {pet.description || "This sweet pet is looking for a forever home. Contact us to learn more about their personality and needs!"}
          </p>

          <button style={adoptButton}>Inquire About Adoption</button>
        </div>
      </div>
    </div>
  );
}

// --- Styles ---
const detailsWrapper = {
  padding: "40px 10%",
  minHeight: "80vh",
  backgroundColor: "#fcfcfc"
};

const backLink = {
  textDecoration: "none",
  color: "#545268",
  fontWeight: "bold",
  marginBottom: "20px",
  display: "inline-block"
};

const cardLayout = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "40px",
  backgroundColor: "#fff",
  padding: "30px",
  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
};

const detailImg = {
  width: "100%",
  borderRadius: "15px",
  objectFit: "cover",
  maxHeight: "500px"
};

const infoSection = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
};

const badgeContainer = {
  display: "flex",
  gap: "10px",
  margin: "20px 0"
};

const badge = {
  backgroundColor: "#f1e6f2",
  padding: "5px 15px",
  borderRadius: "20px",
  fontSize: "14px",
  color: "#302821"
};

const descriptionText = {
  lineHeight: "1.6",
  color: "#555",
  fontSize: "1.1rem",
  marginBottom: "30px"
};

const adoptButton = {
  padding: "15px 30px",
  backgroundColor: "#ff5230",
  color: "white",
  border: "none",
  borderRadius: "10px",
  fontSize: "1.2rem",
  cursor: "pointer",
  fontWeight: "bold"
};

export default AnimalDetails;