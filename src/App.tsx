import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Team from "./Pages/Team";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import WhatWedo from "./Pages/WhatWedo";
import Career from "./Pages/Career";
import Construction from "./Pages/Construction";
import Renovation from "./Pages/Renovation";
import Interior from "./Pages/Interior";
import Architecture from "./Pages/Architecture";
import { Toaster } from "./Components/ui/toaster";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/whatwedo" element={<WhatWedo />} />
        <Route path="/team" element={<Team />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/renovation" element={<Renovation />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/interior" element={<Interior />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
