<template>
  <div class="flex flex-col justify-between w-[240px] h-[512px] bg-[#E2E8F0] p-6 box-border font-sans">
    
    <!-- Top Section: Title and Nav Items -->
    <div class="flex flex-col gap-6 w-full items-stretch">
      <h1 class="text-2xl font-normal text-center m-0 text-slate-700">Emails</h1>
      
      <div class="flex flex-col gap-4 w-full">
        <Button 
          label="Postfach" 
          icon="pi pi-inbox" 
          class="w-full justify-start bg-slate-100 text-slate-700 border-none shadow-none hover:bg-slate-200" 
        />
        <Button 
          label="Ordner" 
          icon="pi pi-folder" 
          variant="text" 
          severity="secondary" 
          class="w-full justify-start text-slate-600 hover:bg-transparent" 
        />
        <Button 
          label="Konto" 
          icon="pi pi-user" 
          variant="text" 
          severity="secondary" 
          class="w-full justify-start text-slate-600 hover:bg-transparent" 
        />
      </div>
    </div>

    <!-- Bottom Section: Divider and User Info -->
    <div class="flex flex-col w-full gap-4">
      <Divider class="before:border-slate-400 m-0" />
      
      <div class="flex flex-row items-center gap-4 justify-start px-2">
        <Avatar 
          label="B" 
          size="large" 
          shape="circle" 
          class="bg-[#64748B] text-white" 
        />
        <span class="text-base font-normal text-slate-700">Benutzername</span>
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