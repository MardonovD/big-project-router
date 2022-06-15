import React from "react";
import Header from "./Header";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
const HomePage = () => {
  return (
    <div className="home">
      <BrowserRouter>
      <Header />
        <Routes>
          {/* <Route path="/" element={}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default HomePage;
