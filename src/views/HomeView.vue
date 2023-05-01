<template>
  <div class="grid place-items-center h-screen">
    <div class="grid justity-items-center grid-cols-2 md:grid-cols-2 w-full">
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
        <HelloWorld msg="Bienvenue sur notre platforme de quiz !!" />
      </div>
    </div>
  </div>
</template>
<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
</script>
