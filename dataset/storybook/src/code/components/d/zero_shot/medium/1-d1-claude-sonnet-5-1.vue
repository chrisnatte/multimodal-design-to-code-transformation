<template>
  <div class="p-6 flex justify-center bg-white">
    <div class="w-[488px] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
      <div class="w-full h-[172px] bg-gradient-to-br from-black via-green-950 to-black relative overflow-hidden">
        <div class="absolute -top-4 left-10 w-40 h-40 rounded-full bg-gradient-to-br from-green-600 to-black opacity-80"></div>
        <div class="absolute bottom-[-40px] right-0 w-24 h-24 rounded-full bg-gradient-to-br from-green-600 to-black opacity-80"></div>
      </div>

      <div class="p-6 flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <span class="text-lg font-medium text-gray-900">Anmelden</span>
          <span class="text-sm text-gray-500">Melde dich mit deiner E-Mail-Adresse und Passwort an.</span>
        </div>

        <div class="flex flex-col gap-3">
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

          <div class="flex items-center gap-2 mt-1">
            <Checkbox v-model="rememberMe" binary inputId="remember" />
            <label for="remember" class="text-sm text-gray-700">Angemeldet bleiben</label>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <Button label="Save" severity="secondary" rounded />
          <Button label="Anmelden" icon="pi pi-lock-open" severity="success" rounded />
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
const rememberMe = ref(false)
</script>