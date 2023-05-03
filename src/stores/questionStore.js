import { defineStore } from 'pinia'

export const useQuestionStore = defineStore('quesiton', {
  state: () => ({
    answer: null
  }),
  persist: true,
  getters: {
    getAnswer: (state) => state.answer
  },
  actions: {
    updateAnswer(newValue) {
      this.answer = newValue
    },
    clearData() {
      this.answer = null
    }
  }
})
