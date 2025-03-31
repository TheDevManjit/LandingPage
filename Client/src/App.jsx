import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Popup from "./components/Popup";
import Footer from "./components/Footer";
import CtaSection from "./components/CtaSection";
import Loader from "./components/Loder";
import { useState, useEffect } from "react";
import Home from "./Pages/Home";
import WorkInProgress from "./components/WorkInProcess";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false); // Controls fade-in effect

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setFadeIn(true); // Start fade-in effect after loader disappears
      }, 100); // Small delay for a smooth transition
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div
          className={`transition-opacity duration-1000 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          <Router>
            <NavBar />
            <Popup />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/learn-more"
                element={<WorkInProgress featureName="Learn More Page" />}
              />
              <Route path="*" element={<Home />} /> {/* Handles unmatched paths */}
            </Routes>

            <Footer />
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
