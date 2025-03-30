import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";

export default function WorkInProgress({ featureName = "This feature" }) {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      color: "white",
      zIndex: 50,
    }}>
      <motion.div
        style={{
          backgroundColor: "#1a1a1a",
          padding: "24px",
          borderRadius: "16px",
          boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)",
          textAlign: "center",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <FaTools style={{ fontSize: "48px", color: "yellow", marginBottom: "16px", animation: "spin 2s linear infinite" }} />
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}>{featureName} is Under Development</h2>
        <p style={{ color: "#ccc", marginBottom: "16px" }}>We're working hard to bring this feature to life. Stay tuned!</p>
        <button
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "8px 16px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </motion.div>
    </div>
  );
}