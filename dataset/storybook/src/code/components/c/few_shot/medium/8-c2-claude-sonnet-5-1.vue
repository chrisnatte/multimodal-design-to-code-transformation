<template>
  <div class="flex h-screen w-64 flex-col justify-between bg-slate-200 p-4">
    <div class="flex flex-col gap-4">
      <h1 class="px-2 text-xl">Emails</h1>
      <div class="flex flex-col gap-1">
        <Button
          label="Postfach"
          icon="pi pi-inbox"
          severity="secondary"
          class="w-full !justify-start bg-slate-300/60"
        />
        <Button label="Ordner" icon="pi pi-folder" severity="secondary" variant="text" class="w-full !justify-start" />
        <Button label="Konto" icon="pi pi-user" severity="secondary" variant="text" class="w-full !justify-start" />
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <Divider class="!m-0" />
      <div class="flex items-center gap-3 px-2">
        <Avatar label="B" shape="circle" />
        <span>Benutzername</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Avatar from 'primevue/avatar'
  import Button from 'primevue/button'
  import Divider from 'primevue/divider'
</script>