<template>
  <Card class="w-[488px]">
    <template #title>Anmelden</template>
    <template #subtitle>Melde dich mit deiner E-Mail-Adresse und Passwort an.</template>
    <template #content>
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-3">
          <div class="flex flex-col gap-1">
            <label for="email">E-Mail-Adresse</label>
            <InputText id="email" v-model="email" type="email" fluid />
          </div>
          <div class="flex flex-col gap-1">
            <label for="password">Passwort</label>
            <Password id="password" v-model="password" toggleMask :feedback="false" class="w-full" inputClass="w-full" />
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="rememberMe" binary inputId="remember" />
            <label for="remember">Angemeldet bleiben</label>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex gap-2">
        <Button label="Abbrechen" severity="secondary" rounded />
        <Button label="Anmelden" icon="pi pi-unlock" rounded />
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Checkbox from 'primevue/checkbox';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';

const email = ref('');
const password = ref('');
const rememberMe = ref(false);
</script>