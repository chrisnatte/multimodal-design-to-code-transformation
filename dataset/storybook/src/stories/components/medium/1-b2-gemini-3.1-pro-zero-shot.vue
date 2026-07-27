<template>
  <Card class="w-[488px] rounded-xl bg-white shadow-none">
    <template #title>
      <span class="text-[17.5px] font-medium font-['Inter'] leading-tight">Anmelden</span>
    </template>
    <template #subtitle>
      <span class="text-[14px] font-normal font-['Inter'] leading-tight">Melde dich mit deiner E-Mail-Adresse und Passwort an.</span>
    </template>
    <template #content>
      <div class="flex flex-col gap-3 mt-2">
        <div class="flex flex-col gap-1">
          <label for="email" class="text-[14px] font-normal font-['Inter']">E-Mail-Adresse</label>
          <InputText id="email" v-model="email" class="w-full" />
        </div>
        <div class="flex flex-col gap-1">
          <label for="password" class="text-[14px] font-normal font-['Inter']">Passwort</label>
          <Password id="password" v-model="password" toggleMask :feedback="false" fluid />
        </div>
        <div class="flex items-center gap-2 mt-1">
          <Checkbox inputId="remember" v-model="remember" binary />
          <label for="remember" class="text-[14px] font-normal font-['Inter']">Angemeldet bleiben</label>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex flex-row gap-[7px] mt-2">
        <Button label="Abbrechen" severity="secondary" rounded />
        <Button label="Anmelden" icon="pi pi-unlock" rounded />
      </div>
    </template>
  </Card>
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