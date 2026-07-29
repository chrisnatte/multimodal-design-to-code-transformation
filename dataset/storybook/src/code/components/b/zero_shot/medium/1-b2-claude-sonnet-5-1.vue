<template>
  <div class="flex justify-center p-6 bg-white">
    <Card class="w-[488px] rounded-xl">
      <template #title>Anmelden</template>
      <template #subtitle>Melde dich mit deiner E-Mail-Adresse und Passwort an.</template>
      <template #content>
        <div class="flex flex-col gap-3">
          <div class="flex flex-col gap-3">
            <label for="email" class="text-sm">E-Mail-Adresse</label>
            <InputText id="email" v-model="email" class="w-full" />
          </div>
          <div class="flex flex-col gap-3">
            <label for="password" class="text-sm">Passwort</label>
            <Password id="password" v-model="password" toggleMask :feedback="false" class="w-full" inputClass="w-full" />
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="rememberMe" binary inputId="rememberMe" />
            <label for="rememberMe" class="text-sm">Angemeldet bleiben</label>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex gap-2">
          <Button label="Abbrechen" severity="secondary" rounded />
          <Button label="Anmelden" icon="pi pi-unlock" rounded @click="onLogin" />
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

const onLogin = () => {
  // handle login
};
</script>