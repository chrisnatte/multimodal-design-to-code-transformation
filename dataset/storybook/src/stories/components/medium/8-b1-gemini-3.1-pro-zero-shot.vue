<template>
  <div class="flex flex-col justify-between items-center p-6 bg-[#e2e8f0] w-[240px] h-[512px]">
    <div class="flex flex-col items-center gap-6 w-full">
      <span class="text-2xl font-normal font-sans text-gray-900">Emails</span>
      
      <div class="flex flex-col gap-4 w-full">
        <Button 
          label="Postfach" 
          icon="pi pi-inbox" 
          severity="secondary" 
          outlined 
          class="w-full justify-start" 
        />
        <Button 
          label="Ordner" 
          icon="pi pi-folder" 
          severity="secondary" 
          outlined 
          class="w-full justify-start" 
        />
        <Button 
          label="Konto" 
          icon="pi pi-user" 
          severity="secondary" 
          outlined 
          class="w-full justify-start" 
        />
      </div>
    </div>

    <div class="flex flex-col items-center w-full gap-4">
      <Divider class="w-full !my-0" />
      
      <div class="flex flex-row items-center gap-4 w-full justify-center">
        <Avatar 
          label="B" 
          size="large" 
          shape="circle" 
          class="bg-slate-500 text-white"
        />
        <span class="text-base font-normal font-sans text-gray-900">Benutzername</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Avatar from 'primevue/avatar';
</script>