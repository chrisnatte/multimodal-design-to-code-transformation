<template>
  <div class="flex flex-col p-6 bg-white w-[288px] h-[560px]">
    <div class="flex flex-col justify-between p-6 bg-slate-200 w-full h-full">
      <div class="flex flex-col gap-6 w-full">
        <span class="text-2xl font-normal text-gray-900">Emails</span>
        <div class="flex flex-col gap-4 w-full">
          <Button 
            label="Postfach" 
            icon="pi pi-inbox" 
            variant="outlined" 
            severity="secondary" 
            class="w-full justify-start bg-slate-100" 
          />
          <Button 
            label="Ordner" 
            icon="pi pi-folder" 
            variant="outlined" 
            severity="secondary" 
            class="w-full justify-start" 
          />
          <Button 
            label="Konto" 
            icon="pi pi-user" 
            variant="outlined" 
            severity="secondary" 
            class="w-full justify-start" 
          />
        </div>
      </div>
      
      <div class="flex flex-col w-full">
        <Divider class="my-3" />
        <div class="flex flex-row items-center gap-4">
          <Avatar 
            label="B" 
            size="large" 
            shape="circle" 
            class="bg-slate-500 text-white" 
          />
          <span class="text-base font-normal text-gray-900">Benutzername</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Avatar from 'primevue/avatar';
</script>