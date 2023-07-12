import React, { useState } from "react";
import ocean from "../../Video/ocean.mp4";
import "./home.css";
import City from "./City/City";
import data from "../../data";
import Result from "../Result/Result";

export default function Home() {
  // ==========> Destination <===========
  const [destinationCity, setDestinationCity] = useState("");

  // ==========> Passenger <===========
  const [passengers, setPassengers] = useState("");

  // ==========> Date <===========
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [numDays, setNumDays] = useState("");

  // ==========> Budget <===========
  const [budget, setBudget] = useState("");

  // ==========> Hotel <===========
  const [hotels, setHotels] = useState("");

  const calculateDays = (departureDate, arrivalDate) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const departure = new Date(departureDate);
    const arrival = new Date(arrivalDate);
    const diffDays = Math.round(Math.abs((departure - arrival) / oneDay));

    return diffDays;
  };

  const handleCalculate = () => {
    const days = calculateDays(departureDate, arrivalDate);
    setNumDays(days);
  };

  // ==========> find Destination <===========

  const searchDestination = () => {
    // destination
    const destination = data.destinations.find(
      (dest) => dest.name.toLowerCase() === destinationCity.toLowerCase()
    );
    if (destination == null) {
      alert("No Destination Found!");

      return;
    }

    // hotels
    const hotelsFound = destination.hotels.filter(
      (hotel) => hotel.price <= budget / numDays
    );

    setHotels(hotelsFound);
  };

  //  arrival date should be bigger than departure date
  const handleArrivalDateChange = (event) => {
    const selectedDate = event.target.value;
    if (new Date(selectedDate) >= new Date(departureDate)) {
      setArrivalDate(selectedDate);
    } else {
      alert("Date to cannot be earlier than date from.");
    }
  };

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={ocean} muted autoPlay loop={"true"} type="ocean/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <div className="home-page">
            <span className="smallText">Just Select Your Package</span>

            {/* ===== Enter Date ============ */}
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="date-table">
                <div className="departure-date-class">
                  <label htmlFor="departure-date" className="label-date">
                    Departure date:{" "}
                  </label>

                  <input
                    type="date"
                    id="departure-date"
                    min={new Date().toISOString().split("T")[0]}
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                  />
                </div>

                <div className="arrival-date-class">
                  <label htmlFor="arrival-date" className="label-date">
                    Arrival date:
                  </label>

                  <input
                    type="date"
                    id="arrival-date"
                    value={arrivalDate}
                    onChange={handleArrivalDateChange}
                  />
                </div>
              </div>
              <br />
              <div>
                <button onClick={handleCalculate} className="btn-days">
                  Press to see reserved days
                </button>

                {numDays && <p>You selected {numDays} days</p>}
              </div>
            </form>

            {/* =====City======================== */}

            <City
              destinationCity={destinationCity}
              setDestinationCity={setDestinationCity}
            />

            {/* =====passengers======================== */}

            <div className="cardDiv">
              <div className="passengersInput">
                <label>
                  Number of the Passengers:
                  <input
                    type="number"
                    name="passengers"
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    className="input-passengers"
                  ></input>
                </label>
              </div>

              {/* ===== Budget ============ */}

              <label>
                Your Budget:
                <input
                  type="number"
                  name="budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="input-budget"
                />
              </label>
            </div>
            <div className="btnSearch">
              <button onClick={searchDestination} type="button" className="btn">
                Search
              </button>
            </div>

            <Result hotels={hotels} />
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}
