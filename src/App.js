import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./global/footer/Footer";
import Header from "./global/header/Header";
import Hemocentros from "./hemocentros/Hemocentros";
import Home from "./home/Home";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hemocentros" element={<Hemocentros />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
