/* eslint-disable indent */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./page/Home";
import About from "./page/About";
import PrivacyPolicy from "./page/PrivacyPolicy";
import TermService from "./page/TermService";
import RefundPolicy from "./page/RefundPolicy";
import CancellationPolicy from "./page/CancellationPolicy";

function App() {
  return (
    <Router>
      <div className="p-4">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/term-service" element={<TermService />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
