<template>
  <div class="p-6 bg-white flex flex-col">
    <div class="flex flex-col items-center gap-6 p-6 justify-between" style="background-color: rgb(226,232,240); width: 240px;">
      <div class="w-full flex flex-col items-center gap-6">
        <span class="text-2xl">Emails</span>
        <div class="w-full flex flex-col gap-4">
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

      <div class="w-full flex flex-col items-center">
        <Divider />
        <div class="flex items-center gap-4">
          <Avatar label="B" size="large" shape="circle" style="background-color: rgb(100,116,139); color: white;" />
          <span class="text-base">Benutzername</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Avatar from 'primevue/avatar'
</script>