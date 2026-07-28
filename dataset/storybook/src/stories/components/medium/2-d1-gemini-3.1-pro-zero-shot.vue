<template>
  <div class="w-[512px] flex flex-col bg-white border border-[#e2e8f0]">
    <!-- Tablist -->
    <div class="flex items-stretch border-b border-[#e2e8f0]">
      <!-- Tab 1: Profil & Konto -->
      <div class="flex items-center gap-[7px] py-3.5 px-4 border-b-2 border-transparent text-[#10b981] font-bold text-sm">
        <i class="pi pi-user-edit"></i>
        <span>Profil & Konto</span>
      </div>
      <!-- Tab 2: Sicherheit & Präferenzen -->
      <div class="flex items-center gap-[7px] py-3.5 px-4 border-b-2 border-transparent text-black font-bold text-sm opacity-50">
        <i class="pi pi-shield"></i>
        <span>Sicherheit & Präferenzen</span>
      </div>
    </div>

    <!-- Tabpanel -->
    <div class="flex flex-col p-4 pt-3 pb-4">
      <div class="flex flex-col gap-5 py-3">
        <!-- Avatar Section -->
        <div class="relative w-fit">
          <Avatar label="P" size="xlarge" shape="square" class="w-[72px] h-[72px] bg-[#e2e8f0] text-3xl font-normal rounded-lg" />
          <Badge value="Edit" severity="success" class="absolute -top-2 -right-3" />
        </div>

        <!-- Username Input -->
        <div class="flex flex-col gap-2">
          <label class="text-[#334155] text-sm">Benutzername</label>
          <InputText v-model="username" placeholder="Benutzername eingeben" class="w-[216px] h-[33px] bg-[#f8fafc] border-[#e2e8f0]" />
        </div>

        <!-- Description Textarea -->
        <div class="flex flex-col gap-2">
          <Textarea v-model="description" autoResize rows="4" placeholder="Informationen über dich...." class="w-[216px] bg-[#f8fafc] border-[#e2e8f0] p-3 rounded-md" />
        </div>

        <!-- Visibility Toggle -->
        <div class="flex items-center gap-3">
          <ToggleSwitch v-model="publicVisibility" />
          <span class="text-sm">Öffentlich sichtbar</span>
        </div>

        <!-- Save Button -->
        <Button label="Speichern" class="w-[91px] h-[33px] bg-[#10b981] border-none" :disabled="!isFormValid" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Avatar from 'primevue/avatar';
import Badge from 'primevue/badge';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import ToggleSwitch from 'primevue/toggleswitch';
import Button from 'primevue/button';

const username = ref('');
const description = ref('');
const publicVisibility = ref(false);

const isFormValid = computed(() => {
  return username.value.trim().length > 0 || description.value.trim().length > 0;
});
</script>