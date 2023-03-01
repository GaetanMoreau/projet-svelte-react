<script>
    import { slide } from "svelte/transition";
    import Item from "./Item.svelte";
    import { panier, emptyBasket } from "../store.js";

    export let basketListIsOpen;
    export let totalQuantity;
    export let totalPrice;
    $: totalPrice = parseFloat(
        $panier.reduce((acc, item) => acc + item.priceOfGames, 0).toFixed(2)
    );
    $: totalQuantity = $panier.reduce((acc, item) => acc + item.quantity, 0);
    function proceedToCheckout() {
        console.log("Votre panier est vide");
        if (totalQuantity > 0) {
            emptyBasket();
            basketListIsOpen = false;
            console.log("Commande validé, amusez vous bien !");
        }
    }
</script>

<div class="basket__list" transition:slide>
    <div class="basketList__header">
        <h2>Votre panier</h2>
        <span
            class="bastket__close"
            on:click={() => (basketListIsOpen = false)}
            on:keypress={() => (basketListIsOpen = false)}>X</span
        >
    </div>
    <div>
        {#each $panier as item}
            <Item
                game={item.game}
                quantity={item.quantity}
                isInCart={true}
                let:quantity
            >
                <div class="game__price">{item.priceOfGames.toFixed(2)} €</div>
            </Item>
        {/each}
    </div>
    <div class="basket__order">
        <p>Total : <strong>{totalPrice} €</strong></p>
        <button on:click={() => proceedToCheckout()}
            >Procéder au paiement</button
        >
    </div>
</div>

<style>
    .basket__list {
        position: fixed;
        top: 0px;
        bottom: 0px;
        width: 300px;
        right: 0;
        background-color: #fff;
        padding: 20px;
        font-size: 1.6rem;
        overflow-y: scroll;
        overflow-x: hidden;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,
            rgba(0, 0, 0, 0.24) 0px 1px 2px;
    }
    .bastket__close {
        cursor: pointer;
    }
    .basketList__header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid;
    }
    .basket__order {
        display: flex;
        flex-direction: column;
    }
    .basket__order button {
        font-size: 1.4rem;
        background-color: #0e3a53;
        border-radius: 0;
        border: 0;
        padding: 10px 16px;
        margin-top: 20px;
    }
    .basket__order button:hover {
        background-color: #000;
    }
</style>
