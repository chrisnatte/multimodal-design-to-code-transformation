<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-50 p-4">
    <div class="w-[488px] bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
      <div class="h-[172px] w-full bg-slate-900">
        <img
          src="https://placehold.co/488x172/0f172a/10b981?text=+"
          alt="Header"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="flex flex-col gap-6 p-4">
        <div class="flex flex-col gap-2">
          <h1 class="text-lg font-medium text-gray-900">Anmelden</h1>
          <p class="text-sm text-gray-500">Melde dich mit deiner E-Mail-Adresse und Passwort an.</p>
        </div>
        <div class="flex flex-col gap-3">
          <div class="flex flex-col gap-1">
            <label for="email" class="text-sm text-gray-700">E-Mail-Adresse</label>
            <InputText id="email" v-model="email" type="email" class="w-full" />
          </div>
          <div class="flex flex-col gap-1">
            <label for="password" class="text-sm text-gray-700">Passwort</label>
            <Password
              id="password"
              v-model="password"
              toggleMask
              :feedback="false"
              class="w-full"
              inputClass="w-full"
            />
          </div>
          <div class="flex items-center gap-2 mt-1">
            <Checkbox v-model="stayLoggedIn" binary inputId="stayLoggedIn" />
            <label for="stayLoggedIn" class="text-sm text-gray-700 cursor-pointer select-none">Angemeldet bleiben</label>
          </div>
        </div>
        <div class="flex gap-2">
          <Button label="Save" severity="secondary" rounded />
          <Button label="Anmelden" icon="pi pi-lock" severity="success" rounded />
        </div>
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