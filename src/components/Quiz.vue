<!-- Quiz component to display quiz while it's not finished 
and load question step by step-->
<script setup>
import Question from '@/components/Question.vue'
import { useQuizStore } from '@/stores/quizStore'
import { computed } from 'vue'
import router from '@/router/index'

const quizStore = useQuizStore()

let currentIndex = computed(() => {
  return quizStore.getCurrentIndex
})
function showResult() {
  router.push('result')
}
</script>

<template>
  <div>
    <div v-if="quizStore.getEndStatus" class="text-center space-y-4 p-4">
      <h2 class="text-blue-800 rounded-md bg-blue-50 font-medium text-2xl p-4">Quiz Terminé</h2>
      <button
        @click="showResult"
        class="text-center mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Voir mes résultats
      </button>
    </div>
    <Question v-else :questionItem="quizStore.getQuestions[currentIndex]" />
  </div>
</template>
