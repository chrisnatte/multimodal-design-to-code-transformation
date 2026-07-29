<template>
  <div class="flex flex-col w-72 min-h-[600px] bg-[#eef2f6] p-6 font-sans">
    <h2 class="text-2xl text-slate-700 text-center font-medium mt-4 mb-8">Emails</h2>

    <div class="flex flex-col gap-2 flex-grow">
      <Button
        icon="pi pi-inbox"
        label="Postfach"
        variant="text"
        class="w-full justify-start gap-3 px-4 py-3 bg-white text-slate-700 rounded-lg shadow-sm hover:bg-white"
      />
      <Button
        icon="pi pi-folder"
        label="Ordner"
        variant="text"
        class="w-full justify-start gap-3 px-4 py-3 text-slate-500 hover:bg-slate-200/50 rounded-lg"
      />
      <Button
        icon="pi pi-user"
        label="Konto"
        variant="text"
        class="w-full justify-start gap-3 px-4 py-3 text-slate-500 hover:bg-slate-200/50 rounded-lg"
      />
    </div>

    <Divider class="border-slate-300 my-6" />

    <div class="flex items-center gap-4 px-2 mb-4">
      <Avatar label="B" shape="circle" size="large" class="bg-[#64748b] text-white" />
      <span class="text-slate-700 font-medium text-lg">Benutzername</span>
    </div>
  </div>
</template>

<script setup>
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Avatar from 'primevue/avatar';
</script>