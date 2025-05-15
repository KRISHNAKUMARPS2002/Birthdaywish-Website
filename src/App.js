// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NameGate from "./components/NameGate";
import NicknamePage from "./components/NicknamePage";
import CakePage from "./components/CakePage";
import MessagePage from "./components/MessagePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NameGate />} />
        <Route path="/nickname" element={<NicknamePage />} />
        <Route path="/cake" element={<CakePage />} />
        <Route path="/message" element={<MessagePage />} />
      </Routes>
    </Router>
  );
}

export default App;
