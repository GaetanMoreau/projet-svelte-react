import React, { useState } from "react";
import "../styles/basket.css";
import BasketList from "./BasketList";

export default function Basket({ cart, setCart, removeProduct, updateProduct, removeAllProduct }) {
    const [basketListIsOpen, setBasketListIsOpen] = useState(false);

    const handleClick = () => {
        setBasketListIsOpen(!basketListIsOpen);
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            setBasketListIsOpen(!basketListIsOpen);
        }
    };

    const totalPrice = cart.reduce(
        (total, item) => total + item.game.price * item.quantity,
        0
    );

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="basket__container">
            <div
                className="shopping"
                onClick={handleClick}
                onKeyPress={handleKeyPress}
                tabIndex="0"
            >
                <div className="shopping__bag__container">
                    <img
                        className="shopping__bag"
                        src="/cart.svg"
                        alt="shopping cart"
                    />
                    <span className="shopping__quantity">{totalQuantity}</span>
                </div>
                <span className="shopping__price">{totalPrice.toFixed(2)} €</span>
            </div>
            {basketListIsOpen && (
                <BasketList
                    cart={cart}
                    setCart={setCart}
                    removeProduct={removeProduct}
                    updateProduct={updateProduct}
                    handleClick={handleClick}
                    removeAllProduct={removeAllProduct}
                />
            )}
        </div>
    );
}
