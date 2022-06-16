import React from "react";
import Header from "./Header";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Shop from "./Shop";
import Portfolio from "./portfolio/Portfolio";
import Card from "./portfolio/Card";
const HomePage = () => {
  return (
    <div className="home">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/portfolio/card" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default HomePage;
