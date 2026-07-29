<template>
  <div class="p-8 max-w-xl font-sans bg-white">
    <!-- Navigation Tabs -->
    <div class="flex border-b border-gray-200 mb-8">
      <div class="flex items-center gap-2 px-4 py-3 text-[#00B87C] border-b-2 border-[#00B87C] font-semibold cursor-pointer">
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
      <Avatar 
        label="P" 
        class="w-20 h-20 text-3xl bg-[#E2E8F0] text-slate-700 rounded-xl font-light" 
      />
      <div class="absolute -top-2 -right-5 bg-[#00B87C] text-white text-xs font-bold px-2 py-1 rounded-md cursor-pointer shadow-sm">
        Edit
      </div>
    </div>

    <!-- Form Section -->
    <div class="flex flex-col gap-6">
      <!-- Username -->
      <div class="flex flex-col gap-2">
        <label class="text-slate-700 text-sm font-medium">Benutzername</label>
        <InputText 
          v-model="username" 
          placeholder="Benutzername eingeben" 
          class="bg-[#F8FAFC] border-slate-200 shadow-none focus:border-[#00B87C] focus:ring-0" 
        />
      </div>

      <!-- Bio -->
      <div class="flex flex-col gap-2">
        <Textarea 
          v-model="bio" 
          placeholder="Informationen über dich...." 
          rows="5" 
          class="bg-[#F8FAFC] border-slate-200 shadow-none resize-none focus:border-[#00B87C] focus:ring-0" 
        />
      </div>

      <!-- Public Toggle -->
      <div class="flex items-center gap-3 mt-2">
        <ToggleSwitch v-model="isPublic" />
        <span class="text-slate-700 text-sm">Öffentlich sichtbar</span>
      </div>

      <!-- Submit Button -->
      <Button 
        label="Speichern" 
        class="bg-[#4ADE80] hover:bg-[#22C55E] border-none text-white font-semibold px-6 py-2.5 rounded-md w-fit mt-4" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import ToggleSwitch from 'primevue/toggleswitch';
import Button from 'primevue/button';

const username = ref('');
const bio = ref('');
const isPublic = ref(false);
</script>