import React from "react";
import { GoogleIcon } from "./icons/GoogleIcon.jsx";
import { button } from "./UI/Button.jsx";
import { Input } from "./UI/Input.jsx";
import { CheckBox } from "./UI/CheckBox.jsx";

export default function Form() {
  return (
    <form className="form">
      <div className="form__title">NFT Access</div>
      <div className="form__desc">
        Please fill your detail to access your account.
      </div>

      <Input
        title="Email"
        type="email"
        name="Email"
        placeholder="bebra.holt@example.com"
      />

      <Input
        title="Password"
        type="password"
        name="password"
        placeholder="••••••••"
      />

      <div className="row">
        <CheckBox label="Remember me" />

        <a href="/" className="label__a">
          Forgot Password?
        </a>
      </div>

      <div className="form__btn">
        <button className="btn _primary">Sign in</button>
        <button className="btn _secondary">
          <GoogleIcon />
          Sign in with Google
        </button>
      </div>
      <div className="ending">
        Don’t have an account?{" "}
        <a className="ending__a" href="/">
          Sign up
        </a>
      </div>
    </form>
  );
}
