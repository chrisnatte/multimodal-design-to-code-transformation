<template>
  <div class="w-64 h-screen bg-slate-200 flex flex-col p-4">
    <h2 class="text-xl font-semibold text-gray-700 px-2 mb-4">Emails</h2>

    <div class="flex flex-col gap-1">
      <Button
        label="Postfach"
        icon="pi pi-inbox"
        variant="text"
        class="!justify-start !text-gray-700 !bg-slate-100 w-full"
      />
      <Button
        label="Ordner"
        icon="pi pi-folder"
        variant="text"
        class="!justify-start !text-gray-700 w-full"
      />
      <Button
        label="Konto"
        icon="pi pi-user"
        variant="text"
        class="!justify-start !text-gray-700 w-full"
      />
    </div>

    <div class="flex-grow"></div>

    <Divider class="!my-2" />

    <div class="flex items-center gap-2 px-2 py-2">
      <Avatar label="B" shape="circle" style="background-color: #64748b; color: #ffffff" />
      <span class="text-gray-700">{{ username }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Avatar from 'primevue/avatar';

const username = ref('Benutzername');
</script>