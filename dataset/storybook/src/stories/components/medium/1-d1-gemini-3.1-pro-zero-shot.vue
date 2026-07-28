<template>
  <div class="w-[488px] bg-white rounded-xl flex flex-col items-stretch overflow-hidden border border-surface-200 shadow-sm">
    <div class="h-[172px] bg-cover bg-center" style="background-image: url('https://bg-image-placeholder.invalid'); /* Placeholder for specific bg image in screenshot */ background-color: #0b1a13;">
      <!-- Mocking the decorative header image from screenshot -->
      <div class="w-full h-full relative" style="overflow: hidden; background: linear-gradient(135deg, rgba(8,30,22,1) 0%, rgba(13,43,30,1) 100%);">
        <div class="absolute w-[180px] h-[180px] rounded-full border-4 border-emerald-900/40 bg-emerald-800/20 top-[-20px] left-[60px] flex items-center justify-center backdrop-blur-sm">
           <i class="pi pi-shield text-emerald-400 text-6xl shadow-emerald-500/50"></i>
        </div>
         <div class="absolute w-[100px] h-[100px] rounded-full border-4 border-emerald-900/40 bg-emerald-800/20 bottom-[-40px] right-[100px] flex items-center justify-center backdrop-blur-sm">
           <i class="pi pi-shield text-emerald-400 text-3xl shadow-emerald-500/50"></i>
        </div>
      </div>
    </div>
    
    <div class="p-[17.5px] flex flex-col gap-6 rounded-md">
      <div class="flex flex-col gap-[7px] w-full">
        <span class="text-surface-900 font-medium text-[17.5px] font-sans">Anmelden</span>
        <span class="text-surface-500 font-normal text-[14px] font-sans">Melde dich mit deiner E-Mail-Adresse und Passwort an.</span>
      </div>

      <div class="flex flex-col gap-3 w-full">
        <div class="flex flex-col gap-2 w-full">
          <label for="email" class="text-surface-900 font-normal text-[14px] font-sans">E-Mail-Adresse</label>
          <InputText id="email" v-model="email" size="small" class="w-full h-[33px]" />
        </div>

        <div class="flex flex-col gap-2 w-full">
          <label for="password" class="text-surface-900 font-normal text-[14px] font-sans">Passwort</label>
          <Password id="password" v-model="password" :toggleMask="true" :feedback="false" inputClass="w-full h-[33px]" class="w-full" />
        </div>

        <div class="flex items-center gap-2 mt-1">
          <Checkbox v-model="stayLoggedIn" inputId="stayLoggedIn" :binary="true" />
          <label for="stayLoggedIn" class="text-surface-700 font-normal text-[14px] font-sans">Angemeldet bleiben</label>
        </div>
      </div>

      <div class="flex flex-row gap-[7px] w-full mt-1">
        <Button label="Save" severity="secondary" rounded class="!bg-[#f1f5f9] !text-surface-700 !border-none !h-[33px] !px-4" style="background-color: #f1f5f9;" />
        <Button label="Anmelden" icon="pi pi-lock" severity="success" rounded class="!bg-[#10b981] !border-[#10b981] !text-white !h-[33px] !px-4" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

const email = ref('');
const password = ref('');
const stayLoggedIn = ref(false);
</script>