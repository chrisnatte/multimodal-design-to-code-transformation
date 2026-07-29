<template>
  <div class="w-64 h-screen bg-slate-200 flex flex-col justify-between p-4">
    <div class="flex flex-col gap-4">
      <h2 class="text-xl font-medium text-slate-700 px-2">Emails</h2>

      <div class="flex flex-col gap-1">
        <Button
          label="Postfach"
          icon="pi pi-inbox"
          text
          class="!justify-start !text-slate-700 !bg-slate-100 !rounded-md"
          :class="{ '!bg-slate-300': activeItem === 'postfach' }"
          @click="activeItem = 'postfach'"
        />
        <Button
          label="Ordner"
          icon="pi pi-folder"
          text
          class="!justify-start !text-slate-600 !rounded-md"
          @click="activeItem = 'ordner'"
        />
        <Button
          label="Konto"
          icon="pi pi-user"
          text
          class="!justify-start !text-slate-600 !rounded-md"
          @click="activeItem = 'konto'"
        />
      </div>
    </div>

    <div class="flex flex-col gap-3">
      <Divider class="!my-0" />
      <div class="flex items-center gap-2 px-2">
        <Avatar label="B" shape="circle" class="!bg-indigo-400 !text-white" />
        <span class="text-slate-700">{{ benutzername }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Avatar from 'primevue/avatar';

const activeItem = ref('postfach');
const benutzername = ref('Benutzername');
</script>