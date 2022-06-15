import React from "react";

const Header = () => {
  return (
    <div className="header   ">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="header-left">
          <h2 className="header-left-logo">DosShop</h2>
        </div>
        <div className="header-right">
          <ul className="header-right-items d-flex gap-5">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Telegram</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
