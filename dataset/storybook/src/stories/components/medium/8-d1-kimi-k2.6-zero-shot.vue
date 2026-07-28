<template>
  <div class="flex flex-col justify-between items-center p-6 bg-slate-200 w-60 h-[512px]">
    <div class="flex flex-col items-center gap-6 w-full">
      <h1 class="text-2xl font-normal text-slate-700">Emails</h1>
      <div class="flex flex-col gap-4 w-48">
        <Button
          label="Postfach"
          icon="pi pi-inbox"
          outlined
          severity="secondary"
          :class="['w-full justify-start', { '!bg-slate-100': activeItem === 'Postfach' }]"
        />
        <Button
          label="Ordner"
          icon="pi pi-folder"
          outlined
          severity="secondary"
          class="w-full justify-start"
        />
        <Button
          label="Konto"
          icon="pi pi-user"
          outlined
          severity="secondary"
          class="w-full justify-start"
        />
      </div>
    </div>
    <div class="flex flex-col items-center w-full">
      <Divider class="w-full py-3.5" />
      <div class="flex items-center gap-4">
        <Avatar label="B" shape="circle" size="large" class="bg-slate-500 text-white" />
        <span class="text-base text-slate-700">Benutzername</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Avatar from 'primevue/avatar';

const activeItem = ref('Postfach');
</script>