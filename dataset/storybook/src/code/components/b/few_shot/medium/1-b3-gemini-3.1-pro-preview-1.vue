<template>
  <div class="p-6">
    <Card class="w-full max-w-[488px] rounded-xl">
      <template #title>
        <div class="text-[17.5px] font-medium">Anmelden</div>
      </template>
      <template #subtitle>
        <div class="text-sm font-normal text-surface-500">
          Melde dich mit deiner E-Mail-Adresse und Passwort an.
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap-3 mt-2">
          <div class="flex flex-col gap-1">
            <label for="email" class="text-sm">E-Mail-Adresse</label>
            <InputText id="email" v-model="email" class="w-full" />
          </div>
          <div class="flex flex-col gap-1">
            <label for="password" class="text-sm">Passwort</label>
            <Password
              id="password"
              v-model="password"
              toggle-mask
              :feedback="false"
              input-class="w-full"
              class="w-full"
            />
          </div>
          <div class="flex items-center gap-2 mt-1">
            <Checkbox id="stayLoggedIn" v-model="stayLoggedIn" binary />
            <label for="stayLoggedIn" class="text-sm">Angemeldet bleiben</label>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex gap-2 mt-2">
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
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const email = ref('')
const password = ref('')
const stayLoggedIn = ref(false)
</script>