<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
</script>
<template>
  <div class="grid place-items-center h-screen">
    <div class="grid justity-items-center grid-cols-1 md:grid-cols-2 w-full">
      <div class="mx-auto">
        <img
          alt="welcome logo"
          class="logo"
          src="@/assets/logo_home.svg"
          width="300"
          height="300"
        />
      </div>
      <div class="mx-auto">
        <HelloWorld msg="Bienvenue sur notre platforme" />
      </div>
    </div>
    <h2 class="text-blue-800 text-2xl font-weight-bold font-weight-bolder mb-16">
      Designed by Parfait AHOUANTO
    </h2>
  </div>
</template>
