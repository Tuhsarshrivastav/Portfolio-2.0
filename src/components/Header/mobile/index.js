import React from "react";
import "./Mobile.css";
const Mobile = ({ isOpen, setisOpen }) => {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setisOpen(!isOpen)}>
        <i class="fi fi-rr-cross"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#project">project</a>
        </div>
        <div className="mobile-option">
          <a href="#project">work</a>
        </div>
        <div className="mobile-option">
          <a href="#project">contect</a>
        </div>
        <div className="mobile-option">
          <a href="#project">skills</a>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
