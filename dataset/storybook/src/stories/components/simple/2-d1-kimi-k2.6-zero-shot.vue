<template>
  <div class="flex items-center gap-4">
    <div class="relative inline-flex">
      <Avatar label="B" size="xlarge" shape="circle" class="!bg-slate-200 text-slate-600 w-14 h-14" />
      <Badge value="8" severity="success" class="absolute -top-2.5 -right-2.5" />
    </div>
    <span class="text-xl text-slate-900">Benutzername</span>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'
</script>