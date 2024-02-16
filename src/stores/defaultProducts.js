import { derived, writable } from "svelte/store";
import localProducts from "../localProducts";

// const store = writable([flattenProducts([...localProducts])]);
const store = writable(flattenProducts([...localProducts]));

/**
 * @param {any[]} data
 */
function flattenProducts(data){
  return data.map(item =>{
    let image = item.image.url;
    return {...item, image}
  })
}

export const featuredStore = derived(store, $products =>
  $products.filter(product =>
    product.featured === true));

export default store;