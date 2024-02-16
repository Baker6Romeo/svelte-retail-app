<script>
  import { link } from "svelte-routing";
</script>

<nav class="navbar">
  <div class="nav-center">
    <button class="btn-sidevar-toggle">
      <i class="fas fa-bars"></i>
    </button>
    <a href="/" use:link class="nav-logo">
      <img src="/assets/images/logo.svg" class="logo" alt="razors logo" /></a
    >
    <button>cart</button>
  </div>
</nav>
