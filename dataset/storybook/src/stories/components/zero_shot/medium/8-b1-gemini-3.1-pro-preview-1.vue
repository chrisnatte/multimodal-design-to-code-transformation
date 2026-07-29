<template>
  <div class="p-6 bg-white flex flex-col w-fit">
    <div class="w-[240px] h-[512px] bg-slate-200 p-6 flex flex-col justify-between">
      
      <!-- Top Section -->
      <div class="flex flex-col items-center gap-6 w-full">
        <span class="text-2xl font-normal font-sans text-gray-900">Emails</span>
        
        <div class="flex flex-col gap-4 w-full">
          <Button 
            label="Postfach" 
            icon="pi pi-inbox" 
            severity="secondary" 
            outlined 
            class="w-full bg-slate-100" 
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

      <!-- Bottom Section -->
      <div class="flex flex-col items-center w-full">
        <Divider class="w-full" />
        
        <div class="flex flex-row items-center gap-4 mt-2">
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
  </div>
</template>

<script setup>
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Avatar from 'primevue/avatar'
</script>