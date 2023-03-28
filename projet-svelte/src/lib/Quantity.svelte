<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export let quantity = 0;

  function increment() {
    quantity++;
    dispatch("update", quantity);
  }

  function decrement() {
    if (quantity > 0) {
      quantity--;
      dispatch("update", quantity);
    }
  }

  function handleInput(event) {
    quantity = +event.target.value;
    dispatch("update", quantity);
  }
</script>

<div class="quantity">
  <button class="quantity__options" on:click={() => decrement()}>-</button>
  <input
    class="quantity__input"
    type="number"
    bind:value={quantity}
    min="0"
    on:input={handleInput}
  />
  <button class="quantity__options" on:click={() => increment()}>+</button>
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
