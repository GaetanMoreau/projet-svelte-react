import React from "react";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container-row">
        <div className="logo__container">
          <span>Gaming Kingdom</span>
        </div>
        <a href="/">Panier</a>
      </div>
    </header>
  );
}
