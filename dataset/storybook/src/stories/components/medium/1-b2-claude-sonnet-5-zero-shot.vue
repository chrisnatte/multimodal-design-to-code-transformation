<template>
  <div class="flex flex-col p-3 gap-2 bg-white rounded-xl w-[488px]">
    <Card class="w-full">
      <template #title>Anmelden</template>
      <template #subtitle>Melde dich mit deiner E-Mail-Adresse und Passwort an.</template>
      <template #content>
        <div class="flex flex-col gap-3">
          <div class="flex flex-col gap-2">
            <label for="email">E-Mail-Adresse</label>
            <InputText id="email" v-model="email" class="w-full" />
          </div>

          <div class="flex flex-col gap-2">
            <label for="password">Passwort</label>
            <Password
              id="password"
              v-model="password"
              :feedback="false"
              toggleMask
              inputClass="w-full"
              class="w-full"
            />
          </div>

          <div class="flex items-center gap-2">
            <Checkbox v-model="rememberMe" binary inputId="rememberMe" />
            <label for="rememberMe">Angemeldet bleiben</label>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex gap-2">
          <Button label="Abbrechen" severity="secondary" rounded class="w-full" />
          <Button label="Anmelden" icon="pi pi-lock-open" severity="primary" rounded class="w-full" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

const email = ref('');
const password = ref('');
const rememberMe = ref(false);
</script>