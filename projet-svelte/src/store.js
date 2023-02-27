import { writable } from 'svelte/store';

export let panier = writable([])

export function emptyBasket() {
    panier.set([]);
}