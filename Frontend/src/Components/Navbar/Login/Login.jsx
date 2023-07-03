import React, { useState } from "react";
import "./login.css";
import ocean from "../../../Video/ocean.mp4";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  console.log();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <section className="home-login">
        <div className="overlay"></div>
        <video src={ocean} muted autoPlay loop type="ocean/mp4"></video>

        <div className="login-container">
          <label>
            Username:
            <input
              type={"text"}
              value={username}
              onChange={handleUsernameChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type={"password"}
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <br />

          <button type="submit" onSubmit={handleLogin}>
            Login
          </button>
        </div>
      </section>
    </form>
  );
}
