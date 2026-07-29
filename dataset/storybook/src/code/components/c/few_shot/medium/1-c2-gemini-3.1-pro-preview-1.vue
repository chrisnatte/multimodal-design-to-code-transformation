<template>
  <Card class="w-full max-w-md overflow-hidden rounded-2xl border border-surface-200 shadow-sm">
    <template #header>
      <div class="relative flex h-48 w-full items-center justify-center overflow-hidden bg-slate-900">
        <div class="absolute h-48 w-48 rounded-full bg-green-500/20 blur-3xl"></div>
        <div class="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-green-500/20 blur-2xl"></div>
      </div>
    </template>
    <template #title>
      <div class="text-xl font-semibold text-surface-900">Anmelden</div>
    </template>
    <template #subtitle>
      <div class="mt-1 text-sm text-surface-500">Melde dich mit deiner E-Mail-Adresse und Passwort an.</div>
    </template>
    <template #content>
      <div class="mt-4 flex flex-col gap-5">
        <div class="flex flex-col gap-2">
          <label for="email" class="text-sm text-surface-700">E-Mail-Adresse</label>
          <InputText id="email" v-model="email" fluid />
        </div>
        <div class="flex flex-col gap-2">
          <label for="password" class="text-sm text-surface-700">Passwort</label>
          <Password id="password" v-model="password" toggle-mask :feedback="false" fluid />
        </div>
        <div class="flex items-center gap-2">
          <Checkbox id="remember" v-model="rememberMe" binary />
          <label for="remember" class="text-sm text-surface-700">Angemeldet bleiben</label>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="mt-2 flex gap-3">
        <Button
          label="Save"
          severity="secondary"
          variant="text"
          rounded
          class="bg-surface-100 px-6 text-surface-700 hover:bg-surface-200"
        />
        <Button label="Anmelden" icon="pi pi-lock" severity="success" rounded class="px-6" />
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
  const rememberMe = ref(false)
</script>