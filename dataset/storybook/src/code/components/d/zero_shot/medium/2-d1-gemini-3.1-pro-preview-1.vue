<template>
  <div class="bg-white p-6 flex flex-col w-[560px]">
    <div class="flex flex-col w-full">
      <div class="flex flex-row w-full border-b border-gray-200">
        <div class="flex flex-row items-center gap-2 px-4 py-3.5 border-b-2 border-emerald-500 text-black">
          <i class="pi pi-user-edit text-sm"></i>
          <span class="font-bold text-sm font-inter">Profil & Konto</span>
        </div>
        <div class="flex flex-row items-center gap-2 px-4 py-3.5 border-b-2 border-transparent text-black">
          <i class="pi pi-shield text-sm"></i>
          <span class="font-bold text-sm font-inter">Sicherheit & Präferenzen</span>
        </div>
      </div>

      <div class="flex flex-col w-full pt-3 pb-4 px-4 bg-white">
        <div class="flex flex-col w-full py-3 gap-5">
          
          <div class="relative w-16 h-16">
            <div class="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-2xl text-gray-700">
              P
            </div>
            <div class="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs font-bold px-2 py-0.5 rounded-md">
              Edit
            </div>
          </div>

          <div class="flex flex-col gap-2 w-full">
            <label class="text-sm font-inter text-gray-700">Benutzername</label>
            <InputText v-model="username" placeholder="Benutzername eingeben" class="w-full" />
          </div>

          <div class="flex flex-col gap-2 w-full">
            <Textarea v-model="info" placeholder="Informationen über dich...." rows="4" class="w-full resize-none" />
          </div>

          <div class="flex flex-row items-center gap-3">
            <ToggleSwitch v-model="publiclyVisible" />
            <span class="text-sm font-inter text-gray-700">Öffentlich sichtbar</span>
          </div>

          <Button label="Speichern" class="w-fit bg-emerald-400 border-emerald-400 hover:bg-emerald-500 hover:border-emerald-500" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import ToggleSwitch from 'primevue/toggleswitch';
import Button from 'primevue/button';

const username = ref('');
const info = ref('');
const publiclyVisible = ref(false);
</script>