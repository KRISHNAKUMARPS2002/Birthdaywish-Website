// src/components/MessagePage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MessagePage() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // You can modify this text to add your own personal message
  const personalMessage = `Dear Vaiga,


This little site is my way of saying, you were and always will
be special to me.

I can't comeback and keep hurting u understand u deserve better and god will give u one, old kunji alla nee 18 ayi so be more mature remember the things i said. Be success full in life. Sorry for hurting u happy ayi irikka vaiga.

I hope your birthday is as beautiful as your smile. 🌸
Wishing you joy, peace, and all the love in the world.

– Krishna 💫`;

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(to bottom, #fff0f6, #fff)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Dancing Script', cursive",
        padding: "20px",
        gap: "20px",
      }}
    >
      {/* Letter/Envelope Component */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          width: "90%",
          maxWidth: "450px", // Increased from 300px
          height: open ? "500px" : "200px", // Increased heights
          background: "#fff",
          border: "2px solid #e91e63",
          borderRadius: "10px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
          transition: "height 0.5s ease",
          position: "relative",
          cursor: "pointer",
          overflow: "hidden",
        }}
      >
        {/* Envelope flap (closed) */}
        {!open && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(to top, #f48fb1, #ec407a)",
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "1.5rem", // Slightly larger
              fontWeight: "bold",
            }}
          >
            💌 Tap to open
          </div>
        )}

        {/* Letter content (open) */}
        {open && (
          <div
            style={{
              padding: "25px",
              textAlign: "center",
              opacity: open ? 1 : 0,
              transition: "opacity 0.5s ease",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              overflowY: "auto",
            }}
          >
            <div>
              <h1 style={{ color: "#e91e63", fontSize: "2rem" }}>
                A Final Message 💖
              </h1>
              <p
                style={{
                  marginTop: "15px",
                  fontSize: "1.1rem",
                  color: "#444",
                  whiteSpace: "pre-line", // Preserves line breaks in the message
                }}
              >
                {personalMessage}
              </p>
            </div>

            <div style={{ marginTop: "20px" }}>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // prevent reopen
                  setOpen(false);
                }}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#e91e63",
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Nickname Button - Now outside the letter */}
      <button
        onClick={() => navigate("/nickname")}
        style={{
          padding: "12px 25px",
          background: "#e91e63",
          color: "#fff",
          border: "none",
          borderRadius: "25px",
          fontSize: "1.1rem",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          fontFamily: "'Dancing Script', cursive",
          fontWeight: "bold",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          marginTop: "15px",
          // Adding hover effect inline
          ":hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
          },
        }}
      >
        💞 See My Nickname for You
      </button>

      {/* Google Font: Dancing Script */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&display=swap');

          /* Hover effect for button since inline :hover doesn't work */
          button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(0,0,0,0.3);
          }

          @media (max-width: 500px) {
            h1 {
              font-size: 1.6rem !important;
            }
            p {
              font-size: 1rem !important;
            }
            button {
              font-size: 1rem !important;
              padding: 10px 20px !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default MessagePage;
