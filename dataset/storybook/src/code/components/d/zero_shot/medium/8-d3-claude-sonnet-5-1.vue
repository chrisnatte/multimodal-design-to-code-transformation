<template>
  <div class="p-6 bg-white inline-block">
    <div class="flex flex-col justify-between gap-6 p-6 bg-slate-200 items-center w-60">
      <div class="flex flex-col gap-6 w-full items-center">
        <span class="text-2xl">Emails</span>
        <div class="flex flex-col gap-4 w-full">
          <Button
            label="Postfach"
            icon="pi pi-inbox"
            severity="secondary"
            outlined
            class="w-full justify-start bg-slate-100"
          />
          <Button
            label="Ordner"
            icon="pi pi-folder"
            severity="secondary"
            outlined
            class="w-full justify-start"
          />
          <Button
            label="Konto"
            icon="pi pi-user"
            severity="secondary"
            outlined
            class="w-full justify-start"
          />
        </div>
      </div>
      <div class="flex flex-col gap-0 w-full items-center">
        <Divider />
        <div class="flex items-center gap-4 w-full">
          <Avatar label="B" size="large" shape="circle" style="background-color: #64748b; color: #fff" />
          <span class="text-base">{{ benutzername }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Avatar from 'primevue/avatar';

const benutzername = ref('Benutzername');
</script>