<template>
  <Card
    :pt="{
      root: 'w-fit overflow-hidden',
      body: 'flex flex-col !gap-6',
      content: 'flex flex-col gap-3',
      footer: 'flex items-center gap-2',
    }"
  >
    <template #header>
      <img src="/images/primevue.png" alt="primevue" />
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
        <Password v-model="password" input-id="password-input" toggle-mask input-class="w-full" />
      </div>
      <div class="flex items-center gap-2">
        <Checkbox v-model="stayLoggedIn" input-id="stay-logged-in" binary />
        <label for="stay-logged-in">Angemeldet bleiben</label>
      </div>
    </template>
    <template #footer>
      <Button label="Abbrechen" severity="secondary" rounded />
      <Button label="Anmelden" icon="pi pi-unlock" severity="primary" rounded />
    </template>
  </Card>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Card from 'primevue/card'
  import Password from 'primevue/password'
  import InputText from 'primevue/inputtext'
  import Checkbox from 'primevue/checkbox'
  import Button from 'primevue/button'

  const email = ref('')
  const password = ref('')
  const stayLoggedIn = ref(false)
</script>
