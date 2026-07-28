<template>
  <div class="flex items-center gap-4">
    <div class="relative">
      <Avatar label="B" shape="circle" class="h-14 w-14 text-[28px] text-slate-700" />
      <Badge value="8" severity="success" class="absolute -right-2 -top-2" />
    </div>
    <span class="text-xl font-normal text-black">Benutzername</span>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'
</script>