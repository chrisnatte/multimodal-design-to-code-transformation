<template>
  <div class="flex flex-col items-center justify-between gap-6 p-6 w-60 h-128 bg-slate-200">
    <div class="flex flex-col items-center gap-6 w-full">
      <h2 class="text-2xl font-normal">Emails</h2>
      <div class="flex flex-col gap-4 w-48">
        <Button label="Postfach" icon="pi pi-inbox" severity="secondary" variant="outlined" fluid />
        <Button label="Ordner" icon="pi pi-folder" severity="secondary" variant="outlined" fluid />
        <Button label="Konto" icon="pi pi-user" severity="secondary" variant="outlined" fluid />
      </div>
    </div>
    <div class="flex flex-col items-center w-full">
      <Divider class="w-full" />
      <div class="flex flex-row items-center gap-4">
        <Avatar label="B" size="large" shape="circle" />
        <span class="text-base font-normal">Benutzername</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';
import Divider from 'primevue/divider';
</script>