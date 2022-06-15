import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header   ">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="header-left">
          <h2 className="header-left-logo">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              DosShop
            </Link>
          </h2>
        </div>
        <div className="header-right">
          <ul className="header-right-items d-flex gap-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="shop">Shop</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
            <li>
              <Link to="telegram">Telegram</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
