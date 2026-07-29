<template>
  <div class="max-w-md mx-auto rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white">
    <div class="relative h-44 overflow-hidden bg-gradient-to-br from-black via-green-950 to-green-900">
      <img
        src="https://placehold.co/600x400/0a0f0a/2ecc71?text=+"
        alt="banner"
        class="w-full h-full object-cover opacity-80"
      />
    </div>

    <div class="p-6 flex flex-col gap-4">
      <div>
        <h2 class="text-xl font-semibold text-gray-800">Anmelden</h2>
        <p class="text-sm text-gray-500 mt-1">
          Melde dich mit deiner E-Mail-Adresse und Passwort an.
        </p>
      </div>

      <div class="flex flex-col gap-2">
        <label for="email" class="text-sm text-gray-700">E-Mail-Adresse</label>
        <InputText id="email" v-model="email" class="w-full" />
      </div>

      <div class="flex flex-col gap-2">
        <label for="password" class="text-sm text-gray-700">Passwort</label>
        <Password
          id="password"
          v-model="password"
          :feedback="false"
          toggleMask
          class="w-full"
          inputClass="w-full"
        />
      </div>

      <div class="flex items-center gap-2">
        <Checkbox v-model="stayLoggedIn" inputId="stayLoggedIn" binary />
        <label for="stayLoggedIn" class="text-sm text-gray-700">Angemeldet bleiben</label>
      </div>

      <div class="flex items-center gap-3 mt-2">
        <Button label="Save" severity="secondary" outlined />
        <Button label="Anmelden" icon="pi pi-lock" severity="success" class="rounded-full" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const email = ref('')
const password = ref('')
const stayLoggedIn = ref(false)
</script>