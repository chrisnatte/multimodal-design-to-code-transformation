<template>
  <div class="flex items-center gap-3 p-4">
    <OverlayBadge value="8" severity="success" class="inline-flex">
      <Avatar label="B" shape="circle" size="large" style="background-color: #e2e8f0; color: #64748b" />
    </OverlayBadge>
    <span class="text-base text-gray-900">Benutzername</span>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import OverlayBadge from 'primevue/overlaybadge';
</script>