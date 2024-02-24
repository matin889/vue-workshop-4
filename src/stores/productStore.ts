interface Product {
  id: number
  name: string
  price: number
}

import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as Product[]
  }),
  getters: {
    productCount(state) {
      return state.products.length
    },
    productCheaperThan(state) {
      return (price: number) => state.products.filter((product) => product.price < price)
    }
  },
  actions: {
    addProduct(product: Product) {
      this.products.push(product)
    },
    removeProduct(productId: number) {
      const index = this.products.findIndex((product) => product.id === productId)
      if (index !== -1) {
        this.products.splice(index, 1)
      }
    }
  }
})
