<script setup>
import { useQuizStore } from '@/stores/quizStore'
import { useQuestionStore } from '@/stores/questionStore'
import { useResultStore } from '@/stores/resultStore'
import { ref, watch } from 'vue'

const quizStore = useQuizStore()
const questionStore = useQuestionStore()
const resultStore = useResultStore()
let choice = ref(null)

defineProps({
  questionItem: {
    type: Object,
    required: true
  }
})

function nextStep() {
  questionStore.updateAnswer(null)
  resultStore.updateScores(choice.value)
  quizStore.updateStep()
  choice = ref(null)
}

watch(choice, (newValue, oldValue) => {
  questionStore.updateAnswer(newValue)
})
</script>

<template>
  <div class="container space-y-3 p-2">
    <p class="italic text-blue-800 text-sm p-2">
      ** Veuillez choisir une réponse de votre choix avant de continuer**
    </p>
    <hr class="mt-2" />
    <h2 class="text-blue-800 rounded-md bg-blue-50 font-medium text-xl p-2">
      {{ questionItem.question }}
    </h2>

    <div
      class="pl-2 flex items-center mb-4"
      :key="index"
      v-for="(item, index) in questionItem.choices"
    >
      <input
        :key="index"
        :id="index"
        type="radio"
        name="choice"
        :value="index"
        v-model="choice"
        class="h-4 w-4 border-gray-300 focus:blue-300"
        aria-labelledby="country-option-1"
        aria-describedby="country-option-1"
      />
      <label :for="index" class="text-md font-medium text-gray-700 ml-2 block">
        {{ item }}
      </label>
    </div>
    <button
      :disabled="choice == null"
      @click="nextStep"
      class="float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Suivant
    </button>
  </div>
</template>
