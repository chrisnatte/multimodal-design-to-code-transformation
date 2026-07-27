<template>
  <div class="flex flex-col gap-[7px] bg-white rounded-xl w-[488px] overflow-hidden shadow-sm">
    <div class="h-[172px] p-2.5 flex flex-col gap-2.5 w-full" />
    <div class="flex flex-col gap-6 p-[17.5px] rounded-md w-full">
      <div class="flex flex-col gap-[7px] w-full">
        <span class="text-[17.5px] font-medium text-gray-900">Anmelden</span>
        <span class="text-sm text-gray-600">Melde dich mit deiner E-Mail-Adresse und Passwort an.</span>
      </div>
      <div class="flex flex-col gap-3 w-full">
        <div class="flex flex-col gap-1 w-full">
          <span class="text-sm text-gray-700">E-Mail-Adresse</span>
          <InputText v-model="email" class="w-full" />
        </div>
        <div class="flex flex-col gap-1 w-full">
          <span class="text-sm text-gray-700">Passwort</span>
          <Password v-model="password" toggleMask :feedback="false" class="w-full" />
        </div>
        <label class="flex items-center gap-2 cursor-pointer select-none">
          <Checkbox v-model="rememberMe" :binary="true" />
          <span class="text-sm text-gray-700">Angemeldet bleiben</span>
        </label>
      </div>
      <div class="flex flex-row gap-[7px] items-center w-full">
        <Button label="Abbrechen" severity="secondary" rounded />
        <Button label="Anmelden" icon="pi pi-unlock" severity="primary" rounded />
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