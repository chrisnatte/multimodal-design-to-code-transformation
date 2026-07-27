<template>
  <div class="flex flex-col items-center justify-between w-60 h-[32rem] bg-slate-200 p-6">
    <div class="flex flex-col items-center gap-6 w-full">
      <span class="text-2xl font-normal">Emails</span>
      <div class="flex flex-col gap-4 w-48">
        <Button icon="pi pi-inbox" label="Postfach" outlined severity="secondary" class="w-full" />
        <Button icon="pi pi-folder" label="Ordner" outlined severity="secondary" class="w-full" />
        <Button icon="pi pi-user" label="Konto" outlined severity="secondary" class="w-full" />
      </div>
    </div>
    <div class="flex flex-col items-center w-full">
      <Divider layout="horizontal" class="w-full" />
      <div class="flex flex-row items-center gap-4">
        <Avatar label="B" shape="circle" size="large" class="bg-slate-500 text-white" />
        <span class="text-base font-normal">Benutzername</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Avatar from 'primevue/avatar'
import Divider from 'primevue/divider'
</script>