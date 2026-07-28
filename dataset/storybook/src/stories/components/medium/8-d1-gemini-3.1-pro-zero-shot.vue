<template>
  <div class="w-[240px] h-[512px] bg-[#e2e8f0] p-6 flex flex-col justify-between">
    <div class="flex flex-col gap-6 items-center w-full">
      <span class="text-2xl font-normal font-sans text-slate-800">Emails</span>
      
      <div class="flex flex-col gap-4 w-full">
        <Button 
          severity="secondary" 
          outlined
          class="w-full justify-start bg-slate-50 border-none hover:bg-slate-100 text-slate-700" 
          icon="pi pi-inbox" 
          label="Postfach" 
        />
        <Button 
          severity="secondary" 
          outlined 
          class="w-full justify-start border-none hover:bg-slate-100 text-slate-600" 
          icon="pi pi-folder" 
          label="Ordner" 
        />
        <Button 
          severity="secondary" 
          outlined 
          class="w-full justify-start border-none hover:bg-slate-100 text-slate-600" 
          icon="pi pi-user" 
          label="Konto" 
        />
      </div>
    </div>
    
    <div class="flex flex-col w-full">
      <Divider class="border-slate-500 mb-[15px] mt-0 before:border-slate-400" />
      <div class="flex flex-row items-center gap-4 justify-center">
        <Avatar 
          label="B" 
          size="large" 
          shape="circle" 
          class="bg-slate-500 text-white"
        />
        <span class="text-base font-normal font-sans text-slate-800">Benutzername</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Avatar from 'primevue/avatar'
</script>