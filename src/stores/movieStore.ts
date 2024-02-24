interface Movie {
  id: number
  title: string
  year: number
  // Add any other relevant properties of a movie
}

import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movie', {
  state: () => ({
    movies: [] as Movie[]
  }),
  actions: {
    async fetchMovies() {
      try {
        const response = await fetch('http://localhost:3000/movies')
        if (!response.ok) {
          throw new Error('Failed to fetch movies')
        }
        const data: Movie[] = await response.json()
        console.log('Response:', data)
        this.movies = data
      } catch (error) {
        console.error('Fetch error:', error)
      }
    }
  }
})
