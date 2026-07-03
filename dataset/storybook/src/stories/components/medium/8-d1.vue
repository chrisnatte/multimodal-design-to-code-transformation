<template>
  <div class="w-[240px] h-[512px] bg-slate-200 p-6 flex flex-col justify-between">
    <div class="flex flex-col items-center gap-6 w-full">
      <h1 class="text-[40px] leading-none font-normal text-slate-700">Emails</h1>

      <div class="flex flex-col gap-4 w-full">
        <Button
          label="Postfach"
          icon="pi pi-inbox"
          outlined
          severity="secondary"
          class="w-full justify-start"
        />
        <Button
          label="Ordner"
          icon="pi pi-folder"
          text
          severity="secondary"
          class="w-full justify-start"
        />
        <Button
          label="Konto"
          icon="pi pi-user"
          text
          severity="secondary"
          class="w-full justify-start"
        />
      </div>
    </div>

    <div class="w-full flex flex-col items-center gap-4">
      <Divider class="w-full m-0" />
      <div class="flex items-center gap-4 w-full px-3">
        <Avatar label="B" shape="circle" size="large" />
        <span class="text-slate-700 text-[30px]">Benutzername</span>
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
  selected: 'Postfach'
})
</script>