<template>
  <div class="flex flex-col p-6 bg-white w-[288px] h-[560px]">
    <div class="flex flex-col justify-between p-6 bg-[#e2e8f0] h-full w-full gap-6">
      
      <div class="flex flex-col gap-6 w-full items-center">
        <span class="text-2xl font-normal font-sans text-gray-900">Emails</span>
        
        <div class="flex flex-col gap-4 w-full">
          <Button 
            label="Postfach" 
            icon="pi pi-inbox" 
            severity="secondary" 
            variant="outlined" 
            class="w-full bg-[#f1f5f9]" 
          />
          <Button 
            label="Ordner" 
            icon="pi pi-folder" 
            severity="secondary" 
            variant="outlined" 
            class="w-full" 
          />
          <Button 
            label="Konto" 
            icon="pi pi-user" 
            severity="secondary" 
            variant="outlined" 
            class="w-full" 
          />
        </div>
      </div>

      <div class="flex flex-col w-full">
        <Divider />
        
        <div class="flex flex-row items-center gap-4 justify-center">
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
  </div>
</template>

<script setup>
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Avatar from 'primevue/avatar';
</script>