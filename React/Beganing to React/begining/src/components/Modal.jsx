import React from "react";
import { useState } from "react";
import "./Modal.css";

const Modal = ({ close, children }) => {
  return (
    <div className="body">
      <div className="content">
        <div className="close" onClick={() => close(false)}>
          X
        </div>
        <div className="title">
          <h1>ssdsd</h1>
        </div>
        <div className="text">
          <p>sds</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
