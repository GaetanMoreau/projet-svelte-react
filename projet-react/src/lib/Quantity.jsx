import React from "react";
import "../styles/quantity.css";

export default function Quantity({ quantity, onQuantityChange }) {
    const quantityChange = (event) => {
        const value = parseInt(event.target.value);
        onQuantityChange(value >= 0 ? value : 0);
    };
    const incrementQuantity = () => {
        onQuantityChange(quantity + 1)
    };
    const decrementQuantity = () => {
        onQuantityChange(quantity > 0 ? quantity - 1 : quantity);
    };

    return (
        <div className="quantity-control">
            <button
                className="quantity__options"
                onClick={decrementQuantity}
            >
                -
            </button>
            <input
                className="quantity__input"
                type="number"
                value={quantity}
                onChange={quantityChange}
            />
            <button className="quantity__options" onClick={incrementQuantity}>
                +
            </button>
        </div>
    );
}
