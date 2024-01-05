<script lang="ts">
  import { onMount } from "svelte";
  import products from "../../stores/defaultProducts";
  import localProducts from "../../localProducts";

  let defaultProducts: any[] = [];

  onMount(() => {
    products.subscribe((products) => {
      defaultProducts = products;
    });
  });
</script>

<h1>Products Component</h1>
{#each defaultProducts as product}
  <h2>{product.title}</h2>
{/each}
