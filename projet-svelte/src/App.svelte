<script>
  import Header from "./lib/Header.svelte";
  import games from "./data/games.json";
  import Item from "./lib/Item.svelte";
  import { addGameToCart } from "./store.js";
</script>

<Header />
<main>
  <section class="game__header">Achetez vos jeux moins chers ici !</section>
  <section class="games__container">
    <div class="container">
      <ul class="games__list">
        {#each games as game (game.id)}
          <li class="games__item">
            <Item {game} let:quantity>
              <button
                class="add__to__basket"
                on:click={() => addGameToCart(game, quantity)}
                >Ajouter au panier</button
              >
            </Item>
          </li>
        {/each}
      </ul>
    </div>
  </section>
</main>

<style>
  .games__item {
    width: calc(25% - 10px);
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  .game__header {
    background-image: url("images/game-background.webp");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    height: 400px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 3rem;
    font-weight: 900;
  }
  .games__container {
    margin-top: 4rem;
  }
  .games__list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 1.3rem;
    padding: 0;
    margin: 0 0 4rem 0;
  }
  .add__to__basket {
    font-size: 1.4rem;
    background-color: #0e3a53;
    border-radius: 0;
    border: 0;
    padding: 10px 16px;
    margin-top: 20px;
  }
  .add__to__basket:hover {
    background-color: #000;
  }
  @media only screen and (max-width: 980px) {
    .games__item {
      width: calc(50% - 10px);
    }
  }

  @media only screen and (max-width: 480px) {
    .games__item {
      width: 100%;
    }
  }
</style>
