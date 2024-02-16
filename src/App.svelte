<script>
  import { Link, Route, Router } from "svelte-routing";
  import About from "./pages/About.svelte";
  import Checkout from "./pages/Checkout.svelte";
  import Home from "./pages/Home.svelte";
  import Login from "./pages/Login.svelte";
  import Navbar from "./components/Navbar/Navbar.svelte";
  import Product from "./pages/Product.svelte";
  import Products from "./pages/Products.svelte";
</script>

<Router>
  <Navbar />
  <div>
    <Route path="/"><Home /></Route>
    <Route path="/about"><About /></Route>
    <Route path="/products"><Products /></Route>
    <Route path="/product/:id" component={Product} />.
  </div>
</Router>
