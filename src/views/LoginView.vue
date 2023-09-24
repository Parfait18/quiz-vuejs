<script setup>
import axios from 'axios'
import { ref } from 'vue'

const username = ref()
const password = ref()
const showPassword = ref(true)
const message = ref('')

const submit = async () => {
  await axios
    .post('https://dummyjson.com/auth/login', {
      username: username.value,
      password: password.value
    })
    .then((response) => {
      //   if (response.status == 400) {
      //     message.value = 'Identifiants incorrects !'
      //   }
    })
    .catch((e) => {
      if (e.response.status == 400) {
        message.value = 'Identifiants incorrects !'
      }
    })
}
</script>
<template>
  <div class="grid place-items-center h-screen bg-blue-800">
    <div class="grid justity-items-center grid-cols-1 md:grid-cols-1 w-full">
      <h2 class="text-center text-white text-4xl mb-8 tracking-[4rem] font-weigth-500">SEMO</h2>
      <div class="mx-auto bg-white rounded p-10 shadow-md">
        <h4 class="text-2xl text-gray-900 mb-8">Connexion</h4>

        <span v-if="message" class="text-red-500 text-xl"> {{ message }}</span>
        <form class="space-y-2 mt-4" enctype="multipart/form-data">
          <div>
            <label for="username" class="text-gray-600 text-xl"> Email ou nom d'utilisateur</label>
            <input
              required
              v-model="username"
              type="email"
              name="username"
              id="username"
              class="rounded border-2 p-2 border-gray-400 w-full"
            />
          </div>
          <br />
          <div>
            <label for="password" class="text-gray-600 text-xl">Mot de passe</label>
            <div class="flex justify-between border-2 rounded border-gray-400 p-1">
              <input
                required
                v-model="password"
                :type="showPassword ? 'password' : 'text'"
                name="password"
                id="password"
                class="outline-none border-0 focus:outline-0 p-2"
              />
              <svg
                v-show="showPassword"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 mt-2 hover:cursor-pointer text-gray-600"
                @click="showPassword = false"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <svg
                v-show="!showPassword"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 mt-2 hover:cursor-pointer text-gray-600"
                @click="showPassword = true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            </div>
          </div>
          <br />
          <button
            @click="submit"
            type="button"
            class="bg-green-500 text-xl text-white p-3 rounded w-full"
          >
            Connexion
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
