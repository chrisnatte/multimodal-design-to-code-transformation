<template>
  <div class="flex flex-col items-center justify-between gap-6 p-6 bg-slate-200">
    <div class="flex flex-col items-center gap-6 w-full">
      <h1 class="text-2xl font-normal">Emails</h1>
      <div class="flex flex-col gap-4">
        <Button
          label="Postfach"
          icon="pi pi-inbox"
          severity="secondary"
          outlined
        />
        <Button
          label="Ordner"
          icon="pi pi-folder"
          severity="secondary"
          outlined
        />
        <Button
          label="Konto"
          icon="pi pi-user"
          severity="secondary"
          outlined
        />
      </div>
    </div>

    <div class="flex flex-col items-center w-full">
      <Divider />
      <div class="flex items-center gap-4">
        <Avatar label="B" size="xlarge" shape="circle" />
        <span class="text-base font-normal">Benutzername</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Avatar from 'primevue/avatar'

const state = reactive({
  user: {
    initial: 'B',
    name: 'Benutzername'
  }
})
</script>