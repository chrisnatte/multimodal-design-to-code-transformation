<template>
  <div class="flex flex-col items-center justify-between p-6 gap-6 bg-slate-200 w-60 h-[32rem]">
    <div class="flex flex-col items-center gap-6 w-full">
      <span class="text-2xl font-normal">Emails</span>
      <div class="flex flex-col gap-4 w-full">
        <Button label="Postfach" icon="pi pi-inbox" severity="secondary" variant="outlined" class="w-full" />
        <Button label="Ordner" icon="pi pi-folder" severity="secondary" variant="outlined" class="w-full" />
        <Button label="Konto" icon="pi pi-user" severity="secondary" variant="outlined" class="w-full" />
      </div>
    </div>
    <div class="flex flex-col items-center w-full">
      <Divider class="w-full" />
      <div class="flex items-center gap-4">
        <Avatar label="B" size="large" shape="circle" style="background-color: #64748B; color: #ffffff" />
        <span class="text-base font-normal">Benutzername</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
</script>