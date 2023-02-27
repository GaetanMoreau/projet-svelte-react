<script>
  import { slide } from "svelte/transition";
  import { panier, emptyBasket } from "../store.js";
  import Item from "./Item.svelte";

  let basketListIsOpen = false;

  $: totalQuantity = $panier.reduce((acc, item) => acc + item.quantity, 0);
  $: totalPrice = $panier.reduce((acc, item) => acc + item.priceOfGames, 0);

  function proceedToCheckout() {
    emptyBasket();
    basketListIsOpen = false;
  }
</script>

<div class="shopping">
  <img
    class="shoppingBag"
    src="/images/cart.svg"
    alt="shopping cart"
    on:click={() => (basketListIsOpen = true)}
    on:keypress={() => (basketListIsOpen = true)}
  />
  <span>{totalQuantity}</span>
  <span>{totalPrice} €</span>
</div>

{#if basketListIsOpen}
  <div class="basketList" transition:slide>
    <div class="basketList__header">
      <h2>Votre panier</h2>
      <span
        on:click={() => (basketListIsOpen = false)}
        on:keypress={() => (basketListIsOpen = false)}>X</span
      >
    </div>
    <div class="basketContent">
      {#each $panier as item}
        <Item
          game={item.game}
          quantity={item.quantity}
          isInCart={true}
          let:quantity
        >
          <div class="game__price">{item.priceOfGames} €</div>
        </Item>
      {/each}
    </div>
    <div class="basketOrder">
      <p>Total : <strong>{totalPrice} €</strong></p>
      <button on:click={() => proceedToCheckout()}>Aller au paiement</button>
    </div>
  </div>
{/if}

<style>
  .shopping {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.6rem;
  }
  .shopping span {
    font-family: Roboto, sans-serif;
    font-size: 1.6rem;
    color: #fff;
  }
  .shoppingBag {
    width: 1.6rem;
  }
  .basketList {
    position: fixed;
    top: 0px;
    bottom: 0px;
    width: 300px;
    right: 0;
    background-color: #fff;
    padding: 20px;
    font-size: 1.6rem;
  }
  .basketList__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid;
  }
  .basketOrder {
    display: flex;
    flex-direction: column;
  }
</style>
