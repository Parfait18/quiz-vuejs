import { defineStore } from 'pinia'
import { useQuizStore } from '@/stores/quizStore'
import { useQuestionStore } from '@/stores/questionStore'

export const useResultStore = defineStore('result', {
  state: () => ({
    scores: [],
    quizStore: useQuizStore(),
    questionStore: useQuestionStore()
  }),
  persist: true,
  getters: {
    getScores: (state) => state.scores
  },
  actions: {
    updateScores(answer) {
      let currentIndex = this.quizStore.getCurrentIndex
      let question = this.quizStore.getQuestions[currentIndex]
      question.userAnswer = answer
      this.scores = [...this.scores, question]
    },
    clearData() {
      this.scores = []
      this.quizStore.clearData()
      this.questionStore.clearData()
    }
  }
})
