import React from 'react';
import "../css/Header.css"


const Header = () => {
  return (
    <div>
        <div className="container">
          <div className="logo">
            <img src={"./image/logo.png"} alt="" />
          </div>
          <div className="access">
            <span>Register</span>
          </div>
        </div>
    </div>
  );
}

export default Header;
