<script>
  import Product from "./Product.svelte";
  import products from "../../stores/defaultProducts";

  export let title = "";
</script>

<section>
  <h2 class="section-title">{title}</h2>
  {#each $products as product}
    <Product {product} />
  {/each}
</section>
