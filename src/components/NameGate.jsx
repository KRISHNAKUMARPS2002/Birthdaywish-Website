// src/components/NameGate.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import "./FloatingHearts.css"; // ensure this file contains keyframes for 'float' animation

function NameGate() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const normalizedInput = name.toLowerCase().trim().replace(/\s+/g, " ");
    if (normalizedInput === "vaiga krishna") {
      navigate("/nickname");
    } else {
      setError("Oops! Only the special one can enter 💔");
    }
  };

  const hearts = Array.from({ length: 20 }, (_, i) => {
    const left = Math.random() * 100;
    const delay = Math.random() * 5;
    const size = 15 + Math.random() * 15;
    const duration = 5 + Math.random() * 5;

    return (
      <FaHeart
        key={i}
        className="heart"
        style={{
          position: "absolute",
          bottom: "-50px",
          left: `${left}%`,
          fontSize: `${size}px`,
          animation: `float ${duration}s linear infinite`,
          animationDelay: `${delay}s`,
          color: "rgb(235, 21, 56)",
          opacity: 0.7,
          filter: "drop-shadow(0 0 5px rgba(255, 105, 180, 0.5))",
        }}
      />
    );
  });

  return (
    <div
      style={{
        textAlign: "center",
        backgroundImage: "url(/images/rose-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="heart-container">{hearts}</div>

      <div
        style={{
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          borderRadius: "12px",
          backdropFilter: "blur(10px)",
          width: "90%",
          maxWidth: "400px",
          margin: "0 auto",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
          zIndex: 1,
          animation: "pulseGlow 3s infinite",
        }}
      >
        <h2
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "32px",
            marginBottom: "20px",
            color: "#e60073",
          }}
        >
          Enter Your Full Name, Vaiguse 💖
        </h2>
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            value={name}
            placeholder="Vaiga Krishna"
            style={{
              outline: "none",
              padding: "12px",
              width: "90%",
              borderRadius: "8px",
              border: "2px solid #ccc",
              fontSize: "16px",
              transition: "border 0.3s",
            }}
            onFocus={(e) => (e.target.style.border = "2px solid #ff69b4")}
            onBlur={(e) => (e.target.style.border = "2px solid #ccc")}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            type="submit"
            style={{
              marginTop: "15px",
              padding: "12px 30px",
              backgroundColor: "#ff69b4",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "16px",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 4px 12px rgba(255, 105, 180, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "none";
            }}
          >
            Enter
          </button>
        </form>
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </div>
    </div>
  );
}

export default NameGate;
