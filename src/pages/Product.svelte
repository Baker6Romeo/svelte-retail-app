<script>
  import { link } from "svelte-routing";
  import Loading from "../components/Loading.svelte";
  import products from "../stores/defaultProducts";

  export let id;

  $: product = $products.find((product) => product.id === parseInt(id));
</script>

<svelte:head>
  {#if !products}
    <title>Loading...</title>
  {:else}
    <title>{product.title}</title>
    <meta name={product.title} content={product.description} />
  {/if}
</svelte:head>

{#if !products}
  <Loading />
{:else}
  <section class="single-product">
    <a href="/products" use:link class="btn btn-primary">back to products</a>
    <div class="single-product-container">
      <article class="single-product-image">
        <img src={product.image} alt={product.title} />
      </article>
      <article>
        <h1>{product.title}</h1>
        <h2>{product.price}</h2>
        <p>{product.description}</p>
        <button
          class="btn btn-primary btn-block"
          on:click={() => {
            console.log("Add to Cart");
          }}>add to cart</button
        >
      </article>
    </div>
  </section>
{/if}
