import React, { useState } from "react";
import Header from "./lib/Header";
import Item from "./lib/Item";
import games from "./data/games.json";
import "./App.css";

function App() {
  const [gamesList, setGamesList] = useState(games);
  const [cart, setCart] = useState([]);

  const addToCart = (game, quantity) => {
    const existingProduct = cart.find((item) => item.game.id === game.id);
    if (quantity > 0) {
      if (existingProduct) {
        const updatedCart = cart.map((item) => {
          if (item.game.id === game.id) {
            return { game, quantity: item.quantity + quantity };
          } else {
            return item;
          }
        });
        setCart(updatedCart);
      } else {
        setCart([...cart, { game, quantity }]);
      }
    }
  };

  const removeProduct = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const updateProduct = (index, quantity) => {
    const newCart = [...cart];
    newCart[index].quantity = quantity;
    setCart(newCart);
  };


  const removeAllProduct = () => {
    const newCart = [];
    setCart(newCart);
  };

  return (
    <>
      <Header cart={cart} setCart={setCart} removeProduct={removeProduct} updateProduct={updateProduct} removeAllProduct={removeAllProduct} />
      <main>
        <section className="game__header"><h1>Achetez vos jeux moins chers ici !</h1></section>
        <section className="games__container">
          <div className="container">
            <ul className="games__list">
              {gamesList.map((game) => (
                <Item key={game.id} game={game} addToCart={addToCart} />
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
