<script>
  import { slide } from "svelte/transition";
  import { panier, emptyBasket } from "../store.js";
  import Item from "./Item.svelte";

  let basketListIsOpen = false;

  $: totalQuantity = $panier.reduce((acc, item) => acc + item.quantity, 0);
  $: totalPrice = parseFloat(
    $panier.reduce((acc, item) => acc + item.priceOfGames, 0).toFixed(2)
  );

  function proceedToCheckout() {
    console.log("Votre panier est vide");
    if (totalQuantity > 0) {
      emptyBasket();
      basketListIsOpen = false;
      console.log("Commande validé, amusez vous bien !");
    }
  }
</script>

<div
  class="shopping"
  on:click={() => (basketListIsOpen = true)}
  on:keypress={() => (basketListIsOpen = true)}
>
  <div class="shopping__bag__container">
    <img class="shopping__bag" src="/images/cart.svg" alt="shopping cart" />
    <span class="shopping__quantity">{totalQuantity}</span>
  </div>
  <span class="shopping__price">{totalPrice} €</span>
</div>

{#if basketListIsOpen}
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
      <button on:click={() => proceedToCheckout()}>Procéder au paiement</button>
    </div>
  </div>
{/if}

<style>
  .shopping {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.6rem;
    cursor: pointer;
  }
  .shopping span,
  .shopping__price {
    font-family: Roboto, sans-serif;
    color: #fff;
  }
  .shopping__price {
    font-size: 1.6rem;
  }
  .shopping__bag {
    width: 1.6rem;
  }
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
  .shopping__bag__container {
    position: relative;
    margin-right: 0.6rem;
  }
  .shopping__bag__container img {
    padding: 8px;
  }
  .shopping__quantity {
    position: absolute;
    top: -3px;
    border-radius: 50%;
    color: rgb(255, 255, 255);
    background-color: rgb(8, 104, 243);
    height: 20px;
    width: 20px;
    font-size: 12px;
    padding: 1px;
    line-height: 20px;
    right: -8px;
    letter-spacing: 0px;
    text-align: center;
    transition: all 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;
  }
</style>
