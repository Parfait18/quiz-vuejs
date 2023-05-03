<script setup>
import Result from '@/components/Result.vue'
import Header from '@/components/Header.vue'
import { useResultStore } from '@/stores/resultStore'
import { useQuizStore } from '@/stores/quizStore'
import router from '@/router/index'
import { onMounted } from 'vue'

const quizStore = useQuizStore()
const resultStore = useResultStore()

let scores = resultStore.getScores
let result = scores.map((e) => {
  return e.correctAnswer == e.userAnswer ? 1 : 0
})
let goodPoints = result.reduce((acc, element) => {
  return acc + element
}, 0)

function restartQuiz() {
  resultStore.clearData()
  router.push('quiz')
}

onMounted(() => {
  if (quizStore.getEndStatus) {
    router.push('result')
  } else {
    router.push('quiz')
  }
})
</script>
<template>
  <div class="grid place-items-center w-full p-2 bg-gray-50">
    <div class="justity-items-center md:w-10/12 sm:w-full bg-white shadow-md rounded-md p-4">
      <Header />
      <hr class="mt-2" />
      <h2 class="text-blue-800 rounded-md bg-gray-50 text-center font-small text-xl p-4 m-2">
        Résulat de votre quiz
      </h2>
      <br />
      <h3
        class="text-blue-800 rounded-md bg-blue-100 shadow-sm text-center sm:w-full md:w-2/4 mx-auto font-bold text-xl p-4 mt-2"
      >
        Votre Score est de : {{ goodPoints }} / {{ scores.length }}
      </h3>
      <div>
        <button
          @click="restartQuiz"
          class="animate-bounce bg-orange-500 hover:bg-orange-700 m-2 text-white font-bold py-2 px-4 rounded"
        >
          Recommencer
        </button>
      </div>
      <Result v-for="(item, index) in scores" :key="index" :questionItem="item" class="mt-4" />
    </div>
  </div>
</template>
