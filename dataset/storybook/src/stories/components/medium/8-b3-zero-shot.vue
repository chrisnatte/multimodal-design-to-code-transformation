<template>
  <div class="flex flex-col items-center justify-between gap-6 p-6 bg-[#e2e8f0]">
    <div class="flex flex-col items-center gap-6 w-full">
      <span class="text-2xl font-normal">Emails</span>

      <div class="flex flex-col gap-4">
        <Button
          label="Postfach"
          icon="pi pi-inbox"
          iconPos="left"
          severity="secondary"
          variant="outlined"
        />
        <Button
          label="Ordner"
          icon="pi pi-folder"
          iconPos="left"
          severity="secondary"
          variant="outlined"
        />
        <Button
          label="Konto"
          icon="pi pi-user"
          iconPos="left"
          severity="secondary"
          variant="outlined"
        />
      </div>
    </div>

    <div class="flex flex-col items-center w-full">
      <Divider layout="horizontal" type="solid" />
      <div class="flex items-center gap-4">
        <Avatar label="B" size="large" shape="circle" />
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
  selectedFolder: 'Postfach'
})
</script>