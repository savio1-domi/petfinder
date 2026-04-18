import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="section-a">
      <div className="container">
        <div className="image-container">
          <img 
            src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=1000" 
            alt="Dog and owner in a park" 
          />
        </div>

        <div className="text">
          <span role="img" aria-label="owners" style={{ fontSize: "40px" }}>
            👩🏼‍🦰 🧑🏼‍🦰
          </span>
          
          <h1 className="mega-font">
            Hello
            <span> Pet Lovers</span>
          </h1>

          <p style={{ fontSize: "30px" }}>
            An online platform to match animals who need new homes.
          </p>

          <hr style={{ width: "50%", margin: "20px auto" }} />

          <div className="column-grid">
            <div className="column-1">
              <h3>Dogs</h3>
              <p>Domestic Animals</p>
            </div>
            <div className="column-2">
              <h3>Cats</h3>
              <p>Tamed Animals</p>
            </div>
            <div className="column-3">
              <h3>Family Friendly</h3>
              <p>Kids safe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;