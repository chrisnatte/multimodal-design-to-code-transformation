<template>
  <Card
    :pt="{
      root: 'w-lg overflow-hidden',
      body: 'p-0 !gap-0',
      caption: 'gap-2 px-6 pt-6',
      content: 'flex flex-col gap-4 px-6',
      footer: 'flex gap-2 px-6 pb-6 mt-6',
    }"
  >
    <template #header>
      <div
        class="h-44 bg-gradient-to-br from-black via-emerald-950 to-emerald-900 flex items-center justify-center overflow-hidden relative"
      >
        <div
          class="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-700 to-emerald-950 flex items-center justify-center"
        >
          <i class="pi pi-shield text-emerald-300 text-5xl" />
        </div>
      </div>
    </template>
    <template #title>
      <span class="text-lg font-medium">Anmelden</span>
    </template>
    <template #subtitle>
      <span class="text-sm">Melde dich mit deiner E-Mail-Adresse und Passwort an.</span>
    </template>
    <template #content>
      <div class="flex flex-col gap-2">
        <label for="email-input" class="text-sm">E-Mail-Adresse</label>
        <InputText v-model="email" type="email" input-id="email-input" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="password-input" class="text-sm">Passwort</label>
        <Password v-model="password" input-id="password-input" toggle-mask :feedback="false" input-class="w-full" />
      </div>
      <div class="flex items-center gap-2">
        <Checkbox v-model="rememberMe" input-id="remember-me" binary />
        <label for="remember-me" class="text-sm">Angemeldet bleiben</label>
      </div>
    </template>
    <template #footer>
      <Button label="Abbrechen" severity="secondary" rounded />
      <Button label="Anmelden" icon="pi pi-lock-open" severity="primary" rounded />
    </template>
  </Card>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Card from 'primevue/card'
  import Button from 'primevue/button'
  import InputText from 'primevue/inputtext'
  import Password from 'primevue/password'
  import Checkbox from 'primevue/checkbox'

  const email = ref('')
  const password = ref('')
  const rememberMe = ref(false)
</script>