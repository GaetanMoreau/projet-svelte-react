import React, { useState, useEffect } from "react";
import "../styles/basketlist.css";
import Quantity from "./Quantity";

export default function BasketList({ cart, removeProduct, updateProduct, handleClick, removeAllProduct }) {
    const [totalPrice, setTotalPrice] = useState(0);

    const handleBasketClose = () => {
        handleClick();
    };

    useEffect(() => {
        let total = 0;
        cart.forEach((item) => {
            total += item.game.price * item.quantity;
        });
        setTotalPrice(total);
    }, [cart]);

    const handleQuantityChange = (index, quantity) => {
        updateProduct(index, quantity);
    };

    const handleRemoveAllProducts = () => {
        removeAllProduct();
    }

    const handleRemoveProduct = (index) => {
        removeProduct(index);
    };

    const handleCheckout = () => {
        if (cart.length > 0) {
            handleRemoveAllProducts();
            handleClick();
            console.log("Commande validé, amusez vous bien !");
        }
    };

    return (
        <div className="basket__list">
            <div className="basketList__header">
                <h2>Votre panier</h2>
                <span className="bastket__close" onClick={handleBasketClose}>
                    X
                </span>
            </div>
            <ul className="in__basket__list">
                {cart.map((item, index) => (
                    <li key={item.game.id}>
                        <div className="in__basket">
                            <div className="image__container">
                                <img src={item.game.image} alt={item.game.title} />
                                <div>
                                    <button
                                        className="game__remove-btn"
                                        onClick={() => handleRemoveProduct(index)}
                                    >
                                        Supprimer
                                    </button>
                                </div>
                            </div>
                            <div className="game__info">
                                <h3 className="game__title">{item.game.title}</h3>
                                <p className="game__price">
                                    {item.game.price} € x {item.quantity} ={" "}
                                    {(item.game.price * item.quantity).toFixed(2)} €
                                </p>
                                <div className="basket__item__quantity">
                                    <Quantity
                                        quantity={item.quantity}
                                        onQuantityChange={(quantity) =>
                                            handleQuantityChange(index, quantity)
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="basket__order">
                <p>Total : <strong>{totalPrice.toFixed(2)} €</strong></p>
                <button onClick={handleCheckout} disabled={cart.length === 0}>
                    Procéder au paiement
                </button>
            </div>
        </div>
    );
}
