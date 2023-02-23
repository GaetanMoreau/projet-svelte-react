<script>
  import { slide } from "svelte/transition";

  export let numberOfArticles = 0;
  let basketListIsOpen = false;
</script>

<div class="shopping">
  <img
    class="shoppingBag"
    src="/images/cart.svg"
    alt="shopping cart"
    on:click={() => (basketListIsOpen = true)}
    on:keypress={() => (basketListIsOpen = true)}
  />
  <span>{numberOfArticles}</span>
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
</style>
