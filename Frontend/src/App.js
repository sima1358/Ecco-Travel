import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import ContactUs from "./Components/Navbar/ContactUs/ContactUs";
import SuggestedDestinations from "./Components/Navbar/SuggestedDestination/SuggestedDestinations";
import Login from "./Components/Navbar/Login/Login";
import { Routes, Route } from "react-router-dom";
 
 
function App() {
  return (
    <>
      <Navbar />

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path="/suggested-destinations"
            element={<SuggestedDestinations />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
