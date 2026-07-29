<template>
  <div class="flex flex-col w-[280px] h-[600px] bg-[#e8edf2] p-6 font-sans">
    <h1 class="text-2xl text-center text-slate-700 mb-8 mt-4 font-medium">Emails</h1>

    <div class="flex flex-col gap-2">
      <Button
        label="Postfach"
        icon="pi pi-inbox"
        class="w-full !justify-start !bg-white !text-slate-700 !border-none !shadow-none !rounded-lg !px-4 !py-3"
      />
      <Button
        label="Ordner"
        icon="pi pi-folder"
        variant="text"
        class="w-full !justify-start !text-slate-600 !px-4 !py-3"
      />
      <Button
        label="Konto"
        icon="pi pi-user"
        variant="text"
        class="w-full !justify-start !text-slate-600 !px-4 !py-3"
      />
    </div>

    <div class="flex-grow"></div>

    <Divider class="!my-6 !border-slate-400/50" />

    <div class="flex items-center gap-4 px-2 mb-2">
      <Avatar
        label="B"
        shape="circle"
        size="large"
        class="!bg-[#64748b] !text-white"
      />
      <span class="text-slate-700 font-medium">Benutzername</span>
    </div>
  </div>
</template>

<script setup>
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Avatar from 'primevue/avatar';
</script>