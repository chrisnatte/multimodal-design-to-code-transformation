<template>
  <div class="flex items-center gap-4 p-6">
    <div class="relative">
      <Avatar label="B" shape="circle" size="large" />
      <Badge
        value="8"
        severity="success"
        class="absolute -right-1 -top-1"
      />
    </div>
    <span class="text-xl text-surface-900">Benutzername</span>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'
</script>