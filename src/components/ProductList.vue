<template>
  <div>
    <h2>Product List</h2>

    <!-- Form to add new products -->
    <form @submit.prevent="addProduct">
      <label for="productName">Product Name:</label>
      <input v-model="newProduct.name" type="text" required />

      <label for="productPrice">Product Price:</label>
      <input v-model.number="newProduct.price" type="number" required />

      <button type="submit">Add Product</button>
    </form>

    <!-- Display product count -->
    <p>Total Products: {{ productCount }}</p>

    <!-- Display products cheaper than a certain price -->
    <p>Products Cheaper Than SEK.{{ filterPrice }}:</p>
    <ul>
      <li v-for="product in cheaperProducts" :key="product.id">
        {{ product.name }} - SEK.{{ product.price }}
        <button @click="removeProduct(product.id)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useProductStore } from '@/stores/productStore'

export default {
  setup() {
    const newProduct = ref({ name: '', price: 0 })
    const filterPrice = ref(300)

    const productStore = useProductStore()

    const productCount = computed(() => productStore.productCount)
    const cheaperProducts = computed(() => productStore.productCheaperThan(filterPrice.value))

    const addProduct = () => {
      productStore.addProduct({
        id: Date.now(),
        ...newProduct.value
      })
      // Reset the form
      newProduct.value = { name: '', price: 0 }
    }

    const removeProduct = (productId) => {
      productStore.removeProduct(productId)
    }

    return { newProduct, filterPrice, productCount, cheaperProducts, addProduct, removeProduct }
  }
}
</script>
