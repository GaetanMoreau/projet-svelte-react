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

export function addGameToCart(game, quantity) {
  panier.update((cartValue) => {
    const existingGame = cartValue.find((item) => item.game.id === game.id);

    if (existingGame && quantity > 0) {
      const updatedGame = { ...existingGame };
      updatedGame.quantity += quantity;
      updatedGame.priceOfGames += game.price * quantity;

      const updatedIndex = cartValue.findIndex(
        (item) => item.game.id === game.id
      );
      cartValue.splice(updatedIndex, 1, updatedGame);
      return cartValue;
    } else if (quantity > 0) {
      const priceOfGames = game.price * quantity;
      const selectedGame = { game, quantity, priceOfGames };
      return [...cartValue, selectedGame];
    } else {
      return cartValue;
    }
  });
}

export function emptyBasket() {
  panier.set([]);
}
