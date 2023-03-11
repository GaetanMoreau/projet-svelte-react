import React from "react";
import "../styles/header.css";
import Basket from "./Basket";

export default function Header({ cart, setCart, removeProduct, updateProduct, removeAllProduct }) {
  return (
    <header className="header">
      <div className="container-row">
        <div className="logo__container">
          <h2 className="header__title">Gaming Kingdom</h2>
        </div>
        <Basket cart={cart} setCart={setCart} removeProduct={removeProduct} updateProduct={updateProduct} removeAllProduct={removeAllProduct} />
      </div>
    </header>
  );
}
