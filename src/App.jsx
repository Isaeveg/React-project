import Form from "./components/Form";
import Copyright from "./components/Copyright";
import Logo from "./components/Logo";
import Background from "./components/Background";
import React from "react";
export default function App() {
  return (
    <div className="sign-in">
      <div className="sign-in__info">
        <Logo />
        <Form />
        <Copyright />
      </div>

      <div className="sign-in__bg">
        <Background />
      </div>
    </div>
  );
}
