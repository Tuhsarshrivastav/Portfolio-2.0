import React, { useState } from "react";
import "./Header.css";
import Mobile from "./mobile";
const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">Portfolio</div>
      <div className="menu">
        <div className="web-menu">web</div>
        <div className="mobile-menu">
          <div onClick={() => setisOpen(!isOpen)}>
            <i className="fi fi-rr-menu-burger menu-item"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setisOpen={setisOpen} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
