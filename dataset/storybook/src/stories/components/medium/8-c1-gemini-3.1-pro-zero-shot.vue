<template>
  <div class="w-[300px] h-[600px] bg-[#e9edf4] p-6 flex flex-col font-sans">
    <!-- Header -->
    <h1 class="text-2xl text-slate-700 text-center mb-8 mt-4">Emails</h1>

    <!-- Navigation -->
    <div class="flex flex-col gap-2">
      <Button
        icon="pi pi-inbox"
        label="Postfach"
        class="w-full justify-start bg-white text-slate-600 border-none shadow-none hover:bg-white rounded-lg px-4 py-3 font-normal"
      />
      <Button
        icon="pi pi-folder"
        label="Ordner"
        text
        class="w-full justify-start text-slate-600 hover:bg-white/50 rounded-lg px-4 py-3 font-normal"
      />
      <Button
        icon="pi pi-user"
        label="Konto"
        text
        class="w-full justify-start text-slate-600 hover:bg-white/50 rounded-lg px-4 py-3 font-normal"
      />
    </div>

    <!-- Spacer -->
    <div class="flex-grow"></div>

    <!-- Divider -->
    <Divider class="before:border-slate-400 my-6" />

    <!-- User Profile -->
    <div class="flex items-center gap-4 px-2 pb-4">
      <Avatar label="B" shape="circle" class="bg-[#6b7a90] text-white w-12 h-12 text-xl" />
      <span class="text-slate-700 text-lg">Benutzername</span>
    </div>
  </div>
</template>

<script setup>
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Avatar from 'primevue/avatar';
</script>