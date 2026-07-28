<template>
  <div class="flex items-center gap-4 p-6">
    <div class="relative">
      <Avatar label="B" shape="circle" class="!h-14 !w-14 !bg-slate-200 !text-3xl !text-slate-700" />
      <Badge value="8" severity="success" class="absolute -right-1 -top-1" />
    </div>
    <span class="text-xl text-surface-900">Benutzername</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'

const username = ref('Benutzername')
</script>