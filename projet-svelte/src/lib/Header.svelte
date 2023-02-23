<script>
  import Basket from "./Basket.svelte";
</script>

<header class="header">
  <div class="container-row">
    <div class="logo__container">
      <span>Gaming Kingdom</span>
    </div>
    <Basket />
  </div>
</header>

<style>
  .header {
    background-color: #0e3a53;
    height: 6rem;
    display: flex;
    align-items: center;
  }
  span {
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
  }

  .logo__container {
    display: flex;
    align-items: center;
  }

  .container-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
