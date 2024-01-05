<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import products from "../../stores/defaultProducts";
  import type { Unsubscriber } from "svelte/store";

  let defaultProducts: any[] = [];
  let unsubscribe: Unsubscriber;

  onDestroy(() => {
    unsubscribe();
  });
  onMount(() => {
    unsubscribe = products.subscribe((products) => {
      defaultProducts = products;
    });
  });
</script>

<h1>Products Component</h1>
{#each defaultProducts as product}
  <h2>{product.title}</h2>
{/each}
