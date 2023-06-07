import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      {/* Navbar component */}
      <nav className="NAVBAR">
        {/* Container for navigation links */}
        <div className="navbar-links">
          {/* Link to homepage */}
          <Link to="/">
            {/* Logo image */}
            <img className="nav-logo"
              alt="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvSfXnJRJUDoj9EBXVIuNz9uVggMPT2pdOcg&usqp=CAU"

            />
          </Link>
          {/* Link to animal list page */}
          <Link className="img-nav" to="/animalList">
            HAVE ME
          </Link>
          <Link className="img-nav" to='/AddPet'>
            Add Pet
          </Link>
          {/* Link to organization list page */}
          <Link className="img-nav" to="/organizationList">
            <span>CONTACTS </span>
          </Link>
          {/* Link to sign up page */}
          <Link className="img-nav" to="/login">
            SIGN UP
          </Link>

        </div>
      </nav>
    </>
  );
}

export default Navbar;