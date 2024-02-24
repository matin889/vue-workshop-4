<template>
  <h1>Movies</h1>
  <div>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        {{ movie.title }}
      </li>
    </ul>
  </div>
</template>

<!-- <script lang="ts">
  import { useThemeStore } from '@/stores/themeStore'
  import { computed } from 'vue'
  export default {
    setup() {
      const themeStore = useThemeStore()
      const currentTheme = computed(() => themeStore.currentTheme)
      const favoriteCount = computed(() => themeStore.favoritesCount)
  
      const generateTheme = () => {
        themeStore.generateTheme()
      }
  
      const saveToFavorites = () => {
        themeStore.saveToFavorites()
      }
      return { currentTheme, generateTheme, saveToFavorites, favoriteCount }
    }
  }
  </script> -->

<script setup lang="ts">
import { useMovieStore } from '@/stores/movieStore'
import { computed } from 'vue'
import { onMounted } from 'vue'

const movieStore = useMovieStore()
const movies = computed(() => movieStore.movies)

onMounted(() => {
  movieStore.fetchMovies()
})
</script>

<style scoped>
.colors {
  display: flex;
  margin-bottom: 20px;
}

.color {
  color: #ffff;
  width: 100px;
  height: 100px;
  margin: 5px;
}
</style>
