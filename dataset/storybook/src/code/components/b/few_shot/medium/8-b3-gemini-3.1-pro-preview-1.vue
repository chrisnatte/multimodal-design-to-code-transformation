<template>
  <div class="w-[288px] h-[560px] p-6 bg-white">
    <div class="flex flex-col justify-between h-full w-full p-6 bg-slate-200">
      <div class="flex flex-col gap-6">
        <span class="text-2xl font-normal text-black">Emails</span>
        <div class="flex flex-col gap-4">
          <Button 
            label="Postfach" 
            icon="pi pi-inbox" 
            severity="secondary" 
            outlined 
            class="!bg-slate-100 !justify-start" 
          />
          <Button 
            label="Ordner" 
            icon="pi pi-folder" 
            severity="secondary" 
            outlined 
            class="!justify-start" 
          />
          <Button 
            label="Konto" 
            icon="pi pi-user" 
            severity="secondary" 
            outlined 
            class="!justify-start" 
          />
        </div>
      </div>
      <div class="flex flex-col">
        <Divider />
        <div class="flex items-center gap-4 mt-2">
          <Avatar label="B" size="large" shape="circle" />
          <span class="text-base text-black">Benutzername</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Avatar from 'primevue/avatar'
</script>