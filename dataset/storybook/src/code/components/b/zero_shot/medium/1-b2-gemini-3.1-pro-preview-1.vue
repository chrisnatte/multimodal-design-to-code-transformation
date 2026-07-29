<template>
  <div class="p-6 bg-white flex flex-col">
    <Card class="rounded-xl bg-white">
      <template #title>
        <div class="text-[17.5px] font-medium font-sans">Anmelden</div>
      </template>
      <template #subtitle>
        <div class="text-[14px] font-normal font-sans mt-2">Melde dich mit deiner E-Mail-Adresse und Passwort an.</div>
      </template>
      <template #content>
        <div class="flex flex-col gap-3 mt-6">
          <div class="flex flex-col gap-1">
            <label for="email" class="text-[14px] font-normal font-sans">E-Mail-Adresse</label>
            <InputText id="email" v-model="email" class="w-full" />
          </div>
          <div class="flex flex-col gap-1">
            <label for="password" class="text-[14px] font-normal font-sans">Passwort</label>
            <Password id="password" v-model="password" toggleMask :feedback="false" fluid />
          </div>
          <div class="flex items-center gap-2 mt-1">
            <Checkbox inputId="remember" v-model="remember" binary />
            <label for="remember" class="text-[14px] font-normal font-sans">Angemeldet bleiben</label>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex flex-row gap-[7px] mt-6">
          <Button label="Abbrechen" severity="secondary" rounded />
          <Button label="Anmelden" icon="pi pi-unlock" rounded />
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
const remember = ref(false);
</script>