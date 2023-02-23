<script>
  export let quantity = 0;
</script>

<div class="quantity">
  <button
    class="quantity__options"
    on:click={() => (quantity > 0 ? quantity-- : quantity)}>-</button
  >
  <input class="quantity__input" type="number" value={quantity} min="0" />
  <button class="quantity__options" on:click={() => quantity++}>+</button>
</div>

<style>
  .quantity {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .quantity__options {
    border-radius: 0;
    font-size: 1.2rem;
    border: 0;
  }
  .quantity__input {
    border: 0;
    height: 26px;
    font-size: 1rem;
    width: 30px;
    padding-left: 1rem;
  }
</style>
