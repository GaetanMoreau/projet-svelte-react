import { writable } from "svelte/store";

const initialCartValue = [];

export const panier = writable(initialCartValue);

export function removeGameFromCart(gameId) {
  panier.update((cartValue) => {
    const indexToRemove = cartValue.findIndex(
      (item) => item.game.id === gameId
    );
    if (indexToRemove !== -1) {
      const updatedCartValue = [...cartValue];
      updatedCartValue.splice(indexToRemove, 1);
      return updatedCartValue;
    } else {
      return cartValue;
    }
  });
}

export function addGameToCart(game, newQuantity) {
  panier.update((cartValue) => {
    const existingGame = cartValue.find((item) => item.game.id === game.id);

    if (existingGame) {
      const updatedGame = { ...existingGame };
      updatedGame.quantity = newQuantity;
      updatedGame.priceOfGames = game.price * newQuantity;

      const updatedIndex = cartValue.findIndex(
        (item) => item.game.id === game.id
      );
      cartValue.splice(updatedIndex, 1, updatedGame);
      return cartValue;
    } else if (newQuantity > 0) {
      const priceOfGames = game.price * newQuantity;
      const selectedGame = { game, quantity: newQuantity, priceOfGames };
      return [...cartValue, selectedGame];
    } else {
      return cartValue;
    }
  });
}


export function emptyBasket() {
  panier.set([]);
}
