// src/components/NicknamePage.jsx
import { useNavigate } from "react-router-dom";

function NicknamePage() {
  const navigate = useNavigate();

  const nicknames = [
    "Vaiguse.. 💐",
    "Vave... 😘",
    "Puchakutty.... 😽",
    "Kunji Penne.... 🥰",
    "Ente Vaiga... 🫠",
    "Sorry for the harsh words I said also..... 🥀",
  ];

  return (
    <div
      style={{
        backgroundImage: "url(/images/rose-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Segoe UI', sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          borderRadius: "20px",
          padding: "40px 30px",
          textAlign: "center",
          maxWidth: "600px",
          width: "100%",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            color: "deeppink",
            marginBottom: "30px",
          }}
        >
          Nicknames I Call You 💖
        </h1>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            marginBottom: "30px",
          }}
        >
          {nicknames.map((name, index) => (
            <li
              key={index}
              style={{
                marginBottom: "15px",
                fontSize: "1.5rem",
                color: "crimson",
                opacity: 0,
                animation: `fadeIn 0.5s ease ${index * 0.3}s forwards`,
              }}
            >
              {name}
            </li>
          ))}
        </ul>

        <button
          onClick={() => navigate("/cake")}
          style={{
            padding: "12px 28px",
            fontSize: "1.1rem",
            backgroundColor: "deeppink",
            color: "white",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "hotpink";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "deeppink";
            e.target.style.transform = "scale(1)";
          }}
        >
          Go to Cake 🎂
        </button>
      </div>

      {/* Inline keyframes animation */}
      <style>
        {`
          @keyframes fadeIn {
            to {
              opacity: 1;
              transform: translateY(0);
            }
            from {
              opacity: 0;
              transform: translateY(20px);
            }
          }

          @media (max-width: 600px) {
            h1 {
              font-size: 2rem !important;
            }

            li {
              font-size: 1.2rem !important;
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

export default NicknamePage;
