<template>
  <div class="flex items-center justify-center bg-white p-6">
    <Card class="w-full max-w-md rounded-xl" :pt="{ body: 'gap-4', content: 'flex flex-col gap-6' }">
      <template #title>Anmelden</template>
      <template #subtitle>Melde dich mit deiner E-Mail-Adresse und Passwort an.</template>
      <template #content>
        <div class="flex flex-col gap-3">
          <div class="flex flex-col gap-2">
            <label for="email-input" class="text-sm">E-Mail-Adresse</label>
            <InputText v-model="email" type="email" input-id="email-input" class="w-full" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="password-input" class="text-sm">Passwort</label>
            <Password v-model="password" input-id="password-input" toggle-mask :feedback="false" input-class="w-full" class="w-full" />
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="staySignedIn" input-id="stay-signed-in" binary />
            <label for="stay-signed-in" class="text-sm">Angemeldet bleiben</label>
          </div>
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
  import InputText from 'primevue/inputtext'
  import Password from 'primevue/password'
  import Checkbox from 'primevue/checkbox'
  import Button from 'primevue/button'

  const email = ref('')
  const password = ref('')
  const staySignedIn = ref(false)
</script>