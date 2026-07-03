<template>
  <div class="flex flex-col items-center justify-between gap-6 p-6">
    <div class="flex w-full flex-col items-center gap-6">
      <h1 class="text-2xl font-normal">Emails</h1>
      <div class="flex flex-col gap-4">
        <Button label="Postfach" severity="secondary" outlined />
        <Button label="Ordner" severity="secondary" outlined />
        <Button label="Konto" severity="secondary" outlined />
      </div>
    </div>

    <div class="flex w-full flex-col items-center">
      <Divider />
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

const form = reactive({})
</script>