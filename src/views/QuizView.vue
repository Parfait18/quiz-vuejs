<script setup>
import Quiz from '@/components/Quiz.vue'
import Header from '@/components/Header.vue'
import { useQuizStore } from '@/stores/quizStore'
import router from '@/router/index'
import { onMounted } from 'vue'

const quizStore = useQuizStore()

onMounted(() => {
  if (quizStore.getEndStatus) {
    router.push('result')
  } else {
    router.push('quiz')
  }
})
</script>
<template>
  <div class="grid place-items-center w-full p-2 bg-gray-50 h-screen">
    <div class="justity-items-center md:w-10/12 sm:w-full bg-white shadow-md rounded-md p-4">
      <Header />
      <Quiz class="mt-2" />
    </div>
  </div>
</template>
