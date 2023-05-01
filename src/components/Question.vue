<script setup>
import { useQuizStore } from '@/stores/quizStore'
import { computed } from 'vue'

const quizStore = useQuizStore()
defineProps({
  questionItem: {
    type: Object,
    required: true
  }
})

function nextStep() {
  quizStore.updateStep()
}
// const question = computed(() => {
//   return quizStore.getQuestions[quizStore.getCurrentIndex]
// })
</script>

<template>
  <div class="container space-y-3 p-2">
    <h2 class="text-blue-800 rounded-md bg-blue-50 font-medium text-xl p-2">
      {{ questionItem.question }}
    </h2>

    <div class="pl-2 flex items-center mb-4" v-for="(item, index) in questionItem.choices">
      <input
        id="country-option-1"
        type="radio"
        name="choice"
        :value="index"
        class="h-4 w-4 border-gray-300 focus:blue-300"
        aria-labelledby="country-option-1"
        aria-describedby="country-option-1"
        checked=""
      />
      <label for="country-option-1" class="text-md font-medium text-gray-700 ml-2 block">
        {{ item }}
      </label>
    </div>

    <button
      @click="nextStep"
      class="float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Suivant
    </button>
  </div>
</template>
