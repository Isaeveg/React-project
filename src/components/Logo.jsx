import React from "react";
import { LogoIcon } from "./icons/LogoIcon.jsx";
export default function Logo() {
  return (
    <div className="logo">
      <a className="logo__a" href="/">
        <LogoIcon />
        PNFT Market
      </a>
    </div>
  );
}
