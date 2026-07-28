<template>
  <div class="max-w-[488px] rounded-xl bg-white overflow-hidden border border-gray-200 shadow-sm">
    <!-- header -->
    <div class="w-full h-[172px] p-2 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950">
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="w-40 h-40 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-900 flex items-center justify-center shadow-2xl">
          <i class="pi pi-box text-5xl text-emerald-200"></i>
        </div>
      </div>
      <div class="absolute bottom-[-40px] right-[-20px] w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-900"></div>
    </div>

    <!-- body -->
    <div class="p-[17.5px] flex flex-col gap-6">
      <!-- caption -->
      <div class="flex flex-col gap-2">
        <h2 class="text-lg font-medium text-gray-900">Anmelden</h2>
        <p class="text-sm text-gray-500">Melde dich mit deiner E-Mail-Adresse und Passwort an.</p>
      </div>

      <!-- content -->
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
            inputClass="w-full"
            class="w-full"
          />
        </div>

        <div class="flex items-center gap-2">
          <Checkbox v-model="rememberMe" binary inputId="rememberMe" />
          <label for="rememberMe" class="text-sm text-gray-700">Angemeldet bleiben</label>
        </div>
      </div>

      <!-- footer -->
      <div class="flex gap-2">
        <Button label="Save" severity="secondary" rounded />
        <Button label="Anmelden" icon="pi pi-lock-open" severity="success" rounded />
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