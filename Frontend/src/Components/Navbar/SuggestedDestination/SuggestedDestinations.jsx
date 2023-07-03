import React from "react";
import suggestedData from "../SuggestedDestination/suggestedData.json";
import "./suggestedData.css";
import ocean from "../../../Video/ocean.mp4";
import { NavLink} from "react-router-dom";

export default function SuggestedDestinations() {
  return (
    <div>
      <section className="home-suggested-destination">
        <div className="overlay">
          <video src={ocean} muted autoPlay loop type="ocean/mp4"></video>

          <h1>Here we suggest some destinations</h1>

          <div className="suggested-container">
            <ul className="suggested-navlink">
              {suggestedData.map((suggestedData) => (
                <NavLink className="navlink-suggested" key={suggestedData.id}>
                  <h3>{suggestedData.name}</h3>
                  <img src="suggestedData.image" alt="{suggestedData.name}" />
                  <p>{suggestedData.price} Euro</p>
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
