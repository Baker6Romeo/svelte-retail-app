<script lang="ts">
  import products from "../../stores/defaultProducts";
</script>

<h1>Products Component</h1>
{#each $products as product}
  <h2>{product.title}</h2>
{/each}
