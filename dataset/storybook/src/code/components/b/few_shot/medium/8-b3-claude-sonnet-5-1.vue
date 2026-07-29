<template>
  <div class="w-72 bg-white p-6">
    <div class="flex h-[512px] flex-col justify-between gap-6 bg-slate-100 p-6">
      <div class="flex flex-col items-center gap-6">
        <h1 class="text-2xl">Emails</h1>
        <div class="flex w-full flex-col gap-4">
          <Button label="Postfach" icon="pi pi-inbox" severity="secondary" outlined class="w-full !justify-start" />
          <Button label="Ordner" icon="pi pi-folder" severity="secondary" outlined class="w-full !justify-start" />
          <Button label="Konto" icon="pi pi-user" severity="secondary" outlined class="w-full !justify-start" />
        </div>
      </div>
      <div class="flex w-full flex-col items-center gap-0">
        <Divider />
        <div class="flex items-center gap-4 pt-4">
          <Avatar label="B" size="large" shape="circle" />
          <span class="text-base">Benutzername</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Button from 'primevue/button'
  import Divider from 'primevue/divider'
  import Avatar from 'primevue/avatar'
</script>