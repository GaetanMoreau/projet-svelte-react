import React, { useState } from "react";
import "../styles/item.css";
import Quantity from "./Quantity";

export default function Item({ game, addToCart }) {
    const [quantity, setQuantity] = useState(0);

    const quantityChange = (value) => {
        setQuantity(value);
    };

    const handleAddToCart = () => {
        addToCart(game, quantity);
        setQuantity(0);
    };
    return (
        <>
            <li className="game__item">
                <div className="image__container">
                    <img src={game.image} alt={game.title} />
                </div>
                <div className="game__info">
                    <h2 className="game__title">{game.title}</h2>
                    <div className="game__tags__container">
                        {game.tags.map((tag) => (
                            <span className="game__tags" key={tag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p className="game__price">{game.price} €</p>
                    <Quantity
                        quantity={quantity}
                        onQuantityChange={quantityChange}
                    />
                    <button className="addCart" onClick={handleAddToCart}>
                        Ajouter au panier
                    </button>
                </div>
            </li>
        </>
    );
}
