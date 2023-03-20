import React from "react";
import "./contactUs.css";
import ocean from "../../../Video/ocean.mp4";
import { NavLink } from "react-router-dom";

export default function ContactUs() {
  return (
    <div>
      <section className="home-social-media">
        <div className="overlay"></div>
        <video src={ocean} muted autoPlay loop type="ocean/mp4"></video>

        <div className="social-container">
          <NavLink className="social-navlink">Instagram</NavLink>
          <NavLink className="social-navlink">Facebook</NavLink>
          <NavLink className="social-navlink">Tweeter</NavLink>
        </div>
      </section>
    </div>
  );
}
