<script>
  import Quantity from "./Quantity.svelte";
  import { removeGameFromCart } from "../store.js";

  export let game = {};
  export let quantity = 0;
  export let isInCart = false;
</script>

{#if isInCart}
  <div class="in__basket">
    <div class="image__container">
      <img src={game.image} alt={game.title} />
    </div>
    <div class="game__info">
      <h2 class="game__title">{game.title}</h2>
      <Quantity bind:quantity />
      <slot {quantity} />
    </div>
  </div>
  <div>
    <button
      on:click={() => removeGameFromCart(game.id)}
      class="game__remove-btn">Supprimer</button
    >
  </div>
{:else}
  <div>
    <div class="image__container">
      <img src={game.image} alt={game.title} />
    </div>
    <div class="game__info">
      <h2 class="game__title">{game.title}</h2>
      <div class="game__tags__container">
        {#each game.tags as gametag}
          <span class="game__tags">{gametag}</span>
        {/each}
      </div>
      <p class="game__price">{game.price} €</p>
      <Quantity bind:quantity />
      <slot {quantity} />
    </div>
  </div>
{/if}

<style>
  .image__container img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .image__container {
    height: 400px;
  }
  .game__info {
    padding: 20px;
  }
  .game__title {
    margin-top: 0;
    font-size: 1.6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .game__tags__container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .game__tags {
    font-size: 1.2rem;
    color: #fff;
    background-color: #2e6f94;
    padding: 4px 8px;
  }
  .game__price {
    font-size: 1.6rem;
    font-weight: bold;
  }
  .in__basket {
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
  }
  .in__basket .image__container {
    height: 100px;
  }
  .in__basket .image__container img {
    width: 80px;
  }
  .in__basket .game__info {
    padding: 6px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .in__basket .game__info h2 {
    margin: 0;
    font-size: 1.4rem;
  }
  .game__remove-btn {
    padding: 8px 16px;
    border-radius: 0;
    font-size: 10px;
    margin-top: 1rem;
  }
</style>
