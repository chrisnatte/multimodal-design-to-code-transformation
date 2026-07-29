<template>
  <div class="flex w-full justify-center p-6">
    <Card class="w-full max-w-lg">
      <template #title>Anmelden</template>
      <template #subtitle>Melde dich mit deiner E-Mail-Adresse und Passwort an.</template>
      <template #content>
        <div class="flex flex-col gap-3">
          <div class="flex flex-col gap-2">
            <label for="email-input">E-Mail-Adresse</label>
            <InputText v-model="email" type="email" input-id="email-input" fluid />
          </div>
          <div class="flex flex-col gap-2">
            <label for="password-input">Passwort</label>
            <Password v-model="password" input-id="password-input" toggle-mask :feedback="false" fluid />
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="staySignedIn" input-id="stay-signed-in" binary />
            <label for="stay-signed-in">Angemeldet bleiben</label>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex justify-end gap-2">
          <Button label="Abbrechen" severity="secondary" rounded />
          <Button label="Anmelden" icon="pi pi-unlock" severity="primary" rounded />
        </div>
      </template>
    </Card>
  </div>
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
  const staySignedIn = ref(false)
</script>