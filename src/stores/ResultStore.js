import { defineStore } from 'pinia'

export const useResultStore = defineStore('result', {
  state: () => ({
    score: []
  }),
  persist: true,
  getters: {},
  actions: {}
})
