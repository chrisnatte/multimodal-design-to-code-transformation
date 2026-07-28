<template>
  <div class="flex items-center gap-4">
    <Avatar
      label="B"
      size="xlarge"
      shape="circle"
      class="bg-blue-100 text-gray-700"
    >
      <OverlayBadge value="8" severity="success" />
    </Avatar>
    <span class="text-xl text-gray-900">Benutzername</span>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar'
import OverlayBadge from 'primevue/overlaybadge'
</script>