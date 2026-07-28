<template>
  <div class="flex justify-center items-center min-h-screen p-4">
    <Card class="w-full max-w-md overflow-hidden">
      <template #header>
        <img src="/images/login-header.png" alt="Login Header" class="w-full h-44 object-cover" />
      </template>
      <template #title>Anmelden</template>
      <template #subtitle>Melde dich mit deiner E-Mail-Adresse und Passwort an.</template>
      <template #content>
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <label for="email">E-Mail-Adresse</label>
            <InputText id="email" v-model="email" type="email" fluid />
          </div>
          <div class="flex flex-col gap-2">
            <label for="password">Passwort</label>
            <Password id="password" v-model="password" :feedback="false" toggleMask fluid inputClass="w-full" />
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="rememberMe" binary inputId="remember" />
            <label for="remember">Angemeldet bleiben</label>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex gap-2">
          <Button label="Save" severity="secondary" />
          <Button label="Anmelden" icon="pi pi-lock" severity="success" rounded />
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