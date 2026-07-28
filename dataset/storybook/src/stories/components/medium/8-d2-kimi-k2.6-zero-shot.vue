<template>
  <div class="flex flex-col items-center justify-between gap-6 p-6 w-60 h-[512px] bg-slate-200">
    <div class="flex flex-col items-center gap-6 w-full">
      <span class="text-2xl font-normal text-slate-700">Emails</span>
      <div class="flex flex-col gap-4 w-full">
        <Button label="Postfach" icon="pi pi-inbox" severity="secondary" variant="outlined" class="w-full !justify-start !bg-slate-100" />
        <Button label="Ordner" icon="pi pi-folder" severity="secondary" variant="outlined" class="w-full !justify-start" />
        <Button label="Konto" icon="pi pi-user" severity="secondary" variant="outlined" class="w-full !justify-start" />
      </div>
    </div>
    <div class="flex flex-col w-full">
      <Divider />
      <div class="flex items-center gap-4">
        <Avatar label="B" shape="circle" size="large" class="!bg-slate-500 !text-white" />
        <span class="text-base font-normal text-slate-700">Benutzername</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Avatar from 'primevue/avatar'
</script>