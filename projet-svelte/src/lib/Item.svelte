<script>
  import Quantity from "./Quantity.svelte";

  export let game = {};
  export let quantity = 0;
</script>

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
</style>
