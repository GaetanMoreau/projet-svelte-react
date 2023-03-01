<script>
  import { panier } from "../store.js";
  import BasketList from "./BasketList.svelte";

  let basketListIsOpen = false;
  $: totalPrice = parseFloat(
    $panier.reduce((acc, item) => acc + item.priceOfGames, 0).toFixed(2)
  );

  $: totalQuantity = $panier.reduce((acc, item) => acc + item.quantity, 0);
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
  <BasketList bind:basketListIsOpen totalQuantity bind:totalPrice />
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
