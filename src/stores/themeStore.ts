import { defineStore } from 'pinia'

function getRandomColor(): string {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
export const useThemeStore = defineStore('themeStore', {
  //Data
  state: () => ({
    currentTheme: Array<string>(),
    favorites: Array<Array<string>>()
  }),
  //Computed
  getters: {
    favoritesCount(state) {
      return state.favorites.length
    }
  },
  //Methods
  actions: {
    generateTheme() {
      this.currentTheme = []
      for (let i = 0; i < 5; i++) {
        this.currentTheme.push(getRandomColor())
      }
    },
    saveToFavorites() {
      this.favorites.push(this.currentTheme)
    },
    removeFromFavorites(index: number) {
      this.favorites.splice(index, 1)
    }
  }
})
