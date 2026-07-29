<template>
  <Card
    :pt="{
      root: 'w-lg rounded-xl overflow-hidden p-0',
      body: 'p-0 gap-0',
      caption: 'px-6 pt-6 gap-2',
      content: 'flex flex-col gap-4 px-6 py-4',
      footer: 'flex gap-2 px-6 pb-6 pt-2',
    }"
  >
    <template #header>
      <div
        class="flex h-44 w-full items-center justify-center overflow-hidden bg-gradient-to-br from-black via-emerald-950 to-emerald-800"
      >
        <i class="pi pi-box text-6xl text-emerald-400" />
      </div>
    </template>
    <template #title>Anmelden</template>
    <template #subtitle>Melde dich mit deiner E-Mail-Adresse und Passwort an.</template>
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
        <Checkbox v-model="stayLoggedIn" input-id="stay-logged-in" binary />
        <label for="stay-logged-in" class="text-sm">Angemeldet bleiben</label>
      </div>
    </template>
    <template #footer>
      <Button label="Save" severity="secondary" rounded />
      <Button label="Anmelden" severity="primary" icon="pi pi-lock-open" rounded />
    </template>
  </Card>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Card from 'primevue/card'
  import Button from 'primevue/button'
  import Password from 'primevue/password'
  import InputText from 'primevue/inputtext'
  import Checkbox from 'primevue/checkbox'

  const email = ref('')
  const password = ref('')
  const stayLoggedIn = ref(false)
</script>