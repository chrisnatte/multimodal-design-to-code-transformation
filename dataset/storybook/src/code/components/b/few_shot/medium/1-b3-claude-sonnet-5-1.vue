<template>
  <div class="flex justify-center p-6">
    <Card
      class="w-[488px]"
      :pt="{
        body: 'flex flex-col !gap-6 !p-4',
        content: 'flex flex-col !gap-3',
        footer: '!mt-0',
      }"
    >
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
          <label for="stay-logged-in">Angemeldet bleiben</label>
        </div>
      </template>
      <template #footer>
        <div class="flex justify-end gap-2">
          <Button label="Abbrechen" severity="secondary" rounded />
          <Button label="Anmelden" icon="pi pi-lock-open" severity="primary" rounded />
        </div>
      </template>
    </Card>
  </div>
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