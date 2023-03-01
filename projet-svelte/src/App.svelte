<script>
  import Header from "./lib/Header.svelte";
  import games from "./data/games.json";
  import Item from "./lib/Item.svelte";
  import { panier } from "./store.js";

  let selectedGame;
  let priceOfGames = 0;

  let temppannier;
  panier.subscribe((value) => {
    temppannier = value;
  });

  function addToCart(game, quantity) {
    const existingGame = temppannier.find((item) => item.game.id === game.id);

    if (existingGame && quantity > 0) {
      const updatedGame = { ...existingGame };
      updatedGame.quantity += quantity;
      updatedGame.priceOfGames += game.price * quantity;

      const updatedIndex = temppannier.findIndex(
        (item) => item.game.id === game.id
      );
      temppannier.splice(updatedIndex, 1, updatedGame);
      panier.set(temppannier);
    } else if (quantity > 0) {
      priceOfGames = game.price * quantity;
      selectedGame = { game, quantity, priceOfGames };
      panier.set([...temppannier, selectedGame]);
    }
    quantity = 0;
  }
</script>

<Header />
<main>
  <section class="game__header">Buy your games cheaper here !</section>
  <section class="games__container">
    <div class="container">
      <ul class="games__list">
        {#each games as game (game.id)}
          <div class="game__item">
            <Item {game} let:quantity>
              <button class="addCart" on:click={() => addToCart(game, quantity)}
                >Ajouter au panier</button
              >
            </Item>
          </div>
        {/each}
      </ul>
    </div>
  </section>
</main>

<style>
  .game__item {
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
  .addCart {
    font-size: 1.4rem;
    background-color: #0e3a53;
    border-radius: 0;
    border: 0;
    padding: 10px 16px;
    margin-top: 20px;
  }
  .addCart:hover {
    background-color: #000;
  }
  @media only screen and (max-width: 980px) {
    .game__item {
      width: calc(50% - 10px);
    }
  }

  @media only screen and (max-width: 480px) {
    .game__item {
      width: 100%;
    }
  }
</style>
