import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import InspiringWomen from "./components/Section/InspiringWomen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/inspiring-women" element={<InspiringWomen />} />
      </Routes>
    </Router>
  );
}

export default App;
