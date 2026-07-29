<template>
  <div class="flex flex-col p-6 bg-white w-fit">
    <Card class="w-[488px]">
      <template #title>
        <div class="text-lg font-medium">Anmelden</div>
      </template>
      <template #subtitle>
        <div class="text-sm font-normal mt-2">Melde dich mit deiner E-Mail-Adresse und Passwort an.</div>
      </template>
      <template #content>
        <div class="flex flex-col gap-3 mt-6">
          <div class="flex flex-col gap-1">
            <label for="email" class="text-sm">E-Mail-Adresse</label>
            <InputText id="email" v-model="email" class="w-full" />
          </div>
          <div class="flex flex-col gap-1">
            <label for="password" class="text-sm">Passwort</label>
            <Password id="password" v-model="password" toggleMask :feedback="false" inputClass="w-full" class="w-full" />
          </div>
          <div class="flex items-center gap-2 mt-1">
            <Checkbox id="rememberMe" v-model="rememberMe" binary />
            <label for="rememberMe" class="text-sm">Angemeldet bleiben</label>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex gap-2 mt-6">
          <Button label="Abbrechen" severity="secondary" rounded />
          <Button label="Anmelden" severity="primary" icon="pi pi-unlock" rounded />
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
const rememberMe = ref(false)
</script>