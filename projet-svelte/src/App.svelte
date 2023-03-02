<script>
  import Header from "./lib/Header.svelte";
  import games from "./data/games.json";
  import Item from "./lib/Item.svelte";

  let searchedGame = "";

  function searchGamesByTitle(e) {
    searchedGame = e.target.value;
  }

  function filterGamesByPrice(e) {
    switch (e.target.value) {
      case "low":
        gameToDisplayPrice = games.slice().sort((a, b) => a.price - b.price);
        break;
      case "high":
        gameToDisplayPrice = games.slice().sort((a, b) => b.price - a.price);
        break;
      default:
        gameToDisplayPrice = games.slice();
        break;
    }
  }

  $: gameToDisplaySearch = games.filter((game) =>
    game.title.toLowerCase().includes(searchedGame.toLowerCase())
  );
  $: gameToDisplayPrice = gameToDisplaySearch;
</script>

<Header />
<main>
  <section class="game__header">Achetez vos jeux moins chers ici !</section>
  <section class="games__container">
    <div class="container">
      <div class="games__filters">
        <input
          type="text"
          placeholder="Rechercher par nom"
          on:input={(e) => searchGamesByTitle(e)}
          bind:value={searchedGame}
        />
        <select name="game-price" on:change={(e) => filterGamesByPrice(e)}>
          <option value="none">Trier par :</option>
          <option value="high">Prix : les plus chers</option>
          <option value="low">Prix : les moins chers</option>
        </select>
      </div>
      <ul class="games__list">
        {#each gameToDisplayPrice as game (game.id)}
          <li class="games__item">
            <Item {game} />
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
  .games__filters {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-bottom: 2rem;
    justify-content: flex-end;
  }
  input[type="text"],
  select {
    font-size: 1.2rem;
    padding: 1.2rem 2rem;
    margin: 0.8rem 0;
    box-sizing: border-box;
    border: 1px solid #fff;
    background-color: #fff;
    color: #000;
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
