import React from "react";
import { useState } from "react";
import "./Login.css";
import "./Reset.css";
import Result from "./Result";

const Login = () => {
  const [nick, setNick] = useState(" ");
  const [pass, setPass] = useState(" ");

  function answer(e) {
    e.preventDefault();
    if (setNick("Maqa")) {
      return <Result />;
    } else {
      return <Result />;
    }
  }

  return (
    <div className="login">
      <input type="text" placeholder="Nickname" value={nick} />

      <input type="text" placeholder="Passwor" value={pass} />
      <button
        onClick={() => {
          setNick("Maqa");
          setPass("1235");
        }}
      >
        On Click
      </button>
      <div className="ans">{answer}</div>
    </div>
  );
};

export default Login;
