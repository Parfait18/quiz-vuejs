import { defineStore } from 'pinia'
import data from '../data/questions.json'

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    questions: data.questions,
    currentIndex: 0,
    endStatus: false
  }),
  persist: true,
  getters: {
    getQuestions: (state) => state.questions,
    getCurrentIndex: (state) => state.currentIndex,
    getEndStatus: (state) => state.endStatus
  },
  actions: {
    setCurrentIndex(payload) {
      this.currentIndex = payload
    },
    setEndStatus(payload) {
      this.endStatus = payload
    },
    updateStep() {
      if (this.currentIndex != this.getQuestions.length - 1) {
        this.currentIndex += 1
      } else {
        this.endStatus = true
      }
    },
    clearData() {
      this.currentIndex = 0
      this.endStatus = false
    }
  }
})
