<template>
  <div class="w-[240px] h-[512px] bg-slate-200 p-6 flex flex-col justify-between rounded-md">
    <!-- Top Section -->
    <div class="flex flex-col gap-6 items-stretch w-full">
      <div class="text-2xl font-normal text-slate-800 text-center m-0">
        Emails
      </div>
      
      <div class="flex flex-col gap-4">
        <Button 
          icon="pi pi-inbox" 
          label="Postfach" 
          variant="text" 
          class="w-full justify-start bg-slate-100 !text-slate-800 border-none font-medium px-4 py-2" 
        />
        <Button 
          icon="pi pi-folder" 
          label="Ordner" 
          variant="text" 
          class="w-full justify-start text-slate-600 hover:bg-slate-100 border-none font-medium px-4 py-2" 
        />
        <Button 
          icon="pi pi-user" 
          label="Konto" 
          variant="text" 
          class="w-full justify-start text-slate-600 hover:bg-slate-100 border-none font-medium px-4 py-2" 
        />
      </div>
    </div>
    
    <!-- Bottom Section -->
    <div class="flex flex-col w-full gap-2">
      <Divider />
      <div class="flex items-center gap-4">
        <Avatar 
          label="B" 
          size="large" 
          shape="circle" 
          class="bg-slate-500 text-white" 
        />
        <span class="text-base text-slate-700">Benutzername</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Avatar from 'primevue/avatar';
</script>