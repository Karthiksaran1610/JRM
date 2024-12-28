import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Team from "./Pages/Team";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Career from "./Pages/Career";
import Contact from "./Pages/Contact";
import WhatWedo from "./Pages/WhatWedo";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/whatwedo" element={<WhatWedo />} />
        <Route path="/team" element={<Team />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
