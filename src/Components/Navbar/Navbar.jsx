import React, { useState } from "react";
import "./navbar.css";
import { NavLink} from "react-router-dom";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("home");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <section className="navbarSection">
      <header className="header flex">
        <div className="logoDiv">
          <div className="logo flex">
            <br />
            <h1 className="title-logo">Ecco</h1>
          </div>
        </div>

        <div className="navbarDiv">
          <ul className="navbarUl">
            <li className="navItem">
              <NavLink
                to="/ "
                className={activeTab === "home" ? "active" : ""}
                onClick={() => handleClick("home")}
                id="menu-link"
              >
                Home
              </NavLink>
              <NavLink
                className={activeTab === "contact-us" ? "active" : ""}
                onClick={() => handleClick("contact-us")}
                to="/contact-us"
                id="menu-link"
              >
                Contact Us
              </NavLink>
              <NavLink
                className={
                  activeTab === "suggested-destination" ? "active" : ""
                }
                onClick={() => handleClick("suggested-destination")}
                to="/suggested-destinations"
                id="menu-link"
              >
                Suggested Destinations
              </NavLink>
              <NavLink
                className={activeTab === "login" ? "active" : ""}
                onClick={() => handleClick("login")}
                to="/login"
                id="menu-link"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </section>
  );
}
