<template>
  <div class="p-6 bg-white w-[288px] h-[560px]">
    <div class="flex flex-col justify-between items-center bg-[#e2e8f0] p-6 w-full h-full">
      <div class="flex flex-col items-center gap-6 w-full">
        <span class="font-inter font-normal text-2xl text-gray-800">Emails</span>
        
        <div class="flex flex-col gap-4 w-full">
          <Button 
            label="Postfach" 
            icon="pi pi-inbox" 
            severity="secondary" 
            class="w-full justify-start bg-[#f1f5f9] border-none text-gray-800 font-medium" 
          />
          <Button 
            label="Ordner" 
            icon="pi pi-folder" 
            severity="secondary" 
            text 
            class="w-full justify-start text-gray-600 font-medium" 
          />
          <Button 
            label="Konto" 
            icon="pi pi-user" 
            severity="secondary" 
            text 
            class="w-full justify-start text-gray-600 font-medium" 
          />
        </div>
      </div>

      <div class="flex flex-col items-center w-full">
        <Divider class="w-full border-gray-500" />
        
        <div class="flex flex-row items-center gap-4 mt-4">
          <Avatar 
            label="B" 
            size="large" 
            shape="circle" 
            class="bg-[#64748b] text-white" 
          />
          <span class="font-inter font-normal text-base text-gray-800">Benutzername</span>
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