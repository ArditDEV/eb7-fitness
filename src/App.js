import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Ofertat from "./components/Ofertat";
import Info from "./components/Info";
import Kontakt from "./components/Kontakt";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ofertat" element={<Ofertat />} />
          <Route path="/info" element={<Info />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
