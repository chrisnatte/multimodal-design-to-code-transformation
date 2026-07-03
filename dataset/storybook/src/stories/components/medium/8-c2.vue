<template>
  <div class="min-h-screen bg-gray-100 flex items-start p-6">
    <div class="w-60 h-[640px] bg-slate-200 flex flex-col justify-between px-6 py-8">
      <div class="flex flex-col gap-8">
        <div class="text-center">
          <h1 class="text-5xl font-medium text-slate-700">Emails</h1>
        </div>

        <div class="flex flex-col gap-4">
          <Button
            label="Postfach"
            icon="pi pi-inbox"
            variant="text"
            class="justify-start !bg-slate-100 !text-slate-500 !rounded-md !px-4 !py-3 w-full"
          />
          <Button
            label="Ordner"
            icon="pi pi-folder"
            variant="text"
            class="justify-start !text-slate-500 !px-4 !py-3 w-full"
          />
          <Button
            label="Konto"
            icon="pi pi-user"
            variant="text"
            class="justify-start !text-slate-500 !px-4 !py-3 w-full"
          />
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <Divider class="!m-0" />
        <div class="flex items-center gap-4">
          <Avatar label="B" shape="circle" size="xlarge" class="!bg-slate-600 !text-slate-100" />
          <span class="text-3xl text-slate-700">Benutzername</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Avatar from 'primevue/avatar';

const state = reactive({
  activeItem: 'Postfach'
});
</script>