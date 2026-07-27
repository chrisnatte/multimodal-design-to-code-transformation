<template>
  <div class="flex flex-col justify-between p-6 gap-6 bg-[#e2e8f0] w-[240px] h-[512px]">
    <div class="flex flex-col items-center gap-6 w-full">
      <span class="text-2xl font-normal font-sans text-gray-900">Emails</span>
      <div class="flex flex-col gap-4 w-full">
        <Button 
          label="Postfach" 
          icon="pi pi-inbox" 
          severity="secondary" 
          outlined 
          class="w-full" 
        />
        <Button 
          label="Ordner" 
          icon="pi pi-folder" 
          severity="secondary" 
          outlined 
          class="w-full" 
        />
        <Button 
          label="Konto" 
          icon="pi pi-user" 
          severity="secondary" 
          outlined 
          class="w-full" 
        />
      </div>
    </div>
    
    <div class="flex flex-col items-center w-full">
      <Divider class="w-full m-0 mb-4" />
      <div class="flex flex-row items-center gap-4">
        <Avatar 
          label="B" 
          size="large" 
          shape="circle" 
          class="bg-[#64748b] text-white"
        />
        <span class="text-base font-normal font-sans text-gray-900">Benutzername</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Avatar from 'primevue/avatar';
</script>