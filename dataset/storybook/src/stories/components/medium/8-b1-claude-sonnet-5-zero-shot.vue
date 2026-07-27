<template>
  <div
    class="flex flex-col justify-between items-center gap-6 p-6"
    style="background-color: rgb(226, 232, 240); width: 240px; height: 512px;"
  >
    <!-- Column: Emails + List -->
    <div class="flex flex-col items-center gap-6 w-full">
      <span class="text-2xl">Emails</span>

      <div class="flex flex-col gap-4 w-48">
        <Button
          label="Postfach"
          icon="pi pi-inbox"
          severity="secondary"
          outlined
          class="w-full justify-start"
        />
        <Button
          label="Ordner"
          icon="pi pi-folder"
          severity="secondary"
          outlined
          class="w-full justify-start"
        />
        <Button
          label="Konto"
          icon="pi pi-user"
          severity="secondary"
          outlined
          class="w-full justify-start"
        />
      </div>
    </div>

    <!-- Column: Divider + Avatar/Username -->
    <div class="flex flex-col items-center w-full">
      <Divider />
      <div class="flex items-center gap-4">
        <Avatar label="B" size="large" shape="circle" style="background-color: rgb(100, 116, 139); color: #ffffff;" />
        <span class="text-base">Benutzername</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Avatar from 'primevue/avatar'

const postfachState = ref('Active')
const ordnerState = ref('Idle')
const kontoState = ref('Idle')
const username = ref('Benutzername')
</script>