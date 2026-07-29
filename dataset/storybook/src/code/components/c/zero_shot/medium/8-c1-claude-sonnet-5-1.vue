<template>
  <div class="w-64 h-screen bg-slate-200 flex flex-col justify-between p-4">
    <div class="flex flex-col gap-2">
      <h1 class="text-2xl text-slate-700 px-2 py-3">Emails</h1>
      <ul class="flex flex-col gap-1 list-none p-0 m-0">
        <li>
          <Button
            label="Postfach"
            icon="pi pi-inbox"
            text
            class="w-full justify-start bg-slate-300 text-slate-600 rounded-md"
          />
        </li>
        <li>
          <Button
            label="Ordner"
            icon="pi pi-folder"
            text
            class="w-full justify-start text-slate-600 rounded-md"
          />
        </li>
        <li>
          <Button
            label="Konto"
            icon="pi pi-user"
            text
            class="w-full justify-start text-slate-600 rounded-md"
          />
        </li>
      </ul>
    </div>

    <div class="flex flex-col gap-3">
      <Divider class="m-0" />
      <div class="flex items-center gap-3 px-2 py-2">
        <Avatar label="B" shape="circle" class="bg-slate-500 text-white" />
        <span class="text-slate-700">{{ username }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Avatar from 'primevue/avatar'

const username = ref('Benutzername')
</script>