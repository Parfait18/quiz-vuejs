<!-- component Result to show quiz result for user and he can restart -->
<script setup>
defineProps({
  questionItem: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="container space-y-3 p-2">
    <h2 class="text-blue-800 rounded-md bg-blue-50 font-medium text-xl p-2">
      {{ questionItem.question }}
    </h2>

    <div
      :class="
        index == questionItem.correctAnswer
          ? 'bg-green-200 text-green-500 p-2 pl-2 flex items-center rounded-sm'
          : 'pl-2 flex items-center mb-4'
      "
      :key="index"
      v-for="(item, index) in questionItem.choices"
    >
      <input
        :key="questionItem.id"
        type="radio"
        :name="questionItem.id"
        :value="questionItem.userAnswer"
        class="h-4 w-4 border-gray-300 focus:blue-300"
        aria-labelledby="country-option-1"
        aria-describedby="country-option-1"
        :disabled="true"
        :checked="index == questionItem.userAnswer"
      />
      <label
        :class="
          index == questionItem.correctAnswer
            ? 'text-md font-medium text-green-800 ml-2 block'
            : 'text-md font-medium text-gray-700 ml-2 block'
        "
      >
        {{ item }}
      </label>
    </div>
  </div>
</template>
<script></script>
