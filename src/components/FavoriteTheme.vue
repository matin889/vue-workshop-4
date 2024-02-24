<template>
  <div class="container">
    <div v-for="(theme, index) in favorites" :key="index">
      <div class="colors">
        <div
          v-for="(color, colorIndex) in theme"
          :key="colorIndex"
          :style="{ backgroundColor: color }"
          class="color"
        >
          {{ color }}
        </div>
      </div>
      <button @click="removeFromFavorites(index)">Remove Theme</button>
    </div>
  </div>
</template>

<!-- <script lang="ts">
import { useThemeStore } from '@/stores/themeStore'
export default {
  setup() {
    const { favorites, removeFromFavorites } = useThemeStore()

    return { favorites, removeFromFavorites }
  }
}
</script> -->

<script setup lang="ts">
import { useThemeStore } from '@/stores/themeStore'

const { favorites, removeFromFavorites } = useThemeStore()
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
