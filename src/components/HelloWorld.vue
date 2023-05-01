<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings space-y-8">
    <h2 class="text-blue-500 text-2xl font-weight-bold font-weight-bolder">{{ msg }}</h2>

    <button
      class="animate-pulse bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 text-md px-2 inline-flex rounded items-center"
    >
      <span> <router-link to="/quiz"> Cliquez pour commencer</router-link></span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 m-2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
