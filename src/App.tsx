import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Team from "./Pages/Team";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Contact from "./Pages/Contact";
import WhatWedo from "./Pages/WhatWedo";
import Career from "./Pages/Career";
import Construction from "./Pages/Construction";
import Renovation from "./Pages/Renovation";
import Interior from "./Pages/Interior";
import Architecture from "./Pages/Architecture";
import { Toaster } from "./Components/ui/toaster";
import Price from "./Pages/Price";
import Portfolio from "./Pages/Portfolio";
import Blog from "./Pages/Blog";
import Blog1 from "./Pages/Blog1";
import Blog2 from "./Pages/Blog2";
import Blog3 from "./Pages/Blog3";
import Blog4 from "./Pages/Blog4";
import Blog5 from "./Pages/Blog5";
import Blog6 from "./Pages/Blog6";
import Blog7 from "./Pages/Blog7";
import Blog8 from "./Pages/Blog8";
import Blog9 from "./Pages/Blog9";
import Home from "./Pages/Home";
import Calculator from "./Pages/Calculator";




const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/whatwedo" element={<WhatWedo />} />
        <Route path="/price" element={<Price/>} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog1" element={<Blog1/>} />
        <Route path="/blog2" element={<Blog2/>} />
        <Route path="/blog3" element={<Blog3/>} />
        <Route path="/blog4" element={<Blog4/>} />
        <Route path="/blog5" element={<Blog5/>} />
        <Route path="/blog6" element={<Blog6/>} />
        <Route path="/blog7" element={<Blog7/>} />
        <Route path="/blog8" element={<Blog8/>} />
        <Route path="/blog9" element={<Blog9/>} />
        <Route path="/team" element={<Team />} />
        <Route path="/calculator" element={<Calculator />} />
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
