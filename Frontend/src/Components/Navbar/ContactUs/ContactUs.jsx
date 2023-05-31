import React, { useState } from "react";
import "./contactUs.css";
import ocean from "../../../Video/ocean.mp4";
import { NavLink } from "react-router-dom";
 
export default function ContactUs() {
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  
  const handleEmailChange = (e) => {
    setEmailInput(e.preventDefault);
  };

  const handleMessageInput = (e) => {
    setMessageInput(e.preventDefault);
  };

      
 
 
  return (
    <>
      <section className="home-social-media">
        <div className="overlay"></div>
        <video src={ocean} muted autoPlay loop type="ocean/mp4"></video>

        <div className="social-container">
          <div class="container">
            <div class="row">
              <div class="col-sm">
                {/* email input */}
                <div className="input-email">
                  <NavLink className="social-navlink">Email</NavLink>
                  <h3>From</h3>
                  <input
                    type="text"
                    value={emailInput}
                    onChange={handleEmailChange}
                  />
                   <h3>To</h3>
                  <input
                    type="text"
                    value={emailInput}
                    onChange={handleEmailChange}
                  />
                  <h5>Please write your message here; we will answer ASAP</h5>
                  <input
                    className="input-message-box"
                    type="text"
                    value={messageInput}
                    onChange={handleMessageInput}
                    placeholder="Please write your message here"
                  />
                  <button type="submit">Send</button>
                </div>
              </div>

              <div class="col-sm">
                <div class="container">
                  {/* our location */}
                  <div className="location">
                    <NavLink className="social-navlink">Our Location</NavLink>
                  </div>
                </div>
              </div>
              <div class="col-sm">
                {/* whatsUp message */}
                <div className="whatsUp">
                  <NavLink className="social-navlink">
                    Direct WhatsUp Message
                  </NavLink>

                  <input
                    type="text"
                    value={emailInput}
                    onChange={handleEmailChange}
                  />

                  <h5>
                    Please write your whatUp message; the operator is available
                    24 hours 7 days
                  </h5>
                  <input
                    className="input-message-box"
                    type="text"
                    value={messageInput}
                    onChange={handleMessageInput}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
 