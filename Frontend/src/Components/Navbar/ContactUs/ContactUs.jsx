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
