import { writable } from 'svelte/store';

const initialCartValue = [];

export const panier = writable(initialCartValue);

export function removeGameFromCart(gameId) {
    panier.update((cartValue) => {
        const indexToRemove = cartValue.findIndex((item) => item.game.id === gameId);
        if (indexToRemove !== -1) {
            const updatedCartValue = [...cartValue];
            updatedCartValue.splice(indexToRemove, 1);
            return updatedCartValue;
        } else {
            return cartValue;
        }
    });
}

export function emptyBasket() {
    panier.set([]);
}