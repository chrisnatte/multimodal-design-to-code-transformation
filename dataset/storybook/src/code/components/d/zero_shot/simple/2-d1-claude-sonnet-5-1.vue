<template>
  <div class="p-6 bg-white inline-block">
    <div class="flex items-center gap-4">
      <div class="relative inline-block">
        <Avatar
          label="B"
          size="xlarge"
          shape="circle"
          class="bg-blue-100 text-gray-700"
        />
        <Badge value="8" severity="success" class="absolute -top-1 -right-1"></Badge>
      </div>
      <span class="text-xl text-gray-900">Benutzername</span>
    </div>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import Badge from 'primevue/badge';
</script>