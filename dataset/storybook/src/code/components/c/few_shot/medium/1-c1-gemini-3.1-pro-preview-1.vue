<template>
  <Card class="w-full max-w-[420px] overflow-hidden border border-surface-200 shadow-sm">
    <template #header>
      <div class="relative flex h-48 w-full items-center justify-center overflow-hidden bg-slate-900">
        <div class="absolute h-40 w-40 rounded-full bg-emerald-500/20 blur-2xl"></div>
        <i class="pi pi-shield relative z-10 text-6xl text-emerald-500"></i>
      </div>
    </template>
    <template #title>
      <span class="text-xl font-semibold text-surface-900">Anmelden</span>
    </template>
    <template #subtitle>
      <span class="text-sm text-surface-500">Melde dich mit deiner E-Mail-Adresse und Passwort an.</span>
    </template>
    <template #content>
      <div class="mt-2 flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <label for="email" class="text-sm text-surface-700">E-Mail-Adresse</label>
          <InputText id="email" v-model="email" class="w-full" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="password" class="text-sm text-surface-700">Passwort</label>
          <Password
            id="password"
            v-model="password"
            toggle-mask
            :feedback="false"
            input-class="w-full"
            class="w-full"
          />
        </div>
        <div class="mt-1 flex items-center gap-2">
          <Checkbox id="remember" v-model="remember" binary />
          <label for="remember" class="text-sm text-surface-700">Angemeldet bleiben</label>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="mt-2 flex gap-3">
        <Button label="Save" severity="secondary" />
        <Button label="Anmelden" icon="pi pi-lock" severity="primary" />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const email = ref('')
const password = ref('')
const remember = ref(false)
</script>