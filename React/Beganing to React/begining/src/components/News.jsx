import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import "./News.css";

const News = ({ title, text, img }) => {
  const [action, setAction] = useState(false);
  return (
    <div className="container">
      <div className="box" onClick={() => setAction(true)}>
        <div className="image">
          <img src={img} alt="" />
        </div>
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="text">
          <p>{text}</p>
        </div>
      </div>

      {action && <Modal close={setAction} />}
    </div>
  );
};

export default News;
