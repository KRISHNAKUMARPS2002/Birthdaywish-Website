// src/components/CakePage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CakePage() {
  const [lit, setLit] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (!lit) setLit(true);
  };

  // Generate confetti pieces dynamically with inline styles
  const renderConfetti = () => {
    return Array.from({ length: 150 }).map((_, i) => {
      const size = Math.floor(Math.random() * 6 + 4); // 4-10px
      const color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 60%)`;
      const left = `${Math.random() * 100}%`;
      const duration = `${Math.random() * 2 + 3}s`;
      const delay = `${Math.random()}s`;
      const rotate = `${Math.floor(Math.random() * 360)}deg`;
      const borderRadius = Math.random() > 0.5 ? "50%" : "0%";

      return (
        <div
          key={i}
          className="confetti"
          style={{
            position: "absolute",
            top: "-10px",
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: color,
            opacity: 0.8,
            animation: `fall ${duration} linear ${delay} infinite`,
            transform: `rotate(${rotate})`,
            left,
            borderRadius,
            zIndex: 0,
          }}
        />
      );
    });
  };

  return (
    <div
      onClick={handleClick}
      style={{
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(to bottom, #ffe6f0, #fff)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
        padding: "20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <h1
        style={{ fontSize: "2.5rem", color: "deeppink", marginBottom: "20px" }}
      >
        {lit
          ? "🎉 Happy 18th Birthday Vaiga 🎉"
          : "Tap the cake to light the candles!"}
      </h1>

      <div
        style={{
          position: "relative",
          fontSize: lit ? "10rem" : "8rem",
          cursor: "pointer",
          transition: "0.3s",
          filter: lit ? "drop-shadow(0 0 20px orange)" : "none",
        }}
      >
        🎂
        {lit && (
          <>
            <div
              style={{
                position: "absolute",
                top: "10%",
                left: "30%",
                fontSize: "2rem",
              }}
            >
              🕯️
            </div>
            <div
              style={{
                position: "absolute",
                top: "10%",
                right: "30%",
                fontSize: "2rem",
              }}
            >
              🕯️
            </div>
            <div
              style={{
                position: "absolute",
                top: "5%",
                left: "45%",
                fontSize: "2rem",
              }}
            >
              🕯️
            </div>
          </>
        )}
      </div>

      {lit && (
        <>
          <h2
            style={{ marginTop: "20px", color: "crimson", fontSize: "1.8rem" }}
          >
            You’re officially an adult now — So kunji alla Nee.... 💖
          </h2>

          {/* Confetti falling glitter */}
          <div className="confetti-wrapper">{renderConfetti()}</div>

          <button
            onClick={() => navigate("/message")}
            style={{
              marginTop: "30px",
              padding: "12px 24px",
              fontSize: "1rem",
              borderRadius: "30px",
              border: "none",
              background: "deeppink",
              color: "#fff",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              transition: "0.3s",
            }}
          >
            💌 Click to see my final message
          </button>
        </>
      )}

      {/* Animation keyframes */}
      <style>
        {`
          @keyframes fall {
            0% {
              transform: translateY(0) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(120vh) rotate(360deg);
              opacity: 0;
            }

          }

          .confetti-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            overflow: hidden;
            z-index: 0;
          }

          @media (max-width: 600px) {
            h1 {
              font-size: 1.8rem !important;
            }
            h2 {
              font-size: 1.2rem !important;
            }
            div[style*="fontSize: 8rem"] {
              font-size: 6rem !important;
            }
            button {
              font-size: 0.9rem !important;
              padding: 10px 20px !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default CakePage;
