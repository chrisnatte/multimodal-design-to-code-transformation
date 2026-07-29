<template>
  <div class="flex h-screen w-64 flex-col justify-between bg-slate-200 p-4">
    <div class="flex flex-col gap-4">
      <h2 class="text-xl text-slate-700">Emails</h2>
      <div class="flex flex-col gap-1">
        <Button
          label="Postfach"
          icon="pi pi-inbox"
          severity="secondary"
          text
          class="w-full !justify-start !bg-slate-300 !text-slate-700"
        />
        <Button
          label="Ordner"
          icon="pi pi-folder"
          severity="secondary"
          text
          class="w-full !justify-start !text-slate-600"
        />
        <Button
          label="Konto"
          icon="pi pi-user"
          severity="secondary"
          text
          class="w-full !justify-start !text-slate-600"
        />
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <Divider class="!my-0" />
      <div class="flex items-center gap-3">
        <Avatar label="B" shape="circle" style="background-color: #6366f1; color: #ffffff" />
        <span class="text-slate-700">Benutzername</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Button from 'primevue/button'
  import Avatar from 'primevue/avatar'
  import Divider from 'primevue/divider'
</script>