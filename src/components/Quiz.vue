<script setup>
import Question from '@/components/Question.vue'
import { useQuizStore } from '@/stores/quizStore'
import { computed } from 'vue'

const quizStore = useQuizStore()

let currentIndex = computed(() => {
  return quizStore.getCurrentIndex
})
</script>

<template>
  <div>
    <Question :questionItem="quizStore.getQuestions[currentIndex]" />
  </div>
</template>
