import React from "react";
import "./Home.css";

// Home component that returns a div with container and text class
function Home() {
  return (
    <div className="section-a">
      <div className="container">
        {/* Image component */}
        <div className="image-kom">
          <img src="https://www.shutterstock.com/image-photo/little-dog-owner-spend-day-park-511107457" alt="img" />
        </div>

        <div className="text">
          {/* Emojis */}
          👩🏼‍🦰 🧑🏼‍🦰
          {/* Header component */}
          <h1 className="mega-font">
            Hello
            <span> Pet Lovers</span>
          </h1>
          {/* Paragraph component */}
          <p style={{ fontSize: "30px" }}>
            An online platform to march animals who need new homes.
          </p>

          {/* Empty paragraph component */}
          <p className="number"></p>
          {/* Horizontal line component */}
          <hr width="50%" />

          {/* Column grid component */}
          <div className="column-grid">
            <div className="column-1">
              {/* Column component */}
              <h3>Dogs</h3>
              <p>Domestic Animals</p>
            </div>
            <div className="column-2">
              {/* Column component */}
              <h3>Cats</h3>
              <p>Tamed Animals</p>
            </div>
            <div className="column-3">
              {/* Column component */}
              <h3>Family Friendly</h3>
              <p>kids safe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;