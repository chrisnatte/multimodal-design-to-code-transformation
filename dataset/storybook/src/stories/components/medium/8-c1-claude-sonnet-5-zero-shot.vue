<template>
  <div class="w-64 h-screen bg-slate-200 flex flex-col p-4">
    <h1 class="text-2xl font-medium text-slate-700 px-2 py-3">Emails</h1>

    <div class="flex flex-col gap-1 mt-2">
      <div
        class="flex items-center gap-2 px-3 py-2 rounded-md bg-slate-300 cursor-pointer"
      >
        <i class="pi pi-envelope text-slate-600"></i>
        <span class="text-slate-700 font-medium">Postfach</span>
      </div>

      <div
        class="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer hover:bg-slate-300"
      >
        <i class="pi pi-folder text-slate-600"></i>
        <span class="text-slate-700">Ordner</span>
      </div>

      <div
        class="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer hover:bg-slate-300"
      >
        <i class="pi pi-user text-slate-600"></i>
        <span class="text-slate-700">Konto</span>
      </div>
    </div>

    <div class="flex-1"></div>

    <Divider class="my-2" />

    <div class="flex items-center gap-3 px-2 py-2">
      <Avatar label="B" shape="circle" class="bg-slate-500 text-white" />
      <span class="text-slate-700">Benutzername</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Divider from 'primevue/divider'
import Avatar from 'primevue/avatar'

const selectedMenu = ref('Postfach')
</script>