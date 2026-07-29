<template>
  <div class="flex w-fit flex-col bg-white p-6">
    <div class="flex items-center gap-4">
      <div class="relative">
        <Avatar label="B" size="xlarge" shape="circle" />
        <Badge value="8" severity="success" class="absolute -right-2 -top-2" />
      </div>
      <span class="text-xl">Benutzername</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'
</script>