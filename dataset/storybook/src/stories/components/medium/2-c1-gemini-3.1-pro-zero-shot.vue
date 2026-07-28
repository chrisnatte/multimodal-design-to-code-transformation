<template>
  <div class="p-8 max-w-lg font-sans bg-white">
    <!-- Navigation Tabs -->
    <div class="flex border-b border-gray-200 mb-8">
      <div class="flex items-center gap-2 px-4 py-3 text-emerald-500 border-b-2 border-emerald-500 font-semibold cursor-pointer">
        <i class="pi pi-user-edit"></i>
        <span>Profil & Konto</span>
      </div>
      <div class="flex items-center gap-2 px-4 py-3 text-slate-500 font-semibold cursor-pointer hover:text-slate-700">
        <i class="pi pi-shield"></i>
        <span>Sicherheit & Präferenzen</span>
      </div>
    </div>

    <!-- Avatar Section -->
    <div class="relative inline-block mb-8 ml-2">
      <Avatar label="P" class="w-16 h-16 text-3xl bg-[#e2e8f0] text-slate-700 rounded-xl font-normal" />
      <Badge value="Edit" class="absolute -top-2 -right-5 !bg-[#00c48c] !text-white !text-[11px] !px-2 !py-0.5 !rounded-md !border-none !font-semibold" />
    </div>

    <!-- Form Section -->
    <div class="flex flex-col gap-6">
      <!-- Username Input -->
      <div class="flex flex-col gap-2">
        <label for="username" class="text-slate-700 font-medium">Benutzername</label>
        <InputText 
          id="username" 
          v-model="username" 
          placeholder="Benutzername eingeben" 
          class="w-full bg-[#f8fafc] border-gray-300 rounded-lg p-3 text-slate-700 placeholder:text-slate-400 focus:ring-emerald-500 focus:border-emerald-500" 
        />
      </div>

      <!-- Bio Textarea -->
      <div class="flex flex-col gap-2">
        <Textarea 
          v-model="bio" 
          placeholder="Informationen über dich...." 
          rows="4" 
          class="w-full bg-[#f8fafc] border-gray-300 rounded-lg p-3 text-slate-700 placeholder:text-slate-400 resize-none focus:ring-emerald-500 focus:border-emerald-500" 
        />
      </div>

      <!-- Public Toggle -->
      <div class="flex items-center gap-3 mt-2">
        <ToggleSwitch v-model="isPublic" inputId="public-switch" />
        <label for="public-switch" class="text-slate-700 font-medium cursor-pointer">Öffentlich sichtbar</label>
      </div>

      <!-- Submit Button -->
      <Button 
        label="Speichern" 
        class="!bg-[#58d6a5] hover:!bg-[#4bc294] !text-white !border-none !rounded-lg !px-6 !py-2.5 w-fit !font-semibold mt-2" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Badge from 'primevue/badge';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import ToggleSwitch from 'primevue/toggleswitch';
import Button from 'primevue/button';

const username = ref('');
const bio = ref('');
const isPublic = ref(false);
</script>