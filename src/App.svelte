<script lang="ts">
  import { Link, Route, Router } from "svelte-routing";
  import About from "./pages/About.svelte";
  import Checkout from "./pages/Checkout.svelte";
  import Home from "./pages/Home.svelte";
  import Login from "./pages/Login.svelte";
  import Product from "./pages/Product.svelte";
  import Products from "./pages/Products.svelte";
</script>

<Router>
  <nav class="navbar">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/products">Products</Link>
  </nav>
  <div>
    <Route path="/"><Home /></Route>
    <Route path="/about"><About /></Route>
    <Route path="/products"><Products /></Route>
    <Route path="/product/:id" component={Product} />.
  </div>
</Router>
