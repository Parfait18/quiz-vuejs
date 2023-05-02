<script setup>
import Result from '@/components/Result.vue'
import { useResultStore } from '@/stores/resultStore'
import { computed } from 'vue'

const resultStore = useResultStore()

let scores = resultStore.getScores

let points = 0;

let result  = scores.map((e) => {return e.correctAnswer == e.userAnswer ? 1 :0 } )
let goodPoints  = result.reduce((acc,element) => {return acc+element},0)

</script>
<template>
  <div class="grid place-items-center w-full p-2 bg-gray-50 h-screen">
    <div class="justity-items-center md:w-10/12 sm:w-full bg-white shadow-md rounded-md p-4">
      <div class="grid justify-between grid-cols-1 md:grid-cols-2">
        <div class="mx-auto w-full text-center pt-16">
          <h2 class="text-blue-500 text-2xl font-weight-bold font-weight-bolder">Quiz Game App</h2>
        </div>
        <div class="mx-auto">
          <img
            alt="welcome logo"
            class="logo"
            src="@/assets/quiz_logo.svg"
            width="100"
            height="100"
          />
        </div>
      </div>
      <hr class="mt-2" />
      <h2 class="text-blue-800 rounded-md bg-gray-50 text-center font-medium text-2xl p-4 mt-2">
        Résulat de votre quiz
      </h2>
 <h3 class="text-blue-800 rounded-md bg-blue-100 shadow-sm text-center sm:w-full md:w-2/4 mx-auto font-bold text-xl p-4 mt-2">
**	 Votre score est de :  {{goodPoints}} / {{scores.length}} **

      </h3>

      
      <Result v-for="(item, index) in scores" :key="index" :questionItem="item" class="mt-4" />
    </div>
  </div>
</template>
