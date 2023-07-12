import React, { useState } from "react";
import "./contactUs.css";
import ocean from "../../../Video/ocean.mp4";
import { NavLink } from "react-router-dom";

export default function ContactUs() {
  const [emailFromInput, setEmailFromInput] = useState("");
  const [emailToInput, setEmailToInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const handleEmailFromChange = (e) => {
    setEmailFromInput(e.target.value);
  };

  const handleEmailToChange = (e) => {
    setEmailToInput(e.target.value);
  };

  const handleMessageInput = (e) => {
    setMessageInput(e.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();
  };

   
   return (
    <>
      <section className="home-social-media">
        <div className="overlay"></div>
        <video src={ocean} muted autoPlay loop type="ocean/mp4"></video>

        <div className="social-container">
          <div class="contact-box">
            <div class="row">
              <div class="col-box">
                {/* =================== */}
                {/* start email box */}
                <div className="input-email">
                  <NavLink className="social-navLink">Email</NavLink>
                  <div className="label">
                    <h3 className="h3">From</h3>
                    <input
                      type="email"
                      value={emailFromInput}
                      onChange={handleEmailFromChange}
                    />
                  </div>
                  <div className="label">
                    <h3 className="h3 to">To</h3>
                    <input
                      type="email"
                      value={emailToInput}
                      onChange={handleEmailToChange}
                    />
                  </div>

                  <h5>Please write your message here; we will answer ASAP.</h5>
                  <input
                    className="input-message-box"
                    type="text"
                    value={messageInput}
                    onChange={handleMessageInput}
                    placeholder="Please write your message here"
                  />
                  <button type="submit" onSubmit={handleSend}>
                    Send
                  </button>
                  <div className="phoneAndAdd">
                  <h5>Phone: +49 12345678</h5>
                  <h5>Address: Lohrem Str., 12, Dusseldorf 40123</h5>
                  </div>
                </div>
                {/* end of email box */}
                {/* ====================== */}
              </div>

              <div class="col-box">
                <div class="container">
                  {/* ====================== */}
                  {/* start of location */}
                  <div className="location">
                  <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2453.545725270924!2d6.787303326172635!3d51.21119990597487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8ca486fd4a5fb%3A0xb01f777f7219b222!2sGustav-Poensgen-Stra%C3%9Fe%2083%2C%2040215%20D%C3%BCsseldorf!5e0!3m2!1sen!2sde!4v1689061878923!5m2!1sen!2sde"
       id="map-container">Location</iframe>
                   </div>
                </div>
              </div>
              {/* ====================== */}
              {/* end of location */}

           
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
