import React from "react";
import Header from "./Header";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Shop from "./Shop";
const HomePage = () => {
  return (
    <div className="home">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Shop />}>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default HomePage;
