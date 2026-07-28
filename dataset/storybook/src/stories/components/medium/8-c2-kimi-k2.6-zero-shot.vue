<template>
  <div class="flex flex-col h-screen w-64 bg-slate-200 p-6">
    <div class="text-center text-2xl text-slate-700 mb-6">Emails</div>

    <div class="flex flex-col gap-1">
      <Button
        icon="pi pi-inbox"
        label="Postfach"
        variant="text"
        :class="['w-full justify-start rounded-lg', selectedItem === 'Postfach' ? '!bg-slate-100 !text-slate-700' : 'text-slate-500 hover:bg-slate-100/50']"
      />
      <Button
        icon="pi pi-folder"
        label="Ordner"
        variant="text"
        :class="['w-full justify-start rounded-lg', selectedItem === 'Ordner' ? '!bg-slate-100 !text-slate-700' : 'text-slate-500 hover:bg-slate-100/50']"
      />
      <Button
        icon="pi pi-user"
        label="Konto"
        variant="text"
        :class="['w-full justify-start rounded-lg', selectedItem === 'Konto' ? '!bg-slate-100 !text-slate-700' : 'text-slate-500 hover:bg-slate-100/50']"
      />
    </div>

    <div class="flex-grow"></div>

    <Divider class="my-4" />

    <div class="flex items-center gap-3 px-2">
      <Avatar
        label="B"
        shape="circle"
        style="background-color: #64748b; color: #ffffff;"
      />
      <span class="text-slate-700">Benutzername</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Avatar from 'primevue/avatar';

const selectedItem = ref('Postfach');
</script>